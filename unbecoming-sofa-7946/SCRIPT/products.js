
let main = document.getElementById("products")
let localData = JSON.parse(localStorage.getItem("cart-data")) || [];
let sort = document.getElementById("Sort");
let url = `https://63c7a5645c0760f69abb1675.mockapi.io/products`;
let linkDesc = `https://63c7a5645c0760f69abb1675.mockapi.io/products?sortBy=price&order=desc`;
let linkAsce = `https://63c7a5645c0760f69abb1675.mockapi.io/products?sortBy=price&order=asc`;
// console.log(sort.value)
// let fetchdata = [];




window.addEventListener("load", () => {
    // getData(url)
    // Datafetch(url)
    fetchData(url)
    // console.log("hello")
})



function Datafetch(url) {
    main.innerText = "";
    fetch(url)
        .then((res) => res.json())
        .then(data => {
            let coffee = data;
            console.log(coffee)
            fetchdata = coffee

            display(coffee)


        }).catch((err)=>{
            console.log(err)
        })
}


function clearContainer() {
    main.innerHTML = "";
  }
  

 async function fetchData(url) {
    clearContainer(); 
  

    try {
        
        const response = await fetch(url);
        const data = await response.json()

        data.forEach(el => {
            // Create a new card element
            const card = document.createElement("div");
            card.className = "card";
  
             // Create and append the image element
          const img = document.createElement("img");
          img.src = el.image;
          card.appendChild(img);
        
          // Create and append the Name element
          const name = document.createElement("p");
          name.innerText = el.name;
          card.appendChild(name);
        
          // Create and append the rating element
          const rating = document.createElement("p");
          rating.innerText = el.rating;
          card.appendChild(rating);
        
          // Create and append the price element
          const price = document.createElement("p");
          price.innerText = el.price;
          card.appendChild(price);
        
          // Create and append the size element
          const size = document.createElement("p");
          size.innerText = el.size;
          card.appendChild(size);
        
          // Create and append the color element
          const color = document.createElement("p");
          color.innerText = el.color;
          card.appendChild(color);
        
          // Create and append the "Quick Look" button
          const add = document.createElement("button");
          add.innerText = "Quick Look";
          add.className = "btn";
          add.addEventListener("click", () => {
            console.log(el);
            localData.push(el);
            localStorage.setItem("cart-data", JSON.stringify(localData));
            alert("Product Added to the Cart");
          });
          card.appendChild(add);
    
          
            main.appendChild(card);
          });

    } catch (error) {
        console.error('Error:', error);
    }

   
  }




// sort.addEventListener("change", () => {
//     let value = sort.value;
//     console.log(value)

//     if (value == "Newest") {
//         // getData(ascUrl)
//         Datafetch(linkAsce)
//         console.log()


//     } else if (value == "HighToLow") {
//         // getData(DescUrl)
//         Datafetch(linkDesc)


//     } else if (value == "LowToHigh") {
//         // getData(ascUrl)
//         Datafetch(linkAsce)

//     } else if (value == "revelence") {
//         // getData(DescUrl)
//         Datafetch(linkDesc)
//     }



// })







function display(data) {
  
    data.forEach(el => {
        // Create a new card element
        const card = document.createElement("div");
        card.className = "card"; 
      
        // Create and append the image element
        const img = document.createElement("img");
        img.src = el.image;
        card.appendChild(img);
      
        // Create and append the Name element
        const name = document.createElement("p");
        name.innerText = el.name;
        card.appendChild(name);
      
        // Create and append the rating element
        const rating = document.createElement("p");
        rating.innerText = el.rating;
        card.appendChild(rating);
      
        // Create and append the price element
        const price = document.createElement("p");
        price.innerText = el.price;
        card.appendChild(price);
      
        // Create and append the size element
        const size = document.createElement("p");
        size.innerText = el.size;
        card.appendChild(size);
      
        // Create and append the color element
        const color = document.createElement("p");
        color.innerText = el.color;
        card.appendChild(color);
      
        // Create and append the "Quick Look" button
        const add = document.createElement("button");
        add.innerText = "Quick Look";
        add.className = "btn";
        add.addEventListener("click", () => {
          console.log(el);
          localData.push(el);
          localStorage.setItem("cart-data", JSON.stringify(localData));
          alert("Product Added to the Cart");
        });
        card.appendChild(add);
      
        // Append the card to the container
        main.append(card)
      });
  
}