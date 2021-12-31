
const productosFilter = document.querySelectorAll('.productos');

const links = document.querySelectorAll('.custom-a-filtro');

const ocultarProductos = (categoria = '') => {
    productosFilter.forEach((el) => {
        console.log(el.dataset);
        if (!el.dataset.category.includes(categoria)) {
            el.classList.add('hidden')
        } else {
            el.classList.remove('hidden')
        }
    })
}

links.forEach(elemento => {
    elemento.addEventListener('click', (infoEvent) => {
        infoEvent.preventDefault();
        const categoria = infoEvent.target.dataset.category; 
        ocultarProductos(categoria);
    });
});
  
  