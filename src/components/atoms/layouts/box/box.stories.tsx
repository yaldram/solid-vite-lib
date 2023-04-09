/** @jsxImportSource solid-js */

import { spacingControls } from '../../../../cva-utils'
import { Box } from '.'

export default {
  title: 'Atoms/Layout/Box'
}

const { spacingOptions, spacingLabels } = spacingControls()

export const Playground = {
  args: {
    p: 'sm',
    m: 'sm',
    bg: 'red500'
  },
  argTypes: {
    p: {
      name: 'padding',
      type: { name: 'string', required: false },
      options: spacingOptions,
      description: `Padding CSS prop for the Component shorthand for padding.
        We also have pt, pb, pl, pr.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'select',
        labels: spacingLabels
      }
    },
    m: {
      name: 'margin',
      type: { name: 'string', required: false },
      options: spacingOptions,
      description: `Margin CSS prop for the Component shorthand for padding.
        We also have mt, mb, ml, mr.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'select',
        labels: spacingLabels
      }
    }
  },
  render: (args) => (
    <Box style={{ width: '100%' }} {...args}>
      Box Component
    </Box>
  )
}

export const Default = () => (
  <Box style={{ width: '100%' }} bg='red800' color='white' p='xl'>
    Box Component
  </Box>
)
