const children = [
    {
        attrs: {
            points: [451, 491, 633, 382],
            pointerLength: 15,
            pointerWidth: 15,
            fill: "red",
            stroke: "red",
            strokeWidth: 4,
        },
        className: "Arrow",
    },
    {
        attrs: {
            points: [400, 450, 600, 350],
            pointerLength: 15,
            pointerWidth: 15,
            fill: "red",
            stroke: "red",
            strokeWidth: 4,
        },
        className: "Arrow",
    },
];

function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

function r(obj) {
    console.log(getType(obj));
}


function recalculateSize(data, x) {
	let t = getType(data)
    switch(t) {
        case 'Number':
            data = parseInt(data*x);
            break;
        case 'Array':
            data.forEach((i, idx) => {
                data[idx] = recalculateSize(i, x);
            })
            break;
        case 'Object':
            for(let k in data) {
                data[k] = recalculateSize(data[k], x)
            }
			break;
        default:
            break;
    }
    return data
}


console.log(JSON.stringify(recalculateSize(children, 2)))