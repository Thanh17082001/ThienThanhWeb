<?php
    require_once('Controller.php');
    require_once(dirname(__DIR__,2).'\app\models\productsDb.php');
    class productController extends Controller{ 
        public function displayProduct(){
            $productsDb = new productDb();
            $results= $productsDb->getProducts();
            $this->sendPage('product',['products'=>$results]);
            // echo json_encode(['products'=>$results]);
        }

        public function productDetail(){
            $queries = array();
            parse_str($_SERVER['QUERY_STRING'], $queries);
            $productsDb = new productDb();
            $results= $productsDb->getProductById($queries['id']);
            $this->sendPage('product-detail',['products'=>$results]);
        }
    };
?>  
