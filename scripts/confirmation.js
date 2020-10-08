document.addEventListener('DOMContentLoaded', function(e){
    var body = document.getElementsByTagName('body')[0];
    var h1 = document.getElementById('confirm');
    body.appendChild(h1);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const index = urlParams.get('name');
    
    h1.appendChild(document.createTextNode("Thank you " + index + " shopping with us, your order will be delivered within 5 working days!! Keep shopping"));
    
});