
<?php

class MyPush
{
  protected $push;
  function __construct($data)
  {
    $this->push = $data;
  }
  function getData()
  {
    return $this->push;
  }
}





 ?>
