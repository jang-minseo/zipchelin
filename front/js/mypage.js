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
});

