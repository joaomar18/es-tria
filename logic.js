
var imp_mod = document.getElementById("imp_mod");

var imp_com = document.getElementById("imp_comp");


var est_tria = document.getElementById("Y-Δ");

var tria_est = document.getElementById("Δ-Y");

//INPUTS*************************************

var imp_z1_in = document.getElementById("z1_in");
var imp_z2_in = document.getElementById("z2_in");
var imp_z3_in = document.getElementById("z3_in");

//OUTPUTS************************************

var imp_z1_out = document.getElementById("z1_out");
var imp_z2_out = document.getElementById("z2_out");
var imp_z3_out = document.getElementById("z3_out");


function calcular(){

var imp_z1 = Number(Number(imp_z1_in.value));
var imp_z2 = Number(Number(imp_z2_in.value));
var imp_z3 = Number(Number(imp_z3_in.value));

if(est_tria.checked==true && imp_mod.checked==true){

if(imp_z1>0 && imp_z2>0 && imp_z3>0){

var z1_final = ((imp_z1*imp_z2)+(imp_z2*imp_z3)+(imp_z1*imp_z3))/imp_z3;
var z2_final = ((imp_z1*imp_z2)+(imp_z2*imp_z3)+(imp_z1*imp_z3))/imp_z1;
var z3_final = ((imp_z1*imp_z2)+(imp_z2*imp_z3)+(imp_z1*imp_z3))/imp_z2;

imp_z1_out.value=(z1_final+" "+"Ω");
imp_z2_out.value=(z2_final+" "+"Ω");
imp_z3_out.value=(z3_final+" "+"Ω");
}
if(imp_z1==0 || imp_z2==0 || imp_z3==0){
imp_z1_out.value="Dados em Falta";
imp_z2_out.value="Dados em Falta";
imp_z3_out.value="Dados em Falta";
}
if(imp_z1<0 || imp_z2<0 || imp_z3<0){
imp_z1_out.value="Dados Inválidos";
imp_z2_out.value="Dados Inválidos";
imp_z3_out.value="Dados Inválidos";
}


}

if(tria_est.checked==true && imp_mod.checked==true){

if(imp_z1>0 && imp_z2>0 && imp_z3>0){

var z1_final = ((imp_z1*imp_z2))/(imp_z1+imp_z2+imp_z3);
var z2_final = ((imp_z1*imp_z3))/(imp_z1+imp_z2+imp_z3);
var z3_final = ((imp_z3*imp_z2))/(imp_z1+imp_z2+imp_z3);

imp_z1_out.value=(z1_final+" "+"Ω");
imp_z2_out.value=(z2_final+" "+"Ω");
imp_z3_out.value=(z3_final+" "+"Ω");
}
if(imp_z1==0 || imp_z2==0 || imp_z3==0){
imp_z1_out.value="Dados em Falta";
imp_z2_out.value="Dados em Falta";
imp_z3_out.value="Dados em Falta";
}
if(imp_z1<0 || imp_z2<0 || imp_z3<0){
imp_z1_out.value="Dados Inválidos";
imp_z2_out.value="Dados Inválidos";
imp_z3_out.value="Dados Inválidos";
}


}

if(est_tria.checked==true && imp_com.checked==true){

var z1 = imp_z1_in.value;
var z2 = imp_z2_in.value;
var z3 = imp_z3_in.value;

//Verificaçao J Impedancia 1*******************************************************************************************

    var lenght_z1= z1.length;

    var x_1=0;
    var y_1=1;

    var pos_j1=1;



    for(i=0;i<lenght_z1;i++){

    var verificaco_j1 = z1.substring(x_1, y_1);

    if(verificaco_j1=="j"){
    break;
    }

    pos_j1 =pos_j1+1;
    x_1=x_1+1;
    y_1=y_1+1;

 }

//Fim Verificaçao J Impedancia 1*******************************************************************************************

//Verificaçao J Impedancia 2*******************************************************************************************

    var lenght_z2= z2.length;

    var x_2=0;
    var y_2=1;

    var pos_j2=1;



    for(i=0;i<lenght_z2;i++){

    var verificaco_j2 = z2.substring(x_2, y_2);

    if(verificaco_j2=="j"){
    break;
    }

    pos_j2 =pos_j2+1;
    x_2=x_2+1;
    y_2=y_2+1;

 }

//Fim Verificaçao J Impedancia 2*******************************************************************************************


//Verificaçao J Impedancia 3*******************************************************************************************

    var lenght_z3= z3.length;

    var x_3=0;
    var y_3=1;

    var pos_j3=1;



    for(i=0;i<lenght_z3;i++){

    var verificaco_j3 = z3.substring(x_3, y_3); 

    if(verificaco_j3=="j"){
    break;
    }

    pos_j3 =pos_j3+1;
    x_3=x_3+1;
    y_3=y_3+1;

 }

//Fim Verificaçao J Impedancia 3*******************************************************************************************

var resistencia_1 =Number(z1.substring(0, pos_j1-2));
var reatancia_1_sem_sinal = z1.substring(pos_j1, lenght_z1);
var sinal_1 = z1.substring(pos_j1-2, pos_j1-1);
var reatancia_1= Number(sinal_1+reatancia_1_sem_sinal);

var resistencia_2 =Number(z2.substring(0, pos_j2-2));
var reatancia_2_sem_sinal = z2.substring(pos_j2, lenght_z2);
var sinal_2 = z2.substring(pos_j2-2, pos_j2-1);
var reatancia_2= Number(sinal_2+reatancia_2_sem_sinal);

var resistencia_3 =Number(z3.substring(0, pos_j3-2));
var reatancia_3_sem_sinal = z3.substring(pos_j3, lenght_z3);
var sinal_3 = z3.substring(pos_j3-2, pos_j3-1);
var reatancia_3= Number(sinal_3+reatancia_3_sem_sinal);



if((resistencia_1>0 || reatancia_1>0 || reatancia_1<0) && (resistencia_2>0 || reatancia_2>0 || reatancia_2<0) && (resistencia_3>0 || reatancia_3>0 || reatancia_3<0)){

var r_z1 = ((resistencia_1*resistencia_2)+(resistencia_2*resistencia_3)+(resistencia_1*resistencia_3))/resistencia_3;
var r_z2 = ((resistencia_1*resistencia_2)+(resistencia_2*resistencia_3)+(resistencia_1*resistencia_3))/resistencia_1;
var r_z3 = ((resistencia_1*resistencia_2)+(resistencia_2*resistencia_3)+(resistencia_1*resistencia_3))/resistencia_2;

if(reatancia_2==0 || reatancia_1==0){
var x_z1 =0;
}
else{
var x_z1 = ((reatancia_1*reatancia_2)+(reatancia_2*reatancia_3)+(reatancia_1*reatancia_3))/reatancia_3;
}

if(reatancia_2==0 || reatancia_3==0){
var x_z2 =0;
}
else{
var x_z2 = ((reatancia_1*reatancia_2)+(reatancia_2*reatancia_3)+(reatancia_1*reatancia_3))/reatancia_1;
}

if(reatancia_1==0 || reatancia_3==0){
var x_z3 =0;
}
else{
var x_z3 = ((reatancia_1*reatancia_2)+(reatancia_2*reatancia_3)+(reatancia_1*reatancia_3))/reatancia_2;
}

imp_z1_out.value=(r_z1+"+"+"j"+x_z1);
imp_z2_out.value=(r_z2+"+"+"j"+x_z2);
imp_z3_out.value=(r_z3+"+"+"j"+x_z3);

}

else{
imp_z1_out.value="Dados em Falta";
imp_z2_out.value="Dados em Falta";
imp_z3_out.value="Dados em Falta";


}

if(resistencia_1<0 || resistencia_2<0 || resistencia_3<0){

imp_z1_out.value="Dados Inválidos";
imp_z2_out.value="Dados Inválidos";
imp_z3_out.value="Dados Inválidos";

}



}




if(tria_est.checked==true && imp_com.checked==true){

var z1 = imp_z1_in.value;
var z2 = imp_z2_in.value;
var z3 = imp_z3_in.value;

//Verificaçao J Impedancia 1*******************************************************************************************

    var lenght_z1= z1.length;

    var x_1=0;
    var y_1=1;

    var pos_j1=1;



    for(i=0;i<lenght_z1;i++){

    var verificaco_j1 = z1.substring(x_1, y_1);

    if(verificaco_j1=="j"){
    break;
    }

    pos_j1 =pos_j1+1;
    x_1=x_1+1;
    y_1=y_1+1;

 }

//Fim Verificaçao J Impedancia 1*******************************************************************************************

//Verificaçao J Impedancia 2*******************************************************************************************

    var lenght_z2= z2.length;

    var x_2=0;
    var y_2=1;

    var pos_j2=1;



    for(i=0;i<lenght_z2;i++){

    var verificaco_j2 = z2.substring(x_2, y_2);

    if(verificaco_j2=="j"){
    break;
    }

    pos_j2 =pos_j2+1;
    x_2=x_2+1;
    y_2=y_2+1;

 }

//Fim Verificaçao J Impedancia 2*******************************************************************************************


//Verificaçao J Impedancia 3*******************************************************************************************

    var lenght_z3= z3.length;

    var x_3=0;
    var y_3=1;

    var pos_j3=1;



    for(i=0;i<lenght_z3;i++){

    var verificaco_j3 = z3.substring(x_3, y_3); 

    if(verificaco_j3=="j"){
    break;
    }

    pos_j3 =pos_j3+1;
    x_3=x_3+1;
    y_3=y_3+1;

 }

//Fim Verificaçao J Impedancia 3*******************************************************************************************

var resistencia_1 =Number(z1.substring(0, pos_j1-2));
var reatancia_1_sem_sinal = z1.substring(pos_j1, lenght_z1);
var sinal_1 = z1.substring(pos_j1-2, pos_j1-1);
var reatancia_1= Number(sinal_1+reatancia_1_sem_sinal);

var resistencia_2 =Number(z2.substring(0, pos_j2-2));
var reatancia_2_sem_sinal = z2.substring(pos_j2, lenght_z2);
var sinal_2 = z2.substring(pos_j2-2, pos_j2-1);
var reatancia_2= Number(sinal_2+reatancia_2_sem_sinal);

var resistencia_3 =Number(z3.substring(0, pos_j3-2));
var reatancia_3_sem_sinal = z3.substring(pos_j3, lenght_z3);
var sinal_3 = z3.substring(pos_j3-2, pos_j3-1);
var reatancia_3= Number(sinal_3+reatancia_3_sem_sinal);



if((resistencia_1>0 || reatancia_1>0 || reatancia_1<0) && (resistencia_2>0 || reatancia_2>0 || reatancia_2<0) && (resistencia_3>0 || reatancia_3>0 || reatancia_3<0)){

var r_z1 = (resistencia_1*resistencia_2)/(resistencia_1+resistencia_2+resistencia_3);
var r_z2 = (resistencia_1*resistencia_3)/(resistencia_1+resistencia_2+resistencia_3);
var r_z3 = (resistencia_2*resistencia_3)/(resistencia_1+resistencia_2+resistencia_3);

if(reatancia_2==0 || reatancia_1==0){
var x_z1 =0;
}
else{
var x_z1 = (reatancia_1*reatancia_2)/(reatancia_1+reatancia_2+reatancia_3);
}

if(reatancia_1==0 || reatancia_3==0){
var x_z2 =0;
}
else{
var x_z2 = (reatancia_1*reatancia_3)/(reatancia_1+reatancia_2+reatancia_3);
}

if(reatancia_2==0 || reatancia_3==0){
var x_z3 =0;
}
else{
var x_z3 = (reatancia_2*reatancia_3)/(reatancia_1+reatancia_2+reatancia_3);
}

imp_z1_out.value=(r_z1+"+"+"j"+x_z1);
imp_z2_out.value=(r_z2+"+"+"j"+x_z2);
imp_z3_out.value=(r_z3+"+"+"j"+x_z3);

}

else{
imp_z1_out.value="Dados em Falta";
imp_z2_out.value="Dados em Falta";
imp_z3_out.value="Dados em Falta";


}

if(resistencia_1<0 || resistencia_2<0 || resistencia_3<0){

imp_z1_out.value="Dados Inválidos";
imp_z2_out.value="Dados Inválidos";
imp_z3_out.value="Dados Inválidos";

}



}







if(tria_est.checked==false && est_tria.checked==false && imp_mod.checked==false && imp_com.checked==false){
imp_z1_out.value="Tipo de conversão?";
imp_z2_out.value="Tipo de conversão?";
imp_z3_out.value="Tipo de conversão?";
}







}




//IMAGENS 


setInterval(imagens, 1000);


function imagens(){

var tri_in = document.getElementById("i-est_i");
var est_in = document.getElementById("i-tri_i");

var tri_out = document.getElementById("i-est_o");
var est_out = document.getElementById("i-tri_o");

if(est_tria.checked==true){
est_in.style.display="block";
tri_in.style.display="none";
tri_out.style.display="block";
est_out.style.display="none";

}
if(tria_est.checked==true){
est_in.style.display="none";
tri_in.style.display="block";
tri_out.style.display="none";
est_out.style.display="block";
}
}


//Function RollDown

var keeptrack=false;

function rolldown(){

var botao_rolldown = document.getElementById("botao_rolldown");
var texto_rolldown = document.getElementById("rolldown");

if(keeptrack==false){
texto_rolldown.style.display='block';
window.scrollTo(0,document.body.scrollHeight);
keeptrack=true;
}
else{
texto_rolldown.style.display='none';
keeptrack=false;
}
}