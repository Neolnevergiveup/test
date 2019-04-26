/**
 * 日期：2018年11月14日10:46:31
 * 作者：倪桂锋
**/
(function(root){
    var _ = function(){
        if (!(this instanceof _)) {
            return new _();
        }
    }
    // commonjs规范
    typeof moudule !== 'undefined' && moudule.exports ? moudule.exports = _ : root._ = _;
    // AMD规范 requirejs
    if(typeof define === 'function' && define.amd){
        define('underscore',[],function(){
            return {
                _:_
            }
        });
    }
    _.uniq = function(){}
    _.functions = function(obj){
        var result = [];
        var key;
        for(key in obj){
            result.push(key);
        }
        return result;
    }
    _.each = function(target,callback){
        var i = 0;
        if (_.isArray(target)){
            var length = target.length;
            for(;i<length;i++){
                callback.call(target,target[i],i);
            }
        }else{
            for(key in target){
                callback.call(target,key, target[key]);
            }
        }
    }
    _.isArray = function(array){
        return toString.call(array) === '[object Array]';
    }
    _.each(['Function','String','Object','Number'],function(name){
        _['is'+name] = function(obj){
            return toString.call(obj) === '[object name]';
        }
    });
    // 遍历 数组
    _.mixin = function(obj){
        _.each(_.functions(obj), function(name){
            var func = obj[name];
            _.prototype[name] = function(){
                func.call(this);
            }
        });
    }
    _.mixin(_);
})(this);