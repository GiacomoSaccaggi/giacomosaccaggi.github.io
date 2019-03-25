
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };



function countdown() {
  var i = document.getElementById('counter');
  var f = document.getElementById('finito');
  i.innerHTML = parseInt(i.innerHTML)+parseInt(f.innerHTML);
}


function finito() {
  var f = document.getElementById('finito');
  var prova = document.getElementById('finito').innerHTML;
  f.innerHTML = 0;
  var r = document.getElementById('risultato');
  var rb = document.getElementById('risultato2');
  var p = document.getElementById('nome');
  var c = document.getElementById('click').innerHTML;
  var d = new Date();
  var secondi = d.getUTCSeconds();
  var millisec = d.getUTCMilliseconds();
  var i = secondi+"."+millisec;
  document.getElementById('counter').innerHTML=i;
  var pre="Provagenerale-"
  text = p.elements[1].value;
  var str = new Date().toLocaleString();
  var str = str.split(":");
  var minuti = str[1];
  minuti = Number(minuti);
  var num = document.getElementById('time').innerHTML;
  num= Number(num);
  var num2=minuti-num;

  if(num2>2){
    showPage2(); 
  }else{



  finito_locale();

  var k = document.getElementById('ke');
if(prova === "1"){
  Email.send({
      Host : "smtp.gmail.com",
      Username : "provaprovariprova123@gmail.com",
      Password : "Ciao!123456789",
      To : 'provaprovariprova123@outlook.it',
      From : "provaprovariprova123@gmail.com",
      Subject : pre.concat(c,"-",String(i.innerHTML ),"-",String(k.innerHTML)),
      Body : ""
  }).then(
    showPage()
);
};
  };
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
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
        document.body.appendChild(ifrm);
};





  

function start(){
  var minimum = 1;
  var maximum =5;  //da cambiare 
  var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  var sito ="https://giacomosaccaggi.github.io/inail/domanda";
  var sito1= sito.concat(randomnumber, ".html");
  document.getElementById('frame1').src=sito1;
};

function nome() {
  var sito1= "https://giacomosaccaggi.github.io/inail/spiegazione.html"
  document.getElementById("capire2").innerHTML = 1;
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", sito1);
	ifrm.id="frame1";
  ifrm.style.width="100%";
  ifrm.style.height="1000px";

  document.body.appendChild(ifrm);
  login();  
  var sbatti=window.setInterval(function(){
      psw=document.getElementById("psw").value;  
      if(psw!="inail2019"){
        //da cambiare la password
        login();
      }else{
        clearInterval(sbatti);
      }
   }, 60000);
};

function tempo(){
  var str = new Date().toLocaleString();
  var str = str.split(":");
  var minuti = str[1];
  document.getElementById("capire").innerHTML = minuti;
  document.getElementById("capire2").innerHTML = 0;
  
  document.getElementById('frame1').src="https://giacomosaccaggi.github.io/inail/attesa.html";
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
    }, 2000);
  }else{
    document.getElementById("accesso").style.display="block";
  }
}