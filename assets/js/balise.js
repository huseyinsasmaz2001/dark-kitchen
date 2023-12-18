
const plats = [
    {
        picture: "assets/img/plats/Bruschetta.jpg",
        category: "Entrée",
        name: "Bruschetta",
        description: "Pain grillé frotté à l'ail et garni de tomates, basilic et huile d'olive.",
        price: "8.99 €",
        area: "Rome",
        
    },
    {
        picture: "assets/img/plats/salade-capresse.jpg",
        category: "Entrée",
        name: "Salade Caprese",
        description: "Salade de tomates, mozzarella et basilic frais.",
        price: "9.99 €",
        area: "Ile de Capri",
        
    },
    {
        picture: "assets/img/plats/Antipasto.jpg",
        category: "Entrée",
        name: "Plateau Antipasto",
        description: "Assortiment de fromages, charcuteries, olives et légumes marinés.",
        price: "12.99 €",
        area: "Italie",
        
    },
    {
        picture: "assets/img/plats/carbonara.jpg",
        category: "Plat principal",
        name: "Spaghetti Carbonara",
        description: "Pâtes avec une sauce crémeuse, du lard et du fromage pecorino.",
        price: "14.99 €",
        area: "Rome",
        
    },
    {
        picture: "assets/img/plats/Risotto.jpg",
        category: "Plat principal",
        name: "Risotto Milanese",
        description: "Riz crémeux avec du safran et du parmesan.",
        price: "16.99 €",
        area: "Milan",
        
    },
    {
        picture: "assets/img/plats/osso-bucco.jpeg",
        category: "Plat principal",
        name: "Osso Buco",
        description: "Plat de viande mijotée, généralement de la jarret de veau, servi avec une sauce.",
        price: "18.99 €",
        area: "Milan",
        
    },
    {
        picture: "assets/img/plats/tiramisu.jpg",
        category: "Dessert",
        name: "Tiramisu",
        description: "Dessert au café et mascarpone, saupoudré de cacao.",
        price: "9.99 €",
        area: "Trévise",
        
    },
    {
        picture: "assets/img/plats/pana.jpg",
        category: "Dessert",
        name: "Panna Cotta",
        description: "Dessert crémeux à la vanille avec coulis de fruits rouges.",
        price: "8.99 €",
        area: "Piémont",
        
    },
    {
        picture: "assets/img/plats/gelato.jpg",
        category:"Dessert",
        name: "Gelato",
        description: "Sélection de glaces artisanales italiennes.",
        price: "7.99 €",
        area: "Florence",

    },
];

function ElementClass(elementName, className){
    let element=document.createElement(elementName);
    element.classList.add(className);

    return element;
}

document.addEventListener('DOMContentLoaded',function(){

    const header=document.querySelector('header');
            /*const theme=ElementClass('div','theme-switch');
            const mode=ElementClass('img','theme-switch__icon');
            mode.id = 'theme-toggle';
            mode.src="assets/img/iconMode/mode-nuit.png";*/
            

        const logo=ElementClass('img','logo');
        const titre=ElementClass('h1','titre');
        titre.innerText = `blabla`;
        
        const main=document.querySelector('main');
        main.classList.add('container');

    for(let i=0;i<plats.length;i++){
        
        const dishes=plats[i];

        

            const section=ElementClass('section','card');

                const div1=ElementClass('div','card__div');

                    const image=ElementClass('img','card__div__image');
                    image.src=dishes.picture;
                    const article=ElementClass('article','card__text');

                const div2=ElementClass('div','card__text__div');

                    const btncat=ElementClass('button','card__text__div__btn');
                    btncat.innerHTML=dishes.category;
            
                const div3=ElementClass('div','card__text__name');
                div3.innerText=`Nom du plat: ${dishes.name}`;

                const div4=ElementClass('div','card__text__descri');
                div4.innerText=`Description du plat: ${dishes.description}`;

                const div5=ElementClass('div','card__text__price');
                div5.innerText=`Prix: ${dishes.price}`;

                const div6=ElementClass('div','card__text__name');
                div6.innerText=`Origine du plat: ${dishes.area}`;

    header.append(logo);
    header.append(titre);
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
       
    }
});