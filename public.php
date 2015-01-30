<?php
/*
			TaskStep Reborn V 0.1
			Updated By Lue Lusten
			Based On TaskStep V1
			

*/

#This section will be changed later
include("config.php");
include("lang/".$language.".php");

$ThisPageHTML = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>TaskStep Reborn - Public View</title>
		<link rel="stylesheet" type="text/css" href="styles/system/print-style.css" />
	</head>
<body>
<div id="container">';
$print = (isset($_GET['print'])) ? $_GET['print'] : '';
mysql_connect($server,$user,$password);
mysql_select_db($db);
switch ($print){
	case 'section':
		foreach($l_sectionlist as $k=>$v){		
			$l_sectionlistkeys[]=$k;	
		}
		if(isset($_GET["section"]) && in_array($_GET["section"],$l_sectionlistkeys)){
		  $currentsection=$_GET["section"];
		  $title=$l_sectionlist[$_GET["section"]];
		}else{
		  $ThisPageHTML .= "<div class='error'><img src='images/exclamation.png' alt='' /> $l_print_sectionnotfound </div>";
		}
		$result = mysql_query("SELECT * FROM items WHERE section='$currentsection' ORDER BY date");
	break;
case 'project':
case 'context':
	$tid = $_GET["id"];
	$idresult = mysql_query("SELECT * FROM {$print}s WHERE id='$tid'");	//Select the row
	$title = mysql_result($idresult,0,1);	//Select the results of the query in the format (query,row,column)
	$result = mysql_query("SELECT * FROM items WHERE $print='$title' ORDER BY date");	//select the table
break;
case 'all':
	$title = $l_print_printalltasks;
	$result = mysql_query("SELECT * FROM items ORDER BY done,title");	//select the table
break;
case 'today':
	$fancytoday = date("jS M Y");
	$title = "$l_print_printtoday ($fancytoday)";
	$today = date("Y-m-d");
	$result = mysql_query("SELECT * FROM items WHERE date='$today ORDER BY done,title");	//select the table
break;
}

$ThisPageHTML .= "<h1>$title</h1>\n";

if(!isset($cmd)){
	$ThisPageHTML .= "<ul>";
	while($r=mysql_fetch_array($result)){
	   //the format is $variable = $r["nameofmysqlcolumn"];

		$title=htmlentities($r["title"]);
		$date = ($r["date"] != 00-00-0000) ? $r["date"]." | " : '';
		$notes=htmlentities($r["notes"]);
		$url=htmlentities($r["url"]);
		$done=$r["done"];
		$id=$r["id"];
		$context=htmlentities($r["context"]);
		$project=htmlentities($r["project"]);
		$ThisPageHTML .=  "<li>($id)$title<br />\n";
		$ThisPageHTML .=  "$date $context<br />\n";
		$ThisPageHTML .=  "$done</li>\n";
	}
	$ThisPageHTML .= "</ul>\n";
}
$ThisPageHTML .=' 
</div>
</body>
</html>';

echo $ThisPageHTML;
?>