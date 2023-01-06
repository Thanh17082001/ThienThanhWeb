<?php
    require_once('Controller.php');
    require_once(dirname(__DIR__,2).'\app\models\productsDb.php');
    session_start();
    class cartController extends Controller{ 
        public function displayCart(){
            if(isset($_SESSION["cartStorage"])){
                $this->sendPage('cart',['products'=>$_SESSION["cartStorage"]]);
            }else{
                $this->sendPage('cart');
            }
        }
        
        public function storageCart(){
            $productsDb = new productDb();
            $url=$_SERVER['HTTP_REFERER'];
            $queries = array();
            parse_str($_SERVER['QUERY_STRING'], $queries);
            $results= $productsDb->getProductById($queries['id']);
            $results[0]+=['quanlityOrder'=> 1];
            $results[0]+=['totalPrice'=>$results[0]['price'] ];
            if(isset($_SESSION["cartStorage"])){
                $isProduct=$this->checkIsProduct($_SESSION["cartStorage"],$queries['id']);
                if($isProduct < 0){
                    $_SESSION["cartStorage"];
                    $_SESSION["cartStorage"]=$this->addProductToSession($_SESSION["cartStorage"],$results);
                }else{
                    $_SESSION["cartStorage"][$isProduct]['quanlityOrder']=
                        $_SESSION["cartStorage"][$isProduct]['quanlityOrder']+1;

                    $_SESSION["cartStorage"][$isProduct]['totalPrice']=
                        $_SESSION["cartStorage"][$isProduct]['quanlityOrder'] * 
                        (int)$_SESSION["cartStorage"][$isProduct]['price'];
                }
            }else{
                $_SESSION["cartStorage"]=$results;
            }
            // echo json_encode($_SESSION["cartStorage"]);
            $this->redirect($url,false);
            // $this->sendPage('cart',['products'=>$_SESSION["cartStorage"]]);
        }


        public function addProductToSession($session, $newItem){
            $items=[];
            foreach($session as $data){
                array_push($items, $data);
            }
            array_push($items, $newItem[0]);
            return $items;
        }

        public function checkIsProduct($session,$id){
            $index=-1;
            for($i=0;$i<count($session);$i++){
                if((int)$session[$i]['id'] ===(int) $id){
                    $index=$i;
                    break;
                }else{
                    $index=-1;
                }
            }
            return $index;
        }

        public function cartDelete() {
            $queries = array();
            parse_str($_SERVER['QUERY_STRING'], $queries);
            $index=$this->checkIsProduct($_SESSION["cartStorage"],$queries['id']);
            \array_splice($_SESSION["cartStorage"], $index, 1);
            $this->redirect('/cart',false);
        }

        public function updateQuanlityOrder(){
            $url=$_SERVER['HTTP_REFERER'];
            $queries = array();
            parse_str($_SERVER['QUERY_STRING'], $queries);
            $index=$this->checkIsProduct($_SESSION["cartStorage"],$queries['id']);
            
            if((int)$queries['quantity'] <= 0){
                $this->cartDelete();
                
            }else{
                $_SESSION["cartStorage"][$index]['quanlityOrder']=(int)$queries['quantity'];
                $_SESSION["cartStorage"][$index]['totalPrice']=$_SESSION["cartStorage"][$index]['quanlityOrder'] * (int)$_SESSION["cartStorage"][$index]['price'];
                
            }
            $this->sendPage('cart',['products'=>$_SESSION["cartStorage"]]);
            // // echo json_encode($_SESSION["cartStorage"]);
            // echo json_encode($_SESSION["cartStorage"][$index]);
        }

        public function totalPrice(){

        }
    };
?>  
