
// CEP MASK
const $cep_input  =  document.getElementById('cep');
let flag = 0;

$cep_input.addEventListener("keyup", e => {

    if($cep_input.value.length == 9 && e.key == "Enter") {
        buscaCep();
    }
    $cep_input.value = $cep_input.value.replace(/\D/g, '');
    $cep_input.value = $cep_input.value.replace(/(\d{5})(\d)/,'$1-$2');
    $cep_input.value = $cep_input.value.replace(/(-\d{3})\d+?$/, '$1')
    flag = 1;

})

$cep_input.addEventListener('focusout', e =>{
    if(flag == 1){
        flag = 0;
        buscaCep();
    }
});

function buscaCep(){
    let cep = $cep_input.value.replace(/\D/g, "");

    let url = 'http://viacep.com.br/ws/' + cep + '/json';

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.responseType = "json";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) {
                preencheCampos(xhr.response);
            }
        }     
    }
    xhr.send();
}

function preencheCampos(json){
    if("erro" in json) return;
    document.querySelector("#adress").value = json.logradouro;

    document.querySelector("#bairro").value = json.bairro;

    document.querySelector("#city").value = json.localidade;

    document.querySelector("#estado").value = json.uf;
}
// Objeto tipo XMLHttpRequest, o qual realiza requisições AJAX


// xhr.open('GET', url, true);
function setEstado(estado){
    
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}
