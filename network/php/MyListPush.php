
<?php


/**
 *
 */
class MyListPush
{

  private $list = array();

  function __construct()
  {}
  function addToList(MyPush $p)
  {
    array_push($this->list, $p->getData());
  }
  function getData()
  {
    return $this->list;
  }
  function isViod() :bool
  {
    if(!count($this->list))
    {
      return true;
    }
    return false;
  }
}



 ?>
