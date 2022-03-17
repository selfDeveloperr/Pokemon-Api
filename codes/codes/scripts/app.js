const result= document.querySelector('.result')
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const btnAll = document.querySelector('.btn-all');

const p = new Pokedex();
form.addEventListener('submit',e=>{

    e.preventDefault();
    getPokemon(form.search.value);
    form.reset();

})

btn.addEventListener('click',e=>{
    getPokemon(getRandom());
})


btnAll.addEventListener('click',e=>{
    getRandomPokes()
})

// get pokemon by name or id
function getPokemon(value){
    
    p.searchByName(value)
    .then((data)=>{

        result.innerHTML= `
            <div class="pokemon">
                <img class="pokePic" src="${data.giph}">
                <p class="pokeName">${data.name}</p>
            </div>
        `;

    })
    .catch(e=>console.log(e))
}

// get random pokemons
function getRandomPokes(){
    
    result.innerHTML='';
    
    for(let i=0; i<=119; i++){

        p.searchByName(getRandom())
        .then((data)=>{
            
        result.innerHTML+= `
            <div class="pokemon">
                <img class="pokePic" src="${data.giph}">
                <p class="pokeName">${data.name}</p>
            </div>
            `;

        })
        .catch(e=>console.log(e))
    }
}

// get random numb
function getRandom(){
    return Math.floor((Math.random()*600)+1)
}