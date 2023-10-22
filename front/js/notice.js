$(function(){
    //공지사항 리스트 토글
    $('.noticeItem').click(function(){
        let bro = $(this).siblings();
        let cont = $(this).children('.contentBox');
        bro.children('.contentBox').hide();
        cont.slideToggle(300);
    });
});