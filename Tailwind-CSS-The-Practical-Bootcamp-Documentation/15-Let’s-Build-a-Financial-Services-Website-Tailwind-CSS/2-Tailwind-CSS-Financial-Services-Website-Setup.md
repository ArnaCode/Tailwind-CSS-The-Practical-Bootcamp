# Tailwind CSS Financial Services Website Setup

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

🚀 That's it! Your Financial Services website is now live on your local machine! 💻🎉

## 2. 🗂️ Project Structure

- `images/` – Contains image assets used in the project, such as logos or illustrations that support the website's design.
- `output/` – Contains the output.css file, which is the final CSS file generated after compiling Tailwind's utility classes based on your custom styles.
- `Project_Screenshots/` – A directory holding screenshots of the website, useful for visual references or for documenting the design.
- `src/` – The source folder containing the input.css file where Tailwind CSS classes are written before being compiled into output.css.
- `.gitignore` – This file specifies which files and directories Git should ignore when pushing the project to a repository. This often includes node_modules or temporary files.
- `app.js` – This file manages JavaScript code for any interactivity or dynamic content on the website.
- `index.html` – The main HTML file that holds the structure of the Financial Services website. It links the Tailwind-generated CSS and JavaScript files to provide functionality and design.
- `package-lock.json` & `package.json` – These files manage project dependencies and ensure consistency across different environments. The package.json lists all dependencies, while the package-lock.json locks the exact versions installed.
- `README.md` – A markdown file containing documentation about the project, including how to install and run it.
- `starter-project.html` – An optional starting template for the project. It may contain minimal structure for developers to build upon.
- `tailwind.config.js` – This is where you configure and customize Tailwind's default settings for the project, such as adding new colors, spacing, or fonts.

## 3. 📝 input.css

The input.css file defines the styles for the Financial Services website using Tailwind CSS utility classes. Let's break it down line by line, covering all the classes used:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `@tailwind base`: This imports Tailwind's base styles, which include defaults for typography, spacing, and other foundational elements. It helps ensure consistency across different browsers.
- `@tailwind components`: This imports any reusable components defined in Tailwind's component layer. These can include things like buttons, forms, or cards, which can be customized.
- `@tailwind utilities`: This imports Tailwind's utility classes, like `bg-blue-500`, `p-4`, or `flex`. These classes allow you to style elements directly in your HTML by applying specific utility classes, rather than writing custom CSS.

### Custom Base Styles

```css
@layer base {
  body {
    @apply dark:text-white;
  }

  a {
    @apply dark:text-white rounded;
  }

  img {
    @apply rounded h-full object-cover;
  }
}
```

- `@layer base`: This allows you to define custom base styles, which can extend or override Tailwind's default base styles. These apply globally across the project.
- `body { @apply dark:text-white; }`: The `@apply` directive allows you to apply Tailwind utility classes within CSS. In this case:
  - `dark:text-white`: Sets the text color to white when the website is in dark mode. The `dark` prefix applies the style conditionally when the dark mode is enabled.
- `a { @apply dark:text-white rounded; }`: This styles all anchor (`<a>`) elements:
  - `dark:text-white`: Similar to the body tag, it makes links white in dark mode.
  - `rounded`: Rounds the corners of the links, giving them a softer appearance.
- `img { @apply rounded h-full object-cover; }`: This styles all images (`<img>`) globally:
  - `rounded`: Rounds the corners of the images.
  - `h-full`: Ensures that the image takes up the full height of its container.
  - `object-cover`: Ensures the image covers its container while maintaining its aspect ratio, cropping overflow as necessary.

### Custom Component Styles

```css
@layer components {
  .component {
    @apply flex flex-col gap-y-12 px-4 py-8 sm:py-20 sm:px-8 lg:px-12 2xl:rounded-2xl 2xl:my-8 2xl:border 2xl:border-blue;
  }
}
```

- `@layer components`: This defines custom components for the website. Components are reusable building blocks (such as cards or sections) that can be styled consistently across the project.
- `.component { @apply ... }`: This class defines a generic reusable component for the project, using several Tailwind utility classes:
  - `flex flex-col`: Displays the component as a flex container with a column layout, stacking child elements vertically.
  - `gap-y-12`: Adds vertical spacing (3rem) between items inside the flex container.
  - `px-4 py-8`: Adds padding (1rem horizontally and 2rem vertically) inside the component.
  - `sm:py-20 sm:px-8`: Adjusts the padding for small screens (20 for vertical padding and 2rem for horizontal padding).
  - `lg:px-12`: For large screens, the horizontal padding increases to 3rem.
  - `2xl:rounded-2xl`: On extra-large screens (2xl), the component's corners become more rounded.
  - `2xl:my-8`: Adds a vertical margin of 2rem on extra-large screens.
  - `2xl:border`: Adds a border around the component on extra-large screens.
  - `2xl:border-blue`: Sets the border color to blue on extra-large screens, giving the component a refined and distinguished appearance.

## 4. ⚙️ tailwind.config.js

Let's dive into the tailwind.config.js file to understand how Tailwind CSS is configured for the Financial Services Website. This setup ensures that the design reflects the branding and technical needs of the project while keeping everything optimized.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#212529",
          600: "#818697",
          500: "#9b9b9b",
          400: "#bbbdc6",
          300: "#f0f2f6",
        },
        green: "#1ab98f",
        blue: "#2b7fff",
        orange: "#ea9b79",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

### 1. content: ["./*.html"]

```js
content: ["./*.html"],
```

This line tells Tailwind to scan for class names within all HTML files in the root directory. It helps optimize the final CSS bundle by only including styles that are actually being used in these files, improving performance and loading times.

### 2. darkMode: "selector"

```js
darkMode: "selector",
```

Dark mode is controlled manually through a class in this project. When a specific class, such as `.dark-mode`, is applied to the HTML or body element, Tailwind will switch the website to dark mode. This gives you flexibility in how and when dark mode is activated, such as through a user-controlled toggle on the website.

### 3. theme.extend

The `extend` section adds custom colors and fonts to the default Tailwind theme, aligning with the branding and UI design of the Financial Services website.

#### a. colors

```js
colors: {
  primary: {
    900: "#212529",
    600: "#818697",
    500: "#9b9b9b",
    400: "#bbbdc6",
    300: "#f0f2f6",
  },
  green: "#1ab98f",
  blue: "#2b7fff",
  orange: "#ea9b79",
},
```

Custom color palettes are defined here, with a primary color set and individual colors for green, blue, and orange. These colors will help maintain a cohesive design throughout the website:

- Primary Colors: Ranging from a deep grayish-black (`#212529`) to a light off-white (`#f0f2f6`), this color scale allows for versatile use across text, backgrounds, and borders.
  - 900: `#212529` (dark grayish-black)
  - 600: `#818697` (medium gray)
  - 500: `#9b9b9b` (neutral gray)
  - 400: `#bbbdc6` (light gray)
  - 300: `#f0f2f6` (very light gray, almost white)
- Accent Colors:
  - Green: `#1ab98f` (vibrant teal)
  - Blue: `#2b7fff` (bright blue)
  - Orange: `#ea9b79` (soft orange)

These vibrant accent colors can be used for interactive elements, such as buttons and links, or to highlight key content sections.

#### b. fontFamily

```js
fontFamily: {
  sans: ["Ubuntu", "sans-serif"],
},
```

The font family section adds Ubuntu as the primary sans-serif font for the project. If Ubuntu is unavailable, the browser will default to any available sans-serif font. This font is modern, clean, and well-suited for professional websites, ensuring readability and a polished user interface.

### 4. plugins: []

```js
plugins: [],
```

No additional Tailwind plugins are used in this setup, keeping it streamlined and focused on the core functionality of Tailwind. However, you can always add plugins later if the project requires more advanced features, like custom forms or typography utilities.

### Summary

This tailwind.config.js setup efficiently customizes Tailwind CSS for the Financial Services website:

- HTML Scanning ensures that the final CSS includes only the necessary styles, optimizing the file size.
- Dark Mode Control allows for manual switching between light and dark modes through a custom class.
- Custom Colors and Fonts are added to reflect the website's branding, with primary color shades and accent colors for emphasis. The use of the Ubuntu font adds a modern, professional touch.
- No Extra Plugins keeps the setup lightweight, while leaving room for future extensions.
