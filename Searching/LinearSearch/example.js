let arr = [1, 6, 43, 65, 10];

let key = 43;

let position = find(arr, key);

function find(arr, key){
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==key){
            return i;
        }
    }
}

console.log(`The position of the element ${key} is ${position}`);

