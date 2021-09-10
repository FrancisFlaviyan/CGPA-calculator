console.log("calc.js loaded!");

let res = [];

let gpa=[];



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
    gpa[0]/=21.5;


    // sem 2 gpa
    for(i=7;i<17;i++){
        gpa[1]+=res[i]
    };
    gpa[1]/=21.5; 


    // sem 3 gpa
    for(i=0;i<7;i++){
        gpa[2]+=res[i]
    };
    gpa[2]/=21.5;


    // sem 4 gpa
    for(i=0;i<7;i++){
        gpa[3]+=res[i]
    };
    gpa[3]/=21.5;

    

    // sem 5 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[0]/=21.5;


    // sem 6 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[0]/=21.5;


    // sem 7 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[0]/=21.5;


    // sem 8 gpa
    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };
    gpa[0]/=21.5;

    // Decimal places
    for(i=0;i<8;i++){
    gpa[i]=gpa[i].toFixed(2); }
    //


  if(isNaN(gpa[1])){
      alert("fuck off");
  }

  else{
    alert(gpa[1]);}

};
















