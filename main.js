$(document).ready(function () {
    // Navigasi sidebar
    $('.sidebar ul li a').on('click', function (e) {
        e.preventDefault();

        // Ambil target form dari atribut data-target
        const target = $(this).data('target');

        // Sembunyikan semua form
        $('.form').removeClass('active');

        // Tampilkan form yang dipilih
        $(target).addClass('active');
    });

    // Event tambahan untuk tombol submit
    $('.form').on('submit', function (e) {
        e.preventDefault();
        const formTitle = $(this).find('h2').text();
        alert(formTitle + ' Submitted Successfully!');
    });
});

