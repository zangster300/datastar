package smoketests

import (
	"testing"

	"github.com/go-rod/rod"
	"github.com/stretchr/testify/assert"
)

func TestExampleDialogsBrowser(t *testing.T) {
	setupPageTest(t, "examples/dialogs_browser", func(runner runnerFn) {
		runner("launch dialog", func(t *testing.T, page *rod.Page) {
			btn := page.MustElement("#dialogs")

			wait, handle := page.MustHandleDialog()

			go btn.MustClick()

			e := wait()
			assert.Equal(t, "Enter a string", e.Message)

			handle(true, "test")
			handle(true, "")

			page.MustEval(`() => window.onbeforeunload = null`)

			confirmation := page.MustElement("#confirmation")
			confirmationText := confirmation.MustText()
			assert.Equal(t, "test", confirmationText)
		})
	})
}
