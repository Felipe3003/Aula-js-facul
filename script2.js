const div1=document.querySelector("#div1");

 const numero1 = Number(prompt("digite um numero"));
 const numero2 = Number(prompt("digite outro numero"));

 let media = (numero1+numero2)/2;
 
 
if(media>=6){
    div1.innerHTML =(`a media: ${media}, situação: Aprovado!`);

 }
else{
    div1.innerHTML =(`a media: ${media}, situação: Reprovado!`);
 }