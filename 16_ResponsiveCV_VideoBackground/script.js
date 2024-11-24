$(document).ready(function () {
    // Optional: Smooth scrolling if navigation anchors are added in the future.
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
