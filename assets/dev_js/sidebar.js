// 读取本地存储的状态
$ ('#sidebar').addClass (localStorage.sidebarStatus);
// 修改侧栏显示状态
$ ('.sidebarButton').click (function () {
    $ ('.sidebarButton').toggleClass ('d-none');
    $ ('#sidebar').toggleClass ('d-none');
    if (typeof localStorage.sidebarStatus === 'undefined') {
        localStorage.sidebarStatus = 'd-none';
    } else {
        localStorage.removeItem ('sidebarStatus');
    }
});
