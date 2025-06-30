// Lista modelelor
const shoes = [
  {
    image: "../adidas/poze_lista_adidas/samba.jpg",
    name: "Samba White",
    price: "RON 290.00"
  },
  {
    image: "../adidas/poze_lista_adidas/samba_black.jpg",
    name: "Samba Black",
    price: "RON 290.00"
  },
  {
    image: "../adidas/poze_lista_adidas/samba_white_gray.jpg",
    name: "Samba White Gray",
    price: "RON 290.00"
  }
  ,
  {
    image: "../adidas/poze_lista_adidas/samba_leopard_red.jpg",
    name: "Samba Leopard Red",
    price: "RON 340.00"
  },
  {
    image: "../adidas/poze_lista_adidas/samba_leopard_green.jpg",
    name: "Samba Leopard Green",
    price: "RON 340.00"
  },
  {
    image: "../adidas/poze_lista_adidas/samba_black_cream.jpg",
    name: "Samba Black Cream",
    price: "RON 290.00"
  },
  {
    image: "../adidas/poze_lista_adidas/samba_black_white_cream.jpg",
    name: "Samba Black White Cream",
    price: "RON 290.00"
  },
  {
    image: "../adidas/poze_lista_adidas/samba_brazil.jpg",
    name: "Samba Brazil",
    price: "RON 340.00"
  },{
    image: "../adidas/poze_lista_adidas/samba_brazil_white.jpg",
    name: "Samba White Brazil",
    price: "RON 340.00"
  },{
    image: "../adidas/poze_lista_adidas/samba_brazil_blue.jpg",
    name: "Samba Blue Brazil",
    price: "RON 340.00"
  },{
    image: "../adidas/poze_lista_adidas/samba_cream_violet.jpg",
    name: "Samba Cream Violet",
    price: "RON 340.00"
  },{
    image: "../adidas/poze_lista_adidas/samba_dark_green.jpg",
    name: "Samba Dark Green",
    price: "RON 290.00"
  },{
    image: "../adidas/poze_lista_adidas/samba_green.jpg",
    name: "Samba Green",
    price: "RON 290.00"
  },{
    image: "../adidas/poze_lista_adidas/samba_oreo_black.jpg",
    name: "Samba Oreo Black",
    price: "RON 340.00"
  },
  ,{
    image: "../adidas/poze_lista_adidas/samba_oreo_white.jpg",
    name: "Samba Oreo White",
    price: "RON 340.00"
  },
  ,{
    image: "../adidas/poze_lista_adidas/samba_tommy.jpg",
    name: "Samba Tommy",
    price: "RON 290.00"
  },
  ,{
    image: "../adidas/poze_lista_adidas/samba_violet.jpg",
    name: "Samba Violet",
    price: "RON 290.00"
  },
  


  // adaugă câte vrei...
];

// Funcție pentru schimbarea modelului
function updateDisplay(index) {
  const model = shoes[index];
  document.getElementById('displayedImage').src = model.image;
  document.getElementById('modelName').textContent = model.name;
  document.getElementById('price').textContent = model.price;
}

// Generează thumbnail-urile automat
const container = document.getElementById('thumbnailsContainer');
shoes.forEach((shoe, index) => {
  const img = document.createElement('img');
  img.src = shoe.image;
  img.alt = shoe.name;
  img.onclick = () => updateDisplay(index);
  container.appendChild(img);
});
