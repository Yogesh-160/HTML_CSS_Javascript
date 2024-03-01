let bulbon = document.querySelector('#bulb');
let btn = document.querySelector('button');

let click = 0;

btn.addEventListener("click",function(){
    if(click == 0){
        click=1;
        bulbon.style.backgroundImage ="url(https://img.freepik.com/free-vector/realistic-lit-light-bulb-isolated_1284-41774.jpg?t=st=1709310109~exp=1709310709~hmac=7b03eb0dcbdb3efab69a2cd373e91ec6fa02a964c0aca8568207b0585f5eee16)";
        btn.innerHTML = "OFF";
        console.log("Clicked")
    }
    else{
        click = 0;
        bulbon.style.backgroundImage = "url(https://img.freepik.com/free-vector/realistic-light-bulb-isolated_1284-41741.jpg?w=740&t=st=1709324640~exp=1709325240~hmac=da79b5df9f7402c63e019830dacb6913952e804a2236a8a19b8306d1352e8b35)";
        btn.innerHTML = "ON"
        console.log("Again clicked");
    }

})