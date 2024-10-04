# Portfolio Section - Styling and Structure Breakdown

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-secondary text-text lg:gap-x-10 lg:flex-row-reverse *:basis-full md:p-16 2xl:rounded"
>
  <div class="space-y-5 *:space-y-2 lg:self-center xl:space-y-10">
    <div>
      <h6
        class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg"
      >
        My Portfolio
      </h6>
      <h2 class="text-2xl capitalize font-bold lg:text-3xl">Recent Works</h2>
    </div>

    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
        corporis eveniet, doloribus impedit fuga eum accusamus libero recusandae
        modi odio, a voluptatem necessitatibus? Eos, commodi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        doloremque nesciunt quod sapiente voluptates? Natus nihil ab illum
        corrupti quos?
      </p>
    </div>
  </div>

  <div class="grid gap-y-5 md:grid-cols-12 md:grid-rows-12 md:gap-0">
    <figure
      class="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-11 md:transition-all md:hover:scale-110 md:grayscale md:hover:grayscale-0"
    >
      <img src="images/portfolio-1.jpg" alt="" />
    </figure>

    <figure
      class="md:col-start-7 md:-col-end-1 md:row-start-3 md:-row-end-1 md:transition-transform md:hover:scale-110"
    >
      <img src="images/portfolio-2.jpg" alt="" />
    </figure>
  </div>
</section>
```

## 🏗️ HTML Structure Breakdown

### 1. Section Container (Portfolio Section)

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-secondary text-text lg:gap-x-10 lg:flex-row-reverse *:basis-full md:p-16 2xl:rounded"
></section>
```

#### 🌟 Purpose:

This container wraps the entire Portfolio section, providing padding, background color, and a responsive flexbox layout.

#### 🎨 Attributes and Classes:

- `p-6`: Adds 1.5rem (24px) padding on all sides for small screens.
- `flex flex-col`: Arranges the section content vertically by default.
- `gap-y-10`: Adds 2.5rem (40px) vertical spacing between child elements.
- `bg-secondary`: Sets the background color using the secondary color from the Tailwind configuration.
- `text-text`: Applies the default text color.
- `lg:gap-x-10`: Adds 2.5rem (40px) horizontal spacing between child elements on large screens (1024px).
- `lg:flex-row-reverse`: Reverses the layout direction (text block after the images) on large screens.
- `*:basis-full`: Ensures the child elements take up the full width available.
- `md:p-16`: Increases the padding to 4rem (64px) on medium screens (768px).
- `2xl:rounded`: Adds rounded corners to the section on extra-large screens (1536px).

#### 🔗 Relationship with Other Elements:

This section contains two main containers: one for text and one for images, arranged using flexbox for responsive layout adjustments.

### 2. Text Block

```html
<div class="space-y-5 *:space-y-2 lg:self-center xl:space-y-10"></div>
```

#### 🌟 Purpose:

This container wraps the heading, subheading, and description of the portfolio section.

#### 🎨 Attributes and Classes:

- `space-y-5`: Adds 1.25rem (20px) vertical spacing between elements.
- `*:space-y-2`: Adjusts vertical spacing for custom breakpoints or specific classes.
- `lg:self-center`: Vertically centers the text block within the flex container on large screens (1024px).
- `xl:space-y-10`: Increases the vertical space to 2.5rem (40px) on extra-large screens (1280px).

#### 🔗 Relationship with Other Elements:

This container holds the heading, subheading, and description paragraphs, organizing them for visual clarity.

### 3. Heading Block (My Portfolio)

```html
<div>
  <h6
    class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg"
  >
    My Portfolio
  </h6>
  <h2 class="text-2xl capitalize font-bold lg:text-3xl">Recent Works</h2>
</div>
```

#### 🌟 Purpose:

The My Portfolio heading introduces the section, while the Recent Works subheading provides context for the images displayed.

#### 🎨 Attributes and Classes (Heading):

- `text-sm`: Sets the text size to 0.875rem (14px) on small screens.
- `pl-6`: Adds 1.5rem (24px) padding to the left.
- `uppercase`: Transforms the text to uppercase.
- `relative`: Positions the heading relatively for styling the before pseudo-element.
- `before:h-1`: Sets the height of the pseudo-element to 0.25rem (4px).
- `before:w-4`: Sets the width of the pseudo-element to 1rem (16px).
- `before:bg-accent`: Colors the pseudo-element with the accent color.
- `before:top-2/4`: Vertically centers the pseudo-element relative to the text.
- `before:-translate-y-2/4`: Adjusts the vertical position of the pseudo-element for perfect alignment.
- `before:left-0`: Aligns the pseudo-element to the left of the text.
- `lg:text-lg`: Increases the text size to 1.125rem (18px) on large screens.

#### 🎨 Attributes and Classes (Subheading):

- `text-2xl`: Sets the text size to 1.5rem (24px) on small screens.
- `capitalize`: Capitalizes the first letter of each word.
- `font-bold`: Applies a bold font weight to the subheading.
- `lg:text-3xl`: Increases the text size to 1.875rem (30px) on large screens (1024px).

#### 🔗 Relationship with Other Elements:

The heading and subheading introduce and describe the portfolio section and are followed by the description paragraphs.

### 4. Description Block (Text Paragraphs)

```html
<div>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
    eveniet, doloribus impedit fuga eum accusamus libero recusandae modi odio, a
    voluptatem necessitatibus? Eos, commodi!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
    doloremque nesciunt quod sapiente voluptates? Natus nihil ab illum corrupti
    quos?
  </p>
</div>
```

#### 🌟 Purpose:

This block contains descriptive text related to the portfolio, providing additional context and details about the works displayed.

#### 🎨 Attributes and Classes:

- `<p>`: Standard paragraph tags with default Tailwind styling.

#### 🔗 Relationship with Other Elements:

These paragraphs follow the subheading, providing additional information about the portfolio content.

### 5. Image Grid Container

```html
<div class="grid gap-y-5 md:grid-cols-12 md:grid-rows-12 md:gap-0"></div>
```

#### 🌟 Purpose:

This container organizes the portfolio images into a responsive grid layout.

#### 🎨 Attributes and Classes:

- `grid`: Converts the container into a grid layout.
- `gap-y-5`: Adds 1.25rem (20px) vertical spacing between the grid items on small screens.
- `md:grid-cols-12`: Defines a 12-column grid on medium screens and larger (768px).
- `md:grid-rows-12`: Defines a 12-row grid on medium screens and larger (768px).
- `md:gap-0`: Removes the gap between grid items on medium screens and larger (768px).

#### 🔗 Relationship with Other Elements:

This container wraps the figure elements, arranging them in a grid layout for the portfolio images.

### 6. Portfolio Image 1

```html
<figure
  class="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-11 md:transition-all md:hover:scale-110 md:grayscale md:hover:grayscale-0"
>
  <img src="images/portfolio-1.jpg" alt="" />
</figure>
```

#### 🌟 Purpose:

This figure displays the first portfolio image and provides interactive hover effects.

#### 🎨 Attributes and Classes:

- `md:col-start-1`: Starts the figure in the first column of the grid on medium screens and larger (768px).
- `md:col-end-9`: Spans the figure to the 9th column on medium screens and larger (768px).
- `md:row-start-1`: Starts the figure in the first row of the grid on medium screens and larger (768px).
- `md:row-end-11`: Spans the figure to the 11th row on medium screens and larger (768px).
- `md:transition-all`: Applies smooth transitions for all properties on hover.
- `md:hover:scale-110`: Scales the figure up to 110% when hovered on medium screens and larger.
- `md:grayscale`: Applies a grayscale filter to the image by default on medium screens and larger.
- `md:hover:grayscale-0`: Removes the grayscale filter on hover.

#### 🔗 Relationship with Other Elements:

This figure contains the first portfolio image and is placed within the grid container. The hover effects make the image interactive.

### 7. Portfolio Image 2

```html
<figure
  class="md:col-start-7 md:-col-end-1 md:row-start-3 md:-row-end-1 md:transition-transform md:hover:scale-110"
>
  <img src="images/portfolio-2.jpg" alt="" />
</figure>
```

#### 🌟 Purpose:

This figure displays the second portfolio image and provides hover effects similar to the first image.

#### 🎨 Attributes and Classes:

- `md:col-start-7`: Starts the figure in the 7th column of the grid on medium screens and larger (768px).
- `md:-col-end-1`: Ends the figure in the last column of the grid on medium screens and larger (768px).
- `md:row-start-3`: Starts the figure in the 3rd row of the grid on medium screens and larger (768px).
- `md:-row-end-1`: Ends the figure in the last row of the grid on medium screens and larger (768px).
- `md:transition-transform`: Applies a smooth transition effect for transformations on hover.
- `md:hover:scale-110`: Scales the figure up to 110% when hovered on medium screens and larger.

#### 🔗 Relationship with Other Elements:

This figure contains the second portfolio image and is placed within the grid container with similar hover effects as the first image.

## 🗂️ Element Hierarchy Overview

- `<section>` – Portfolio section container
  - `<div>` – Text block container
    - `<div>` – Heading block
      - `<h6>` – Section heading
      - `<h2>` – Subheading
    - `<div>` – Description block
      - `<p>` – First description paragraph
      - `<p>` – Second description paragraph
  - `<div>` – Image grid container
    - `<figure>` – Portfolio image 1 container
      - `<img>` – Image element
    - `<figure>` – Portfolio image 2 container
      - `<img>` – Image element

## 🚀 Purpose and Flow of the Document

### 🧱 Layout

The Portfolio Section is divided into two main parts: the text block and the image grid. The flexbox layout adjusts responsively, with the images placed after the text on larger screens. The grid layout for images allows for creative placement, providing a visually dynamic portfolio.

### 🏗️ Structure

The section is structured with a text block introducing the portfolio and providing descriptions, followed by a grid container that holds the portfolio images. Each image has hover effects that create an interactive browsing experience.

### 🎯 Flow of Interaction

Users are first introduced to the portfolio with a heading and description, followed by visual elements (the images). Hover effects encourage interaction, as images change in scale and filter on hover.

### 🎨 Visual Hierarchy

The heading and subheading are emphasized with larger, bold text, while the images are the focal point of the section. The hover effects enhance the visual hierarchy by making the images interactive and dynamic.

## 🤝 Understanding the Relationships

- Parent-Child Relationships:
  The section container holds both the text block and the image grid, with the grid organizing the images into specific columns and rows.

- Sizing Relationships:
  The section adjusts padding and spacing based on screen size, and the images scale on hover to create a dynamic, interactive experience.

- Color Relationships:
  The accent color is applied to the heading's pseudo-element, while the secondary color defines the background. The hover effect includes grayscale adjustments for added visual interest.

- Layout Relationships:
  The grid layout allows for creative image placement within the section, and the flexbox layout adapts the positioning of the text and images for different screen sizes.

## 📝 Additional Notes

- The section provides a responsive, grid-based layout that adjusts dynamically based on screen size. 📱💻
- Hover effects on the images add an interactive, engaging user experience. 🎨
- Tailwind's utility-first classes make it easy to customize this section's layout and behavior. 🚀
