
const shoes=[
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/1.jpg"
    },

   
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/3.jpg"
    }
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/4.jpg"
    }
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/5.jpg"
    }
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/6.jpg"
    }
    ,
   
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/8.jpg"
    }
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/9.jpg"
    }
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/10.jpg"
    }
    
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/11.jpg"
    }
    ,
    {
         name: "Yeezy Slides",
    price: "RON 190.00",
    image: "../adidas/poze_slides/12.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/13.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/14.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/15.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/16.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/17.jpg"
    },
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/18.jpg"
    },
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/19.jpg"
    },
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/20.jpg"
    },
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/21.jpg"
    },
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/22.jpg"
    },
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/23.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/24.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/25.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/26.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/27.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/28.jpg"
    }
    ,
    {
         name: "Yeezy Foam Runners",
    price: "RON 190.00",
    image: "../adidas/poze_slides/29.jpg"
    }


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
















