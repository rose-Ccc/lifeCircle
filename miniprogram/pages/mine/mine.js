const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fabu: false,
    right: "../../images/right.png",
    down: "../../images/down.png",
    biaobai: 0,
    xianzhi: 0,
    lost: 0,
    found: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        that.setData({
          openid: res.data
        })
      },
    })
  },
  fabu: function() {
    var temp = this.data.fabu
    var a = !temp
    this.setData({
      fabu: a
    })
    this.getBiaobai()
    this.getXianzhi()
    this.getLost()
  },
  getBiaobai: function() {
    var that = this
    db.collection('biaobai').where({
      _openid: this.data.openid
    }).count({
      success: function(res) {
        that.setData({
          biaobai: res.total
        })
      }
    })
  },
  getXianzhi: function() {
    var that = this
    db.collection('xianzhi').where({
      _openid: this.data.openid
    }).count({
      success: function(res) {
        that.setData({
          xianzhi: res.total
        })
      }
    })
  },
  getLost: function() {
    var that = this
    db.collection('found').where({
      _openid: this.data.openid
    }).count({
      success: function(res) {
        that.setData({
          found: res.total
        })
      }
    })
    db.collection('lost').where({
      _openid: this.data.openid
    }).count({
      success: function(res) {
        that.setData({
          lost: res.total
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    this.setData({
      fabu: false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})