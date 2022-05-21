fetch("./popular.json") // Fetch the data.json file
  .then((response) => response.json()) // Parse as JSON and return the response
  .then((data) => {

    // Use the data
    let popular = data.popularThisWeek; // Get the popular array
    console.log(popular);
    let btnRight = document.getElementById('btn-right');
    let btnLeft = document.getElementById('btn-left');
    popularImages = document.getElementById('popularImages');
    
    
    btnRight.addEventListener('click', (e) => {
      console.log(e);
      let number = document.getElementById("number"); // Get the number element from the HTML file 
      number.innerHTML = popular.number;
      console.log(number);
      let likes = document.getElementById("likes"); // Get the likes  from the HTML file
      likes.innerHTML = popular.likes; // Set the likes
     // console.log(likes);
      let images = document.getElementById("images"); // Get the image element from the HTML file
      images.src = popular.images.png; // Set the image element in HTML file to the image of the popular book
      console.log(images);

      let name = document.getElementById("name"); // Get the name element from the HTML file
      name.innerHTML = popular.name; // Set the name element in HTML file to the bio of the popular book
      ///console.log(name);
      btnLeft.addEventListener('click', (e) => {
        console.log(e);
      })   
          .catch ((error) => console.log(error)); // If there is an error, log it to the console
        }) })
