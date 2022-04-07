<?php


class MyPushManager
{
  static $listPush = null;

  static function init()
  {
    self::$listPush = new MyListAllPush(0);
  }
}
?>
