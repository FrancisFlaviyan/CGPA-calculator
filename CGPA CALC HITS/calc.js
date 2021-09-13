console.log("calc.js loaded!");

let res = [];

let cgpa=0;

let cgpaNum=0;
let cgpaDen=0;

      

let gpa=[];

let credits=[17.5,24.5,22,22,23,25,23,8];




const setValue = (index, id, credit) => { 

     
    res[index] =  document.querySelector(`#${id}`).value*credit;
    console.log(id +"-"+ res[index]);   
};



const calc=()=>{

             // setting the gpa value as zero
    for(i=0;i<8;i++){
        gpa[i]=0;
    };

      
             //          ........               //


    // sem 1 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };


    // sem 2 gpa
    for(i=7;i<17;i++){
        gpa[1]+=res[i]
    };



    // sem 3 gpa
    for(i=0;i<7;i++){
        gpa[2]+=res[i]
    };
    


    // sem 4 gpa
    for(i=0;i<7;i++){
        gpa[3]+=res[i]
    };



    // sem 5 gpa
    for(i=0;i<7;i++){
        gpa[4]+=res[i]
    };
    


    // sem 6 gpa
    for(i=0;i<7;i++){
        gpa[5]+=res[i]
    };



    // sem 7 gpa
    for(i=0;i<7;i++){
        gpa[6]+=res[i]
    };
    


    // sem 8 gpa
    for(i=0;i<7;i++){
        gpa[7]+=res[i]
    };
    


    for(i=2;i<8;i++){
        gpa[i]=0;
    };

  


     //cgpa

     let cgpa=0;

var cgpaNum=0;
var cgpaDen=0;


     for(i=0;i<7;i++){
    

        if(!isNaN(gpa[i])&&gpa[i]!=0) {
            cgpaNum+=gpa[i];
            cgpaDen+=credits[i];
        }
     }

     cgpa=cgpaNum/cgpaDen;
     cgpa=cgpa.toFixed(2);

     alert(cgpa);




};
















