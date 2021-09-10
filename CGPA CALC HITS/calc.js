console.log("calc.js loaded!");

let res = [];

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
    gpa[2]/=credits[2];


    // sem 4 gpa
    for(i=0;i<7;i++){
        gpa[3]+=res[i]
    };
    gpa[3]/=credits[3];



    // sem 5 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[4]/=credits[4];


    // sem 6 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[5]/=credits[5];


    // sem 7 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[6]/=credits[6];


    // sem 8 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[7]/=credits[7];


    for(i=2;i<8;i++){
        gpa[i]=0;
    };

    // Decimal places
    // for(i=0;i<8;i++){
    // gpa[i]=gpa[i].toFixed(2); }
    //


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





//   if(isNaN(gpa[1])){
//       alert("fuck off");
//   }

//   else{
//     alert(gpa[1]);}

};
















