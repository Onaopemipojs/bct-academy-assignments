# BCT Academy Assignments

This repository holds the assignments I completed while going through the BCT Academy program. The work is built around frontend development. Most of the pages and small pieces I made use HTML for structure, CSS for layout and appearance, and JavaScript when a page needs something to respond to the user. I kept everything in one place so I can open a folder, see what I wrote, and remember what the task was asking for.

BCT Academy is a training program. The assignments are how the course checks that you can actually build something, not only listen and take notes. Each task had a clear target. Some asked for a simple page with headings, paragraphs, lists, and links. Some asked for a layout that still looks right when the window gets smaller. Some asked for a button, a form, or a small interaction that only works if the JavaScript is written correctly. I treated each one as practice, not as a one-time file I would never open again.

## Purpose

The purpose of this repository is to keep my BCT Academy assignments together in a form I can return to. School work is easy to lose when it lives in different folders, different computers, or a chat thread. Putting it on GitHub means the files stay in order, the history stays visible, and I can open the repo from anywhere.

A second purpose is progress. When I look at an early assignment and then look at a later one, the difference is obvious. The early pages are plain. The later ones have better spacing, clearer class names, and less messy CSS. That comparison is useful. It shows what I already know how to do and what still feels slow.

A third purpose is practice with version control. Pushing the work forces me to name files properly, keep folders clean, and write a short note about what changed. That habit matters more than any single assignment. A page can be rebuilt. A messy repo is harder to fix once it has grown.

A fourth purpose is honesty about the work. These files are student assignments. They are not a finished product and they are not a company portfolio. They show what I was asked to do and how I tried to do it. If something is simple, it is simple because the task was simple. If something is rough, it is because I was still learning that part.

## What the assignments cover

The course starts with HTML. That sounds basic, and it is, but it is also where a lot of pages go wrong. A heading should be a heading. A list should be a list. A button should be a button, not a div that looks like one. I spent time on document structure, semantic tags, forms, images with useful alt text, and links that go where they are supposed to go. A page that is only divs stacked on top of each other can look fine and still be hard to read, hard to style, and hard to use with a keyboard. I tried to avoid that.

CSS is the largest part of the work. The early tasks were about colors, fonts, margins, and padding. Later tasks moved into layout. I used flexbox for rows and columns that need to line up, and I used grid when a page needed a clearer structure with a header, a main area, and a footer. I also worked on making layouts respond to the screen. A page that only looks right on one laptop width is not finished. Media queries, max-width on images, and flexible units show up in the later assignments for that reason.

I paid attention to small details that are easy to skip. Consistent spacing. Text that does not sit against the edge of the screen. Buttons that look clickable. Focus styles that are still visible when you tab through a form. Hover states that do not hide the text. None of that is advanced, but it is the difference between a page that feels thrown together and a page that feels intentional.

JavaScript comes in once the page needs behavior. The assignments in this area are small on purpose. Show and hide a section. Check that a form field is not empty before it submits. Update text when a button is clicked. Filter a short list. Change a class so CSS can handle the visual change instead of setting styles directly in the script. I kept the scripts in separate files when the task allowed it, and I tried to name functions after what they do.

I also learned, slowly, to debug without guessing. If a click does nothing, the problem is often a wrong selector, a script that runs before the HTML exists, or a function that is never called. The browser console became part of the workflow. Reading the error is faster than changing random lines and hoping the page updates.

## How I approached the work

I did not try to make every assignment look like a product from a design studio. The goal was to meet the brief and understand the code I submitted. When a task said to build a landing section, I built a landing section. When it said to validate a form, I validated the form. Extra decoration that the brief did not ask for usually made the CSS harder to follow, so I left it out.

I wrote the HTML first. Getting the structure right makes the CSS easier. If the markup is a mess, the stylesheet becomes a list of overrides. After the structure was in place, I styled the page from the outside in: page background, layout, then type, then components like cards, nav bars, and buttons. JavaScript came last, after the page already made sense without it. That order saved time. A script cannot fix a layout that was never planned.

Naming mattered more than I expected. Class names like `box1` and `div2` are useless a week later. Names like `site-header`, `card`, `card-title`, and `nav-link` are easier to search and easier to reuse. I was not perfectly consistent at the start. Later assignments are cleaner because I got tired of hunting through my own CSS.

I also got more careful about repetition. If three cards share the same spacing, they should share a class. Copying the same rules three times feels faster in the moment and becomes annoying the first time the spacing needs to change. I still repeat myself sometimes. When I notice it, I go back and pull the shared rules into one place.

Comments are short. I do not comment obvious lines. I comment the part that would confuse me later, such as why a margin is negative or why a script waits for the page to load. The assignments are small enough that a long comment block usually means the code itself should be simpler.

## What I learned

The main thing I learned is that frontend work is mostly decisions about structure. HTML decides what the page is. CSS decides how it is arranged and how it looks. JavaScript decides what changes after the page has loaded. When those three stay in their roles, the assignment is easier to finish and easier to fix.

I got more comfortable reading my own code after a few days away from it. That only happened because the files are in this repo and not scattered. Opening an old assignment and understanding it without a struggle is a good sign. Opening it and having no idea what a class is for is a sign I need to name things better next time.

I also learned that “it works on my screen” is not the same as done. I resize the browser. I tab through the page. I submit the form with empty fields. I check that images do not overflow. These checks are basic, and they catch most of the problems in a student assignment.

There are still gaps. I am faster with layout than I was, but I still slow down when a design needs overlapping elements or a layout that changes in more than one breakpoint. My JavaScript is fine for small interactions and weaker once a page has several pieces of state that all need to stay in sync. I would rather say that plainly than pretend every assignment is equally strong.

## Why this repo exists in this form

This repository is not a tutorial and it is not a template for other people to copy as a finished site. It is a record of coursework. The folders are the assignments. The code is what I submitted or revised while learning. The README is here so someone opening the repo, including future me, can see what the work is and what it is not.

I will keep adding assignments as the program continues. Older folders stay as they are, apart from small fixes if I notice a broken link or a file that will not open. I do not rewrite early work to make it look like later work. The point of keeping it is the record, not a perfect highlight reel.

If you are looking through this repo, start with any assignment folder and open the HTML file in a browser. The page should show what the task produced. The CSS and JavaScript files next to it are the parts that control layout and behavior. That is the whole project. Nothing here depends on a build step or a framework.

## Skills

The skills these assignments are built on are HTML, CSS, and JavaScript. HTML is the structure of every page. CSS is the layout, spacing, color, and responsive behavior. JavaScript is the interaction: clicks, form checks, and small updates to the page after it loads.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Author

ONAOPEMIPO
