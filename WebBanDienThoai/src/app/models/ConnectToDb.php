<?php
    class ConnectToDb{
        private $servername = "localhost";
        private $username = "root";
        private $password = "17082001";
        private $dbname = "CNW";
        function connect(){
            try {
                $conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
            }
            return $conn;
        }
    
        function query($sql){
            $conn=$this->connect();
            $stmt=$conn->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetchAll();
            return $row;
        }

        function insert($sql,$data){
            $conn=$this->connect();
            $stmt=$conn->prepare($sql);
            $stmt->execute($data);
        }

        function select($sql,$data){
            $conn=$this->connect();
            $stmt=$conn->prepare($sql);
            $stmt->execute($data);
            $row = $stmt->fetchAll();
            return $row;
        }
    }
    
    


    