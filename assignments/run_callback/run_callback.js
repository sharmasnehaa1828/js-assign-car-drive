function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    ans=a+b;
    return cb(ans);
}

module.exports = RunCallback;
