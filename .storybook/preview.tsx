/** @jsxImportSource solid-js */
import { Component } from 'solid-js'

import { Flex, FlexProps } from '../src/components/atoms'

import '../src/scss/main.scss'

const Container: Component<FlexProps> = (props) => {
  return (
    <Flex
      align='start'
      p='md'
      style='min-height: 100vh; flex-basis: 50%;'
      {...props}
    />
  )
}

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
  (StoryFun, context) => {
    const theme = context.parameters.theme || context.globals.theme

    if (theme === 'split') {
      return (
        <Flex>
          <Container class='root light-theme' bg='white'>
            <StoryFun />
          </Container>
          <Container class='root dark-theme' bg='black'>
            <StoryFun />
          </Container>
        </Flex>
      )
    }

    return (
      <Container
        class={theme === 'dark' ? 'root dark-theme' : 'root light-theme'}
        bg={theme === 'dark' ? 'black' : 'white'}
      >
        <StoryFun />
      </Container>
    )
  }
]

export const globalTypes = {
  theme: {
    name: 'Change Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light-view' },
        { value: 'dark', icon: 'circle', title: 'dark-view' },
        { value: 'split', icon: 'graphline', title: 'split-view' }
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true
    }
  }
}

export default preview
