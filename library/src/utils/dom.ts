import { DATASTAR } from '../engine/consts'
import type { HTMLorSVGElement } from '../engine/types'

export class Hash {
  #value = 0
  #prefix: string

  constructor(prefix = DATASTAR) {
    this.#prefix = prefix
  }

  with(x: number | string): Hash {
    if (typeof x === 'string') {
      for (const c of x.split('')) {
        this.with(c.charCodeAt(0))
      }
    } else {
      this.#value = (this.#value << 5) - this.#value + x
    }
    return this
  }

  get value() {
    return this.#prefix + Math.abs(this.#value).toString(36)
  }
}

export function elUniqId(el: Element) {
  if (el.id) return el.id
  const hash = new Hash()

  let currentEl = el
  while (currentEl) {
    if (currentEl.id) {
      hash.with(currentEl.id)
      break
    }
    const p = currentEl?.parentNode
    if (!p) {
      hash.with(currentEl.tagName)
    } else {
      hash.with([...p.children].indexOf(currentEl))
    }

    currentEl = p as Element
  }
  return hash.value
}

export function walkDOM(
  element: Element | null,
  callback: (el: HTMLorSVGElement) => void,
) {
  if (
    !element ||
    !(element instanceof HTMLElement || element instanceof SVGElement)
  ) {
    return null
  }
  const dataset = element.dataset
  if ('starIgnore' in dataset) {
    return null
  }
  if (!('starIgnore__self' in dataset)) {
    callback(element)
  }
  let el = element.firstElementChild
  while (el) {
    walkDOM(el, callback)
    el = el.nextElementSibling
  }
}
