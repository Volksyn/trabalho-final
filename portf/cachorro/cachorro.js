function insere(){
	let Don = document.forms["cadastrar"]["Dono"].value;
	let Dog = document.forms["cadastrar"]["Ca"].value;
	let Dat = document.forms["cadastrar"]["Data"].value;
	let Hor = document.forms["cadastrar"]["Hora"].value;
	let Tel = document.forms["cadastrar"]["Tele"].value;
	let radi = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${Don}</th>`;
	inserir.innerHTML +=	`<td>${Dog}</td>`;
	inserir.innerHTML +=	`<td>${Dat}</td>`;
	inserir.innerHTML +=	`<td>${Hor}</td>`;
	inserir.innerHTML +=	`<td>${Tel}</td>`;
	inserir.innerHTML +=	`<td>${radi}</td>`
}