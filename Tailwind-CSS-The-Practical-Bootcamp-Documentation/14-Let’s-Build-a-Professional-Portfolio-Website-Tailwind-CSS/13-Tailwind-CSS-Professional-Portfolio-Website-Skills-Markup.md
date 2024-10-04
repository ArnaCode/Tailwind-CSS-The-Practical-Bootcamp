# Skills Section - Markup

This HTML component presents a skills section, commonly used on portfolio websites to highlight a professional's expertise in various fields. It includes headings, paragraphs, and skill bars to visually showcase proficiency in different areas, along with a related image. 📊📸

## 📋 Table of Contents

1. 🌟 Component Overview
2. 🏗️ HTML Structure Breakdown
3. 🔄 Flow of the Document
4. 💡 Purpose of Each Section
5. 🧩 Starter Component Use Cases
6. 📚 Resources

## 🌟 1. Component Overview

This Skills Section outlines the photographer's professional competencies using a combination of text and visual indicators (skill percentages). The section includes:

- A headline and subheading introducing the skill set. 🎓✨
- Two paragraphs that give a brief description of the professional's background. 📜📝
- Skill indicators represented as text and percentages, providing a visual representation of expertise in areas like Photography, Design Thinking, Videography, and Social Innovation. 📊🌟
- A visual image to complement the skill content.

## 🏗️ 2. HTML Structure Breakdown

Here is the complete HTML code for this component:

```html
<section>
  <div>
    <div>
      <h6>My Skills</h6>
      <h2>I am experienced in the following fields</h2>
    </div>

    <div>
      <p>Lorem ipsum dolor recusandae modi odio, a voluptatem Eos, commodi!</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        doloremque nesciunt
      </p>
    </div>

    <div>
      <div>
        <h5>Photography</h5>
        <div>95%</div>
      </div>

      <div>
        <h5>Design Thinking</h5>
        <div>90%</div>
      </div>

      <div>
        <h5>Videography</h5>
        <div>80%</div>
      </div>

      <div>
        <h5>Social Innovation</h5>
        <div>85%</div>
      </div>
    </div>
  </div>

  <figure>
    <img src="images/skills.jpg" alt="" />
  </figure>
</section>
```

Let's break it down into its core elements:

1. Section and Containers:

```html
<section>
  <div></div>
</section>
```

- `<section>`: This element wraps the skills content into a thematic block. It ensures that this section is clearly distinguished from other parts of the webpage. 📦
- `<div>`: Nested divs help group the different subsections, such as the headings, descriptions, and skills. These divs allow flexibility for layout and styling. 💻

2. Heading and Subheading:

```html
<div>
  <h6>My Skills</h6>
  <h2>I am experienced in the following fields</h2>
</div>
```

- `<h6>` and `<h2>`: The smaller heading `<h6>` introduces the skills section ("My Skills"), while the larger heading `<h2>` provides a more descriptive subtitle, explaining what the section is about ("I am experienced in the following fields"). These help structure the section and introduce its purpose. 🏆🎯

3. Skill Descriptions:

```html
<div>
  <p>Lorem ipsum dolor recusandae modi odio, a voluptatem Eos, commodi!</p>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
    doloremque nesciunt
  </p>
</div>
```

- `<p>`: These paragraphs provide a short summary of the photographer's expertise. They can be customized to reflect real-world experience and background. 📝📚
- Purpose: This section helps introduce and explain the photographer's proficiency before diving into specific skills. ✨

4. Skill List with Proficiency:

```html
<div>
  <div>
    <h5>Photography</h5>
    <div>95%</div>
  </div>

  <div>
    <h5>Design Thinking</h5>
    <div>90%</div>
  </div>

  <div>
    <h5>Videography</h5>
    <div>80%</div>
  </div>

  <div>
    <h5>Social Innovation</h5>
    <div>85%</div>
  </div>
</div>
```

- `<h5>`: Each skill is listed with an `<h5>` heading to indicate the name of the skill (e.g., "Photography," "Design Thinking"). These headings make it easy to identify each area of expertise. 🏅📊
- `<div>`: The percentage within the div provides a visual indicator of proficiency for each skill, giving users a quick understanding of the photographer's strengths. 📈

5. Skill Image:

```html
<figure>
  <img src="images/skills.jpg" alt="" />
</figure>
```

- `<figure>` and `<img>`: This image visually supports the skills section. The alt attribute ensures accessibility by providing alternative text describing the image. 📸👁️
- Purpose: The image helps reinforce the skills theme, making the section more engaging and visually appealing. 🖼️✨

## 🔄 3. Flow of the Document

The flow of this section guides the user naturally through the photographer's skill set:

1. Headings: The section begins with a headline ("My Skills") and a subheading explaining the types of skills. 🎯
2. Skill Descriptions: The paragraphs introduce the photographer's background and set the stage for the specific skills below. 📝
3. Skill List: The key skills are then listed, each with a heading and a percentage representing proficiency. 📊🌟
4. Image: Finally, a visual element complements the content, reinforcing the theme of the skills section. 📸👁️

## 💡 4. Purpose of Each Section

1. Headlines and Descriptions: These introduce the skills and provide a brief overview of the photographer's expertise. ✨📖
2. Skill List: The percentages allow visitors to quickly understand the photographer's strengths across various fields. 📊🌟
3. Image: Visually supports the content, helping to keep the section dynamic and engaging. 📸👁️

## 🧩 5. Starter Component Use Cases

This Skills Section can be used in several contexts, including:

- Portfolio websites to highlight the photographer's key skills and abilities. 📸🌟
- Freelancer websites to showcase strengths and specializations in various areas, helping potential clients evaluate expertise. 💼📊
- Creative agency websites to display team members' competencies in a clear and professional way. 👥🎨

## 📚 6. Resources

Here are some useful resources to better understand the elements used in this component:

1. HTML `<section>` element: Explore how the `<section>` element is used to group thematic content. [MDN Web Docs: `<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) 📦

2. HTML `<div>` element: Learn about the `<div>` element and how it can be used to structure content on a webpage. [MDN Web Docs: `<div>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) 📦

3. HTML Headings (`<h6>`, `<h5>`, `<h2>`): Learn how to structure headings to create a clear content hierarchy. [MDN Web Docs: Headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) 🔤

4. HTML `<p>` element: Learn about the `<p>` element, which is used for structuring text in paragraphs. [MDN Web Docs: `<p>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) 📝

5. HTML `<figure>` and `<img>` elements: Learn more about using images and figures in your web content. [MDN Web Docs: `<figure>` and `<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) 🖼️

These resources will help you better understand and implement this Skills Section - Markup. 🚀📚
