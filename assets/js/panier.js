let panierItems = [];



function augmenterQuantite(index) {
    if (index >= 0 && index < panierItems.length) {
        const elementHTML = document.getElementById(`quantite-${index}`); // Obtenez l'élément HTML pour la quantité
        panierItems[index].quantity += 1;
        if (elementHTML && !isNaN(panierItems[index].quantity)) {
            elementHTML.innerText = parseInt(panierItems[index].quantity, 10);
        }
        mettreAJourPanierEtTotal();
    }
}

function diminuerQuantite(index) {
    if (index >= 0 && index < panierItems.length && panierItems[index].quantity > 1) {
        const elementHTML = document.getElementById(`quantite-${index}`);
        panierItems[index].quantity -= 1;

        if (elementHTML) {
            elementHTML.innerText = parseInt(panierItems[index].quantity, 10);
        }
        mettreAJourPanierEtTotal();
    }
}
function mettreAJourPanierEtTotal() {
    const elementHTML = document.getElementById('panier');
    if (!elementHTML) return;

    const totalAvant = calculerTotal();

    panierItems = panierItems.filter(item => item.quantity > 0);

    afficherPanier(elementHTML);

    const nouveauTotal = calculerTotal();

    if (totalAvant !== nouveauTotal) {
        afficherTotal(nouveauTotal);
    }
}

function afficherTotal(total) {
    const totalElement = document.getElementById('total'); // Assurez-vous d'avoir un élément avec l'ID "total"
    if (totalElement) {
        totalElement.innerText = `Total: ${total}`;
    }
}

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

function ajouterAuPanier(plat) {
    const indexExistant = panierItems.findIndex(item => item.name === plat.name);

    if (indexExistant !== -1) {
        augmenterQuantite(indexExistant);
    } else {
        plat.quantity = 1;
        panierItems.push(plat);
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
                mettreAJourPanierEtTotal();
            }

            // Actualiser l'affichage du panier après la suppression
            afficherPanier(elementHTML);
        });

        listItem.appendChild(supprimerButton);
        elementHTML.appendChild(listItem);
    });
}




// Exportation des fonctions
export { ajouterAuPanier, afficherPanier, calculerTotal, afficherTotal };
