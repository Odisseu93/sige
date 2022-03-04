const btnAdd = document.getElementById("btnInserir");
cont = 0; //contador
btnAdd.addEventListener("click", addItens);// addEventListener() "escuta" o objeto 

//notação húngara 

function addItens() {
  var fnAddRows = document.createElement("tr");
  var txtContInput = document.getElementById("txtConteudo");
  var textDescInput = document.getElementById("txtDescricao");
  var rdnValueStatus = document.querySelector("input[name='rdnStatus']:checked");//https://www.youtube.com/watch?v=J254pngGt6E
  console.log(cont);

  // if (rdnValueStatus.value=="Estudar") {
  //   alert("você selecionou Estudar!");
  // }

  fnAddRows.innerHTML = "<td>" + txtContInput.value +
    "</td>" + "<td>" + textDescInput.value +
    "</td>" + "<td>" + rdnValueStatus.value + "</td>";

  document.getElementById("Rows").appendChild(fnAddRows);
  cont++; //adiciona +1 na contagem
}

const btnRemove = document.getElementById("btnRemover");
btnRemove.addEventListener("click", removeItens);// addEventListener() "escuta" o objeto 

function removeItens() {
  var rows = document.getElementById("Rows").childNodes;
  //https://www.youtube.com/watch?v=4x2BpypEZDc

  document.getElementById("Rows").removeChild(rows[cont]);
  cont--; // diminiu -1 na contagem
}
