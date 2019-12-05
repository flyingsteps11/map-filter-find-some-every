Array.prototype.find =function (callback) {
    let result;
    for(let i=0;i<this.length;i++){
        let isFound= callback(this[i],i,this)
        if(isFound){
            result=this[i];
            break
        }
    }
return result;
}