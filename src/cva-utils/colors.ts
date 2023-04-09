import { cva, VariantProps } from 'class-variance-authority'

export const colorSchemes = [
  'neutral',
  'primary',
  'secondary',
  'success',
  'warning',
  'error'
] as const

export type ColorScheme = (typeof colorSchemes)[number]

const colorPalette = [
  'blue50',
  'blue100',
  'blue200',
  'blue300',
  'blue400',
  'blue500',
  'blue600',
  'blue700',
  'blue800',
  'blue900',

  'cyan50',
  'cyan100',
  'cyan200',
  'cyan300',
  'cyan400',
  'cyan500',
  'cyan600',
  'cyan700',
  'cyan800',
  'cyan900',

  'gray50',
  'gray100',
  'gray200',
  'gray300',
  'gray400',
  'gray500',
  'gray600',
  'gray700',
  'gray800',
  'gray900',

  'green50',
  'green100',
  'green200',
  'green300',
  'green400',
  'green500',
  'green600',
  'green700',
  'green800',
  'green900',

  'pink50',
  'pink100',
  'pink200',
  'pink300',
  'pink400',
  'pink500',
  'pink600',
  'pink700',
  'pink800',
  'pink900',

  'purple50',
  'purple100',
  'purple200',
  'purple300',
  'purple400',
  'purple500',
  'purple600',
  'purple700',
  'purple800',
  'purple900',

  'red50',
  'red100',
  'red200',
  'red300',
  'red400',
  'red500',
  'red600',
  'red700',
  'red800',
  'red900',

  'yellow50',
  'yellow100',
  'yellow200',
  'yellow300',
  'yellow400',
  'yellow500',
  'yellow600',
  'yellow700',
  'yellow800',
  'yellow900',

  'white',
  'black'
] as const

type ColorMap = Record<(typeof colorPalette)[number], string>

/**
 * generate cva variants for colors
 * @classPrefix property eg. color, bg, etc
 * @returns a map of color variants
 * eg - { red500: color-red500 } or
 *  { red500: bg-red500 }
 */
function generateColorMap(classPrefix: string) {
  return colorPalette.reduce(
    (accumulator, color) => ({
      ...accumulator,
      [color]: `${classPrefix}-${color}`
    }),
    {} as ColorMap
  )
}

export const colors = cva([], {
  variants: {
    color: generateColorMap('color')
  }
})

export type ColorVariants = VariantProps<typeof colors>

export const bgColors = cva([], {
  variants: {
    bg: generateColorMap('bg')
  }
})

export type BgColorVariants = VariantProps<typeof bgColors>
