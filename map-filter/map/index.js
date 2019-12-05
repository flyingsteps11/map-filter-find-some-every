//метод map
Array.prototype.map = function(cb) {
    let new_arr = [];
    for (let item of this) {
        new_arr.push(cb(item))
    }
    return new_arr
}
