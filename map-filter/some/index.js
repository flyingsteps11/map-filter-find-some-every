Array.prototype.some =function (callback,context) {
    for(let i=0; i<this.length;i++){
        if(callback.call(context,this[i],i,this))
            return true;
    }
    return false;
}
/*
let pas=[12,2,4,5,].some(function (element) {
    return(element>2)
})
 */