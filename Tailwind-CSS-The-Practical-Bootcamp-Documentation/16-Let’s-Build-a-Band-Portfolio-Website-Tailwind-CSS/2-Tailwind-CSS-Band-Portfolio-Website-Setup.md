# Tailwind CSS Band Portfolio Website Setup

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

🎉 Congrats! Your band portfolio website is now live! Rock on! 🎸✨

## 2. 🗂️ Project Structure

- `images/` – This folder holds images for the project, like band photos, album covers, or logos.
- `output/` – This is where the output.css file is stored after Tailwind processes the styles, ready for the website.
- `Project_Screenshots/` – Stores screenshots of different layouts or stages of the project, providing a visual reference.
- `src/` – The source folder that holds the input.css file, where the Tailwind utilities are defined and compiled from.
- `.gitignore` – Specifies which files Git should ignore, such as node_modules or other unnecessary files.
- `app.js` – Contains JavaScript functionality to bring interactivity or dynamic features to the website.
- `index.html` – The main HTML file that forms the structure of the Band Portfolio Website, linking the Tailwind-generated CSS and JavaScript.
- `package-lock.json` & `package.json` – These files manage the project's dependencies and ensure that everyone using the project has the same version of tools installed.
- `README.md` – The project's documentation, providing setup instructions and important project information.
- `starter-project.html` – A template file to help you start building the website. It contains minimal setup, ready for you to add more content.
- `tailwind.config.js` – Tailwind's configuration file where customizations like colors, fonts, and animations are defined to match the project's brand.

## 3. 📝 input.css

This file defines the styles for the band portfolio website using Tailwind's utility classes. Let's break it down step by step:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `@tailwind base`: Includes Tailwind's base styles, like typography and resets, to ensure consistency across different browsers.
- `@tailwind components`: Brings in reusable components that you can customize (e.g., buttons, forms).
- `@tailwind utilities`: This is where all the utility classes come from, letting you style your elements quickly without writing custom CSS.

### Custom Base Styles

```css
@layer base {
  img {
    @apply object-cover;
  }
}
```

- `img { @apply object-cover; }`: All images will be styled with the object-cover class. This ensures that images fill their containers while maintaining their aspect ratio—great for responsive layouts.

### Custom Component Styles

```css
@layer components {
  .before {
    @apply before:absolute before:content-[''];
  }

  .after {
    @apply after:absolute after:content-[''];
  }

  .nav.open {
    @apply scale-y-100 origin-top;
  }

  .hamburger.close {
    div:first-child {
      @apply rotate-45 translate-y-2;
    }

    div:nth-child(2) {
      @apply opacity-0;
    }

    div:last-child {
      @apply -rotate-45 -translate-y-2;
    }
  }
}
```

- `.before` and `.after`: These classes create pseudo-elements (before and after) that are often used for custom design details like lines or icons before/after content.

  - `before:absolute`: Positions the before pseudo-element absolutely, relative to its container.
  - `before:content-['']`: Adds empty content to the before element, useful for decorations.

- `.nav.open`: When the navigation menu is open, it expands with a vertical animation:

  - `scale-y-100`: Scales the element along the Y-axis to full size.
  - `origin-top`: Ensures the scaling animation expands from the top.

- `.hamburger.close`: Handles the animation for the hamburger menu when it's in the "close" state (turns into an "X"):
  - `div:first-child { rotate-45 translate-y-2; }`: Rotates the top line by 45 degrees and shifts it down slightly.
  - `div:nth-child(2) { opacity-0; }`: Hides the middle line by making it transparent, giving the appearance of an "X".
  - `div:last-child { -rotate-45 -translate-y-2; }`: Rotates the bottom line by -45 degrees and shifts it up, forming the final part of the "X".

## 4. ⚙️ tailwind.config.js

Let's dive into the tailwind.config.js file, where Tailwind is customized to fit the unique branding and needs of this project.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(10 33 78)",
        golden: "rgb(204 153 0)",
        slate: "rgb(45 45 45)",
      },
      fontFamily: {
        sans: ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        spinRev: "spinRev 1s linear infinite",
      },
      keyframes: {
        spinRev: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
```

### 1. content

```js
content: ["./*.html"],
```

This section tells Tailwind which files to scan for class names. Tailwind will scan all HTML files in the root directory (./\*.html), ensuring the generated CSS only contains the classes actually used in these files, keeping the CSS bundle small and efficient.

### 2. theme.extend

Here, the theme is extended with custom colors, fonts, animations, and keyframes to fit the design of the Band Portfolio Website.

#### a. colors

```js
colors: {
  blue: "rgb(10 33 78)",
  golden: "rgb(204 153 0)",
  slate: "rgb(45 45 45)",
},
```

This project uses custom colors to match the aesthetic of the band portfolio:

- `blue: "rgb(10 33 78)"`: A deep navy blue (`#0a214e`), perfect for backgrounds or primary accents.
- `golden: "rgb(204 153 0)"`: A rich golden hue (`#cc9900`), that can be used for highlights or call-to-action buttons.
- `slate: "rgb(45 45 45)"`: A dark gray (`#2d2d2d`), used for neutral elements like text or subtle backgrounds.

These colors help maintain a cohesive, bold, and professional design.

#### b. fontFamily

```js
fontFamily: {
  sans: ["Barlow Condensed", "sans-serif"],
},
```

This configuration sets Barlow Condensed as the primary font for the website. Barlow Condensed is a modern, narrow font that works great for headings, giving the site a sleek and bold feel. If Barlow Condensed is unavailable, it will fall back to any available sans-serif font.

#### c. animation and keyframes

```js
animation: {
  spinRev: "spinRev 1s linear infinite",
},
```

This animation spins elements counterclockwise indefinitely over the span of 1 second. This effect can be applied to elements like loading spinners or decorative icons, adding subtle movement to the page.

```js
keyframes: {
  spinRev: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(-360deg)" },
  },
},
```

The keyframes define how the spinRev animation works. It starts with no rotation (rotate(0deg)) and rotates counterclockwise to a full 360 degrees in the reverse direction (rotate(-360deg)).

### Summary

The tailwind.config.js file is customized to give the Band Portfolio Website a unique and dynamic design:

- HTML Scanning ensures only necessary classes are included in the CSS, optimizing the file size.
- Custom Colors: Deep navy blue (`#0a214e`), golden yellow (`#cc9900`), and slate gray (`#2d2d2d`) are used to align the design with the band's branding.
- Custom Fonts: Barlow Condensed adds a sleek, modern touch to the text.
- Animations: The spin reverse animation adds movement to elements, keeping the website lively and engaging.

Now you're equipped with a fully customized Tailwind setup that brings your band's portfolio to life! 🎤🎶 Ready to rock? Let's do it! 🤘
