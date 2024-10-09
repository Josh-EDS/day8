function houdini(name) {
    $('#' + name).fadeOut(500);
    $('.' + name).fadeOut(500);
}

$(document).ready(function() {
    $('#makeDisappear').click(function() {
        const name = $('#nameInput').val().trim();
        if (name) {
            houdini(name);
        }
    });
});
