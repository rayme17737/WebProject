// 用户资料
var users = [
  {
    id : 1,
    access : 0,
    userId : '18612345678',
    userName : '机器人01',
    pwd : '123456',
    userHead : '../static/images/head/girl.png',
    bornDate : '2000-01-01',
    profile : '该用户很懒,什么都没留下',
    sexuality : 'M',
    location : 'None',
    date : '2020-12-15',

  },
  {
    id : 2,
    access : 0,
    userId : '15987654321',
    userName : '机器人02',
    pwd : 'ABCDEFG',
    userHead : '../static/images/head/boy.png',
    bornDate : '2001-01-01',
    profile : '种草达人',
    sexuality : 'M',
    location : 'None',
    date : '2020-12-15',
  },
  {
    id : 3,
    access : 0,
    userId : '13645678524',
    userName : '机器人03',
    pwd : '',
    userHead : '../static/images/head/boy.png',
    bornDate : '1998-01-01',
    profile : '新世纪吉祥物',
    sexuality : 'M',
    location : 'None',
    date : '2020-12-15',
  },
  
]
// 关注粉丝数
var follow = [
  {
    id : 1,
    start : '18612345678',
    follower : '15987654321',
  },
  {
    id : 1,
    star : '18612345678',
    follower : '13645678524',
  },
]
// 文章详情
var word = [
  {
    id : 1,
    title : '绝世好物,速看!',
    content : '这里是正文部分一堆内容ASDFGHJK              这里是正文部分一堆内容ASDFGHJK              这里是正文部分一堆内容ASDFGHJK              这里是正文部分一堆内容ASDFGHJK              这里是正文部分一堆内容ASDFGHJK              这里是正文部分一堆内容ASDFGHJK              ',
    author : '15987654321',
    date : '2020-12-15',
    read : 456,
    liked : 21,
    image : 102,
    is_active : 1,
  },
  {
    id : 2,
    title : '震惊,这么便宜!',
    content : '这里是正文部分一堆内容12345687             这里是正文部分一堆内容12345687             这里是正文部分一堆内容12345687             这里是正文部分一堆内容12345687             这里是正文部分一堆内容12345687             这里是正文部分一堆内容12345687             ',
    author : '15987654321',
    date : '2020-12-15',
    read : 54856,
    liked : 45,
    image : 102,
    is_active : 1,
  },
  {
    id : 3,
    title : '再不看就看不到了!',
    content : '这里是正文部分一堆内容!@#@!$                   这里是正文部分一堆内容!@#@!$                   这里是正文部分一堆内容!@#@!$                   这里是正文部分一堆内容!@#@!$                   这里是正文部分一堆内容!@#@!$                   这里是正文部分一堆内容!@#@!$                   这里是正文部分一堆内容!@#@!$                   ',
    author : '15987654321',
    date : '2020-12-15',
    read : 852,
    liked : 54,
    image : 102,
    is_active : 1,
  },

]
// 商品详情
var item = [
  {
    id : 124,
    name : '连衣裙',
    image : 103,
    profile :'早秋针织连衣裙AA',
    inventory : 1000,
    price : '69.90',
    description : 'None'
  },
  {
    id : 1587,
    name : '羊毛大衣',
    image : '../static/images/pic/item02.jpg', //103,
    profile :'修身版双面纯羊毛大衣',
    inventory : 500,
    price : '239.90',
    description : 'M码建议100-110,S码建议80-100,L码建议110-120,XXL码建议130-140,XL码建议120-13'
  },
  {
    id : 1482,
    name : '卫衣女',
    image : '../static/images/pic/item03.jpg', //103,
    profile :'【不起球】秋冬新款加绒加厚连帽卫衣女宽松学生拉链外套',
    inventory : 1200,
    price : '49.90',
    description : 'None'
  },
  {
    id : 1648,
    name : '男工装',
    image : '../static/images/pic/item04.jpg', //103,
    profile :'秋季款潮牌裤子男工装裤男士宽松休闲裤多口袋韩版束脚九分潮流男',
    inventory : 3199,
    price : '69.90',
    description : '秋季款潮牌裤子男工装裤男士宽松休闲裤多口袋韩版束脚九分潮流男..颜色: Y3220 灰色,Y3220 黑色,Y4110 黑色,Y4110 卡其'
  },
  {
    id : 2546,
    name : '男装长裤',
    image : '../static/images/pic/item05.jpg', //103,
    profile :'秋季日系原创休闲裤男士潮牌宽松束脚工装运动束脚百搭男装长裤子',
    inventory : 2034,
    price : '69.90',
    description : '商品描述    秋季日系原创休闲裤男士潮牌宽松束脚工装运动束脚百搭男装长裤  风格: 百搭,原宿,日系,文艺  颜色: 黑色,军绿色,卡其色'
  },
  {
    id : 2648,
    name : '跑鞋男',
    image : '../static/images/pic/item07.jpg',  //103,
    profile :'宾兽新款男鞋韩版潮流椰子透气休闲鞋男运动跑鞋男',
    inventory : 1427,
    price : '89.60',
    description : '商品描述    新品上市，全国包邮，支持7天无理由退换并赠送运费险，收藏店铺与宝贝优先发货哦~  颜色: 黑色,苹果绿,白色,灰色,兵马俑	鞋帮高度: 低帮'
  },
  {
    id : 2846,
    name : '男装长裤',
    image : '../static/images/pic/item08.jpg', //103,
    profile :'秋冬上新小包包女包2020新款韩版潮仙女链条包百搭单肩斜挎包',
    inventory : 290,
    price : '39.00',
    description : '商品描述    ;质地 PU;闭合方式 磁扣;图案 几何图案;风格 时尚潮流;形状 横款方形;成色 全新;颜色分类 金色,紫色,绿色;内部结构 夹层拉链袋;有无夹层 有;是否可折叠 否;背包方式 单肩斜挎;适用场景 休闲;肩带样式 单根;适用对象 青年;提拎部件类型 锁链式提把;箱包硬度 硬;款式 单肩包;大小 小;流行款式名称 小方包    '
  },
]
// 图片库
var pic = [
  {
    id : 1,
    location : '../static/images/pic/item01.jpg',
    useId : 124,
    useField : 103
  },
  {
    id : 2,
    location : '../static/images/pic/item01-2.jpg',
    useId : 124,
    useField : 103
  },
  {
    id : 58,
    location : '../static/images/pic/item02.jpg',
    useId : 1587,
    useField : 103
  },
  {
    id : 87,
    location : '../static/images/pic/item03.jpg',
    useId : 1482,
    useField : 103
  },
  {
    id : 97,
    location : '../static/images/pic/item04.jpg',
    useId : 1648,
    useField : 103
  },
  {
    id : 102,
    location : '../static/images/pic/item05.jpg',
    useId : 2546,
    useField : 103
  },
  {
    id : 115,
    location : '../static/images/pic/item07.jpg',
    useId : 2648,
    useField : 103
  },
  {
    id : 136,
    location : '../static/images/pic/item08.jpg',
    useId : 2846,
    useField : 103
  },
]

// banner 使用
var ban = [
  '../static/images/banner/bk_01.jpeg',
  '../static/images/banner/bk_02.jpeg',
  '../static/images/banner/bk_03.jpeg',
  '../static/images/banner/bk_04.jpeg',
  '../static/images/banner/bk_03.jpg',
  '../static/images/banner/bk_04.jpg',
]

// 杂项使用
var desc = [
  '../static/images/pic/desc_01.jpg',
  '../static/images/pic/desc_02.jpg',
  '../static/images/pic/desc_03.jpg',
]

var bgimg = [
  '../static/images/bg/bg_01.jpg',
  '../static/images/bg/bg_02.jpg',
]