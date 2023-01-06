<?php
    require_once('Controller.php');
    class introduceController extends Controller{ 
        public function displayIntroduce(){
            $this->sendPage('introduce');
        }
    };
?>  
