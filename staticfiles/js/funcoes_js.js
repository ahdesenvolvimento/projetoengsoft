window.onload = function(){
    const nome = document.getElementsByName('nome_cliente_ah');
    const tipo_pagamento = document.getElementById('tipo_pagamento');
    const forma_pagamento = document.getElementById('forma_pagamento');

    
    tipo_pagamento.addEventListener('change', valor_tipo);
    

    forma_pagamento.addEventListener('change', valor_tipo);
    
    
    
    $('.forma_pagamento').hide();
    $('.banco').hide();
    $('.conta').hide();
    $('.parcelas').hide();
    $('.entrada').hide();
    $('.data-vencimento').hide();


    
    for (let i = 0;i < nome.length;i++){
        nome[i].addEventListener('input', inserir);
    }

    function inserir(){
        for (let i = 0;i < nome.length;i++){
            nome[1].value = nome[0].value;
        }
    }



}


function valor_tipo(){
    if (tipo_pagamento.value == '1'){
        $('.forma_pagamento').show();
        if (forma_pagamento.value == '1'){
            $('.banco').show();
            $('.conta').hide();
            
        }
        else if (forma_pagamento.value == '3'){
            $('.conta').show();
            $('.banco').hide();
            $('.data-vencimento').hide();
           
        }
        else if (forma_pagamento.value == '2'){
            $('.conta').hide();
            $('.banco').hide();
            $('.data-vencimento').hide();
        }
    }else if (tipo_pagamento.value == '2'){
        $('.forma_pagamento').show();
        $('.transferencia').hide();
        if (forma_pagamento.value == '1'){
            $('.conta').hide();
            $('.entrada').show();
            $('.parcelas').show();
            $('.data-vencimento').show();
            $('.banco').show();
        }
        else if (forma_pagamento.value == '2'){
            $('.entrada').hide();
            $('.parcelas').show();
            $('.data-vencimento').hide();
        }
        /*
        $('.parcelas').show();
        $('.entrada').show();
        $('.data-vencimento').show();

        */
    }
   
}



function valor_pagamento(){
    if (forma_pagamento.value == '2'){
        $('.banco').hide();
        $('.entrada').hide();
        $('.conta').hide();
    }else if (forma_pagamento.value == '1'){
        
    }
}
    