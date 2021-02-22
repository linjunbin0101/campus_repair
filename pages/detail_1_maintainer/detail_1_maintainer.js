const app = getApp()
var util= require('../../utils/util.js')
var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
var n = timestamp * 1000;
var datee = util.formatTime(new Date())
Page({
  data: {

  },
  onLoad: function (options) {
    //console.log(options.index)
    var no_pages = wx.getStorageSync('no')
    var id_pages = wx.getStorageSync('id_pages')
    //console.log(id_pages)
    wx.request({
      url: 'https://www.bbin.design/api/detail_1_maintainer.php',
      headers: {
        'content-type':'application/json'
      },
      data:{
        id_pages:id_pages
      },
      success: res => {
        //console.log(res.data)
        //将获取到的json数据，存在名字叫list的这个数组中
        this.setData({
          list: res.data,
          //res代表success函数的事件对，data是固定的，list是数组
        })
      }
    })
  },
  onPullDownRefresh:function()
  {
    this.onLoad()
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    //模拟加载
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
  },


  formSubmit:function(e){
    //console.log(e.detail.value.time_pages)   
    var FormData = e.detail.value; 
    var name_maintainer = wx.getStorageSync('name') 
    var phone_maintainer = wx.getStorageSync('phone') 
    //console.log(name_maintainer,phone_maintainer)
    wx.request({
      url: 'https://www.bbin.design/api/repairingpages.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data:{
        id_pages:FormData.id_pages,
        name_maintainer:name_maintainer,
        phone_maintainer:phone_maintainer,
        name_pages:FormData.name_pages,
        phone_pages:FormData.phone_pages,
        now_pages:FormData.now_pages,
        addr_pages:FormData.addr_pages,
        detail_pages:FormData.detail_pages,
        grade_pages:FormData.grade_pages,
        time_pages:FormData.time_pages,
        add_maintainer:datee,
        finish_maintainer:"暂无",
      },
      success:function(res){
        //console.log("success")
        wx.request({
          url: 'https://www.bbin.design/api/delfromallpages.php',
          data:{
            id_pages:FormData.id_pages
         }
        })
        wx.showToast({
          title: '接单成功!',
          icon: 'success',
          duration:1000,
          success: function () {
            setTimeout(function () {
            wx.navigateTo({
            url: '/pages/home_maintainer/home_maintainer',
              })
            }, 1500);
            var page = getCurrentPages().pop();  
            if (page == undefined || page == null) return;  
            page.onLoad();  
           },
          })
      }
    })
  }
})
