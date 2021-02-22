// pages/login_maintainer/login_maintainer.js
Page({
  data: {
    no_maintainer:"",
    pass_maintainer:"",
  },
  detail:function(){
    wx.navigateTo({
      url: '/pages/help2/help2',
    })
  },
  login:function(e){
    var no = e.detail.value.no_maintainer
    wx.setStorageSync('no', no)
    wx.request({
      url: 'https://www.bbin.design/api/login_maintainer.php',
      method:"get",
      header: {
        'content-type': 'application/json'
      },
      data:{
        "no_maintainer": e.detail.value.no_maintainer,
        "pass_maintainer" : e.detail.value.pass_maintainer,
        "name_maintainer" : e.detail.value.name_maintaine,
        "phone_maintainer" : e.detail.value.phone_maintainer
      },
      success(res) {
        //console.log("name",res.data.name_maintainer)
        console.log("phone",res.data.phone_maintainer)
        var name = res.data.name_maintainer
        var phone = res.data.phone_maintainer
        wx.setStorageSync('name', name)
        wx.setStorageSync('phone', phone)
        //console.log(name,phone)
        if (res.data.no_maintainer == e.detail.value.no_maintainer && res.data.pass_maintainer == e.detail.value.pass_maintainer){
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            duration: 1000,
            success: function () {
              setTimeout(function () {
              wx.reLaunch({
              url: '/pages/home_maintainer/home_maintainer',
                })
              }, 1500);
             }
          })
        }else{
          wx.showToast({
            title: '工号或密码错误',
            icon: 'error',
            duration: 1000
          })
        }
      }
    })
    console.log("账号",e.detail.value.no_maintainer)
    console.log("密码", e.detail.value.pass_maintainer)
  },
  onLoad: function (options) {

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