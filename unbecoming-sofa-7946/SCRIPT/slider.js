let main = document.getElementById("slider")

let url = "https://63c7a5645c0760f69abb1675.mockapi.io/products?";
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        displayProducts(data)
    })


function displayProducts(data) {
    main.innerHtml = null;
    data.forEach(el => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML =
            `
        <img src=${el.image} alt="">
        <p>${el.name}</p>
        
        <p>Price:- $${el.price}</p>
        
        `

        main.append(card)
    })
}