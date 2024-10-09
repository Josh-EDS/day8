function houdini() {
    $('.magic').each(function(index) {
        $(this).delay(index * 300).fadeOut(500, function() {
            $(this).remove(); // Rajout d'un fade out
        });
    });
}

$(document).ready(function() {
    $('#makeDisappear').click(houdini);
});
