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
    $("#_0-t-1").hover(function () {
        $("#term-1-stem").fadeTo( "fast", 1.0 );
        $("#num-1-path").fadeTo( "fast", 1.0 );
    }, function(){
        $("#term-1-stem").fadeTo( "slow", 0.0 );
        $("#num-1-path").fadeTo( "slow", 0.0 );

    });

    $("#_1-y-1,#_1-y-2").hover(function () {
        $("#term-2-serif").fadeTo( "fast", 1.0 );
        $("#num-2-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-2-serif").fadeTo( "slow", 0.0 );
        $("#num-2-path").fadeTo( "slow", 0.0 );
    });

    $("#_2-p-1").hover(function () {
        $("#term-2-foot").fadeTo( "fast", 1.0 );
        $("#num-2-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-2-foot").fadeTo( "slow", 0.0 );
        $("#num-2-path").fadeTo( "slow", 0.0 );
    });

    $("#_3-o-1").hover(function () {
        $("#term-3-bowl").fadeTo( "fast", 1.0 );
        $("#num-3-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-3-bowl").fadeTo( "slow", 0.0 );
        $("#num-3-path").fadeTo( "slow", 0.0 );
    });

    $("#_4-g-1").hover(function () {
        $("#term-4-descender").fadeTo( "fast", 1.0 );
        $("#num-4-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-4-descender").fadeTo( "slow", 0.0 );
        $("#num-4-path").fadeTo( "slow", 0.0 );
    });

    $("#_4-g-2").hover(function () {
        $("#term-5-ear").fadeTo( "fast", 1.0 );
        $("#num-5-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-5-ear").fadeTo( "slow", 0.0 );
        $("#num-5-path").fadeTo( "slow", 0.0 );
    });

    $("#_5-r-1,#_6-a-1").hover(function () {
        $("#term-6-terminal").fadeTo( "fast", 1.0 );
        $("#num-6-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-6-terminal").fadeTo( "slow", 0.0 );
        $("#num-6-path").fadeTo( "slow", 0.0 );
    });

    $("#_8-h-1").hover(function () {
        $("#term-7-ascender").fadeTo( "fast", 1.0 );
        $("#num-7-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-7-ascender").fadeTo( "slow", 0.0 );
        $("#num-7-path").fadeTo( "slow", 0.0 );
    });

    $("#_9-y-1").hover(function () {
        $("#term-8-tail").fadeTo( "fast", 1.0 );
        $("#num-8-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-grid-item-number-8").attr("src", "../img/8_white_number.png");
        $("#term-8-tail").fadeTo( "slow", 0.0 );
        $("#num-8-path").fadeTo( "slow", 0.0 );
    });

    $("#_9-y-2").hover(function () {
        $("#term-9-stroke").fadeTo( "fast", 1.0 );
        $("#num-9-path").fadeTo( "slow", 1.0 );
    }, function(){
        $("#term-9-stroke").fadeTo( "slow", 0.0 );
        $("#num-9-path").fadeTo( "slow", 0.0 );
    });
});
