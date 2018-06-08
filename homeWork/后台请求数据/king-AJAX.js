/**
 *
 * Created by king on 9/14/2017.
 * 1.路径
 * 2.请求方法
 * 3.传递的数据
 * 4.成功之后执行相关方法
 *
 *
 * 5.返回数据类型
 * 6.指明是否异步
 * 7.针对jsonp跨域，需要指定的回调函数
 *
 */
var json = {};
/**
 * @param options (传入的请求相关)
 * @return type = String
 */

json.ajax = function (options) {
    var method = options.method;
    var url = options.url;
    //
    var data = options.data;
    var async = options.async;
    var success = options.success;
    var error = options.error;
    if(method.toUpperCase() === 'GET')
    {
        url = url+'?';
        //    遍历对象
        for(var k in data)
        {
            url = url + k + '=' + data[k] + '&';
        }
        url = url.substring(0,url.length-1);
    };

    if(window.XMLHttpRequest)
    {
        var xhr = new XMLHttpRequest();
    }
    else
    {
        var xhr = new ActiveXObject('Microsoft XMLHTTP');
    };


    xhr.open(method,url,async);

    xhr.send(data);

    xhr.onreadystatechange = function () {
        var statsCode = xhr.status.toString().charAt(0) === '2' || xhr.status.toString().charAt(0) === '3';
        if(xhr.readyState === 4)
        {
            if(statsCode)
            {
                if(success)success.call(this,xhr.responseText);
            }
            else
            {
                // throw new Error('请求错误。。。');
                var error1 = new Error('相关错误！');
                console.log('请求失败了。。。。')
                error.call(this,error1);
            }
        }
    }

}

