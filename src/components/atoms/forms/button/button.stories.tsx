/** @jsxImportSource solid-js */

import { StoryObj } from 'storybook-solidjs'

import { colorSchemes } from '../../../../cva-utils'
import { Flex } from '../../layouts'
import { Button, ButtonProps } from '.'

export default {
  title: 'Atoms/Forms/Button'
}

export const Playground: StoryObj<ButtonProps> = {
  parameters: {
    theme: 'split'
  },
  args: {
    colorScheme: 'primary',
    variant: 'solid',
    size: 'md',
    isRounded: false,
    isAuto: false,
    isShadow: false
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
      description: 'Button height width and horizontal padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      options: ['solid', 'bordered', 'ghost', 'flat', 'light'],
      description: 'Button Variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      },
      control: {
        type: 'select'
      }
    },
    isRounded: {
      name: 'isRounded',
      type: { name: 'boolean', required: false },
      description: 'Is Rounded prop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    isAuto: {
      name: 'isAuto',
      type: { name: 'boolean', required: false },
      description: 'Is Auto prop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    isShadow: {
      name: 'isShadow',
      type: { name: 'boolean', required: false },
      description: 'Is shadow prop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    }
  },
  render: (args) => <Button {...args}>Button Component</Button>
}

export const Default = {
  render: () => (
    <Flex direction='col' gap='xl'>
      <Flex gap='md' wrap='wrap'>
        <Button>Primary</Button>
        <Button colorScheme='secondary'>Secondary</Button>
        <Button colorScheme='success'>Success</Button>
        <Button colorScheme='warning'>Warning</Button>
        <Button colorScheme='error'>Error</Button>
      </Flex>
      <Flex gap='md'>
        <Button isAuto>Primary</Button>
        <Button isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button isAuto colorScheme='success'>
          Success
        </Button>
        <Button isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
      <Flex gap='md'>
        <Button isShadow isAuto>
          Primary
        </Button>
        <Button isShadow isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button isShadow isAuto colorScheme='success'>
          Success
        </Button>
        <Button isShadow isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button isShadow isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
      <Flex gap='md'>
        <Button variant='bordered' isAuto>
          Primary
        </Button>
        <Button variant='bordered' isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button variant='bordered' isAuto colorScheme='success'>
          Success
        </Button>
        <Button variant='bordered' isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button variant='bordered' isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
      <Flex gap='md'>
        <Button isRounded isAuto>
          Primary
        </Button>
        <Button isRounded isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button isRounded isAuto colorScheme='success'>
          Success
        </Button>
        <Button isRounded isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button isRounded isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
      <Flex gap='md'>
        <Button isRounded variant='bordered' isAuto>
          Primary
        </Button>
        <Button isRounded variant='bordered' isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button isRounded variant='bordered' isAuto colorScheme='success'>
          Success
        </Button>
        <Button isRounded variant='bordered' isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button isRounded variant='bordered' isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
      <Flex gap='md'>
        <Button variant='ghost' isAuto>
          Primary
        </Button>
        <Button variant='ghost' isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button variant='ghost' isAuto colorScheme='success'>
          Success
        </Button>
        <Button variant='ghost' isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button variant='ghost' isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
      <Flex gap='md'>
        <Button variant='flat' isAuto>
          Primary
        </Button>
        <Button variant='flat' isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button variant='flat' isAuto colorScheme='success'>
          Success
        </Button>
        <Button variant='flat' isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button variant='flat' isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
      <Flex gap='md'>
        <Button variant='light' isAuto>
          Primary
        </Button>
        <Button variant='light' isAuto colorScheme='secondary'>
          Secondary
        </Button>
        <Button variant='light' isAuto colorScheme='success'>
          Success
        </Button>
        <Button variant='light' isAuto colorScheme='warning'>
          Warning
        </Button>
        <Button variant='light' isAuto colorScheme='error'>
          Error
        </Button>
      </Flex>
    </Flex>
  )
}
