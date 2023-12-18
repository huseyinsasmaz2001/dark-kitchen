import { plats } from "./list.js";

function ElementClass(elementName, className){
    let element=document.createElement(elementName);
    element.classList.add(className);

    return element;
}

document.addEventListener('DOMcontentLoaded',function(){

    const header=document.querySelector('header');
        const logo=ElementClass('img','logo');
        const titre=ElementClass('h1','titre');
        titre.innerText = `blabla`;

    for(let i=0;i<plats.lenght;i++){
        
        const dishes=plats[i];

        const main=document.querySelector('main');
        main.classList.add('container');

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
    main.append(section);
    section.append(div1);
    div1.append(image);
    main.append(article);
    article.append(div2);
    div2.append(btncat);
    article.append(div3);
    article.append(div4);
    article.append(div5);
    article.append(div6);
       
    }
})