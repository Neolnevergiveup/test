(function (window, factory) {
    window.Vue = factory()
})(this, function () {
    // 默认配置
    var _DEFALT_ = {
        el: 'body',
        data: {}
    }
    var Vue = function (options) {
        this.extend(this, _DEFALT_, options)
        this.observer()
    }
    Vue.prototype = {
        extend: function () {
            for (var i = 1; i < arguments.length; i++) {
                for (var key in arguments[i]) {
                    this[key] = arguments[i][key]
                }
            }
        },
        observer: function () {
            var app = document.getElementById('app')
            var element = app.querySelectorAll('[v-model]')
            var _this = this
            for (var i = 0; i < element.length; i++) {
                element[i].oninput = function () {
                    _this.data[this.getAttribute('v-model')] = this.value
                }
            }
            for (var key in this.data) {
                Object.defineProperty(this.data, key, {
                    get: function () {
                        return this.str
                    },
                    set: function (val) {
                        var element = app.querySelectorAll('[v-model=' + key + ']')
                        for (var i = 0; i < element.length; i++) {
                            element[i].value = val
                            element[i].innerText = val
                        }
                        this.str= val
                    }
                })
            }
        }
    }
    return Vue
})