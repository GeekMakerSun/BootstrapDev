// $(".articleAdd img").addClass("img-fluid img-thumbnail hover-shadow");
// $(content).replaceAll("<h1>测试</h1>");
// $(".articleAdd").each(function () {
//     var src = $(this).find("img").attr("src");    //获取图片地址
//     var url = "https://oktools.net/ph/200x200?t=01";    //固定地址
//     var src01 = "https://oktools.net/ph/200x200?t=02";    //没有图片时的地址
//     if (src == src01) {
//         $(this).find("img").attr("src", url);   //对应地址替换
//     }
// });
// var Title = $(".articleAdd .card-title").text()
const pagesTitle = '修改为单页标题';
// 重构img标签
$('.articleAdd img').replaceWith(function () {
    const imgSrc = $(this).attr('src');
    return (
        '<img alt="" src=' + imgSrc + " class='img-fluid img-thumbnail shadow-2-strong d-block mx-auto my-1' alt=" + pagesTitle + ' title=' + Title + ' />'
    );
})
