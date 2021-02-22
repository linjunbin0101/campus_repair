// pages/login_administrator/login_administrator.js
Page({

   /**
    * 页面的初始数据
    */
   data: {

   },
   detail:function(){
      wx.navigateTo({
        url: '/pages/help3/help3',
      })
   },
   login:function(e){
      if(e.detail.value.no_administrator == '' || e.detail.value.no_administrator == null ||e.detail.value.pass_administrator == '' || e.detail.value.pass_administrator == null){
         wx.showToast({
           title: '请填写完整信息！',
         })
      }else{
         wx.request({
           url: 'https://www.bbin.design/api/login_administrator.php',
           data:{
            no_administrator:e.detail.value.no_administrator,
            pass_administrator:e.detail.value.pass_administrator,
           },
           success:function(res){
            console.log(res.data)
            if(res.data.no_administrator == e.detail.value.no_administrator && res.data.pass_administrator == e.detail.value.pass_administrator){
               wx.showToast({
                 title: '登录成功！',
                 icon:"success",
               })
               setTimeout(function(){
                  wx.navigateTo({
                     url:'/pages/pages_administrator/pages_administrator'
                   })
               },1500)
            }else{
               wx.showToast({
                 title: '账号或密码错误！',
                 icon:"error"
               })
            }
           }
         })
      }
   },
   /**
    * 生命周期函数--监听页面加载
    */
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