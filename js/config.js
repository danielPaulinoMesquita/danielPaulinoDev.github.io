 function colocar(){
    var spring= document.getElementById("tab1");
    var conteudoSpring= document.createElement("p");
     var texto=document.createTextNode("Olá testando paragrafo gerado etals")
    conteudoSpring.appendChild(texto);
    spring.appendChild(conteudoSpring);
};
var a$=jQuery.noConflict(true);
a$('#menu-navegacao').find('a').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = a$(this.hash);
        target = target.length ? target : a$('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            a$('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
