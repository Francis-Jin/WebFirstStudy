

/**
 *
 * Created by king on 9/14/2017.
 */
function ajax(obj) {
    obj = obj || {};
    obj.type = obj.type || 'GET';
    obj.data = obj.data || "";
    obj.url = obj.url || "";
    obj.async = obj.async || true;

    if(window.XMLHttpRequest)
    {
        var xhr = new XMLHttpRequest();
    }
    else
    {
        var xhr = new ActiveXObject('Microsoft XMLHTTP');
    }
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4)

        {
            if(xhr.status === 200)
            {
                console.log('ok');
                obj.success(xhr.responseText);
            }
            else
            {
                /*if(obj.faling)
                {*/
                    console.error('请求失败了');
                    // obj.faling();
               /* }*/
            }
        }
    }
    xhr.open(obj.type,obj.url+"?"+obj.data,obj.async);
    xhr.send();

}
