console.log("calc.js loaded!");

let res = [];
const setValue = (id, className) => { //eg: id-grade1 className: gradeA
    let tempRes = document.querySelector(`.${className}`).value;
    console.log(tempRes, " grade");
    res.push(tempRes);
    console.table(res, "array of result");
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