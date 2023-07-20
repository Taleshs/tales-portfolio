<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u407387434_wordpress' );

/** Database username */
define( 'DB_USER', 'u407387434_wordpress' );

/** Database password */
define( 'DB_PASSWORD', '+qGhbqBM9m' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define( 'WP_HOME', 'https://develop.taleshenrique.com.br' );
define( 'WP_SITEURL', 'https://develop.taleshenrique.com.br' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r{Hl#{&t8nR<hQq0yJjcB^}sMYo&;.rCN:u0Yre[F=F#y+;#V%3M(&4J<Qfq/UX.' );
define( 'SECURE_AUTH_KEY',  '8v.uQ9_[Y<@SD$,,mSFyD&WC$7 ASb($l8:^w/]z!Ox*vuBwxO];Y,9i_]ngt$ok' );
define( 'LOGGED_IN_KEY',    '*[Hfe*[myjd*,T4[9(s6CPFd$IKUT>qPmI&4(<Mm_!CLZ3`AW8W 5e>l:,XVYs/L' );
define( 'NONCE_KEY',        '?VRSyG3`F8$KAv+t++]_Mv|W!l-q#gfcQASlcX4c9.CQwuuU-;A!}0f2fv7[g,^O' );
define( 'AUTH_SALT',        '<ulZMfSFBi.$EOtL(xXKzLb%c{+9DjgTByq 8Q5,M@~g=Cjsoxekk3)V8m^tc!HR' );
define( 'SECURE_AUTH_SALT', '(tx,qYAHT+o#ApN[cO%sFVNuf)W&B6<8]hvGdoMm7F+Bnb}p%X[~(>fe.31z9ut.' );
define( 'LOGGED_IN_SALT',   'YU_,vUe2tQKTUYLwP)Ob=oI.(gw2%~Do[e8]paVYo5bwRY3^`N-Yhr@febNAKz:{' );
define( 'NONCE_SALT',       '5bkj0:s4=tVh|`h~.5ELW</Lh3*b<<}fJ#e6Awlj;`|X)GI{//x2=/7j`DG$?pL9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */
