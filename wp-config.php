<?php

// Set your environment/url pairs
$environments = array(
	'local'       => 'tales-henrique.lndo.site',
	'develop' => 'develop.taleshenrique.com.br',
	'production'  => 'taleshenrique.com.br'
);

// Get the hostname
$http_host = $_SERVER['HTTP_HOST'];



// Loop through $environments to see if there’s a match
foreach($environments as $environment => $hostname) {
	if (stripos($http_host, $hostname) !== FALSE) {
		define('ENVIRONMENT', $environment);
		break;
	}
}

if (!defined('ENVIRONMENT')) exit('No database configured for this host');

$wp_db_config = 'wp-config/wp-db-' . ENVIRONMENT . '.php'; 

// Check to see if the configuration file for the environment exists
if (file_exists(__DIR__ . '/' . $wp_db_config)) {
  require_once($wp_db_config);
} else {
  // Exit if configuration file does not exist
  exit('No database configuration found for this host');
}

define('UPLOADS', 'storage');


/* That’s all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
  define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
