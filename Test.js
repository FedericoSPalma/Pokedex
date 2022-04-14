window.onload = () => {
    let endPoint = "https://pokeapi.co/api/v2/pokemon/"
    randomFunction();
    document.getElementById("btnNext").addEventListener("click",(event)=>{
        event.preventDefault();
        document.getElementById("pokemonesCtm").innerHTML = '';
        randomFunction();
    })
    function randomFunction(){
        fetch(endPoint)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            endPoint = data.next
            data.results.forEach(function(pokemon){
                let id = pokemon.url.split("/")[6];
                let cardPokemon = `
               <div class ="col-3">
                <div class="card img-fluid">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${pokemon.name}</h5>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    <a href="#" class="btn btn-primary"  id="weas${id}" data-toggle="modal" data-target="#ventanaModal"   >Go somewhere</a>
                </div>
                </div>
               </div>
                `
                document.getElementById("pokemonesCtm").insertAdjacentHTML("beforeend",cardPokemon);
                document.getElementById(`weas${id}`).addEventListener("click",()=>{
                    endPoint2 =`https://pokeapi.co/api/v2/pokemon/${id}`
                    fetch(endPoint2)
                    .then(res=>res.json())
                    .then(function(pokemon){
                        document.getElementById("modal-titulo").innerHTML=`${pokemon.name}`
                        document.getElementById("p1").innerHTML=`Pokemon Tipo: `
                        types = pokemon.types
                        for (tipo in types){                         
                            document.getElementById("p1").innerHTML+=` ${types[tipo].type.name}`
                            fetch(types[tipo].type.url)
                            .then(res=>res.json())
                            .then(function(type){
                                document.getElementById("p1").innerHTML+= `<br> generacion ${type.generation.name}  `
                            })
                        }                                                                          
                        abilities = pokemon.abilities;
                        console.log(abilities)
                        for (ability in abilities){
                            document.getElementById("p1").innerHTML +=`habilidades : ${abilities[ability].ability.name} <br>`}
                        for (i=0;i<5;i++){
                            document.getElementById("p1").innerHTML +=`movimientos: ${pokemon.moves[i].move.name}<br>`
                            console.log(i)
                        }
                    })               
            })       
            });
        })
    }
}
