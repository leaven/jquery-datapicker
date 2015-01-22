/**
 * @des 通过在dom元素上加一层data-*过滤，在触发onclick事件冒泡的时候进行拦截，并触发我们自定义的callback函数
 */
(function($, window, undefined) {
	$.fn.dataPicker =  function(options) {
		
		var datapicker = new DataPicker(this, options);
		return datapicker.init();
	}


	var DataPicker = function(el, options) {
		this.$element = el;
		this.defaults  = {
			attr : "static",
			event : "click",
			callback : function(){}
		}
		this.settings = $.extend({}, this.defaults, options);
	}
	DataPicker.prototype = {
		init : function() {
			var self = this;
			this.$element.bind(self.settings.event, function(event) {
				var $se = $(event.target);
				if(typeof $se.data(self.settings.attr+"click-cache") !== 'undefined')
					return ;
				//增加cache，防止重复点击
				$se.data(self.settings.attr+"click-cache", true);
				var $loginDom = $se.data(self.settings.attr);
				if(typeof $loginDom === 'undefined') {
					$loginDom = $se.parents("[data-"+self.settings.attr+"]")
				}
				if(typeof $loginDom !== "undefined" && $loginDom.length != 0) {
					self.settings.callback();
					$se.removeData(self.settings.attr+"click-cache");
				}
			});
		}
	}
}($,window))