

function griglia ( selettore, tag_cella, classe_cella, numero_celle) {
    const griglia = document.querySelector(selettore); 

    for (i = 0; i < numero_celle; i++){
        const cell = document.createElement(tag_cella);
        cell.classList.add(classe_cella)
        griglia.append(cell)
    }

    griglia.classList.add('d_none')
}

griglia ( '.container .grid_1', 'div', 'c_100', 100)

griglia ( '.container .grid_2', 'div', 'c_81', 81)

griglia ( '.container .grid_3', 'div', 'c_49', 49)


const button_1 = document.querySelector('.livello_1')
const button_2 = document.querySelector('.livello_2')
const button_3 = document.querySelector('.livello_3')


const grid_1 = document.querySelector('.grid_1');
const grid_2 = document.querySelector('.grid_2');
const grid_3 = document.querySelector('.grid_3');

button_1.addEventListener('click', function(){
    
    grid_1.classList.remove('d_none')

    if (!grid_2.classList.contains('d_none')) {
        grid_2.classList.add('d_none')
    }

    if (!grid_3.classList.contains('d_none')) {
        grid_3.classList.add('d_none')
    }
    

    
})

button_2.addEventListener('click', function(){

    grid_2.classList.remove('d_none')

    if (!grid_1.classList.contains('d_none')) {
        grid_1.classList.add('d_none')
    }

    if (!grid_3.classList.contains('d_none')) {
        grid_3.classList.add('d_none')
    }
    
    
})

button_3.addEventListener('click', function(){

    grid_3.classList.remove('d_none')

    if (!grid_1.classList.contains('d_none')) {
        grid_1.classList.add('d_none')
    }

    if (!grid_2.classList.contains('d_none')) {
        grid_2.classList.add('d_none')
    }
    
    
})