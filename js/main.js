function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; // <b></b> coloca em negrito
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/"); // abre um nova tela
   // window.location.href = "https://globallabs.academy/"; //abre na mesma tela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; // ao passar o mouse trocar o texto
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar o texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}

/*
function soma(n1, n2){
    return n1 + n2;
}*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/


/* apreendemos a trabalhar com datas

var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours));
alert(d.getMinutes));
*/

/* Estrutura de repetição utilizando for

var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/


/* estrututa de repertição utilizando while

var count = 0;
while (count <= 5){
    console.log(count);
   // count = count + 1; ou posso fazer assim
   alert(count); // com a alert ou sem alert
   count++;
};
*/





/* ex de condicionais (if e else)

var idade = prompt ("Qual sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


/* ex lista de dicionarios

var frutas = [{nome:"maç a", cor: "vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[0].nome); 
*/


/* ex dicionario

var fruta = {nome: "maça", cor: "vermelha"}
//console.log(fruta);
//console.log(fruta.nome);
console.log(fruta.cor);
*/


/* ex lista

//var lista = ["maça", "pêra", "laranja"]
//lista.push("uva");
//lista.pop();
*/

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



 //var nome = "  Ednel Aragão";
 //var n1 = 5;
 //var n2 = 3;
 //var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));