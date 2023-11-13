$(function(){
    //버튼 그룹 보기, 숨기기
    $('#showChk').click(function(){
        $(this).parent().addClass('hide').next().removeClass('hide');
        $('.listItem .chkWrap').css('display','block');
    });
    $('#chkCancle').click(function(){
        $(this).parent().addClass('hide').prev().removeClass('hide');
        $('.listItem .chkWrap').css('display','none');
    });

    //체크박스 전체 선택
    $("#allChk").click(function() {
		if($("#allChk").is(":checked")){
            $("input[name=chkItem]").prop("checked", true);
        }else {
            $("input[name=chkItem]").prop("checked", false);
        }
	});
	$("input[name=chkItem]").click(function() {
		var total = $("input[name=chkItem]").length;
		var checked = $("input[name=chkItem]:checked").length;

		if(total != checked){
            $("#allChk").prop("checked", false);
        } else{
            $("#allChk").prop("checked", true); 
        }     
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

    /*마이페이지 - 정보수정페이지*/
    //이메일
    
        $('#edit_email_input_choose').on('change', function () {
            let value = $('#edit_email_input_choose option:selected').text();
            if (value == '직접입력') {
                $('#edit_email_2').attr('disabled', false);
                $('#edit_email_2').val('');
            } else {
                $('#edit_email_2').attr('disabled', true);
                $('#edit_email_2').val(value);
            }
        })
});

//비밀번호
    //중복확인 체크
    //비밀번호 정규식
    var password_rule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    //비밀번호 체크
    function edit_complete_btn(){
        if ($('#edit_pwd').val() == '') {
            $('#edit_warning_pwd').css('display', 'block');
            $('#edit_pwd').css('border-color','red');
        } else {
            $('#edit_warning_pwd').css('display', 'none');
            if(!password_rule.test($('#edit_pwd').val())){
                $('#edit_warning_pwd_rule').css('display', 'block');
                $('#edit_pwd').css('border-color','red');
            }else{
                $('#edit_warning_pwd_rule').css('display', 'none');
                $('#edit_pwd').css('border-color','black');
            }
        }
        //비밀번호확인 체크
        if(!($('#check_pwd').val()==$('#edit_pwd').val())){
            $('#edit_warning_pwd_check').css('display','block')
            $('#check_pwd').css('border-color','red');
        }else{
            $('#edit_warning_pwd_check').css('display','none')
            $('#check_pwd').css('border-color','black');
        }
    }

