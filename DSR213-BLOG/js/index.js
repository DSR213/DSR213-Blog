//-----移动端页面适配-----
//判断页面比例
function flex() {
    var row = document.documentElement.clientWidth;
    var column = document.documentElement.clientHeight;

    (row == 0) ? (row = document.body.clientWidth) : '';
    (column == 0) ? (column = document.body.clientHeight) : '';

    (row <= column) ? 
        [($('#info').css('margin', '0 50px 30px 50px')), ($('#cardBox').css('flex-direction', 'column')), ($('#myImg').css('margin', '30px 50px 30px 50px'))] :
        [($('#info').css('margin', '30px 30px 30px 0')), ($('#cardBox').css('flex-direction', 'row')), ($('#myImg').css('margin', '30px'))];
}

//初始化执行flex方法
flex();

//监听页面大小，根据页面比例执行flex方法
$(window).resize(function(){
    flex();
});