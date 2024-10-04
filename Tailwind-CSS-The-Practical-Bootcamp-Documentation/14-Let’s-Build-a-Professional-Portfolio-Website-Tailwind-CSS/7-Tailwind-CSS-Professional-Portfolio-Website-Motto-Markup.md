# Motto Section - Markup

This HTML component presents a motivational quote that can be used as a motto on a website. It uses semantic elements like `<blockquote>` and `` to properly credit the source of the quote. The structure is clean and simple, designed to emphasize the importance and impact of the message.

## 📋 Table of Contents

1. 🌟 Component Overview
2. 🏗️ HTML Structure Breakdown
3. 🔄 Flow of the Document
4. 💡 Purpose of Each Section
5. 🧩 Starter Component Use Cases
6. 📚 Resources

## 🌟 1. Component Overview

This section is a quote block that serves as an inspiring element on the webpage. It contains:

- A quote from Martin Luther King, Jr., meant to inspire and provoke thoughtful reflection. 🌟
- Proper citation to credit the author and source of the quote, following best practices for presenting quotations in HTML. 📜🖋️

This element is typically used to emphasize an important message or motto that aligns with the site's values.

## 🏗️ 2. HTML Structure Breakdown

Here's the complete HTML code for this component:

```html
<section>
  <div>
    <blockquote
      cite="https://www.azquotes.com/author/8044-Martin_Luther_King_Jr/tag/brother"
    >
      <p>
        We've learned to fly the air like birds, we've learned to swim the seas
        like fish, and yet we haven't learned to walk the earth as brothers and
        sisters.
      </p>
    </blockquote>
    <p>— Martin Luther King, Jr., Love</p>
  </div>
</section>
```

Now, let's break this down into its core elements and explain each part in detail:

1. Section and Container:

```html
<section>
  <div></div>
</section>
```

- `<section>`: This HTML tag is used to define a thematic grouping of content, in this case, the motto section. It organizes the quote into its own block on the webpage. 📦
- `<div>`: The div container holds the blockquote and citation inside a cohesive block. The `<div>` here is a non-semantic element used to group content for layout purposes. 🚪

2. Blockquote and Citation:

```html
<blockquote
  cite="https://www.azquotes.com/author/8044-Martin_Luther_King_Jr/tag/brother"
>
  <p>
    We've learned to fly the air like birds, we've learned to swim the seas like
    fish, and yet we haven't learned to walk the earth as brothers and sisters.
  </p>
</blockquote>
```

- `<blockquote>`: This element is used to enclose the quote. The cite attribute provides a reference URL where the quote can be verified, following best practices for attributing quotations in HTML. ✨📖
- `<p>`: The actual text of the quote is inside a paragraph tag. The quote here is displayed prominently and stylistically formatted by default. 💬

3. Attribution:

```html
<p>— Martin Luther King, Jr., Love</p>
```

- Attribution Paragraph: This paragraph provides the name of the person being quoted (Martin Luther King, Jr.). The long dash (—) is a typographic convention for separating the quote from the name of the speaker. 🖋️📜
- `<cite>`: This tag is used to reference the title of the work from which the quote is taken. Here, it references Love, which is the context in which this quote was used. The ` element is essential for proper quotation attribution in HTML. 📖✨

## 🔄 3. Flow of the Document

The flow of this component is designed to guide the reader's attention to the message of the quote. Here's how it works:

1. The quote is presented immediately and prominently in a blockquote format, catching the reader's attention. 🧐💡
2. Attribution to the author follows the quote, giving credit where it's due and allowing the reader to reflect on the words of a historical figure. 🎤📜
3. The cite link (if styled) can be used to offer additional context or verification for the quote. 🔗

## 💡 4. Purpose of Each Section

- Section: Organizes the quote and its attribution into a single cohesive block. 📦
- Blockquote: Displays the quote in a visually distinct manner, adding emphasis to its content. 💬✨
- Citation and Attribution: Provides the necessary credit to the original speaker and source. This is important for ethical use of quotations on websites. 📜✔️

## 🧩 5. Starter Component Use Cases

This component is suitable for a variety of uses, including:

- Motivational sections on portfolio websites, where a strong message or quote aligns with the individual's brand. 🏆✨
- Personal websites or blogs, where inspirational quotes are used to engage readers and express personal values. 💻💬
- Educational or advocacy websites, where historical quotes help reinforce key messages or causes. 📚🎓

## 📚 6. Resources

Here are some helpful resources to better understand the elements used in this component:

1. HTML `<blockquote>` element: Learn how to properly use the `<blockquote>` element to include quotations on your webpage. [MDN Web Docs: `<blockquote>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) 📖

2. HTML `element: The` element is used to reference the title or source of a quote or creative work. [MDN Web Docs: `<cite>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite) ✏️

3. HTML `<p>` element: Learn about the `<p>` element, which is used for structuring text in paragraphs. [MDN Web Docs: `<p>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) 📝

4. HTML `<section>` element: Explore how the `<section>` element is used to group content thematically. [MDN Web Docs: `<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) 📦

These resources will help you master the key elements used in this motto section and ensure best practices are followed. 🌟
