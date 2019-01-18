$(function() {
	$(".toggles button").click(function(){
		var get_id = this.id;
		var get_current = $ (".posts ." + get_id);

		$(".post").not(get_current).hide(500);
		get_current.show(500);
	});

	$("#showall").click(function(){
		$(".post").show(500);
	});
});



$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                stagePadding:50, //Слайдер йде покругу
                dots:false, // Точки для навігації
                autoplayHoverPause: true, //Зупинка слайдера при наведенні мишки
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    320:{
                    	items:2
                    },
                    420:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            });
        });