$(document).ready(function() {
    $('[data-toggle="collapse"]').on('click', function() {
        // Reinitialize Bootstrap's collapse plugin
        $('.navbar-collapse').collapse('toggle');
    });
});