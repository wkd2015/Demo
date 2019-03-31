class Promise {
    constructor(exec) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) => {
            if (this.status == 'pending') {
                this.status = 'fulfiled';
                this.value = value;
            }
        };
        let reject = (reason) => {
            if (this.state == 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
        };
        try {
            exec(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
}