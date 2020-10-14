//Multiplication using return function

var mul = function(x) {
    return function(y) {
        return function(z) {
            return x*y*z;
        }
    }
}

console.log('Here', mul(2)(3)(4));