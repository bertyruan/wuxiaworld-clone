
import { $loadFile } from '../../shared/scripts/loadFile.js';

$loadFile('./footer.html', import.meta.url).then(console.log);
$loadFile('./footer.css', import.meta.url).then(console.log);