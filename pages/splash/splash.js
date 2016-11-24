var requests = require( '../../requests/request.js' );

Page( {
  data: {
    splash: {},
    screenHeight: 0,
    screenWidth: 0
  },
  // 监听页面加载
  onLoad: function( options ) {
    var _this = this;
    wx.getSystemInfo( {
      //  获取系统信息
      success: function( res ) {
        _this.setData( {
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
  },
  // 监听页面初次渲染完成
  onReady: function() {
    var _this = this;
    var size = this.data.screenWidth + '*' + this.data.screenHeight;
    requests.getSplashCover(
      //  尺寸
       size,
      //  成功时回调函数
       ( data ) => {
          data.img=data.img.replace("pic1","pic4");
          data.img=data.img.replace("pic2","pic4");
          _this.setData( { splash: data });
       }, 
      //  失败时回调函数（这里没有）
       null, 
      //  完成回调函数
       () => {
         toIndexPage.call(_this);
       }
    );
  }
});

/**
 * 跳转到首页
 */
function toIndexPage() {
  setTimeout( function() {
    // wx.redirectTo : 实现连接跳转时的参数传值
    wx.redirectTo( {
      url: '../index/index'
    });
  }, 2000 );
}