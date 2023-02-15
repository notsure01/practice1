function merge(x, y)
{   var short;
    var all;
    if(x.length > y.length){ short = y.length}
    else{short = x.length}
    for(var i=0; i<short; i++)
    {
        all.push(x[i]);
        all.push(y[i]);
    }
    return all;
}