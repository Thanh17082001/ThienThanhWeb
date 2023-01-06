<?php
    // session_start();
    // error_reporting( E_ALL & ~E_DEPRECATED );
    require_once dirname(__DIR__) . '\vendor\autoload.php';
    $router = new \Bramus\Router\Router();
    require_once(dirname(__DIR__).'\app\controllers\SiteController.php');
    require_once(dirname(__DIR__).'\app\controllers\ProductController.php');
    require_once(dirname(__DIR__).'\app\controllers\IntroduceController.php');
    require_once(dirname(__DIR__).'\app\controllers\CartController.php');
    require_once(dirname(__DIR__).'\app\controllers\OrderController.php');
    require_once(dirname(__DIR__).'\app\controllers\AdminController.php');
    
    // product routers
    $router->get('/product-detail/?','\ProductController@productDetail');
    $router->get('/product','\ProductController@displayProduct');
    
    // introduce routers
    $router->get('/introduce','\IntroduceController@displayIntroduce');

    // cart routers
    $router->get('/cart','\CartController@displayCart');
    $router->get('/storage/?','\CartController@storageCart');
    $router->get('/delete/?','\CartController@cartDelete');
    $router->get('/update/?','\CartController@updateQuanlityOrder');

    // order 
    $router->post('/order','\OrderController@addOrder');
    $router->get('/history-order','\OrderController@displayHistoryOrder');
    $router->post('/history-order','\OrderController@displayHistoryOrderDetail');

     // admin
    $router->get('/admin/home','\AdminController@dislayAllProduct');
    $router->get('admin/edit/?','\AdminController@editProduct');
    $router->post('admin/edit/','\AdminController@editProductInDb');
    $router->get('/admin/create','\AdminController@createProduct');
    $router->post('/admin/create','\AdminController@createProductInDb');
    $router->get('/admin/delete/?','\AdminController@deleteProductInDb');
    $router->post('/admin/login','\AdminController@adminCheckLogin');
    $router->get('/admin','\AdminController@adminLogin');

    // home page
    $router->get('/','SiteController@index');

    $router->run();