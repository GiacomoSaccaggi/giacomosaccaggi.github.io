
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };



function countdown() {
  var i = document.getElementById('counter');
  var f = document.getElementById('finito');
  i.innerHTML = parseInt(i.innerHTML)+parseInt(f.innerHTML);
}


function finito() {
  
  var prova = document.getElementById('finito').innerHTML;
  var r = document.getElementById('risultato');
  var rb = document.getElementById('risultato2');
  var trs=document.getElementById('trentsec').innerHTML;
  var p = document.getElementById('nome');
  var c = document.getElementById('click').innerHTML;
  var d = new Date();
  if(trs === "1"){
  var secondi = String(d.getUTCSeconds())-30;
}else{
  var secondi = String(d.getUTCSeconds());
}
  var secnum = Number(d.getUTCSeconds());
  var millisec = String(d.getUTCMilliseconds());
  var i = secondi.concat(".",millisec);
  document.getElementById('counter').innerHTML=i;
  var pre=document.getElementById('numdomanda').innerHTML;
  text = p.elements[1].value;
  var str = new Date().toLocaleString();
  var str = str.split(":");
  var minuti = str[1];
  minuti = Number(minuti);
  var num = document.getElementById('time').innerHTML;
  num= Number(num);
  var num2=minuti-num;

  if(num2>1){
    showPage2(); 
  }else{


    finito_locale();
  var k = document.getElementById('ke').innerHTML;
 if(k === 'errore'){

  document.getElementById("qualcherr").style.display = "block";

  
 }else{
if(prova === "1"){
  
if (secnum < 3) {
  $('body').addClass('easter');
};

  document.getElementById("qualcherr").style.display = "none";
  Email.send({
      Host : "smtp.gmail.com",
      Username : "provaprovariprova123@gmail.com",
      Password : "Ciao!123456789",
      To : 'provaprovariprova123@outlook.it',
      From : "provaprovariprova123@gmail.com",
      Subject : pre.concat("-",c,"-",String(i),"-",String(k.innerHTML)),
      Body : ""
  }).then(
    showPage()
  );
  var f = document.getElementById('finito');
  f.innerHTML = 0;
};
  };};
};



function loader() {
};

function showPage() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("myDiv").style.display = "none";


};
function showPage2() {
  document.getElementById("troppo").style.display = "block";
  document.getElementById("myDiv").style.display = "none";


};



function transferField() {
   var dat=document.getElementById("demo").innerHTML;
   document.getElementById('frame1').contentWindow.document.getElementById('click').innerHTML=dat;
   var tempo=document.getElementById("capire").innerHTMLL;
   document.getElementById('frame1').contentWindow.document.getElementById('time').innerHTML=tempo;
};

function prepareiFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", sito1);
	      ifrm.id="frame1";
        ifrm.style.width = window.innerWidth;
        ifrm.style.height = (window.innerHeight)*0.9;
        ifrm.frameBorder="0";
        document.body.appendChild(ifrm);
};




function homesp(){
  var att = document.getElementById("attesa");
  att.style.display="none";
  var sito1= "spiegazione.html";
  document.getElementById('frame1').src=sito1;
  var elem = document.getElementById("frame1");
  elem.style.display="block";
}
  

function start(){
  var min = 1;
  var max =4;  
  var prova = Math.floor(Math.random() * (max - min + 1)) + min;
  if(prova==4){
    var sito ="https://giacomosaccaggi.github.io/inail/domande/";
    var sito1= sito.concat("domandeacaso", ".html");
    document.getElementById("domanda").innerHTML="acaso";
    document.getElementById("trs").innerHTML=1;
    document.getElementById('frame1').src=sito1;
  }else{
    var minimum = 1;
    var maximum =20;  //da cambiare 
    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var sito ="https://giacomosaccaggi.github.io/inail/domande/domanda";
    var sito1= sito.concat(randomnumber, ".html");
    document.getElementById("domanda").innerHTML=randomnumber;
    document.getElementById("trs").innerHTML=0;
    document.getElementById('frame1').src=sito1;
  }

};

function nome() {
  var sito1= "https://giacomosaccaggi.github.io/inail/spiegazione.html"
  document.getElementById("capire2").innerHTML = 1;
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", sito1);
	ifrm.id="frame1";
  ifrm.width = window.innerWidth;
  ifrm.height = window.innerHeight;
  ifrm.frameBorder="0";
  document.body.appendChild(ifrm);
  login();  
  
};

function tempo(){
  var elem = document.getElementById("frame1");
  elem.style.display="none";
  var att = document.getElementById("attesa");
  att.style.display="block";
  var d = new Date();

  var n1 = String(d.getUTCDate());
  
  var n2 = String(d.getUTCMonth());
  
  var n3 = String(d.getUTCFullYear());
  
  var n4 = d.getUTCHours();
  
  n4=String(n4+2);
    
  var n5 = d.getUTCMinutes();
  
  n5=String(n5+1);
  var n6 = d.getUTCSeconds();
if(n6<17){
  document.getElementById("dataeora").innerHTML = n1+"/"+n2+"/"+n3+" alle ore "+n4+":"+n5+":30";
  var str = new Date().toLocaleString();
  var str = str.split(":");
  var minuti = str[1];
  document.getElementById("capire").innerHTML = minuti;
  document.getElementById("capire2").innerHTML = 0;
  
  document.getElementById('frame1').src="https://giacomosaccaggi.github.io/inail/attesa.html"
}else{
  document.getElementById("dataeora").innerHTML = n1+"/"+n2+"/"+n3+" alle ore "+n4+":"+n5+":00";
  var str = new Date().toLocaleString();
  var str = str.split(":");
  var minuti = str[1];
  document.getElementById("capire").innerHTML = minuti;
  document.getElementById("capire2").innerHTML = 0;
  
  document.getElementById('frame1').src="https://giacomosaccaggi.github.io/inail/attesa.html"
}

}

function login() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}




function accedi(){
  txt=document.getElementById("email").value 
  psw=document.getElementById("psw").value 
  if(psw=="inail2019" & txt!=""){
    document.getElementById("accesso").style.display="none";
    document.getElementById("demo").innerHTML = txt;
    login();
    window.setInterval(function(){
      var x = document.getElementById('demo').innerHTML;
      document.getElementById('frame1').contentWindow.document.getElementById('click').innerHTML = x;
      var tempo=Number(document.getElementById("capire").innerText);
      document.getElementById('frame1').contentWindow.document.getElementById('time').innerHTML=tempo;
      var d=Number(document.getElementById("domanda").innerText);
      document.getElementById('frame1').contentWindow.document.getElementById('numdomanda').innerHTML=d;
      var trs=Number(document.getElementById("trs").innerText);
      document.getElementById('frame1').contentWindow.document.getElementById('trentsec').innerHTML=trs;
    }, 1000);
  }else{
    document.getElementById("accesso").style.display="block";
  }
}