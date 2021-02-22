// pages/detail_maintainer/detail_maintainer.js
Page({
  data: {
    currentTabIndex:0,
    top:["维修中","已完成"]
  },
  onTabsItemTap:function(e){
    var that = this
    let index=e.currentTarget.dataset.index;
    this.setData({
      currentTabIndex:index
    })
    var name_maintainer = wx.getStorageSync('name')
    wx.request({
      url: 'https://www.bbin.design/api/detail_detail2_maintainer.php',
      data:{
        name_maintainer:name_maintainer
      },
      success:function(res){
        console.log(res)
        that.setData({
          list2:res.data
        })
      }
    })
  },
  click:function(e){
    var id_pages = e.currentTarget.dataset.id
    var index = e.currentTarget.dataset.index
    wx.setStorageSync('id_pages', id_pages)
    wx.navigateTo({
      url: '/pages/detail_detail1_maintainer/detail_detail1_maintainer?index='+index,
    })
  },
  onLoad: function (options) {
    var that = this
    var name_maintainer = wx.getStorageSync('name')
    console.log(name_maintainer)
    wx.request({
      url: 'https://www.bbin.design/api/detail_detail1_maintainer.php',
      data:{
        name_maintainer:name_maintainer
      },
      success:res =>{
        console.log(res.data)
        this.setData({
          list:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})