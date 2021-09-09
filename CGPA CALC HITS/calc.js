console.log("calc.js loaded!");

let res = [];

let gpa=[];

const setValue = (index, id, credit) => { 
     
    res[index] =  document.querySelector(`#${id}`).value*credit;
    console.log(id +"-"+ res[index]);   
};

const calc=()=>{

    for(i=0;i<8;i++){
        gpa[i]=0;
    };

    for(i=0;i<7;i++){
        gpa[0]+=res[i]
    };

    gpa[0]/=21.5;
    gpa[0]=gpa[0].toFixed(2);


    
alert(gpa[0]);

};
















