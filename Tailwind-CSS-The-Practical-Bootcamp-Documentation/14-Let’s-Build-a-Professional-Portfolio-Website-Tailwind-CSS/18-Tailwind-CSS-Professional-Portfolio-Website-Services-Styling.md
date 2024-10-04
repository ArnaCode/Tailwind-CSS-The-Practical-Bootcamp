# Services Section - Styling and Structure Breakdown

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-primary text-text lg:gap-x-10 lg:flex-row-reverse *:basis-full md:p-16"
>
  <div class="space-y-5 *:space-y-2 lg:self-center xl:space-y-10">
    <div>
      <h6
        class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg"
      >
        why choose me
      </h6>
      <h2 class="text-2xl capitalize font-bold lg:text-3xl">
        Best Services for you
      </h2>
    </div>

    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
        corporis eveniet, doloribus impedit
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      </p>
    </div>

    <a
      class="uppercase inline-block p-2 border-2 border-accent self-start text-xs rounded sm:text-lg sm:px-4"
      href="#"
    >
      Learn More
    </a>
  </div>

  <div
    class="grid gap-5 *:flex *:flex-col *:gap-y-5 *:items-center *:border-2 *:border-accent *:rounded *:p-8 sm:grid-cols-2"
  >
    <div>
      <figure class="h-28">
        <img src="images/service-1.png" alt="" />
      </figure>
      <h5 class="text-xl text-accent text-center">Wedding</h5>
      <p class="text-center">Lorem ipsum dolor sit amet adipisicing elit.</p>
    </div>

    <div>
      <figure class="h-28">
        <img src="images/service-2.png" alt="" />
      </figure>
      <h5 class="text-xl text-accent text-center">Company Profile</h5>
      <p class="text-center">Lorem ipsum dolor sit amet adipisicing elit.</p>
    </div>

    <div>
      <figure class="h-28">
        <img src="images/service-3.png" alt="" />
      </figure>
      <h5 class="text-xl text-accent text-center">Model Photoshoot</h5>
      <p class="text-center">Lorem ipsum dolor sit amet adipisicing elit.</p>
    </div>

    <div>
      <figure class="h-28">
        <img src="images/service-4.png" alt="" />
      </figure>
      <h5 class="text-xl text-accent text-center">Videography</h5>
      <p class="text-center">Lorem ipsum dolor sit amet adipisicing elit.</p>
    </div>
  </div>
</section>
```

## 🏗️ HTML Structure Breakdown

### 1. Section Container (Services Section)

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-primary text-text lg:gap-x-10 lg:flex-row-reverse *:basis-full md:p-16"
></section>
```

#### 🌟 Purpose:

This section container wraps the entire Services section, organizing the content into a flexible layout that adjusts responsively.

#### 🎨 Attributes and Classes:

- `p-6`: Adds 1.5rem (24px) padding on all sides for small screens.
- `flex flex-col`: Arranges the section content vertically by default, using a flexbox layout.
- `gap-y-10`: Adds 2.5rem (40px) vertical spacing between child elements.
- `bg-primary`: Sets the background color using the primary color from the Tailwind configuration.
- `text-text`: Applies the default text color for the section.
- `lg:gap-x-10`: Adds 2.5rem (40px) horizontal spacing between child elements on large screens (1024px).
- `lg:flex-row-reverse`: Reverses the order of the flex items on large screens.
- `*:basis-full`: Ensures the child elements take up the full width of the available space.
- `md:p-16`: Increases the padding to 4rem (64px) on medium screens (768px).

#### 🔗 Relationship with Other Elements:

This section container wraps both the text block and the services grid, organizing the layout based on screen size.

### 2. Text Block

```html
<div class="space-y-5 *:space-y-2 lg:self-center xl:space-y-10"></div>
```

#### 🌟 Purpose:

This container wraps the heading, subheading, and the description text for the services section.

#### 🎨 Attributes and Classes:

- `space-y-5`: Adds 1.25rem (20px) vertical spacing between child elements.
- `*:space-y-2`: Adjusts the vertical spacing for custom breakpoints or specific elements.
- `lg:self-center`: Vertically centers the text block in the flex container on large screens (1024px).
- `xl:space-y-10`: Increases the vertical spacing between elements to 2.5rem (40px) on extra-large screens (1280px).

#### 🔗 Relationship with Other Elements:

This container groups the headings, descriptions, and button for the services section, making it a key part of the textual content.

### 3. Heading Block (Why Choose Me)

```html
<div>
  <h6
    class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg"
  >
    why choose me
  </h6>
  <h2 class="text-2xl capitalize font-bold lg:text-3xl">
    Best Services for you
  </h2>
</div>
```

#### 🌟 Purpose:

The Why Choose Me heading introduces the services section, followed by the subheading, which provides context for the services offered.

#### 🎨 Attributes and Classes (Heading):

- `text-sm`: Sets the text size to 0.875rem (14px) on small screens.
- `pl-6`: Adds 1.5rem (24px) padding to the left of the heading.
- `uppercase`: Transforms the text to uppercase.
- `relative`: Positions the heading relatively to allow for the before pseudo-element.
- `before:h-1`: Sets the height of the pseudo-element to 0.25rem (4px).
- `before:w-4`: Sets the width of the pseudo-element to 1rem (16px).
- `before:bg-accent`: Colors the pseudo-element with the accent color from the Tailwind configuration.
- `before:top-2/4`: Vertically centers the pseudo-element relative to the text.
- `before:-translate-y-2/4`: Adjusts the vertical positioning of the pseudo-element to align with the middle of the text.
- `before:left-0`: Positions the pseudo-element at the far left of the text.
- `lg:text-lg`: Increases the text size to 1.125rem (18px) on large screens.

#### 🎨 Attributes and Classes (Subheading):

- `text-2xl`: Sets the text size to 1.5rem (24px) on small screens.
- `capitalize`: Capitalizes the first letter of each word.
- `font-bold`: Applies a bold font weight to the subheading.
- `lg:text-3xl`: Increases the text size to 1.875rem (30px) on large screens.

#### 🔗 Relationship with Other Elements:

This heading introduces the services section and leads into the service descriptions.

### 4. Description Block (Text Paragraphs)

```html
<div>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
    eveniet, doloribus impedit
  </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium</p>
</div>
```

#### 🌟 Purpose:

This block contains the descriptive text that adds context to the services section.

#### 🎨 Attributes and Classes:

- `<p>`: Standard paragraph tags with default Tailwind styling, organizing the descriptive content into separate blocks.

#### 🔗 Relationship with Other Elements:

These paragraphs follow the subheading, providing additional descriptive text related to the services offered.

### 5. Call-to-Action Button

```html
<a
  class="uppercase inline-block p-2 border-2 border-accent self-start text-xs rounded sm:text-lg sm:px-4"
  href="#"
>
  Learn More
</a>
```

#### 🌟 Purpose:

This button encourages users to take action and learn more about the services offered.

#### 🎨 Attributes and Classes:

- `uppercase`: Transforms the text to uppercase.
- `inline-block`: Ensures the button behaves as an inline block element, maintaining its width.
- `p-2`: Adds 0.5rem (8px) padding.
- `border-2`: Sets a 2px border around the button.
- `border-accent`: Colors the border with the accent color.
- `self-start`: Aligns the button to the start of its container.
- `text-xs`: Sets the text size to 0.75rem (12px) on small screens.
- `rounded`: Adds rounded corners to the button.
- `sm:text-lg`: Increases the text size to 1.125rem (18px) on medium screens and larger (640px).
- `sm:px-4`: Adds 1rem (16px) horizontal padding on medium screens and larger (640px).

#### 🔗 Relationship with Other Elements:

This button serves as a call-to-action, encouraging users to explore more about the services.

### 6. Services Grid Container

```html
<div
  class="grid gap-5 *:flex *:flex-col *:gap-y-5 *:items-center *:border-2 *:border-accent *:rounded *:p-8 sm:grid-cols-2"
></div>
```

#### 🌟 Purpose:

This container organizes the services into a grid layout, with individual service cards displayed in a two-column layout on medium screens and larger.

#### 🎨 Attributes and Classes:

- `grid`: Converts the container into a grid layout.
- `gap-5`: Adds 1.25rem (20px) vertical and horizontal spacing between grid items on small screens.
- `*:flex *:flex-col *:gap-y-5 *:items-center`: Custom classes for responsive layout adjustments.
- `*:border-2 *:border-accent`: Adds a border and the accent color to individual service cards.
- `*:rounded`: Applies rounded corners to the service cards.
- `*:p-8`: Adds 2rem (32px) padding to individual service cards.
- `sm:grid-cols-2`: Defines a two-column grid layout on medium screens (640px) and larger.

#### 🔗 Relationship with Other Elements:

This container wraps all the service cards, arranging them in a grid layout for responsive behavior.

### 7. Individual Service Cards

Each service card consists of an image, a title, and a description, and they are repeated for each service.

#### Service Image (Figure)

```html
<figure class="h-28">
  <img src="images/service-1.png" alt="" />
</figure>
```

##### 🌟 Purpose:

The service image gives a visual representation of each service offered.

##### 🎨 Attributes and Classes:

- `h-28`: Sets the height of the image to 7rem (112px).

#### Service Title

```html
<h5 class="text-xl text-accent text-center">Wedding</h5>
```

##### 🌟 Purpose:

The service title provides the name of the service being offered.

##### 🎨 Attributes and Classes:

- `text-xl`: Sets the text size to 1.25rem (20px).
- `text-accent`: Applies the accent color to the title.
- `text-center`: Aligns the title to the center.

#### Service Description

```html
<p class="text-center">Lorem ipsum dolor sit amet adipisicing elit.</p>
```

##### 🌟 Purpose:

This paragraph provides a brief description of the service.

##### 🎨 Attributes and Classes:

- `text-center`: Centers the text within the service card.

#### 🔗 Relationship with Other Elements:

Each service card consists of a figure for the image, an h5 for the title, and a p for the description, all wrapped within the services grid.

## 🗂️ Element Hierarchy Overview

- `<section>` – Services section container
  - `<div>` – Text block container
    - `<div>` – Heading and subheading wrapper
      - `<h6>` – Section heading
      - `<h2>` – Section subheading
    - `<div>` – Description block
      - `<p>` – First description paragraph
      - `<p>` – Second description paragraph
    - `<a>` – Call-to-action button
  - `<div>` – Services grid container
    - `<div>` – Service card 1
      - `<figure>` – Service image container
        - `<img>` – Service image 1
      - `<h5>` – Service title 1
      - `<p>` – Service description 1
    - `<div>` – Service card 2
      - `<figure>` – Service image container
        - `<img>` – Service image 2
      - `<h5>` – Service title 2
      - `<p>` – Service description 2
    - `<div>` – Service card 3
      - `<figure>` – Service image container
        - `<img>` – Service image 3
      - `<h5>` – Service title 3
      - `<p>` – Service description 3
    - `<div>` – Service card 4
      - `<figure>` – Service image container
        - `<img>` – Service image 4
      - `<h5>` – Service title 4
      - `<p>` – Service description 4

## 🚀 Purpose and Flow of the Document

### 🧱 Layout

The Services Section is split into two main parts: the text block and the services grid. On larger screens, the grid and text are placed side by side, while on smaller screens, they stack vertically.

### 🏗️ Structure

This section begins with a heading and subheading introducing the services, followed by a call-to-action button. The services are listed in a responsive grid, with each service card displaying an image, title, and description.

### 🎯 Flow of Interaction

The user is first introduced to the section with a heading and a brief description of the services. The services grid allows users to view and learn more about each service, with clear calls to action.

### 🎨 Visual Hierarchy

The section heading and subheading are bold and larger, drawing attention. Each service card is presented with a consistent structure: image, title, and description, making the content easy to navigate.

## 🤝 Understanding the Relationships

- Parent-Child Relationships:
  The section container wraps both the text block and the services grid. Each service card contains a figure, title, and description, providing a clear parent-child structure.

- Sizing Relationships:
  The service cards and their contents scale based on screen size, ensuring a responsive layout that maintains readability.

- Color Relationships:
  The accent color is applied to the titles, borders, and buttons, ensuring consistent color usage throughout the section.

- Layout Relationships:
  The flexbox layout allows for responsive alignment, adjusting the position of the grid and text block based on screen size.

## 📝 Additional Notes

- The Services Section uses a responsive grid to display services clearly and concisely. 📱💻
- The call-to-action button encourages users to learn more about the services offered. 🚀
- Tailwind's utility classes ensure flexibility and ease of customization for future layout adjustments. 🎨
