<?php
    require_once('Controller.php');
    require_once(dirname(__DIR__,2).'\app\models\OrderDb.php');
    class orderController extends Controller{ 
        public function addOrder(){
            $orderDb = new OrderDb();
            $url=$_SERVER['HTTP_REFERER'];
            if ($_SERVER["REQUEST_METHOD"] == "POST"){
                $orderDb->addOrderToDb($_POST);
                $orderDb-> addDetailOrder($_POST['phone'],$_SESSION["cartStorage"]);
                $_SESSION["cartStorage"]=null;
                $this->redirect($url,false);
                // echo json_encode($_SESSION["cartStorage"]);
            }
        }

        public function displayHistoryOrder(){
            $this->sendPage('history-order');
        }
        public function displayHistoryOrderDetail(){
            $orderDb = new OrderDb();
            $this->sendPage('history-order-detail',['orders'=> $orderDb->showOrder($_POST['phone'])]);
        }
    };
?>  
