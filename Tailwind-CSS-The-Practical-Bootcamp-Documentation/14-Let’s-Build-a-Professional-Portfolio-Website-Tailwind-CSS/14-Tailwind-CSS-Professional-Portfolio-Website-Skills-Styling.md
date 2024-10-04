# Skills Section - Styling and Structure Breakdown

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-primary text-text md:p-16 lg:gap-x-10 lg:flex-row-reverse *:basis-full"
>
  <div class="space-y-5 lg:self-center xl:space-y-10">
    <div class="space-y-2">
      <h6
        class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg"
      >
        My Skills
      </h6>
      <h2 class="text-2xl capitalize font-bold lg:text-3xl">
        I am experienced in the following fields
      </h2>
    </div>

    <div class="space-y-2">
      <p>Lorem ipsum dolor recusandae modi odio, a voluptatem Eos, commodi!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        doloremque nesciunt
      </p>
    </div>

    <div class="space-y-5 *:space-y-2 xl:space-y-8">
      <div>
        <h5 class="font-bold text-accent">Photography</h5>
        <div
          class="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[95%] before:rounded-full z-10 before:-z-10 pl-4"
        >
          95%
        </div>
      </div>

      <div>
        <h5 class="font-bold text-accent">Design Thinking</h5>
        <div
          class="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[90%] before:rounded-full z-10 before:-z-10 pl-4"
        >
          90%
        </div>
      </div>

      <div>
        <h5 class="font-bold text-accent">Videography</h5>
        <div
          class="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[80%] before:rounded-full z-10 before:-z-10 pl-4"
        >
          80%
        </div>
      </div>

      <div>
        <h5 class="font-bold text-accent">Social Innovation</h5>
        <div
          class="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[85%] before:rounded-full z-10 before:-z-10 pl-4"
        >
          85%
        </div>
      </div>
    </div>
  </div>

  <figure
    class="lg:max-w-[550px] xl:relative xl:before xl:before:top-0 xl:before:left-0 xl:before:h-full xl:before:w-5 xl:pl-20"
  >
    <img src="images/skills.jpg" alt="" />
  </figure>
</section>
```

## 🏗️ HTML Structure Breakdown

### 1. Section Container (Skills Section)

```html
<section
  class="p-6 flex flex-col gap-y-10 bg-primary text-text md:p-16 lg:gap-x-10 lg:flex-row-reverse *:basis-full"
></section>
```

#### 🌟 Purpose:

This section container wraps the entire Skills section, organizing the content into a flexible, responsive layout.

#### 🎨 Attributes and Classes:

- `p-6`: Adds 1.5rem (24px) padding on all sides on small screens.
- `flex flex-col`: Arranges the section content vertically by default.
- `gap-y-10`: Adds 2.5rem (40px) vertical spacing between child elements.
- `bg-primary`: Sets the background color using the primary color from the Tailwind configuration.
- `text-text`: Applies the default text color for the section.
- `md:p-16`: Increases the padding to 4rem (64px) on medium screens and larger (768px).
- `lg:gap-x-10`: Adds 2.5rem (40px) horizontal spacing between the elements on large screens (1024px).
- `lg:flex-row-reverse`: Reverses the layout so that the figure comes before the text on large screens (1024px).
- `*:basis-full`: Ensures the children of the flex container take up the full width available.

#### 🔗 Relationship with Other Elements:

This section container wraps the text and image, organizing them into a responsive layout that adjusts based on screen size.

### 2. Text Container (Skills Text Block)

```html
<div class="space-y-5 lg:self-center xl:space-y-10"></div>
```

#### 🌟 Purpose:

This container wraps the skills heading, description, and skills list, organizing the text content with responsive spacing.

#### 🎨 Attributes and Classes:

- `space-y-5`: Adds 1.25rem (20px) vertical spacing between child elements on small screens.
- `lg:self-center`: Vertically centers the text content within the flex container on large screens (1024px).
- `xl:space-y-10`: Increases the vertical space between elements to 2.5rem (40px) on extra-large screens (1280px).

#### 🔗 Relationship with Other Elements:

This container holds all the text elements related to the skills, including the headings, description, and skill bars.

### 3. Heading Block (Skills Heading)

```html
<div class="space-y-2"></div>
```

#### 🌟 Purpose:

This wrapper groups the My Skills heading and subheading together.

#### 🎨 Attributes and Classes:

- `space-y-2`: Adds 0.5rem (8px) vertical space between the heading and subheading.

#### 🔗 Relationship with Other Elements:

This container groups the heading and subheading for the skills section.

### 4. Section Heading (My Skills)

```html
<h6
  class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg"
>
  My Skills
</h6>
```

#### 🌟 Purpose:

The My Skills heading introduces the section and is styled with a decorative bar to the left.

#### 🎨 Attributes and Classes:

- `text-sm`: Sets the text size to 0.875rem (14px) on small screens.
- `pl-6`: Adds 1.5rem (24px) left padding.
- `uppercase`: Transforms the text to uppercase.
- `relative`: Positions the heading relatively for styling the before pseudo-element.
- `before:h-1`: Sets the height of the before pseudo-element to 0.25rem (4px).
- `before:w-4`: Sets the width of the before pseudo-element to 1rem (16px).
- `before:bg-accent`: Applies the accent color to the before pseudo-element.
- `before:top-2/4`: Vertically centers the before pseudo-element.
- `before:-translate-y-2/4`: Adjusts the vertical translation of the before pseudo-element.
- `before:left-0`: Aligns the before pseudo-element to the left.
- `lg:text-lg`: Increases the text size to 1.125rem (18px) on large screens (1024px).

#### 🔗 Relationship with Other Elements:

This heading introduces the skills section and is followed by the subheading.

### 5. Subheading (Skills Description)

```html
<h2 class="text-2xl capitalize font-bold lg:text-3xl">
  I am experienced in the following fields
</h2>
```

#### 🌟 Purpose:

The subheading provides context to the skills list, introducing the fields in which the individual is experienced.

#### 🎨 Attributes and Classes:

- `text-2xl`: Sets the text size to 1.5rem (24px) on small screens.
- `capitalize`: Capitalizes the first letter of each word.
- `font-bold`: Applies a bold font weight to the subheading.
- `lg:text-3xl`: Increases the text size to 1.875rem (30px) on large screens (1024px).

#### 🔗 Relationship with Other Elements:

This subheading appears below the My Skills heading, introducing the following skills list.

### 6. Description Block (Text Paragraphs)

```html
<div class="space-y-2">
  <p>Lorem ipsum dolor recusandae modi odio, a voluptatem Eos, commodi!</p>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
    doloremque nesciunt
  </p>
</div>
```

#### 🌟 Purpose:

This container groups the two descriptive paragraphs that provide additional context and explanation about the skills.

#### 🎨 Attributes and Classes:

- `space-y-2`: Adds 0.5rem (8px) vertical space between the paragraphs.

##### Paragraphs (`<p>`)

- First `<p>`:
  - Contains introductory text that adds context to the skills section.
- Second `<p>`:
  - Continues with additional descriptive content.

#### 🔗 Relationship with Other Elements:

These paragraphs follow the subheading and provide details related to the individual's skills, offering more information before the skill bars are presented.

### 7. Skills Bar Container

```html
<div class="space-y-5 *:space-y-2 xl:space-y-8"></div>
```

#### 🌟 Purpose:

This container organizes the individual skill bars.

#### 🎨 Attributes and Classes:

- `space-y-5`: Adds 1.25rem (20px) vertical space between skill bars.
- `*:space-y-2`: Adjusts vertical spacing for specific breakpoints or custom classes.
- `xl:space-y-8`: Increases the vertical space to 2rem (32px) on extra-large screens (1280px).

#### 🔗 Relationship with Other Elements:

This container holds all the skill bars, creating visual separation between them.

### 8. Individual Skill Bars

Each skill bar consists of a title and a progress bar showing proficiency in the skill.

#### Skill Title (Photography)

```html
<h5 class="font-bold text-accent">Photography</h5>
```

##### 🌟 Purpose:

The skill title introduces the specific skill being measured.

##### 🎨 Attributes and Classes:

- `font-bold`: Applies a bold font weight to the skill title.
- `text-accent`: Colors the title with the accent color from Tailwind's theme.

#### Skill Progress Bar

```html
<div
  class="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[95%] before:rounded-full z-10 before:-z-10 pl-4"
>
  95%
</div>
```

##### 🌟 Purpose:

The progress bar visually represents proficiency in the skill as a percentage.

##### 🎨 Attributes and Classes:

- `h-6`: Sets the height of the bar to 1.5rem (24px).
- `w-full`: Ensures the progress bar takes up 100% of the available width.
- `rounded-full`: Adds fully rounded corners to the bar.
- `bg-secondary`: Sets the background color of the bar using the secondary theme color.
- `relative`: Positions the progress bar relative to allow for positioning of the before pseudo-element.
- `before:top-0`: Positions the before pseudo-element at the top of the bar.
- `before:left-0`: Aligns the before pseudo-element with the left edge of the bar.
- `before:h-6`: Sets the height of the before pseudo-element to match the height of the progress bar.
- `before:w-[95%]`: Sets the width of the before pseudo-element to 95% of the total width, representing the proficiency.
- `before:rounded-full`: Applies rounded corners to the before pseudo-element.
- `z-10`: Ensures the progress bar is on top of other content.
- `before:-z-10`: Positions the pseudo-element beneath the text of the progress bar.
- `pl-4`: Adds 1rem (16px) left padding to the progress bar to create space for the percentage text.

#### 🔗 Relationship with Other Elements:

Each skill bar represents a specific skill, with the percentage showing proficiency.

### 9. Figure Container (Skills Image)

```html
<figure
  class="lg:max-w-[550px] xl:relative xl:before xl:before:top-0 xl:before:left-0 xl:before:h-full xl:before:w-5 xl:pl-20"
></figure>
```

#### 🌟 Purpose:

This figure wraps the image for the skills section, providing visual balance to the text content.

#### 🎨 Attributes and Classes:

- `lg:max-w-[550px]`: Limits the maximum width of the image to 550px on large screens (1024px).
- `xl:relative`: Positions the figure relatively for pseudo-element styling.
- `xl:before`: Adds a decorative pseudo-element.
- `xl:before:top-0`: Positions the pseudo-element at the top.
- `xl:before:left-0`: Aligns the pseudo-element to the left of the figure.
- `xl:before:h-full`: Sets the pseudo-element to span the full height of the figure.
- `xl:before:w-5`: Adds a 1.25rem (20px) wide pseudo-element.
- `xl:pl-20`: Adds 5rem (80px) left padding on extra-large screens (1280px).

#### 🔗 Relationship with Other Elements:

The figure provides a visual element, balancing the text-heavy content of the section.

## 🗂️ Element Hierarchy Overview

- `<section>` – Skills section container (p-6 flex bg-primary)
  - `<div>` – Text container (space-y-5 lg:self-center)
    - `<div>` – Heading block (space-y-2)
      - `<h6>` – Section heading (text-sm pl-6 uppercase)
      - `<h2>` – Subheading (text-2xl capitalize font-bold)
    - `<div>` – Description block (space-y-2)
      - `<p>` – First description paragraph
      - `<p>` – Second description paragraph
    - `<div>` – Skill bars container (space-y-5)
      - `<div>` – Skill bar wrapper (Photography)
        - `<h5>` – Skill title (font-bold text-accent)
        - `<div>` – Progress bar (h-6 w-full bg-secondary relative)
      - `<div>` – Skill bar wrapper (Design Thinking)
      - `<div>` – Skill bar wrapper (Videography)
      - `<div>` – Skill bar wrapper (Social Innovation)
  - `<figure>` – Skills image container (lg:max-w-[550px])
    - `<img>` – Image element (src="images/skills.jpg")

## 🚀 Purpose and Flow of the Document

### 🧱 Layout

The Skills Section uses a flexbox layout to arrange text and visuals side by side. On larger screens, the image appears on the right, and the text content is displayed on the left. The section adjusts responsively, stacking the content vertically on smaller screens.

### 🏗️ Structure

This section is divided into two primary parts: the text block and the image. The text block contains the section heading, a description, and skill bars that visually represent proficiency levels in different areas.

### 🎯 Flow of Interaction

Users are introduced to the section with a heading, followed by a description. The skill bars provide an interactive and visual way to represent proficiency, engaging the user and guiding them through the text.

### 🎨 Visual Hierarchy

The section heading and skill titles are emphasized with bold text, while the skill bars stand out due to their horizontal progress indicators. The image balances the text, adding visual interest to the section.

## 🤝 Understanding the Relationships

- Parent-Child Relationships:
  The section container wraps the text and figure, with the text block containing headings, descriptions, and skill bars. The figure adds a visual element.

- Sizing Relationships:
  The skill bars are sized proportionally based on proficiency, and the section adjusts padding and spacing responsively.

- Color Relationships:
  The accent color is used to highlight headings and skill titles, while the secondary color is used for the background of the progress bars.

- Layout Relationships:
  The flexbox layout ensures that text and images are arranged in a balanced manner, reversing the order on larger screens for better visual impact.

## 📝 Additional Notes

- The section is responsive, stacking the content vertically on smaller screens and aligning it horizontally on larger screens. 📱💻
- The skill bars provide a clear, interactive way to represent skill proficiency visually. 🎯
- Tailwind's utility-first approach makes it easy to adjust and customize this section as needed. 🚀
