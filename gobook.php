<?php
$_checkin = (isset($_POST['CheckIn']))? str_replace('/','',$_POST['CheckIn']) : '';
$_checkout = (isset($_POST['CheckOut']))? str_replace('/','',$_POST['CheckOut']) : '';
$_ad = (isset($_POST['ad']))? $_POST['ad'] : 0;
$_ch = (isset($_POST['ch']))? $_POST['ch'] : 0;
$url = 'https://res2.omnibees.com/default.aspx?q=1610&NRooms=1';
$params = '&CheckIn='.$_checkin;
$params .= '&CheckOut='.$_checkout;
$params .= '&ad='.$_ad;
$params .= '&ch='.$_ch;
$_ag = '';
for($x=1; $x <= $_ch; $x++){
	$_ag .= '5';
	//echo $_ch .' | '. $x . '<br>';
	if($_ch != $x)
		$_ag .= ';';
	//if($x )
}
$params .= '&ag='.$_ag;
//$params .= '&IsBannerHide=True';
//echo $url.$params;
//exit;
header('location:'. $url.$params);
?>