<?php


class MyPushManager
{
  /**
    * The list push.
    *
    * @var array
  */
  static $listPush = null;

  /**
  *
  * static function init() class Mother
  *
  **/
  static function init()
  {
    self::$listPush = new MyListAllPush(0);
  }
}
?>
