const app = getApp()
Page({
  data: {
    currentTabIndex:0,
    top:["新报修","待维修","已完成"]
  },
  toadd:function(){
    wx.navigateTo({
      url: '/pages/addpapes_repairer/addpages_repairer',
    })
  },
  onTabsItemTap:function(event){
    var that = this
    var name_pages = wx.getStorageSync('name')
    let index=event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex:index
    })
    console.log(name_pages)
    wx.request({
      url: 'https://www.bbin.design/api/repairing_repairer.php',
      data:{
        name_repairer:name_pages
      },
      success:function(res){
        console.log(res)
        that.setData({
          list2:res.data
        })
      }
    })
    wx.request({
      url: 'https://www.bbin.design/api/repaired_repairer.php',
      data:{
        name_repairer:name_pages
      },
      success:function(res){
        console.log(res)
        that.setData({
          list3:res.data
        })
      }
    })
  },
  click:function(e){
    var id_pages = e.currentTarget.dataset.id
    var index = e.currentTarget.dataset.index
    console.log(id_pages)
    console.log(index)
    wx.setStorageSync('id_pages', id_pages)
    wx.navigateTo({
      url: '/pages/detail_1_repairer/detail_1_repairer?index='+index,
    })
  },
  onLoad: function () {
    var that = this
    var no_pages = wx.getStorageSync('no')
    console.log(no_pages)
    wx.request({
      url: 'https://www.bbin.design/api/allrepairer.php',
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
