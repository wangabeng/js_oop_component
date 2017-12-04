(function () {
  // 1 构造函数
  var Tab = function (el) {
    var _this_ = this;
    this.el = el;

    // 配置参数 覆盖html中的配置参数
    this.config = {
      "fade": false,
      "triggerType": "click",
      "color": "red",
      'currentDefault': 0
    };
    // 重置配置参数
    if (this.config) {
      var dataConfig = this.el.attr('data-config');
      dataConfig = $.parseJSON(dataConfig);
      this.getConfig(dataConfig, this.config);
      // console.log(this.config);
    }
    var config = this.config;

    // 获取tab元素集合 及展示内容集合
    this.tabNavs = this.el.find('.tab-nav li');
    this.showCont = this.el.find('.tab-content');
    // this.currentIndex = config.currentDefault;

    // 根据不同的配置参数 进行不同的事件绑定
    if (config.triggerType) {
      // 进行事件绑定
      this.tabNavs.on(config.triggerType, function () {
        // $(this)指的是被点击的当前tab的包装对象
        _this_.tabNav($(this), _this_.showCont); // 应用原型方法
      });
      
    }

  };

  // 2 定义原型方法
  Tab.prototype = {
    getConfig: function(dataOld, dataNew) {
      return $.extend(dataOld, dataNew);
    },
    tabNav: function (cur, showCont) {
      // cur.index() 获取当前索引值
      var currentIndex = cur.index();

      // tab的class .active切换
      cur.addClass('active');
      cur.siblings().removeClass('active');
      // 设置所有展示区showCont的样式
      showCont.eq(currentIndex).fadeIn();
      showCont.eq(currentIndex).siblings().fadeOut();
    }
  };

  // 3 初始化 创建实例
/*  function init () {

  }*/

  $.fn.extend({
    tab: function () {
      this.each(function(){
        new Tab($(this));
      }); 
      return $(this);
    } 
  })

  // window.Tab = Tab;
  // window.init = init;

})();