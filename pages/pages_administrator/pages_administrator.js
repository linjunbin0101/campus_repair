Page({
   data: {
     currentTabIndex:0,
     top:["报修人员","维修人员","新报修","维修中","已完成"],
   },
   onTabsItemTap:function(event){
     let index=event.currentTarget.dataset.index;
     this.setData({
       currentTabIndex:index
     })
   },
   formsubmit:function(e){
     var that = this
    console.log(e.detail.value)
    wx.request({
      url: 'https://www.bbin.design/api/ad_del_repairer.php',
      data:{
        no_repairer:e.detail.value.no_repairer
      },
      success:res =>{
        //console.log(res)
        setTimeout(function(){
          wx.showToast({
            title: '删除成功！',
          })
        },1000)
        setTimeout(function(){
          that.onLoad()
        },1500)
      }
    })
    wx.request({
      url: 'https://www.bbin.design/api/ad_del_maintainer.php',
      data:{
        no_maintainer:e.detail.value.no_maintainer
      },
      success:res =>{
        //console.log(res)
        setTimeout(function(){
          wx.showToast({
            title: '删除成功！',
          })
        },1000)
        setTimeout(function(){
          that.onLoad()
        },1500)
      }
    })
   },
   onLoad:function(){
     wx.request({
       url: 'https://www.bbin.design/api/ad_repairer.php',
       success:res =>{
         console.log("res",res.data)
         this.setData({
          list:res.data
         })
       }
     })
     wx.request({
      url: 'https://www.bbin.design/api/ad_maintainer.php',
      success:res =>{
        console.log("res",res.data)
        this.setData({
         list2:res.data
        })
      }
    })
    wx.request({
      url: 'https://www.bbin.design/api/ad_repairpages.php',
      success:res =>{
        console.log("res",res.data)
        this.setData({
         list3:res.data
        })
      }
    })
    wx.request({
      url: 'https://www.bbin.design/api/ad_repairing.php',
      success:res =>{
        console.log("res",res.data)
        this.setData({
         list4:res.data
        })
      }
    })
    wx.request({
      url: 'https://www.bbin.design/api/ad_repaired.php',
      success:res =>{
        console.log("res",res.data)
        this.setData({
         list5:res.data
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