var main= function () {
"use strict";
    for (var i=1;i<=3;i++) {
        var tabSelector=".tabs a:nth-child("+i+") span";
        $(tabSelector).on("click", function () {
            $(".tabs span").removeClass("active");
            $(this).addClass("active");
            //$("main .content").empty();
            return false;
        });
    }
};

$(document).ready(main);