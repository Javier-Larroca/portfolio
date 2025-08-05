jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');
        }
    })

    // Cerrar el menú al hacer clic en cualquier enlace del menú
    menu.find('a').click(function(){
        if(window.innerWidth <= 767){
            menu.removeClass('show');
        }
    });
    
    // Inicializar el carrusel de certificados
    inicializarCarouselCertificados();
});

// Funciones para el modal de certificados
function abrirModal(srcImagen, titulo) {
    const modal = document.getElementById('modal-certificado');
    const modalImagen = document.getElementById('modal-imagen');
    const modalTitulo = document.getElementById('modal-titulo');
    
    modalImagen.src = srcImagen;
    modalImagen.alt = titulo;
    modalTitulo.textContent = titulo;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

// Función para inicializar el carrusel de certificados
function inicializarCarouselCertificados() {
    const carousel = document.getElementById('carouselCertificados');
    
    if (!carousel) return;
    
    // Configurar el carrusel de Bootstrap
    if (typeof bootstrap !== 'undefined') {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: false, // Desactivar auto-play
            wrap: true // Permitir que vuelva al inicio
        });
        
        // Event listener para actualizar indicadores cuando cambia el slide
        carousel.addEventListener('slid.bs.carousel', function(event) {
            const slideIndex = event.to;
            const indicators = document.querySelectorAll('.carousel-indicators button');
            
            // Actualizar indicadores
            indicators.forEach((indicator, index) => {
                if (index === slideIndex) {
                    indicator.classList.add('active');
                    indicator.setAttribute('aria-current', 'true');
                } else {
                    indicator.classList.remove('active');
                    indicator.removeAttribute('aria-current');
                }
            });
        });
    }
}

// Cerrar modal al hacer clic en el botón X
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-certificado');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar scroll del body
        }
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});