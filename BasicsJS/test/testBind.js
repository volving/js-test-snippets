let { shimmerBond, unshimmerBond } = require('../bind.js');

shimmerBond();

function ak (...args) {
    console.log('arguments: ', ...args)
    console.log('Rifle: ', this.model);
    unshimmerBond();
    console.log('unshimmered: ', Function.prototype.bond === undefined);
    return this.model;
}


let showMessage = ak.bond({ model: 'ak-47' }, 'one', 'two', 3);

setTimeout(showMessage, 2000);