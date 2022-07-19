// sidebar script
    let sidebarOpen=document.querySelector('#sidebarOpen');
    let sidebarClose=document.querySelector('#sidebarClose');
    let mainSidebar=document.querySelector('#sideBar');

    sidebarOpen.addEventListener('click',function(){
        mainSidebar.style.width="400px";
        mainSidebar.style.padding="20px";
    });

    sidebarClose.addEventListener('click',function(){
        mainSidebar.style.width="0px";
        mainSidebar.style.padding="0px";
    });


// trending now section carousol
$('.trendingCarousel').owlCarousel({
    loop:true,
    // autoWidth:true,
    // autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 350,
    margin:10,
    nav:true,
    dots:false,
    navText:['<img src="img/arrow 01.svg">','<img src="img/arrow 02.svg">'],
    responsive:{
        0:{
            items:1,
            // nav:false
        },
        480 : {
            items:1,
            autoWidth:true
            
        },
        575 : {
            items:2,
            autoWidth:true
            
        },

        768 : {
            items:2,
            autoWidth:true
        },

        900:{
            items:4
        },
        1200:{
            items:6
        }
    }
});


// strat your cart carousol
$('.stratCart').owlCarousel({
    loop:true,
    // autoplay:true,
    autoplayTimeout:6000,
    smartSpeed: 350,
    margin:10,
    nav:true,
    dots:false,
    navText:['<img src="img/arrow 01.svg">','<img src="img/arrow 02.svg">'],
    responsive:{
        0:{
            items:1,
            // nav:false
        },
        480 : {
            items:1,
            autoWidth:true,
            margin:20,
        },
        576 : {
            items:2,
            autoWidth:true
        },

        768 : {
            items:2,
            autoWidth:true
        },

        900:{
            items:4
        },
        1200:{
            items:6
        }
    }
});


// customer review carousol
$('.cutomerReview').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 350,
    margin:10,
    nav:true,
    dots:false,
    navText:['<img src="img/arrow 01.svg">','<img src="img/arrow 02.svg">'],
    responsive:{
        0:{
            items:1,
            // nav:false
        },
        600:{
            items:2,
            // margin:15
        },
        1000:{
            items:3
        }
    }
});


