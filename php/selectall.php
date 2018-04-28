<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/db_config.php';

$connectionInfo = array( "UID"=>DB_USER,                            
                         "PWD"=>DB_PASSWORD,                            
                         "Database"=>DB_DATABASE
                     );

/* Connect using SQL Authentication. */  
$conn = sqlsrv_connect( "localhost", $connectionInfo);

$result2 = sqlsrv_query($conn,"SELECT *  FROM DEFRTS.dbo.UnitLineBatch ");





$rs2 = sqlsrv_fetch_array( $result2, SQLSRV_FETCH_NUMERIC); 

sqlsrv_free_stmt($result2);
 
sqlsrv_close( $conn);

echo(json_encode($rs2));
?>