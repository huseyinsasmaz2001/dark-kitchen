// Tableau pour stocker les éléments du panier
let panierItems = [];

function calculerTotal() {
    let total = 0;

    for (let i = 0; i < panierItems.length; i++) {
        // Convertir le prix en réel avant de l'ajouter au total
        const prixElement = parseFloat(panierItems[i].price);

        if (!isNaN(prixElement)) {
            total += prixElement;
        }
    }

    return total;
}
// Fonction pour ajouter un plat au panier
function ajouterAuPanier(plat) {
    panierItems.push(plat);
}

function afficherPanier(elementHTML) {
    // Efface le contenu précédent de l'élément HTML du panier
    elementHTML.innerHTML = '';

    
    panierItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - Prix: ${item.price}`; 
        elementHTML.appendChild(listItem);
    });

}

export { ajouterAuPanier, afficherPanier, calculerTotal};