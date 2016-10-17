<?php
/**
 * Created by PhpStorm.
 * User: lc
 * Date: 2016/10/14
 * Time: 17:02
 */
class MyDB extends SQLite3
{

    function __construct(){

    }

    public function openDB(){
        $this->open("sportdata.db");
    }

    public function closeDB(){
        $this->close("sportdata.db");
    }


}


?>