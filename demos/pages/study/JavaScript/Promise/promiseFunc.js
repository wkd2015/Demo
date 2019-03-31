function Promise(exector) {
    let self = this;
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'resolved';
            self.resolvedCallbacks.forEach(fn => fn());
        }
    }

    function reject(error) {
        if (self.status === 'pending') {
            self.reason = error;
            self.status = 'rejected';
            self.rejectedCallbacks.forEach(fn => fn());
        }
    }

    try {
        exector(resolve, reject);
    } catch (error) {
        reject(error)
    }
}

Promise.prototype.then = function (fulfilled, rejected) {
    fulfilled = typeof fulfilled === 'function' ? fulfilled : function (data) {
        return data;
    }
    rejected = typeof rejected === 'function' ? rejected : function (err) {
        throw err;
    }
    let self = this;
    if (self.status === 'resolved') {
        return new Promise((resolve, reject) => {
            try {
                console.log('resolved')
                let x = fulfilled(self.value);
                if (x instanceof Promise) {
                    console.log('promise')
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    if (self.status === 'rejected') {
        return new Promise((resolve, reject) => {
            try {
                let x = rejected(self.value);
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    if (self.status === 'pending') {
        self.resolvedCallbacks.push(() => {
            let x = fulfilled(self.value);
            if (x instanceof Promise) {
                x.then(resolve, reject)
            } else {
                resolve(x)
            }
        });

        self.rejectedCallbacks.push(() => {
            let x = rejected(self.value);
            if (x instanceof Promise) {
                x.then(resolve, reject)
            } else {
                resolve(x)
            }
        });
    }
}