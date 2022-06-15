
const pizzas = [
    {
        id: 1,
        nombre: "Muzza",
        ingredientes: ["salsa", "queso muzzarela"],
        precio: 500,
        img: "https://www.nueva-ciudad.com.ar/advf/imagenes/editadas/5e05008a2355e_800x550.jpg"
    },
    {
        id: 2,
        nombre: "Especial",
        ingredientes: ["jamon", "queso muzzarela, morrones"],
        precio: 580,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg"
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["salsa", "queso muzzarela","tomates"],
        precio: 700,
        img: "https://www.cocinayvino.com/wp-content/uploads/2018/08/pizza-napolitana-2-e1534286138178-1200x675.jpg"
    },
    {
        id: 4,
        nombre: "4 quesos",
        ingredientes: ["salsa", "queso muzzarela","queso azul", "parmesano", "provolone"],
        precio: 900,
        img: "https://www.comedera.com/wp-content/uploads/2022/04/Pizza-cuatro-quesos-shutterstock_1514858234.jpg"
    },
    {
        id: 5,
        nombre: "hawaiana",
        ingredientes: ["salsa", "queso muzzarela", "jamon", "anana"],
        precio: 1100,
        img: "https://i.pinimg.com/originals/2d/15/00/2d15009cab2b7b82d880d6831cb45523.jpg"
    },
    {
        id: 6,
        nombre: "Fugazzetta",
        ingredientes: ["salsa", "queso muzzarela", "cebollas",],
        precio: 600,
        img: "https://cuk-it.com/wp-content/uploads/2018/10/fugazzeta-1024x576.jpeg"
    },
]

// Guardar
const pizzastring = JSON.stringify(pizzas) //JSON
localStorage.setItem("pizzalist", pizzastring); // localstorage

// Pedir
const pizzaJSON = localStorage.getItem("pizzalist") //JSON
const pizzalist = JSON.parse(pizzaJSON); //array


window.onload = function() {
    //NODOS
    const botonFiltro = document.querySelector(".btn");
    const botonEliminarFiltro = document.querySelector(".eliminar")
    const input = document.querySelector("input");
    const divContainer = document.querySelector(".container")

    botonFiltro.addEventListener("click" , () => {

        const unapizza = buscarPizza(input.value)
        console.log(unapizza);
        
        if(unapizza != "error"){
            divContainer.innerHTML = `
            <div class="card">
        <div class="card-header">
          <img
            src=${unapizza.img}
            alt=${unapizza.nombre}
          />
        </div>
        <div class="card-body">
          <h3 class="tag tag-teal">${unapizza.id} - ${unapizza.nombre}</h3>
          <h4>$${unapizza.precio}</h4>
          <p> 
            ${unapizza.ingredientes}
          </p>
        </div>
      </div>`
        }else{
            
            divContainer.innerHTML =
            `<h2 class="mjsError"> NO TENEMOS ESA PIZZA CON ID ${input.value}</h2> `
           
        }
        console.log(unapizza); 
    });

    botonEliminarFiltro.addEventListener("click" , () => {
        window.location.reload()})
}

function buscarPizza(valor) {
    const unapizza = pizzalist.find( pizza => pizza.id == valor)
    if (unapizza) {
        return unapizza
    } else {
        return "error"
    }
}
