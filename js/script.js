$('.page-scroll').on('click', function(e){
    // ambil href
    var tujuan = $(this).attr('href');
    // tangkap elemen
    var elemenTujuan = $(tujuan);
    $('body').animate({
        scrollTop: elemenTujuan.offset().top
    });

    e.prventDefault();
});

$('.icons li').click(function(){
    $(this).toggleClass("active").siblings();
    $('.icons li a').toggleClass("active").siblings();

}); 

