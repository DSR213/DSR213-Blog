//生成用于储存页面宽高信息的空变量
var pageWidth;
var pageHeight;

//判断竖屏导航栏显示状态
var hiddenSwitch = new Boolean();

//判断页面比例
function flex() {
    pageWidth = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight;

    //部分浏览器使用以上获取页面宽高的方法可能失效，以下代码用于防止获取宽高失败
    (pageWidth == 0) ? (pageWidth = document.body.clientWidth) : '';
    (pageHeight == 0) ? (pageHeight = document.body.clientHeight) : '';
}

//引导页适配
function guidePage() {
    flex();
    (pageWidth <= pageHeight) ?
        [($('#info').css('margin', '0 50px 30px 50px')), ($('#cardBox').css('flex-direction', 'column')), ($('#myImg').css('margin', '30px 50px 30px 50px'))] :
        [($('#info').css('margin', '30px 30px 30px 0')), ($('#cardBox').css('flex-direction', 'row')), ($('#myImg').css('margin', '30px'))];
}

//侧边栏显示&隐藏
$('#hiddenguide').click(function () {
    (hiddenSwitch == true)
        ?
        [($('#guideothers').css('display', 'none')),
        ($('#guideoptions').animate({
            'left': '-61.8%'
        }, 150, false).clearQueue()),
        hiddenSwitch = false]
        :
        [($('#guideothers').css('display', 'block')),
        ($('#guideoptions').animate({
            'left': '0'
        }, 150, false).clearQueue()),
        hiddenSwitch = true]
});
$('#guideothers').click(function () {
    hiddenSwitch = false,
        ($('#guideoptions').animate({
            'left': '-61.8%'
        }, 150, false).clearQueue()),
        ($(this).css('display', 'none'))
});

//博客首页适配
function blogPage(){
    flex();
    ((pageWidth <= pageHeight && pageHeight > 1024)||(pageWidth <= 1024)) ?
        //-----竖屏状态-----
        [($('#container').css({
                'flex-direction':'column-reverse',
                'width':'100%',
        })),
            ($('#side').css({
                'position':'relative',
                'width':'100%',
                'top':'0'
            })),
            ($('#navBox').css('width','100%')),
            ($('#content').css({
                'width':'100%',
                'padding':'0 1rem',
                'margin-right':'0',
            })),
            ($('#guide').css('display','none')),
            ($('#hiddenguide').css('display','block')),
            ($('#logo').css({
                'position':'absolute',
                'left':'50%',
                'transform':'translateX(-50%)',
            }))
        ] :
        //-----横屏状态-----
        [($('#container').css({
                'flex-direction':'row',
                'width':'64rem',
        })),
        ($('#side').css({
                'position':'sticky',
                'width':'13rem',
                'padding':'0',
                'top':'4rem'
            })),
            ($('#navBox').css('width','64rem' )),
            ($('#content').css({
                'width': '48rem',
                'padding': '0',
                'margin-right':'1rem',
            })),
            ($('#guide').css('display', 'block')),
            ($('#hiddenguide').css('display', 'none')),
            ($('#logo').css({
                'position': 'relative',
                'left': '0',
                'transform': 'translateX(0)',
            })),
            ($('#guideothers').css('display', 'none')),
            ($('#guideoptions').animate({
                'left': '-65%'
            }, 100).clearQueue()),
            hiddenSwitch = false
        ];
}

