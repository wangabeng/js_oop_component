(function () {
	// 1 创建对象
	var Tab = function (el) { // 这里的每一个el是指一个div包裹对象
		// 定义对象的属性		
		this.el = el;
		var _this = this;

		// 定义对象的方法
		this.changeColor = function () {
			// console.log($(this.el).find('div').css('background', 'red'));
			var color = _this.getConfig();
			$(this.el).find('div').css('background', color);
		};

		this.getConfig = function () {
			var orgiConfig = $(_this.el).attr('data-config');
			var nowConfig = $.parseJSON(orgiConfig);
			console.log(nowConfig.color);
			return nowConfig.color;
		}
	};

	// 2 新建对象 然后根据特定参数 来决定执行对象的方法
	$('.change-color').each(function () {
		var eachTab = new Tab(this); // 这里的this指的是每个div包裹元素
		// console.log(this);
		// console.log($(this).find('button'));

		// 3 事件驱动 设置点击变色
		$(this).find('button').on('click', function () {
			// 这里的this指的是button元素 
			console.log($(this));
			eachTab.changeColor();
		});
	});

})();

// 坑 $('.classname') 这是个类数组集合