/**
 * Created by dev on 9/03/16.
 */
//show validate code form
document.querySelector('.box.main button')
        .addEventListener('click',function(){
           document.querySelector('.box.validate-code')
               .setAttribute('data-activate-window','');
        });
//validating code
document.querySelector('.validate-code button')
        .addEventListener('click',function(e){
            e.preventDefault();
            document.querySelector('.box.welcome')
                .setAttribute('data-activate','')
        });
document.querySelector('.welcome button')
    .addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector('.box.user-form')
            .setAttribute('data-left','')
    });
document.querySelector('.close')
    .addEventListener('click',function(){
       this.parentNode.removeAttribute('data-activate-window');
    });