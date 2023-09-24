

export function capitalize(str) {
    str = str.trim();
    const low = str.toLowerCase();
    let first  = str.charAt(0).toUpperCase();
    return first + str.slice(1);
}


//console.log(capitalize("kaka"));