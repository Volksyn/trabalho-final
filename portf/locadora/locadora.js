function validaForm(){
	let validaCod = document.forms["cadastrar"]["codígo"].value;
	let validaDat = document.forms["cadastrar"]["data"].value;
	let validaDir = document.forms["cadastrar"]["diretor"].value;
	let validaAtr = document.forms["cadastrar"]["ator"].value;
	let validaTit = document.forms["cadastrar"]["titulo"].value;
	let validaNot = document.forms["cadastrar"]["nota"].value;
	let validaRad = document.forms["cadastrar"]["radio"].value;

	if (validaCod == "") {
		alert("O código deve ser preenchdo!");
		return false;
	}
	if (validaDat == "") {
		alert("A data deve ser preenchdo!");
		return false;
	}
	if (validaDir == "") {
		alert("O diretor deve ser preenchdo!");
		return false;
	}
	if (validaAtr == "") {
		alert("O ator deve ser preenchdo!");
		return false;
	}
	if (validaTit == "") {
		alert("O ator/atriz deve ser preenchdo!");
		return false;
	}
	if (validaNot == "") {
		alert("a nota deve ser preenchdo!");
		return false;
	}
	if (validaRad == "") {
		alert("o tipo deve ser preenchdo!");
		return false;
	}
}
function insert(){
	let cod = document.forms["cadastrar"]["codigo"];
	let Tit = document.forms["cadastrar"]["titulo"].value;
	let Dir = document.forms["cadastrar"]["diretor"].value;
	let Atr = document.forms["cadastrar"]["ator"].value;
	let Dat = document.forms["cadastrar"]["data"].value;
	let Not = document.forms["cadastrar"]["nota"].value;
	let Rad = document.forms["cadastrar"]["radio"].value;

	let insert = window.document.getElementbyId("inserirTabela")
	inserir.innerHTML =`<th scope="row">${cod}</th>`
	inserir.innerHTML +=`<td>${Tit}</td>`
	inserir.innerHTML +=`<td>${Dir}</td>`
	inserir.innerHTML +=`<td>${Atr}</td>`
	inserir.innerHTML +=`<td>${Dat}</td>`
	inserir.innerHTML +=`<td>${Not}</td>`
	inserir.innerHTML +=`<td>${Rad}</td>`
}