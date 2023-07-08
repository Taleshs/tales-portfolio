<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'wordpress' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'wordpress' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'wordpress' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'database' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%wc@oO8CcbVE&/S5l8-&oj2mL9dw,=z##KOFTo;BDLI>3B`.g?cAI^W2{F>I|h`>' );
define( 'SECURE_AUTH_KEY',  's%nidXDsfuZc1]brwNjX]J-GS!NU`Lx:AhgyWu=(vwNGUC >vsT)7viT];TwI$r,' );
define( 'LOGGED_IN_KEY',    'CVpDsrj5*VNZ)n.0^,*ZR9I_t&ksh$8.w}?F[^kp/h5THgMlP!D/CCiv!~W/jN@|' );
define( 'NONCE_KEY',        'X;d-G5,!WdaB~/47ZehnFU79m`Jq+f)>:&Bc{hD5]Y-`k`~q6Z2sH>g2_vUAU}3i' );
define( 'AUTH_SALT',        ':Ct~`zwOh4jS6/_um?a])MkS0MVTOqG]qS y:tf| L=pYkE0$_d&*sS/]km~u@&{' );
define( 'SECURE_AUTH_SALT', '>^p`b|x7b}J[a@M1&[!NKGdip7.Ce|?l>G1IcZr-w7p`h{TXx2BCC8YAMr`|qC5<' );
define( 'LOGGED_IN_SALT',   '3&D_I>h9mjCKpf~Laudwq?M~&x/~@yF`-0p+7_5h!EK=If:mNy9+i(SlrmBbdqFj' );
define( 'NONCE_SALT',       'J{0KQM0ZgmJscN.KdEivN84r`Q)QFDT1Z-fbGc]-}VrIGYr6aRh&)z&$n!?L)$S[' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_ths_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
