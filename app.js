$(document).ready(function(){
    $('.side-bar-btn-container').on('click', (e)=>{
        if($('.side-bar-btn-container .side-bar').hasClass('active')){
            $('.side-bar-btn-container .side-bar').removeClass('active');

        }else{
            $('.side-bar-btn-container .side-bar').addClass('active');
        }
    });
    
    $.fn.dayToday = function(){
        var d = new Date(),
            n = d.getDay(),
            day = 'monday',
            dt = new Date();
        
        if(n === 0){
            day = 'sunday';
            $('.subject-main-container').addClass('d-none');
        }if(n === 1){
            day = 'monday';
            $('.subject-main-container').addClass('d-none');
            $('.monday').removeClass('d-none');
        }if(n === 2){
            day = 'tuesday';
            $('.subject-main-container').addClass('d-none');
            $('.tuesday').removeClass('d-none');
        }if(n === 3){
            day = 'wednesday';
            $('.subject-main-container').addClass('d-none');
            $('.wednesday').removeClass('d-none');
        }if(n === 4){
            day = 'thursday';
            $('.subject-main-container').addClass('d-none');
            $('.thursday').removeClass('d-none'); 
        }if(n === 5){
            day = 'friday';
            $('.subject-main-container').addClass('d-none');
            $('.friday').removeClass('d-none');
        }if(n === 6){
            day = 'saturday';
            $('.subject-main-container').addClass('d-none');
        }

        $('.day-container .heading').text(day);
    }

    $.fn.dayToday();

});