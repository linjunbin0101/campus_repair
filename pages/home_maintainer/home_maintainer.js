Page({
  data: {
    currentTabIndex:0,
    top:["关于我的","报修大厅"]
  },
  onTabsItemTap:function(event){
    let index=event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex:index
    })
  },
  b1:function(){
    wx.navigateTo({
      url: '/pages/myinfo_maintainer/myinfo_maintainer',
    })
  },
  b2:function(){
    wx.navigateTo({
      url: '/pages/change_myinfo_maintainer/change_myinfo_maintainer',
    })
  },
  b3:function(){
    wx.navigateTo({
      url: '/pages/help2/help2',
    })
  },
  b5:function(){
    wx.navigateTo({
      url: '/pages/link_me/link_me',
    })
  },
  todetail:function(){
    wx.navigateTo({
      url: '/pages/detail_maintainer/detail_maintainer',
    })
  },
  click:function(e){
    var id_pages = e.currentTarget.dataset.id
    var index = e.currentTarget.dataset.index
    wx.setStorageSync('id_pages', id_pages)
    wx.navigateTo({
      url: '/pages/detail_1_maintainer/detail_1_maintainer?index='+index,
    })
  },
  onLoad: function () {
    var that = this
    var no_pages = wx.getStorageSync('no')
    console.log(no_pages)
    wx.request({
      url: 'https://www.bbin.design/api/allmaintainer.php',
      headers: {
        'content-type':'application/json'
      },
      data:{
        no_pages:no_pages,
      },
      success: function (res) {
        console.log(res.data)
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
