// Tableau pour stocker les éléments du panier
let panierItems = [];

function calculerTotal() {
    let total = 0;

    // Parcours de chaque élément du panier
    for (let i = 0; i < panierItems.length; i++) {
        // Convertir le prix en nombre avant de l'ajouter au total
        const prixElement = parseFloat(panierItems[i].price);

        // Vérifier si le prix est un nombre valide avant de l'additionner
        if (!isNaN(prixElement)) {
            total += prixElement;
        }
    }

    return total;
}
// Fonction pour ajouter un plat au panier
function ajouterAuPanier(plat) {
    panierItems.push(plat);
    // Vous pouvez également effectuer d'autres opérations comme actualiser l'affichage du panier, le total, etc.
}




function afficherPanier(elementHTML) {
    // Efface le contenu précédent de l'élément HTML du panier
    elementHTML.innerHTML = '';

    // Parcourt les éléments du panier et les affiche
    panierItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - Prix: ${item.price}`; // Ajustez selon la structure de votre plat
        elementHTML.appendChild(listItem);
    });





    // Vous pouvez également afficher le total du panier, le bouton de validation, etc.
}

// Exporter les fonctions ou le tableau pour les utiliser dans d'autres fichiers
export { ajouterAuPanier, afficherPanier, calculerTotal};