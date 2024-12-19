package smoketests

import (
	"testing"

	"github.com/go-rod/rod"
	"github.com/go-rod/rod/lib/proto"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestExampleSortable(t *testing.T) {
	setupPageTest(t, "examples/sortable", func(runner runnerFn) {
		// DOM helper to see coords of items
		// document.addEventListener("mousemove", (e) => console.log({x: e.clientX, y: e.clientY}))
		runner("click and drag", func(t *testing.T, page *rod.Page) {
			page.MustWindowMaximize()
			initialSelector := "#sortContainer > div:nth-of-type(1)"
			initial := page.MustElement(initialSelector).MustText()
			// t.Logf("initial: [%s]", initial)

			initialItemShape := page.MustElement(initialSelector).MustShape().Box()
			// t.Logf(`Initial Item's Position: (%.2f, %.2f)`, initialItemShape.X, initialItemShape.Y)

			targetItemShape := page.MustElement("#sortContainer > div:nth-of-type(2)").MustShape().Box()
			// t.Logf(`Target Item's Position: (%.2f, %.2f)`, targetItemShape.X, targetItemShape.Y)

			// mouse starts at (0,0)
			mouse := page.Mouse
			err := mouse.MoveTo(proto.NewPoint(targetItemShape.X+10.0, targetItemShape.Y+10.0))
			require.NoError(t, err)

			// t.Logf("mouse position update: (%.2f, %.2f)", mouse.Position().X, mouse.Position().Y)
			// t.Log("mouse down")
			mouse.MustDown("left")

			mouse.MoveLinear(proto.NewPoint(initialItemShape.X+10.0, initialItemShape.Y+10.0), 5)
			// t.Logf("mouse position update: (%.2f, %.2f)", mouse.Position().X, mouse.Position().Y)

			// t.Log("mouse up")
			mouse.MustUp("left")

			result := page.MustElement(initialSelector).MustText()
			// t.Logf("result: [%s]", result)

			assert.NotEqual(t, initial, result)
		})
	})
}
