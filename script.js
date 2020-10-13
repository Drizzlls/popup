// модальное окно
document.addEventListener('DOMContentLoaded', function() {
    !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

    let button = document.querySelectorAll('.button'),
        close = document.querySelectorAll('.close'),
        modal = document.querySelector('.modal');



    button.forEach(function(element){
        element.addEventListener('click', function(e){
            element.preventDefault;
            modal.classList.add('hide');
            document.body.style = "overflow:hidden";

        });

    });
    
    close.forEach(function(item){
        item.addEventListener('click', function(e) {
            modal.classList.remove('hide');
            document.body.style = "overflow:visible";
        });
     });

});

