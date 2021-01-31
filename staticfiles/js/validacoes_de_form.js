


    /*
    const cpf = document.getElementsByName('cpf');
    const rg = document.getElementsByName('rg');
    const email = document.getElementsByName('email');
    const gmail = document.getElementsByName('gmail');
    const telefone = document.getElementsByName('telefone');
    const senha = document.getElementsByName('senha');
    const data = document.getElementsByName('data');
    const hora = document.getElementsByName('hora');
    */
   
const cpf = document.getElementById('cpf');
const rg = document.getElementById('rg');

const email = document.getElementById('email');
//const gmail = document.getElementById('gmail');
//const telefone = document.getElementById('telefone');
//const senha = document.getElementById('senha');
//const data = document.getElementById('data');
//const hora = document.getElementById('hora');
const cpf_msg = document.getElementById('cpf_message');

const potencia_ah = document.getElementById('potencia_kw_ah');

if (cpf != null){
    cpf.addEventListener('keypress', validacao_cpf);
}

if (rg != null){
    rg.addEventListener('keypress', validacao_rg);

}
if (potencia_ah != null){
        potencia_ah.addEventListener('input', validar_potencia);
}



function validar_potencia(){
    document.getElementById('message_potencia').innerText="Valor da potência não pode ser menor igual a 0";
}


//telefone.addEventListener('keypress', validar_telefone);
//email.addEventListener('input', validacao_email);

function validacao_cpf(e){
    if (permitir_apenas_numeros()){
        return true;
    }else {
        return false;
    }
    
    /*
    if (cpf.nodeValue.length == 11){
        e.preventDefault();
    }
    */
}

function validacao_rg(e){
    if (permitir_apenas_numeros()){
        return true;
    }else {
        return false;
    }
    /*
    if (rg.nodeValue.length == 8){
        e.preventDefault();
    }
    */
} 
function validacao_email(e){
    /*MINIMO 3 CARACTERES MAXIMO 64*/
    if (email.value[0].charCodeAt(0) < 65 || email.value[0].charCodeAt(0) > 122){
        e.preventDefault();
        alert('hmm');
    }
 
    /*
    if (rg.nodeValue.length == 8){
        e.preventDefault();
    }
    */
} 

function validar_telefone(e){
    if (permitir_apenas_numeros()){
        return true;
    }else{
        return false;
    }
}

function permitir_apenas_numeros(e){
    if (event.charCode < 48 || event.charCode > 57){
        event.preventDefault();
        return true;
    }
}

function validacao_cpf_com_mensagem(e, mensagem){
    
    if (e){

        if (validacao_cpf()){
            
            document.getElementById('cpf_message').innerText=mensagem
        }else{
            
            document.getElementById('cpf_message').innerText=''
        }
    }
}

function validacao_rg_com_mensagem(e, mensagem){
    if (e){
        if (validacao_rg()){
            document.getElementById('rg_message').innerText=mensagem
        }else{
            document.getElementById('rg_message').innerText=''
        }
    }
}

function validacao_telefone_com_mensagem(e, mensagem){
    if (e){
        if (validar_telefone()){
            document.getElementById('telefone_message').innerText=mensagem
        }else{
            document.getElementById('telefone_message').innerText=''
        }
    }
}