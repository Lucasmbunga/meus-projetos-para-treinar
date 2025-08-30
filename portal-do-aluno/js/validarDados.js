const validacaoDados=()=>{

    if(document.fLogin.nome.value=="Lucas" && document.fLogin.senha.value==11102004){
        document.getElementById("button-acessar").style.transition="1.5s"
        document.getElementById("button-acessar").style.backgroundColor="rgba(44, 154, 44, 0.93)"
        document.getElementById("button-acessar").style.boxShadow="0px 0px 5px black"
    }
    
}

const enviarDados=()=>{
    let erro=false
    if(document.fLogin.nome.value!=="Lucas" && document.fLogin.nome.value!==""){
            document.getElementById("erro-nome").innerHTML="O nome do usuário não está correto. Tente novamente!"
            document.fLogin.nome.focus();
            erro=true;
    }
    if(document.fLogin.senha.value!=="11102004" && document.fLogin.senha.value!==""){
        document.getElementById("erro-senha").innerHTML="A senha não está correta. Tente novamente!"
        document.fLogin.senha.focus();
        erro=true;
    }

    if(document.fLogin.nome.value=="" && document.fLogin.senha.value==""){
        erro=true;
    }
    
    if(erro==false){
        document.fLogin.submit();
    }
}