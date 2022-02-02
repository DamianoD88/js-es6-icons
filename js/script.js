
// Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. 


//Milestone 2 Coloriamo le icone per tipo




// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone



const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];



// print è nome dato alla funzione
const coloredArray = colorIcons(icons);

printIcons(coloredArray);

const types = [];


coloredArray.forEach((element) => {
  if(!types.includes(element.type)){
    types.push(element.type);
    document.getElementById('type').innerHTML +=
    ` <option value="${element.type}">${element.type}</option>
    `
  }

});

const select = document.getElementById('type');

select.addEventListener("change", function(){
  const valoreSelect = select.value;
  console.log(valoreSelect);
  const filteredIcons = coloredArray.filter((element) => {
    return element.type == valoreSelect;
  });

  printIcons(filteredIcons);
  if(valoreSelect == 'all'){
    printIcons(coloredArray);
  }

});

/*----- function -----*/

function printIcons(array){
  document.getElementById('icone').innerHTML = '';

  array.forEach((element) => {
    //destructuring
    const {color, name, prefix, family} = element;

    //template literal
    const elementHTML = `
      <div>
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>`;

    document.getElementById('icone').innerHTML += elementHTML;

});
}
//   array.forEach((element) => {
//     console.log(element);

//     const {name, prefix, family} = element;

//     const elementHTML = `
//       <div>
//         <i class="${family} ${prefix}${name}"></i>
//         <div class="title">${name.toUpperCase()}</div>
//       </div>`;

//     document.getElementById('icone').innerHTML += elementHTML;

// });



function colorIcons(array){
  const coloredArray = array.map((element) => {
    let color = 'blue';
    if(element.type == 'animal'){
      color = 'green'
    }else if (element.type == 'vegetable'){
      color = 'orange';
    }
  
  //return(nel map è obbligatorio) ...element ritorna tutte le proprietà di quell'elemento
  
    return{
      ...element,
      color
    }
  });
  return coloredArray;
}


