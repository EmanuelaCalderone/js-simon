//creo funzione per generare 5 numeri casuali
function generaNumeri() {
    //creo l'array che conterrà i numeri casuali
    let numeriRandom = [];
    for (let i = 0; i < 5; i++){
        //funzione per generare numeri casuali da 1 a 50
        let numRandom = Math.floor(Math.random() * 50) + 1;
        //pusho ogni numero nell'array
        numeriRandom.push(numRandom);
        //verifico stampando i numeri generati
        console.log(numeriRandom[i]);
        
        //ad ogni iterazione creo anche un elemento 'li'
        let elementoLi = document.createElement('li');
        //ad ogni elemento inserisco il numero generato nell'html
        elementoLi.innerHTML = numeriRandom[i];
        //"appendo" ogni elemento 'li' alla lista
        document.getElementById('numbers-list').appendChild(elementoLi);
    }

    //ritorno l'array con i numeri generati
    return numeriRandom;
};

//chiamo la funzione
generaNumeri();

//creo le variabili associandole agli elementi
//variabile per i numeri
const numeri = document.getElementById('numbers-list');
//variabile per il form
const form = document.getElementById('answers-form');
//variabile per il pulsante
const button = document.querySelector('.btn');


//set Timeout per far apparire i numeri dopo 30 secondi
setTimeout(wait, 5000);
function wait() {
    //far scomparire i numeri
    numeri.className = "hide";
    //far apparire i 5 input in cui scivere i numeri
    form.className="show";
}

button.addEventListener('click', (event) => {
    
});

//output con i numeri individuati (con if)

