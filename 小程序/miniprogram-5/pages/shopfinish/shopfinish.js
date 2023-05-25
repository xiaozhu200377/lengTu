// pages/shopfinish/shopfinish.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nbFrontColor: '#fff',
        nbBackgroundColor: '#272727',
        goods_list: [{
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片1.svg',
                'title': 'UNFETTERCREW 全新纯白楼道Special pure White',
                'price': '￥11690'
            },
            {
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片2】.svg',
                'title': 'UNFETTERCREW 特制酒杯',
                'price': '￥2380'
            }, {
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片2】.svg',
                'title': 'UNFETTERCREW 特制酒杯',
                'price': '￥2380'
            }, {
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片2】.svg',
                'title': 'UNFETTERCREW 特制酒杯',
                'price': '￥2380'
            }, {
                img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/商品图片1.svg',
                'title': 'UNFETTERCREW 全新纯白楼道Special pure White',
                'price': '￥11690'
            }
        ],
        itemshop: '../../images/item-shop.png',
        itemShopcar: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/3.1购物车.svg',
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            nbTitle: '订单详情',
            nbLoading: false,
            nbFrontColor: '#fff',
            nbBackgroundColor: '#272727',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log("返回")
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2]; //上一个页面
        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
            mydata: { a: 1, }

        })
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