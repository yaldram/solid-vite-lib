/** @jsxImportSource solid-js */

import '../src/scss/main.scss'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export const decorators = [
  (StoryFun) => (
    <div class='root light-theme'>
      <StoryFun />
    </div>
  )
]

export default preview
