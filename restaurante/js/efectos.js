(function(){
    $(document).ready(function(){
        
        //Efectos Menu.

        $('.menu-navegacion li').each(function(index, elemento){
            $(this).css({
                'top': '-200px'
            });

            $(this).animate({
                top: '0'
            }, 2000 + (index * 500));
        });

        //Efecto Header.

        if($(window).width() > 800){
            $('.header .textos').css({
                'opacity': '0',
                'margin-top': '0'
            });

            $('.header .textos').animate({
                'opacity': '1',
                'margin-top': '-52px'
            }, 1500);
        }


        //Scroll Elementos . 

        var acercaDe = $('#acerda-de').offset().top,
            menu = $('#patillos').offset().top,
            galeria = $('#galeria').offset().top,
            ubicacion = $('#ubicacion').offset().top;

        //Acerca-de:

        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercaDe - 100
            }, 500);
        });

        //Menu:

        $('#btn-menu').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu 
            }, 500);
        });

        //Galeria:

        $('#btn-galeria').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: galeria 
            }, 500);
        });
        
        //Ubicacion:

        $('#btn-ubicacion').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ubicacion
            }, 500);
        });
    
    });

}());