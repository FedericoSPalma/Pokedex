const container = document.querySelector(".container");
const boton = document.querySelector(".boton-next");
const moreInfoBtn = document.querySelectorAll(".moreInfo");


idUltimoPokemon=0;

function createCard(data){
    const card = document.createElement("div");
    card.classList.add("card-data");

    const sprite = document.createElement("img");
    sprite.src = data.sprites.front_default;

    const div = document.createElement("div");
    const createBtn = document.createElement("button");
  //  div.innerHTML="TESTEANDO"
   // createBtn.type = 'button'; 
    createBtn.classList.add("moreInfo");
    createBtn.innerText="saber mas";
    card.appendChild(div);
    div.appendChild(createBtn);

//  const id = document.createElement("p");
// id.textContent = data.id

    const name = document.createElement("p");
    name.classList.add("name")
    name.textContent = data.name


    card.appendChild(sprite)
    
//  card.appendChild(id)
    card.appendChild(name);
    container.appendChild(card)

}

function pokemonPorId(id){
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(res=>res.json())
.then(data=>{createCard(data)}
)}

function generadorId(){
    for (i=1;i<=20;i++){
        pokemonPorId(i)
    }
    idUltimoPokemon=i-1;
}

function nextPokemons(){    
    for (x=0;x<20;x++){
        idUltimoPokemon++
        pokemonPorId(idUltimoPokemon);
        console.log(idUltimoPokemon)
    }
    

}

function asd(){
    console.log("holaaaaa");
}


function testing(){
fetch("https://pokeapi.co/api/v2/pokemon/35")
.then(res=>res.json())
.then (data=>console.log(data))
}

testing();

generadorId();
boton.addEventListener("click", nextPokemons);


document.getElementsByClassName("moreInfo").addEventListener("click", (event)=>{
    console.log("test")
});







