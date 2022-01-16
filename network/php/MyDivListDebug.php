<?php

/**
 *
 */
class MyDivListDebug
{
  static $arrayListBug;
  static function init()
  {
      self::$arrayListBug = array(

                              'errorConnect' => '0Ex0000',
                              "errorInRequest" => '0Ex0001'
                                );
  }
  static function getCodeError(string $textError) : string
  {
      self::init();
      return self::$arrayListBug[$textError];
  }
  static function exitError(string $textError)
  {
      exit(json_encode($data = array('error' =>self::getCodeError($textError))));
  }
}
?>
