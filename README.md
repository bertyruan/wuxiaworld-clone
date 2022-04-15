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

## How to import html and css files
```
import { $loadFile } from 'scripts/loadFile.js';

const html = await $loadFile('./footer.html', import.meta.url);
const css = await $loadFile('./footer.css', import.meta.url);
```

## How to run the server
1. `cd server`
2. `npx tsc`
3. `node dist/app.js`

## Code Style
`npx prettier --write .`