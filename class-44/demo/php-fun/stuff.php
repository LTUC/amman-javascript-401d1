<?

  function getGreeting() {
    $name = $_GET['name'];
    return "<h1>Hello $name, from php</h1>";
  }

  function getColors() {
    $colors = array("red", "green", "blue", "yellow");
    $html = "<h2>Colors</h2>";
    $html .= "<ul>";
    foreach ($colors as $value) {
      $html .= "<li>$value </li>";
    }
    $html .= "</ul>";
    return $html;
  }
   
  function getAges1() {
    $ages = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
    $html .= "<h2>Ages</h2>";
    $html .= "<ul>";
    foreach ($ages as $person=>$years) {
      $html .= "<li>$person - $years</li>";
    }
    $html .= "</ul>";
    return $html;
  }


  function getAges2() {
    $ages['Peter'] = 35;
    $ages['Ben'] = 37;
    $ages['Joe'] = 43;
    return $ages;
  }

?>
