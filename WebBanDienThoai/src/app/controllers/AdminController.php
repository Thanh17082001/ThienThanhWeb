<?php
    require_once('Controller.php');
    require_once(dirname(__DIR__,2).'\app\models\ConnectToDb.php');
    require_once(dirname(__DIR__,2).'\app\models\productsDb.php');
    require_once(dirname(__DIR__,2).'\app\models\AdminDb.php');
    class adminController extends Controller{
   
        public function adminLogin(){
            $this->sendpage('admin/admin-login');
        }
         public function adminCheckLogin(){
            $url=$_SERVER['HTTP_REFERER'];
            $productsDb = new productDb();
            $results= $productsDb->getProducts();
            $adminDb = new adminDb();
            if($adminDb->checkAcount($_POST) == 1){
                $_SESSION["admin"]=[1];
                $this->dislayAllProduct();
            }else{
                $_SESSION["admin"]=null;
                $this->redirect($url,false);

            }
         }

        public function dislayAllProduct(){
            $productsDb = new productDb();
            $results= $productsDb->getProducts();
            $this->sendpage('admin/all-product',['products'=>$results]);

        }
        public function editProduct(){
            $url=$_SERVER['HTTP_REFERER'];
            $queries = array();
            parse_str($_SERVER['QUERY_STRING'], $queries);
            $productsDb = new productDb();
            $results= $productsDb->getProductById($queries['id']);
            $this->sendPage('admin/edit',['products'=>$results]);
        }

        public function editProductInDb(){
            $url=$_SERVER['HTTP_REFERER'];
            $productsDb = new productDb();
            $productsDb->updateProduct($_POST);
            $this->redirect('home',false);
        }
        public function createProduct(){
            $this->sendpage('admin/create');
        }

        public function createProductInDb(){
            $productsDb = new productDb();
            $productsDb->createProduct($_POST);
            $this->redirect('home',false);
        }

        public function deleteProductInDb(){
            $url=$_SERVER['HTTP_REFERER'];
            $productsDb = new productDb();
            $queries = array();
            parse_str($_SERVER['QUERY_STRING'], $queries);
            $productsDb->deleteProduct($queries['id']);
            $this->redirect($url,false);
        }
    }
?>