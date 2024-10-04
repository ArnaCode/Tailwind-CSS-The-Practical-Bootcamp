# Header Section - Styling and Structure Breakdown

```html
<!-- -------------------------- Header -->
<header class="component">
  <nav
    class="flex flex-col gap-5 *:flex *:flex-col *:gap-y-2 *:text-center sm:justify-between sm:*:items-center sm:*:gap-x-5 md:flex-row md:w-5/6 2xl:w-auto"
  >
    <div class="sm:flex-row">
      <a class="py-2 text-2xl font-bold" href="#">FNX</a>
      <p>Individual</p>
      <p>Business</p>
    </div>

    <div class="sm:flex-row-reverse sm:justify-end md:flex-row">
      <a href="#"
        ><i class="fa-solid fa-location-dot"></i> <span>Location</span></a
      >
      <p class="text-primary-500">1-500-123-4567</p>
      <a
        class="self-center border-2 border-primary-900 px-6 py-2 text-lg dark:border-white"
        href="#"
        >Login</a
      >
    </div>
  </nav>

  <!-- -------------------------- Dark Mode -->
  <div
    class="absolute right-6 top-12 sm:right-8 sm:top-24 lg:right-12 2xl:top-32 2xl:left-2/4"
  >
    <input
      class="cursor-pointer relative appearance-none h-6 w-14 rounded-full bg-primary-400 duration-500 before:absolute before:h-6 before:w-6 before:bg-primary-900 before:rounded-full before:scale-110 checked:before:translate-x-8 before:duration-300 checked:before:bg-slate-300 checked:bg-slate-900"
      type="checkbox"
    />
  </div>

  <!-- -------------------------- Showcase -->
  <section class="grid items-center gap-y-8 md:grid-cols-2">
    <div class="flex flex-col gap-y-5">
      <h1 class="text-4xl font-bold md:text-6xl">The Future of Finance</h1>
      <p class="text-lg">The best way to invest your money</p>
      <a
        class="bg-green px-6 py-2 text-center text-lg text-white shadow-md shadow-green sm:self-start"
        href="#"
      >
        Get Started
      </a>
    </div>

    <figure>
      <img src="images/showcase.svg" alt="" />
    </figure>

    <img
      class="absolute -z-10 h-96 w-32 hidden md:block dark:hidden"
      src="images/showcase-design.png"
      alt=""
    />
  </section>
</header>
```

## 🏗️ HTML Structure Breakdown

Let's explore each element step by step! 😊

### 1. Header Element 🏠

```html
<header class="component">
  <!-- Content -->
</header>
```

- **Purpose**: The `<header>` element serves as the main container for the header section, wrapping the navigation bar, dark mode toggle, and showcase.

- **Attributes and Classes**:

  - `class="component"`: A custom class likely used for specific styling of the header component.

- **Relationship with Other Elements**:
  - Parent Element: None (it's a top-level element).
  - Child Elements: `<nav>`, `<div>` (dark mode toggle), and `<section>` (showcase).

### 2. Navigation Bar 🧭

```html
<nav
  class="flex flex-col gap-5 *:flex *:flex-col *:gap-y-2 *:text-center sm:justify-between sm:*:items-center sm:*:gap-x-5 md:flex-row md:w-5/6 2xl:w-auto"
>
  <!-- Navigation content -->
</nav>
```

- **Purpose**: The `<nav>` element provides a navigation interface for users to navigate through the website.

- **Attributes and Classes**:

  - Base Classes:

    - `flex`: Applies `display: flex;` making the `<nav>` a flex container.
    - `flex-col`: Arranges child elements vertically (`flex-direction: column;`).
    - `gap-5`: Adds a gap of 1.25rem (20px) between child elements.

  - Universal Child Selectors (Non-standard Tailwind syntax):

    - `*:flex`: Intended to make all child elements flex containers.
    - `*:flex-col`: Sets all child elements to have vertical flex direction.
    - `*:gap-y-2`: Adds a vertical gap of 0.5rem (8px) between elements inside each child.
    - `*:text-center`: Centers text in all child elements.
    - Note: The `*:` prefix is not standard in Tailwind CSS. It may represent custom utility classes or a plugin.

  - Responsive Classes:
    - `sm:justify-between`: On small screens (≥640px), spaces child elements evenly.
    - `sm:*:items-center`: On small screens, aligns items vertically in child elements.
    - `sm:*:gap-x-5`: On small screens, adds a horizontal gap of 1.25rem (20px) between items in child elements.
    - `md:flex-row`: On medium screens (≥768px), arranges child elements horizontally.
    - `md:w-5/6`: On medium screens, sets the width to 83.333%.
    - `2xl:w-auto`: On extra-large screens (≥1536px), sets the width to auto.

- **Relationship with Other Elements**:
  - Parent Element: `<header>`
  - Child Elements: Two `<div>` elements containing navigation links and information.

### 3. First Navigation Section 📑

```html
<div class="sm:flex-row">
  <a class="py-2 text-2xl font-bold" href="#">FNX</a>
  <p>Individual</p>
  <p>Business</p>
</div>
```

- **Purpose**: Contains the logo and primary navigation links.

- **Attributes and Classes**:

  - `class="sm:flex-row"`:
    - `sm:flex-row`: On small screens, arranges items horizontally (`flex-direction: row;`).

- **Child Elements**:
  a. Logo Link

  ```html
  <a class="py-2 text-2xl font-bold" href="#">FNX</a>
  ```

  - **Purpose**: Represents the website's logo and links to the homepage.

  - **Attributes and Classes**:

    - `class="py-2 text-2xl font-bold"`:
      - `py-2`: Vertical padding of 0.5rem (8px).
      - `text-2xl`: Font size of 1.5rem (24px).
      - `font-bold`: Bold font weight.
    - `href="#"`: Placeholder link to the homepage.

  - **Relationship with Other Elements**:
    - Parent Element: `<div>` (First Navigation Section).
    - Sibling Elements: `<p>Individual</p>`, `<p>Business</p>`.

  b. 'Individual' Link

  ```html
  <p>Individual</p>
  ```

  - **Purpose**: Navigation link for individual users.

  - **Attributes and Classes**: None (uses default styling).

  - **Relationship with Other Elements**:
    - Parent Element: `<div>` (First Navigation Section).
    - Sibling Elements: `<a>` (Logo), `<p>Business</p>`.

  c. 'Business' Link

  ```html
  <p>Business</p>
  ```

  - **Purpose**: Navigation link for business users.

  - **Attributes and Classes**: None.

  - **Relationship with Other Elements**:
    - Parent Element: `<div>` (First Navigation Section).
    - Sibling Elements: `<a>` (Logo), `<p>Individual</p>`.

### 4. Second Navigation Section 📞

```html
<div class="sm:flex-row-reverse sm:justify-end md:flex-row">
  <a href="#">
    <i class="fa-solid fa-location-dot"></i> <span>Location</span>
  </a>
  <p class="text-primary-500">1-500-123-4567</p>
  <a
    class="self-center border-2 border-primary-900 px-6 py-2 text-lg dark:border-white"
    href="#"
  >
    Login
  </a>
</div>
```

- **Purpose**: Contains contact information and a login link.

- **Attributes and Classes**:

  - `class="sm:flex-row-reverse sm:justify-end md:flex-row"`:
    - `sm:flex-row-reverse`: On small screens, arranges items in reverse order.
    - `sm:justify-end`: Aligns items to the end.
    - `md:flex-row`: On medium screens, arranges items in normal order.

- **Child Elements**:
  a. Location Link

  ```html
  <a href="#">
    <i class="fa-solid fa-location-dot"></i> <span>Location</span>
  </a>
  ```

  - **Purpose**: Provides a link to the location page.

  - **Attributes and Classes**:

    - `href="#"`: Placeholder link.

  - **Child Elements**:

    - `<i class="fa-solid fa-location-dot"></i>`:
      - **Purpose**: Displays a location icon.
      - **Attributes and Classes**:
        - `class="fa-solid fa-location-dot"`: Font Awesome classes for the icon.
    - `<span>Location</span>`:
      - **Purpose**: Text label for the link.

  - **Relationship with Other Elements**:
    - Parent Element: `<div>` (Second Navigation Section).
    - Sibling Elements: `<p>`, `<a>` (Login Link).

  b. Phone Number

  ```html
  <p class="text-primary-500">1-500-123-4567</p>
  ```

  - **Purpose**: Displays the contact phone number.

  - **Attributes and Classes**:

    - `class="text-primary-500"`:
      - `text-primary-500`: Sets text color to a custom primary shade.

  - **Relationship with Other Elements**:
    - Parent Element: `<div>` (Second Navigation Section).
    - Sibling Elements: `<a>` (Location Link), `<a>` (Login Link).

  c. Login Link

  ```html
  <a
    class="self-center border-2 border-primary-900 px-6 py-2 text-lg dark:border-white"
    href="#"
  >
    Login
  </a>
  ```

  - **Purpose**: Link for users to log in.

  - **Attributes and Classes**:

    - `class="..."`:
      - `self-center`: Centers the item vertically.
      - `border-2`: Adds a 2px border.
      - `border-primary-900`: Border color set to a custom primary shade.
      - `px-6`: Horizontal padding of 1.5rem (24px).
      - `py-2`: Vertical padding of 0.5rem (8px).
      - `text-lg`: Font size of 1.125rem (18px).
      - `dark:border-white`: Border color changes to white in dark mode.
    - `href="#"`: Placeholder link.

  - **Relationship with Other Elements**:
    - Parent Element: `<div>` (Second Navigation Section).
    - Sibling Elements: `<a>` (Location Link), `<p>` (Phone Number).

### 5. Dark Mode Toggle 🌙

```html
<div
  class="absolute right-6 top-12 sm:right-8 sm:top-24 lg:right-12 2xl:top-32 2xl:left-2/4"
>
  <input
    class="cursor-pointer relative appearance-none h-6 w-14 rounded-full bg-primary-400 duration-500 before:absolute before:h-6 before:w-6 before:bg-primary-900 before:rounded-full before:scale-110 checked:before:translate-x-8 before:duration-300 checked:before:bg-slate-300 checked:bg-slate-900"
    type="checkbox"
  />
</div>
```

- **Purpose**: Provides a toggle switch for dark mode functionality.

- **Attributes and Classes (Parent `<div>`):**

  - `class="..."`:
    - `absolute`: Positions the element absolutely.
    - `right-6`: 1.5rem (24px) from the right.
    - `top-12`: 3rem (48px) from the top.
    - `sm:right-8`: 2rem (32px) from the right on small screens.
    - `sm:top-24`: 6rem (96px) from the top on small screens.
    - `lg:right-12`: 3rem (48px) from the right on large screens.
    - `2xl:top-32`: 8rem (128px) from the top on extra-large screens.
    - `2xl:left-2/4`: 50% from the left on extra-large screens (centers horizontally).

- **Child Element**:
  a. Checkbox Input

  ```html
  <input
    class="cursor-pointer relative appearance-none h-6 w-14 rounded-full bg-primary-400 duration-500 before:absolute before:h-6 before:w-6 before:bg-primary-900 before:rounded-full before:scale-110 checked:before:translate-x-8 before:duration-300 checked:before:bg-slate-300 checked:bg-slate-900"
    type="checkbox"
  />
  ```

  - **Purpose**: The actual toggle switch.

  - **Attributes and Classes**:

    - `class="..."`:
      - Base Classes:
        - `cursor-pointer`: Changes cursor to a pointer on hover.
        - `relative`: Positions the input relative for positioning pseudo-elements.
        - `appearance-none`: Removes default checkbox styling.
        - `h-6`: Height of 1.5rem (24px).
        - `w-14`: Width of 3.5rem (56px).
        - `rounded-full`: Fully rounds the element.
        - `bg-primary-400`: Background color set to a custom primary shade.
        - `duration-500`: Transition duration of 500ms.
      - Pseudo-element Classes (before:):
        - `before:absolute`: Positions ::before absolutely.
        - `before:h-6`: Height of 1.5rem (24px) for ::before.
        - `before:w-6`: Width of 1.5rem (24px) for ::before.
        - `before:bg-primary-900`: Background color of ::before set to a custom shade.
        - `before:rounded-full`: Fully rounds ::before.
        - `before:scale-110`: Scales ::before by 110%.
        - `before:duration-300`: Transition duration of 300ms for ::before.
      - Checked State Classes (checked:):
        - `checked:before:translate-x-8`: Moves ::before 2rem (32px) to the right when checked.
        - `checked:before:bg-slate-300`: Changes ::before background to slate-300 when checked.
        - `checked:bg-slate-900`: Changes input background to slate-900 when checked.
    - `type="checkbox"`: Specifies the input type.

  - **Relationship with Other Elements**:
    - Parent Element: `<div>` (Dark Mode Toggle Container).
    - Sibling Elements: None.

### 6. Showcase Section 🎉

```html
<section class="grid items-center gap-y-8 md:grid-cols-2">
  <!-- Showcase content -->
</section>
```

- **Purpose**: Highlights the main message and visuals of the website.

- **Attributes and Classes**:

  - `class="..."`:
    - `grid`: Applies CSS Grid layout.
    - `items-center`: Vertically centers grid items.
    - `gap-y-8`: Vertical gap of 2rem (32px) between rows.
    - `md:grid-cols-2`: On medium screens, creates a two-column layout.

- **Child Elements**:
  a. Content Container

  ```html
  <div class="flex flex-col gap-y-5">
    <!-- Text and button -->
  </div>
  ```

  - **Purpose**: Contains text content and a call-to-action button.

  - **Attributes and Classes**:

    - `class="..."`:
      - `flex`: Displays as a flex container.
      - `flex-col`: Arranges items vertically.
      - `gap-y-5`: Vertical gap of 1.25rem (20px) between items.

  - **Child Elements**:
    i. Main Heading

    ```html
    <h1 class="text-4xl font-bold md:text-6xl">The Future of Finance</h1>
    ```

    - **Purpose**: Main headline to capture attention.

    - **Attributes and Classes**:

      - `class="..."`:
        - `text-4xl`: Font size of 2.25rem (36px).
        - `font-bold`: Bold font weight.
        - `md:text-6xl`: Font size increases to 3.75rem (60px) on medium screens.

    - **Relationship with Other Elements**:
      - Parent Element: `<div>` (Content Container).
      - Sibling Elements: `<p>`, `<a>`.

    ii. Subheading

    ```html
    <p class="text-lg">The best way to invest your money</p>
    ```

    - **Purpose**: Provides supporting information.

    - **Attributes and Classes**:

      - `class="text-lg"`:
        - `text-lg`: Font size of 1.125rem (18px).

    - **Relationship with Other Elements**:
      - Parent Element: `<div>` (Content Container).
      - Sibling Elements: `<h1>`, `<a>`.

    iii. Call-to-Action Button

    ```html
    <a
      class="bg-green px-6 py-2 text-center text-lg text-white shadow-md shadow-green sm:self-start"
      href="#"
    >
      Get Started
    </a>
    ```

    - **Purpose**: Encourages users to take action.

    - **Attributes and Classes**:

      - `class="..."`:
        - `bg-green`: Background color set to green.
        - `px-6`: Horizontal padding of 1.5rem (24px).
        - `py-2`: Vertical padding of 0.5rem (8px).
        - `text-center`: Centers text horizontally.
        - `text-lg`: Font size of 1.125rem (18px).
        - `text-white`: Text color set to white.
        - `shadow-md`: Applies a medium box shadow.
        - `shadow-green`: Shadow color set to green.
        - `sm:self-start`: Aligns to the start on small screens.
      - `href="#"`: Placeholder link.

    - **Relationship with Other Elements**:
      - Parent Element: `<div>` (Content Container).
      - Sibling Elements: `<h1>`, `<p>`.

  b. Showcase Image

  ```html
  <figure>
    <img src="images/showcase.svg" alt="" />
  </figure>
  ```

  - **Purpose**: Displays a visual complement to the text content.

  - **Attributes and Classes (for `<figure>`)**: None.

  - **Child Elements**:

    - `<img src="images/showcase.svg" alt="" />`:
      - **Purpose**: Embeds the showcase image.
      - **Attributes**:
        - `src="images/showcase.svg"`: Path to the image.
        - `alt=""`: Empty alt attribute (should ideally have descriptive text).

  - **Relationship with Other Elements**:
    - Parent Element: `<section>` (Showcase Section).
    - Sibling Elements: `<div>` (Content Container), `<img>` (Background Image).

  c. Background Image

  ```html
  <img
    class="absolute -z-10 h-96 w-32 hidden md:block dark:hidden"
    src="images/showcase-design.png"
    alt=""
  />
  ```

  - **Purpose**: Adds decorative background elements.

  - **Attributes and Classes**:

    - `class="..."`:
      - `absolute`: Positions the image absolutely.
      - `-z-10`: Sets z-index to -10 (behind other elements).
      - `h-96`: Height of 24rem (384px).
      - `w-32`: Width of 8rem (128px).
      - `hidden`: Hides the image by default.
      - `md:block`: Displays the image on medium screens.
      - `dark:hidden`: Hides the image in dark mode.
    - `src="images/showcase-design.png"`: Path to the background image.
    - `alt=""`: Empty alt attribute.

  - **Relationship with Other Elements**:
    - Parent Element: `<section>` (Showcase Section).
    - Sibling Elements: `<div>` (Content Container), `<figure>`.

## 🗂️ Element Hierarchy Overview

- `<header>` (class: component)
  - `<nav>`
    - `<div>`
      - `<a>` – Logo link
      - `<p>` – 'Individual' link
      - `<p>` – 'Business' link
    - `<div>`
      - `<a>` – Location link
        - `<i>`
        - `<span>`
      - `<p>` – Phone number
      - `<a>` – Login link
  - `<div>` – Dark Mode Toggle
    - `<input>`
  - `<section>`
    - `<div>`
      - `<h1>` – Main heading
      - `<p>` – Subheading
      - `<a>` – Call-to-action button
    - `<figure>`
      - `<img>`
    - `<img>` – Background image

## 🎯 Purpose and Flow of the Component

Let's understand how everything comes together! 🌟

### Layout and Structure 🏗️

- **Header**: Acts as the introduction to the website, providing navigation and branding.
- **Navigation Bar**: Offers links to key sections and includes contact information.
- **Dark Mode Toggle**: Enhances user experience by allowing theme switching.
- **Showcase Section**: Captures attention with a compelling message and visuals.

### Visual Hierarchy 👀

- **Logo and Main Navigation**: Positioned prominently for easy access.
- **Call-to-Action**: Designed to stand out and encourage user engagement.
- **Responsive Design**: Adapts layout and styling based on screen size for optimal viewing.

### Flow of Interaction 🎯

- **Navigation Access**: Users can easily navigate to different sections.
- **Theme Selection**: Users can toggle between light and dark modes.
- **Engagement**: The showcase prompts users to learn more or get started.

## 🤝 Understanding the Relationships

Let's see how the elements interact! 🔗

### 1. Parent-Child Relationships 👪

- `<header>` is the parent of all header content.
- `<nav>` contains two `<div>` sections with navigation items.
- Dark Mode Toggle `<div>` contains the `<input>` checkbox.
- `<section>` holds the showcase content.

### 2. Sizing Relationships 📏

- **Responsive Classes**: Adjust elements based on screen size (e.g., sm:, md:, lg:, 2xl:).
- **Padding and Margin**: Use of px-6, py-2, gap-y-5 to control spacing.

### 3. Color Relationships 🎨

- **Custom Colors**: bg-green, text-primary-500, border-primary-900 indicate a custom color palette.
- **Dark Mode Styling**: Classes like dark:border-white and dark:hidden adjust styling in dark mode.

### 4. Typographical Relationships ✍️

- **Font Sizes**: Varying sizes (text-lg, text-2xl, text-4xl, text-6xl) establish hierarchy.
- **Font Weights**: font-bold emphasizes important text.

### 5. Layout Relationships 📐

- **Flex and Grid Layouts**: Used to arrange content responsively.
- **Positioning**: Absolute positioning for elements like the dark mode toggle and background images.

## 📝 Additional Notes

Here are some extra tips! 🌟

- **Accessibility**: Remember to add meaningful alt text to images for screen readers.
- **Consistent Styling**: Define custom colors and styles in your Tailwind config for consistency.
- **Interactivity**: Enhance the dark mode toggle with JavaScript for full functionality.
- **Optimization**: Minify your CSS for better performance.
