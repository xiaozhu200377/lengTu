// components/bar/bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    attached:function(){
      this.modify()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    modify:function(){
      //用于修改底栏显示
      const app = getApp()
      app.globalData = [false,true,false,false]
    },
    FindError:function(e){
      console.log(e)
    }
  }
})
