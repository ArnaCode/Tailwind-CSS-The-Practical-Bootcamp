# **Pre-sale Section - Styling and Structure Breakdown**

```html
<section
  class="p-4 sm:p-8 md:p-12 lg:p-16 bg-blue flex flex-col gap-y-10"
  style="
          background: linear-gradient(
              to top,
              rgba(10 33 78 / 0.9),
              rgba(10 33 78 / 0.4) 90%
            ),
            url('images/pre-sale.jpg');
          background-position: center;
          background-size: cover;
        "
>
  <h2
    class="self-center text-center text-2xl uppercase font-black sm:text-4xl sm:font-medium relative after after:h-3 after:w-full after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] z-[1] after:blur-sm px-1"
  >
    pre-sale - upcoming tour
  </h2>

  <div class="space-y-2">
    <p class="text-center text-xl">
      <span
        class="uppercase pr-6 relative after after:bottom-0.5 after:left-0 after:h-2 after:w-4/5 after:bg-golden/60 after:-z-[1] z-[1]"
        >Pre-Sale Tour 1 :</span
      >
      <span class="border-b-2 border-dotted">07/2 - 09/2</span>
    </p>

    <p class="text-center text-xl">
      <span
        class="uppercase pr-6 relative after after:bottom-0.5 after:left-0 after:h-2 after:w-4/5 after:bg-golden/60 after:-z-[1] z-[1]"
        >Pre-Sale Tour 2 :</span
      >
      <span class="border-b-2 border-dotted">14/2 - 16/2</span>
    </p>

    <p class="text-center">
      All pre-sales begin 12am local and end 6pm local time.
    </p>
  </div>

  <a
    class="uppercase border-2 border-golden px-8 py-2 text-lg text-center self-center"
    href="#"
    >Check for more info</a
  >
</section>
```

# 🏗️ HTML Structure Breakdown

## 1. Pre-sale Section Container (`<section>`)

```html
<section
  class="p-4 sm:p-8 md:p-12 lg:p-16 bg-blue flex flex-col gap-y-10"
  style="background: linear-gradient(to top, rgba(10 33 78 / 0.9), rgba(10 33 78 / 0.4) 90%), url('images/pre-sale.jpg'); background-position: center; background-size: cover;"
></section>
```

### 🌟 Purpose:

This `<section>` is the main container that holds all the content related to the Pre-sale event, such as the title, pre-sale tour information, and a call-to-action link.

### 🎨 Attributes and Classes:

- Class: **`p-4`**
  Adds padding of 1rem (16px) around the entire section, ensuring that there is space between the section's content and its borders.

- Class: **`sm:p-8`**
  On small screens (640px and above), the padding increases to 2rem (32px), providing more room for the content as screen sizes get larger.

- Class: **`md:p-12`**
  On medium screens (768px and above), the padding is further increased to 3rem (48px), adding more spaciousness.

- Class: **`lg:p-16`**
  On large screens (1024px and above), the padding is expanded to 4rem (64px) to give the content plenty of space on wide displays.

- Class: **`bg-blue`**
  Applies a blue background color to the section, ensuring visual consistency with the overall site design and branding.

- Class: **`flex`**
  Enables Flexbox layout for the section. This means the child elements (like the title, pre-sale dates, and button) are laid out using Flexbox, a CSS layout model that helps with alignment and distribution.

- Class: **`flex-col`**
  Specifies that the Flexbox layout is in a column direction, so the child elements will be stacked vertically from top to bottom.

- Class: **`gap-y-10`**
  Adds a vertical gap of 2.5rem (40px) between the child elements, ensuring that there's enough space between each part of the section (title, pre-sale info, and button).

- Inline Style: **`background`**
  The section uses a background image with a linear gradient overlay.
  - The gradient fades from rgba(10 33 78 / 0.9) (a dark blue) to rgba(10 33 78 / 0.4) (a lighter, semi-transparent blue) at the top.
  - The background image (url('images/pre-sale.jpg')) is set to cover the section, meaning it will scale to fit the container without repeating.
  - The background-position is set to center, ensuring the image is centered within the section.

### 🔗 Relationship with Other Elements:

This section container wraps the entire Pre-sale content, including the title, date information, and the call-to-action button. It separates this specific content from the rest of the page, both visually and structurally.

## 2. Pre-sale Section Title (`<h2>`)

```html
<h2
  class="self-center text-center text-2xl uppercase font-black sm:text-4xl sm:font-medium relative after after:h-3 after:w-full after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] z-[1] after:blur-sm px-1"
>
  pre-sale - upcoming tour
</h2>
```

### 🌟 Purpose:

The `<h2>` element contains the title for this section, which informs users about the Pre-sale and the upcoming tour. It's styled to be prominent and visually engaging.

### 🎨 Attributes and Classes:

- Class: **`self-center`**
  Aligns the title horizontally within the Flexbox container, ensuring it's centered on the page.

- Class: **`text-center`**
  Aligns the text itself horizontally within the element, centering the title's content.

- Class: **`text-2xl`**
  Sets the font size of the title to 1.5rem (24px) for smaller screens, making it large enough to be noticeable.

- Class: **`uppercase`**
  Transforms the text to uppercase, giving the title a bold and important look.

- Class: **`font-black`**
  Applies a font weight of 900 (black), which is one of the heaviest font weights, making the title very bold and prominent.

- Class: **`sm:text-4xl`**
  On small screens (640px and above), the font size increases to 2.25rem (36px), making the title larger and more prominent as screen sizes increase.

- Class: **`sm:font-medium`**
  On small screens (640px and above), the font weight is reduced to 500 (medium), balancing the increase in font size with a lighter font weight.

- Class: **`relative`**
  Positions the element as relative, which allows the pseudo-element underline (created by the after class) to be positioned relative to this title.

- Class: **`after:h-3`**
  The pseudo-element (created by the after class) has a height of 0.75rem (12px).

- Class: **`after:w-full`**
  The pseudo-element spans the entire width of the title.

- Class: **`after:bg-golden`**
  The pseudo-element has a golden background color, giving the title a glowing underline.

- Class: **`after:bottom-0.5`**
  Positions the pseudo-element just below the text by 0.125rem (2px).

- Class: **`after:left-0`**
  Aligns the pseudo-element to the left edge of the title.

- Class: **`after:-z-[1]`**
  Positions the pseudo-element behind the title using the z-index property, ensuring that the text appears on top of the underline.

- Class: **`z-[1]`**
  Ensures the title itself appears above the pseudo-element underline using a positive z-index value.

- Class: **`after:blur-sm`**
  Adds a small blur effect to the underline, making it appear soft and glowing.

- Class: **`px-1`**
  Adds padding of 0.25rem (4px) to the left and right sides of the title for a bit of spacing within its container.

### 🔗 Relationship with Other Elements:

The title is positioned at the top of the Pre-sale section and introduces the following content, such as the pre-sale dates and the call-to-action button.

## 3. Pre-sale Information Container (`<div>`)

```html
<div class="space-y-2"></div>
```

### 🌟 Purpose:

This `<div>` contains the Pre-sale Tour date information, providing a structured container for displaying details about different pre-sale tour dates.

### 🎨 Attributes and Classes:

- Class: **`space-y-2`**
  Adds vertical spacing of 0.5rem (8px) between the child elements inside this container, which will be the pre-sale tour details. This ensures the content doesn't appear crowded.

### 🔗 Relationship with Other Elements:

This container groups the pre-sale tour date details, sitting between the section title and the call-to-action button.

### 3.1 Pre-sale Tour 1 Date (`<p>`)

```html
<p class="text-center text-xl">
  <span
    class="uppercase pr-6 relative after after:bottom-0.5 after:left-0 after:h-2 after:w-4/5 after:bg-golden/60 after:-z-[1] z-[1]"
  >
    Pre-Sale Tour 1 :
  </span>
  <span class="border-b-2 border-dotted">07/2 - 09/2</span>
</p>
```

#### 🌟 Purpose:

This `<p>` element displays the Pre-Sale Tour 1 information, which includes a label ("Pre-Sale Tour 1") and the corresponding dates for the pre-sale.

#### 🎨 Attributes and Classes:

- Class: **`text-center`**
  Centers the text horizontally within the paragraph, ensuring both the label ("Pre-Sale Tour 1") and the dates ("07/2 - 09/2") are aligned in the middle of the container.

- Class: **`text-xl`**
  Sets the font size of the paragraph text to 1.25rem (20px), making it large enough for easy reading.

Inside the Paragraph

First Span (Label: "Pre-Sale Tour 1 :")

```html
<span
  class="uppercase pr-6 relative after after:bottom-0.5 after:left-0 after:h-2 after:w-4/5 after:bg-golden/60 after:-z-[1] z-[1]"
>
  Pre-Sale Tour 1 :
</span>
```

#### 🎨 Attributes and Classes:

- Class: **`uppercase`**
  Transforms the text "Pre-Sale Tour 1 :" to uppercase, giving it a bold and prominent appearance.

- Class: **`pr-6`**
  Adds right padding of 1.5rem (24px) to create space between the label and the following dates.

- Class: **`relative`**
  Positions the element as relative, allowing for the placement of the pseudo-element (underline).

- Class: **`after:bottom-0.5`**
  Positions the pseudo-element underline just below the text, giving it a subtle separation.

- Class: **`after:left-0`**
  Aligns the underline with the left edge of the text.

- Class: **`after:h-2`**
  Sets the height of the underline to 0.5rem (8px).

- Class: **`after:w-4/5`**
  The underline spans 80% of the width of the label.

- Class: **`after:bg-golden/60`**
  The underline is golden with 60% opacity, making it semi-transparent.

- Class: **`after:-z-[1] z-[1]`**
  Ensures the underline appears behind the text, while the text itself is on top.

Second Span (Dates: "07/2 - 09/2")

```html
<span class="border-b-2 border-dotted">07/2 - 09/2</span>
```

#### 🎨 Attributes and Classes:

- Class: **`border-b-2`**
  Adds a 2px bottom border under the dates, making them appear emphasized.

- Class: **`border-dotted`**
  The bottom border is dotted, adding a decorative element to the date display.

#### 🔗 Relationship with Other Elements:

This paragraph is part of the Pre-sale Information Container, and it provides users with the Pre-Sale Tour 1 label and corresponding dates.

### 3.2 Pre-sale Tour 2 Date (`<p>`)

```html
<p class="text-center text-xl">
  <span
    class="uppercase pr-6 relative after after:bottom-0.5 after:left-0 after:h-2 after:w-4/5 after:bg-golden/60 after:-z-[1] z-[1]"
  >
    Pre-Sale Tour 2 :
  </span>
  <span class="border-b-2 border-dotted">14/2 - 16/2</span>
</p>
```

#### 🌟 Purpose:

This paragraph functions similarly to the first one, displaying the Pre-Sale Tour 2 information.

#### 🎨 Attributes and Classes:

The classes and structure are identical to the first tour date, ensuring visual consistency across the different tour date entries.

#### 🔗 Relationship with Other Elements:

The Pre-Sale Tour 2 date follows the Pre-Sale Tour 1 date, providing another block of information about upcoming pre-sale events.

### 3.3 Pre-sale Additional Information (`<p>`)

```html
<p class="text-center">
  All pre-sales begin 12am local and end 6pm local time.
</p>
```

#### 🌟 Purpose:

This `<p>` element provides additional information about the timing of the pre-sale events. It specifies when the pre-sales begin and end, helping users understand the event timing.

#### 🎨 Attributes and Classes:

- Class: **`text-center`**
  Aligns the text in the center of the page, ensuring the additional information is centered within its container and easy to read.

#### 🔗 Relationship with Other Elements:

This paragraph comes after the pre-sale tour dates and serves as supplementary information. It is positioned directly before the call-to-action link. It doesn't have any complex layout or styling but plays an important role in providing essential details about the timing of the pre-sale events.

## 4. Pre-sale Call-to-Action Link (`<a>`)

```html
<a
  class="uppercase border-2 border-golden px-8 py-2 text-lg text-center self-center"
  href="#"
>
  Check for more info
</a>
```

### 🌟 Purpose:

This `<a>` element is the call-to-action link, prompting users to click for more information about the pre-sale events. It's styled as a button-like element to draw attention.

### 🎨 Attributes and Classes:

- Class: **`uppercase`**
  Transforms the link text to uppercase, giving it a bold and clear appearance.

- Class: **`border-2`**
  Adds a 2px border around the link, making it stand out and appear as a button.

- Class: **`border-golden`**
  Colors the border golden, matching the color scheme of the section.

- Class: **`px-8`**
  Adds horizontal padding of 2rem (32px) on both sides of the link, giving it a wide button-like appearance.

- Class: **`py-2`**
  Adds vertical padding of 0.5rem (8px), ensuring the link has sufficient height to appear clickable.

- Class: **`text-lg`**
  Sets the font size to 1.125rem (18px), making the link text large and easy to read.

- Class: **`text-center`**
  Aligns the text within the link horizontally, centering the content.

- Class: **`self-center`**
  Centers the link within the Flexbox layout of the section, ensuring it is placed in the middle.

- **`href="#"`**
  The href attribute is currently a placeholder (#), but in practice, it would lead to another page or section that provides more information about the pre-sale event.

### 🔗 Relationship with Other Elements:

The call-to-action link is placed at the bottom of the Pre-sale section, encouraging users to seek more information after viewing the pre-sale dates.

## 🗂️ Element Hierarchy Overview

- `<section>` (Main Pre-sale Section container)
  - `<h2>` (Title: "Pre-sale - Upcoming Tour")
  - `<div>` (Container for pre-sale tour information)
    - `<p>` (Pre-sale Tour 1 information)
      - `<span>` (Label: "Pre-Sale Tour 1 :")
      - `<span>` (Tour dates: "07/2 - 09/2")
    - `<p>` (Pre-sale Tour 2 information)
      - `<span>` (Label: "Pre-Sale Tour 2 :")
      - `<span>` (Tour dates: "14/2 - 16/2")
    - `<p>` (Additional information about pre-sale times: "All pre-sales begin 12am local and end 6pm local time.")
  - `<a>` (Call-to-action link: "Check for more info")

## 🚀 1. Purpose and Flow of the Document

The purpose of this section is to inform users about the pre-sale dates for upcoming tours and provide them with an easy way to access additional information. The flow of the document is straightforward:

1. The section begins with a title that introduces the topic, letting users know that this content relates to the Pre-sale - Upcoming Tour.
2. Next, users are presented with details for two pre-sale periods, each formatted to highlight both the label (e.g., "Pre-Sale Tour 1") and the actual tour dates (e.g., "07/2 - 09/2"). The content is visually broken up using subtle decorative underlines to ensure clarity.
3. An additional information paragraph provides details about the timing of the pre-sales, ensuring that users understand when the sales begin and end.
4. Finally, a prominent call-to-action link encourages users to explore further details about the pre-sale tours, driving engagement and interaction.

## 🤝 2. Understanding the Relationships

This section has several key relationships between elements, which create a cohesive and structured layout:

### Parent-Child Relationships

- The main parent container (`<section>`) holds all other elements, including the title (`<h2>`), the tour information (`<div>`), and the call-to-action link (`<a>`).
- The tour information container (`<div>`) houses multiple paragraphs (`<p>`) for the two pre-sale tour dates and the additional information about pre-sale times.
- Each paragraph has child `<span>` elements that separately handle the label and the date, ensuring clear formatting.

### Sizing Relationships

- The sizing of the title and text adjusts responsively using Tailwind's utility classes (e.g., `text-2xl`, `sm:text-4xl`), ensuring that the section remains readable across different screen sizes.
- Padding classes (e.g., `p-4`, `sm:p-8`, etc.) are applied to the entire section and to individual elements, creating consistent spacing and ensuring that the section has room to breathe on all devices.

### Color Relationships

- The section maintains a consistent color palette of blue and gold, which aligns with the website's overall theme. This is achieved using background colors (`bg-blue`, `bg-golden`) and border colors (`border-golden`).
- The underlines added to the spans are colored gold with slight transparency to emphasize the text in a decorative, non-intrusive way.

### Typographical Relationships

- The use of uppercase text for the title and the tour labels emphasizes key pieces of information, ensuring that the hierarchy of the content is clear.
- Font weights (e.g., `font-black`, `sm:font-medium`) are adjusted to create contrast between different text elements, making sure that the most important information stands out.

### Layout Relationships

- The Flexbox layout (`flex flex-col`) ensures that the content is stacked vertically, with consistent spacing between elements (`gap-y-10`).
- The centered alignment of text and elements ensures that the content feels balanced and is easy to read across various device sizes.

## 📝 3. Additional Notes

### Responsiveness

This section is designed to be fully responsive, with padding, text sizes, and layouts adjusting for small (sm), medium (md), and large (lg) screen sizes. The content scales gracefully across devices, ensuring a seamless experience for all users.

### Background Styling

The linear gradient overlay on the background image adds visual depth and helps the text stand out. This subtle effect ensures that the content is easy to read, even over the background image.

### Call-to-Action Link

The call-to-action link is styled to look like a button, making it clear to users that it is interactive. The use of uppercase text and border styling helps draw attention to this link.
