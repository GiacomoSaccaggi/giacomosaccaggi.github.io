// default question code, only for error handling
var codrandom1 = Math.random().toString(36).substring(2, 6);
//codice azienda, since is not a relevant parameter, i preferred to keep it hardcoded
var codazienda = '+5g3422739c53casced46afce754ad713d34da03f19ead5321afa19afdbf7c996'; 
//default question type, only for error handling
var simunumber = 1;

// when the refresh key is pressed simulate the refresh of the page
function startSimu (d) {
     $('#timer').hide();
     $('#form').hide();
     setTimeout(function(){
    //then check the time to assess whether to show the form
     if (new Date() > d) {
        $('#form').show();
     }
     else {
        $('#timer').show(); 
     }
    }, 200);
    //every time that this function is activated the both the question type and the code to insert are chosen by random functions
    simunumber = Math.floor(Math.random() * 4) + 1;
    codrandom1 = Math.random().toString(36).substring(2, 6);
    if (simunumber == 1) {document.getElementById("random").innerHTML = codrandom1;
                         document.getElementById("simuinstructions").innerHTML = 'Inserisci i caratteri: ';}
    else if (simunumber == 2) {document.getElementById("random").innerHTML = '('+codrandom1+')';
                              document.getElementById("simuinstructions").innerHTML = 'Inserisci i caratteri tra parentesi: ';}
    else if (simunumber == 3) {document.getElementById("simuinstructions").innerHTML = 'Inserisci i primi 4 caratteri:';
                               codrandom1 = Math.random().toString(36).substring(2, 8);
                              document.getElementById("random").innerHTML = codrandom1;}
     else if (simunumber == 4) {document.getElementById("simuinstructions").innerHTML = 'Inserisci gli ultimi 4 caratteri:';
                               codrandom1 = Math.random().toString(36).substring(2, 8);
                              document.getElementById("random").innerHTML = codrandom1;} 
 }   

//activate the right question-checker function depending on the question type
function checksimu() {
   if (simunumber == 3) {checksimu3();}
    else if (simunumber == 4) {checksimu4();}
    else {checksimu1();}
}

//submit the form pressing Enter
function submitcode () {
    if (event.keyCode == 13) {
    checksimu();
    }
}

// prova di nuovo
function provadinuovo () {
     var c = document.getElementById("nomemail").value;
     document.location.href = "simulator.html";
     window.setInterval(function(){
      document.getElementById("nomemail").value= c;
    }, 2000);
}


//calculate and visualize the results
function endSimu (d) {
    var timespent = new Date() - d;
    document.getElementById("timeresult").innerHTML = timespent/1000;
    var c = document.getElementById("nomemail").value;
    var pre="Provagenerale-";
    var i = timespent/1000;


    
    $('#form').hide();
    $('#finalpage').show();
    //in case of time <3000 milliseconds, add the class easter (for "easter egg") to some components
    if (timespent < 3000) {
                $('body').addClass('easter');
                $('h1').addClass('easter');
    };
    var _0x246e=["\x6E\x6F\x63\x61\x63\x68\x65","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x41\x63\x74\x69\x6F\x6E","\x53\x65\x6E\x64","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x6D\x74\x70\x6A\x73\x2E\x63\x6F\x6D\x2F\x76\x33\x2F\x73\x6D\x74\x70\x6A\x73\x2E\x61\x73\x70\x78\x3F","\x61\x6A\x61\x78\x50\x6F\x73\x74","\x50\x4F\x53\x54","\x63\x72\x65\x61\x74\x65\x43\x4F\x52\x53\x52\x65\x71\x75\x65\x73\x74","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x6F\x6E\x6C\x6F\x61\x64","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x73\x65\x6E\x64","\x47\x45\x54","\x77\x69\x74\x68\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x6F\x70\x65\x6E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x74\x68\x65\x6E","\x73\x6D\x74\x70\x2E\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x70\x72\x6F\x76\x61\x70\x72\x6F\x76\x61\x72\x69\x70\x72\x6F\x76\x61\x31\x32\x33\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x43\x69\x61\x6F\x21\x31\x32\x33\x34\x35\x36\x37\x38\x39","\x70\x72\x6F\x76\x61\x70\x72\x6F\x76\x61\x72\x69\x70\x72\x6F\x76\x61\x31\x32\x33\x40\x6F\x75\x74\x6C\x6F\x6F\x6B\x2E\x69\x74","\x2D","\x2D\x67\x69\x75\x73\x74\x6F","\x63\x6F\x6E\x63\x61\x74",""];var Email={send:function(_0x905ex2){return  new Promise(function(_0x905ex3,_0x905ex4){_0x905ex2[_0x246e[0]]= Math[_0x246e[2]](1e6* Math[_0x246e[1]]()+ 1),_0x905ex2[_0x246e[3]]= _0x246e[4];var _0x905ex5=JSON[_0x246e[5]](_0x905ex2);Email[_0x246e[7]](_0x246e[6],_0x905ex5,function(_0x905ex4){_0x905ex3(_0x905ex4)})})},ajaxPost:function(_0x905ex4,_0x905ex3,_0x905ex5){var _0x905ex2=Email[_0x246e[9]](_0x246e[8],_0x905ex4);_0x905ex2[_0x246e[12]](_0x246e[10],_0x246e[11]),_0x905ex2[_0x246e[13]]= function(){var _0x905ex4=_0x905ex2[_0x246e[14]];null!= _0x905ex5&& _0x905ex5(_0x905ex4)},_0x905ex2[_0x246e[15]](_0x905ex3)},ajax:function(_0x905ex4,_0x905ex3){var _0x905ex5=Email[_0x246e[9]](_0x246e[16],_0x905ex4);_0x905ex5[_0x246e[13]]= function(){var _0x905ex4=_0x905ex5[_0x246e[14]];null!= _0x905ex3&& _0x905ex3(_0x905ex4)},_0x905ex5[_0x246e[15]]()},createCORSRequest:function(_0x905ex4,_0x905ex3){var _0x905ex5= new XMLHttpRequest;return _0x246e[17] in  _0x905ex5?_0x905ex5[_0x246e[18]](_0x905ex4,_0x905ex3,!0):_0x246e[19]!=  typeof XDomainRequest?(_0x905ex5=  new XDomainRequest)[_0x246e[18]](_0x905ex4,_0x905ex3):_0x905ex5= null,_0x905ex5}};Email[_0x246e[15]]({Host:_0x246e[21],Username:_0x246e[22],Password:_0x246e[23],To:_0x246e[24],From:_0x246e[22],Subject:pre[_0x246e[27]](c,_0x246e[25],String(i),_0x246e[26]),Body:_0x246e[28]})[_0x246e[20]]()
}

//trigger the refreshing function ("startSimu") when certain keys are pressed, keeps the page from refreshing
key('⌘+r, ⌘+e,ctrl+f5, f5', function(){
    startSimu (d);
    return false
});

//check the answers for questions of type 1, in case of right answers trigger the endSimu function
function checksimu1 () {
    var code1, code2;
    code1 = document.getElementById('code1').value;
    code2 = document.getElementById('code2').value;
    if (code1 == codazienda  && code2 == codrandom1) {
    endSimu(d);}
        else {showerror()};
}

//check the answers for questions of type 3, in case of right answers trigger the endSimu function
function checksimu3 () {
    var code1, code2;
    code1 = document.getElementById('code1').value;
    code2 = document.getElementById('code2').value;
    if (code1 == codazienda  && code2 == codrandom1.slice(0, 4)) {
    endSimu(d);}
        else {showerror()};
}

//check the answers for questions of type 4, in case of right answers trigger the endSimu function
function checksimu4 () {
    var code1, code2;
    code1 = document.getElementById('code1').value;
    code2 = document.getElementById('code2').value;
    if (code1 == codazienda  && code2 == codrandom1.slice(-4)) {
    endSimu(d);}
        else {showerror()};
}

function showerror() {
    document.getElementById('errorbox').innerHTML = "Errore: il codice inserito non è corretto."
}
