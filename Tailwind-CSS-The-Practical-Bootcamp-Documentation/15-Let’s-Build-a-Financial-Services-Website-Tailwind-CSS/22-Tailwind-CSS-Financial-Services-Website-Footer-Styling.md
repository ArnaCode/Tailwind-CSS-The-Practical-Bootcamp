# **Footer Section - Styling and Structure Breakdown**

```html
<footer
  class="px-4 py-8 sm:py-20 sm:px-8 lg:px-12 2xl:rounded-2xl 2xl:my-8 2xl:border 2xl:border-blue"
>
  <div class="grid gap-8 md:grid-cols-2 *:space-y-4">
    <div>
      <h2 class="text-2xl font-bold">FNX</h2>
      <p class="dark:text-primary-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        perspiciatis mollitia ratione delectus vitae repellat, sequi aut
        voluptatibus adipisci natus corporis maiores .
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold">Contact Us</h3>
      <p class="dark:text-primary-500">1-500-123-4567</p>
      <p class="dark:text-primary-500">1234 Main St, New York, NY 10001, USA</p>
    </div>
  </div>
</footer>
```

## 🏗️ HTML Structure Breakdown

### 1. Footer Container

```html
<footer
  class="px-4 py-8 sm:py-20 sm:px-8 lg:px-12 2xl:rounded-2xl 2xl:my-8 2xl:border 2xl:border-blue"
></footer>
```

**🌟 Purpose:**
The footer serves as the container for the entire footer section, providing padding, borders, and layout structure for the content inside it.

**🎨 Attributes and Classes:**

- `px-4`: Applies 1rem (16px) of horizontal padding on both sides, ensuring content does not touch the edges on smaller screens.
- `py-8`: Adds 2rem (32px) of vertical padding on smaller screens, providing space above and below the content.
- `sm:py-20`: On small screens (640px and up), the vertical padding increases to 5rem (80px), giving the section more vertical breathing space.
- `sm:px-8`: On small screens and up, the horizontal padding increases to 2rem (32px), ensuring consistent spacing across screen sizes.
- `lg:px-12`: On large screens (1024px and up), the horizontal padding increases further to 3rem (48px), creating a more spacious layout.
- `2xl:rounded-2xl`: On extra-large screens (1536px and up), the corners of the footer are rounded with a large radius (1rem or 16px), creating a modern, visually pleasing appearance.
- `2xl:my-8`: Adds a margin of 2rem (32px) on the top and bottom of the footer on extra-large screens, separating it from other sections.
- `2xl:border`: Adds a 1px solid border around the footer on extra-large screens, giving the section a more defined look.
- `2xl:border-blue`: The border is colored blue, providing visual separation and matching the design theme.

**🔗 Relationship with Other Elements:**
This footer section serves as the container for all footer content, providing padding and spacing across screen sizes and visually separating the footer from other sections with borders on larger screens.

### 2. Footer Content Wrapper (Grid Layout)

```html
<div class="grid gap-8 md:grid-cols-2 *:space-y-4"></div>
```

**🌟 Purpose:**
This div organizes the footer content into a two-column grid layout on medium screens and larger, ensuring the content is neatly arranged and responsive.

**🎨 Attributes and Classes:**

- `grid`: Applies a CSS Grid layout to the content wrapper, allowing child elements to be structured in grid form.
- `gap-8`: Adds 2rem (32px) of space between grid items, ensuring that the two content blocks (left and right) are not too close to each other.
- `md:grid-cols-2`: On medium screens (768px and up), the grid is split into two equal-width columns, allowing the content to sit side by side.
- `*:space-y-4`: Adds vertical spacing between children within any nested containers, ensuring consistent spacing inside those elements.

**🔗 Relationship with Other Elements:**
This grid layout ensures that the footer content is divided evenly and remains responsive, adjusting to screen sizes and providing a clean, organized structure for the two content blocks.

### 3. Left Content Block (Company Info)

```html
<div>
  <h2 class="text-2xl font-bold">FNX</h2>
  <p class="dark:text-primary-500">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
  </p>
</div>
```

**🌟 Purpose:**
This div contains the company's name and a brief description, providing essential information about the brand.

**🎨 Attributes and Classes:**

- `<h2 class="text-2xl font-bold">`:
  - `text-2xl`: The font size is set to 1.5rem (24px), making the company name prominent and eye-catching.
  - `font-bold`: The text is bolded, adding emphasis and making the company name stand out more.
- `<p class="dark:text-primary-500">`:
  - `dark:text-primary-500`: In dark mode, the text color changes to primary-500, a lighter shade of the primary color, ensuring readability against a dark background.

**🔗 Relationship with Other Elements:**
This block provides essential company information, ensuring that users can quickly identify the brand (through the bold FNX heading) and read the company's mission or description.

### 4. Right Content Block (Contact Info)

```html
<div>
  <h3 class="text-lg font-semibold">Contact Us</h3>
  <p class="dark:text-primary-500">1-500-123-4567</p>
  <p class="dark:text-primary-500">1234 Main St, New York, NY 10001, USA</p>
</div>
```

**🌟 Purpose:**
This div contains the contact information, including the phone number and address, allowing users to easily find ways to reach out to the company.

**🎨 Attributes and Classes:**

- `<h3 class="text-lg font-semibold">`:
  - `text-lg`: The font size is set to 1.125rem (18px), ensuring the heading is distinguishable but slightly smaller than the main FNX title.
  - `font-semibold`: The text is semi-bold, giving the heading more visual weight without overpowering the content.
- `<p class="dark:text-primary-500">`:
  - `dark:text-primary-500`: The text color changes to primary-500 in dark mode, ensuring readability.

**🔗 Relationship with Other Elements:**
This block provides crucial contact details, making it easy for users to find the company's phone number and address. The contact heading and the details are visually grouped for ease of access.

## 🗂️ Element Hierarchy Overview

- `<footer>` – Main container for the entire Footer Section.
  - `<div>` – Grid container for the footer content (company info and contact info).
    - `<div>` – Container for the company information.
      - `<h2>` – Company name ("FNX").
      - `<p>` – Company description ("Lorem ipsum...").
    - `<div>` – Container for the contact information.
      - `<h3>` – Contact heading ("Contact Us").
      - `<p>` – Company phone number ("1-500-123-4567").
      - `<p>` – Company address ("1234 Main St, New York...").

## 🚀 Purpose and Flow of the Document

The Footer Section provides essential information about the company, including a brief description and contact details. It serves as a way to conclude the page, giving users access to important details in a clear, structured format.

### Purpose:

1. **Provide Company Information:**
   The footer includes the company name and a brief description, offering users an understanding of the brand and its purpose.

2. **Easy Access to Contact Details:**
   The contact information is prominently displayed, ensuring that users can easily find the phone number and address for further inquiries.

### Flow of Interaction:

1. **Company Info First:**
   Users are first introduced to the brand name and a brief description, giving them a sense of the company's mission.

2. **Contact Information Next:**
   After the company info, the contact details are presented in a clean, organized layout, making it easy for users to reach out if needed.

## 🤝 Understanding the Relationships

### 1. Parent-Child Relationships:

- The footer acts as the main container for the entire footer section, organizing the content into two distinct columns (company info and contact info).
- Each content block (company and contact) is a child of the grid container, ensuring they are structured neatly and respond to different screen sizes.

### 2. Sizing Relationships:

- The grid layout ensures that the two content blocks are displayed side by side on medium screens and larger, while they stack vertically on smaller screens to maintain readability.

### 3. Color Relationships:

- The text color changes to a lighter shade (primary-500) in dark mode, ensuring the content is readable against the darker background. The blue border in extra-large screens visually separates the footer from other sections.

### 4. Typographical Relationships:

- The company name is the largest and boldest text, drawing the user's attention first, while the contact heading is slightly smaller but still bold, guiding users to the contact information.

### 5. Layout Relationships:

- The grid layout ensures that the company info and contact info are equally spaced and organized, providing a balanced and easily navigable footer on both small and large screens.

## 📝 Additional Notes

- **Responsive Design:**
  The footer is fully responsive, with the grid layout adjusting based on screen size to ensure that the content remains clear and accessible on all devices.

- **Cohesive Design Language:**
  The footer follows the same design principles as the rest of the page, with consistent typography, padding, and color schemes to create a unified visual experience.
