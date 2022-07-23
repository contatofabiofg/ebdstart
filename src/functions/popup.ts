/* 
Nessa função eu desenvolvi a funcionalidade "popup", que vai percorrer a lista dictionary e, 
pra todos as tags "span" do html, vai gerar um box informativo com as informações da lista.
O bacana é que eu também separei essa função em uma pasta e só chamei ela no meu componente.

In this function I developed the feature "popup" that will go through the list "dicionary" and,
for every tag "span" of html, will generate a informative box with the infos on the list.
The nice thing is that I also placed this function in a folder and just call this in my component.
*/

import dictionary from "@/dicionario"

export const popup = function() {
        //define element type and generates a list of them
        const elementos = document.querySelectorAll("span");
        //Here begins the main function
        const addevent = (element: HTMLSpanElement  ) => {

            //find item
            let searchedItem: { texto: string; titulo: string; };
            for (const item of dictionary) {
                if (item.titulo == element.innerHTML) { searchedItem = item }         
            }
            //closes the popup if the element or the popup aren't hovered
            function closepopup() {
                if (!element.matches(":hover") && !document.querySelector(".popup")?.matches(":hover") ) {
                document.querySelector(".popup")?.remove();
                document.querySelector(".darkscreen")?.remove()
                document.querySelector("body")?.setAttribute("style", "overflow: auto");
                element.removeEventListener("mouseout", closepopup);
                }
            }
           
            //stylyng and edditing the page element and getting his position
            element.style.fontWeight = "bold";
            element.style.cursor = "pointer";
            element.addEventListener("mouseover", function() {
            const position = element.getBoundingClientRect();
            console.log(position.left);
            console.log(position.top);

           
            const height = window.innerHeight

            //generating the popup element whith dynamic position, dynamic text from the dictionary and showing on the screen
            if (!document.querySelector(".popup") && window.innerWidth > 1000) {
            element.addEventListener("mouseout", closepopup);
            const popup = document.createElement("div");
            const titulo = document.createElement("h4");
            titulo.innerHTML = searchedItem?.titulo;
            const texto = document.createElement("p");
            texto.innerHTML = searchedItem?.texto;
            popup.classList.add("popup");
            popup.setAttribute("style", `width: 300px; height: 200px; padding: 10px; background-color: white; box-shadow: -5px 5px 25px gray; border-radius: 10px; position: fixed; left: ${position.left}px; top: ${position.top + 20}px; word-wrap: break-word`);
            popup.setAttribute("onMouseOver", "");
            popup.appendChild(titulo);
            popup.appendChild(texto);
            popup.addEventListener("mouseout", closepopup);
            document.querySelector("body")?.appendChild(popup);
        } else if (!document.querySelector(".popup") && window.innerWidth < 1000) {
            const darkscreen = document.createElement("div");
            darkscreen.classList.add("darkscreen");
            darkscreen.setAttribute("style", `min-width: 100vw; min-height: ${height}px; background-color: black; position: fixed; left: 0; top: 0; opacity: 0.7; z-index: 3`);
            darkscreen.addEventListener("click", closepopup);
            document.querySelector("body")?.setAttribute("style", "overflow: hidden");
            document.querySelector("body")?.appendChild(darkscreen);

            const popup = document.createElement("div");
            const titulo = document.createElement("h4");
            titulo.innerHTML = searchedItem?.titulo;
            const texto = document.createElement("p");
            texto.innerHTML = searchedItem?.texto;
            popup.classList.add("popup");
            popup.setAttribute("style", `width: 300px; height: 300px; padding: 10px; background-color: white; border-radius: 10px; position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0; word-wrap: break-word; z-index: 4`);
            popup.appendChild(titulo);
            popup.appendChild(texto);
            document.querySelector("body")?.appendChild(popup);
        }
    })
    };
    //calls the function for each element on list
    elementos.forEach(addevent);
}