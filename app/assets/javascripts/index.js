$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(".ago").hide();
            $(".norm").show();
        }
        else if($(this).prop("checked") == false){
            $(".ago").show();
            $(".norm").hide();
        }
    });
});
