/*탭 부분*/
$(function() {
    $('ul.tabGroup li').click(function() {
        var actTab = $(this).attr('data-tab');
        $('ul.tabGroup li').removeClass('active'); 
        $('.tabContainer').removeClass('on');
        $(this).addClass('active');
        $('#' + actTab).addClass('on');
    })
}); 

/* 하트 토글 버튼 */
document.querySelectorAll('.fa-regular.fa-heart').forEach(function (icon) {
    icon.addEventListener('click', function () {
      this.classList.toggle('fa-regular');
      this.classList.toggle('fa-solid');
    });
  });