//creo l'array che conterrà i numeri casuali
let numeriRandom = [];

//creo funzione per generare numeri casuali
function generaNumeri() {
    //ciclo per avere 5 numeri
    for (let i = 0; i < 5; i++){
        //funzione per generare numeri casuali da 1 a 50
        let numRandom = Math.floor(Math.random() * 50) + 1;

        //genera un altro numero se il numero è già presente nell'array
        do {
            numRandom;
        } while (numeriRandom.includes(numRandom));

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

//variabile con l'esito
let esito = document.getElementById('message');

//set Timeout per far apparire i numeri dopo 30 secondi
setTimeout(wait, 1000);
function wait() {
    //far scomparire i numeri
    numeri.className = "hide";
    //far apparire i 5 input in cui scivere i numeri
    form.className="show";
}

//associo funzione al click del pulsante

button.addEventListener('click', (event) => {
    
    //blocco invio form
    event.preventDefault();
    
    //variabile per i numeri dell'utente
    let numeriInseriti = document.querySelectorAll('.form-control');
    //creo array con i valori inseriti
    let valoriInseriti = [];
    // ciclo for of per iterare sulla NodeList che ha generato il querySelectorAll
    for (let input of numeriInseriti) {
    //pusho il valore di ogni input all'array "valori inseriti"
    valoriInseriti.push(parseInt(input.value)); 
    }

    //creo array con i numeri indovinati
    let numeriIndovinati = [];
    for (let numero of valoriInseriti) {
        if (numeriRandom.includes(numero)) {
            numeriIndovinati.push(numero);
        }
    }

    //condizione per l'esito

    //condizione che avvisa l'utente se ha inserito caratteri invalidi o numeri uguali
    if (typeof valore !== "number" || typeof valore.includes(valoriInseriti)) {
        alert("Hai inserito caratteri invalidi o numeri uguali");
        //cambio il messaggio dell'esito
        button.innerHTML = "Riprova";
        //cambio il colore del messaggio in blu
        esito.className = "hide";
    }
        

    //se tutti i numeri dei due array corrispondono
    else if (numeriIndovinati.length === numeriRandom.length) {
        //cambia colore messaggio in verde
        esito.className = 'text-success text-center';
        //modifica il messaggio
        esito.innerHTML = "Hai indovinato tutti i numeri!";

        //se ne è stato indovinato almeno uno
    } else if (numeriIndovinati.length > 0) {
        //cambia colore messaggio in giallo
        esito.className = 'text-warning text-center';
        //dichiara quanti e quali numeri sono stati indovinati e li converto in stringa con join
        esito.innerHTML = `Numeri indovinati: ${numeriIndovinati.length} (${numeriIndovinati.join(", ")})`;
        
        //se non è stato indovinato nessun numero
    } else {
        //cambia colore messaggio in rosso
        esito.className = 'text-danger text-center';
        //modifica il messaggio
        esito.innerHTML = "Non hai indovinato nessun numero!";
    }
});

