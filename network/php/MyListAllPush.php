
<?php


class MyListAllPush
{

  private $idUser;
  private $list = array('listMessage');
  function __construct(int $idUser)
  {
    $this->idUser = $idUser;
    $this->list['listMessage'] = array();
  }
  function addListToListPush(MyListPush $l,string $keys):bool
  {
    foreach ($l->getData() as $key => $value)
    {
      if(!array_push($this->list[$keys], $value))
      {
        return false;
      }
      return true;
    }
  }
  function isViod() :bool
  {
    if(!count($this->list['listMessage']))
    {
      return true;
    }
    return false;
  }
  function getData(): array
  {
    return $this->list;
  }

}


 ?>
