/**
 * Created by Hui Jing on 12/07/16.
 */
//
// (function ($) {
//     (function () {
//         var showSecretHat = function () {
//             // $("#term-grid-item-number-7").attr("src", "../img/typeterms_1_white.png");
//             $("#term-grid-item-number-7 > img").attr("src", "../img/typeterms_1_white.png");
//         }
//
//         $("#term-map-7").click(function () {
//             // showSecretHat();
//             $("#term-grid-item-number-7 > img").attr("src", "../img/typeterms_1_white.png");
//         });
//     })();
// })(jQuery);

$(function() {
    $("#term-map-7").hover(function () {
        $("#term-grid-item-number-7").attr("src", "../img/typeterms_1.png");
    }, function(){
        $("#term-grid-item-number-7").attr("src", "../img/typeterms_1_white.png");
    });
});
