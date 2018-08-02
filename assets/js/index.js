$(function(){
    var friendLinkParent = $('.friend-link');//友情链接挂载ele
    var authorlistH = $('.ar-author-list').height() + 30//;邮编作者列表高度（加上padding）
    
    //24节气 + 法定节假日
    var jie_ri = [
        {'time':'0204', 'name':'立春',  'en':'Spring begins',   'des':'东风吹散梅梢雪，一夜挽回天下春',           'banner':''},//立春
        {'time':'0219', 'name':'雨水',  'en':'The rains',       'des':'天将化雨舒清景，萌动生机待绿田',           'banner':''},//雨水
          
        {'time':'0305', 'name':'惊蛰',  'en':'Insects awake',     'des':'一阵催花雨，数声惊蛰雷',                'banner':''},//惊蛰
        {'time':'0321', 'name':'春分',  'en':'Vernal Equinox',    'des':'天将小雨交春半，谁见枝头花历乱',         'banner':''},//春分
        {'time':'0405', 'name':'清明',  'en':'Clear and bright',  'des':'借问酒家何处有? 牧童遥指杏花村',         'banner':''},//清明
        {'time':'0420', 'name':'谷雨',  'en':'Grain rain',        'des':'花木含甘露，岂非时节好',                 'banner':''},//谷雨
  
        {'time':'0505', 'name':'立夏',  'en':'Summer begins',     'des':'云收雨过波添，楼高水冷瓜甜，绿树阴垂画檐', 'banner':''},//立夏
        {'time':'0521', 'name':'小满',  'en':'Grain buds',        'des':'夜莺啼绿柳，皓月醒长空',                 'banner':''},//小满
        {'time':'0606', 'name':'芒种',  'en':'Grain in ear',      'des':'时雨及芒种，四野皆插秧',                 'banner':''},//芒种
        {'time':'0621', 'name':'夏至',  'en':'Summer solstice',   'des':'夏至不锄根边草，如同养下毒蛇咬',           'banner':''},//夏至
          
        {'time':'0707', 'name':'小暑',  'en':'Slight heat',       'des':'倏忽温风至，因循小暑来',                 'banner':''},//小暑
        {'time':'0723', 'name':'大暑',  'en':'Great heat',        'des':'何以销烦暑，端居一院中',                 'banner':''},//大暑
        {'time':'0807', 'name':'立秋',  'en':'Autumn begins',     'des':'秋风吹雨过南楼，一夜新凉是立秋',           'banner':''},//立秋
        {'time':'0823', 'name':'处暑',  'en':'Stopping the heat', 'des':'处暑无三日，新凉直万金',                  'banner':''},//处暑
          
        {'time':'0908', 'name':'白露',  'en':'White dews',        'des':'蒹葭苍苍，白露为霜,所谓伊人，在水一方',     'banner':''},//白露
        {'time':'0923', 'name':'秋分',  'en':'Autumn Equinox',    'des':'燕将明日去，秋向此时分',                  'banner':''},//秋分
        {'time':'1008', 'name':'寒露',  'en':'Cold dews',         'des':'草色多寒露，虫声似故乡',                  'banner':''},//寒露
        {'time':'1023', 'name':'霜降',  'en':'Hoar-frost falls',  'des':'鸡声茅店月，人述板桥霜',                  'banner':''},//霜降
  
        {'time':'1107', 'name':'立冬',  'en':'Winter begins',     'des':'忽见桃花出小红，因惊十月起温风',           'banner':''},//立冬
        {'time':'1122', 'name':'小雪',  'en':'Light snow',        'des':'云暗初成霰点微，旋闻蔌蔌洒窗扉',           'banner':''},//小雪
        {'time':'1207', 'name':'大雪',  'en':'Heavy snow',        'des':'渺万里层云，千山暮雪，只影向谁去？',        'banner':''},//大雪
        {'time':'1222', 'name':'冬至',  'en':'Winter Solstice',   'des':'寒谷春生，熏叶气、玉筒吹谷',               'banner':''},//冬至
  
        {'time':'0105', 'name':'小寒',  'en':'Slight cold',       'des':'轻风小寒吹浪花，新柳茸茸啼乳鸦',            'banner':''},//小寒
        {'time':'0120', 'name':'大寒',  'en':'Great cold',        'des':'乃知大寒岁，农者尤苦辛',                   'banner':''},//大寒
    ];

    var season = [
        {'name':'春', 'en':'',  'des':['小楼一夜听春雨，深巷明朝卖杏花','最是一年春好处，绝胜烟柳满皇都','燕子飞时，绿水人家绕'], 'banner':['','','']},//春
        {'name':'夏', 'en':'',  'des':['小荷才露尖尖角，早有蜻蜓立上头','连雨不知春去，一晴方觉夏深','稻花香里说丰年。听取蛙声一片'], 'banner':['','','']},//夏
        {'name':'秋', 'en':'',  'des':['一声梧叶一声秋，一点芭蕉一点愁','落霞与孤鹜齐飞，秋水共长天一色','山远天高烟水寒，相思枫叶丹'], 'banner':['','','']},//秋
        {'name':'冬', 'en':'',  'des':['北国风光，千里冰封，万里雪飘','山回路转不见君，雪上空留马行处','欲将轻骑逐，大雪满弓刀'], 'banner':['','','']},//冬
    ]
    //设置日历
    setBannerDate();
    //设置颜色随机
    colorRadom($('.contact-item'), 'color'); 
    // colorRadom($('.post-full-header,.post-full-content'), 'border-color');    //文章标题和内容之间的线 
    colorRadom($('.blog-footer-new'), 'border-color'); //底部
    colorRadom($('.to-top-container'), 'background-color'); //返回顶部
    colorRadom($('.ar-tag-items'), 'background-color'); //云标签
    colorRadom($('.ar-item-title'), 'border-color'); //右边标题

    // 首页背景banner
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        speed: 1000,
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable :true,
        // },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //搜索按钮自动聚焦
    $('.icon-search').parent().hover(
        function(){
            $('#search-field').focus();
        },
        function(){
            $('#search-field').blur();
        }
    );

    //搜索插件使用
    $("#search-field").ghostHunter({
        results : "#results",
        includepages : true,//包含静态页面
        info_template: "<h5 class='res-title'>共{{amount}} 篇相关文章</h5>",
        onKeyUp : true,
        result_template:"<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'>{{title}}</a>",
    });

    //=============底部信息=============

    // 说明
    if( typeof declarationTxt=="defined" && declarationTxt != ''){
        $('.declaration').text(declarationTxt);
    }


    //挂载友情链接
    if(typeof linkArr=="defined" && linkArr.length > 0){
        friendLinkParent.find('a').remove();
        for(var i = 0; i < linkArr.length; i++){
            friendLinkParent.append('<a href="'+ linkArr[i].url +'" target="_blank">'+ linkArr[i].name +'</a>&nbsp;&nbsp;');
        }
    }


    //返回顶部
    $('.to-top-container').click(function(){
        $('body,html').animate({scrollTop: 0}, 300);
    });

    var toTopBtn = $('.to-top-container');
    var persnalPane = $('.article-right-box .personal');
    //监听滚动
    var aTop;
    $(window).scroll(function(){
        var topSize = $(window).scrollTop();
        aTop = topSize;
        // console.log(topSize);

        //回到顶部判断
        if(topSize > 630){
            toTopBtn.addClass('show');
        }else{
            toTopBtn.removeClass('show');
        }

        //我的资料是否收起 
        if(topSize >= 529+authorlistH && $('.article-right-box').length > 0){
            var leftPosition = $('.article-right-box').offset().left;
            $('.article-right-box').addClass('position-fixed').css({'left': leftPosition,'top':-authorlistH+30});
        }else if(topSize < 529+authorlistH && $('.article-right-box').length > 0){
            $('.article-right-box').removeClass('position-fixed');
        }

    });

    //滚动自动加载
    $('.article-left-box').infiniteScroll({
        path: '.older-posts',//下一页按钮
        append: '.articale-item-box',//循环父级容器
        status: '.page-load-status',//加载中、结束、报错页面
        hideNav: '.pagination'//隐藏起来的翻页控件
    });
});

// 随机颜色
var colorArr = [
    '#663ab6',
    '#00bbd3',
    '#f34236',
    '#9b27af',
    '#2195f2',
    '#009587',
    '#4bae4f',
    '#fe9700',
    '#fe5622',
    '#3e50b4',
    '#ccdb39',
    '#fe5622',
    '#fec007',
    '#03a8f3',
    '#8ac249',
    '#5f7c8a',
];
function colorRadom(secector, type) {
    var arr = [];//存放随机数的数组
    var acolorLen = colorArr.length;//数组长度，也用来限制范围
    var arrLen = secector.length;//数组长度，也用来限制范围
    var radomNum = parseInt(Math.random() * acolorLen);
    for (var i = 0; i < arrLen; i++) {
        secector.eq(i).css(type, colorArr[radomNum]);
        if ((radomNum + 1) > colorArr.length - 1) {
            radomNum = 0;
        } else {
            radomNum++;
        }
    }
}
// colorRadom($('.contact-item'), 'color');
// colorRadom($('.aib-tag-item'), 'border-color');
// colorRadom($('.chip'), 'background');

//国历
function setBannerDate() {
    var myDate = new Date();
    var thisYear = myDate.getFullYear();
    var thisMonth = myDate.getMonth() + 1;
    var thisDate = myDate.getDate() <= 9 ? '0'+ myDate.getDate() : myDate.getDate();
    var monthWidthZero = thisMonth <= 9 ? '0'+ thisMonth : thisMonth;
    var sueForJieQi = monthWidthZero.toString() + thisDate.toString();
    console.log(sueForJieQi);
    $('.data').text(thisDate + '/');
    $('.guoli-month').text(thisMonth + '月');
    $('.guoli-year').text(thisYear + '');

    
}
// 首页日历函数 网上找的代码 哈哈哈
var CalendarData = new Array(100);
var madd = new Array(12);
var tgString = "甲乙丙丁戊己庚辛壬癸";//天干
var dzString = "子丑寅卯辰巳午未申酉戌亥";//地支
var numString = "一二三四五六七八九十";
var monString = "正二三四五六七八九十冬腊";
var weekString = "日一二三四五六";
var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYear, cMonth, cDay, TheDate;
CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;

function GetBit(m, n) {
    return (m >> n) & 1;
}

function e2c() {
    TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
    var total, m, n, k;
    var isEnd = false;
    var tmp = TheDate.getYear();
    if (tmp < 1900) {
        tmp += 1900;
    }
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;

    if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
        total++;
    }
    for (m = 0; ; m++) {
        k = (CalendarData[m] < 0xfff) ? 11 : 12;
        for (n = k; n >= 0; n--) {
            if (total <= 29 + GetBit(CalendarData[m], n)) {
                isEnd = true; break;
            }
            total = total - 29 - GetBit(CalendarData[m], n);
        }
        if (isEnd) break;
    }
    cYear = 1921 + m;
    cMonth = k - n + 1;
    cDay = total;
    if (k == 12) {
        if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth = 1 - cMonth;
        }
        if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth--;
        }
    }
}

function GetcDateString() {
    var tmp = "";
    tmp += tgString.charAt((cYear - 4) % 10);
    tmp += dzString.charAt((cYear - 4) % 12);
    tmp += "(";
    tmp += sx.charAt((cYear - 4) % 12);
    tmp += ")年 ";
    if (cMonth < 1) {
        tmp += "(闰)";
        tmp += monString.charAt(-cMonth - 1);
    } else {
        tmp += monString.charAt(cMonth - 1);
    }
    tmp += "月";
    tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
    if (cDay % 10 != 0 || cDay == 10) {
        tmp += numString.charAt((cDay - 1) % 10);
    }
    return tmp;
}

function GetLunarDay(solarYear, solarMonth, solarDay) {
    //solarYear = solarYear<1900?(1900+solarYear):solarYear;
    if (solarYear < 1921 || solarYear > 2020) {
        return "";
    } else {
        solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
        e2c(solarYear, solarMonth, solarDay);
        return GetcDateString();
    }
}

var D = new Date();
var yy = D.getFullYear();
var mm = D.getMonth() + 1;
var dd = D.getDate();
var ww = D.getDay();
var ss = parseInt(D.getTime() / 1000);
if (yy < 100) yy = "19" + yy;
$('.nongli').text(GetLunarDay(yy, mm, dd));