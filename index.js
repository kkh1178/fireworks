// function addFireworks() {
//     var element = document.getElementById("addaclass");
//     element.classList.add("pyro");
// }


$(document).ready(function() {
    $('.button').click(function() {
        let $fireworks = $('#fireworks');
        if ($fireworks.hasClass("pyro")) {
            $("a").attr("alt", "Start Fireworks")
        } else {
            $("a").attr("alt", "Stop Fireworks")
        }

        $('#fireworks').toggleClass("pyro")
    });
});
