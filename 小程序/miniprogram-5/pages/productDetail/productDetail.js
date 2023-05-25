Page({

    /**
     * 页面的初始数据
     */
    data: {
        space_3D: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/3Dspace.svg',
        imgUrls: [
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/gooditem.svg',
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/图片svg/gooditem.svg'

        ],
        min_img: [
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/detaiitem1.svg',
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/detailitem2.svg',
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/detailitem3.svg',
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/detailitem4.svg',
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/detailitem5.svg'
        ],
        protuctchose: [
            { title: '选择规格', detail: '4种规格可选' },
            { title: '运费', detail: '免运费' },
            { title: '服务', detail: '七天无理由退货' }
        ],
        first_img: 'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/firstpic.svg',


        detailshow_img: [
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/detailshow01.svg',
            'cloud://cloud1-2gdz38hz9226e97f.636c-cloud1-2gdz38hz9226e97f-1316184354/minishop/detailshow02.svg'
        ]
    },
    Toshop: function() {
        wx.navigateTo({
            url: '../shopfinish/shopfinish',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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