/**
 * Created by huijing on 12/4/16.
 */
$(document).ready(function () {
    $(".menu-icon").click(
        function () {
            $(".slide-down").slideDown();
            $(this).hide();
        });
    $(".nav-x").click(
        function () {
            $(".slide-down").slideUp();
            $(".menu-icon"). show(1000);
        });
});



