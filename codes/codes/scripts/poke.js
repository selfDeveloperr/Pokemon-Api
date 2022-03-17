class Pokedex{
    constructor(){
        this.nameUrl= 'https://pokeapi.co/api/v2/pokemon/'
    }

    async searchByName(value){
    
        const result= await fetch(`${this.nameUrl}${value}`);
        const data= await result.json();
        console.log(data)
        return {
            name: data.species.name,
            giph:data.sprites.versions['generation-v']['black-white'].animated.front_default
        };
    
    }

}

