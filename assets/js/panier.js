let panierItems = [];

function augmenterQuantite(index) {
    if (index >= 0 && index < panierItems.length) {
        const item = panierItems[index];
        const prixAvant = item.price * item.quantity;

        item.quantity += 1;

        const elementHTML = document.getElementById(`quantite-${index}`);
        if (elementHTML && !isNaN(item.quantity)) {
            elementHTML.innerText = parseInt(item.quantity);
        }

        const prixApres = item.price * item.quantity;
        const difference = prixApres - prixAvant;

        afficherTotal(calculerTotal() + ' €');
    }
}

function diminuerQuantite(index) {
    if (index >= 0 && index < panierItems.length && panierItems[index].quantity > 1) {
        const item = panierItems[index];
        const prixAvant = item.price * item.quantity;

        item.quantity -= 1;

        const elementHTML = document.getElementById(`quantite-${index}`);
        if (elementHTML) {
            elementHTML.innerText = parseInt(item.quantity, 10);
        }

        const prixApres = item.price * item.quantity;
        const difference = prixApres - prixAvant;

        afficherTotal(calculerTotal() + ' €');
    }
}

// Reste du code inchangé...


function mettreAJourPanierEtTotal(item) {
    const elementHTML = document.getElementById('panier');
    if (!elementHTML) return;

    panierItems = panierItems.filter(item => item.quantity > 0);
    afficherPanier(elementHTML);
    const nouveauTotal = calculerTotal();
 

    afficherTotal(nouveauTotal);
 }


function afficherTotal(total) {
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.innerText = `Total: ${total}`;
    }
}

function calculerTotal() {
    let total = 0;

    panierItems.forEach(item => {
        const prix = parseFloat(item.price);
        const quantite = parseInt(item.quantity, 10);

        if (!isNaN(prix) && !isNaN(quantite)) {
            const montant = prix * quantite;
            total += montant;
        }
    });

    return total;
}


function ajouterAuPanier(plat) {
    const indexExistant = panierItems.findIndex(item => item.name === plat.name);

    if (indexExistant !== -1) {
        augmenterQuantite(indexExistant);
    } else {
        // Utilisation de Object.assign pour éviter de modifier l'objet d'origine
        const newPlat = Object.assign({}, plat, { quantity: 1 }); // Initialisation de quantity à 1
        panierItems.push(newPlat);
        mettreAJourPanierEtTotal();
    }
}


// ... ton code précédent inchangé ...
function afficherPanier(elementHTML) {
    elementHTML.innerHTML = '';

    panierItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - Prix: ${item.price} - Quantité:`;

        const quantiteText = document.createElement('span');
        quantiteText.id = `quantite-${index}`;
        quantiteText.innerText = ` ${item.quantity}`; // Affichage de la quantité entre les boutons

        const augmenterButton = document.createElement('button');
        augmenterButton.innerText = '+';
        augmenterButton.addEventListener('click', () => {
            augmenterQuantite(index);
        });

        const diminuerButton = document.createElement('button');
        diminuerButton.innerText = '-';
        diminuerButton.addEventListener('click', () => {
            diminuerQuantite(index);
        });

        listItem.appendChild(augmenterButton);
        listItem.appendChild(quantiteText);
        listItem.appendChild(diminuerButton);
        const supprimerButton = document.createElement('button');
        supprimerButton.innerText = 'Supprimer';
        supprimerButton.addEventListener('click', () => {
            if (index >= 0 && index < panierItems.length) {
                panierItems.splice(index, 1);
                item.quantity = 0;
                mettreAJourPanierEtTotal();
            }

            // Actualiser l'affichage du panier après la suppression
            afficherPanier(elementHTML);
            afficherTotal(calculerTotal() + ' €');
        });

        listItem.appendChild(supprimerButton);
        elementHTML.appendChild(listItem);
    });
}




// Exportation des fonctions
export { ajouterAuPanier, afficherPanier, calculerTotal, afficherTotal };
