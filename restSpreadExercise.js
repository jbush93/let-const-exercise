function filterOutOdds(...nums) {
    return nums.filter((n) => n % 2 === 0)
};

function findMin(...nums) {
    return nums.reduce((fv,nv) => fv < nv ? fv : nv);
};

// check this
function mergeObjects(ob1,ob2){
    return {...ob1,...ob2}
}

function doubleAndReturnArgs(arr,...args){
    return [...arr, ...args.map((n) => n * 2)]
};

const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    console.log(idx);
    return [...items.slice(0,idx), ...items.slice(idx + 1)]
};

const extend = (arr1,arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj,key,val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1,obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj,key,val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}