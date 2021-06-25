// 修改全屏显示状态
$('.fullScreenButton').click(function () {
  $('article').toggleClass('full-screen_active bg-light border p-4');
  $('.fullScreenButton').toggleClass('full-screen_active');
  $('.fullScreenButton').toggleClass('d-none');
  $('body').toggleClass('overflow-hidden');
});
