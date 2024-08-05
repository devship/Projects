const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const innerGameContainer = document.querySelector('.invisible');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const spriteContainer = document.getElementById('sprite-container')
const pokemonWeight = document.getElementById('weigth');
const pokemonHeight = document.getElementById('heigth');
const pokemonHp = document.getElementById('hp')
const pokemonAttack = document.getElementById('attack');
const pokemonDefence = document.getElementById('defence');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defence');
const speed = document.getElementById('speed');
const pokemonTypes = document.getElementById('types');


const fetchData = async () => {
    try {
        const nameOrId = searchInput.value.toLowerCase();
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
        const data = await res.json();
        showData(data)
        console.log(data)
    } catch (error) {
        alert(`Pokemon not found`)
        console.log(error);
    }
}
fetchData()

const showData = (data) => {
 const {height, id , name, order, sprites, stats, types, weight} = data;
 pokemonName.textContent = `${name[0].toUpperCase() + name.slice(1)}`;
 pokemonId.textContent = `#${id}`;
 pokemonWeight.textContent = `weight: ${weight}`;
 pokemonHeight.textContent = `height: ${height}`

spriteContainer.innerHTML = `<img id="sprite" src= "${sprites.front_default}" alt="${name}">`;
pokemonHp.textContent = `${stats[0].base_stat}`;
pokemonAttack.textContent = `${stats[1].base_stat}`;
pokemonDefence.textContent = `${stats[2].base_stat}`;
specialAttack.textContent = `${stats[3].base_stat}`;
specialDefense.textContent = `${stats[4].base_stat}`;
speed.textContent = `${stats[5].base_stat}`;

pokemonTypes.innerHTML = types.map(obj => `<span class ="color">${obj.type.name[0].toUpperCase() + obj.type.name.slice(1)}</span>`).join(" ")
}
const nameTest = "abigail";
const capitalize = nameTest[0].toUpperCase() + nameTest.slice(1);
console.log(capitalize)

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData();
    innerGameContainer.style.height = "auto"
    
});

searchInput.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        searchButton.click();
    }
});