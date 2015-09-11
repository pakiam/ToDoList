var toDos = [
    "End writing this book",
    "Go further",
    "Pass session"
];
var main = function () {
    "use strict";

    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {

            var $element = $(element);
            var $content;
            var $emptyInputText;
            var $successInputText;
            var $input, $button;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (var i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                $input = $("<input type='text'>");
                $button = $("<button class='toDoButton'>").text("+");
                $emptyInputText = $("<p style='color: red'>Вы ничего не ввели!</p>");
                $successInputText = $("<p style='color: green'>Добавлено!</p>");
                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $emptyInputText.remove();
                        ($successInputText).appendTo($("main .content"));
                        $input.val("");
                    }else{
                        $successInputText.remove();
                        ($emptyInputText).appendTo($("main .content"));
                    }
                });

                $content = $("<div>").append($input).append($button);
            }
            $("main .content").append($content);
            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
    return toDos;
};

$(document).ready(main);