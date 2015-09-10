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
            var reversedToDos = toDos.reverse();
            var $emptyInput;
            var $successInput;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            function DRY(test) {
                $content = $("<ul>");
                test.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            }

            if ($element.parent().is(":nth-child(1)")) {
                DRY(reversedToDos);
            } else if ($element.parent().is(":nth-child(2)")) {
                DRY(toDos);
            } else if ($element.parent().is(":nth-child(3)")) {
                $content = $("<p>Ваша новая задача: </p><input type='text'> <button class='addTodo'>+</button>");
                var $toDoInput = $("main .content input");
                $(".addTodo").on("click", function () {

                    $emptyInput = $("<p style='color: red'>Вы ничего не ввели!</p>");
                    $successInput = $("<p style='color: green'>Добавлено!</p>");
                    if ($toDoInput.val() !== "") {
                        ($successInput).appendTo($("main .content"));
                        toDos.push($toDoInput.val());
                        $toDoInput.val("");
                    } else {
                        ($emptyInput).appendTo($("main .content"));
                    }
                });
            }
            $("main .content").append($content);
            return false;
        })
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);