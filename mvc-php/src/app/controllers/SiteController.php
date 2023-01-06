<?php
    require_once('Controller.php');
    require_once(dirname(__DIR__,2).'\app\models\productsDb.php');
    class siteController extends Controller{ 
        public function index(){
            $productsDb = new productDb();
            $results= $productsDb->getProducts();
            $this->sendPage('home',['products'=>$results]);
        }
    };
?>  
