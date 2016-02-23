/**
 * Created by z on 2015/8/26.
 */
$(function(){
    $(".dd-left").find("h3").hover(
        function(){
            $(this).find(".second-menu-item").style.display="inline-block";
            return false;
        },
        function(){
            $(this).find("second-menu-item")[0].style.display="none";
            return false;
        }
    );
})