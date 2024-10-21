const arr = [1,2,3,4,5,6,7,8,9,10];
const len = arr.length;
const key = 7;

function checkElement(arr,key){
for(let i=0;i<len;i++){
    if(key==arr[i]){
        return true;
    }
    else{
        return false;
    }
}
}

checkElement(arr,key);