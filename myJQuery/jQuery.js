(function (root) {
    var jQuery = function () { // 构造函数
        return new jQuery.prototype.init()
    }
    jQuery.fn = jQuery.prototype = {
        init: function () {},
        css: function () {}
    }
    jQuery.prototype.init.prototype = jQuery.fn
    // 工具函数
    jQuery.extend = jQuery.prototype.extend = function () {}
    root.jQuery = root.$ = jQuery
})(this)