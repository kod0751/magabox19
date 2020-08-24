(function($){

     //배너 이미지 슬라이드
     var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
    });

    //영화차트 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        breakpoints:{
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });

    //영화차트 탭 메뉴
    var movBtn = $(".movie_title > ul > li");    
    var movCont = $(".movie_chart > div");  

    movCont.hide().eq(0).show();

    movBtn.click(function(e){
        e.preventDefault(); //화면 위로 올라가는것 차단
        var target = $(this);              
        var index = target.index();    //타켓에 번호 
        movBtn.removeClass("active");  //active 제거      
        target.addClass("active");     //타겟에 active 설정       
        movCont.css("display","none");              
        movCont.eq(index).css("display","block");                
    });

    //공지사항 탭 메뉴
    var tabMenu = $(".notice");

    //컨텐츠
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show();          // 없으면 첫 화면 중첩

    function tabList(e){
        e.preventDefault(); //#의 기능차단
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);

})(jQuery);