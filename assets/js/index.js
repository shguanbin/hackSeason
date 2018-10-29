$(function () {
    var friendLinkParent = $('.friend-link'); //友情链接挂载，底部
    var friendLinkParentSide = $('#friend-link-side'); //友情链接挂载，侧边
    var authorlistH = $('.ar-author-list').height() + 30; //;邮编作者列表高度（加上padding）

    // var topNemuArr = [
    //     {
    //         'name':'前端',//一级菜单名字
    //         'link':'javascript:;',//一级菜单链接 不跳转填 [javascript:;]
    //         'subMenu':{//下拉二级菜单 不需要就删除
    //             'brandSrc':'http://hackbinimg.luokangyuan.com/menu/qianduan.png',//下拉菜单标识大图 250x300
    //             'menuItems':[
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/html.png',//二级菜单图标 65x65
    //                     'itemName':'HTML',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/html/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/css.png',//二级菜单图标 65x65
    //                     'itemName':'CSS',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/css/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/js.png',//二级菜单图标 65x65
    //                     'itemName':'JavaScript',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/JavaScript/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/jq.png',//二级菜单图标 65x65
    //                     'itemName':'jQuery',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/jQuery/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/vue.png',//二级菜单图标 65x65
    //                     'itemName':'Vue',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/Vue/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/node.png',//二级菜单图标 65x65
    //                     'itemName':'HTML',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/Node/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/ng.png',//二级菜单图标 65x65
    //                     'itemName':'HTML',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/Angular/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },

    //             ]
    //         }
    //     },
    //     {
    //         'name':'后端',//一级菜单名字
    //         'link':'javascript:;',//一级菜单链接 不跳转填 [javascript:;]
    //         'subMenu':{//下拉二级菜单 不需要就删除
    //             'brandSrc':'http://hackbinimg.luokangyuan.com/menu/houtai.png',//下拉菜单标识大图 250x300
    //             'menuItems':[
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/java.png',//二级菜单图标 65x65
    //                     'itemName':'Java',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/java/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/mybatis.png',//二级菜单图标 65x65
    //                     'itemName':'Mybatis',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/mybatis/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/spring.png',//二级菜单图标 65x65
    //                     'itemName':'spring',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/spring/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/springBoot.png',//二级菜单图标 65x65
    //                     'itemName':'SpringBoot',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/springBoot/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/springCloud.png',//二级菜单图标 65x65
    //                     'itemName':'SpringCloud',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/springCloud/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 },
    //                 {
    //                     'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/linux.png',//二级菜单图标 65x65
    //                     'itemName':'Linux',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                     'itemLink':'/tag/linux/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //                 }

    //             ]
    //         }
    //     },
    // {
    //     'name':'规范',//一级菜单名字
    //     'link':'javascript:;',//一级菜单链接 不跳转填 [javascript:;]
    //     'subMenu':{//下拉二级菜单 不需要就删除
    //         'brandSrc':'http://hackbinimg.luokangyuan.com/menu/guifan.png',//下拉菜单标识大图 250x300
    //         'menuItems':[
    //             {
    //                 'itemImgSrc':'http://hackbinimg.luokangyuan.com/menu/css.png',//二级菜单图标 65x65
    //                 'itemName':'css规范',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
    //                 'itemLink':'/tag/cssgui-fan/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
    //             },
    //         ]
    //     }
    // },
    //     {
    //         'name':'随笔',//一级菜单名字
    //         'link':'/tag/sui-bi/',//一级菜单链接 不跳转填 [javascript:;]
    //     }
    // ]

    //设置顶部菜单按钮
    if (typeof topNemuArr != 'undefined') {
        setTopMenu(topNemuArr);
    }

    function setTopMenu(menuArr) {
        var rootEle = $('.menu-add-box'); //菜单挂载元素
        for (var i = 0; i < menuArr.length; i++) {
            var $subMenuRoot = $('<div class="inner sub-content"></div>'),
                $rightMenuitemBox = $('<div class="right-content"></div>'),
                subBrandImg, //下拉菜单logo
                $subMenu = $('<div class="sub-menu-box"></div>'), //二级菜单根元素
                $liEle = $('<li class="nav-" role="menuitem"></li>'); //生成菜单根元素

            $liEle.append('<a href="' + menuArr[i].link + '">' + menuArr[i].name + '</a>'); //设置一级菜单
            if (menuArr[i].subMenu) {
                subBrandImg = '<div class="left-pic middle-center">\
                <img data-src="' + menuArr[i].subMenu.brandSrc + '" alt="" srcset="">\
                </div>'
                $subMenuRoot.append(subBrandImg);

                subMenuString = ''; //二级菜单累加结果
                for (var j = 0; j < menuArr[i].subMenu.menuItems.length; j++) {
                    subMenuString += '<a href="' + menuArr[i].subMenu.menuItems[j].itemLink + '" class="mune-item">\
                        <div class="img-box middle-center">\
                            <img data-src="' + menuArr[i].subMenu.menuItems[j].itemImgSrc + '" alt="" srcset="">\
                            </div>\
                        <span>' + menuArr[i].subMenu.menuItems[j].itemName + '</span>\
                    </a>'
                }
                $rightMenuitemBox.append(subMenuString);
                $subMenuRoot.append($rightMenuitemBox);
                $subMenu.append($subMenuRoot);
                $liEle.append($subMenu);
            }

            rootEle.append($liEle);

        }
    }
    //24节气 + 法定节假日
    var jie_ri = [

        {
            'time': '0204',
            'name': '立春',
            'en': 'Spring begins',
            'des': ['东风吹散梅梢雪，一夜挽回天下春'],
            'banner': ['lichun1.jpg', 'lichun2.jpg', 'lichun3.jpg']
        }, //立春
        {
            'time': '0219',
            'name': '雨水',
            'en': 'The rains',
            'des': ['天将化雨舒清景，萌动生机待绿田'],
            'banner': ['yushui1.jpg', 'yushui2.jpg', 'yushui3.jpg']
        }, //雨水

        {
            'time': '0305',
            'name': '惊蛰',
            'en': 'Insects awake',
            'des': ['一阵催花雨，数声惊蛰雷'],
            'banner': ['jingzhe1.jpg', 'jingzhe2.jpg', 'jingzhe3.jpg']
        }, //惊蛰
        {
            'time': '0321',
            'name': '春分',
            'en': 'Vernal Equinox',
            'des': ['天将小雨交春半，谁见枝头花历乱'],
            'banner': ['chunfen1.jpg', 'chunfen2.jpg', 'chunfen3.jpg']
        }, //春分
        {
            'time': '0405',
            'name': '清明',
            'en': 'Clear and bright',
            'des': ['借问酒家何处有? 牧童遥指杏花村'],
            'banner': ['qingming1.jpg', 'qingming2.jpg', 'qingming3.jpg']
        }, //清明
        {
            'time': '0420',
            'name': '谷雨',
            'en': 'Grain rain',
            'des': ['花木含甘露，岂非时节好'],
            'banner': ['guyu1.jpg', 'guyu2.jpg', 'guyu3.jpg']
        }, //谷雨

        {
            'time': '0505',
            'name': '立夏',
            'en': 'Summer begins',
            'des': ['云收雨过波添，楼高水冷瓜甜，绿树阴垂画檐'],
            'banner': ['lixia1.jpg', 'lixia2.jpg', 'lixia3.jpg']
        }, //立夏
        {
            'time': '0521',
            'name': '小满',
            'en': 'Grain buds',
            'des': ['小满小满，谷物渐满'],
            'banner': ['xiaoman1.jpg', 'xiaoman2.jpg', 'xiaoman3.jpg']
        }, //小满
        {
            'time': '0606',
            'name': '芒种',
            'en': 'Grain in ear',
            'des': ['时雨及芒种，四野皆插秧'],
            'banner': ['mangzhong1.jpg', 'mangzhong2.jpg', 'mangzhong3.jpg']
        }, //芒种
        {
            'time': '0621',
            'name': '夏至',
            'en': 'Summer solstice',
            'des': ['夏至不锄根边草，如同养下毒蛇咬'],
            'banner': ['xiazhi1.jpg', 'xiazhi2.jpg', 'xiazhi3.jpg']
        }, //夏至

        {
            'time': '0707',
            'name': '小暑',
            'en': 'Slight heat',
            'des': ['倏忽温风至，因循小暑来'],
            'banner': ['xiaoshu1.jpg', 'xiaoshu2.jpg', 'xiaoshu3.jpg']
        }, //小暑
        {
            'time': '0723',
            'name': '大暑',
            'en': 'Great heat',
            'des': ['何以销烦暑，端居一院中'],
            'banner': ['dashu1.jpg', 'dashu2.jpg', 'dashu3.jpg']
        }, //大暑
        {
            'time': '0807',
            'name': '立秋',
            'en': 'Autumn begins',
            'des': ['秋风吹雨过南楼，一夜新凉是立秋', '山僧不解数甲子,一叶落知天下秋'],
            'banner': ['liqiu1.jpg', 'liqiu2.jpg', 'liqiu3.jpg']
        }, //立秋
        {
            'time': '0823',
            'name': '处暑',
            'en': 'Stopping heat',
            'des': ['处暑无三日，新凉直万金'],
            'banner': ['chushu1.jpg', 'chushu2.jpg', 'chushu3.jpg']
        }, //处暑

        {
            'time': '0908',
            'name': '白露',
            'en': 'White dews',
            'des': ['蒹葭苍苍，白露为霜,所谓伊人，在水一方'],
            'banner': ['bailu1.jpg', 'bailu2.jpg', 'bailu3.jpg']
        }, //白露
        {
            'time': '0923',
            'name': '秋分',
            'en': 'Autumn Equinox',
            'des': ['燕将明日去，秋向此时分'],
            'banner': ['qiufen1.jpg', 'qiufen2.jpg', 'qiufen3.jpg']
        }, //秋分
        {
            'time': '1008',
            'name': '寒露',
            'en': 'Cold dews',
            'des': ['草色多寒露，虫声似故乡'],
            'banner': ['hanlu1.jpg', 'hanlu2.jpg', 'hanlu3.jpg']
        }, //寒露
        {
            'time': '1023',
            'name': '霜降',
            'en': 'Hoar-frost falls',
            'des': ['鸡声茅店月，人迹板桥霜'],
            'banner': ['shuangjiang1.jpg', 'shuangjiang2.jpg', 'shuangjiang3.jpg']
        }, //霜降

        {
            'time': '1107',
            'name': '立冬',
            'en': 'Winter begins',
            'des': ['忽见桃花出小红，因惊十月起温风'],
            'banner': ['lidong1.jpg', 'lidong2.jpg', 'lidong3.jpg']
        }, //立冬
        {
            'time': '1122',
            'name': '小雪',
            'en': 'Light snow',
            'des': ['云暗初成霰点微，旋闻蔌蔌洒窗扉'],
            'banner': ['xiaoxue1.jpg', 'xiaoxue2.jpg', 'xiaoxue3.jpg']
        }, //小雪
        {
            'time': '1207',
            'name': '大雪',
            'en': 'Heavy snow',
            'des': ['渺万里层云，千山暮雪，只影向谁去？'],
            'banner': ['daxue1.jpg', 'daxue2.jpg', 'daxue3.jpg']
        }, //大雪
        {
            'time': '1222',
            'name': '冬至',
            'en': 'Winter Solstice',
            'des': ['寒谷春生，熏叶气、玉筒吹谷'],
            'banner': ['dongzhi1.jpg', 'dongzhi2.jpg', 'dongzhi3.jpg']
        }, //冬至

        {
            'time': '0105',
            'name': '小寒',
            'en': 'Slight cold',
            'des': ['轻风小寒吹浪花，新柳茸茸啼乳鸦'],
            'banner': ['xiaohan1.jpg', 'xiaohan2.jpg', 'xiaohan3.jpg']
        }, //小寒
        {
            'time': '0120',
            'name': '大寒',
            'en': 'Great cold',
            'des': ['乃知大寒岁，农者尤苦辛'],
            'banner': ['dahan1.jpg', 'dahan2.jpg', 'dahan3.jpg']
        }, //大寒

        //节假日
        // 建军
        {
            'time': '0801',
            'name': '建军节',
            'en': 'army day',
            'des': ['红军不怕远征难，万水千山只等闲', '男儿何不带吴钩，收取关山五十州', '自古英雄多奇志，狂揽九州苍桑月'],
            'banner': ['jianjunjie1.jpg', 'jianjunjie2.jpg', 'jianjunjie3.jpg']
        },

        //中秋节
        {
            'time': '0924',
            'name': '中秋节',
            'en': 'Mid-Autumn Festival',
            'des': ['但愿人长久，千里共婵娟', '今夜月明人尽望，不知秋思落谁家', '起舞徘徊风露下，今夕不知何夕'],
            'banner': ['zhongqiu1.jpg', 'zhongqiu2.jpg', 'zhongqiu3.jpg']
        },

        // 国庆
        {
            'time': '1001',
            'name': '国庆',
            'en': 'National Day',
            'des': ['犯我中华者，虽远必诛', '苟利国家生死以，岂因祸福避趋之！', '天行健，君子以自强不息'],
            'banner': ['guoqing1.jpg', 'guoqing2.jpg', 'guoqing3.jpg']
        },
        {
            'time': '1002',
            'name': '国庆',
            'en': 'National Day',
            'des': ['犯我中华者，虽远必诛', '苟利国家生死以，岂因祸福避趋之！', '天行健，君子以自强不息'],
            'banner': ['guoqing1.jpg', 'guoqing2.jpg', 'guoqing3.jpg']
        },
        {
            'time': '1003',
            'name': '国庆',
            'en': 'National Day',
            'des': ['犯我中华者，虽远必诛', '苟利国家生死以，岂因祸福避趋之！', '天行健，君子以自强不息'],
            'banner': ['guoqing1.jpg', 'guoqing2.jpg', 'guoqing3.jpg']
        },
        {
            'time': '1004',
            'name': '国庆',
            'en': 'National Day',
            'des': ['犯我中华者，虽远必诛', '苟利国家生死以，岂因祸福避趋之！', '天行健，君子以自强不息'],
            'banner': ['guoqing1.jpg', 'guoqing2.jpg', 'guoqing3.jpg']
        },
        {
            'time': '1005',
            'name': '国庆',
            'en': 'National Day',
            'des': ['犯我中华者，虽远必诛', '苟利国家生死以，岂因祸福避趋之！', '天行健，君子以自强不息'],
            'banner': ['guoqing1.jpg', 'guoqing2.jpg', 'guoqing3.jpg']
        },
        {
            'time': '1006',
            'name': '国庆',
            'en': 'National Day',
            'des': ['犯我中华者，虽远必诛', '苟利国家生死以，岂因祸福避趋之！', '天行健，君子以自强不息'],
            'banner': ['guoqing1.jpg', 'guoqing2.jpg', 'guoqing3.jpg']
        },
        {
            'time': '1007',
            'name': '国庆',
            'en': 'National Day',
            'des': ['犯我中华者，虽远必诛', '苟利国家生死以，岂因祸福避趋之！', '天行健，君子以自强不息'],
            'banner': ['guoqing1.jpg', 'guoqing2.jpg', 'guoqing3.jpg']
        },
    ];

    var season = [{
        'name': '春',
        'en': 'spring',
        'des': ['小楼一夜听春雨，深巷明朝卖杏花', '最是一年春好处，绝胜烟柳满皇都', '燕子飞时，绿水人家绕'],
        'banner': ['spring1.jpg', 'spring2.jpg', 'spring3.jpg']
    }, //春
    {
        'name': '夏',
        'en': 'summer',
        'des': ['小荷才露尖尖角，早有蜻蜓立上头', '连雨不知春去，一晴方觉夏深', '稻花香里说丰年。听取蛙声一片'],
        'banner': ['summer1.jpg', 'summer2.jpg', 'summer3.jpg']
    }, //夏
    {
        'name': '秋',
        'en': 'autumn',
        'des': ['一声梧叶一声秋，一点芭蕉一点愁', '落霞与孤鹜齐飞，秋水共长天一色', '山远天高烟水寒，相思枫叶丹'],
        'banner': ['autumn1.jpg', 'autumn2.jpg', 'autumn3.jpg']
    }, //秋
    {
        'name': '冬',
        'en': 'winter',
        'des': ['北国风光，千里冰封，万里雪飘', '山回路转不见君，雪上空留马行处', '欲将轻骑逐，大雪满弓刀'],
        'banner': ['winter1.jpg', 'winter2.jpg', 'winter3.jpg']
    }, //冬
    ]

    //设置日历
    setBannerDate();

    //设置季节
    setSeasion(season, jie_ri);
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
    });


    //搜索
    var allPosts = new Array();
    var searchBox = $("#search-field");
    $('#search-menu').hover(
        //鼠标覆盖
        function () {
            $.get(ghost.url.api('posts'), { limit: 'all' }).done(function (data) {
                allPosts = data.posts;
            }).fail(function (err) {
            });
            searchBox.focus();
        },
        // 鼠标离开
        function () {
            searchBox.blur();
        }
    )
    var $resTitle = $('#results,.res-title');
    var $result = $('#results');
    var str = '';//接受去除空格换行等
    var resCount = 0;//搜索统计数
    var $resCount = $('#res-count');
    var thisTxt = '';//搜索关键词
    var indexInTitle = 0;//搜索字符索引 标题
    var indexInHtml = 0;//在文章
    var titleRes = '';
    var htmlRes = '';
    searchBox.on('input porpertychange', function () {
        thisTxt = searchBox.val().trim();
        $resTitle.hide();
        $result.find('a').remove();
        if (thisTxt != '') {
            allPosts.forEach(function (item) {
                indexInTitle = item.title.indexOf(thisTxt);
                indexInHtml = item.html.indexOf(thisTxt);
                //标题
                if (indexInTitle >= 0) {
                    $resTitle.show();
                    resCount++;
                    str = item.html;
                    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
                    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
                    str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
                    str = str.replace(/ /ig, '');//去掉 
                    str = str.replace(/^[\s　]+|[\s　]+$/g, "");//去掉全角半角空格
                    str = str.replace(/[\r\n]/g, "");//去掉回车换行
                    titleRes += '<a class="search-res-item" href="/' + item.slug + '/">'
                        + item.title.replace(thisTxt, '<span style="color:red">' + thisTxt + '</span>')
                        + '<span class="search-post-content color-gray"> '
                        + str
                        + '</span></a>'
                } else// 内容
                    if (indexInHtml >= 0 && indexInTitle <= 0) {
                        $resTitle.show();
                        resCount++;
                        str = item.html;
                        str = str.replace(/<[^>]+>/g, ""); //去除HTML tag
                        str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
                        str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
                        str = str.replace(/ /ig, '');//去掉 
                        str = str.replace(/^[\s　]+|[\s　]+$/g, "");//去掉全角半角空格
                        str = str.replace(/[\r\n]/g, "");//去掉回车换行
                        htmlRes += '<a class="search-res-item" href="/' + item.slug + '/">'
                            + item.title
                            + '<span class="search-post-content color-gray"> '
                            + str
                            + '</span></a>'
                    }
            })
            //挂载搜索结果
            if (titleRes != '') {
                $result.append(titleRes);
                titleRes = '';
            } else if (htmlRes != '') {
                $result.append(htmlRes);
                htmlRes = '';
            }
            $resCount.text(resCount);
            resCount = 0;
        }
    });
    //=============底部信息=============

    // 说明

    //挂载友情链接
    if (typeof linkArr != "undefined") {
        if (linkArr.length > 0) {
            for (var i = 0; i < linkArr.length; i++) {
                friendLinkParent.append('<a href="' + linkArr[i].url + '" target="_blank">' + linkArr[i].name + '</a>&nbsp;&nbsp;');
                friendLinkParentSide.append('\
                <a href="'+ linkArr[i].url + '" target="_blank" class="ar-help-item-box">\
                    <span class="link-name color-black">' + linkArr[i].name + '</span>\
                </a>\
                ')
            }
        }
    }
    //挂在版权信息
    if (typeof footCopyRight != "undefined") {
        $('#foot-copy-right').text(footCopyRight);
    }


    //返回顶部
    $('.to-top-container').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    var toTopBtn = $('.to-top-container');
    //监听滚动
    var aTop;
    var listLeftVal = typeof $('.article-left-box').offset() == 'undefined' ? 0 : $('.article-left-box').offset().left;
    $(window).scroll(function () {
        var topSize = $(window).scrollTop();
        aTop = topSize;
        // console.log(topSize);

        //回到顶部判断
        if (aTop > 630) {
            toTopBtn.addClass('show');
        } else {
            toTopBtn.removeClass('show');
        }

        //tag是否固定
        if (aTop >= 520 + authorlistH && $('.article-right-box').length > 0) {
            $('.article-right-box').addClass('position-fixed').css({
                'left': listLeftVal + 828,
                'top': -authorlistH + 28
            });
        } else if (aTop < 520 + authorlistH && $('.article-right-box').length > 0) {
            $('.article-right-box').removeClass('position-fixed');
        }

    });
    $(window).resize(function () {
        listLeftVal = typeof $('.article-left-box').offset() == 'undefined' ? 0 : $('.article-left-box').offset().left;
        if (aTop >= 520 + authorlistH && $('.article-right-box').length > 0) {
            $('.article-right-box').addClass('position-fixed').css({
                'left': listLeftVal + 828,
                'top': -authorlistH + 28
            });
        }
    });

    //滚动自动加载 首页
    $('.article-left-box').infiniteScroll({
        path: '.older-posts', //下一页按钮
        append: '.articale-item-box', //循环体
        status: '.page-load-status', //加载中、结束、报错页面
        hideNav: '.pagination' //隐藏起来的翻页控件
    });

    //滚动自动加载 tag 作者文章
    $('.post-feed').infiniteScroll({
        path: '.older-posts', //下一页按钮
        append: '.post-card', //循环体
        status: '.page-load-status', //加载中、结束、报错页面
        hideNav: '.pagination' //隐藏起来的翻页控件
    });

    //右击logo进入后台
    $('body').on('contextmenu', '.brand-logo', function (e) {
        e.preventDefault();
        var backUrl = $('.brand-logo').attr('href') + '/ghost';
        window.location.href = backUrl;
    })
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
    var arr = []; //存放随机数的数组
    var acolorLen = colorArr.length; //数组长度，也用来限制范围
    var arrLen = secector.length; //数组长度，也用来限制范围
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

//国历
var strForJieQi;

function setBannerDate() {
    var myDate = new Date();
    var thisYear = myDate.getFullYear();
    var thisMonth = myDate.getMonth() + 1;
    var thisDate = myDate.getDate() <= 9 ? '0' + myDate.getDate() : myDate.getDate();
    var monthWidthZero = thisMonth <= 9 ? '0' + thisMonth : thisMonth;
    strForJieQi = monthWidthZero.toString() + thisDate.toString();
    $('.data').text(thisDate + '/');
    $('.guoli-month').text(thisMonth + '月');
    $('.guoli-year').text(thisYear + '');
}
// 首页日历函数 网上找的代码 哈哈哈
var CalendarData = new Array(100);
var madd = new Array(12);
var tgString = "甲乙丙丁戊己庚辛壬癸"; //天干
var dzString = "子丑寅卯辰巳午未申酉戌亥"; //地支
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
                isEnd = true;
                break;
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

var nongliMonth;

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
        nongliMonth = monString.charAt(-cMonth - 1);
    } else {
        tmp += monString.charAt(cMonth - 1);
        nongliMonth = monString.charAt(cMonth - 1);
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

//设置季节"正二三四五六七八九十冬腊";
function setSeasion(season, jr) {
    for (var i = 0; i < jr.length; i++) {
        if (strForJieQi == jr[i].time) {
            // if(1){
            setBannerTxtImg(jr[i]);
            return
        }
    }
    // 春
    if (nongliMonth == "正" || nongliMonth == "二" || nongliMonth == "三") {
        setBannerTxtImg(season[0]);
    } else
        //夏
        if (nongliMonth == "四" || nongliMonth == "五" || nongliMonth == "六") {
            setBannerTxtImg(season[1]);
        } else
            //秋
            if (nongliMonth == "七" || nongliMonth == "八" || nongliMonth == "九") {
                setBannerTxtImg(season[2]);
            } else
                //冬
                if (nongliMonth == "十" || nongliMonth == "冬" || nongliMonth == "腊") {
                    setBannerTxtImg(season[3]);
                }
}

function setBannerTxtImg(txt) {
    // 设置文字
    var desIndex = Math.floor(Math.random() * txt.des.length);
    var bannerListBox = $('#banner-list-box');
    var tmpBanner = '';
    $('#season').text(txt.name);
    $('#point').text('·');
    $('#season-en').text(txt.en);
    $('#description').text(txt.des[desIndex]);

    // console.log(txt.banner)
    if (txt.banner.length > 0) {
        for (var i = 0; i < txt.banner.length; i++) {
            tmpBanner +=
                '<div class="swiper-slide">' +
                '<img src="http://hackbinimg.luokangyuan.com/banner/' + txt.banner[i] + '">' +
                '</div>'
        };

        bannerListBox.find('.swiper-slide').remove();
        bannerListBox.append(tmpBanner);
    }
}
//点击放大图片
$('body').on('click', '.post-full .post-full-content img', function () {
    var biggerImg = $(this).attr('src');
    var imgBiggerPanel = $("<div id='imgBiggerPanel'></div>");
    imgBiggerPanel.append('<img src="' + biggerImg + '">')
    $('body').append(imgBiggerPanel);
})
//点击删除放大图片
$('body').on('click', '#imgBiggerPanel', function () {
    var $this = $(this);
    $this.animate({ 'top': '100px', 'opacity': '0' }, 300, function () {
        $this.remove();
    });
})
//去除ad
var itvlNum = 0;
var itvl = setInterval(function () {
    itvlNum++;
    if ($('#pop_ad').length || itvlNum > 1000) {
        // console.log($('#pop_ad'));
        $('#pop_ad').remove();
        clearInterval(itvl);
    }
}, 10);


//鼠标覆盖菜单，显示图片

$('body').on('mouseenter', '.nav-', function () {
    var img = $(this).find('img');

    if(img.length > 0){
        img.each(function() {
            $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src')
        })
    }
})
