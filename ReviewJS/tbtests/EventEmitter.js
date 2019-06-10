
class EventEmitter {
    /* 功能实现 */
    constructor() {
        this.eventDict = {}
    }
    on(eventName, cb) {
        if (cb && cb instanceof Function && this.isNameValid(eventName)){
            let cbQ = this.eventDict[eventName] || []
            if (cbQ.length === 0) {
                this.eventDict[eventName] = cbQ;
            }
            cbQ.push(cb);
        }
    }
    emit(eventName) {
        if (this.isNameValid(eventName)) {
            let cbQ = this.eventDict[eventName] || [];
            if(cbQ.length === 0) {
                return;
            } else {
                let args = [...arguments];
                let z = args[0];
                let params = args.splice(1);
                cbQ.forEach(cb => {
                    cb.apply(z, params);
                });
            }
        }
    }    
}
EventEmitter.prototype.isNameValid = function (eventName) {
    if (eventName && typeof eventName === 'string' && eventName.length > 0) {
        return true
    }
    return false;
}

const event = new EventEmitter();
event.on('someEvent', function(...args) {
    console.log('some_event triggered', ...args);
    console.log(JSON.stringify(this))
});

event.emit('someEvent', 'abc', '123');