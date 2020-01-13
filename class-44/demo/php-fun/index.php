<?

  include 'stuff.php';


  $greeting = getGreeting();
  $colors = getColors();
  $ages1 = getAges1();
  $ages2 = getAges2();

  echo $greeting;
  echo $colors;
  echo $ages1;
  echo $ages2;

  echo "<h2>Ages (2)</h2>";
  echo "<ul>";
  foreach ($ages2 as $person=>$years) {
    echo "<li>$person - $years</li>";
  }
  echo "</ul>";

?>
