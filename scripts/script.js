$(document).ready(function(){
    let p_slider = $(".products_slider").owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:24,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1100:{
                items:3
            },
            1400:{
                items:4
            }
        }

    });
    $('.customNextBtn').click(function() {
        p_slider.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        p_slider.trigger('prev.owl.carousel');
    })
});
$(document).ready(function(){
    $(".gallery_slider").owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            550:{
              items:2
            },
            1100:{
                items:3
            },
            1400:{
                items:4
            }
        }

    });
});
$('.modal_form').on('submit', function(e){
    e.preventDefault();
    var data={};
    data.name=$('.modal_name').val();
    data.tel=$('.modal_tel').val();
    $.post('../mailer/call_mailer.php',data,function(response){
        if(response.status == 'true') {
            $('#modal_form').html('<br /><br /><div style="text-align:center"><h1>Ваша заявка успешно отправлена!</h1><h3>Мы свяжемся с вами в ближайшее время</h3><br /><br /><br /></div>');
            $('.modal_form_title').remove();
        } else {

        }
        },"json");
        return false;
});
$('.consultation_form ').on('submit', function(e){
    e.preventDefault();
    var data={};
    data.name=$('.input_name').val();
    data.tel=$('.input_tel').val();

    $.post('../mailer/call_mailer.php',data,function(response){
        if(response.status == 'true') {
            $('#submit_modal').addClass('show');
            new bootstrap.Modal(document.getElementById('submit_modal')).show();
            console.log(data.tel);
        } else {

        }

    },"json");
    return false;
});
$('.price_form ').on('submit', function(e){
    e.preventDefault();
    var data={};
    data.tel=$('.price_tel').val();
    $.post('../mailer/price_mailer.php',data,function(response){
        if(response.status == 'true') {
            $('#submit_modal').addClass('show');
            new bootstrap.Modal(document.getElementById('submit_modal')).show();
            console.log(data.tel);
        } else {

        }

    },"json");
    return false;
});
$('.footer_form ').on('submit', function(e){
    e.preventDefault();
    var data={};
    data.tel=$('.footer_name').val();
    data.name=$('.footer_tel').val();
    data.question=$('.footer_question').val();

    $.post('../mailer/question_mailer.php',data,function(response){
        if(response.status == 'true') {
            $('#submit_modal').addClass('show');
            new bootstrap.Modal(document.getElementById('submit_modal')).show();
            console.log(data.tel);
        } else {

        }
    },"json");
    return false;
});