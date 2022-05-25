fetch("./popular.json") // Fetch the data.json file
  .then((response) => response.json()) // Parse as JSON and return the response
  .then((data) => {

    // Use the data
    const popular = data.popularThisWeek; // Get the popular array
    console.log(popular);
    let btnRight = document.getElementById('btn-right');
    let btnLeft = document.getElementById('btn-left');
    const popularImages = document.getElementById('popularImages');
    popular.forEach((item) => {
      const figure = document.createElement("figure")
      figure.classList.add('popular__image')

      const picture = document.createElement('img')
      picture.setAttribute('src', item.images.png)
      picture.setAttribute('alt', item.alt)
      picture.classList.add('pic')
      figure.appendChild(picture)

      const text = document.createElement('div')
      text.classList.add('popular__text')
      text.innerText = "Ongoing"
      figure.appendChild(text)

      const number = document.createElement('div')
      number.classList.add('popular__text--number')
      number.innerHTML = item.number
      figure.appendChild(number)

      const figcaption = document.createElement('figcaption')
      figcaption.classList.add('popular__caption')
      figure.appendChild(figcaption)

      const title = document.createElement('p')
      title.classList.add('title')
      title.innerHTML = item.name
      figure.appendChild(title)
      const likes = document.createElement('p')
      likes.classList.add('likes')
      likes.innerHTML = item.likes
      figure.appendChild(likes)
      popularImages.appendChild(figure)
    })
    

  }).catch(error => console.log(error))