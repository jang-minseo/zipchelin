$(function(){
    //리스트 선택 - 체크박스
    $('#showChk').click(function(){
        $(this).html('취소').attr('id','chkCancle');
        $('#allChk, #listDel,.chkWrap').css('display','block');
    });
    //리스트 선택 취소 - 체크박스 취소
    $('#chkCancle').click(function(){
        $(this).html('<button class="btnBdGray" id="showChk">선택</button>');
    });

    //체크박스 전체 선택
    $('#allChk').click(function(){   
        $('.chkBox').prop('checked', true);       
    });

    //삭제 버튼 - 모달
    $('#listDel').click(function(){
        $('#modal').css('display','block');
    })


    //비밀번호 보기/숨기기
    $('.pwdToggle').on('click',function(){
        if($('#pwdCheck').attr("type") == "password"){
            $('#pwdCheck').attr("type", "text");
            $(this).html('visibility');
        }else{
            $('#pwdCheck').attr("type", "password");
            $(this).html('visibility_off');
        }
    });
});