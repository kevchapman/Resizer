function Resizer(opts){
	var defaults = {
		delay: 300
	};
	this.opts = $.extend({},defaults,opts);
	this.b = $('body');
	this.w = this.b.width();
	this.functions = [];
	this.init();
}
Resizer.prototype = {
	init:function(){
		var t = this;
			window.onresize = function(){
				var w = t.b.width();
				if(w !== t.w){
					t.run();
					t.w = w;
				}
		}
	},
	add:function(f){
		this.functions.push(f);
	},
	run:function(){
		var t = this;
		t.timer ? clearTimeout(t.timer) : '';
		t.timer = setTimeout(function(){
			var i, l = t.functions.length;
			for(i=0; i<l; i++){
				t.functions[i].call(t);
			}
		},t.opts.delay);
	}
}