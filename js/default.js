// UI logic.
$(document).ready(function(){
    // Expanding the article on link click and scrolling down to it
    $('#sidebar a').each(function () {
        var that = $(this);
        var id = that.attr('href').substring(1);
        that.click(function (e) {
            var header = $('article a[name="'+ id +'"]')
            header.trigger('click');
            $('html, body').animate({ scrollTop: header.offset().top }, 'fast');
        });

        // If we find a link in the body with similar anchor, add the same behavior
        $('.body a[href="#'+ id +'"]').click(function (e) {

            $('#sidebar a[href="#'+ id +'"]').trigger('click');
        });
    });

    // Shows / Hides all descriptions.
    $("#content").prepend(
        $("<a id=\"toggle-all\">+ Show all</a>").click(function(){
            if ($("#toggle-all").html() == "- Hide all") {
                $("article").children(".body").hide("fast", "linear", function(){
                    $("#toggle-all").html("+ Show all");
                });
            } else {
                $("article").children(".body").show("fast", "linear", function(){
                    $("#toggle-all").html("- Hide all");
                });
            }
        })
    );

    // Initializing.
    var anchor = window.location.hash.substring(1);
    $('article').each(function () {
        // Hide all descriptions, that are not requested.
        if (anchor != $(this).children("a").attr("name")) $(this).children(".body").hide();
        // Add hide / show toggle function.
        $(this).children("a").click(function(){
            $(this).siblings(".body").toggle("fast", "linear");
        });
    });
});
