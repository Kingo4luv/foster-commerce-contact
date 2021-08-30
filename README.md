# Foster Commerce Contact

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## CRITERIA STATUS

### User interface and behavior

- A single webpage renders our Freeform Contact Form (the one with the handle of contact) using Vue components. ✅
- The form gets submitted to the Craft site if all required fields are complete ✅
- The user gets a meaningful indication when the form has submitted successfully.
- The page does not reload when the form is submitted.  ✅
- The form shows meaningful (and accessible) errors if a required field is missing. ✅
- If we add, remove, reorder, or change form fields from the Craft site, the form updates automatically, ✅


### Code standards

- Feel free to use a Vue component library, but keep performance, overhead, and naming conflicts in mind ✅
- If you use any Vue 3, it must be fully backwards compatible with Vue 2. ✅
- No jQuery.  ✅
- CSS: Please use Tailwind if you’re familiar with it! Otherwise, use whatever CSS or framework you’d like ✅


### We expect Vue components to be:

- Reused and Reusable (if it already exists, don’t create it again. Component should able to stand alone, be reused in another context, be copied to another project - in most cases) ✅
- Responsive (Layout flows smoothly through breakpoints) ✅
- Semantic (use the most relevant HTML5 elements; avoid divs and spans unless needed)  ✅
- Accessible (especially think about keyboard and voice interactions) ✅
- Optimized for performance, as much as you can (when applicable) ✅
- Content-flexible  ✅
- Conforming to the Vue style guide.  ✅
- Named according to the Vue Style Guide guidelines.  ✅
- Documented with JSdoc syntax (component introduction, prop definitions, method & computed property definitions, links to sources)  ✅
