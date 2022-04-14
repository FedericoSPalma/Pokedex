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
          //  console.log(data)
            // console.log(endPoint)
            endPoint = data.next
            // console.log(endPoint)
            data.results.forEach(function(pokemon){
                let id = pokemon.url.split("/")[6];
               // console.log(pokemon.url.split("/")[6])
                let cardPokemon = `
               <div class ="col-3">
                <div class="card img-fluid">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${pokemon.name}</h5>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#ventanaModal" id="weas${id}" data-target="ventanaModal${id}">Go somewhere</a>
                </div>
                </div>
               </div>
                `
                document.getElementById("pokemonesCtm").insertAdjacentHTML("beforeend",cardPokemon);
                document.getElementById(`weas${id}`).addEventListener("click",()=>{
                    endPoint2 =`https://pokeapi.co/api/v2/pokemon/${id}`
                    fetch(endPoint2)
                    .then(res=>res.json())
                    .then(function(pepe){
                    //    console.log(pepe.types[0].type.name)                        
                         let modalWindow = `<div class="modal" id="ventanaModal${id}" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${pokemon.name}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div class="modal-body">
                        <p> tipo : ${pepe.types[0].type.name} </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    </div>
                    </div>`
                    
                     document.querySelector(".mc").innerHTML =  modalWindow
                    
                    
                    //  `
                    //  <div class="modal" id="ventanaModal" tabindex="-1" role="dialog">
                    //   <div class="modal-dialog" role="document">
                    //       <div class="modal-content">
                    //           <div class="modal-header">
                    //               <h5 class="modal-title">${pokemon.name}</h5>
                    //               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    //               <span aria-hidden="true">&times;</span>
                    //              </button>
                    //           </div>
                    //       <div class="modal-body">
                    //       <p> tipo : ${pepe.types[0].type.name} </p>
                    //       </div>
                    //      <div class="modal-footer">
                    //           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    //           <button type="button" class="btn btn-primary">Save changes</button>
                    //       </div>
                    //   </div>
                    //   </div>
                    //   </div>`;
                //    document.querySelector(".container").insertAdjacentHTML("afterend",modalWindow);
                    //  $(document).ready(function(){
                    //      $("#weas").click(function(){
                    //          $("$ventanaModal").modal("show")
                    //      })
                    //  });

                    })               
            })       
            });
        })
    }
}