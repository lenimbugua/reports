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

$result2 = sqlsrv_query($conn,"SELECT [Date Worked], [ACTIVITY], SUM(Units) FROM DEFRTS.dbo.UnitLineBatch WHERE ACTIVITY = 'SHP - SHEAR PLUCKING' OR ACTIVITY =  'HPL - HAND PLUCKING' OR ACTIVITY = 'MTH - MECHANICAL HARVESTING' GROUP BY [Date Worked],  ACTIVITY");

$response = array();

$response["pluckingMode"] = array();

while($rs2 = sqlsrv_fetch_array( $result2, SQLSRV_FETCH_NUMERIC)) {
    $field = array();
    
    $field["date"] =  $rs2[0]->format('Y-m-d');
    $field["activity"] = $rs2[1];
    $field["totalUnits"] = $rs2[2];
    array_push($response["pluckingMode"], $field);
}

sqlsrv_free_stmt($result2);
 
sqlsrv_close( $conn);

echo(json_encode($response));
?>