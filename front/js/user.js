/* 아이디/비밀번호 찾기 */

$(function () {
    //아이디찾기/비밀번호찾기 클릭시 효과
    $('#find_id_button').add('#find_pwd_button').on('click', function () {
        let act = $(this).html();
        $('#target').html(act);

    })
    $('.id_label').css('font-weight', 'bold');
    $('.id_label').on('click', function () {
        $('.id_label').css('font-weight', 'bold');
        $('.pwd_label').css('font-weight', 'normal');
    })
    $('.pwd_label').on('click', function () {
        $('.pwd_label').css('font-weight', 'bold');
        $('.id_label').css('font-weight', 'normal');
    })
    $('#email_input_choose').click(function () {
        let email_sec = $(this).val();
        if (email_sec == '직접입력') {
            $('#email_2').val('');
            $('#email_2').attr('disabled', false);
        } else {
            $('#email_2').attr('disabled', true);
            $('#email_2').val(email_sec);
        }
    })
    $('input[name=find]').css('color', 'red')
})

function form_submit() {//제출 메서드
    let email_1 = $('#email_1').val();
    let email_2 = $('#email_2').val();
    let name = $('#name').val();

    //이메일 공백 확인
    if (email_1 == '' || email_2 == '') {
        $('#warning_email').css('visibility', 'visible');
        return false;
    } else {
        $('#warning_email').css('visibility', 'hidden');
    }

    //이름 공백 확인
    if (name == '') {
        $('#warning_name').css('visibility', 'visible');
        return false;
    } else {
        $('#warning_name').css('visibility', 'hidden');
    }

    //무엇을 찾는지 확인 후 action 설정 후 submit
    $('#email').val(email_1 + '@' + email_2);
    if ($("input[name='find']:checked").val() == 'finding_id') {
        $('#sign_up_form').attr('action', 'finding_id');
    } else if ($("input[name='find']:checked").val() == 'finding_pwd') {
        $('#sign_up_form').attr('action', 'finding_pwd');
    }
    $('#sign_up_form').submit();
}



/* 회원가입 */

//이메일
$(function () {
    $('#email_input_choose').on('change', function () {
        let value = $('#email_input_choose option:selected').text();
        if (value == '직접입력') {
            $('#email_2').attr('disabled', false);
            $('#email_2').val('');
        } else {
            $('#email_2').attr('disabled', true);
            $('#email_2').val(value);
        }
    })
})
function form_submit() {
    let check_count = 0;
    var id_rule = /^[A-Za-z0-9]{6,12}$/;
    //id 체크
    if ($('#id').val() == '' || !id_rule.test($('#id').val())) {
        $('#warning_id').css('visibility', 'visible');
    } else {
        $('#warning_id').css('visibility', 'hidden');
        check_count++;
    }

    //id 중복확인 체크
    check_count++;

    //비밀번호 정규식
    var password_rule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    //비밀번호 체크
    if ($('#pwd').val() == '' || !password_rule.test($('#pwd').val())) {
        $('#warning_pwd').css('visibility', 'visible');
    } else {
        $('#warning_pwd').css('visibility', 'hidden');
        check_count++;
    }
    //비밀번호확인 체크
    if ($('#pwd2').val() != $('#pwd').val()) {
        $('#warning_pwd2').css('visibility', 'visible');
    } else {
        $('#warning_pwd2').css('visibility', 'hidden');
        check_count++;
    }
    //이름 체크
    if ($('#name').val() == '') {
        $('#warning_name').css('visibility', 'visible');
    } else {
        $('#warning_name').css('visibility', 'hidden');
        check_count++;
    }
    //이메일 체크
    if ($('#email_1').val() == '' || $('#email_2').val() == '') {
        $('#warning_email').css('visibility', 'visible');
    } else {
        $('#warning_email').css('visibility', 'hidden');
        let email = $('#email_1').val() + '@' + $('#email_2').val();
        $('#email').val(email);
        check_count++;
    }
    //전화번호 정규식
    var tel_rule = /^\d{3}-\d{3,4}-\d{4}$/;
    //전화번호 체크
    if ($('#tel').val() == '' || !tel_rule.test($('#tel').val())) {
        $('#warning_tel').css('visibility', 'visible');
    } else {
        $('#warning_tel').css('visibility', 'hidden');
        check_count++;
    }
    //약관동의여부 체크
    if ($('input[id=agree]').is(':checked')) {
        $('#warning_agree').css('visibility', 'hidden');
        check_count++;
    } else {
        $('#warning_agree').css('visibility', 'visible');
    }
    //모두 체크 되어있을 시 제출
    if (check_count == 8) {
        $('#sign_up_form').attr('action', '#').submit();
    }
}
