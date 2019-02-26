<?php

$var1= $_POST["nome"];
$var2= $_POST["Parola"];
$var3= $_POST["genere"];

if ($var3 == "SI"){
	$filtro1 = "giusto" ;
	}
else{
	$filtro1 = "sbagliato";
	}

	if ($var2 == "camino"){
		$filtro2 = "giusto" ;
		}
	else{
		$filtro2 = "sbagliato";
		}


		if ($var1 == ""){
			$filtro3 = "sbagliato" ;
			}
		else{
			$filtro3 = "giusto";
			}



			if($filtro1=="sbagliato" or $filtro2=="sbagliato" or $filtro3=="sbagliato"){
				echo "<h1>Risposta non valida!</h1>Hai sbagliato a compilare la domanda, fai piu attenzione!";
			}else{
				echo "<h1>Complimenti!</h1>La risposta risulta corretta, esercitati ancora per migliorare ancora di più!";
			}


?>