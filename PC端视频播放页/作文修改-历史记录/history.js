function judge(){
    var history = document.getElementById('history'); // 获取ul元素 
    var liCount = history.getElementsByTagName('li').length; // 获取ul中li的个数 
    var main=document.getElementById("main");
    if(liCount==0)
        {
            main.setAttribute("style","height:760px;");
            console.log("无li");
            var img = document.createElement("img");
            img.setAttribute("src", "../image/图标.png");
            img.setAttribute("style","display: block;margin:97px auto; width: 340px;height:178px;");
            img.setAttribute("title","空空如也噢~");
            img.setAttribute("alt","空空如也噢~");
            history.appendChild(img);
            //document.body.appendChild(img);
        }
}
judge();