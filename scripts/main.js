$(document).ready(function(){
    
    $('#button').click(function(e){
    e.preventDefault()
    const valor_input = $('#input').val()
    if (valor_input === 'saudade'){
        $('#saudade').css('display', 'block');
        alert("Parabéns lalaa, você acertou uma palavra nova e liberou um texto oculto !")
        $('#input').val('')
    }
    else if (valor_input === 'csa'){
        $('#csa').css('display', 'block');
        alert("Parabéns lalaa, você acertou uma palavra nova e liberou um texto oculto !")
        $('#input').val('')
    }
    else if (valor_input === 'fofa'){
        $('#fofa').css('display', 'block');
        alert("Parabéns lalaa, você acertou uma palavra nova e liberou um texto oculto !")
        $('#input').val('')
    }
    else if (valor_input === 'praia'){
        $('#praia').css('display', 'block');
        alert("Parabéns lalaa, você acertou uma palavra nova e liberou um texto oculto !")
        $('#input').val('')
    }
    else if (valor_input === 'tudo'){
        $('#tudo').css('display', 'block');
        alert("Parabéns lalaa, você acertou uma palavra nova e liberou um texto oculto !")
        $('#input').val('')
    }
    else if (valor_input === 'maturidade'){
        $('#maturidade').css('display', 'block');
        alert("Parabéns lalaa, você acertou uma palavra nova e liberou um texto oculto !")
        $('#input').val('')
    }
    else if (valor_input === 'eu te amo'){
        $('#te-amo').css('display', 'block');
        alert("Parabéns lalaa, você acertou uma palavra nova e liberou um texto oculto !")
        $('#input').val('')
    }
    else{
        alert('aff lala. você errou, mas não desista')
        $('#input').val('')
    }
    })
    $('.em-breve').click(function(){
        alert("hmmm, um dia esse link ainda vai funcionar, aguarde !!! hehehee")
    })
})