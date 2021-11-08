// RICHIAMO TUTTE LE VARIABILI
const selectors = document.getElementById("selector");
console.log(selector);
const container = document.getElementById("container");
const cards =
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'violet'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'violet'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'violet'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'violet'
	}
];

// FACCIO PARTIRE TUTTO
inizio()

selectors.addEventListener("change", (eee) => {
	let selector = eee.target.value;
	inizio(selector);
});

function generateCard(arr){
		container.innerHTML = "";
		arr.forEach(card => {
  	const upperName = card.name.toUpperCase();

    container.innerHTML +=
    `
      <div class="box">
        <i class="${card.family} ${card.prefix}${card.name} ${card.color}"></i>
        <p>${upperName}</p>
      </div>
    `;
	}
)};

// SUDDIVIDO IN CATEGORIE SELEZIONABILI
function inizio(selector){
	if(selector == 2){
		const selectorAnimals = cards.filter((oggetto) => oggetto.type === "animal");
		generateCard(selectorAnimals);
	} else if(selector == 3){
		const selectorVegetable = cards.filter((oggetto) => oggetto.type === "vegetable");
		generateCard(selectorVegetable);
	} else if(selector == 4){
		const selectorUser = cards.filter((oggetto) => oggetto.type === "user");
		generateCard(selectorUser);
	} else{
		generateCard(cards);
	}
};