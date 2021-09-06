console.log("calc.js loaded!");

let res = [];
const setValue = (id, className) => { //eg: id-grade1 className: gradeA
    let tempRes = document.querySelector(`.${className}`).value;
    let obj = {
        id,
        grade: tempRes
    };
    res[id] = obj;
    console.table(res);
    console.log(res[1]);
    console.log(res[1].id, "id");
    console.log(res[1].grade, " grade");
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