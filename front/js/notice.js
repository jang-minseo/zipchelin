$(function(){
    //공지사항 리스트 토글
    $('.noticeItem').click(function(){
        let bro = $(this).siblings();
        let cont = $(this).children('.contentBox');
        bro.children('.contentBox').slideUp(300,function(){
            $(this).prev().children('.icon').html('<span class="icon material-symbols-outlined">keyboard_arrow_down</span>');
        });
        cont.slideDown(300, function(){
            $(this).prev().children('.icon').html('<span class="icon material-symbols-outlined">keyboard_arrow_up</span>');
        });
    });
});