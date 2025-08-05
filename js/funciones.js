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
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    const items = carousel.querySelectorAll('.carousel-item');
    
    if (!carousel) return;
    
    // Función para actualizar indicadores
    function actualizarIndicadores(slideIndex) {
        indicators.forEach((indicator, index) => {
            if (index === slideIndex) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.removeAttribute('aria-current');
            }
        });
    }
    
    // Función para cambiar slide de forma instantánea
    function cambiarSlide(slideIndex) {
        // Verificar que estamos trabajando solo con elementos del carrusel de certificados
        const certificadosItems = carousel.querySelectorAll('.carousel-item');
        
        // Ocultar todos los slides instantáneamente
        certificadosItems.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('active');
        });
        
        // Mostrar el slide seleccionado instantáneamente
        certificadosItems[slideIndex].style.display = 'block';
        certificadosItems[slideIndex].classList.add('active');
        
        // Actualizar indicadores
        actualizarIndicadores(slideIndex);
    }
    
    // Event listeners para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            // Cambio instantáneo sin animación
            cambiarSlide(index);
        });
    });
    
    // Event listeners para las flechas
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            const activeItem = carousel.querySelector('.carousel-item.active');
            const certificadosItems = carousel.querySelectorAll('.carousel-item');
            const currentIndex = Array.from(certificadosItems).indexOf(activeItem);
            const prevIndex = currentIndex === 0 ? certificadosItems.length - 1 : currentIndex - 1;
            
            // Cambio instantáneo sin animación
            cambiarSlide(prevIndex);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            const activeItem = carousel.querySelector('.carousel-item.active');
            const certificadosItems = carousel.querySelectorAll('.carousel-item');
            const currentIndex = Array.from(certificadosItems).indexOf(activeItem);
            const nextIndex = currentIndex === certificadosItems.length - 1 ? 0 : currentIndex + 1;
            
            // Cambio instantáneo sin animación
            cambiarSlide(nextIndex);
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