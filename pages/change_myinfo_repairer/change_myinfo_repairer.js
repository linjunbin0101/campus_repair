Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var no_repairer = wx.getStorageSync('no')
    this.setData({
      no_repairer:no_repairer
    })
    wx.request({
      url: 'https://www.bbin.design/api/myinfo.php',
      method:"get",
      header: {
        'content-type': 'application/json'
      },
      data:{
        no_repairer:no_repairer,
      },
      success:function(res){
        //console.log(res.data)
        that.setData({
          list:res.data
        })
      },
    })
  },
  formSubmit: function (e) {
    //首先是用var函数获取input的输入信息
        var no_repairer = e.detail.value.no_repairer;
        var pass_repairer = e.detail.value.pass_repairer;
        var phone_repairer = e.detail.value.phone_repairer;
    //判断一下这个人输入没，有一个没输入就用showToast提醒他下
        if (pass_repairer == '' || phone_repairer == '' || phone_repairer == null || phone_repairer == null ) {
          wx.showToast({
            title: '信息未修改',
            icon: 'error',
            duration: 1000
          })
        } 
    //接下来开始修改密码showLoading是让客户们稍等片刻
         else {
          wx.showLoading({
            title: '网络请求中...',
          })
    //wx.request是微信小程序发送到后台的一种方式
          wx.request({
            url: "https://www.bbin.design/api/changemyinfo.php",//写清楚你要调用哪一个后台文件
            method: 'POST',//method有两种方式，发送一般用POST，接收一般用GET
            data: {//data里面的数据你把它当成一个快递，包装所有文件然后发送出去
              no_repairer:no_repairer,
              pass_repairer:pass_repairer,
              phone_repairer:phone_repairer,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: (res) => {//当成功的时候使用success函数进行下一步
              console.log(res);//console.log类似c语言的printf,c++的cout，python的print。主要是用来调试的，后期可以删掉。
              if (res.data.error) {//res.data.error的意思是如果数据错误
                wx.showToast({
                  icon: 'none',
                  duration: 2000,
                })
              } else {
                wx.showToast({
                  title:"请重新登陆！",
                  icon: 'success',//这里用success可以在客户成功修改后弹出一个√
                  duration: 1000,//duration是等待，1000为1秒
                  success: function () {
                    setTimeout(function () {
                      wx.reLaunch({
                        url: '/pages/index/index',//成功修改密码后我们返回登录界面（登录界面地址自行修改）
                      })
                    }, 2000)
                    
                  }
                })
              }
            }
          })
        }
      },
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