$(document).ready(resizeWidth); //call function when page is loaded
$(window).resize(resizeWidth); //call function when page is resized

function resizeWidth(){
    let cont = $('.center');
    var maxW = cont.css('max-width').replace("px","")-0;
    var width = cont.width();

    if(maxW === width){
        let size = $(window).width();
        cont.css('left', ((size-width)/2)+"px");
    }else{
        cont.css('left', "50px");
    }
}
