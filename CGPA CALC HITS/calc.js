console.log("calc.js loaded!");

let res = [];
let gpa;
const setValue = (id, className, credit) => { //eg: id-grade1 className: gradeA
    let tempRes = document.querySelector(`.${className}`).value*credit;
    let obj = {
        id,
        grade: tempRes
    };
    res[id] = obj;
    console.log(id +"-"+ res[id].grade);
    


    if(res.length==6){
        // console.table(res);
        // for(i=0;i<6;i++){
        // console.table(res[i].grade);
        
        // }

        gpa=(res[0].grade+res[1].grade+res[2].grade+res[3].grade+res[4].grade+res[5].grade)/21;
        console.log("your gpa is"+gpa);
        alert("your gpa is  "+gpa);


        
    }
    
    // console.table(res);
    // console.log(res[1]);
    // console.log(res[1].id);
    // console.log(res[1].grade);
};
















// function getvalue(){
//     var x=document.querySelector("select[1]");
//     // console.log("working fun");
//     // console.log(x);
//     // console.log(x.id);
//     console.log(x.className);
//     x="";

//     if (x.classname==="five-cred"){
//         console.log("working if");

// var grade = document.querySelector(".five-cred");
// var res = grade.value;
// // console.log("grade score="+res+"   credit score="+res*5);
// console.log(res);
//     }


//     else if (x.classname==="four-cred") {

//         var grade = document.querySelector(".four-cred");
//         var res = grade.value;
//         // console.log("grade score="+res+"   credit score="+res*5);
//         console.log(res);
//             }


// };