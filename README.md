# [wuxiaworld.com](wuxiaworld.com) clone - group project

## CSS style guide

1. We will be using utility class first 
2. We will be using the BEM naming convention

### Utility class naming convension 

```css
.[property-name]-[value-name] {
    property-name: value-name;
}
```

## How to create a component

1. Navigate to `app/components/demo`
2. Copy and paste the folder in the same directory `app/components`
3. Rename `demo` into your own component
4. add the following html code into `index.html`
```
<script 
    type="module" 
    src="/app/components/<your-component-name>/<your-component-name>.js">
</script>
```
5. Add the html tag `<your-component-name></your-component-name>` into `index.html`

And you are good to go! You can now add your html and css code 

## How to run the server

1. `cd server`
2. `npx tsc`
3. `node dist/app.js`

## Code Style

`npx prettier --write app`
