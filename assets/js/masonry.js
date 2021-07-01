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
});
ias.on('last', function () {
  let el = document.querySelector('.masonry_no-more');
  el.style.opacity = '1';
});

ias.on('page', (e) => {
  document.title = e.title;
  let state = history.state;
  history.replaceState(state, e.title, e.url);
});
