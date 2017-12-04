(function () {
  // 1 构造函数
  var Tab = function (el) {
    var _this_ = this;
    this.el = el;

    // 配置参数 覆盖html中的配置参数
    this.config = {
      "fade": false,
      "triggerType": "click",
      "color": "red"
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

    // 根据不同的配置参数 进行不同的事件绑定
    if (config.triggerType) {
      // 进行事件绑定
      this.tabNavs.on(config.triggerType, function () {
        console.log($(this).index());
      });
      
    }

  };

  // 2 定义原型方法
  Tab.prototype = {
    getConfig: function(dataOld, dataNew) {
      return $.extend(dataOld, dataNew);
    }
  };

  window.Tab = Tab;

})();