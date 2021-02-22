// pages/detail_detail1_maintainer/detail_detail1_maintainer.js
const app = getApp()
var util= require('../../utils/util.js')
var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
var n = timestamp * 1000;
var datee = util.formatTime(new Date())
Page({

   /**
    * 页面的初始数据
    */
   data: {
     datee:datee

   },
   onLoad: function (options) {
      console.log(datee)
      var that = this
      var no_pages = wx.getStorageSync('no')
      var id_pages = wx.getStorageSync('id_pages')
      wx.request({
        url: 'https://www.bbin.design/api/detail_detail_1.php',
        headers: {
          'content-type':'application/json'
        },
        data:{
          no_pages:no_pages,
          id_pages:id_pages
        },
        success: function (res) {
          //console.log(res.data)
          that.setData({
            list: res.data,
          })
        }
      })
    },
    formSubmit:function(e){
      
      wx.request({
        url: 'https://www.bbin.design/api/finish_maintainer.php',
        data:{
          id_pages : e.detail.value.id_repairer,
          finish_maintainer : datee,
        },
        success:function(){
          console.log("sucess")
        }
      })
      var formdataid = e.detail.value.id_repairer
      console.log(formdataid)
      wx.request({
        url: 'https://www.bbin.design/api/repairedpages.php',
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data:{
          id_pages:formdataid,
        },
        success:function(res){
          //console.log("success")
          wx.request({
            url: 'https://www.bbin.design/api/delfromrepairing.php',
            data:{
              id_pages:formdataid,
           }
          })
          wx.showToast({
            title: '维修成功!',
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