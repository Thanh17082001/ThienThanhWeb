<?php
     require_once(dirname(__DIR__,2).'\app\models\ConnectToDb.php');
     class adminDb{
        function checkAcount($infos){
            $connectDb = new ConnectToDb();
            $sql="select * from account__system where email=? and password=?";
            $data=[$infos['email'],$infos['password']];
            $results=$connectDb->select($sql,$data);
            return $results ? 1 : 0;
        }
     }