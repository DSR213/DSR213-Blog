//-----移动端页面适配-----
//初始化执行
guidePage();

//监听页面大小，根据页面比例执行
$(window).resize(function(){
    guidePage();
});