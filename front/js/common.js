$(function(){
    $("header").load("/front/html/layout/header.html");
    $("footer").load("/front/html/layout/footer.html");   

    //비밀번호 보기/숨기기
    $('.pwdToggle').on('click',function(){
        let input=$(this).prev('#pwdCheck, #sign_pwd, #sign_pwd2, #login_password');
        if($(input).attr("type") == "password"){
            $(input).attr("type", "text");
            $(this).html('visibility');
        }else{
            $(input).attr("type", "password");
            $(this).html('visibility_off');
        }
    });
});

//리스트 삭제 확인 modal
function modalHide(){
    $('#modal').hide();
};