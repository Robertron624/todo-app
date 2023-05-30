# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Add new todos to the list
-   Mark todos as complete
-   Delete todos from the list
-   Filter by all/active/complete todos
-   Clear all completed todos
-   Toggle light and dark mode
-   **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

-   Solution URL: [Github repository](https://github.com/Robertron624/todo-app)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Sass](https://sass-lang.com/) - CSS pre-processor
-   [vite](https://vitejs.dev/) - Build tool
-   [Zustand](https://docs.pmnd.rs/zustand/getting-started) - State management
-   [Dnd toolkit](https://docs.dndkit.com/) - Drag and drop functionality

### What I learned

With this code I learned something I was struggling with for a while, how to implement dark mode in react with the use of sass (one of my favorite CSS pre-processor). I also learned how to implement custom checkboxes in react with the use of sass. I also learned how to use Zustand for state management, which is a great and easier alternative to Redux.
Finally I learned the basics of drag and drop in react with the use of react-dnd.


To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

The code for handling the light/dark theme
```scss
@mixin themify($themes) {
    @each $theme, $map in $themes {
        .theme-#{$theme} & {
            $theme-map: () !global;
            @each $key, $submap in $map {
                $value: map-get(map-get($themes, $theme), "#{$key}");
                $theme-map: map-merge(
                    $theme-map,
                    (
                        $key: $value,
                    )
                ) !global;
            }
            @content;
            $theme-map: null !global;
        }
    }
}
@function themed($key) {
    @return map-get($theme-map, $key);
}
```

The code for handling the drag and drop functionality was a bit tricky to get right, but I managed to get it working like this:
```js
const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
        setFilteredTodos((filteredTodos) => {
            const oldIndex = filteredTodos.findIndex(
                (todo) => todo.id === active.id
            );
            const newIndex = filteredTodos.findIndex(
                (todo) => todo.id === over.id
            );
            return arrayMove(filteredTodos, oldIndex, newIndex);
        });
    }
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I want to keep developing projects that require some theme switcher for light/dark preferences, also I want to keep developing projects that require drag and drop functionality, as it's a great way to learn how to implement it in react.
I want to keep using Zustand for global state management, as it's a great and easier alternative to Redux.
Finally since this is a todo app, I want to add the database consistency to this project, since this only works on the client side.

### Useful resources

-   [A Complete Guide to Implementing Dark Mode in React](https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb) - This is a great article which helped me finally understand how to implement dark mode in react with the use of sass (one of my favorite CSS pre-processor). I'd recommend it to anyone still learning this concept.

-   [Pure CSS Custom Checkbox Style](https://moderncss.dev/pure-css-custom-checkbox-style/) - This is an amazing article which helped me finally understand how to implement custom checkboxes in react with the use of sass (one of my favorite CSS pre-processor). If you want to create custom checkboxes, give this article a read.

-   [Zustand Introduction](https://docs.pmnd.rs/zustand/getting-started/introduction) - This is the official Zustand docs, required if it's your first time working with zustand

-   [Type the onSubmit event in React (TypeScript)](https://bobbyhadz.com/blog/typescript-react-onsubmit-event-type) - This article is great for using typescript and inputs in react for correct type checking.

-   [React Dnd Kit - Drag and Drop en React](https://www.youtube.com/watch?v=swFjfjLXe3I&list=WL&index=16) - This video helped me understand how to easily implement drag and drop in react.

-   [React DnD](https://react-dnd.github.io/react-dnd/about) - This is the official react-dnd docs, required if it's your first time working with react-dnd.

## Author

-   Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
-   Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
-   Twitter - [@robertdowny](https://www.twitter.com/robertdowny)

## Acknowledgments

[Fatz Code](https://www.youtube.com/@FaztCode) and it's [React Dnd Kit - Drag and Drop en React
](https://www.youtube.com/watch?v=swFjfjLXe3I&list=WL&index=16) video helped me understand how to easily implement drag and drop in react.
