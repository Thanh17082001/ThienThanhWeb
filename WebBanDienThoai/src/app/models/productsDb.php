<?php
    require_once(dirname(__DIR__,2).'\app\models\ConnectToDb.php');
    class productDb{
        function getProducts(){
            $connectDb = new ConnectToDb();
            $sql='select * from product where quanlity > 0 and deleted=1';
            $results=$connectDb->query($sql);
            return $results;
        }

        function getProductById($id){
            $connectDb = new ConnectToDb();
            $sql='select * from product where id='.$id;
            $results=$connectDb->query($sql);
            return $results;
        }

        function updateProduct($infoProduct){
            $connectDb = new ConnectToDb();
            $sql='UPDATE product SET name=?, price=?, quanlity=?, img=?, updated_at=? WHERE id=?';
            $data=[$infoProduct['name'], $infoProduct['price'],$infoProduct['quanlity'], $infoProduct['img'], date("Y-m-d")
                    , $infoProduct['id']];
            $connectDb->select($sql,$data);
           
        }

        function createProduct($infoProduct){
            $connectDb = new ConnectToDb();
            $sql='INSERT INTO product (id_category, img, name, price, quanlity,deleted,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?)'; //
            $data=[1, $infoProduct['img'], $infoProduct['name'], $infoProduct['price'],(int)$infoProduct['quanlity'],1,date("Y-m-d")
                ,date("Y-m-d")];
            $connectDb->select($sql,$data);
        }

        function deleteProduct($id){
            $connectDb = new ConnectToDb();
            $sql='UPDATE product SET deleted=? WHERE id=?';
            $data=[0 ,$id];
            $connectDb->select($sql,$data);
        }
    }
?>

