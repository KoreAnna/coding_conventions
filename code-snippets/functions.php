<?php

/** Globals ************************************************************************************ **/

  include_once('../inc/define.php');
  define('ID', '000');
  define('PATH', '/');
  define('TITLE', 'Title hier');

  /* <title><?=TITLE;?> - <?=ID;?> - <?=PROJECT_NAME;?></title> */
  /* <meta name="description" content="<?=TITLE;?> - <?=ID;?> - <?=PROJECT_NAME;?>" /> */


/** Errors ************************************************************************************* **/

  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  ini_set('log_errors', 'On');
  ini_set('error_log', DOCROOT);


/** MVC Model ********************************************************************************** **/

  include_once('ClassName.php');
  $class = new ClassName();

  include_once('controller.php');

  include_once('view.php');


/** Function: Write at end of existing file ********************************************************
 * @param string $file (req)
 * @param string $text (req)
 * @return boolean
 * **/
function file_fwrite_a($file, $text) {

  $fopen = fopen($file, 'a');

  if ($fopen !== false) {

    $text = $text."\n";

    fwrite($fopen, $text);
    fclose($fopen);

    return true;
  }

  return false;
}
