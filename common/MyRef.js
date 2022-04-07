


class MyRef
{
    static add(keys,object)
    {
      if(!this.ref){this.ref = new Array(); }
      this.ref[keys] = object;
    }
    static remove(keys)
    {
      this.ref.splice(keys, 1);
    }
    static get(keys)
    {
      return this.ref[keys]
    }
}
