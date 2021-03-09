$(document).ready(function(){
    $(".slider").on("input", function(){
        var val = $(this).val();

        if($(this).attr("id") === "colorSlider"){
            var colorVal = val * 2.5;
            $(".shape").css("background-color", "rgb("+colorVal+","+colorVal+","+colorVal+")");
        }

        if($(this).attr("id") === "borderRadiusSlider"){
            $(".shape").css("border-radius", val/2 + "%");
        }

        if($(this).attr("id") === "widthSlider"){
            $(".shape").css("width", 2.5 * val + "px");
        }
    });
});