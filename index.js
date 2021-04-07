// KEYPRESS LISTENER


// var count=0;
// document.querySelector("textarea").addEventListener("keypress",function(event){
//   count++;
// var text=event.key;
// document.querySelector("p").innerHTML="You have pressed "+ count;
// });



// ERROR

// try{
// alert("Hello Everyone");
// alert(x);

// }catch(error){
// console.error(error);

// }finally{
//   alert("Bye Everyone");
// }

// initial count

let count=0;

// select buttons and value

const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
btn.addEventListener("click",function(e){
 const styles= e.currentTarget.classList;

 if(styles.contains("decrease")){
count--;
 }
else if(styles.contains("reset")){
count=0;
}

else{
  count++;
}
if(count<0){value.style.color="green"}
if(count>0){value.style.color="red"}
if(count==0){value.style.color="black"}
value.textContent=count;
})
})
