// pages/video/video.js
//import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //videoGruopList: [],//导航标签数据
    navId:'',//导航的标识
    dataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    //获取导航标签的数据
  //  this.getVideoGroupListData()；
  wx.login({
    success (res) {
      console.log(res.data);
      if (res.code) {
        //发起网络请求
        wx.request({
          url: 'http://39.108.125.7:8089/GetOpenid?code=abc',
          data: {
            code: res.code
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  }),
    wx.request({
      url: 'http://39.108.125.7:8089/VideoList?pageNum=10&&useid',
      data:{
      pageNum:1,
      pageCount:10,
      },
      success:res=>{
        console.log(res.data);
        this.setData({
          dataList:res.data,
        })
      }
    })
  },
  
  //获取导航数据
  // async getVideoGroupListData(){
  //   let videoGroupListData = await request('/video/group/list');
  //   this.setData({
  //     videoGroupList: videoGroupListData.data.slice(0,14)
  //   })
  // }

//点击切换导航的回调
// changeNav(event){
//   let navId = event.currentTarget.id;//通过id向event传参的狮虎如果传的是number会自动转换成string
//   this.setData({
//     navId: nacId*1
//   })
// }

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
