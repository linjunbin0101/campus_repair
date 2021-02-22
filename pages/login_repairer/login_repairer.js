// pages/login_repairer/login_repairer.js
const app = getApp();
Page({
  data: {
    no_repairer:"",
    pass_repairer:"",
    name_repairer:"",
    phone_repairer:""
  },
  detail:function(){
    wx.navigateTo({
      url: '/pages/help/help',
    })
  },
  login:function(e){
    wx.request({
      url: 'https://www.bbin.design/api/login_repairer.php',
      method:"get",
      header: {
        'content-type': 'application/json'
      },
      data:{
        "no_repairer": e.detail.value.no_repairer,
        "pass_repairer" : e.detail.value.pass_repairer,
        "name_repairer":e.detail.value.name_repairer,
        "phone_repairer":e.detail.value.phone_repairer
      },
      success(res) {
        //console.log(res.data.phone_repairer)
        //console.log(res.data.name_repairer)
        console.log(res.data)
        var no = res.data.no_repairer
        var name = res.data.name_repairer
        var phone = res.data.phone_repairer
        wx.setStorageSync('no', no)
        wx.setStorageSync('name', name)
        wx.setStorageSync('phone', phone)
        if (res.data.no_repairer == e.detail.value.no_repairer && res.data.pass_repairer == e.detail.value.pass_repairer){
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            duration:1000,
            success: function () {
              setTimeout(function () {
              wx.reLaunch({
              url: '/pages/home_repairer/home_repairer',
                })
              }, 1500);
             }
          })
        }else{
          wx.showToast({
            title: '学号或密码错误',
            icon: 'error',
            duration: 1000
          })
        }
      }
    })
    console.log("账号",e.detail.value.no_repairer)
    console.log("密码",e.detail.value.pass_repairer)
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