console.log("calc.js loaded!");

let res = [];
let gpa=0;
const setValue = (id, className, credit) => { //eg: id-grade1 className: gradeA
    let tempRes = document.querySelector(`.${className}`).value*credit;
    let obj = {
        id,
        grade: tempRes
    };
    res[id] = obj;
    console.log(id +"-"+ res[id].grade);

    // for(i=0;i<res.length;i++) { res[i].grade}

  
    if (res.length > 0) {
        for (i = 0; i < res.length; i++) {
            if (res[i].grade) {
                gpa += res[i].grade
            }
        };
        gpa /= 22;
        gpa = gpa.toFixed(2);
        console.log("your gpa is" + gpa);
        // alert("your gpa is  " + gpa);
    }

    // if(res.length>0){

    //     for(i=0;i<res.length;i++){
        
    //         gpa+=res[i].grade};

    //         gpa/=22;
    //         gpa=gpa.toFixed(2);
        
       
        
    //     console.log("your gpa is"+gpa);
    //     // alert("your gpa is  "+gpa);

    //     if(res[i].grade){gpa+=res[i].grade}


        
    // }
    
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