const myEmojis = ["🤖","👾","👻"];

 

const input_data = document.getElementById("emoji-input");
const addbtn = document.getElementById("add-end");
const container =  document.getElementById("emojiContainer");
const addbeg = document.getElementById("addatbeg");

const remove_end = document.getElementById("removeend");
const remove_beg = document.getElementById("removebeg");


remove_beg.addEventListener('click',function (){


  
    
    myEmojis.shift();
    
   render();
    
    
    
    
    
    });

remove_end.addEventListener('click',function (){


    
    
    myEmojis.pop();
   
   render();
    
   
    
    
    
    });



addbeg.addEventListener('click',function (){


    if(input_data.value){
    
    myEmojis.unshift(input_data.value);
    console.log(myEmojis);
    input_data.value="";
    render();
    
    }
    
    
    
    });





addbtn.addEventListener('click',function (){


if(input_data.value){

myEmojis.push(input_data.value);
console.log(myEmojis);
input_data.value="";
render();

}



});



function render(){

let listitem = "";
container.innerHTML="";
console.log(myEmojis);
for(let i=0;i<myEmojis.length;i++){

listitem +=`<span> ${myEmojis[i]}  </span>`

}



container.innerHTML=listitem;


}
render();