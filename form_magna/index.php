<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Invio i dati</title>
</head>

<body>
<form action="ricevitore.php" method="post" name="datiUtenti">
Copia codice cliente: <input type="text" name="nome" /></br>
Riscrivi la parola tra le parentesi, "camino": <input type="text" name="parola" /></br>
vuoi partecipare al concorso INAIL: <select name="genere">
<option value="si" selected="selected">si</option>
<option value="no">no</option>
</option>
</select>
</br>
<input type="submit" />
</form>
</body>
</html>
