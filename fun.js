//kindly don't remove the commented part, these are used for debugging purposes.

const a=document.querySelector(".container");

const selectedChild1= a.children[1];
const para1=document.createElement("div");
para1.innerText=`Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`
para1.classList.add("para");

const selectedChild2= a.children[3];
const para2=document.createElement("div");
para2.innerText=`Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`
para2.classList.add("para");

const selectedChild3=a.children[5];
const para3=document.createElement("div");
para3.innerText=`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`
para3.classList.add("para");

const selectedChild4=a.children[7];
const para4=document.createElement("div");
para4.innerText=`The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`
para4.classList.add("para");



let plus=document.querySelectorAll("svg");
const svg1=plus[1];
const svg2=plus[2];
const svg3=plus[3];
const svg4=plus[4];

// console.log(svg1.classList[0])

const Minus=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`
const Plus=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`;

let arr=[0,0,0,0];
let sta=["close","close","close","close"];
let svg=[svg1,svg2, svg3, svg4];
let para=[para1,para2,para3,para4];

status_checker=(valu) => {
    for(let i=0;i<4;i++){
        // console.log("entered");

        if(valu!==i){
            // console.log("entered for: ",i);
            if(sta[i]==="open"){
                para[i].remove();
                svg[i].innerHTML=Plus;
                arr[i]++;
                // console.log("increase: ",i);
                sta[i]="close";
                // console.log("closed: ",i);
            }
        }
        console.log(i); 
    }   
}

const minus= (e)=>{
    let current=(e.currentTarget).classList.value;

    switch(current){
        case "svg1":
            arr[0]++;
            console.log("svg1: ",arr[0]);
            if((arr[0]%2)!==0){
                sta[0]="open"
                status_checker(0);
                    // console.log(i);
                    svg1.innerHTML=Minus;
                    selectedChild1.append(para1);
                }
            else{
                sta="close";
                svg1.innerHTML=Plus;
                para1.remove();
            }
            break;
            
        case "svg2":
            
            arr[1]++;
            if((arr[1]%2)!==0){
                sta[1]="open";
                status_checker(1);
                svg2.innerHTML=Minus
                selectedChild2.append(para2); 
            }
            else{
                sta[1]="close";
                svg2.innerHTML=Plus;
                para2.remove(); 
            }
            break;

        case "svg3":
            
            arr[2]++;
            console.log("svg3:",arr[2]);
            if((arr[2]%2)!==0){
                sta[2]="open";
                status_checker(2);
                svg3.innerHTML=Minus
                selectedChild3.append(para3);  
            }
            else{
                sta[2]="close";
                svg3.innerHTML=Plus;
                para3.remove(); 
            }
            break;

        case "svg4":
            arr[3]++;
            // console.log("svg4",arr[3])
            if((arr[3]%2)!==0){
                sta[3]="open";
                status_checker(3);
                svg4.innerHTML=Minus
                selectedChild4.append(para4);
            }
            else{
                sta[3]="close";
                svg4.innerHTML=Plus;
                para4.remove(); 
            }
            break;    
    }
}

svg1.addEventListener("click",minus);
svg2.addEventListener("click",minus);
svg3.addEventListener("click",minus);
svg4.addEventListener("click",minus);


