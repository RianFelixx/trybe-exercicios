let a = 60;
let b = 60;
let c = 4332432;

let triangleValid = a > 0 && b > 0 && c > 0;

if (a + b + c === 180){
    if (triangleValid) {
        console.log(true);
    }else{
        console.log(false);
    }
} else{
    console.log('Error');
}