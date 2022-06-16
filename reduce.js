function extractValue(arr, key){
    return arr.reduce(function(fv,nv){
        fv.push(nv[key]);
        return fv;
    },[]);
}

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(fv,nv){
        let lowerCased = nv.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(fv[lowerCased]){
                fv[lowerCased]++;
            } else {
                fv[lowerCased] = 1;
            }
        }
        return fv;
    }, {});
}

function addKeyandValue(arr, key, val){
    return arr.reduce(function(fv,nv){
        fv.push(nv[key],val);
        return fv;
    },[]);
}

function partition(arr, func){
    return arr.reduce(function(fv,nv){
        func(nv) === true ? fv[0].push(nv) : fv[1].push(nv);
        return fv;
    }, [[],[]]);
}