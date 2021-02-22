const app = getApp()
Page({
  data: {

  },
  formsubmit:function(e){
    wx.showModal({
      title:"提示",
      content:"确认删除？",
      success:function(res){
        if(res.confirm){
          var that = this
          console.log(e.detail.value)
          wx.request({
            url: 'https://www.bbin.design/api/detail_drop_repairer.php',
          data:{
            id_pages:e.detail.value.id_repairer,
          },
          })
          setTimeout(function(){
          wx.showToast({
            title: '删除成功！',
            icon:"success",
            duration:2000
          })},2000),
          setTimeout(function () {
          wx.switchTab({
            url: '/pages/detail_repairer/detail_repairer',
            duration:2000,
            success:function(){
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          })},5000);
        }
      }
    })
  },
  onLoad: function (options) {
    console.log(options.index)
    var that = this
    var no_pages = wx.getStorageSync('no')
    var id_pages = wx.getStorageSync('id_pages')
    wx.request({
      url: 'https://www.bbin.design/api/detail_1_repairer.php',
      headers: {
        'content-type':'application/json'
      },
      data:{
        no_pages:no_pages,
        id_pages:id_pages
      },
      success: function (res) {
        //console.log(res.data)
        //将获取到的json数据，存在名字叫list的这个数组中
        that.setData({
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
})
