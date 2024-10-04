# **Pricing Section - Styling and Structure Breakdown**

```html
<section class="component bg-primary-300 dark:bg-primary-900">
  <div class="flex flex-col gap-y-4 md:gap-y-3">
    <h2 class="text-center text-2xl font-bold">Pricing</h2>
    <p class="text-center dark:text-primary-500">No Hidden Fees</p>
  </div>

  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div
      class="flex flex-col gap-y-8 roudned p-8 bg-white dark:border-2 dark:border-green dark:bg-primary-900 dark:shadow-md dark:shadow-green"
    >
      <h6 class="text-green self-center uppercase">Basic</h6>
      <h5
        class="bg-green/40 self-center rounded-full size-24 flex items-center justify-center gap-x-1 text-2xl font-bold text-primary-600 dark:text-white"
      >
        <sup class="text-green">$</sup>9.99
      </h5>

      <ul class="flex flex-col gap-y-4 *:flex *:items-center *:gap-x-4">
        <li>
          <span
            class="fas fa-check rounded-full bg-green/40 text-green p-2"
          ></span
          >Feature 1
        </li>
        <li>
          <span
            class="fas fa-check rounded-full bg-green/40 text-green p-2"
          ></span
          >Feature 2
        </li>
        <li>
          <span
            class="fas fa-check rounded-full bg-green/40 text-green p-2"
          ></span
          >Feature 3
        </li>
        <li>
          <span
            class="fas fa-check rounded-full bg-green/40 text-green p-2"
          ></span
          >Feature 4
        </li>
      </ul>

      <a class="border-2 border-green px-4 py-2 text-center" href="#"
        >Choose Plan</a
      >
    </div>

    <!-- Similar structure for Professional and Premium plans -->
  </div>
</section>
```

## 🏗️ HTML Structure Breakdown

### 1. Section Container

```html
<section class="component bg-primary-300 dark:bg-primary-900"></section>
```

**🌟 Purpose:**
This section serves as the main container for the pricing section, holding all pricing plans and content related to pricing.

**🎨 Attributes and Classes:**

- `component`: A custom class identifying the section as a reusable block on the page.
- `bg-primary-300`: Applies a light primary background color (primary-300), making the section visually distinct in light mode.
- `dark:bg-primary-900`: In dark mode, the background changes to a darker shade (primary-900), ensuring readability and visual consistency with the dark theme.

**🔗 Relationship with Other Elements:**
This container serves as the overall wrapper for the entire pricing section, ensuring that all elements within it are styled consistently and positioned correctly within the page layout.

### 2. Pricing Header Container

```html
<div class="flex flex-col gap-y-4 md:gap-y-3"></div>
```

**🌟 Purpose:**
This div contains the heading and subheading for the pricing section, introducing the plans and ensuring they are presented in a clear and structured manner.

**🎨 Attributes and Classes:**

- `flex flex-col`: Uses Flexbox to stack the heading and subheading vertically.
- `gap-y-4`: Adds vertical spacing of 1rem (16px) between the heading and subheading.
- `md:gap-y-3`: On medium screens (768px and up), reduces the vertical spacing to 0.75rem (12px) for a more compact look.

**🔗 Relationship with Other Elements:**
This container ensures the heading and subheading are grouped together and spaced evenly, creating a clear introduction to the pricing plans.

### 3. Pricing Section Heading

```html
<h2 class="text-center text-2xl font-bold">Pricing</h2>
```

**🌟 Purpose:**
The heading (h2) introduces the pricing section, setting the tone for the content that follows.

**🎨 Attributes and Classes:**

- `text-center`: Centers the heading horizontally within the container.
- `text-2xl`: Sets the font size to 1.5rem (24px), making the heading prominent.
- `font-bold`: Applies bold font weight to the heading, ensuring it stands out.

**🔗 Relationship with Other Elements:**
This heading provides the main title for the pricing section, ensuring that users immediately understand the section's purpose.

### 4. Pricing Subheading

```html
<p class="text-center dark:text-primary-500">No Hidden Fees</p>
```

**🌟 Purpose:**
The paragraph (p) serves as the subheading, reinforcing transparency in pricing.

**🎨 Attributes and Classes:**

- `text-center`: Centers the subheading horizontally within the container.
- `dark:text-primary-500`: In dark mode, changes the text color to a medium primary shade (primary-500), ensuring readability.

**🔗 Relationship with Other Elements:**
The subheading supports the main heading by emphasizing the transparency of the pricing, making it clear that there are no hidden fees.

### 5. Pricing Plans Grid Container

```html
<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"></div>
```

**🌟 Purpose:**
This div acts as a grid container, holding each of the pricing plans and ensuring they are displayed in a clear, organized manner.

**🎨 Attributes and Classes:**

- `grid`: Uses CSS Grid to create a structured layout for the pricing plans.
- `gap-8`: Adds 2rem (32px) of space between the grid items (pricing plans).
- `sm:grid-cols-2`: On small screens (640px and up), arranges the grid into two columns, displaying two pricing plans side by side.
- `lg:grid-cols-3`: On large screens (1024px and up), arranges the grid into three columns, displaying all three pricing plans side by side.

**🔗 Relationship with Other Elements:**
The grid container ensures that all pricing plans are arranged in a structured, evenly spaced layout, adapting smoothly to different screen sizes.

### 6. Pricing Plan Container (Basic Plan)

```html
<div
  class="flex flex-col gap-y-8 roudned p-8 bg-white dark:border-2 dark:border-green dark:bg-primary-900 dark:shadow-md dark:shadow-green"
></div>
```

**🌟 Purpose:**
This div serves as the container for the Basic Plan, holding all content related to this specific pricing plan.

**🎨 Attributes and Classes:**

- `flex flex-col`: Uses Flexbox to stack the elements (heading, price, features, and button) vertically.
- `gap-y-8`: Adds vertical spacing of 2rem (32px) between the elements inside the container.
- `rounded`: (Note: There's a typo in the class "roudned." It should be "rounded.") Adds rounded corners to the container for a modern look.
- `p-8`: Adds 2rem (32px) of padding inside the container to create space around the content.
- `bg-white`: Sets the background color to white, making the plan stand out in light mode.
- `dark:border-2`: In dark mode, adds a 2px solid border around the container.
- `dark:border-green`: The border in dark mode is colored green, matching the plan's theme.
- `dark:bg-primary-900`: In dark mode, the background changes to a dark primary color (primary-900).
- `dark:shadow-md dark:shadow-green`: Applies a medium shadow with a green hue in dark mode, adding depth and emphasis to the plan.

**🔗 Relationship with Other Elements:**
This container holds all content for the Basic Plan, ensuring that it stands out visually and is styled consistently with the overall theme.

### 7. Plan Title (Basic Plan)

```html
<h6 class="text-green self-center uppercase">Basic</h6>
```

**🌟 Purpose:**
The heading (h6) provides the title for the Basic Plan, making it immediately clear which plan this is.

**🎨 Attributes and Classes:**

- `text-green`: Sets the text color to green, matching the plan's theme.
- `self-center`: Centers the title horizontally within its container.
- `uppercase`: Transforms the text to uppercase, giving it a bold and prominent appearance.

**🔗 Relationship with Other Elements:**
The title clearly identifies this plan as the Basic Plan, making it easy for users to distinguish between the different pricing options.

### 8. Plan Price (Basic Plan)

```html
<h5
  class="bg-green/40 self-center rounded-full size-24 flex items-center justify-center gap-x-1 text-2xl font-bold text-primary-600 dark:text-white"
>
  <sup class="text-green">$</sup>9.99
</h5>
```

**🌟 Purpose:**
This heading (h5) displays the price of the Basic Plan, making it the focal point of the plan.

**🎨 Attributes and Classes:**

- `bg-green/40`: Adds a semi-transparent green background with 40% opacity, creating a soft highlight around the price.
- `self-center`: Centers the price horizontally within the container.
- `rounded-full`: Creates a circular shape around the price, making it stand out.
- `size-24`: Sets the size of the container to 6rem (96px), ensuring the price is prominently displayed.
- `flex items-center justify-center`: Uses Flexbox to center the price content both vertically and horizontally within the circle.
- `gap-x-1`: Adds horizontal space of 0.25rem (4px) between the currency symbol and the price.
- `text-2xl`: Sets the font size to 1.5rem (24px), making the price large and easy to read.
- `font-bold`: Applies bold font weight to emphasize the price.
- `text-primary-600`: Sets the price text color to a darker primary shade (primary-600) in light mode.
- `dark:text-white`: In dark mode, the price text changes to white for better contrast.
- `<sup class="text-green">`: The currency symbol is styled with a smaller font size and green color, ensuring it is visually distinct from the price.

**🔗 Relationship with Other Elements:**
The price is the focal point of the Basic Plan, and its design ensures it stands out visually from the other elements within the plan.

### 9. Feature List (Basic Plan)

```html
<ul class="flex flex-col gap-y-4 *:flex *:items-center *:gap-x-4"></ul>
```

**🌟 Purpose:**
This unordered list (ul) contains the list of features included in the Basic Plan, providing users with a clear breakdown of what the plan offers.

**🎨 Attributes and Classes:**

- `flex flex-col`: Uses Flexbox to stack the list items vertically. Each feature is listed in its own row, ensuring a clean and organized layout.
- `gap-y-4`: Adds vertical spacing of 1rem (16px) between each list item, ensuring enough space for readability without crowding the content.
- `*:flex`: The \*: variant targets the direct children of the container (the <ul> in this case) and applies Flexbox styling to each child element. This variant ensures that, under certain conditions or breakpoints, each list item (<li>) can adjust its layout flexibly.
- `*:items-center`: Aligns the children (the list items) vertically at the center of the Flexbox container. This makes sure that both the checkmark icon and the text are aligned properly along the same axis.
- `*:gap-x-4`: Adds horizontal spacing of 1rem (16px) between the checkmark icon and the feature text, ensuring that the content is spaced out evenly. This prevents the text from being too close to the checkmark, improving readability.

**🔗 Relationship with Other Elements:**
This unordered list holds all the features for the Basic Plan, clearly presenting what the plan offers. The use of the \*: variant ensures that each feature item within the list is styled consistently, with Flexbox layouts applied to all children equally for a clean, organized display.

### 10. Feature List Item (Basic Plan)

```html
<li>
  <span class="fas fa-check rounded-full bg-green/40 text-green p-2"></span>
  Feature 1
</li>
```

**🌟 Purpose:**
This list item (li) represents an individual feature within the Basic Plan, showing the feature name alongside a checkmark to indicate that it is included in the plan.

**🎨 Attributes and Classes:**

- `fas fa-check`: Uses Font Awesome's checkmark icon, which is a globally recognized symbol indicating that the feature is included. The fas class specifies the solid style of Font Awesome icons, making the checkmark more visible and pronounced.
- `rounded-full`: Applies fully rounded corners to the icon container, making the background circular. This helps the checkmark stand out and gives the design a modern, polished look.
- `bg-green/40`: Adds a semi-transparent green background (40% opacity) behind the checkmark icon, giving it a soft, highlighted appearance. The green color aligns with the Basic Plan's theme.
- `text-green`: Colors the checkmark itself green, ensuring it is clearly visible and consistent with the plan's color scheme.
- `p-2`: Adds padding of 0.5rem (8px) around the checkmark icon, ensuring the icon has enough space and does not appear cramped inside the circular background.

**🔗 Relationship with Other Elements:**
Each list item in the feature list clearly marks a feature as included in the Basic Plan. The combination of the checkmark and the descriptive text makes it easy for users to quickly scan through the included features.

### 11. CTA Button (Basic Plan)

```html
<a class="border-2 border-green px-4 py-2 text-center" href="#">
  Choose Plan
</a>
```

**🌟 Purpose:**
This anchor tag (a) serves as the call-to-action (CTA) button, inviting users to select the Basic Plan and proceed with their choice.

**🎨 Attributes and Classes:**

- `border-2`: Adds a solid 2px border around the button, giving it a bold and defined appearance.
- `border-green`: Colors the border green, aligning the button's design with the Basic Plan's theme.
- `px-4`: Adds horizontal padding of 1rem (16px) to both sides of the button text, ensuring the button has sufficient width and feels comfortable to click.
- `py-2`: Adds vertical padding of 0.5rem (8px) to the top and bottom of the button, ensuring the text is well-centered within the button.
- `text-center`: Centers the button text within the button, ensuring that the label "Choose Plan" is evenly spaced.

**🔗 Relationship with Other Elements:**
The CTA button is the action point for the Basic Plan, inviting users to click and make their selection. The green border and centered text create a clear, easily clickable button that aligns with the plan's overall theme.

## Professional and Premium Plan Differences

The Professional Plan and Premium Plan share the same basic structure as the Basic Plan. Below are the differences that set these two plans apart:

### Professional Plan Differences

```html
<div
  class="flex flex-col gap-y-8 roudned p-8 bg-white dark:border-2 dark:border-orange dark:bg-primary-900 dark:shadow-md dark:shadow-orange lg:scale-110"
></div>
```

- `dark:border-orange`: In dark mode, the border color changes to orange, matching the Professional Plan's theme.
- `dark:shadow-orange`: The shadow around the container in dark mode has an orange hue, emphasizing the Professional Plan.
- `lg:scale-110`: On large screens (1024px and up), this plan is scaled up to 110%, making it appear larger than the others. This design choice indicates that the Professional Plan is a recommended or more prominent choice.

### Premium Plan Differences

```html
<div
  class="flex flex-col gap-y-8 roudned p-8 bg-white dark:border-2 dark:border-blue dark:bg-primary-900 dark:shadow-md dark:shadow-blue sm:flex-row sm:col-span-2 sm:justify-between lg:flex-col lg:col-span-1"
></div>
```

- `dark:border-blue`: In dark mode, the border color changes to blue, matching the Premium Plan's theme.
- `dark:shadow-blue`: The shadow around the container in dark mode has a blue hue, emphasizing the Premium Plan.
- `sm:flex-row`: On small screens (640px and up), the layout changes to a horizontal Flexbox, arranging the features and price side by side.
- `sm:col-span-2`: On small screens, this plan spans across two columns, giving it more prominence in the layout.
- `lg:col-span-1`: On large screens, the plan reverts to occupying only one column, aligning with the other plans.

## 🗂️ Element Hierarchy Overview

- `<section>` – Main container for the entire Pricing section.
  - `<div>` – Pricing header container.
    - `<h2>` – Main heading for the Pricing section ("Pricing").
    - `<p>` – Subheading for the Pricing section ("No Hidden Fees").
  - `<div>` – Grid container for the three pricing plans.
    - Pricing Plan Container (Basic Plan):
      - `<div>` – Container for the Basic Plan.
        - `<h6>` – Plan title ("Basic").
        - `<h5>` – Plan price ("$9.99").
          - `<sup>` – Currency symbol ("$").
        - `<ul>` – Feature list.
          - `<li>` – Individual feature list item.
            - `<span>` – Icon container with checkmark.
        - `<a>` – CTA button ("Choose Plan").
    - Pricing Plan Container (Professional Plan):
      - `<div>` – Container for the Professional Plan.
        - `<h6>` – Plan title ("Professional").
        - `<h5>` – Plan price ("$12.99").
          - `<sup>` – Currency symbol ("$").
        - `<ul>` – Feature list.
          - `<li>` – Individual feature list item.
            - `<span>` – Icon container with checkmark.
        - `<a>` – CTA button ("Choose Plan").
    - Pricing Plan Container (Premium Plan):
      - `<div>` – Container for the Premium Plan.
        - `<h6>` – Plan title ("Premium").
        - `<h5>` – Plan price ("$19.99").
          - `<sup>` – Currency symbol ("$").
        - `<ul>` – Feature list.
          - `<li>` – Individual feature list item.
            - `<span>` – Icon container with checkmark.
        - `<a>` – CTA button ("Choose Plan").

## 🚀 Purpose and Flow of the Document

The Pricing Section is designed to give users a clear choice between three pricing plans—Basic, Professional, and Premium. Each plan offers different features and pricing, allowing users to select the one that best fits their needs.

### Purpose:

1. **Presenting Options:**
   The section clearly displays the pricing options, allowing users to easily compare features and prices across three different plans.

2. **Visual Emphasis:**
   The design emphasizes the Professional Plan by scaling it up slightly on large screens, suggesting it might be the recommended or most popular option.

3. **Encouraging Action:**
   Each plan includes a clear CTA button ("Choose Plan"), encouraging users to make a decision and move forward in their journey.

### Flow of Interaction:

1. **Visual Hierarchy:**
   Users are drawn to the section header and subheader first, followed by the individual plans. The plans are laid out in a structured grid for easy comparison.

2. **Plan Selection:**
   Each plan is presented with its price, features, and a CTA button, allowing users to select their preferred option.

3. **Call to Action:**
   The buttons are prominent and styled according to each plan's color scheme, prompting users to take action.

## 🤝 Understanding the Relationships

### 1. Parent-Child Relationships:

- The main section acts as the container for the entire Pricing layout, holding the header and the grid of pricing plans.
- Each pricing plan is a child element inside the grid, containing its own title, price, feature list, and CTA button.

### 2. Sizing Relationships:

- The Professional Plan is scaled up (lg:scale-110) on larger screens, making it more prominent and visually suggesting that it's a recommended choice.

### 3. Color Relationships:

- Each plan uses a different color to distinguish it visually:
  - Green for Basic
  - Orange for Professional
  - Blue for Premium
- These colors are used consistently across the plan title, price, checkmarks, and CTA buttons.

### 4. Typographical Relationships:

- The plan title and price are bold and prominent, ensuring they catch the user's attention.
- The feature text is regular and smaller, providing secondary information without competing for visual attention.

### 5. Layout Relationships:

- The grid layout ensures that all plans are arranged neatly and adjust according to screen size, with responsive changes at small (sm) and large (lg) breakpoints.

## 📝 Additional Notes

- **Responsive Design:**
  The entire pricing section adapts smoothly to different screen sizes, with changes in layout, spacing, and scaling to ensure the plans are presented effectively on all devices.

- **Color and Visual Consistency:**
  Each plan's color theme is consistent across all elements, including the title, price, checkmarks, and CTA button, making it easy for users to associate the color with the plan.

- **Dark Mode Optimization:**
  The section is fully optimized for dark mode, ensuring the design remains visually appealing and easy to read in all environments.
