// Definisco la lista della spesa
const lista_spesa = ["Pane", "Latte", "Uova", "Frutta", "Verdura"];

// Inizializzo un contatore
let indice = 0;

// Ottiego l'elemento UL dalla pagina HTML
const listaSpesa = document.getElementById("listaSpesa");

// Eseguo un ciclo while per aggiungere gli elementi alla lista
while (indice < lista_spesa.length) {
    // Creo un elemento LI per ogni elemento della lista della spesa
    const listItem = document.createElement("li");
    listItem.textContent = lista_spesa[indice];
    
    // Aggiungo l'elemento LI alla lista UL
    listaSpesa.appendChild(listItem);
    
    // Incremento l'indice
    indice++;
}