module.exports = {
    myAsyncFun: (callback) => {
        setTimeout(() => {
            callback('blah');
        }, 100);
    },
    myPromiseFun: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('blah');
            }, 100);
        });
    }
}