# Signals Change Path

Tests that a signal change with a path is detected.

<div data-signals="{foo: {bar: 0}, result: 0}" data-on-signals-change-foo="$result = $foo.bar">
  <button data-on-click="$foo.bar = 1" class="btn">Change</button>
  <hr />
  Result:
  <code id="result" data-text="$result"></code>
  <hr />
  Expected result on click: <code>1</code>
</div>