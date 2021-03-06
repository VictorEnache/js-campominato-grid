

function griglia ( selettore, tag_cella, classe_cella, numero_celle) {
    const griglia = document.querySelector(selettore); 


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    
    const elenco_random = [];
    
    while(elenco_random.length < numero_celle){
        const numero_random = getRndInteger(1, numero_celle)
    
        if (!elenco_random.includes(numero_random)){
            elenco_random.push(numero_random)
        }
    }



    for (i = 0; i < numero_celle; i++){
        const cell = document.createElement(tag_cella);
        cell.classList.add(classe_cella)
        griglia.append(cell)
        cell.append(elenco_random[i])
    }


}

const button_1 = document.querySelector('.livello')

const grid_1 = document.querySelector('.grid_1');
const grid_2 = document.querySelector('.grid_2');
const grid_3 = document.querySelector('.grid_3');


button_1.addEventListener('click', function(){
    
    const select_level = document.querySelector('#difficolta')
    

    if (select_level.value === 'livello_1'){

        griglia ( '.container .grid_1', 'div', 'c_100', 100)
    
        grid_2.innerHTML = ''
    
        grid_3.innerHTML = ''
    
        const lista_celle = document.querySelectorAll('.c_100')
    
        for (i = 0; i<100; i++){
            const cella = lista_celle[i]
            cella.addEventListener('click', function(){
                cella.classList.add('blue')
            })
        }
    }

    else if (select_level.value === 'livello_2'){
        griglia ( '.container .grid_2', 'div', 'c_81', 81)

        grid_1.innerHTML = ''

        grid_3.innerHTML = ''

        const lista_celle = document.querySelectorAll('.c_81')

        for (i = 0; i<81; i++){
            const cella = lista_celle[i]
            cella.addEventListener('click', function(){
                cella.classList.add('blue')
            })
        }
    }

    else if (select_level.value === 'livello_3'){
        griglia ( '.container .grid_3', 'div', 'c_49', 49)

        grid_1.innerHTML = ''
    
        grid_2.innerHTML = ''
    
        const lista_celle = document.querySelectorAll('.c_49')
    
        for (i = 0; i<49; i++){
            const cella = lista_celle[i]
            cella.addEventListener('click', function(){
                cella.classList.add('blue')
            })
        }
    }

    
})





