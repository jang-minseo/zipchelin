/* 아이디/비밀번호 찾기 */

$(function () {
    //아이디찾기/비밀번호찾기 클릭시 효과
    $('#find_id_button').add('#find_pwd_button').on('click', function () {
        let act = $(this).html();
        $('#find_target').html(act);

    })
    $('.find_id_label').css('font-weight', 'bold');
    $('.find_id_label').on('click', function () {
        $('.find_id_label').css('font-weight', 'bold');
        $('.find_pwd_label').css('font-weight', 'normal');
    })
    $('.find_pwd_label').on('click', function () {
        $('.find_pwd_label').css('font-weight', 'bold');
        $('.find_id_label').css('font-weight', 'normal');
    })

    $('#find_email_input_choose').click(function () {
        let email_sec = $(this).val();
        if (email_sec == '직접입력') {
            $('#find_email_2').val('');
            $('#find_email_2').attr('disabled', false);
        } else {
            $('#find_email_2').attr('disabled', true);
            $('#find_email_2').val(email_sec);
        }
    })
    $('input[name=find]').css('color', 'red')
})

function find_form_submit() {//제출 메서드
    let email_1 = $('#find_email_1').val();
    let email_2 = $('#find_email_2').val();
    let name = $('#find_name').val();
    let find_check_count=0;

    //이메일 공백 확인
    if (email_1 == '' || email_2 == '') {
        $('#find_warning_email').css('visibility', 'visible');
    } else {
        $('#find_warning_email').css('visibility', 'hidden');
        find_check_count++;
    }

    //이름 공백 확인
    if (name == '') {
        $('#find_warning_name').css('visibility', 'visible');
    } else {
        $('#find_warning_name').css('visibility', 'hidden');
        find_check_count++;
    }

    //무엇을 찾는지 확인 후 action 설정 후 submit
    if(find_check_count==2){
            $('#find_email').val(email_1 + '@' + email_2);
        if ($("input[name='find']:checked").val() == 'finding_id') {
            $('#find_sign_up_form').attr('action', 'finding_id');
        } else if ($("input[name='find']:checked").val() == 'finding_pwd') {
            $('#find_sign_up_form').attr('action', 'finding_pwd');
        }
        $('#find_sign_up_form').submit();
    }
}



/* 회원가입 */

//이메일
$(function () {
    $('#sign_email_input_choose').on('change', function () {
        let value = $('#sign_email_input_choose option:selected').text();
        if (value == '직접입력') {
            $('#sign_email_2').attr('disabled', false);
            $('#sign_email_2').val('');
        } else {
            $('#sign_email_2').attr('disabled', true);
            $('#sign_email_2').val(value);
        }
    })
})

function sign_form_submit() {
    let sign_check_count = 0;
    var id_rule = /^[A-Za-z0-9]{6,12}$/;
    //id 체크
    if ($('#sign_id').val() == '' || !id_rule.test($('#sign_id').val())) {
        $('#sign_warning_id').css('visibility', 'visible');
    } else {
        $('#sign_warning_id').css('visibility', 'hidden');
        sign_check_count++;
    }

    //id 중복확인 체크
    sign_check_count++;

    //비밀번호 정규식
    var password_rule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    //비밀번호 체크
    if ($('#sign_pwd').val() == '' || !password_rule.test($('#sign_pwd').val())) {
        $('#sign_warning_pwd').css('visibility', 'visible');
    } else {
        $('#sign_warning_pwd').css('visibility', 'hidden');
        sign_check_count++;
    }
    //비밀번호확인 체크
    if ($('#sign_pwd2').val() != $('#sign_pwd').val()) {
        $('#sign_warning_pwd2').css('visibility', 'visible');
    } else {
        $('#sign_warning_pwd2').css('visibility', 'hidden');
        sign_check_count++;
    }
    //이름 체크
    if ($('#sign_name').val() == '') {
        $('#sign_warning_name').css('visibility', 'visible');
    } else {
        $('#sign_warning_name').css('visibility', 'hidden');
        sign_check_count++;
    }
    //이메일 체크
    if ($('#sign_email_1').val() == '' || $('#sign_email_2').val() == '') {
        $('#sign_warning_email').css('visibility', 'visible');
    } else {
        $('#sign_warning_email').css('visibility', 'hidden');
        let email = $('#sign_email_1').val() + '@' + $('#sign_email_2').val();
        $('#sign_email').val(email);
        sign_check_count++;
    }
    //전화번호 정규식
    var tel_rule = /^\d{3}-\d{3,4}-\d{4}$/;
    //전화번호 체크
    if ($('#sign_tel').val() == '' || !tel_rule.test($('#sign_tel').val())) {
        $('#sign_warning_tel').css('visibility', 'visible');
    } else {
        $('#sign_warning_tel').css('visibility', 'hidden');
        sign_check_count++;
    }
    //약관동의여부 체크
    if ($('input[id=sign_agree]').is(':checked')) {
        $('#sign_warning_agree').css('visibility', 'hidden');
        sign_check_count++;
    } else {
        $('#sign_warning_agree').css('visibility', 'visible');
    }
    //모두 체크 되어있을 시 제출
    if (sign_check_count == 8) {
        $('#sign_sign_up_form').attr('action', '#').submit();
    }
}
