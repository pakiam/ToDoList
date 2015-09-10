var main = function () {
    "use strict";

    var toDos = [
        "End writing this book",
        "Go further",
        "Pass session"
    ];
    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element);
            var $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                console.log("1st tab");
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("3rd tab");
            }
            return false;
        })
    })
};

$(document).ready(main);