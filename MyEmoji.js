class EmojiList
{
    constructor()
    {
      this.arrayEmojiHtml = new Map();
      this.arrayEmojiHtml.set("Emoji_0", "\ud83d\ude00");
      this.arrayEmojiHtml.set("Emoji_1", "\ud83d\ude01");
      this.arrayEmojiHtml.set("Emoji_2", "\ud83d\ude02");
      this.arrayEmojiHtml.set("Emoji_3", "\ud83d\ude03");
      this.arrayEmojiHtml.set("Emoji_4", "\ud83d\ude04");
      this.arrayEmojiHtml.set("Emoji_5", "\ud83d\ude05");
      this.arrayEmojiHtml.set("Emoji_6", "\ud83d\ude06");
      this.arrayEmojiHtml.set("Emoji_7", "\ud83d\ude07");
      this.arrayEmojiHtml.set("Emoji_8", "\ud83d\ude08");
      this.arrayEmojiHtml.set("Emoji_9", "\ud83d\ude09");
      this.arrayEmojiHtml.set("Emoji_10", "\ud83d\ude10");
      this.arrayEmojiHtml.set("Emoji_11", "\ud83d\ude11");
      this.arrayEmojiHtml.set("Emoji_12", "\ud83d\ude12");
      this.arrayEmojiHtml.set("Emoji_13", "\ud83d\ude13");
      this.arrayEmojiHtml.set("Emoji_14", "\ud83d\ude14");
      this.arrayEmojiHtml.set("Emoji_15", "\ud83d\ude15");
      this.arrayEmojiHtml.set("Emoji_16", "\ud83d\ude16");
      this.arrayEmojiHtml.set("Emoji_17", "\ud83d\ude17");
      this.arrayEmojiHtml.set("Emoji_18", "\ud83d\ude18");
      this.arrayEmojiHtml.set("Emoji_19", "\ud83d\ude19");
      this.arrayEmojiHtml.set("Emoji_20", "\ud83d\ude20");
    }
    length()
    {
      return this.arrayEmojiHtml.size;
    }
    getArrayEmoji()
    {
      return this.arrayEmojiHtml;
    }
    getEmojiByKeys(keys)
    {
      return this.arrayEmojiHtml.get(keys);
    }
    static getHeaderEmoji()
    {
      return "&#x1F600";
    }
}

class MyEmoji extends MySpam
{
  constructor(id,emoji,parent)
  {
      super('Emoji_'+id,emoji,parent);
      this.setCursor('pointer');
      this.idEmojiKeys = id;
      if(MyEmoji.isEmoji(emoji))
      {
          this.setValue(emoji);
      }
  }
  getIdEmojiKeys()
  {
    return this.idEmojiKeys;
  }
  static getHeaderEmoji()
  {
      return EmojiList.getHeaderEmoji();
  }
  static isEmoji(str)
  {
    if(str.match("Emoji_") || str.match("&#x") ||  this.inEmojiList(str))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  static inEmojiList(str)
  {
    var emojiList = new EmojiList();
    for(var[keys, value] of emojiList.getArrayEmoji())
    {
        if(value.match(str))
        {
          return true;
        }
        return false;
    }
  }
  static emojiDecode(emoji)
  {

    if(emoji != undefined && isNaN(emoji))
    {
      var emojiList = new EmojiList();
      var arrayWord = emoji.split(" ");
      var newEmoji ="";
      for (var i = 0; i < arrayWord.length; i++)
      {
        for(var[keys, value] of emojiList.getArrayEmoji())
        {
            if(keys === arrayWord[i])
            {
               arrayWord[i] = value;
            }
        }
        newEmoji += arrayWord[i]+" ";
      }
      return newEmoji;
    }
    return emoji;

  }
  static emojiEncode(emoji)
  {
    if(emoji != undefined && isNaN(emoji))
    {
      var emojiList = new EmojiList();
      var arrayWord = emoji.split(" ");
      var newEmoji ="";
      for(var i = 0; i < arrayWord.length; i++)
      {
          for(var[keys, value] of emojiList.getArrayEmoji())
          {
              if(value === arrayWord[i])
              {
                arrayWord[i] = keys;
              }
          }
          newEmoji += arrayWord[i]+" ";
      }
      return newEmoji;
    }
    return emoji;
  }
}
