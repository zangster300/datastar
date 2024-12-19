package smoketests

import (
	"testing"

	"github.com/go-rod/rod"
	"github.com/stretchr/testify/assert"
)

func TestExampleDbmon(t *testing.T) {
	setupPageTest(t, "examples/dbmon", func(runner runnerFn) {
		runner("database monitoring", func(t *testing.T, page *rod.Page) {

			selector := "#dbmon > table"
			initial := page.MustElement(selector).MustHTML()

			page.MustWait("() => document.querySelector(`" + selector + "`).innerHTML !== `" + initial + "`")

			result := page.MustElement(selector).MustHTML()

			assert.NotEqual(t, initial, result)
		})
	})
}
