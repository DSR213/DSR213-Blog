//-----移动端页面适配-----
//初始化执行
blogPage();

//监听页面大小，根据页面比例执行
$(window).resize(function () {
    blogPage();
});