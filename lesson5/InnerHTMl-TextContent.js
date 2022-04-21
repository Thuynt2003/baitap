var firstItem=document.getElementById('one');
var showTextContent =firstItem.textContent;
var showInerText =firstItem.innerText;
var msg ='<p>'+ showTextContent +'</p>';
    msg +='<p>'+ showInerText + '</p>';
var el = document.getElementById('scriptResults');
    el.innerHTML = msg ;
    firstItem.textContent = 'sourdough bread';
    