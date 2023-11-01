$(function(){
    //리스트 선택 - 체크박스
    /* $('#showChk').on('click',function(){
        $(this).html('취소').attr('id','chkCancle');
        $('#allChk, #listDel,.chkWrap').css('display','block');
    }); */

    //리스트 선택 취소 - 체크박스 취소
    /* $('#chkCancle').click(function(){
        $(this).html('<button class="btnBdGray" id="showChk">선택</button>');
    }); */
    $(document).on("click", "#showChk", function() {
        $(this).css('display','none');
        $('#allChk, #listDel, #chkCancle, .chkWrap').css('display','block');
    });

    $('#chkCancle').click(function(){
        $('#allChk, #listDel, #chkCancle, .chkWrap').css('display','none');
        $('#showChk').css('display','block');
    });

    //체크박스 전체 선택
    $('#allChk').click(function(){   
        $('.chkBox').prop('checked', true);       
    });

    //삭제 버튼 - 모달
    $('#listDel').click(function(){
        $('#modal').css('display','block');
    });


    //내가 쓴글 - 탭
    $('ul.tabGroup a').click(function(){
        var tab_id = $(this).attr('data-tab');
     
        $('ul.tabGroup a').removeClass('active');
        $('.tabCont').removeClass('show');
     
        $(this).addClass('active');
        $("#"+tab_id).addClass('show');

        return false;
    });


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