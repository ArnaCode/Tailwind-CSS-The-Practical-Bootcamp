# Motto Section - Styling and Structure Breakdown

## HTML Structure

```html
<section class="p-6 bg-secondary text-text md:p-16 2xl:rounded">
  <div
    class="p-2 flex flex-col gap-y-5 lg:w-3/4 lg:mx-auto lg:relative lg:after lg:after:h-2 lg:after:w-16 lg:after:-bottom-6 lg:after:left-2/4 lg:after:-translate-x-2/4"
  >
    <blockquote
      cite="https://www.azquotes.com/author/8044-Martin_Luther_King_Jr/tag/brother"
    >
      <p
        class="before:content-['\201C'] after:content-['\201D'] text-xl text-center lg:text-2xl"
      >
        We've learned to fly the air like birds, we've learned to swim the seas
        like fish, and yet we haven't learned to walk the earth as brothers and
        sisters.
      </p>
    </blockquote>
    <p class="text-center font-bold">— Martin Luther King, Jr., Love</p>
  </div>
</section>
```

## 🏗️ HTML Structure Breakdown

### 1. Section Container (Motto Section)

```html
<section class="p-6 bg-secondary text-text md:p-16 2xl:rounded"></section>
```

🌟 **Purpose:**
This container wraps the entire motto section, providing background color, padding, and a responsive layout.

🎨 **Attributes and Classes:**

- `p-6`: Adds 1.5rem (24px) padding on all sides for small screens.
- `md:p-16`: Adds 4rem (64px) padding on medium screens and larger (768px).
- `bg-secondary`: Sets the background color using the secondary color from the Tailwind configuration.
- `text-text`: Applies the default text color defined in the Tailwind theme.
- `2xl:rounded`: Adds rounded corners to the section on extra-large screens (1536px).

🔗 **Relationship with Other Elements:**
This section acts as the container for the quote and author attribution. It creates the visual background for the entire motto.

### 2. Content Wrapper (Inner Div)

```html
<div
  class="p-2 flex flex-col gap-y-5 lg:w-3/4 lg:mx-auto lg:relative lg:after lg:after:h-2 lg:after:w-16 lg:after:-bottom-6 lg:after:left-2/4 lg:after:-translate-x-2/4"
></div>
```

🌟 **Purpose:**
This wrapper organizes the blockquote and the author attribution vertically. It also adds a visual line below the content using a pseudo-element.

🎨 **Attributes and Classes:**

- `p-2`: Adds 0.5rem (8px) padding around the content.
- `flex flex-col`: Arranges the content in a vertical column.
- `gap-y-5`: Adds 1.25rem (20px) vertical spacing between child elements.
- `lg:w-3/4`: Limits the width of the container to 75% on large screens (1024px).
- `lg:mx-auto`: Horizontally centers the container on large screens (1024px).
- `lg:relative`: Positions the container relatively to allow absolute positioning of the after pseudo-element.
- `lg:after:h-2`: The after pseudo-element has a height of 0.5rem (8px) on large screens.
- `lg:after:w-16`: The after pseudo-element has a width of 4rem (64px) on large screens.
- `lg:after:-bottom-6`: Positions the after pseudo-element 1.5rem (24px) below the container on large screens.
- `lg:after:left-2/4`: Centers the after pseudo-element horizontally within the container.
- `lg:after:-translate-x-2/4`: Shifts the after pseudo-element by 50% to the left, ensuring it's centered.

🔗 **Relationship with Other Elements:**
The wrapper contains the blockquote and author attribution, keeping them vertically aligned and adding decorative spacing below the quote.

### 3. Blockquote (Quotation)

```html
<blockquote
  cite="https://www.azquotes.com/author/8044-Martin_Luther_King_Jr/tag/brother"
></blockquote>
```

🌟 **Purpose:**
This blockquote contains the main quote and provides semantic meaning to the text, indicating it's a citation.

🎨 **Attributes and Classes:**

- `cite`: Provides a URL to the source of the quote, enhancing accessibility and providing proper attribution.

🔗 **Relationship with Other Elements:**
The blockquote wraps the paragraph containing the quote, semantically marking it as a cited quotation.

### 4. Quotation Text (Paragraph)

```html
<p
  class="before:content-['\201C'] after:content-['\201D'] text-xl text-center lg:text-2xl"
></p>
```

🌟 **Purpose:**
This paragraph contains the main text of the quote, with decorative quotation marks added via CSS.

🎨 **Attributes and Classes:**

- `before:content-['\201C']`: Adds an opening quotation mark (") before the text.
- `after:content-['\201D']`: Adds a closing quotation mark (") after the text.
- `text-xl`: Sets the text size to 1.25rem (20px) on small screens.
- `text-center`: Centers the text horizontally.
- `lg:text-2xl`: Increases the text size to 1.5rem (24px) on large screens (1024px).

🔗 **Relationship with Other Elements:**
The paragraph is the child of the blockquote element and serves as the primary content of the motto.

### 5. Author Attribution (Paragraph)

```html
<p class="text-center font-bold">— Martin Luther King, Jr., Love</p>
```

🌟 **Purpose:**
This paragraph provides attribution to the author of the quote, with emphasis on the author's name.

🎨 **Attributes and Classes:**

- `text-center`: Centers the text horizontally.
- `font-bold`: Makes the text bold, emphasizing the author's name.

🔗 **Relationship with Other Elements:**
This paragraph follows the quote and provides proper attribution to Martin Luther King, Jr.

## 🗂️ Element Hierarchy Overview

- `<section>` – Motto section container (p-6 bg-secondary)
  - `<div>` – Content wrapper (p-2 flex flex-col)
    - `<blockquote>` – Blockquote element for the quote (cite)
      - `<p>` – Quotation text (before:content-['\201C'] after:content-['\201D'])
    - `<p>` – Author attribution (text-center font-bold)

## 🚀 Purpose and Flow of the Document

### 🧱 Layout

The motto section is designed to occupy a prominent space on the page, with generous padding and a centered layout. It ensures the quote by Martin Luther King, Jr. is visually emphasized, while the surrounding space makes it easy to focus on the content. The padding adapts for different screen sizes, maintaining readability and balance.

### 🏗️ Structure

The section is structured with a blockquote for the quote, followed by an attribution paragraph for the author. This structure provides clear semantic meaning, with the quote being the main focal point and the author emphasized afterward. The container also utilizes flexbox to ensure vertical alignment of the content, and pseudo-elements are used to add a decorative underline beneath the quote.

### 🎯 Flow of Interaction

Although this section is largely informational, the interaction lies in the visual hierarchy and ease of reading. The centered layout and large font sizes guide the reader's eyes to the quote first, followed by the author attribution. The decorative line under the quote provides a visual stopping point, making the entire section feel complete and balanced.

### 🎨 Visual Hierarchy

The large text sizes and centered content create a clear visual hierarchy, where the quote is the main focus. The use of pseudo-elements adds subtle visual enhancement, while the contrast between the secondary background and the text color ensures legibility.

## 🤝 Understanding the Relationships

- **Parent-Child Relationships:**
  The section container is the parent of the div, which houses the blockquote and author attribution. These elements are vertically stacked within the flex column layout.

- **Sizing Relationships:**
  The padding, text sizes, and pseudo-elements adapt based on the screen size, ensuring the motto is readable and visually balanced on all devices.

- **Color Relationships:**
  The background color and text color create contrast, highlighting the quotation. The pseudo-element adds an extra visual touch below the quote.

## 📝 Additional Notes

- The section is fully responsive, adapting its layout and spacing across various screen sizes. 📱💻
- The use of Tailwind's utility-first approach ensures the design remains easy to adjust and extend. 🚀
- The cite attribute in the blockquote enhances accessibility by referencing the source of the quote. 🌍
