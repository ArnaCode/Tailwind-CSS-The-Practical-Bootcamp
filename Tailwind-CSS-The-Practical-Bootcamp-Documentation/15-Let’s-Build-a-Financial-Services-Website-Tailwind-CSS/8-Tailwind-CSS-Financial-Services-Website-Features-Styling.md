# **Features Section - Styling and Structure Breakdown**

```html
<section class="component bg-primary-300 dark:bg-primary-900">
  <div class="flex flex-col gap-y-5 md:gap-y-3">
    <h2 class="text-center text-2xl font-bold">
      Different Finances for Different Needs
    </h2>
    <p class="text-center dark:text-primary-500">
      Lorem ipsum dolor sit amet elit adipisicing elit.
    </p>
  </div>

  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div
      class="flex flex-col gap-y-4 items-center bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900"
    >
      <figure>
        <img
          class="size-28 rounded-full bg-blue/10 p-4 dark:bg-transparent"
          src="images/home-finance.svg"
          alt=""
        />
      </figure>

      <h4 class="text-lg font-semibold text-primary-900 dark:text-white">
        Home Finance
      </h4>

      <p class="text-center dark:text-primary-600">
        Lorem ipsum dolor, sit amet adipisicing elit.
      </p>
    </div>

    <div
      class="flex flex-col gap-y-4 items-center bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900"
    >
      <figure>
        <img
          class="size-28 rounded-full bg-orange/10 p-4 dark:bg-transparent"
          src="images/car-finance.svg"
          alt=""
        />
      </figure>

      <h4 class="text-lg font-semibold text-primary-900 dark:text-white">
        Car Finance
      </h4>

      <p class="text-center dark:text-primary-600">
        Lorem ipsum dolor, sit amet adipisicing elit.
      </p>
    </div>

    <div
      class="flex flex-col gap-y-4 items-center bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900"
    >
      <figure>
        <img
          class="size-28 rounded-full bg-green/10 p-4 dark:bg-transparent"
          src="images/life-finance.svg"
          alt=""
        />
      </figure>

      <h4 class="text-lg font-semibold text-primary-900 dark:text-white">
        Life Finance
      </h4>

      <p class="text-center dark:text-primary-600">
        Lorem ipsum dolor, sit amet adipisicing elit.
      </p>
    </div>

    <div
      class="flex flex-col gap-y-4 items-center bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900"
    >
      <figure>
        <img
          class="size-28 rounded-full bg-blue/10 p-4 dark:bg-transparent"
          p-4
          dark:bg-transparent
          src="images/business-finance.svg"
          alt=""
        />
      </figure>

      <h4 class="text-lg font-semibold text-primary-900 dark:text-white">
        Business Finance
      </h4>

      <p class="text-center dark:text-primary-600">
        Lorem ipsum dolor, sit amet adipisicing elit.
      </p>
    </div>

    <div
      class="flex flex-col gap-y-4 items-center bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900"
    >
      <figure>
        <img
          class="size-28 rounded-full bg-orange/10 p-4 dark:bg-transparent"
          p-4
          dark:bg-transparent
          src="images/travel-finance.svg"
          alt=""
        />
      </figure>

      <h4 class="text-lg font-semibold text-primary-900 dark:text-white">
        Travel Finance
      </h4>

      <p class="text-center dark:text-primary-600">
        Lorem ipsum dolor, sit amet adipisicing elit.
      </p>
    </div>

    <div
      class="flex flex-col gap-y-4 items-center bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900"
    >
      <figure>
        <img
          class="size-28 rounded-full bg-green/10 p-4 dark:bg-transparent"
          p-4
          dark:bg-transparent
          src="images/other-finance.svg"
          alt=""
        />
      </figure>

      <h4 class="text-lg font-semibold text-primary-900 dark:text-white">
        Other Finance
      </h4>

      <p class="text-center dark:text-primary-600">
        Lorem ipsum dolor, sit amet adipisicing elit.
      </p>
    </div>
  </div>
</section>
```

## 🏗️ HTML Structure Breakdown

### 1. Features Section Container

```html
<section class="component bg-primary-300 dark:bg-primary-900"></section>
```

**🌟 Purpose:**
This section acts as the main container for the entire "Features" block, grouping all content related to the different types of finances offered by the company.

**🎨 Attributes and Classes:**

- `component`: A custom class marking this as a key section of the webpage.
- `bg-primary-300`: Applies a background color using a lighter shade of the primary color (primary-300), maintaining the visual theme.
- `dark:bg-primary-900`: In dark mode, this switches the background to a much darker shade (primary-900), ensuring proper contrast and visibility for dark theme users.

**🔗 Relationship with Other Elements:**
This section wraps both the title block and the grid of finance features, creating a cohesive visual section.

### 2. Title Block Container

```html
<div class="flex flex-col gap-y-5 md:gap-y-3"></div>
```

**🌟 Purpose:**
This div contains the title and introductory paragraph of the features section, providing a clear heading for the finance options.

**🎨 Attributes and Classes:**

- `flex`: Establishes a flexible box layout, arranging its children in a vertical stack by default.
- `flex-col`: Ensures the flex container arranges items in a column, placing the heading and paragraph one above the other.
- `gap-y-5`: Adds vertical space (1.25rem or 20px) between child elements for separation.
- `md:gap-y-3`: On medium screens and larger (768px and up), reduces the vertical space between elements to 0.75rem (12px), tightening the layout.

**🔗 Relationship with Other Elements:**
This div controls the layout for the heading and the introductory paragraph, ensuring consistent spacing across different screen sizes.

### 3. Main Heading

```html
<h2 class="text-center text-2xl font-bold">
  Different Finances for Different Needs
</h2>
```

**🌟 Purpose:**
This heading (h2) introduces the section, explaining that the company offers various financial services for different needs.

**🎨 Attributes and Classes:**

- `text-center`: Centers the heading text, aligning it horizontally in the middle of the container.
- `text-2xl`: Sets the font size to 1.5rem (24px), making the heading large enough to stand out.
- `font-bold`: Applies bold styling to the heading, increasing the font weight for emphasis.

**🔗 Relationship with Other Elements:**
This heading is the first visible element, providing a clear and bold introduction to the finance options listed below.

### 4. Introductory Paragraph

```html
<p class="text-center dark:text-primary-500">
  Lorem ipsum dolor sit amet elit adipisicing elit.
</p>
```

**🌟 Purpose:**
This paragraph (p) provides a short description for the section, adding context to the different finance options.

**🎨 Attributes and Classes:**

- `text-center`: Centers the text horizontally, matching the alignment of the heading for consistency.
- `dark:text-primary-500`: Changes the text color to primary-500 in dark mode, ensuring readability in low-light settings.

**🔗 Relationship with Other Elements:**
This paragraph complements the heading by giving a brief overview of what users can expect in the section.

### 5. Grid Layout for Finance Options

```html
<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"></div>
```

**🌟 Purpose:**
This div contains the grid layout for displaying the finance options, arranging them in rows and columns depending on screen size.

**🎨 Attributes and Classes:**

- `grid`: Establishes a CSS grid layout for arranging the finance blocks in an organized structure.
- `gap-5`: Adds 1.25rem (20px) of space between each grid item for proper separation.
- `sm:grid-cols-2`: On small screens (640px and up), it switches to a two-column layout, making the content fit better on smaller devices.
- `lg:grid-cols-3`: On large screens (1024px and up), it expands to a three-column layout, ensuring the content takes up more space horizontally.

**🔗 Relationship with Other Elements:**
This grid layout ensures that all finance blocks are presented in a visually appealing and organized manner, adapting to different screen sizes.

### 6. Finance Option Container

```html
<div
  class="flex flex-col gap-y-4 items-center bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900"
></div>
```

**🌟 Purpose:**
Each div represents a container for an individual finance option, holding the icon, heading, and description for that specific service.

**🎨 Attributes and Classes:**

- `flex flex-col`: Arranges the elements (icon, heading, and paragraph) in a vertical stack using Flexbox.
- `gap-y-4`: Adds vertical space (1rem or 16px) between the child elements for clear separation.
- `items-center`: Aligns all child elements to the center of the container.
- `bg-white`: Applies a white background to the container, making it stand out from the section background.
- `rounded`: Adds rounded corners to the container, giving it a smooth and modern look.
- `px-4`: Applies horizontal padding of 1rem (16px) to both sides of the container.
- `py-8`: Adds vertical padding of 2rem (32px) to the top and bottom of the container.
- `dark:border-2`: In dark mode, it applies a 2px solid border to the container.
- `dark:border-primary-500`: In dark mode, it sets the border color to a medium primary shade (primary-500).
- `dark:bg-primary-900`: Changes the background color in dark mode to a dark shade (primary-900), ensuring visibility and contrast.

**🔗 Relationship with Other Elements:**
Each container houses a finance option and is part of the grid layout. It ensures that the elements inside are well-spaced and visually consistent.

### 7. Finance Icon

```html
<figure>
  <img
    class="size-28 rounded-full bg-blue/10 p-4 dark:bg-transparent"
    src="images/home-finance.svg"
    alt=""
  />
</figure>
```

**🌟 Purpose:**
This figure holds the icon representing the type of finance (in this case, home finance).

**🎨 Attributes and Classes (img):**

- `size-28`: This class sets the size of the icon to 7rem (112px), making it large enough to stand out.
- `rounded-full`: Applies fully rounded corners to create a circular icon.
- `bg-blue/10`: Applies a blue background with 10% opacity behind the icon, adding subtle color.
- `p-4`: Adds padding of 1rem (16px) around the icon, creating space between the icon and the background.
- `dark:bg-transparent`: In dark mode, the background becomes transparent, preventing color clashing with the dark theme.

**🔗 Relationship with Other Elements:**
The icon visually represents the type of finance option being described, and it is centered within its container.

### 8. Finance Heading

```html
<h4 class="text-lg font-semibold text-primary-900 dark:text-white">
  Home Finance
</h4>
```

**🌟 Purpose:**
This heading (h4) introduces the name of the finance option, making it clear what type of service is being offered.

**🎨 Attributes and Classes:**

- `text-lg`: Sets the font size to 1.125rem (18px), ensuring the heading is legible and prominent.
- `font-semibold`: Applies medium-bold font weight, making the heading stand out.
- `text-primary-900`: Uses a dark primary color for the text in light mode (primary-900).
- `dark:text-white`: In dark mode, the text color switches to white for better contrast against the dark background.

**🔗 Relationship with Other Elements:**
The heading clearly labels each finance option, providing users with the service name associated with each icon.

### 9. Finance Description

```html
<p class="text-center dark:text-primary-600">
  Lorem ipsum dolor, sit amet adipisicing elit.
</p>
```

**🌟 Purpose:**
This paragraph (p) describes the finance option in more detail, giving users additional information about the service.

**🎨 Attributes and Classes:**

- `text-center`: Centers the text within the container, aligning it horizontally.
- `dark:text-primary-600`: In dark mode, the text color changes to a medium primary shade (primary-600), ensuring legibility.

**🔗 Relationship with Other Elements:**
The description provides users with a brief, centered explanation of the finance service, placed directly below the icon and heading for a clean, organized layout.

While all the finance option containers share the same overall styling, the background color for the icon images changes between options. This subtle difference helps distinguish between each type of finance visually. Specifically, the class `bg-[color]/10` applies a different background color for each image:

- Home Finance: `bg-blue/10`
- Car Finance: `bg-orange/10`
- Life Finance: `bg-green/10`
- Business Finance: `bg-blue/10`
- Travel Finance: `bg-orange/10`
- Other Finance: `bg-green/10`

This change adds variety and helps users quickly differentiate between each finance option based on color cues.

## 🗂️ Element Hierarchy Overview

- `<section>` – Main features section container
  - `<div>` – Title block container
    - `<h2>` – Section heading ("Different Finances for Different Needs")
    - `<p>` – Introductory paragraph
  - `<div>` – Grid container for finance options
    - `<div>` – Individual finance option container
      - `<figure>` – Finance icon (Home Finance with bg-blue/10)
        - `<img>` – Icon image (Home Finance)
      - `<h4>` – Finance heading ("Home Finance")
      - `<p>` – Finance description
    - `<div>` – Individual finance option container
      - `<figure>` – Finance icon (Car Finance with bg-orange/10)
        - `<img>` – Icon image (Car Finance)
      - `<h4>` – Finance heading ("Car Finance")
      - `<p>` – Finance description
    - `<div>` – Individual finance option container
      - `<figure>` – Finance icon (Life Finance with bg-green/10)
        - `<img>` – Icon image (Life Finance)
      - `<h4>` – Finance heading ("Life Finance")
      - `<p>` – Finance description
    - `<div>` – Individual finance option container
      - `<figure>` – Finance icon (Business Finance with bg-blue/10)
        - `<img>` – Icon image (Business Finance)
      - `<h4>` – Finance heading ("Business Finance")
      - `<p>` – Finance description
    - `<div>` – Individual finance option container
      - `<figure>` – Finance icon (Travel Finance with bg-orange/10)
        - `<img>` – Icon image (Travel Finance)
      - `<h4>` – Finance heading ("Travel Finance")
      - `<p>` – Finance description
    - `<div>` – Individual finance option container
      - `<figure>` – Finance icon (Other Finance with bg-green/10)
        - `<img>` – Icon image (Other Finance)
      - `<h4>` – Finance heading ("Other Finance")
      - `<p>` – Finance description

## 🚀 Purpose and Flow of the Document

The Features Section is designed to highlight the different financial services offered by the company. It combines strong visual elements like icons, color-coded backgrounds, and a structured layout to present the information in an organized and approachable way.

### Purpose:

1. **Informing Users:** The section showcases six distinct financial services, each with a short description, helping users understand what options are available and which might fit their needs.
2. **Visual Differentiation:** The use of different background colors for each service icon helps users quickly distinguish between the services, creating an intuitive browsing experience.
3. **Providing Clarity:** The section is clean and minimalistic, allowing users to focus on the key information without distractions, while the consistent use of headings, icons, and colors provides clarity.

### Flow of Interaction:

1. **Heading and Introduction:**
   The section starts with a heading ("Different Finances for Different Needs") and a brief paragraph. This immediately gives users a clear idea of what the section is about.

2. **Grid Layout of Finance Options:**
   The finance options are presented in a grid format, ensuring that the information is displayed in a structured manner. Users can quickly scan through the options and identify the service that interests them based on the icon and heading.

3. **Responsive Adaptation:**
   On larger screens, the grid expands into three columns to display multiple options side by side. On smaller screens, the layout condenses into two columns, and on even smaller devices, it stacks vertically, ensuring optimal viewing on all devices.

### Layout:

1. **Grid Structure:** The grid layout ensures that the six finance options are presented in a balanced, well-spaced manner. On larger screens, the three-column grid takes full advantage of the available space.
2. **Visual Consistency:** Each finance option follows the same structure (icon, heading, and description), which creates a clean and uniform appearance, making it easy for users to navigate and understand the options.
3. **Color-Coded Icons:** The use of color in the background of the icons helps distinguish the different types of financial services, guiding users visually as they browse through the section.

## 🤝 Understanding the Relationships

### 1. Parent-Child Relationships:

- **Main Container (`<section>`):**
  The section serves as the parent container for all elements in the Features Section, including the title block and the grid of finance options.
- **Grid Items:**
  Each div inside the grid represents a financial service, with icons, headings, and descriptions as child elements, creating a well-defined hierarchy. These elements work together to present each service clearly and concisely.

### 2. Sizing Relationships:

- **Grid Layout:**
  The layout adapts based on screen size. On smaller screens, the finance options are displayed in two columns, while on larger screens, the layout expands into three columns. This responsive design ensures that the content fits well across different devices without overcrowding or excessive whitespace.
- **Icon Sizing:**
  The icons use a consistent size (size-28 or 7rem), ensuring visual harmony across all finance options. This uniform sizing creates a sense of balance, while the space around the icons helps maintain a clean look.

### 3. Color Relationships:

- **Background Colors:**
  The primary section background changes between light (primary-300) and dark (primary-900) depending on the theme, ensuring contrast and readability. The icon backgrounds are color-coded to differentiate between finance services (e.g., blue for Home Finance, orange for Car Finance). In dark mode, the icon background becomes transparent to avoid clashing with the dark section background.
- **Dark Mode Adjustments:**
  In dark mode, various text and background elements shift to dark-themed versions, such as text-primary-500 and text-primary-600, maintaining readability and contrast.

### 4. Typographical Relationships:

- **Headings and Subheadings:**
  The section uses consistent typographical hierarchy with larger headings for the main title and smaller headings for the finance options. This ensures a clear flow of information and helps users focus on key content.
- **Centered Text:**
  Both the main heading and the finance descriptions are centered to create a symmetrical and balanced look. This also improves readability, especially on mobile devices where a centered layout works well.

### 5. Layout Relationships:

- **Grid and Item Spacing:**
  The grid layout ensures that each finance option is spaced evenly, and the use of padding (px-4, py-8) within the finance containers creates a sense of openness while keeping the content readable and easy to navigate.
- **Icon and Text Positioning:**
  The icons, headings, and descriptions are aligned vertically using flex properties (flex-col and items-center), ensuring that everything stays neatly centered in each finance option box.

## 📝 Additional Notes

- **Consistency Across Finance Options:**
  Even though the finance options share similar styling, the color-coding for each icon adds a layer of differentiation that enhances the user experience. This color distinction helps users identify different services at a glance.

- **Accessibility Considerations:**
  The text size and contrast in both light and dark modes ensure that the content remains legible for users with visual impairments. Additionally, alt text for the images improves accessibility for users relying on screen readers.

- **Mobile Optimization:**
  The responsive grid layout ensures that the content adapts perfectly to different screen sizes, providing an optimal user experience on mobile devices. The stacking of elements on smaller screens ensures that the information remains easy to read and interact with.

- **Visual Engagement:**
  The use of rounded corners, padding, and shadow effects (like dark:border-2 and dark:border-primary-500) creates a visually engaging section, drawing attention to each finance option while maintaining a clean, professional appearance.
