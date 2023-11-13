/* 작성폼 */
    //TinyMCE init 스크립트 추가 
    tinymce.init({
        selector: 'textarea#tiny'
    });

/* 레시피 글 */
    //답글 달기 클릭 시 댓글 창 보이기
    $(document).ready(function() {
        $("#btn_reply").click(function() {
            $("#replybox").toggle();
        });
    });

