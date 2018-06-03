// pages/save/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   // array: ["吃奶粉", "吃母乳", "睡觉", "尿尿", "粑粑", "洗头洗澡", "记录体重"]
    array: ["吃奶粉", "吃母乳", "睡觉", "尿尿", "粑粑", "洗头洗澡", "记录体重"],
    index:0
  },

  bindPickerChange: function (e) {
    console.log(e)
    this.setData({
      index: e.detail.value
    })  
  },

  saveButtonTip:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '?id=1'
    })
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