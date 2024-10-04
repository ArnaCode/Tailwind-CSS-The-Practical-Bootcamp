# Tailwind CSS Professional Portfolio Website Setup

## 📚 Table of Contents

1. 🎯 Setup Instructions
2. 🗂️ Project Structure
3. 📝 input.css
4. ⚙️ tailwind.config.js

## 1. 🎯 Setup Instructions

To set up the project after forking or downloading it from GitHub, follow these steps:

1. Install the required dependencies by running the following command:

```bash
npm install
```

2. Compile the project by running the following command:

```bash
npm run compile
```

3. Start the development server by running the following command:

```bash
npm run watch
```

4. Open the index.html file, right-click, and open it with Live Server.

🚀 That's it! Your project is now live on your local machine! 💻✨

## 2. 🗂️ Project Structure

- `images/` – This folder contains all image assets such as icons and photos.
- `output/` – Stores the final output.css file after Tailwind's compilation. This file contains all the CSS styles used in the project after they are generated from the source Tailwind configuration.
- `Project_Screenshots/` – This directory holds visual screenshots of the project layout. These can serve as a reference for how the project looks during development.
- `src/` – This is the source folder where your custom input.css resides. It's the starting point for styling before Tailwind compiles it into the output.css file.
- `.gitignore` – Specifies which files and directories Git should ignore when uploading the project to version control, preventing unnecessary or sensitive files like node_modules from being pushed.
- `app.js` – Contains JavaScript functionality to add interactivity and behavior to the project.
- `index.html` – The main HTML file that holds the structure and content of the project. It links the Tailwind styles and other assets like JavaScript and images.
- `package-lock.json` & `package.json` – These files manage the dependencies of the project. package.json defines the dependencies, while package-lock.json ensures all installed packages remain consistent in different environments.
- `README.md` – The documentation file for the project, providing details like how to install, compile, and run the project.
- `starter-project.html` – An alternative HTML file offering a simpler or starting version of the main project layout.
- `tailwind.config.js` – The configuration file where Tailwind CSS is customized and extended, including defining custom colors, spacing, and other utility classes.

## 3. 📝 input.css

The input.css file is where Tailwind CSS is set up to style the entire project. Let's go through it line by line, breaking down all the classes used in detail.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `@tailwind base`: This imports Tailwind's base styles, which include browser resets, sensible defaults for typography, and consistent styling across elements like headings, paragraphs, and lists.

- `@tailwind components`: This imports reusable components provided by Tailwind, such as buttons, forms, and cards. These components can be customized or used as is.

- `@tailwind utilities`: This imports all utility classes like `bg-red-500`, `p-4`, `text-center`, etc., that help you style elements directly in your HTML without writing custom CSS rules.

### Custom Base Styles

```css
@layer base {
  :root {
    --color-primary: 0deg 0% 14%;
    --color-secondary: 0deg 0% 18%;
    --color-accent: 3deg 74% 65%;
    --color-text: 0deg 0% 100%;
  }

  img {
    @apply rounded h-full object-cover;
  }
}
```

- `@layer base`: Defines custom base styles in a new base layer, allowing us to override or extend Tailwind's default base styles.

- `:root`: The :root pseudo-class targets the highest-level element in the document (the HTML element) and defines custom CSS variables (also known as CSS custom properties) for colors. These variables are used throughout the project to ensure consistent design.

  - `--color-primary: 0deg 0% 14%`: The primary color is set using the HSL color model. This defines a dark color with 0 degrees hue (black and white scale), 0% saturation (no color), and 14% lightness (very dark gray).

  - `--color-secondary: 0deg 0% 18%`: A slightly lighter secondary color, with 18% lightness.

  - `--color-accent: 3deg 74% 65%`: The accent color is a vibrant red, defined by 3 degrees hue (slightly into the red spectrum), 74% saturation (high color intensity), and 65% lightness (moderate brightness).

  - `--color-text: 0deg 0% 100%`: Text color is set to pure white (100% lightness).

- `img { @apply ... }`: This applies Tailwind utility classes to all img elements:
  - `rounded`: Rounds the corners of images.
  - `h-full`: Ensures that images take up the full height of their container.
  - `object-cover`: Ensures the image covers the container while maintaining its aspect ratio, cropping any overflow if necessary.

### Custom Component Styles

```css
@layer components {
  .nav {
    @apply flex flex-col gap-6 fixed rounded top-0 right-0 bg-accent/40 backdrop-blur-lg p-24 z-20 scale-y-0 origin-bottom transition-transform duration-300;
  }

  .nav.open {
    @apply scale-y-100 origin-top;
  }

  .nav--link {
    @apply py-2 text-lg relative transition-colors hover:text-secondary before:content-[''] before:absolute before:w-2/4 before:h-px hover:before:origin-left before:bg-secondary before:left-0 before:bottom-0 before:scale-x-0 hover:before:scale-x-100 before:origin-right before:transition-transform;
  }

  .hamburger {
    @apply fixed bg-accent py-5 top-[30px] right-2/4 translate-x-2/4 h-8 w-12 z-30 rounded cursor-pointer before:content-[''] before:h-0.5 before:w-2/3 before:bg-text before:absolute before:top-4 before:left-2 after:content-[''] after:h-0.5 after:w-1/3 after:bg-text after:absolute after:top-6 after:left-2 before:transition after:transition;
  }

  .hamburger.close {
    @apply before:rotate-45 before:translate-y-1 after:w-2/3 after:-rotate-45 after:-translate-y-1;
  }
}
```

#### Navigation Menu (.nav)

The `.nav` class styles the main navigation menu of the website. Here's the detailed breakdown of each utility class:

- `flex flex-col`: Displays the navigation items in a flexible box with a column layout.
- `gap-6`: Adds vertical spacing between each navigation item (1.5rem).
- `fixed`: Positions the navigation fixed relative to the viewport, meaning it remains in the same spot even when the user scrolls.
- `rounded`: Rounds the corners of the navigation container.
- `top-0 right-0`: Positions the navigation at the top-right corner of the viewport.
- `bg-accent/40`: Sets the background color to the accent color with 40% opacity.
- `backdrop-blur-lg`: Adds a large blur effect to the background behind the navigation when scrolling.
- `p-24`: Adds padding of 6rem inside the navigation container, creating space around the content.
- `z-20`: Sets the z-index of the element to ensure it appears above other elements.
- `scale-y-0`: Initially scales the element down to 0 on the Y-axis, effectively hiding it vertically.
- `origin-bottom`: Sets the origin point for the scaling animation to the bottom of the element, so it expands from the bottom up.
- `transition-transform duration-300`: Adds a smooth transformation transition with a duration of 300ms.

#### Open Navigation (.nav.open)

When the navigation menu is opened, the `.nav.open` class applies:

- `scale-y-100`: Scales the element back to its full size (100%) on the Y-axis, making it fully visible.
- `origin-top`: Changes the origin of the scaling animation to the top of the element, so it expands from top down when opened.

#### Navigation Links (.nav--link)

Each navigation link is styled with the `.nav--link` class:

- `py-2`: Adds vertical padding of 0.5rem inside each link, creating space between the text and the edges of the link.
- `text-lg`: Sets the font size of the links to large (1.125rem).
- `relative`: Positions the link relative to its normal position, allowing for absolute positioning of child elements.
- `transition-colors`: Enables smooth transitions when the link's color changes on hover.

Hover states for the links are handled using pseudo-elements:

- `hover:text-secondary`: Changes the text color to the secondary color when the link is hovered.
- `before:content-['']`: Creates an empty pseudo-element before each link.
- `before:absolute`: Positions the pseudo-element absolutely relative to the link.
- `before:w-2/4`: Sets the width of the pseudo-element to half the width of the link (50%).
- `before:h-px`: Sets the height of the pseudo-element to 1px, creating a small line.
- `hover:before:origin-left`: Changes the origin of the pseudo-element's scale transformation to the left on hover, making it expand from left to right.
- `before:bg-secondary`: Sets the background color of the pseudo-element to the secondary color, matching the text color.
- `before:left-0`: Aligns the pseudo-element to the left edge of the link.
- `before:bottom-0`: Aligns the pseudo-element to the bottom edge of the link.
- `before:scale-x-0`: Initially scales the pseudo-element down to 0 on the X-axis, hiding it.
- `hover:before:scale-x-100`: Scales the pseudo-element back to full size (100%) on the X-axis when the link is hovered, creating a line animation.

#### Hamburger Menu (.hamburger)

The `.hamburger` class styles the mobile navigation button (hamburger icon):

- `fixed`: Positions the hamburger button fixed relative to the viewport, ensuring it remains in the same place even when scrolling.
- `bg-accent`: Sets the background color of the button to the accent color.
- `py-5`: Adds vertical padding of 1.25rem inside the button.
- `top-[30px] right-2/4`: Positions the button 30px from the top of the viewport and at the center horizontally (using the right-2/4 and translation for centering).
- `translate-x-2/4`: Translates the button by 50% to the right, perfectly centering it.
- `h-8 w-12`: Sets the height and width of the button to 2rem and 3rem, respectively.
- `z-30`: Ensures the button appears on top of other elements (higher z-index).
- `rounded`: Rounds the edges of the button.
- `cursor-pointer`: Changes the mouse cursor to a pointer when hovered, indicating it's clickable.

Pseudo-elements are used to create the lines of the hamburger icon:

- `before:content-[''] after:content-['']`: Creates two pseudo-elements before and after the button content, representing the two lines of the hamburger.
- `before:h-0.5 after:h-0.5`: Sets the height of both pseudo-elements to 0.125rem (thin lines).
- `before:w-2/3 after:w-1/3`: Sets the width of the top line to two-thirds of the button width, and the bottom line to one-third.
- `before:bg-text after:bg-text`: Sets the background color of both pseudo-elements to the text color (white).
- `before:absolute after:absolute`: Positions both pseudo-elements absolutely inside the button.
- `before:top-4 after:top-6`: Positions the top line 1rem from the top, and the bottom line 1.5rem from the top.
- `before:left-2 after:left-2`: Aligns both lines 0.5rem from the left edge of the button.
- `before:transition after:transition`: Adds smooth transitions for any changes in state (such as transforming into the close icon).

#### Close State (.hamburger.close)

When the hamburger menu is clicked (open), the `.hamburger.close` class is applied:

- `before:rotate-45 before:translate-y-1`: Rotates the top line by 45 degrees and shifts it slightly down, forming part of the "X" shape.
- `after:w-2/3 after:-rotate-45 after:-translate-y-1`: Extends the bottom line to two-thirds width, rotates it by -45 degrees, and shifts it up, completing the "X" shape.

## 4. ⚙️ tailwind.config.js

The tailwind.config.js file defines the Tailwind CSS configuration, allowing you to customize the default settings to better suit the project needs. Here's the detailed breakdown of the file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
```

### 1. content

The content field tells Tailwind which files it should scan for class names. In this case, Tailwind will look through all .html and .js files in the root directory to find classes that are being used in the project.

```js
content: ["./*.{html,js}"],
```

- `./*.{html,js}`: This is a glob pattern that matches any HTML or JavaScript file in the root directory. By specifying these files, Tailwind only includes the CSS required for the classes found in these files, leading to smaller and more efficient output CSS.

### 2. theme.extend

The extend property inside the theme section allows you to extend or override the default theme. This is where you add custom colors, spacing, fonts, and other design tokens.

```js
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--color-primary) / <alpha-value>)",
      secondary: "hsl(var(--color-secondary) / <alpha-value>)",
      accent: "hsl(var(--color-accent) / <alpha-value>)",
      text: "hsl(var(--color-text) / <alpha-value>)",
    },
  },
},
```

Custom Colors: The colors defined here use HSL values that are based on the custom CSS variables created in the input.css file (--color-primary, --color-secondary, etc.). Tailwind allows for easy opacity adjustments by using <alpha-value> placeholders.

- Primary Color:

```js
primary: "hsl(var(--color-primary) / <alpha-value>)",
```

The primary color is referenced by using the CSS variable --color-primary defined in the :root of input.css. This sets the base color for key elements, and the <alpha-value> allows for easy adjustments to opacity in Tailwind classes (e.g., bg-primary/50 for 50% opacity).

- Secondary Color:

```js
secondary: "hsl(var(--color-secondary) / <alpha-value>)",
```

Similar to the primary color, the secondary color is used for contrasting elements, adding variety and depth to the design.

- Accent Color:

```js
accent: "hsl(var(--color-accent) / <alpha-value>)",
```

The accent color is a vibrant red tone used for highlighting important parts of the UI (such as buttons, links, or call-to-action sections).

- Text Color:

```js
text: "hsl(var(--color-text) / <alpha-value>)",
```

The text color is white and is used for text displayed on dark backgrounds, ensuring readability.

### 3. plugins

The plugins field is an empty array in this configuration, meaning no additional plugins are being used. However, this is where you would add plugins to extend Tailwind's functionality (e.g., @tailwindcss/forms or @tailwindcss/typography).

```js
plugins: [],
```

While this project doesn't currently require any plugins, Tailwind offers a wide range of plugins for forms, typography, custom animations, and more, which can be added in this section as the project evolves.

### Summary

The tailwind.config.js file is set up to be lightweight and efficient, using the content property to ensure that only the necessary classes are included in the final CSS file. The theme.extend section customizes the default theme by adding custom colors that are referenced from the input.css file, ensuring consistency throughout the project. Although no plugins are used, this file is flexible enough to accommodate future extensions as the project grows.
