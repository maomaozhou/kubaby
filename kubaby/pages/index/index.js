Page({
  data:{
    time: (new Date()).toString(),
    a:10,
  b:20,
  msg:"你好",
  loading:false,
  result:[]
  },
  tap: function () {


    this.setData({
      loading: true
    })

    // 接着做耗时的操作

  },

  

  onLoad: function () {
    var that = this;
    var data = wx.getStorageInfoSync("key")
    if(data){
      that.setData({
        result: data
      })
    }

    wx.request({
      url: 'http://www.gapwall.com/kubaby/info/queryDetail',
      success:function(result){
        console.log(result)
        that.setData({
          result:result.data,
        })
        wx.setStorageSync("key", result.data)
      }
    })



    // wx.hideToast() // 隐藏Toast

  }
})

App({
  gal:1,
  onLaunch: function (options) {},
  onShow: function (options) { },
  onHide: function () { },
  onError: function (msg) { },
  globalData: 'I am global data'
})
