<script>
    function ajax(opts){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
                var json = JSON.parse(xmlhttp.responseText);
                opts.success(json);
            }
            if(xmlhttp.readyState === 4 && xmlhttp.status === 404){
                opts.error();
            }
        };
        var dataStr = "";
        for (var key in opts.data) {
            dataStr += key +'='+ opts.data[key]+ '&';
        }
        dataStr = dataStr.substr(0,dataStr.length-1);

        if(opts.type.toLowerCase() === "get"){
            xmlhttp.open("GET",opts.url+"?"+dataStr,true);
            xmlhttp.send();
        }
        if(opts.type.toLowerCase() === "post"){
            xmlhttp.open("POST",opts.url,true);
            xmlhttp.setRequestHeader("Contenr-type","application/x-www-form-urlencoded");
            xmlhttp.send(dataStr);
        }
    };

    document.querySelector('.btn').addEventListener('click', function(){
        ajax({
            url: 'http://www.b.com:8080/data.js',
            type: 'get',
            data: {
                username: 'xiaoming',
                password: 'abcd1234'
            },
            success: function(res){
                onSuccess(res);
            },
            error: function(){
                console.log('出错了')
            }
        })
    });

    function onSuccess(json){
        console.log(json)
    };
</script>