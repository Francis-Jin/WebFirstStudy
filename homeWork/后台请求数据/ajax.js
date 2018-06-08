/**
 *
 * Created by king on 9/13/2017.
 */
function ajax(method,url,callbackSucced,callbackFailing)
{
    var xhr = null;
    if(window.XMLHttpRequest)
    {
        //FF、chrome、opera ....
        xhr = new XMLHttpRequest();
    }
    else
    {
        //IE
        xhr = new ActiveXObject('Microsogt.XMLHTTP');
    }
    xhr.open(method,url,true);
    xhr.send();
    xhr.onreadystatechange = function ()
    {
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200)
            {
                console.log('已请求成功！');
                callbackSucced(xhr.responseText);
            }
            else
            {
               if(callbackFailing)
               {
                   console.error('请求失败,请检查您的地址或网卡是否正确无误');
                   callbackFailing();
               }
            };
        };
    };
};
