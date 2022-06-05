# NOTE
`
    This is only for educational purposes
`

# Introduction
`
The script has to be executed into the console of the browser. The script works for scraping the novels info only.
`

## Requirement
1. Make sure all the data is loaded on the page before executing the script
2. The classes of the element which houses the data has to be found from the html source


## Script
```js
let items = document.querySelectorAll(".relative.flex.min-h-full.flex-1.flex-col.items-start.justify-start");
let data = [];
items.forEach( (item, index) => {
  let tags = items[index].childNodes[3].childNodes
  let tag = []
  for( let i=0; i<tags.length; i++) {
    tag.push(tags[i].text)
  }
  data.push({
    title: items[index].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent,
    rating: items[index].childNodes[1].childNodes[1].textContent,
    desc: items[index].childNodes[2].childNodes[0].childNodes[0].textContent,
    tags: tag
  })
})
```

## Copying the data into the clipboard
`
Run the following code right after the above code. Also make sure you click on the document in a place which wont trigger anything like a blank place.
`
```js
setTimeout(() => navigator.clipboard.writeText(JSON.stringify(data)), 3000);
```
