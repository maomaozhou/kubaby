var util = require('../../utils/date.js');
var jsonUtil = require('../../utils/jsonutil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: null,
    time: null,
    slider1: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var now = new Date()
    var date = util.getDate(now)
    var time = util.getTime(now)
    this.setData({
      date: date,
      time:time
      
    })
  },

  changeSlider(e) {
    this.setData({ slider1: e.detail.value })
  },
  onclick:function(e){
    var date = e.currentTarget.dataset.date
    var time = e.currentTarget.dataset.time
    var actValue= e.currentTarget.dataset.actValue||0
  //  var stringData = "action=milk&actionValue="+actValue+"&startTime="+date+"T"+time+"&endTime="+date+"T"+time
    wx.request({
      url: 'https://www.gapwall.com/kubaby/info/save',
      method:'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        action:"milk",
        actionValue:actValue,
        startTime:date+"T"+time,
        endTime: date + "T" + time
      },
      success:function(dat){
        console.log(dat)
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