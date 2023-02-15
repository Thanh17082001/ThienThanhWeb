<?php
    // php -S localhost:8080 src/server.php

    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
    require __DIR__ . '\vendor\autoload.php';
    require_once __DIR__ . '\vendor\Psr4AutoloaderClass.php';
    $loader = new Psr4AutoloaderClass; 
    $uri = urldecode(
        parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) // tra ve cac thanh phan cua 1 url nhu la(query,path...)
    );
    
    if ($uri !== '/' && file_exists(__DIR__.'/public' . $uri)) {
        return false;
    }
    
    require_once __DIR__ .'/routers/index.php';
?>
    