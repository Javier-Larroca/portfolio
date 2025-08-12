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
    
    // Inicializar el sistema de idiomas
    inicializarSistemaIdiomas();
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

// Sistema de cambio de idioma
let currentLanguage = 'es';

function inicializarSistemaIdiomas() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Cargar idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        changeLanguage(currentLanguage);
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(currentLanguage);
    localStorage.setItem('portfolio-language', currentLanguage);
}

function changeLanguage(lang) {
    // Actualizar botón
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }
    
    // Traducir todos los elementos con data-translate
    translateElements(lang);
}

function translateElements(lang) {
    // Obtener todos los elementos con data-translate
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            const translation = translations[lang][key];
            
            // Si el elemento contiene spans, manejar de forma especial
            const spans = element.querySelectorAll('span');
            if (spans.length > 0) {
                // Si la traducción contiene HTML, usarla directamente
                if (translation.includes('<span')) {
                    element.innerHTML = translation;
                } else {
                    // Si no contiene HTML, preservar los spans existentes
                    // y reemplazar solo el texto exterior
                    const spanClasses = Array.from(spans).map(span => span.className);
                    let newHTML = translation;
                    
                    // Reemplazar las etiquetas de período con spans
                    if (translation.includes(translations[lang]['from'])) {
                        newHTML = newHTML.replace(
                            translations[lang]['from'], 
                            `<span class="period-label">${translations[lang]['from']}</span>`
                        );
                    }
                    if (translation.includes(translations[lang]['to'])) {
                        newHTML = newHTML.replace(
                            translations[lang]['to'], 
                            `<span class="period-label">${translations[lang]['to']}</span>`
                        );
                    }
                    if (translation.includes(translations[lang]['languages'])) {
                        newHTML = newHTML.replace(
                            translations[lang]['languages'], 
                            `<span class="period-label">${translations[lang]['languages']}</span>`
                        );
                    }
                    
                    element.innerHTML = newHTML;
                }
            } else {
                // Para elementos simples, usar textContent
                element.textContent = translation;
            }
        }
    });
}

