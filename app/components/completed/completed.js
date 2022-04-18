import { $loadFile } from 'scripts/loadFile.js';

const html = await $loadFile('./completed.html', import.meta.url);
const css = await $loadFile('./completed.css', import.meta.url);
console.log(html);
console.log(css);