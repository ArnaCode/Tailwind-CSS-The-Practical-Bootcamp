# Contact Form Section - Styling and Structure Breakdown

```html
<footer
  class="p-6 flex flex-col gap-y-10 bg-primary text-text md:p-16 lg:gap-x-10 lg:flex-row *:basis-full"
>
  <div class="flex flex-col gap-y-5">
    <figure>
      <img src="images/form.jpg" alt="" />
    </figure>

    <form
      class="flex flex-col gap-y-2 *:px-4 *:py-2 *:rounded *:outline-none h-full"
    >
      <input
        class="bg-accent text-text placeholder:text-text/80 h-12 sm:h-16"
        type="text"
        placeholder="Name"
      />
      <input
        class="bg-accent text-text placeholder:text-text/80 h-12 sm:h-16"
        type="email"
        placeholder="Email"
      />
      <textarea
        class="bg-accent text-text placeholder:text-text/80 h-48 lg:h-full"
        placeholder="Message"
      ></textarea>
      <input
        class="border-2 border-accent text-text cursor-pointer h-12 sm:h-16"
        type="submit"
        value="Submit"
      />
    </form>
  </div>

  <div class="flex flex-col gap-y-5 lg:self-center xl:gap-y-10 *:space-y-2">
    <div>
      <h6
        class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-left-0 lg:text-lg"
      >
        let's talk
      </h6>
      <h2 class="text-2xl capitalize font-bold lg:text-3xl">Keep In Touch</h2>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
      eveniet, doloribus impedit fuga eum accusamus Lorem
    </p>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      <div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2">
        <figure class="row-span-2">
          <img class="w-28" src="images/contact-icon-1.png" alt="" />
        </figure>

        <h6 class="self-end text-accent">Phone Number</h6>
        <p>123-234-1234</p>
      </div>

      <div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2">
        <figure class="row-span-2">
          <img class="w-28" src="images/contact-icon-2.png" alt="" />
        </figure>

        <h6 class="self-end text-accent">Email address</h6>
        <p>cool@cool.com</p>
      </div>

      <div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2">
        <figure class="row-span-2">
          <img class="w-28" src="images/contact-icon-3.png" alt="" />
        </figure>

        <h6 class="self-end text-accent">Websites</h6>
        <p>www.cool.com</p>
      </div>

      <div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2">
        <figure class="row-span-2">
          <img class="w-28" src="images/contact-icon-4.png" alt="" />
        </figure>
        <h6 class="self-end text-accent">Address</h6>
        <p>177A Bleecker Street, NY</p>
      </div>
    </div>
  </div>
</footer>
```

## 🏗️ HTML Structure Breakdown

### 1. Footer Container (Contact Form Section)

```html
<footer
  class="p-6 flex flex-col gap-y-10 bg-primary text-text md:p-16 lg:gap-x-10 lg:flex-row *:basis-full"
></footer>
```

🌟 **Purpose:**
The footer serves as the primary container for the entire Contact Form Section. It organizes the form and contact details in a responsive layout, adjusting based on screen size.

🎨 **Attributes and Classes:**

- `p-6`: Adds 1.5rem (24px) padding around all sides of the footer.
- `flex flex-col`: Arranges the child elements vertically using flexbox by default.
- `gap-y-10`: Adds 2.5rem (40px) vertical spacing between the child elements.
- `bg-primary`: Applies the primary background color.
- `text-text`: Sets the text color to the default text color.
- `md:p-16`: Increases the padding to 4rem (64px) on medium screens (768px).
- `lg:gap-x-10`: Adds 2.5rem (40px) horizontal spacing between the elements on large screens (1024px).
- `lg:flex-row`: On large screens, this shifts the layout to a horizontal flex row.
- `*:basis-full`: Ensures the children take up the full available space in their flex container.

🔗 **Relationship with Other Elements:**
This container wraps both the form block and the contact details block, ensuring the layout adapts well on both small and large screens.

### 2. Form Section (Form Block)

```html
<div class="flex flex-col gap-y-5"></div>
```

🌟 **Purpose:**
This div wraps the contact form elements, arranging the form inputs and the submit button in a vertical stack.

🎨 **Attributes and Classes:**

- `flex flex-col`: Arranges the form content vertically using flexbox.
- `gap-y-5`: Adds 1.25rem (20px) vertical spacing between each form element.

🔗 **Relationship with Other Elements:**
The form block houses the form inputs and is positioned next to the contact details block. The flex-column layout ensures the form fields are stacked on top of one another.

### 3. Figure (Form Image)

```html
<figure>
  <img src="images/form.jpg" alt="" />
</figure>
```

🌟 **Purpose:**
This figure contains an image that provides a visual context for the form section.

🔗 **Relationship with Other Elements:**
The image is positioned above the form fields to make the form visually appealing and offer context. It helps balance the text and form inputs.

### 4. Form Element

```html
<form
  class="flex flex-col gap-y-2 *:px-4 *:py-2 *:rounded *:outline-none h-full"
></form>
```

🌟 **Purpose:**
The form contains the input fields where users can enter their name, email, and message and submit the information.

🎨 **Attributes and Classes:**

- `flex flex-col`: Arranges the form inputs and submit button in a vertical stack using flexbox.
- `gap-y-2`: Adds 0.5rem (8px) vertical spacing between form inputs.
- `*:px-4 *:py-2`: Adds custom padding to the form fields: 1rem (16px) left and right padding, and 0.5rem (8px) top and bottom padding.
- `*:rounded`: Applies rounded corners to the form fields.
- `*:outline-none`: Removes the default focus outline from the form elements for a cleaner design.
- `h-full`: Ensures the form takes up the full available height.

🔗 **Relationship with Other Elements:**
The form is structured to accept user input. The form fields (name, email, message) are neatly stacked, and the submit button is placed at the bottom for user interaction.

### 5. Input Field (Name)

```html
<input
  class="bg-accent text-text placeholder:text-text/80 h-12 sm:h-16"
  type="text"
  placeholder="Name"
/>
```

🌟 **Purpose:**
This input field allows users to enter their name.

🎨 **Attributes and Classes:**

- `bg-accent`: Sets the background color of the input to the accent color.
- `text-text`: Sets the text color inside the input to the default text color.
- `placeholder:text-text/80`: Colors the placeholder text with a slightly faded 80% opacity version of the default text color.
- `h-12`: Sets the height of the input field to 3rem (48px).
- `sm:h-16`: Increases the height to 4rem (64px) on small screens (640px).

🔗 **Relationship with Other Elements:**
The name input field is the first field in the form, allowing users to enter their name before continuing to the email and message fields.

### 6. Input Field (Email)

```html
<input
  class="bg-accent text-text placeholder:text-text/80 h-12 sm:h-16"
  type="email"
  placeholder="Email"
/>
```

🌟 **Purpose:**
This input field allows users to enter their email address.

🎨 **Attributes and Classes:**

- `bg-accent`: Sets the background color of the input to the accent color.
- `text-text`: Sets the text color inside the input to the default text color.
- `placeholder:text-text/80`: Colors the placeholder text with 80% opacity of the default text color.
- `h-12`: Sets the height of the input field to 3rem (48px).
- `sm:h-16`: Increases the height to 4rem (64px) on small screens.

🔗 **Relationship with Other Elements:**
The email input field is positioned below the name field, creating a logical progression for the user to fill out their contact details.

### 7. Textarea (Message)

```html
<textarea
  class="bg-accent text-text placeholder:text-text/80 h-48 lg:h-full"
  placeholder="Message"
></textarea>
```

🌟 **Purpose:**
This textarea allows users to enter their message.

🎨 **Attributes and Classes:**

- `bg-accent`: Applies the accent background color to the textarea.
- `text-text`: Sets the text color inside the textarea to the default text color.
- `placeholder:text-text/80`: Colors the placeholder text with 80% opacity of the default text color.
- `h-48`: Sets the height of the textarea to 12rem (192px).
- `lg:h-full`: On large screens, the height of the textarea fills the available space.

🔗 **Relationship with Other Elements:**
The textarea follows the email field and provides ample space for users to write their message before submitting the form.

### 8. Submit Button

```html
<input
  class="border-2 border-accent text-text cursor-pointer h-12 sm:h-16"
  type="submit"
  value="Submit"
/>
```

🌟 **Purpose:**
This input serves as the submit button for the form, allowing users to send their contact information.

🎨 **Attributes and Classes:**

- `border-2`: Adds a 2px border around the submit button.
- `border-accent`: Colors the border with the accent color.
- `text-text`: Applies the default text color to the button text.
- `cursor-pointer`: Changes the cursor to a pointer when hovered, indicating it's clickable.
- `h-12`: Sets the height of the button to 3rem (48px).
- `sm:h-16`: Increases the button height to 4rem (64px) on small screens.

🔗 **Relationship with Other Elements:**
The submit button is the last element in the form, allowing users to finalize their input and submit the form.

### 9. Contact Details Section

```html
<div class="flex flex-col gap-y-5 lg:self-center xl:gap-y-10 *:space-y-2"></div>
```

🌟 **Purpose:**
This div is the main container for the contact details portion of the footer, which includes the heading, paragraph, and grid layout for contact information such as phone number, email, website, and physical address.

🎨 **Attributes and Classes:**

- `flex flex-col`: Arranges the child elements (heading, paragraph, and contact details) in a vertical stack using flexbox.
- `gap-y-5`: Adds 1.25rem (20px) vertical spacing between child elements.
- `lg:self-center`: On large screens (1024px and up), this vertically centers the content within the parent container.
- `xl:gap-y-10`: Increases the vertical spacing between elements to 2.5rem (40px) on extra-large screens (1280px and up).
- `*:space-y-2`: Adds 0.5rem (8px) vertical spacing between elements at custom breakpoints.

🔗 **Relationship with Other Elements:**
This container holds the heading block, description, and the grid layout for the detailed contact information, positioning these elements next to the form in the footer section.

### 10. Heading Block

```html
<div>
  <h6
    class="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:bg-accent before:top-2/4 before:-left-0 lg:text-lg"
  >
    let's talk
  </h6>
  <h2 class="text-2xl capitalize font-bold lg:text-3xl">Keep In Touch</h2>
</div>
```

🌟 **Purpose:**
This div contains the heading and subheading that introduce the contact details section, inviting users to reach out.

🎨 **Attributes and Classes (h6):**

- `text-sm`: Sets the font size to 0.875rem (14px).
- `pl-6`: Adds 1.5rem (24px) padding to the left of the heading.
- `uppercase`: Transforms the text to uppercase.
- `relative`: Positions the heading relative to its container to allow for the placement of pseudo-elements.
- `before:h-1`: Sets the height of the before pseudo-element to 0.25rem (4px).
- `before:w-4`: Sets the width of the before pseudo-element to 1rem (16px).
- `before:bg-accent`: Colors the before pseudo-element using the accent color.
- `before:top-2/4`: Vertically centers the before pseudo-element relative to the text.
- `before:-left-0`: Aligns the before pseudo-element to the left of the heading.
- `lg:text-lg`: Increases the font size to 1.125rem (18px) on large screens.

🎨 **Attributes and Classes (h2):**

- `text-2xl`: Sets the font size to 1.5rem (24px).
- `capitalize`: Capitalizes the first letter of each word.
- `font-bold`: Applies a bold font weight to emphasize the subheading.
- `lg:text-3xl`: Increases the font size to 1.875rem (30px) on large screens.

🔗 **Relationship with Other Elements:**
The heading and subheading provide a clear introduction to the contact details section, inviting users to engage by keeping in touch.

### 11. Contact Description Paragraph

```html
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
  eveniet, doloribus impedit fuga eum accusamus Lorem
</p>
```

🌟 **Purpose:**
This paragraph provides a brief description, offering some encouragement or additional context for users interested in contacting you.

🔗 **Relationship with Other Elements:**
This paragraph is positioned between the heading block and the contact details grid, providing an introduction to the contact options below.

### 12. Contact Information Grid Layout

```html
<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"></div>
```

🌟 **Purpose:**
This div uses a grid layout to organize the contact information (e.g., phone, email, website, address) into distinct blocks, ensuring that the information is easy to read and well-structured across different screen sizes.

🎨 **Attributes and Classes:**

- `grid`: Establishes a grid layout for the contact information blocks.
- `gap-5`: Adds 1.25rem (20px) gap between grid items.
- `sm:grid-cols-2`: On small screens (640px and up), the grid is displayed in two columns.
- `lg:grid-cols-1`: On large screens (1024px and up), the layout switches to a single-column grid.
- `xl:grid-cols-2`: On extra-large screens (1280px and up), the grid reverts to a two-column layout.

🔗 **Relationship with Other Elements:**
This grid layout ensures that the contact details are structured and presented in an organized, responsive manner, adjusting the number of columns based on the screen size.

### 13. Contact Information Block (Phone Number)

```html
<div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2"></div>
```

🌟 **Purpose:**
This div is a grid container for the phone number contact information, including an icon, a heading, and the phone number itself. The two-column grid layout keeps the icon and text well-structured.

🎨 **Attributes and Classes:**

- `grid`: Establishes a grid layout for the phone number block.
- `grid-cols-[112px_1fr]`: Defines two columns: the first column is fixed at 112px for the icon, and the second column fills the remaining space for the text.
- `grid-rows-2`: Creates a two-row layout: the icon spans two rows, while the heading and text are positioned in the other rows.
- `gap-x-5`: Adds 1.25rem (20px) horizontal spacing between columns.
- `gap-y-2`: Adds 0.5rem (8px) vertical spacing between rows.

🔗 **Relationship with Other Elements:**
The phone number block is part of the contact grid, ensuring that users have easy access to your contact number alongside other details.

### 14. Icon (Phone Number)

```html
<figure class="row-span-2">
  <img class="w-28" src="images/contact-icon-1.png" alt="" />
</figure>
```

🌟 **Purpose:**
This figure contains the icon representing the phone number.

🎨 **Attributes and Classes:**

- `row-span-2`: Ensures the icon spans two rows in the grid.
- `w-28`: Sets the width of the icon to 7rem (112px).

🔗 **Relationship with Other Elements:**
The phone icon is visually paired with the heading and phone number, providing a recognizable symbol to help users identify contact options quickly.

### 15. Phone Number Heading and Text

```html
<h6 class="self-end text-accent">Phone Number</h6>
<p>123-234-1234</p>
```

🌟 **Purpose:**

- The heading clearly labels this section as the phone number, helping users understand the type of contact information being provided.
- The paragraph contains the actual phone number that users can use to contact you.

🎨 **Attributes and Classes (h6):**

- `self-end`: Aligns the heading to the bottom of its grid cell, ensuring that it lines up neatly with the rest of the content.
- `text-accent`: Colors the heading with the accent color, making it visually distinct from the rest of the text.

🎨 **Attributes and Classes (p):**

- Displays the phone number 123-234-1234 in a simple, readable format without additional styles.

🔗 **Relationship with Other Elements:**
The phone number and its heading are displayed next to the phone icon, making it clear to users how they can contact you by phone.

### 16. Contact Information Block (Email Address)

```html
<div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2"></div>
```

🌟 **Purpose:**
This div is a grid container for the email address, including an icon, heading, and the email address text.

🎨 **Attributes and Classes:**

- `grid`: Establishes the grid layout for this contact information block.
- `grid-cols-[112px_1fr]`: Defines two columns, with the first column set to 112px for the icon and the second column filling the remaining space for the text.
- `grid-rows-2`: Creates two rows, with the icon spanning both rows, and the heading and email address displayed in the remaining rows.
- `gap-x-5`: Adds 1.25rem (20px) horizontal spacing between the columns.
- `gap-y-2`: Adds 0.5rem (8px) vertical spacing between the rows.

🔗 **Relationship with Other Elements:**
This block mirrors the structure of the phone number block but contains information related to email communication.

### 17. Icon (Email Address)

```html
<figure class="row-span-2">
  <img class="w-28" src="images/contact-icon-2.png" alt="" />
</figure>
```

🌟 **Purpose:**
This figure holds the icon for the email address.

🎨 **Attributes and Classes:**

- `row-span-2`: Spans two rows in the grid, allowing the icon to vertically align with both the heading and the text.
- `w-28`: Sets the width of the icon to 7rem (112px).

🔗 **Relationship with Other Elements:**
The email icon visually accompanies the email heading and email address, making it easy to identify the type of contact information being displayed.

### 18. Email Address Heading and Text

```html
<h6 class="self-end text-accent">Email Address</h6>
<p>cool@cool.com</p>
```

🌟 **Purpose:**

- The heading provides a label for the email address section, helping users quickly identify how to reach you by email.
- The paragraph displays the actual email address.

🎨 **Attributes and Classes (h6):**

- `self-end`: Aligns the heading to the bottom of its grid cell, ensuring that it lines up neatly with the rest of the content.
- `text-accent`: Colors the heading with the accent color, making it stand out visually.

🎨 **Attributes and Classes (p):**

- Displays the email address cool@cool.com.

🔗 **Relationship with Other Elements:**
The email heading and email address are visually paired with the icon, ensuring consistency across contact information blocks.

### 19. Contact Information Block (Website)

```html
<div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2"></div>
```

🌟 **Purpose:**
This div is a grid container for the website information, including an icon, heading, and the website URL.

🎨 **Attributes and Classes:**

- `grid`: Establishes a grid layout for the website block.
- `grid-cols-[112px_1fr]`: Defines two columns, with the first column set to 112px for the icon and the second column filling the remaining space for the text.
- `grid-rows-2`: Creates two rows, with the icon spanning both rows, and the heading and website displayed in the remaining rows.
- `gap-x-5`: Adds 1.25rem (20px) horizontal spacing between the columns.
- `gap-y-2`: Adds 0.5rem (8px) vertical spacing between the rows.

🔗 **Relationship with Other Elements:**
This block is part of the grid layout containing the various contact methods. It mirrors the structure of the phone number and email address blocks.

### 20. Icon (Website)

```html
<figure class="row-span-2">
  <img class="w-28" src="images/contact-icon-3.png" alt="" />
</figure>
```

🌟 **Purpose:**
This figure contains the icon for the website section.

🎨 **Attributes and Classes:**

- `row-span-2`: Spans two rows in the grid, aligning the icon with both the heading and the URL.
- `w-28`: Sets the width of the icon to 7rem (112px).

🔗 **Relationship with Other Elements:**
The website icon is positioned alongside the website URL and heading, ensuring consistency with the other contact blocks.

### 21. Website Heading and URL

```html
<h6 class="self-end text-accent">Websites</h6>
<p>www.cool.com</p>
```

🌟 **Purpose:**

- The heading labels the website section, making it clear that this information is related to your website.
- The paragraph contains the actual website URL.

🎨 **Attributes and Classes (h6):**

- `self-end`: Aligns the heading to the bottom of its grid cell, ensuring neat alignment with other elements.
- `text-accent`: Applies the accent color to the heading.

🎨 **Attributes and Classes (p):**

- Displays the website URL www.cool.com.

🔗 **Relationship with Other Elements:**
The website heading and URL are visually paired with the website icon, following the structure of the other contact blocks.

### 22. Contact Information Block (Address)

```html
<div class="grid grid-cols-[112px_1fr] grid-rows-2 gap-x-5 gap-y-2"></div>
```

🌟 **Purpose:**
This div is a grid container for the address information, including an icon, heading, and the address itself.

🎨 **Attributes and Classes:**

- `grid`: Establishes a grid layout for the address block.
- `grid-cols-[112px_1fr]`: Defines two columns, with the first column set to 112px for the icon and the second column filling the remaining space for the text.
- `grid-rows-2`: Creates two rows, with the icon spanning both rows, and the heading and address text displayed in the remaining rows.
- `gap-x-5`: Adds 1.25rem (20px) horizontal spacing between the columns.
- `gap-y-2`: Adds 0.5rem (8px) vertical spacing between the rows.

🔗 **Relationship with Other Elements:**
This block is part of the contact details grid, following the same structure as the other contact blocks.

### 23. Icon (Address)

```html
<figure class="row-span-2">
  <img class="w-28" src="images/contact-icon-4.png" alt="" />
</figure>
```

🌟 **Purpose:**
This figure contains the icon for the address section.

🎨 **Attributes and Classes:**

- `row-span-2`: Spans two rows in the grid, aligning the icon with both the heading and the address.
- `w-28`: Sets the width of the icon to 7rem (112px).

🔗 **Relationship with Other Elements:**
The address icon is displayed alongside the heading and address, maintaining a consistent layout with the other contact blocks.

### 24. Address Heading and Address Text

```html
<h6 class="self-end text-accent">Address</h6>
<p>177A Bleecker Street, NY</p>
```

🌟 **Purpose:**

- The heading labels the section as the address.
- The paragraph contains the actual physical address.

🎨 **Attributes and Classes (h6):**

- `self-end`: Aligns the heading to the bottom of its grid cell, ensuring proper alignment.
- `text-accent`: Colors the heading with the accent color.

🎨 **Attributes and Classes (p):**

- Displays the physical address 177A Bleecker Street, NY.

🔗 **Relationship with Other Elements:**
The address heading and text are visually paired with the icon, following the same structure as the phone number, email, and website blocks.

## 🗂️ Element Hierarchy Overview

- `<footer>` – Main container for the contact form section
  - `<div>` – Form section container
    - `<figure>` – Contact form image wrapper
      - `<img>` – Contact form image
    - `<form>` – Contact form container
      - `<input>` – Name input field
      - `<input>` – Email input field
      - `<textarea>` – Message input field
      - `<input>` – Submit button
  - `<div>` – Contact details section container
    - `<div>` – Heading block
      - `<h6>` – Section heading (e.g., "Let's talk")
      - `<h2>` – Subheading (e.g., "Keep In Touch")
    - `<p>` – Description paragraph (e.g., "Lorem ipsum dolor...")
    - `<div>` – Grid layout for contact details
      - `<div>` – Contact information block (Phone Number)
        - `<figure>` – Icon wrapper (Phone)
          - `<img>` – Phone icon image
        - `<h6>` – Phone number heading (e.g., "Phone Number")
        - `<p>` – Phone number text (e.g., "123-234-1234")
      - `<div>` – Contact information block (Email Address)
        - `<figure>` – Icon wrapper (Email)
          - `<img>` – Email icon image
        - `<h6>` – Email heading (e.g., "Email Address")
        - `<p>` – Email address text (e.g., "cool@cool.com")
      - `<div>` – Contact information block (Website)
        - `<figure>` – Icon wrapper (Website)
          - `<img>` – Website icon image
        - `<h6>` – Website heading (e.g., "Websites")
        - `<p>` – Website URL (e.g., "www.cool.com")
      - `<div>` – Contact information block (Address)
        - `<figure>` – Icon wrapper (Address)
          - `<img>` – Address icon image
        - `<h6>` – Address heading (e.g., "Address")
        - `<p>` – Physical address (e.g., "177A Bleecker Street, NY")

## 🚀 Purpose and Flow of the Document

The Contact Form Section serves two primary purposes:

1. **To Provide Multiple Contact Methods:** The section gives users multiple ways to reach out, either through the contact form or through the contact details like phone, email, website, or physical address. This versatility ensures that no matter how a user prefers to communicate, they have easy access to the relevant information.

2. **To Encourage User Interaction:** The structure and layout of this section encourage users to interact with the website. The heading block ("Let's Talk" and "Keep In Touch") is friendly and welcoming, and the call-to-action ("Let's Chat" button) invites users to take the next step and submit their contact information.

### Flow of Interaction

1. **First Interaction (Heading Block):** The user first encounters the heading block ("Let's Talk" and "Keep In Touch"), which sets the tone for a friendly and open conversation.
2. **Form Interaction:** The user is then prompted to fill out the form, where they can enter their name, email, and message, followed by clicking the submit button.
3. **Alternative Contact Methods:** For users who prefer direct contact, the grid of contact details (phone, email, website, address) provides alternative ways to get in touch.

### Layout

- **Two-column Layout (Large Screens):** On larger screens, the layout adapts to a two-column structure, with the contact form on one side and the contact details on the other, ensuring that both elements get equal attention.
- **Stacked Layout (Small Screens):** On smaller screens, the content stacks vertically, ensuring a responsive and mobile-friendly experience.
- **Visual Hierarchy:** The headings are bold and large, immediately grabbing attention, while the form and contact details are structured below, guiding the user naturally through the section.

## 🤝 Understanding the Relationships

### 1. Parent-Child Relationships

- The footer container is the parent of two major blocks: the contact form and the contact details section. These two blocks are laid out side by side on larger screens, but they stack vertically on smaller screens.
- The contact details section itself contains a heading block, a description, and a grid of four contact information blocks (phone, email, website, address). Each of these contact information blocks contains an icon, a heading, and the contact text.

### 2. Sizing Relationships

- **Form Fields and Buttons:** The input fields and buttons have consistent heights (e.g., h-12 and sm:h-16), ensuring uniformity across the form. This creates a clean and professional look while maintaining legibility.
- **Responsive Layout:** The grid structure adapts to screen size, shifting from a two-column layout on larger screens (sm:grid-cols-2 and xl:grid-cols-2) to a single-column layout on medium screens (lg:grid-cols-1).

### 3. Color Relationships

- **Accent Color Usage:** The accent color is applied consistently to the form background, the contact detail icons, headings, and the borders of the submit button. This creates a visually cohesive design.
- **Contrast Between Form and Details:** The form inputs are set against the accent background, while the contact details are displayed with a lighter background, ensuring a clear separation between the form and the alternative contact methods.

### 4. Typographical Relationships

- **Headings and Subheadings:** The section uses clear hierarchies in the text, with the h2 subheading larger than the h6 headings. This draws attention first to the purpose of the section ("Keep In Touch"), then to the individual contact methods.
- **Consistent Font Sizing:** Font sizes increase on larger screens (e.g., lg:text-lg for the h6 headings and lg:text-3xl for the h2 subheading), ensuring that the text remains readable and visually appealing on all screen sizes.

### 5. Layout Relationships

- **Form and Contact Details Relationship:** The form and contact details are balanced equally within the layout. On large screens, the two sit side by side, allowing users to access either option immediately. On smaller screens, they stack, maintaining readability and accessibility.
- **Grid Structure for Contact Details:** The grid layout of the contact details creates visual consistency and structure, making the section easy to scan and navigate.

## 📝 Additional Notes

- **Responsive Design:** The entire section is highly responsive, ensuring that users on mobile devices and larger screens experience a well-structured and intuitive layout.
- **Accessibility Considerations:** The form inputs have clear labels and use placeholder text for clarity. The submit button is highly visible and easy to interact with due to the contrast between the border and the button text.
- **Clear Call-to-Action:** The use of large headings like "Let's Talk" and the actionable "Let's Chat" button encourage user engagement, helping drive interaction.
- **Cohesive Visual Design:** The consistent use of the accent color for icons, headings, and borders ties the design together, making it feel unified across the entire contact section.
