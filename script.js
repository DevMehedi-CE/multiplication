let box = document.querySelector(".box")
let btn = document.querySelector(".btn")
let error = document.querySelector(".error")
let show = document.querySelector(".show")

// btn.addEventListener("click", function(){
//     if(box.value ==""){
//         error.innerHTML = "Please Given a Number"
//     }

//     else{
//         for(i=1;i<=box.value;i++){
//             show.innerHTML+=`<ul class="text${i}">${i} Number Multiplication</ul>`

//             for(j=1;j<=10;j++){
//                 document.querySelector(`.test{i}`).innerHTML+=`<li>${i} x ${j} = ${i*j} </li>`
//             }
//         }
//     }
// })


btn.addEventListener("click",function(){
    if(box.value == ""){
        error.innerHTML = "please give a number"
    }else{
        if(!(box.value-1)){
            error.innerHTML = "please give a valid number"
        }else{

        for(i=1;i<=box.value;i++){
            show.innerHTML += `<ul class="test${i}">${i} Number Multiplication</ul>`
        for(j=1;j<=10;j++ ){
            document.querySelector(`.test${i}`).innerHTML += `<li>${i} x ${j} = ${i*j}</li>`   
        }
}
        }
    }
})


























// let MultiNumber =5;
// let ignore =3;

// for(i=1;i<=MultiNumber;i++){
  
//   if(i!=ignore){
//     console.log(`${i} multiplication start`)
//     for(j=1;j<=10;j++){
//         console.log(i+ " x "+ j + " = " +i*j )
//     }
//     console.log(`${i} multiplication end`)
//   }
//   else{
//     console.log(i +  "multiplication missing")
//   }
  
// }