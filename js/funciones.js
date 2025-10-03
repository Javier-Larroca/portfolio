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
    
    // Inicializar el sistema de i18n
    inicializarI18n();
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

// Inicialización del sistema i18n
async function inicializarI18n() {
    try {
        // Verificar que el I18nManager esté disponible
        if (typeof window.i18n === 'undefined') {
            console.error('I18nManager no está disponible. Asegúrate de cargar i18n-manager.js antes que funciones.js');
            return;
        }
        
        // Inicializar el sistema de i18n
        await window.i18n.init();
        console.log('Sistema i18n inicializado correctamente');
    } catch (error) {
        console.error('Error al inicializar el sistema i18n:', error);
        // Fallback al sistema básico
        console.log('Usando sistema de traducciones fallback básico');
        inicializarSistemaFallback();
    }
}

// Sistema de fallback para compatibilidad
function inicializarSistemaFallback() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguageFallback);
    }
    
    // Cargar idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && savedLanguage !== 'es') {
        changeLanguageFallback(savedLanguage);
    }
}

function toggleLanguageFallback() {
    const currentLang = localStorage.getItem('portfolio-language') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguageFallback(newLang);
    localStorage.setItem('portfolio-language', newLang);
}

function changeLanguageFallback(lang) {
    // Actualizar botón
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }
    
    // En el sistema de fallback, solo actualizamos el botón
    // Las traducciones se manejan a través del sistema i18n principal
    console.log(`Fallback: Idioma cambiado a ${lang}`);
}

