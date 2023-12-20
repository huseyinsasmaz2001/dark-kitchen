import { plats } from './list.js';
import { ajouterAuPanier, afficherPanier, calculerTotal } from './panier.js';

// fonction qui crée les élements et les classes
function ElementClass(elementName, className) {
    let element = document.createElement(elementName);
    element.classList.add(className);

    return element;
}

document.addEventListener('DOMContentLoaded', function () {


    const header = document.querySelector('header');
    /*const theme=ElementClass('div','theme-switch');
    const mode=ElementClass('img','theme-switch__icon');
    mode.id = 'theme-toggle';
    mode.src="assets/img/iconMode/mode-nuit.png";*/

    header.id = 'entete';
    document.getElementById("entete").style.backgroundImage = "url('assets/img/italieFlag.jpg')";
    document.getElementById("entete").style.backgroundRepeat = "no-repeat";
    document.getElementById("entete").style.backgroundSize = "cover";

    const panierElement = document.createElement('ul');
    panierElement.id = 'panier-items';

    const totalElement = document.createElement('div');
    totalElement.id = 'total';

    const themeSwitch = document.querySelector('div');
    const logoPanier = ElementClass('img', 'logoPanier');
    logoPanier.src = "assets/img/panier.png";


    const divHeader = ElementClass('div', 'divHeader');
    const logo = ElementClass('img', 'logo');
    logo.src = "assets/img/logoheader.jpg";
    const titre = ElementClass('h1', 'titre');
    titre.innerText = `Gusto Italiano Express`;

    const divPara = ElementClass('div', 'divPara');
    const para = ElementClass('p', 'description');
    para.innerText = `Le mystère de l'Italie s'invite chez vous avec notre dark kitchen, Gusto Italiano Express. Dans cet antre culinaire, des chefs passionnés concoctent des délices italiens authentiques, de pizzas artisanales aux pâtes fraîches exquises. Commandez en ligne et plongez dans une expérience gustative immersive, où chaque plat transporte l'essence de l'Italie à votre porte, éclairant vos soirées de saveurs inoubliables.`

    const main = document.querySelector('main');
    main.classList.add('container');

    const h2main = document.createElement('h2');
    h2main.innerText = `Menu`;
    const divBtn = ElementClass('div', 'divBtn');
    const btnall = ElementClass('button', 'btnall');
    btnall.innerHTML = "Menu";
    const btnentre = ElementClass('button', 'btnentre');
    btnentre.innerHTML = "Entrées";
    const btnprincipal = ElementClass('button', 'btnprincipal');
    btnprincipal.innerHTML = "Plats principals";
    const btndessert = ElementClass('button', 'btndessert');
    btndessert.innerHTML = "Desserts";

    main.append(h2main);
    main.append(divBtn);
    divBtn.append(btnall);
    divBtn.append(btnentre);
    divBtn.append(btnprincipal);
    divBtn.append(btndessert);

    for (let i = 0; i < plats.length; i++) {

        const dishes = plats[i];

        const section = ElementClass('section', 'card');

        const div1 = ElementClass('div', 'card__div');

        const image = ElementClass('img', 'card__div__image');
        image.src = dishes.picture;
        const article = ElementClass('article', 'card__text');

        const div2 = ElementClass('div', 'card__text__div');

        const btncat = ElementClass('button', 'card__text__div__btn');
        btncat.innerHTML = dishes.category;

        const div3 = ElementClass('div', 'card__text__name');
        div3.innerText = dishes.name;

        const div4 = ElementClass('div', 'card__text__descri');
        div4.innerText = dishes.description;

        const div5 = ElementClass('div', 'card__text__price');
        div5.innerText = `Prix: ${dishes.price}`;

        const div6 = ElementClass('div', 'card__text__origine');
        div6.innerText = `Origine du plat: ${dishes.area}`;


        const btnadd = ElementClass('button', 'card__text__add');
        btnadd.innerHTML = dishes.add;

        btnadd.addEventListener('click', function () {
            ajouterAuPanier(dishes);
            afficherPanier(panierElement);
            const total = calculerTotal();
            totalElement.innerText = `Total: ${total} €`;


        });
    };

themeSwitch.append(logoPanier);
header.append(panierElement);
header.append(totalElement);
header.append(divHeader);
divHeader.append(logo);
divHeader.append(titre);
header.append(divPara);
divPara.append(para);
//header.append(theme);
//theme.append(mode);

main.append(section);
section.append(div1);
div1.append(image);
section.append(article);
article.append(div2);
div2.append(btncat);
article.append(div3);
article.append(div4);
article.append(div5);
article.append(div6);
article.append(btnadd);

btnall.classList.add('trie-btn');
btnentre.classList.add('trie-btn');
btnprincipal.classList.add('trie-btn');
btndessert.classList.add('trie-btn');

// Permet d'écouter l'evenement lorsque l'utilisateur clique sur un des 4 boutons
btnall.addEventListener('click', function () {
    TriePlats('Menu');
});

btnentre.addEventListener('click', function () {
    TriePlats('Entrées');
});

btnprincipal.addEventListener('click', function () {
    TriePlats('Plats principaux');
});

btndessert.addEventListener('click', function () {
    TriePlats('Desserts');
});

// Fonction pour trier les plats.
function TriePlats(category) {
    // Supprime toutes les cartes actuellement affichées
    main.innerHTML = '';

    for (let i = 0; i < plats.length; i++) {
        const dishes = plats[i];

        if (category === 'Menu' || dishes.category === 'Menu') {

            const dishes = plats[i];

            const section = ElementClass('section', 'card');

            const div1 = ElementClass('div', 'card__div');

            const image = ElementClass('img', 'card__div__image');
            image.src = dishes.picture;
            const article = ElementClass('article', 'card__text');

            const div2 = ElementClass('div', 'card__text__div');

            const btncat = ElementClass('button', 'card__text__div__btn');
            btncat.innerHTML = dishes.category;

            const div3 = ElementClass('div', 'card__text__name');
            div3.innerText = dishes.name;

            const div4 = ElementClass('div', 'card__text__descri');
            div4.innerText = dishes.description;

            const div5 = ElementClass('div', 'card__text__price');
            div5.innerText = `Prix: ${dishes.price}`;

            const div6 = ElementClass('div', 'card__text__origine');
            div6.innerText = `Origine du plat: ${dishes.area}`;


            const btnadd = ElementClass('button', 'card__text__add');
            btnadd.innerHTML = dishes.add;

            btnadd.addEventListener('click', function () {
                ajouterAuPanier(dishes);
                afficherPanier(panierElement);
                const total = calculerTotal();
                totalElement.innerText = `Total: ${total} €`;


            });
        }
    }

}
