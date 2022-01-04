
const allImg = document.querySelectorAll(".productos")

allImg.forEach((el) => {
    el.addEventListener("click", (infoEvent) => {
        const id = infoEvent.target.dataset.id
        const idFiltrado = productos.filter((el) => el.id == id)

        const modalDiv = document.querySelector("#custom-modal")
        const div = document.querySelector("#modal-card")
        div.classList.add("custom-modal-card")
        div.classList.add("custom-modal")

        const img = document.querySelector("#product")
        img.classList.add("custom-img")
        
        
        const descripciones = document.querySelector("#description")
        const medida = document.querySelector("#medida")
        const precio = document.querySelector("#precio")

        
        descripciones.textContent = idFiltrado[0].description;
        medida.textContent = idFiltrado[0].medidas;
        precio.textContent = idFiltrado[0].precios;
        img.setAttribute("src", idFiltrado[0].imagen)

        modalDiv.classList.add("visible")
        let fondo = document.querySelector(".fondo-negro")
        fondo.classList.add("visible")

        let cerrar = document.querySelector(".close-modal")
        
        cerrar.addEventListener("click", function(){
            modalDiv.classList.remove("visible")
            fondo.classList.remove("visible")
        })
        fondo.addEventListener("click", function (){
            modalDiv.classList.remove("visible")
            fondo.classList.remove("visible")
        })

    })
})