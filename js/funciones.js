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
    
    // Actualizar navegación
    updateNavigation(lang);
    
    // Actualizar sección principal
    updateMainSection(lang);
    
    // Actualizar secciones
    updateSections(lang);
    
    // Actualizar experiencia
    updateExperience(lang);
    
    // Actualizar estudios
    updateStudies(lang);
    
    // Actualizar certificados
    updateCertificates(lang);
    
    // Actualizar proyectos
    updateProjects(lang);
    
    // Actualizar footer
    updateFooter(lang);
}

function updateNavigation(lang) {
    const navItems = [
        { selector: '#nav-list li:nth-child(1) a', key: 'nav-about' },
        { selector: '#nav-list li:nth-child(2) a', key: 'nav-languages' },
        { selector: '#nav-list li:nth-child(3) a', key: 'nav-experience' },
        { selector: '#nav-list li:nth-child(4) a', key: 'nav-studies' },
        { selector: '#nav-list li:nth-child(5) a', key: 'nav-certificates' },
        { selector: '#nav-list li:nth-child(6) a', key: 'nav-projects' },
        { selector: '#nav-list li:nth-child(7) a', key: 'nav-contact' }
    ];
    
    navItems.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.textContent = translations[lang][item.key];
        }
    });
}

function updateMainSection(lang) {
    const elements = [
        { selector: '.bienvenidos h1', key: 'hello-world' },
        { selector: '.bienvenidos p:nth-child(1)', key: 'about-text-1' },
        { selector: '.bienvenidos p:nth-child(2)', key: 'about-text-2' },
        { selector: '.bienvenidos p:nth-child(3)', key: 'about-text-3' },
        { selector: '.bienvenidos p:nth-child(4)', key: 'about-text-4' }
    ];
    
    elements.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.textContent = translations[lang][item.key];
        }
    });
}

function updateSections(lang) {
    const sections = [
        { selector: '#languajes h2', key: 'section-languages' },
        { selector: '#experiencia h2', key: 'section-experience' },
        { selector: '#estudios h2', key: 'section-studies' },
        { selector: '#certificados h2', key: 'section-certificates' },
        { selector: '#proyects h2', key: 'section-projects' }
    ];
    
    sections.forEach(section => {
        const element = document.querySelector(section.selector);
        if (element) {
            element.textContent = translations[lang][section.key];
        }
    });
}

function updateExperience(lang) {
    // UTN
    updateExperienceItem(lang, 'exp-utn');
    // Advertmind
    updateExperienceItem(lang, 'exp-advertmind');
    // Recursiva
    updateExperienceItem(lang, 'exp-recursiva');
    // Practia
    updateExperienceItem(lang, 'exp-practia');
    // Admin
    updateExperienceItem(lang, 'exp-admin');
}

function updateExperienceItem(lang, prefix) {
    const container = document.querySelector(`[data-exp="${prefix}"]`);
    if (!container) return;
    
    // Actualizar título
    const titleElement = container.querySelector('h4');
    if (titleElement && translations[lang][`${prefix}-title`]) {
        titleElement.textContent = translations[lang][`${prefix}-title`];
    }
    
    // Actualizar rol
    const roleElement = container.querySelector('h5');
    if (roleElement && translations[lang][`${prefix}-role`]) {
        roleElement.textContent = translations[lang][`${prefix}-role`];
    }
    
    // Actualizar párrafos de descripción
    const paragraphs = container.querySelectorAll('p');
    if (paragraphs.length >= 1 && translations[lang][`${prefix}-desc-1`]) {
        paragraphs[0].textContent = translations[lang][`${prefix}-desc-1`];
    }
    if (paragraphs.length >= 2 && translations[lang][`${prefix}-desc-2`]) {
        paragraphs[1].textContent = translations[lang][`${prefix}-desc-2`];
    }
    
    // Actualizar período
    const periodElement = container.querySelector('h6');
    if (periodElement && translations[lang][`${prefix}-period`]) {
        const periodText = translations[lang][`${prefix}-period`];
        const fromLabel = translations[lang]['from'];
        const toLabel = translations[lang]['to'];
        const currentLabel = translations[lang]['current'];
        
        // Crear el HTML con estilos diferentes
        // Reemplazar "Desde:" y "Hasta:" con spans blancos, mantener las fechas en violeta
        let formattedText = periodText;
        
        // Reemplazar "Desde:" con span blanco
        if (periodText.includes(fromLabel)) {
            formattedText = formattedText.replace(fromLabel, `<span class="period-label">${fromLabel}</span>`);
        }
        
        // Reemplazar "Hasta:" con span blanco
        if (formattedText.includes(toLabel)) {
            formattedText = formattedText.replace(toLabel, `<span class="period-label">${toLabel}</span>`);
        }
        
        periodElement.innerHTML = formattedText;
    }
}

function updateStudies(lang) {
    const studies = [
        { selector: '.estudios ul li:nth-child(1) h4', key: 'studies-utnba-title' },
        { selector: '.estudios ul li:nth-child(1) h6', key: 'studies-utnba-degree' },
        { selector: '.estudios ul li:nth-child(1) p', key: 'studies-utnba-period' },
        { selector: '.estudios ul li:nth-child(2) h4', key: 'studies-utn-title' },
        { selector: '.estudios ul li:nth-child(2) h6', key: 'studies-utn-degree' },
        { selector: '.estudios ul li:nth-child(2) p', key: 'studies-utn-period' },
        { selector: '.estudios ul li:nth-child(3) h4', key: 'studies-school-title' },
        { selector: '.estudios ul li:nth-child(3) h6', key: 'studies-school-degree' },
        { selector: '.estudios ul li:nth-child(3) p', key: 'studies-school-period' }
    ];
    
    studies.forEach(study => {
        const element = document.querySelector(study.selector);
        if (element) {
            element.textContent = translations[lang][study.key];
        }
    });
}

function updateCertificates(lang) {
    // Web API
    updateCertificateItem(lang, 'cert-webapi');
    // Accesibilidad
    updateCertificateItem(lang, 'cert-accesibilidad');
    // Micaela
    updateCertificateItem(lang, 'cert-micaela');
    // Backend
    updateCertificateItem(lang, 'cert-backend');
    
    // Actualizar controles del carrusel
    updateCarouselControls(lang);
}

function updateCarouselControls(lang) {
    // Actualizar botones de navegación del carrusel
    const prevButton = document.querySelector('.carousel-control-prev .visually-hidden');
    const nextButton = document.querySelector('.carousel-control-next .visually-hidden');
    
    if (prevButton && translations[lang]['previous']) {
        prevButton.textContent = translations[lang]['previous'];
    }
    
    if (nextButton && translations[lang]['next']) {
        nextButton.textContent = translations[lang]['next'];
    }
}

function updateCertificateItem(lang, prefix) {
    const container = document.querySelector(`[data-cert="${prefix}"]`);
    if (!container) return;
    
    // Actualizar título
    const titleElement = container.querySelector('h4');
    if (titleElement && translations[lang][`${prefix}-title`]) {
        titleElement.textContent = translations[lang][`${prefix}-title`];
    }
    
    // Actualizar institución
    const institutionElement = container.querySelector('h6');
    if (institutionElement && translations[lang][`${prefix}-institution`]) {
        institutionElement.textContent = translations[lang][`${prefix}-institution`];
    }
    
    // Actualizar aptitudes
    const skillsElement = container.querySelector('.aptitudes-contenido');
    if (skillsElement && translations[lang][`${prefix}-skills`]) {
        skillsElement.textContent = translations[lang][`${prefix}-skills`];
    }
    
    // Actualizar fecha
    const dateElement = container.querySelector('p:last-child');
    if (dateElement && translations[lang][`${prefix}-date`]) {
        dateElement.textContent = translations[lang][`${prefix}-date`];
    }
    
    // Actualizar el texto "Aptitudes:" que está antes del span
    const skillsParagraphs = container.querySelectorAll('p');
    skillsParagraphs.forEach(p => {
        if (p.querySelector('.aptitudes-contenido') && translations[lang]['skills']) {
            p.innerHTML = p.innerHTML.replace(/Aptitudes:|Skills:/, translations[lang]['skills']);
        }
    });
}

function updateProjects(lang) {
    // Obtener todos los proyectos
    const projects = document.querySelectorAll('.proyects .row .product');
    
    // Mapear proyectos a sus traducciones
    const projectMappings = [
        'project-tarjetas',
        'project-clinica', 
        'project-carrito',
        'project-catalogador',
        'project-lara',
        'project-generala'
    ];
    
    // Actualizar cada proyecto
    projects.forEach((project, index) => {
        if (projectMappings[index]) {
            updateProjectItem(lang, projectMappings[index], project.querySelector('.card'));
        }
    });
}

function updateProjectItem(lang, prefix, card) {
    if (!card) return;
    
    // Actualizar título
    const titleElement = card.querySelector('h3 a');
    if (titleElement && translations[lang][`${prefix}-title`]) {
        titleElement.textContent = translations[lang][`${prefix}-title`];
    }
    
    // Actualizar descripción
    const descElement = card.querySelector('p');
    if (descElement && translations[lang][`${prefix}-desc`]) {
        descElement.textContent = translations[lang][`${prefix}-desc`];
    }
    
    // Actualizar tecnologías
    const techElement = card.querySelector('h6');
    if (techElement && translations[lang][`${prefix}-tech`]) {
        const techText = translations[lang][`${prefix}-tech`];
        const languagesLabel = translations[lang]['languages'];
        
        // Crear el HTML con estilos diferentes
        // Reemplazar "Tecnologías:" con un span blanco, mantener el resto en violeta
        let formattedText = techText;
        if (techText.includes(languagesLabel)) {
            formattedText = techText.replace(languagesLabel, `<span class="period-label">${languagesLabel}</span>`);
        }
        
        techElement.innerHTML = formattedText;
    }
}

function updateFooter(lang) {
    const elements = [
        { selector: '.footer-content p', key: 'footer-contact' },
        { selector: '.footer-bottom p', key: 'footer-copyright' }
    ];
    
    elements.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.textContent = translations[lang][item.key];
        }
    });
}