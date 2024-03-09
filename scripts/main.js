$(document).ready(function(){
    
    $('#button').click(function(e){
    e.preventDefault()
    const valor_input = $('#input').val()
    if (valor_input === 'saudade'){
        $('#saudade').css('display', 'block');
    }
    if (valor_input === 'csa'){
        $('#csa').css('display', 'block');
    }
    if (valor_input === 'fofa'){
        $('#fofa').css('display', 'block');
    }
    if (valor_input === 'praia'){
        $('#praia').css('display', 'block');
    }
    if (valor_input === 'tudo'){
        $('#tudo').css('display', 'block');
    }
    })
})