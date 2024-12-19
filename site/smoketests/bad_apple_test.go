package smoketests

import (
	"testing"

	"github.com/go-rod/rod"
	"github.com/stretchr/testify/assert"
)

func TestExampleBadApple(t *testing.T) {
	setupPageTest(t, "examples/bad_apple", func(runner runnerFn) {
		runner("bad apple 30fps", func(t *testing.T, page *rod.Page) {
			selector := "#contents > div > pre"
			initial := page.MustElement(selector).MustText()

			page.MustWait(`() => document.querySelector("` + selector + `").innerText.includes("@")`)

			result := page.MustElement(selector).MustText()

			assert.NotEqual(t, initial, result)
		})
	})

}
