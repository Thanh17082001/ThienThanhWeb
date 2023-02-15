<?php
    require_once(dirname(__DIR__,2).'\app\models\ConnectToDb.php');
    class orderDb{
        public function addOrderToDb($info){
            $connectDb = new ConnectToDb();
            $sql='insert into user_order(fullname,phone,address,note,status,order_date) values(?,?,?,?,?,?)';
            $data=[$info['fullname'],$info['phone'],$info['address'],$info['note'],1,date("Y-m-d")];
            $connectDb->select($sql,$data);
        }

        public function addDetailOrder($phone,$infoProduct){
            $connectDb = new ConnectToDb();
            $idOrders=$this->getIdOrder($phone);
            $sql='insert into order_detail(id_order,id_product,quanlity,price_order) values(?,?,?,?)';
            for($i=0;$i<count($idOrders);$i++){
                for($j=0;$j<count($infoProduct);$j++){
                    $data=[$idOrders[$i]['id'],$infoProduct[$j]['id'],$infoProduct[$j]['quanlityOrder'],$infoProduct[$j]['totalPrice']]; // con thieu o day *******
                    $connectDb->insert($sql,$data);
                    $this->updateStatus($idOrders[$i]['id']);
                }
                $data=[];
            }
        }
       
        public function getIdOrder($phone){
            $connectDb = new ConnectToDb();
            $sql='select * from user_order where phone= ? and status= ?';
            $data=[$phone,1];
            $results=$connectDb->select($sql, $data);
            return $results; 
        }

        public function getIdOrder2($phone){
            $connectDb = new ConnectToDb();
            $sql='select * from user_order where phone= ? ';
            $data=[$phone];
            $results=$connectDb->select($sql, $data);
            return $results; 
        }

        public function updateStatus($idOrder){
            $connectDb = new ConnectToDb();
            $sql="UPDATE user_order SET status=? WHERE id=?";
            $data=[0,$idOrder];
            $results=$connectDb->select($sql, $data);
        }

        public function showOrder($phone){
            $connectDb = new ConnectToDb();
            $idOrders=$this->getIdOrder2($phone);
            $rows=[];
            $sql='select p.name,od.quanlity,od.price_order,uo.order_date from order_detail od
            inner join product p on od.id_product=p.id
            inner join user_order uo on od.id_order=uo.id
            where uo.id=? ' ;
            for($i=0;$i<count($idOrders);$i++){
                $data=[$idOrders[$i]['id']];
                $rows[$i]=[
                    $idOrders[$i],
                    $connectDb->select($sql, $data)
                ]
                ;
            }
            return $rows;
        }
    }
?>

