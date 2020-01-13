<?
  $count = 0;
  if ( $_POST["how"] === "increment" ) { $count = $_POST["count"] + 1; }
  if ( $_POST["how"] === "decrement" ) { $count = $_POST["count"] - 1; }
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Counter</title>
  </head>
  <body>
    <form method="post" action="/index.php">
      <input type="hidden" name="count" value="<?= $count ?>" />
      <button name="how" value="decrement">-</button>
      <span><? echo $count ?></span>
      <button name="how" value="increment">+</button>
    </form>
  </body>
</html>
