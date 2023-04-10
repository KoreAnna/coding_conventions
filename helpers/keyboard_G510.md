

echo '<pre>'; print_r($var); echo '</pre>';    // TODO


echo '<hr>Peak: '.number_format(memory_get_peak_usage(false),0,'.',',').' Bytes';    // TODO
echo ' - '.number_format(memory_get_peak_usage(true),0,'.',',').' Bytes';    // TODO
echo '<br>Memory usage: '.number_format(memory_get_usage(false),0,'.',',').' Bytes';    // TODO
echo ' - '.number_format(memory_get_usage(true),0,'.',',').' Bytes<hr>';    // TODO


    // TODO


echo '' . $var . "<br>\n";    // TODO


if (ob_get_level() == 0) ob_start();    // TODO
echo '<pre>'; print_r($var); echo '</pre>pre>';    // TODO
ob_flush();    // TODO
flush();    // TODO
usleep(50000);    // TODO


if (TRUE) { /* TODO */ }


ln -s from to (.)


ps aux | grep php


<!--    -->


echo '<hr>';
echo '<p><b>ERROR:</b></p>';
echo '<p>File: '.__FILE__.'</p>';
echo '<p>Function: '.__FUNCTION__.'</p>';
echo '<p>Line: '.__LINE__.'</p>';
echo '<hr>';    // TODO
die();



$var3 = get_defined_constants(true);    // TODO
$var3 = $var3['user']; ksort($var3);    // TODO
echo 'get_defined_constants: <pre>'; print_r($var3); echo '</pre>';    // TODO
unset($var3);    // TODO
$var2 = get_defined_functions();    // TODO
$var2 = $var2['user']; asort($var2);    // TODO
echo 'get_defined_functions: <pre>'; print_r($var2); echo '</pre>';    // TODO
unset($var2);    // TODO
$var1 = get_defined_vars();    // TODO
ksort($var1);    // TODO
echo 'get_defined_vars: <pre>'; print_r($var1); echo '</pre>';    // TODO
unset($var1);    // TODO


