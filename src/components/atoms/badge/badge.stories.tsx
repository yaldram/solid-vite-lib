/** @jsxImportSource solid-js */

import { colorSchemes } from '../../../cva-utils'
import { Flex } from '../layouts'
import { Badge, BadgeProps } from '.'
import { StoryObj } from 'storybook-solidjs'

export default {
  title: 'Atoms/Badge'
}

export const Default: StoryObj<BadgeProps> = {
  args: {
    size: 'md'
  },
  argTypes: {
    size: {
      name: 'size (s)',
      type: { name: 'string', required: false },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tag height width and horizontal padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    }
  },
  render: (args) => (
    <Flex direction='col' gap='lg'>
      <Flex gap='xl'>
        <Badge {...args}>Neutral</Badge>
        <Badge {...args} colorScheme='primary'>
          Primary
        </Badge>
        <Badge {...args} colorScheme='secondary'>
          Secondary
        </Badge>
        <Badge {...args} colorScheme='success'>
          Success
        </Badge>
        <Badge {...args} colorScheme='warning'>
          Warning
        </Badge>
        <Badge {...args} colorScheme='error'>
          Error
        </Badge>
      </Flex>
      <Flex gap='xl'>
        <Badge {...args} enableShadow>
          Neutral
        </Badge>
        <Badge {...args} enableShadow colorScheme='primary'>
          Primary
        </Badge>
        <Badge {...args} enableShadow colorScheme='secondary'>
          Secondary
        </Badge>
        <Badge {...args} enableShadow colorScheme='success'>
          Success
        </Badge>
        <Badge {...args} enableShadow colorScheme='warning'>
          Warning
        </Badge>
        <Badge {...args} enableShadow colorScheme='error'>
          Error
        </Badge>
      </Flex>
      <Flex gap='xl'>
        <Badge {...args} bordered>
          Neutral
        </Badge>
        <Badge {...args} bordered colorScheme='primary'>
          Primary
        </Badge>
        <Badge {...args} bordered colorScheme='secondary'>
          Secondary
        </Badge>
        <Badge {...args} bordered colorScheme='success'>
          Success
        </Badge>
        <Badge {...args} bordered colorScheme='warning'>
          Warning
        </Badge>
        <Badge {...args} bordered colorScheme='error'>
          Error
        </Badge>
      </Flex>
      <Flex gap='xl'>
        <Badge {...args} isFlat>
          Neutral
        </Badge>
        <Badge {...args} isFlat colorScheme='primary'>
          Primary
        </Badge>
        <Badge {...args} isFlat colorScheme='secondary'>
          Secondary
        </Badge>
        <Badge {...args} isFlat colorScheme='success'>
          Success
        </Badge>
        <Badge {...args} isFlat colorScheme='warning'>
          Warning
        </Badge>
        <Badge {...args} isFlat colorScheme='error'>
          Error
        </Badge>
      </Flex>
      <Flex gap='xl'>
        <Badge {...args} isSquared>
          Neutral
        </Badge>
        <Badge {...args} isSquared colorScheme='primary'>
          Primary
        </Badge>
        <Badge {...args} isSquared colorScheme='secondary'>
          Secondary
        </Badge>
        <Badge {...args} isSquared colorScheme='success'>
          Success
        </Badge>
        <Badge {...args} isSquared colorScheme='warning'>
          Warning
        </Badge>
        <Badge {...args} isSquared colorScheme='error'>
          Error
        </Badge>
      </Flex>
      <Flex align='start' gap='xl'>
        <Badge {...args} isSquared>
          Neutral
        </Badge>
        <Badge {...args} isSquared bordered colorScheme='primary'>
          Primary
        </Badge>
        <Badge {...args} isSquared isFlat colorScheme='secondary'>
          Secondary
        </Badge>
        <Badge {...args} isSquared colorScheme='success'>
          Success
        </Badge>
        <Badge {...args} isSquared bordered colorScheme='warning'>
          Warning
        </Badge>
        <Badge {...args} isSquared isFlat colorScheme='error'>
          Error
        </Badge>
      </Flex>
    </Flex>
  )
}

export const Playground: StoryObj<BadgeProps> = {
  parameters: {
    theme: 'split'
  },
  args: {
    colorScheme: 'success',
    size: 'md',
    bordered: false,
    isFlat: false,
    isSquared: false,
    enableShadow: false
  },
  argTypes: {
    colorScheme: {
      name: 'colorScheme',
      type: { name: 'string', required: false },
      options: colorSchemes,
      description: 'The Color Scheme for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'green' }
      },
      control: {
        type: 'select'
      }
    },
    size: {
      name: 'size (s)',
      type: { name: 'string', required: false },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tag height width and horizontal padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    },
    bordered: {
      name: 'bordered',
      type: { name: 'boolean', required: false },
      description: 'Is Bordered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    isFlat: {
      name: 'isFlat',
      type: { name: 'boolean', required: false },
      description: 'Is Flat',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    isSquared: {
      name: 'isSquared',
      type: { name: 'boolean', required: false },
      description: 'Is Bordered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    enableShadow: {
      name: 'enableShadow',
      type: { name: 'boolean', required: false },
      description: 'enableShadow',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    }
  },
  render: (args) => <Badge {...args}>Sample Badge</Badge>
}
