// let masonry = $.ias({
//   container: ".masonry_article",//包含所有文章的元素
//   item: ".masonry_item", //对应的每篇文章元素
//   pagination: ".masonry_pager", //对应下面的分页元素
//   next: ".masonry_next" //下一页元素
// });
// // 加载效果
// masonry.extension(new IASSpinnerExtension({
//   html: '<div class="loader"></div>'
// }));
// // 加载状态
// masonry.extension(new IASTriggerExtension({
//   text: '点击加载更多', //此选项为需要点击时的文字
//   html: '<p class="2" style="text-align: center; cursor: pointer;"><a>{text}</a></p>',
//   offset: !1, //设置此项，如 offset:2 页之后需要手动点击才能加载，offset:!1 则一直为无限加载
// }));
// // 加载完·
// masonry.extension(new IASNoneLeftExtension({
//   text: '已经加载完所有页面', // 加载完成时的提示
//   html: '<p class="2" style="text-align: center; cursor: pointer;"><a>{text}</a></p>',
// }));


let ias = new InfiniteAjaxScroll('.masonry_article', {
  item: ".masonry_item", // 对应的每篇文章元素
  pagination: ".masonry_pager", // 对应下面的分页元素
  next: ".masonry_next", // 下一页元素
  spinner: {
    // element to show as spinner
    element: '.masonry_loader',
    delay: 1000,
    show: function (element) {
      element.style.opacity = '1'; // default behaviour

    },
    hide: function (element) {
      element.style.opacity = '0'; // default behaviour
    }
  },
  // trigger: {
  //   element: '.masonry_trigger',
  //   when: (pageIndex) => pageIndex >= 0,
  // },
})
// ias.on('last', function () {
//   let el = document.querySelector('.masonry_no-more');
//   el.style.opacity = '1';
// });
//
// ias.on('page', (e) => {
//   document.title = e.title;
//   let state = history.state;
//   history.replaceState(state, e.title, e.url);
// });
// ias.on('page', (event) => {
//   $grid.masonry('layout');
// });
