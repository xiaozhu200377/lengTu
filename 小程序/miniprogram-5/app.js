// app.js
App({
  onLaunch:function()
  {
    wx.login({
      timeout: 1000,
      success:(res)=>{
        console.log(res)
      }  
    })
  },
  globalData:{
    "current":[true,false,false,false]
  }
})
