// pages/Demo01/Demo01.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopCar_src: '../../images/购物车.png',
        book_src: '../../images/订单.png',
        vr_world: '../../images/vr.png',
        detail_icon: '../../images/caret-right.png',
        icon_3d: '../../images/3d-icon.png',
        cardi: '../../images/cardi.png',
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: true,
        itemshop: '../../images/item-shop.png',
        itemShopcar: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/3.1购物车.svg',
        goods_list: [{
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片1.svg',
                'title': 'UNFETTERCREW 全新纯白楼道Special pure White',
                'price': '￥11690'
            },
            {
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片2】.svg',
                'title': 'UNFETTERCREW 特制酒杯',
                'price': '￥2380'
            },
            {
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片2】.svg',
                'title': 'UNFETTERCREW 特制酒杯',
                'price': '￥2380'
            },
            {
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片2】.svg',
                'title': 'UNFETTERCREW 特制酒杯',
                'price': '￥2380'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //   wx.loadFontFace({
        //     family: 'webfont',
        //     source: 'url("//at.alicdn.com/t/webfont_1f7b3qbimiv.eot")',
        //     success: function (res) {
        //         console.log(res.status) //  loaded
        //     },
        //     fail: function (res) {
        //         console.log(res.status) //  error
        //     },
        //     complete: function (res) {
        //         console.log(res.status);
        //     }
        // });


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }

})