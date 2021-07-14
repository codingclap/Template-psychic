(function ($) {
    'use strict';      	
    
})(jQuery);

var SCROLLING_SPEED = 700;
var myFullpage = new fullpage('#fullpage', {
       css3: true,
        scrollingSpeed: 1000,
 
    //scrollOverflow: true,
     afterLoad: function(origin, destination, direction){
         var loadedSection = this;

        var params = {
            origin: origin,
            destination: destination,
            direction: direction
        };
        
        //alert(origin);
        
        if(destination.index == 0 && origin == null  ){
        
        $('.cry').css('display','none');
        $('#top-header').css('display','none');
        $(".cry").removeClass("animate-reveal");
        }
    
        
    },
    onLeave: function( origin, destination, direction){
         
        
     var leavingSection = $(this);	
     // alert(leavingSection);
      
        /*   var params = {
            origin: origin,
            destination: destination,
            direction: direction
        };
         */
    
     if(destination.index == 0  || destination.index == 16 ){
        $(".first-menu").removeClass("active");
    $(".second-menu").removeClass("active");
    $(".third-menu").removeClass("active");
    $('#top-header').css('display','none');
        $('.cry').css('display','none');
        $(".cry").removeClass("animate-reveal");
        }
         else
        {
        $('.cry').css({"display": "block", "animation:": "reveal 1s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;"});
        $(".cry").addClass("animate-reveal");
        $('#top-header').css('display','block');
        //$('#top-header .row').addClass("top-menu-view");
        //$("#top-header").addClass("animate-reveal");
        } 
        if(destination.index == 1 || destination.index == 6 || destination.index == 11)
        {
        $("#menu").addClass("menu-tran");	
        }
        else
        {
            $("#menu").removeClass("menu-tran");
        }
    if(destination.index == 1 || destination.index == 2 || destination.index == 3 || destination.index == 4 || destination.index == 5)
    {
        $(".second-menu").removeClass("active");
    $(".third-menu").removeClass("active");
    $(".first-menu").addClass("active");

    
    
    }
    if(destination.index == 6 || destination.index == 7 || destination.index == 8 || destination.index == 9 || destination.index == 10)
    {
        $(".first-menu").removeClass("active");
    $(".third-menu").removeClass("active");
    $(".second-menu").addClass("active");
    
    
    }
    if(destination.index == 11 || destination.index == 12 || destination.index == 13 || destination.index == 14 || destination.index == 15)
    {
        $(".first-menu").removeClass("active");
    $(".second-menu").removeClass("active");
    $(".third-menu").addClass("active");
    
    }	
        
     $(document.body).on('DOMMouseScroll mousewheel keyup', function (e) {
    
    var code = (e.keyCode ? e.keyCode : e.which);
    //alert(code);
     if(typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
if(e.originalEvent.detail > 0) {
     
     if (destination.index == 1) {
                fullpage_api.moveTo(7);
                destination.index = {};
            }
    if (destination.index == 6) {
        
                fullpage_api.moveTo(12);
                destination.index = {};
            }
    if (destination.index == 11) {
                fullpage_api.moveTo(17);
                destination.index = {};
            }
} else if(e.originalEvent.detail < 0){
             if (destination.index == 16) {
                fullpage_api.moveTo(12);
                destination.index = {};
            } 

 if (destination.index == 11 ) {
    
                fullpage_api.moveTo(7);
                destination.index = {};
            } 
if (destination.index == 6 ) {
                fullpage_api.moveTo(2);
                destination.index = {};
            } 
if (destination.index == 1 ) {
                fullpage_api.moveTo(1);
                destination.index = {};
            } 


}
} else if (typeof e.originalEvent.wheelDelta == 'number') {
if(e.originalEvent.wheelDelta < 0) {

    
     if (destination.index == 1) {
                fullpage_api.moveTo(7);
                destination.index = {};
            }
    if (destination.index == 6) {
        
                fullpage_api.moveTo(12);
                destination.index = {};
            }
    if (destination.index == 11) {
                fullpage_api.moveTo(17);
                destination.index = {};
            }
    if (destination.index == 0) {
                fullpage_api.moveTo(2);
                destination.index = {};
            }
} else if(e.originalEvent.wheelDelta > 0) {
    
     if (destination.index == 16) {
                fullpage_api.moveTo(12);
                destination.index = {};
            } 

 if (destination.index == 11 ) {
    
                fullpage_api.moveTo(7);
                destination.index = {};
            } 
if (destination.index == 6 ) {
                fullpage_api.moveTo(2);
                destination.index = {};
            } 
if (destination.index == 1 ) {
                fullpage_api.moveTo(1);
                destination.index = {};
            } 
}
}
if(code == 40) {

if (destination.index == 1) {
                fullpage_api.moveTo(7);
                destination.index = {};
            }
    if (destination.index == 6) {
        
                fullpage_api.moveTo(12);
                destination.index = {};
            }
    if (destination.index == 11) {
                fullpage_api.moveTo(17);
                destination.index = {};
            }
    if (destination.index == 0) {
                fullpage_api.moveTo(2);
                destination.index = {};
            }

}	
if(code == 38) {

     if (destination.index == 16) {
                fullpage_api.moveTo(12);
                destination.index = {};
            } 

 if (destination.index == 11 ) {
    
                fullpage_api.moveTo(7);
                destination.index = {};
            } 
if (destination.index == 6 ) {
                fullpage_api.moveTo(2);
                destination.index = {};
            } 
if (destination.index == 1 ) {
                fullpage_api.moveTo(1);
                destination.index = {};
            } 

}	
    
    /* if (destination.index == 17) {
        
                fullpage_api.moveTo(1);
                return false;
            } */
            
     });

    $(document).bind('touchend', function (e)
{

//alert(destination.index);
if (destination.index == 2) {
                fullpage_api.moveTo(7);
                destination.index = {};
            }
    if (destination.index == 6) {
        
                fullpage_api.moveTo(12);
                destination.index = {};
            }
    if (destination.index == 11) {
                fullpage_api.moveTo(17);
                destination.index = {};
            }
     if (destination.index == 0) {
                fullpage_api.moveTo(2);
                destination.index = {};
            }   
});
    //leaving the first slide of the 2nd Section to the right
    
}

});
document.querySelector('.fun').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.silentMoveTo(12);
});
document.querySelector('.mood').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.silentMoveTo(7);
});
document.querySelector('.iic').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.silentMoveTo(2);
});
$('.iic-second').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(2);

}); 
$('.top-menu-first').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(2);

}); 
$('.iic-detail').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(3);

});
$('.iic-detail-two').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(4);

}); 
$('.iic-detail-three').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(5);

});
$('.iic-detail-four').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(6);

});
$('.iic-detail-five').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(17);

}); 
$('.mood-detail-one').click(function(event) {

event.preventDefault();
fullpage_api.moveTo(8);

}); 
$('.top-menu-second').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(7);

}); 
$('.mood-detail-two').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(9);

});
$('.mood-detail-three').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(10);

});$('.mood-detail-four').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(11);

});
$('.mood-detail-five').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(17);

});
$('.top-menu-third').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(12);

});
$('.fun-detail-one').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(13);

}); 
$('.fun-detail-two').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(14);

}); 
$('.fun-detail-three').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(15);

});
$('.fun-detail-four').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(16);

});
$('.fun-detail-five').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(17);

}); 
$('.mood-second').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(14);

}); 
$('.fun-second').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(4, 0);

}); 
$('.iic-third').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(2, 0);

});
$('.mood-third').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(3, 0);

});
$('.fun-third').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(4, 0);

});
$('.iic-four').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(2);

});
$('.back').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(1);

});
$('.mood-four').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(8);

});
$('.fun-four').click(function(event) {
event.preventDefault();
fullpage_api.moveTo(14);

});
