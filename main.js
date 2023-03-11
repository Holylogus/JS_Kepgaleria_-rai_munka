
window.addEventListener("load", init)
const KEPEK = ["kepek/DSC7025.jpg","kepek/DSC7365.jpg","kepek/DSC7371_1.jpg","kepek/DSC7444.jpg","kepek/DSC7515.jpg"];
function init(){
    
    article_Tartalom(KEPEK);
    const KIS_KEPEK = document.querySelectorAll("article div img"); //meghívjuk a galéria képeit
    for (let index = 0; index < KIS_KEPEK.length; index++) { 
        KIS_KEPEK[index].addEventListener("click", function(){
            console.log("bementem");
            kattintasKezelo(index);
        }); //Minden képre rárakjuk a kattintást, ciklussal
        
    }

    }



function article_Tartalom(kepek_lista){
    let html_element = document.getElementsByTagName("article");
    for (let index = 0; index < kepek_lista.length; index++) {
        html_element[0].innerHTML += `<div class="galery"><img src=${kepek_lista[index]} alt="kepek"></div>`
    }
    
}
function kattintasKezelo(index){
    console.log(event.target.src); //kiiratjuk az elérési útvonalat a meghívott eseménynek
    const NAGY_KEP = document.querySelectorAll("section div img"); //Megfogjuk a nagyképet
    console.log(NAGY_KEP);
    NAGY_KEP[0].src = KEPEK[index]; //a nagykép elérési útvonalát módosítjuk a meghívott event elérési útvonalára.
}
        
        
    


