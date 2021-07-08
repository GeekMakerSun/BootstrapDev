// 修改全屏显示状态
$ ('.fullScreenButton').click (function () {
    let article = $ ('article');
    let fullScreenButton = $ ('.fullScreenButton');
    let body = $ ('body');
    article.toggleClass ('full-screen_active bg-light border p-4');
    fullScreenButton.toggleClass ('full-screen_active');
    fullScreenButton.toggleClass ('d-none');
    body.toggleClass ('overflow-hidden');
});
