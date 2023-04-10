# solid-vite-lib

> Starter project for building a complete component library / design system in Solidjs using Typescript, Scss, Css Variables and Vite. Please check the deployed storybook [here](http://solid-vite-lib.s3-website.ap-south-1.amazonaws.com/).

### Introduction

- The theme and design tokens are inspired by / taken from [NextUI](https://nextui.org/).
- I previously created a clone of various chakra ui components using css-in-js styled-components and styled-systems [here](https://github.com/yaldram/chakra-ui-clone).
- Then I improved it by replacing styled components with Scss using class-variance-authority [here](https://github.com/yaldram/react-scss-chakra-ui).
- This project is a further improvement on the previous one, **here instead of creating separate classes for the dark mode I am using CSS variables**.
- **This project uses scss for styling, class-variance-authority for building type safe components and Css variables for the dark mode. It uses vite as the build tool**.

### Why not Tailwind

- **Use the right tool for the right job**. Tailwind is awesome, but I won't use it for building a component library.
- First reason I want control over my styles, I want to only generate those classes, which I need, that depends on my theme my tokens.
- Second I don't want the consumers of my component library to work inside the tailwind.config.js all theme settings should be part of the css / scss.
- Third, its okay to right css, I don't want to write the styles say for my Button component using only classes, it gets really un-maintainable and very hard to read in the long run.
- Fourth scss is very powerful, you can build all these small token classes like `p-xs, pt-xs, etc.` with scss loops, lists and maps. You can use those awesome utility functions for colors like I `rgba(), transparentize(), etc.`.
- The consumer of this library can use the Layout components like Box and Flex, but given that we have created all the utility classes they can use these classes without our components, instead of -

```jsx
<Flex direction='col' gap='xl'>
  <Box p='3xl' bg='red500' color='white'>
    Box 1
  </Box>
  <Box p='3xl' bg='orange500' color='white'>
    Box 2
  </Box>
</Flex>
```

we can do -

```jsx
<div className='flex flex-col gap-xl'>
  <div className='p-3xl bg-red500 color-white'>Box 1</div>
  <div className='p-3xl bg-orange500 color-white'>Box 2</div>
</div>
```

### My Learnings

- `class-variance-authority` is mind-blowing, it makes is very easy to create a component with different variants, it also has great Typescript support.
- The folder structure is organized keeping in mind the `atomic design methodology`.
- Similar to tailwind, I created utility classes for paddings, margins, color, bg, gap, etc. so that it matches the **chakra utility props API**

```jsx
<Box p='lg' m='xl' bg='red500' color='white'>
  Box Component
</Box>
```

- The current project supports both light-mode and dark-mode you can switch the themes in the storybook, and even have both the modes side by side when you choose the split mode from `Switch Theme` dropdown.

### Usage

- Clone the project.
- Run `yarn install`.
- Run `yarn storybook`.
- To build the project run `yarn build`.

### License

MIT © [github.com/yaldram](https://github.com/github.com/yaldram)
