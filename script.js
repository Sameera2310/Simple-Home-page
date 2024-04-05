$("document").ready(function(){
    $(window).on("resize",function(){
       let x = $(window).width();
       console.log(x);
       if(x<980){
        $(".blur").addClass("responsible");
        $(".blur").removeClass("col-md-6 col-12");

       }else{
        $(".blur").removeClass("responsible");
        $(".blur").addClass("col-md-6 col-12");
       }
    })
})