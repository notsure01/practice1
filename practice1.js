    var text1;
    var text2;
    function storeString(){
        
     text1 = document.getElementById("string1").value;
     text2 = document.getElementById("string2").value;

    }

    function merge(x, y){
        var longer;
        var all = "";
        var array1 = [...x];
        var array2 = [...y];

        if(array1.length > array2.length)  // 找出較長的字串
        { longer = array1.length;}
        else
        { longer = array2.length;}

        for(var i=0; i<longer; i++)
        {   
            if(i < array1.length)
            {all += array1[i];}
            if(i < array2.length)
            {all += array2[i];}
        
        }

        document.getElementById("demo").innerHTML = all;
        return all;
    }