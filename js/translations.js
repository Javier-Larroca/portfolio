// Traducciones del portfolio
const translations = {
    es: {
        // Navegación
        "nav-about": "¿Quién soy?",
        "nav-languages": "Lenguajes",
        "nav-experience": "Experiencia",
        "nav-studies": "Estudios",
        "nav-certificates": "Certificados",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        
        // Sección principal
        "hello-world": "¡Hola, mundo!",
        "about-text-1": "Soy Javier Agustín Larroca, egresado de la Tecnicatura Universitaria en Programación de la Universidad Tecnológica Nacional.",
        "about-text-2": "Desde 2021 me desempeño como desarrollador fullstack, especializado en backend con C# .NET, bases de datos relacionales mediante SQL y desarrollo de interfaces web utilizando Angular.",
        "about-text-3": "Además, soy docente de Programación en la UTN, Facultad Regional General Pacheco. Comencé como ayudante mientras aún era estudiante, y esa experiencia me llevó a descubrir una nueva pasión: la docencia.",
        "about-text-4": "Me considero una persona comprometida con el aprendizaje continuo y con la adopción de buenas prácticas en el desarrollo de software, siempre buscando crecer tanto en lo técnico como en lo humano en cada desafío que enfrento.",
        
        // Secciones
        "section-languages": "Lenguajes",
        "section-experience": "Experiencia",
        "section-studies": "Estudios",
        "section-certificates": "Certificados",
        "section-projects": "Proyectos",
        
        // Experiencia laboral
        "exp-utn-title": "UTN - FRGP",
        "exp-utn-role": "Docente de Programación I / Ayudante de Programación III",
        "exp-utn-desc-1": "Docente en la Tecnicatura Universitaria en Programación, impartiendo contenidos de programación estructurada mediante diagramas de flujo y C++. Temas abordados: ciclos exactos e inexactos, estructuras condicionales, vectores, matrices, funciones y metodologías algorítmicas. Uso activo del Campus Virtual Moodle.",
        "exp-utn-period": "Desde: 03/2021 - Hasta: Actualidad",
        
        "exp-advertmind-title": "Advertmind",
        "exp-advertmind-role": "Desarrollador de software en I+D",
        "exp-advertmind-desc-1": "Desarrollo de aplicaciones web y de escritorio utilizando C# .NET, Angular con TypeScript, SQL Server, y control de versiones con SVN. Trabajo bajo metodologías ágiles (Scrum).",
        "exp-advertmind-desc-2": "Formé parte del departamento de I+D, participando activamente en la mejora continua del producto mediante el desarrollo de nuevas funcionalidades, resolución de incidencias y adaptaciones a nuevos requerimientos de clientes.",
        "exp-advertmind-period": "Desde: 05/2023 - Hasta: 05/2025",
        
        "exp-recursiva-title": "Recursiva",
        "exp-recursiva-role": "Desarrollador de software Full Stack",
        "exp-recursiva-desc-1": "Desarrollo de aplicaciones web utilizando TypeScript, C# y SQL Server con frameworks como .NET y Angular.",
        "exp-recursiva-desc-2": "Participé en el desarrollo desde cero del portal web para GDM Seeds, adaptado a medida para sus clientes, abarcando desde el backend hasta la interfaz de usuario.",
        "exp-recursiva-period": "Desde: 02/2022 - Hasta: 04/2023",
        
        "exp-practia-title": "Practia Global",
        "exp-practia-role": "Desarrollador de software Full Stack",
        "exp-practia-desc-1": "Desarrollo de aplicaciones web con TypeScript, C# y SQL Server, utilizando .NET Core con Entity Framework y Angular para el frontend.",
        "exp-practia-desc-2": "Trabajé en el proyecto Y-Rupe para Y-Tec, abordando el modelado de base de datos, desarrollo de API y construcción de interfaces con plantillas provistas por el cliente.",
        "exp-practia-period": "Desde: 07/2021 - Hasta: 02/2022",
        
        "exp-admin-title": "MSD Argentina, Smith Molina, Vectatio, Vialme",
        "exp-admin-role": "Administrativo",
        "exp-admin-desc-1": "Desde mediados de 2016, inicié como pasante realizando tareas administrativas en talleres, luego en compras y logística. Fui encargado de compras y también administrativo de logística, monitoreando la cadena de frío en la distribución local.",
        "exp-admin-period": "Desde: 05/2016 - Hasta: 07/2021",
        
        // Estudios
        "studies-utnba-title": "UTN - BA",
        "studies-utnba-degree": "Licenciatura en Tecnología Educativa",
        "studies-utnba-period": "Desde: 08/2025 - Hasta: 12/2026",
        
        "studies-utn-title": "UTN - FRGP",
        "studies-utn-degree": "Tecnicatura Universitaria en Programación",
        "studies-utn-period": "Desde: 02/2020 - Hasta: 12/2021",
        
        "studies-school-title": "E.E.S.T.Nº 3",
        "studies-school-degree": "Tecnicatura personal y profesional en informática",
        "studies-school-period": "Desde: 03/2010 - Hasta: 12/2016",
        
        // Certificados
        "cert-webapi-title": "Web API .Net Core",
        "cert-webapi-institution": "Educación IT",
        "cert-webapi-skills": "Desarrollo de APIs RESTful · Manejo de .NET Core · Serialización de datos y consumo de servicios · Seguridad en APIs · Testing de endpoints · Principios SOLID y buenas prácticas",
        "cert-webapi-date": "Finalizado: 08/2025",
        
        "cert-accesibilidad-title": "Aportes para la construcción colectiva de la perspectiva de accesibilidad",
        "cert-accesibilidad-institution": "Universidad Tecnológica Nacional",
        "cert-accesibilidad-skills": "Perspectiva de accesibilidad · Sensibilidad y empatía social · Inclusión laboral y educativa · Diseño universal · Trabajo colaborativo",
        "cert-accesibilidad-date": "Finalizado: 10/2024",
        
        "cert-micaela-title": "Micaela TEC - Ciencia y tecnología hacia la igualdad",
        "cert-micaela-institution": "Universidad Tecnológica Nacional",
        "cert-micaela-skills": "Perspectiva de género en ciencia y tecnología · Sensibilización en violencia de género · Compromiso con la igualdad",
        "cert-micaela-date": "Finalizado: 06/2024",
        
        "cert-backend-title": "BackEnd .Net Immersion",
        "cert-backend-institution": "MindHub LA",
        "cert-backend-skills": "Programación Backend en .NET · Entity Framework y acceso a datos · Angular · Control de versiones con GIT",
        "cert-backend-date": "Finalizado: 08/2021",
        
        // Proyectos
        "project-tarjetas-title": "ABM Tarjetas",
        "project-tarjetas-desc": "Proyecto realizado íntegramente como práctica. Alta, baja y modificación de tarjetas con conexión a base de datos.",
        "project-tarjetas-tech": "Tecnologías: Angular, .NET y SQL",
        
        "project-clinica-title": "Turnero para Clínica",
        "project-clinica-desc": "Asignación de turnos a pacientes vinculándolos según especialidad y médico seleccionado. Control de usuario con diferentes roles.",
        "project-clinica-tech": "Tecnologías: C#, .NET y SQL",
        
        "project-carrito-title": "Carrito Web",
        "project-carrito-desc": "Listado de productos, cargados desde base de datos SQL, agregados al carrito de compras mediante sesión de navegador.",
        "project-carrito-tech": "Tecnologías: C#, .NET y SQL",
        
        "project-catalogador-title": "Sistema de stock",
        "project-catalogador-desc": "Sistema para control de stock de productos con alta, baja, modificación y listado de productos, categorías y marcas. Utilizando Programación orientada a objetos, con conexión a base de datos.",
        "project-catalogador-tech": "Tecnologías: C#, .NET y SQL",
        
        "project-lara-title": "LARA",
        "project-lara-desc": "Sistema de control de usuarios y entrenamientos ideado para ser utilizado en un gimnasio. El mismo cuenta con alta, baja, modificación y listado de usuario y entrenamientos",
        "project-lara-tech": "Tecnologías: C++ y C",
        
        "project-generala-title": "Generala",
        "project-generala-desc": "Juego generala de dos jugadores. Con cálculo de puntajes y turnos para cada jugador. Contiene interfaz gráfica y programación orientada a objetos.",
        "project-generala-tech": "Tecnologías: C++",
        
        // Footer
        "footer-contact": "Contacto: Javier-larroca@hotmail.com",
        "download-cv": "Descargar CV",
        "footer-copyright": "Copyright ©2025 Javier Larroca.",
        
        // Etiquetas comunes
        "skills": "Aptitudes:",
        "languages": "Tecnologías:",
        "from": "Desde:",
        "to": "Hasta:",
        "current": "Actualidad",
        "previous": "Anterior",
        "next": "Siguiente"
    },
    
    en: {
        // Navigation
        "nav-about": "About Me",
        "nav-languages": "Languages",
        "nav-experience": "Experience",
        "nav-studies": "Education",
        "nav-certificates": "Certificates",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        
        // Main section
        "hello-world": "Hello, world!",
        "about-text-1": "I'm Javier Agustín Larroca, graduated from the University Technical Degree in Programming at the National Technological University.",
        "about-text-2": "Since 2021 I work as a fullstack developer, specialized in backend with C# .NET, relational databases using SQL and web interface development using Angular.",
        "about-text-3": "Additionally, I'm a Programming teacher at UTN, General Pacheco Regional Faculty. I started as an assistant while still being a student, and that experience led me to discover a new passion: teaching.",
        "about-text-4": "I consider myself a person committed to continuous learning and the adoption of good practices in software development, always seeking to grow both technically and humanly in every challenge I face.",
        
        // Sections
        "section-languages": "Languages",
        "section-experience": "Experience",
        "section-studies": "Education",
        "section-certificates": "Certificates",
        "section-projects": "Projects",
        
        // Work experience
        "exp-utn-title": "UTN - FRGP",
        "exp-utn-role": "Programming I Teacher / Programming III Assistant",
        "exp-utn-desc-1": "Teacher in the University Technical Degree in Programming, teaching structured programming content through flowcharts and C++. Topics covered: exact and inexact loops, conditional structures, vectors, matrices, functions and algorithmic methodologies. Active use of Moodle Virtual Campus.",
        "exp-utn-period": "From: 03/2021 - To: Current",
        
        "exp-advertmind-title": "Advertmind",
        "exp-advertmind-role": "Software Developer in R&D",
        "exp-advertmind-desc-1": "Development of web and desktop applications using C# .NET, Angular with TypeScript, SQL Server, and version control with SVN. Work under agile methodologies (Scrum).",
        "exp-advertmind-desc-2": "I was part of the R&D department, actively participating in the continuous improvement of the product through the development of new features, incident resolution and adaptations to new client requirements.",
        "exp-advertmind-period": "From: 05/2023 - To: 05/2025",
        
        "exp-recursiva-title": "Recursiva",
        "exp-recursiva-role": "Full Stack Software Developer",
        "exp-recursiva-desc-1": "Web application development using TypeScript, C# and SQL Server with frameworks like .NET and Angular.",
        "exp-recursiva-desc-2": "I participated in the development from scratch of the web portal for GDM Seeds, customized for their clients, covering from backend to user interface.",
        "exp-recursiva-period": "From: 02/2022 - To: 04/2023",
        
        "exp-practia-title": "Practia Global",
        "exp-practia-role": "Full Stack Software Developer",
        "exp-practia-desc-1": "Web application development with TypeScript, C# and SQL Server, using .NET Core with Entity Framework and Angular for frontend.",
        "exp-practia-desc-2": "I worked on the Y-Rupe project for Y-Tec, addressing database modeling, API development and interface construction with templates provided by the client.",
        "exp-practia-period": "From: 07/2021 - To: 02/2022",
        
        "exp-admin-title": "MSD Argentina, Smith Molina, Vectatio, Vialme",
        "exp-admin-role": "Administrative",
        "exp-admin-desc-1": "Since mid-2016, I started as an intern performing administrative tasks in workshops, then in purchasing and logistics. I was purchasing manager and also logistics administrative, monitoring the cold chain in local distribution.",
        "exp-admin-period": "From: 05/2016 - To: 07/2021",
        
        // Education
        "studies-utnba-title": "UTN - BA",
        "studies-utnba-degree": "Bachelor's Degree in Educational Technology",
        "studies-utnba-period": "From: 08/2025 - To: 12/2026",
        
        "studies-utn-title": "UTN - FRGP",
        "studies-utn-degree": "University Technical Degree in Programming",
        "studies-utn-period": "From: 02/2020 - To: 12/2021",
        
        "studies-school-title": "E.E.S.T.Nº 3",
        "studies-school-degree": "Personal and professional technical degree in computer science",
        "studies-school-period": "From: 03/2010 - To: 12/2016",
        
        // Certificates
        "cert-webapi-title": "Web API .Net Core",
        "cert-webapi-institution": "Educación IT",
        "cert-webapi-skills": "RESTful API Development · .NET Core Management · Data Serialization and Service Consumption · API Security · Endpoint Testing · SOLID Principles and Best Practices",
        "cert-webapi-date": "Completed: 08/2025",
        
        "cert-accesibilidad-title": "Contributions to the collective construction of accessibility perspective",
        "cert-accesibilidad-institution": "National Technological University",
        "cert-accesibilidad-skills": "Accessibility perspective · Social sensitivity and empathy · Labor and educational inclusion · Universal design · Collaborative work",
        "cert-accesibilidad-date": "Completed: 10/2024",
        
        "cert-micaela-title": "Micaela TEC - Science and technology towards equality",
        "cert-micaela-institution": "National Technological University",
        "cert-micaela-skills": "Gender perspective in science and technology · Gender violence awareness · Commitment to equality",
        "cert-micaela-date": "Completed: 06/2024",
        
        "cert-backend-title": "BackEnd .Net Immersion",
        "cert-backend-institution": "MindHub LA",
        "cert-backend-skills": ".NET Backend Programming · Entity Framework and Data Access · Angular · Version Control with GIT",
        "cert-backend-date": "Completed: 08/2021",
        
        // Projects
        "project-tarjetas-title": "Cards CRUD",
        "project-tarjetas-desc": "Project entirely developed as practice. Create, read, update and delete cards with database connection.",
        "project-tarjetas-tech": "Technologies: Angular, .NET and SQL",
        
        "project-clinica-title": "Clinic Appointment System",
        "project-clinica-desc": "Patient appointment assignment linking them according to specialty and selected doctor. User control with different roles.",
        "project-clinica-tech": "Technologies: C#, .NET and SQL",
        
        "project-carrito-title": "Web Shopping Cart",
        "project-carrito-desc": "Product listing, loaded from SQL database, added to shopping cart through browser session.",
        "project-carrito-tech": "Technologies: C#, .NET and SQL",
        
        "project-catalogador-title": "Stock Management System",
        "project-catalogador-desc": "System for stock control of products with create, read, update and delete operations and listing of products, categories and brands. Using Object-Oriented Programming, with database connection.",
        "project-catalogador-tech": "Technologies: C#, .NET and SQL",
        
        "project-lara-title": "LARA",
        "project-lara-desc": "User and training control system designed to be used in a gym. It includes create, read, update and delete operations and listing of users and trainings",
        "project-lara-tech": "Technologies: C++ and C",
        
        "project-generala-title": "Generala",
        "project-generala-desc": "Two-player generala game. With score calculation and turns for each player. Contains graphical interface and object-oriented programming.",
        "project-generala-tech": "Technologies: C++",
        
        // Footer
        "footer-contact": "Contact: Javier-larroca@hotmail.com",
        "download-cv": "Download CV",
        "footer-copyright": "Copyright ©2025 Javier Larroca.",
        
        // Common labels
        "skills": "Skills:",
        "languages": "Technologies:",
        "from": "From:",
        "to": "To:",
        "current": "Current",
        "previous": "Previous",
        "next": "Next"
    }
}; 