// pages/addpapes_repairer/addpages_repairer.js
const app = getApp()
var util= require('../../utils/util.js')
Page({
  data: { 
    
  },
  onLoad:function(res){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;
    var datee = util.formatTime(new Date())
    var no_pages = wx.getStorageSync('no')
    var name_pages = wx.getStorageSync('name')
    var phone_pages = wx.getStorageSync('phone')
    var th=this;    //成功后数据改变，复制对象
    wx.request({
      url: 'https://www.bbin.design/api/addpages.php',
      header: {
        'content-type':'application/json'
      },
      method: 'GET',
      success: function(res) {
        console.log(res);
        th.setData({
         list:res.data,
         no_pages :no_pages,
         name_pages :name_pages,
         phone_pages :phone_pages,
         id_pages:timestamp,
         now_pages:datee
        })
      },
      fail: function(res) {
        console.log("-----fail-----");
      },
    })
   },
  // chooseImg:function(){
  //   var that = this;
  //   wx.chooseImage({
  //     count: 2, // 默认9
  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  //     success: function (res) {
  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
  //       var tempFilePaths = res.tempFilePaths;
  //       console.log(res)
  //      that.setData({
  //        img_l:res.tempFilePaths
  //     })
  //     }
  //   })
  //  },
  //  up_img:function() {
  //  var that = this;
  //   wx.uploadFile({
  //     url: 'https://www.bbin.design/api/addimg.php', //接口
  //     filePath: that.data.img_l[0],
  //     name: 'file',
  //     formData: {
  //       'user': 'test'
  //     },
  //     success: function (res) {
  //       wx.showToast({
  //         title: '上传成功',
  //         duration:500
  //       })
  //       var data = res.data;
  //       console.log(data);
  //       //do something
  //     },
  //     fail: function (error) {
  //       console.log(error);
  //     }
  //   })
  //  },
  //  preview_img:function(){
  //   wx.previewImage({
  //     current: this.data.img_l, // 当前显示图片的http链接
  //     urls: this.data.img_l // 需要预览的图片http链接列表
  //   })
  //  },
   formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    if (e.detail.value.addr_pages == null || e.detail.value.detail_pages == null || e.detail.value.grade_pages == null || e.detail.value.time_pages == null) {
      wx.showToast({
        title: '信息未填完整!',
        icon: 'error',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }
    else{
      wx.showLoading({
        title: '网络请求中...',
        duration:3000,
      })
      wx.request({
        url: 'https://www.bbin.design/api/addpages.php',
        data:formData,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: { 
        id_pages: e.detail.value.id_pages,
        now_pages: e.detail.value.now_pages,
        name_pages:e.detail.value.name_pages,
        no_pages:e.detail.value.no_pages,
        phone_pages:e.detail.value.phone_pages,
        addr_pages:e.detail.value.addr_pages,
        detail_pages:e.detail.value.detail_pages,
        grade_pages:e.detail.value.grade_pages,
        time_pages:e.detail.value.time_pages,
        },
        success: function (res) {
          if (res.data.status == 0) {
            wx.showToast({
              title: '提交失败！！',
              icon: 'loading',
              duration: 10000
            })
          } else {
            wx.showToast({
              title: '报修成功!',
              icon: 'success',
              duration:1000,
              success: function () {
                setTimeout(function () {
                wx.reLaunch({
                url: '/pages/detail_repairer/detail_repairer',
                  })
                }, 1500);
                var page = getCurrentPages().pop();  
                if (page == undefined || page == null) return;  
                page.onLoad();  
               },
              })
          }
        }
      })
    }
  }
})