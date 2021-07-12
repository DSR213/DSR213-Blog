//页面初始化获取当前时间
var date = new Date();
var hours = date.getHours();
var min = date.getMinutes();

//初始化模式切换图标角度
var rotate = 0;

var DarkModeSwitch = new Vue({
    el:".darkMode",
    data:{
        isLight:true
    },
    methods: {
        //手动切换日间/夜间模式
        modeSwitch:function(){
            this.isLight = !this.isLight
        }
    },
    created () {
        (hours >= 7 && hours <= 19) ? (this.isLight = true) : (this.isLight = false);
    },
    mounted () {
        //每秒判断一次当前时间
        setInterval(() => {
            hours = new Date().getHours();
            min = new Date().getMinutes();
            //若小时大于等于7，且分钟等于0，切换日间模式
            (hours >= 7 && min == 0 ) ? (this.isLight = true) : '';
            //若小时大于等于19，且分钟等于0，切换夜间模式
            (hours <= 19 && min == 0 ) ? (this.isLight = false) : '';
        }, 1000);
    }
});

