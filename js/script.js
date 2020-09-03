$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        let hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000);
        return false;
    });
});
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})