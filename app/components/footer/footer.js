
import { $loadFile } from '../../shared/scripts/loadFile.js';


const html = await $loadFile('./footer.html', import.meta.url);
const css = await $loadFile('./footer.css', import.meta.url);
console.log(html);
console.log(css);