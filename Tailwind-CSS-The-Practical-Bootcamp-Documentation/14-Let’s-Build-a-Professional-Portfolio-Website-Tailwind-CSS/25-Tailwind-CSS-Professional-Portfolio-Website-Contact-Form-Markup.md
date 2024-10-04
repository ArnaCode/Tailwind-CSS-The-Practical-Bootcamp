# Contact Form Section - Markup

This HTML component represents a Contact Form Section, typically placed in the footer of a website to allow users to easily get in touch. It includes a form for submitting messages, contact details with icons, and an accompanying image, making the section both functional and visually engaging. 📝📧

## 📋 Table of Contents

1. 🌟 Component Overview
2. 🏗️ HTML Structure Breakdown
3. 🔄 Flow of the Document
4. 💡 Purpose of Each Section
5. 🧩 Starter Component Use Cases
6. 📚 Resources

## 🌟 1. Component Overview

This Contact Form Section is designed to allow users to submit messages directly through the website while also providing key contact information. It includes:

- A contact form where users can enter their name, email, and message. 💬📝
- Contact details such as phone number, email address, website, and physical address. 📞📧
- Visual elements such as images and icons that enhance the layout and improve user experience. 🖼️✨

## 🏗️ 2. HTML Structure Breakdown

Here's the complete HTML code for this component:

```html
<footer>
  <div>
    <figure>
      <img src="images/form.jpg" alt="" />
    </figure>

    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <input type="submit" value="Submit" />
    </form>
  </div>

  <div>
    <div>
      <h6>let's talk</h6>
      <h2>Keep In Touch</h2>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
      eveniet, doloribus impedit fuga eum accusamus Lorem
    </p>

    <div>
      <div>
        <figure>
          <img src="images/contact-icon-1.png" alt="" />
        </figure>
        <h6>Phone Number</h6>
        <p>123-234-1234</p>
      </div>

      <div>
        <figure>
          <img src="images/contact-icon-2.png" alt="" />
        </figure>
        <h6>Email address</h6>
        <p>cool@cool.com</p>
      </div>

      <div>
        <figure>
          <img src="images/contact-icon-3.png" alt="" />
        </figure>
        <h6>Websites</h6>
        <p>www.cool.com</p>
      </div>

      <div>
        <figure>
          <img src="images/contact-icon-4.png" alt="" />
        </figure>
        <h6>Address</h6>
        <p>177A Bleecker Street, NY</p>
      </div>
    </div>
  </div>
</footer>
```

Let's break down each part of this section:

1. Footer and Main Containers:

```html
<footer>
  <div></div>
</footer>
```

- `<footer>`: This tag wraps the entire contact form and details section into a footer block, which is typically used at the bottom of a webpage. 📦
- `<div>`: These div containers help organize the form and contact details, keeping the layout structured and easy to style. 💻

2. Contact Form and Image:

```html
<figure>
  <img src="images/form.jpg" alt="" />
</figure>

<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <textarea placeholder="Message"></textarea>
  <input type="submit" value="Submit" />
</form>
```

- `<figure>` and `<img>`: This figure element includes an image to accompany the form, visually enhancing the layout. The alt attribute provides accessibility by describing the image. 📸👁️
- `<form>`: The form contains input fields for users to enter their name, email, and message. An input button labeled "Submit" allows users to send the form. 📝💬
- Purpose: This section enables users to quickly and easily submit messages directly through the website, making communication convenient. 📧✨

3. Contact Headings and Description:

```html
<div>
  <h6>let's talk</h6>
  <h2>Keep In Touch</h2>
</div>

<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis
  eveniet, doloribus impedit fuga eum accusamus Lorem
</p>
```

- `<h6>` and `<h2>`: These headings introduce the contact section, inviting users to stay in touch. The `<h6>` serves as a smaller title ("let's talk"), while `<h2>` provides the main focus ("Keep In Touch"). 📞✨
- `<p>`: This paragraph briefly describes the importance of communication. It is customizable and can reflect the brand's personality or tone. 📖📝
- Purpose: These elements set the tone for the contact section, encouraging visitors to engage and start a conversation. ✨

4. Contact Details with Icons:

```html
<div>
  <figure>
    <img src="images/contact-icon-1.png" alt="" />
  </figure>
  <h6>Phone Number</h6>
  <p>123-234-1234</p>
</div>

<div>
  <figure>
    <img src="images/contact-icon-2.png" alt="" />
  </figure>
  <h6>Email address</h6>
  <p>cool@cool.com</p>
</div>

<div>
  <figure>
    <img src="images/contact-icon-3.png" alt="" />
  </figure>
  <h6>Websites</h6>
  <p>www.cool.com</p>
</div>

<div>
  <figure>
    <img src="images/contact-icon-4.png" alt="" />
  </figure>
  <h6>Address</h6>
  <p>177A Bleecker Street, NY</p>
</div>
```

- `<figure>` and `<img>`: Each contact detail is accompanied by an icon image, providing a visual representation of the type of contact information (phone, email, website, address). The alt attribute ensures accessibility. 📸👁️
- `<h6>` and `<p>`: These elements display the contact information itself, with headings for each type of contact (e.g., "Phone Number," "Email address") and paragraphs for the actual details (e.g., phone number, email address). 📞💬
- Purpose: These sections provide clear, accessible contact information in a visually organized format, making it easy for users to find what they need. 🖼️✨

## 🔄 3. Flow of the Document

This Contact Form Section guides users to either fill out the contact form or access key contact details easily:

1. Headings and descriptions introduce the section, encouraging visitors to keep in touch. 🏆🎯
2. The contact form offers a quick and simple way to send a message directly through the website. 📜✨
3. Icons and contact details provide a visual and clear display of essential contact information (phone, email, website, address). 📞👁️

## 💡 4. Purpose of Each Section

1. Contact Form: The form allows users to submit their information and message directly through the site, making communication simple and effective. 📝📧
2. Contact Details with Icons: This section provides easy-to-access contact details (phone, email, address, etc.) in an organized, visually appealing format. 📞📜
3. Visual Elements: Images and icons are used throughout to enhance the user experience and improve readability. 🖼️🌟

## 🧩 5. Starter Component Use Cases

This Contact Form Section is versatile and can be used in various scenarios, including:

- Portfolio websites to allow clients to send inquiries or requests directly to the photographer. 📸📧
- Freelancer websites where easy access to contact details and forms is crucial for client engagement. 💼📞
- Agency websites to streamline communication by providing both contact forms and essential contact information. 🏢📝

## 📚 6. Resources

Here are some helpful resources to better understand the elements used in this contact form component:

1. HTML `<form>` element: Learn how to structure and use forms in HTML. [MDN Web Docs: `<form>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) 📝

2. HTML `<input>` and `<textarea>` elements: Discover how to use input fields and text areas in forms. [MDN Web Docs: `<input>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | [MDN Web Docs: `<textarea>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 🔤

3. HTML Headings (`<h6>`, `<h2>`): Learn how to structure headings to create a clear content hierarchy. [MDN Web Docs: Headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) 🔤

4. HTML `<figure>` and `<img>` elements: Learn more about using images and figures in your web content. [MDN Web Docs: `<figure>` and `<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) 🖼️

These resources will help you better understand and implement this Contact Form Section - Markup. 🚀📚
