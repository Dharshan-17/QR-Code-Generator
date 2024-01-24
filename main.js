let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let count = 0;

/* sessionStorage.setItem('name', count) */ 

function generateQR(){
    if(qrText.value.length === 0 & count === 0){
        return;
    }else{
        count++;
        if(qrText.value.length === 0 & count!= 0){
            qrImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&usqp=CAU";
        }/* else if(qrText.value.length === 0 & count === 2){
            qrImage.src.remove();
        } */
        else{
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        }    
    }
}
