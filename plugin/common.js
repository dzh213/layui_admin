layui.define(['layer'], function(exports) {
    "use strict";
 
    var $ = layui.jquery,
    layer = layui.layer;
    var domain = "http://gateway.baidu.con";
    var common = {
        domain: domain,
        auth: domain + "/yijia-auth/",
        /**
         * 抛出一个异常错误信息
         * @param {String} msg
         */
        throwError: function(msg) {
            throw new Error(msg);
            return;
        },
        /**
         * 弹出一个错误提示
         * @param {String} msg
         */
        msgError: function(msg) {
            layer.msg(msg, {
                icon: 5
            });
            return;
        }
    };
 
    exports('common', common);
});
