Array.prototype.filter = function (fun) {
    let fil=[];
    for(let i=0;i<this.length;i++){
        if(fun(this[i],i,this)) fil.push(this[i]);
    }
    return fil;
};
let filArray=[1,2,3,4,5,6,].filter(function (element,index, arr) {
    return element>5;
})
console.log(filArray);