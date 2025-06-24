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
});