import { plats } from './list.js';
import { ajouterAuPanier, afficherPanier, calculerTotal } from './panier.js';


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

    const panierElement = document.createElement('ul');
    panierElement.id = 'panier-items';

    const totalElement = document.createElement('div');
    totalElement.id = 'total';


    const logo = ElementClass('img', 'logo');
    logo.src = "";
    const titre = ElementClass('h1', 'titre');
    titre.innerText = `Gusto Italiano Express`;
    const para = ElementClass('p', 'description');
    para.innerText = `Le mystère de l'Italie s'invite chez vous avec notre dark kitchen, Pasta Nocturna. Dans cet antre culinaire, des chefs passionnés concoctent des délices italiens authentiques, de pizzas artisanales aux pâtes fraîches exquises. Commandez en ligne et plongez dans une expérience gustative immersive, où chaque plat transporte l'essence de l'Italie à votre porte, éclairant vos soirées de saveurs inoubliables.`

    const main = document.querySelector('main');
    main.classList.add('container');

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

        header.append(logo);
        header.append(titre);
        header.append(para);
        header.append(panierElement);
        header.append(totalElement);
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

    }
});