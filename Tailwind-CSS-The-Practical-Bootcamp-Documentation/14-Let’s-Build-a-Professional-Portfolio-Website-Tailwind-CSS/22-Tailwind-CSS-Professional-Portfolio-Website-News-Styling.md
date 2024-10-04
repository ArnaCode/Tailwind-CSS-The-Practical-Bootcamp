# News Section - Styling and Structure Breakdown

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-primary text-text md:p-16 lg:gap-x-10 lg:flex-row-reverse *:basis-full"
>
  <div class="flex flex-col gap-y-5 lg:self-center xl:gap-y-10 *:space-y-2">
    <div>
      <h6
        class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-left-0 lg:text-lg"
      >
        news
      </h6>
      <h2 class="text-2xl capitalize font-bold lg:text-3xl">
        Across the world of Photography
      </h2>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
      eveniet, doloribus impedit fuga eum accusamus Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Ab corrupti sapiente illo sint animi
      inventore
    </p>

    <a
      class="uppercase p-2 border-2 border-accent self-start text-xs rounded inline-block sm:text-lg sm:px-4"
      href="#"
    >
      View News
    </a>
  </div>

  <div
    class="grid gap-y-5 sm:grid-cols-2 sm:grid-rows-[min-content] sm:gap-x-5"
  >
    <div
      class="grid sm:grid-rows-subgrid sm:row-span-5 gap-y-4 p-6 rounded bg-secondary shadow-lg shadow-primary border-t-2 border-accent"
    >
      <figure>
        <img src="images/news-1.jpg" alt="" />
      </figure>
      <h3 class="font-bold text-xl">Model Photoshoot</h3>
      <h6 class="text-accent">Dec 24, 2027</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        consectetur obcaecati ut nihil placeat.
      </p>
      <a
        class="uppercase justify-self-start px-6 py-2 border-2 border-accent self-start rounded flex items-center group lg:text-sm"
        href="#"
      >
        <span>Read More</span>
        <i
          class="fa-solid fa-angles-right text-accent ml-2 group-hover:translate-x-2 transition-transform"
        ></i>
      </a>
    </div>

    <div
      class="grid sm:grid-rows-subgrid sm:row-span-5 gap-y-4 p-6 rounded bg-secondary shadow-lg shadow-primary border-t-2 border-accent"
    >
      <figure>
        <img class="object-[65%]" src="images/news-2.jpg" alt="" />
      </figure>
      <h3 class="font-bold text-xl">Company Profile</h3>
      <h6 class="text-accent">Jan 24, 2028</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        consectetur obcaecati ut nihil placeat.
      </p>
      <a
        class="uppercase justify-self-start px-6 py-2 border-2 border-accent self-start rounded flex items-center group lg:text-sm"
        href="#"
      >
        <span>Read More</span>
        <i
          class="fa-solid fa-angles-right text-accent ml-2 group-hover:translate-x-2 transition-transform"
        ></i>
      </a>
    </div>
  </div>
</section>
```

## 🏗️ HTML Structure Breakdown

### 1. Section Container (News Section)

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-primary text-text md:p-16 lg:gap-x-10 lg:flex-row-reverse *:basis-full"
></section>
```

#### 🌟 Purpose:

This container wraps the entire News Section, organizing the content using a responsive flexbox layout.

#### 🎨 Attributes and Classes:

- `p-6`: Adds 1.5rem (24px) padding around all sides.
- `flex flex-col`: Arranges the content in a vertical stack, thanks to flexbox.
- `gap-y-10`: Adds 2.5rem (40px) vertical spacing between child elements.
- `bg-primary`: Sets the background color to the primary color from Tailwind's theme.
- `text-text`: Applies the default text color.
- `md:p-16`: Increases the padding to 4rem (64px) on medium screens and above (768px).
- `lg:gap-x-10`: Adds 2.5rem (40px) horizontal spacing between child elements on large screens (1024px).
- `lg:flex-row-reverse`: On large screens, reverses the order of flex items, displaying the news articles first.
- `*:basis-full`: Ensures that the child elements take up the full available space in their flex container.

#### 🔗 Relationship with Other Elements:

The section wraps both the text block and the news grid, ensuring responsiveness and a balanced layout across different screen sizes.

### 2. Text Block

```html
<div class="flex flex-col gap-y-5 lg:self-center xl:gap-y-10 *:space-y-2"></div>
```

#### 🌟 Purpose:

This container holds the news section heading, description, and the call-to-action button.

#### 🎨 Attributes and Classes:

- `flex flex-col`: Arranges child elements (headings, description, and button) in a vertical column.
- `gap-y-5`: Adds 1.25rem (20px) vertical spacing between child elements.
- `lg:self-center`: On large screens, this centers the text block vertically within its flex container.
- `xl:gap-y-10`: Adds 2.5rem (40px) vertical spacing on extra-large screens (1280px and above).
- `*:space-y-2`: Adds 0.5rem (8px) vertical spacing between child elements for custom or undefined breakpoints.

#### 🔗 Relationship with Other Elements:

This block organizes the heading, description, and call-to-action button into a cohesive section that complements the news grid.

### 3. Heading Block (News)

```html
<div>
  <h6
    class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-left-0 lg:text-lg"
  >
    news
  </h6>
  <h2 class="text-2xl capitalize font-bold lg:text-3xl">
    Across the world of Photography
  </h2>
</div>
```

#### 🌟 Purpose:

This block holds the news section heading and the subheading, which introduce the section.

#### 🎨 Attributes and Classes:

- `text-sm`: Sets the font size to 0.875rem (14px).
- `pl-6`: Adds 1.5rem (24px) padding to the left.
- `uppercase`: Transforms the text to uppercase.
- `relative`: Allows the before pseudo-element to be positioned relative to the heading.
- `before:h-1`: Sets the height of the before pseudo-element to 0.25rem (4px).
- `before:w-4`: Sets the width of the before pseudo-element to 1rem (16px).
- `before:bg-accent`: Colors the before pseudo-element with the accent color.
- `before:top-2/4`: Vertically centers the before pseudo-element relative to the heading.
- `before:-left-0`: Positions the before pseudo-element to the left of the heading.
- `lg:text-lg`: Increases the font size to 1.125rem (18px) on large screens.

#### 🎨 Subheading Classes (h2):

- `text-2xl`: Sets the font size to 1.5rem (24px).
- `capitalize`: Capitalizes the first letter of each word.
- `font-bold`: Applies a bold font weight.
- `lg:text-3xl`: Increases the font size to 1.875rem (30px) on large screens.

#### 🔗 Relationship with Other Elements:

The heading introduces the news section, preparing the user for the upcoming news articles. The use of pseudo-elements adds visual emphasis to the section heading.

### 4. Description Paragraph

```html
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
  eveniet, doloribus impedit fuga eum accusamus Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Ab corrupti sapiente illo sint animi inventore.
</p>
```

#### 🌟 Purpose:

This paragraph provides a brief description, giving an overview of the content presented in the news section.

#### 🔗 Relationship with Other Elements:

The description is positioned beneath the heading, offering an introduction and guiding users toward the call-to-action button and news articles.

### 5. Call-to-Action Button

```html
<a
  class="uppercase p-2 border-2 border-accent self-start text-xs rounded inline-block sm:text-lg sm:px-4"
  href="#"
>
  View News
</a>
```

#### 🌟 Purpose:

This button encourages users to view the news articles, serving as a call to action.

#### 🎨 Attributes and Classes:

- `uppercase`: Transforms the text to uppercase.
- `p-2`: Adds 0.5rem (8px) padding around the button.
- `border-2`: Adds a 2px border around the button.
- `border-accent`: Colors the button's border with the accent color.
- `self-start`: Aligns the button to the start of its flex container.
- `text-xs`: Sets the font size to 0.75rem (12px).
- `rounded`: Adds rounded corners to the button.
- `inline-block`: Ensures the button behaves as an inline-block element.
- `sm:text-lg`: Increases the font size to 1.125rem (18px) on medium screens.
- `sm:px-4`: Adds 1rem (16px) padding to the left and right on medium screens.

#### 🔗 Relationship with Other Elements:

The call-to-action button provides users with a clear action, positioned after the heading and description to maintain flow and encourage interaction.

### 6. News Grid

```html
<div
  class="grid gap-y-5 sm:grid-cols-2 sm:grid-rows-[min-content] sm:gap-x-5"
></div>
```

#### 🌟 Purpose:

This grid container holds the individual news articles and organizes them into a two-column layout on medium screens and larger.

#### 🎨 Attributes and Classes:

- `grid`: Defines a grid layout.
- `gap-y-5`: Adds 1.25rem (20px) vertical spacing between the grid items.
- `sm:grid-cols-2`: Defines a two-column grid layout on medium screens (640px) and larger.
- `sm:grid-rows-[min-content]`: Ensures each row takes up only the necessary space.
- `sm:gap-x-5`: Adds 1.25rem (20px) horizontal spacing between grid items on medium screens.

#### 🔗 Relationship with Other Elements:

The grid arranges the news articles responsively, ensuring they are displayed in a structured and visually appealing manner.

### 7. News Article (Model Photoshoot)

```html
<div
  class="grid sm:grid-rows-subgrid sm:row-span-5 gap-y-4 p-6 rounded bg-secondary shadow-lg shadow-primary border-t-2 border-accent"
></div>
```

#### 🌟 Purpose:

This container holds an individual news article, containing an image, title, date, description, and a call-to-action button.

#### 🎨 Attributes and Classes:

- `grid`: Organizes the article's content in a grid layout.
- `sm:grid-rows-subgrid`: Custom grid layout for rows on medium screens.
- `sm:row-span-5`: Makes the article span 5 rows in the grid.
- `gap-y-4`: Adds 1rem (16px) vertical spacing between the article's elements.
- `p-6`: Adds 1.5rem (24px) padding around the content.
- `rounded`: Adds rounded corners to the article.
- `bg-secondary`: Applies the secondary background color.
- `shadow-lg`: Adds a large shadow to give depth to the article.
- `shadow-primary`: Adds a shadow color matching the primary theme.
- `border-t-2`: Adds a 2px top border.
- `border-accent`: Colors the top border with the accent color.

#### 🔗 Relationship with Other Elements:

This grid item holds the first news article, styled to maintain consistency with the rest of the grid. Each article is visually distinct and interactive.

### 8. News Article Image (Model Photoshoot)

```html
<figure>
  <img src="images/news-1.jpg" alt="" />
</figure>
```

#### 🌟 Purpose:

This figure contains the image for the first news article, visually representing the article's content.

#### 🔗 Relationship with Other Elements:

The figure and image are the first elements in the article, providing a visual anchor for the content that follows.

### 9. Article Title (Model Photoshoot)

```html
<h3 class="font-bold text-xl">Model Photoshoot</h3>
```

#### 🌟 Purpose:

This heading provides the title of the news article.

#### 🎨 Attributes and Classes:

- `font-bold`: Makes the text bold.
- `text-xl`: Sets the font size to 1.25rem (20px).

#### 🔗 Relationship with Other Elements:

The title follows the image, summarizing the article's topic for users.

### 10. Article Date (Model Photoshoot)

```html
<h6 class="text-accent">Dec 24, 2027</h6>
```

#### 🌟 Purpose:

This subheading shows the date of publication.

#### 🎨 Attributes and Classes:

- `text-accent`: Applies the accent color to the date.

#### 🔗 Relationship with Other Elements:

The article date is placed after the title, providing context about the time of publication.

### 11. Article Description (Model Photoshoot)

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia consectetur
  obcaecati ut nihil placeat.
</p>
```

#### 🌟 Purpose:

This paragraph provides a brief description or summary of the article.

#### 🔗 Relationship with Other Elements:

The description follows the title and date, giving users a preview of the article content before clicking Read More.

### 12. Read More Button (Model Photoshoot)

```html
<a
  class="uppercase justify-self-start px-6 py-2 border-2 border-accent self-start rounded flex items-center group lg:text-sm"
  href="#"
>
  <span>Read More</span>
  <i
    class="fa-solid fa-angles-right text-accent ml-2 group-hover:translate-x-2 transition-transform"
  ></i>
</a>
```

#### 🌟 Purpose:

This button encourages users to read the full news article.

#### 🎨 Attributes and Classes:

- `uppercase`: Transforms the text to uppercase.
- `justify-self-start`: Aligns the button to the start of the grid cell.
- `px-6 py-2`: Adds 1.5rem (24px) horizontal padding and 0.5rem (8px) vertical padding.
- `border-2`: Adds a 2px border around the button.
- `border-accent`: Colors the border using the accent color.
- `self-start`: Aligns the button to the start of the container.
- `rounded`: Adds rounded corners.
- `flex items-center`: Aligns the button's content horizontally and centers the items vertically.
- `group`: Assigns the button to a group for hover states.
- `lg:text-sm`: Sets the text size to 0.875rem (14px) on large screens.
- `fa-solid fa-angles-right`: Applies the Font Awesome right arrow icon.
- `text-accent`: Colors the icon with the accent color.
- `ml-2`: Adds 0.5rem (8px) margin to the left of the icon.
- `group-hover:translate-x-2`: Moves the arrow icon 0.5rem (8px) to the right on hover.
- `transition-transform`: Smoothly animates the translation effect on hover.

#### 🔗 Relationship with Other Elements:

The Read More button is the final call to action in the article, guiding users to explore further by clicking the link to the full article.

### 13. News Article (Company Profile)

```html
<div
  class="grid sm:grid-rows-subgrid sm:row-span-5 gap-y-4 p-6 rounded bg-secondary shadow-lg shadow-primary border-t-2 border-accent"
></div>
```

#### 🌟 Purpose:

This container holds the second news article, following the same structure as the first article. It contains an image, title, date, description, and a Read More button.

#### 🎨 Attributes and Classes:

- `grid`: Arranges the article content using a grid layout.
- `sm:grid-rows-subgrid`: Customizes the row layout for the grid on medium screens and larger.
- `sm:row-span-5`: Makes the article span 5 rows in the grid.
- `gap-y-4`: Adds 1rem (16px) vertical spacing between the elements within the article.
- `p-6`: Adds 1.5rem (24px) padding around the content.
- `rounded`: Adds rounded corners to the article.
- `bg-secondary`: Applies the secondary background color.
- `shadow-lg`: Adds a large shadow to give depth to the article.
- `shadow-primary`: Applies a shadow using the primary color for additional emphasis.
- `border-t-2`: Adds a 2px top border to the article.
- `border-accent`: Colors the top border with the accent color, making the article visually consistent with others in the section.

#### 🔗 Relationship with Other Elements:

This is the second news article in the grid, following the same structure as the first one to maintain consistency. The content remains easy to read and visually separated from other elements with the padding, spacing, and borders.

### 14. News Article Image (Company Profile)

```html
<figure>
  <img class="object-[65%]" src="images/news-2.jpg" alt="" />
</figure>
```

#### 🌟 Purpose:

This figure contains the image for the second news article, which is cropped and positioned to show 65% of the image for emphasis on specific content.

#### 🎨 Attributes and Classes:

- `object-[65%]`: Ensures that 65% of the image is visible, focusing on the relevant part of the image for the article's topic.

#### 🔗 Relationship with Other Elements:

The image acts as the visual anchor of the news article, drawing attention to the content that follows (the title, date, and description).

### 15. Article Title (Company Profile)

```html
<h3 class="font-bold text-xl">Company Profile</h3>
```

#### 🌟 Purpose:

This heading displays the title of the second news article, providing users with a quick summary of the article's topic.

#### 🎨 Attributes and Classes:

- `font-bold`: Applies a bold font weight to make the title stand out.
- `text-xl`: Sets the font size to 1.25rem (20px), making it larger and more prominent.

#### 🔗 Relationship with Other Elements:

The article title appears after the image, giving users a clear idea of what the article is about before they read the description.

### 16. Article Date (Company Profile)

```html
<h6 class="text-accent">Jan 24, 2028</h6>
```

#### 🌟 Purpose:

This subheading displays the publication date of the second news article.

#### 🎨 Attributes and Classes:

- `text-accent`: Colors the date using the accent color, visually differentiating it from the rest of the content.

#### 🔗 Relationship with Other Elements:

The date is positioned after the title, providing a time reference for the article, which helps users to distinguish when the news was published.

### 17. Article Description (Company Profile)

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia consectetur
  obcaecati ut nihil placeat.
</p>
```

#### 🌟 Purpose:

This paragraph provides a brief summary or teaser of the second news article, encouraging users to read more.

#### 🔗 Relationship with Other Elements:

The description follows the title and date, giving users additional context for the article and leading them toward the Read More button.

### 18. Read More Button (Company Profile)

```html
<a
  class="uppercase justify-self-start px-6 py-2 border-2 border-accent self-start rounded flex items-center group lg:text-sm"
  href="#"
>
  <span>Read More</span>
  <i
    class="fa-solid fa-angles-right text-accent ml-2 group-hover:translate-x-2 transition-transform"
  ></i>
</a>
```

#### 🌟 Purpose:

This button provides a call to action for users to click and read the full news article.

#### 🎨 Attributes and Classes:

- `uppercase`: Transforms the button text to uppercase for emphasis.
- `justify-self-start`: Aligns the button to the start of its grid cell.
- `px-6 py-2`: Adds 1.5rem (24px) horizontal padding and 0.5rem (8px) vertical padding for appropriate spacing.
- `border-2`: Adds a 2px border around the button.
- `border-accent`: Colors the border using the accent color for consistency.
- `self-start`: Aligns the button to the start of its flex container.
- `rounded`: Adds rounded corners for a smoother visual appeal.
- `flex items-center`: Uses flexbox to align the text and icon within the button horizontally and vertically.
- `group`: Groups the button for hover states, ensuring that multiple elements (text and icon) respond simultaneously to hover actions.
- `lg:text-sm`: Sets the text size to 0.875rem (14px) on large screens for a more compact design.
- `fa-solid fa-angles-right`: Adds the Font Awesome right arrow icon.
- `text-accent`: Colors the icon using the accent color to match the button's styling.
- `ml-2`: Adds 0.5rem (8px) margin to the left of the icon, separating it from the text.
- `group-hover:translate-x-2`: Moves the icon 0.5rem (8px) to the right when the button is hovered.
- `transition-transform`: Smoothly animates the translation effect when hovered.

#### 🔗 Relationship with Other Elements:

The Read More button concludes the article by prompting users to take action and explore the content further. It's visually distinct and interactive, making it easy for users to engage with the article.

## 🗂️ Element Hierarchy Overview

- `<section>` – News section container
  - `<div>` – Text block container
    - `<div>` – Heading block
      - `<h6>` – Section heading
      - `<h2>` – Section subheading
    - `<p>` – Description paragraph
    - `<a>` – Call-to-action button
  - `<div>` – News grid container
    - `<div>` – News article 1
      - `<figure>` – Article image 1
        - `<img>` – Image element
      - `<h3>` – Article title 1
      - `<h6>` – Article date 1
      - `<p>` – Article description 1
      - `<a>` – Read more button 1
    - `<div>` – News article 2
      - `<figure>` – Article image 2
        - `<img>` – Image element
      - `<h3>` – Article title 2
      - `<h6>` – Article date 2
      - `<p>` – Article description 2
      - `<a>` – Read more button 2

## 🚀 Purpose and Flow of the Document

### 🧱 Layout

The News Section is divided into two main parts: a text block on one side and a news grid on the other. On large screens, the content is displayed side by side, while on smaller screens, it stacks vertically. The grid layout is designed to feature the news articles in an organized and visually appealing manner.

### 🏗️ Structure

The section starts with a heading and description, followed by a grid that organizes individual news articles. Each article contains an image, a title, a date, a brief description, and a button for reading more.

### 🎯 Flow of Interaction

Users are introduced to the news section with the heading and description, followed by visual elements (news articles) that are interactive. The Read More buttons guide users to explore further content.

### 🎨 Visual Hierarchy

The section emphasizes the article images, titles, and Read More buttons to encourage user engagement. The headings and call-to-action buttons are prominent and easy to identify.

## 🤝 Understanding the Relationships

- Parent-Child Relationships:
  The section container holds both the text block and the news grid. Each news article includes a figure for the image, a title, date, description, and a button for further interaction.

- Sizing Relationships:
  The grid adjusts based on screen size, ensuring a responsive layout. Padding and spacing are controlled with Tailwind utilities to maintain balance and readability.

- Color Relationships:
  The primary and accent colors are consistently applied to text, borders, and shadows, ensuring visual consistency.

- Layout Relationships:
  The flexbox and grid layouts are used to organize the content responsively, adapting seamlessly to different screen sizes.

## 📝 Additional Notes

- The News Section makes good use of grid and flexbox for a responsive, clean layout that prioritizes readability. 🚀
- Hover effects on the Read More buttons add interactivity, encouraging further engagement with the content. 🎯
- The news articles are visually balanced, with appropriate spacing and sizing for both text and images. 📱💻
