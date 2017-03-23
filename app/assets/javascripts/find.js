$(document).ready(function () {
    $('html').on('click', 'tr[href]', function () {
	window.location = $(this).attr('href');
    });
});
