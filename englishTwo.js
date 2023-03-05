function compress(){
  let map = new Map()
  map.set("Th", "Þ");
  map.set("th", "þ");
  map.set("Ed", "Д");
  map.set("ed", "д");
  map.set("Ng", "Ŋ");
  map.set("ng", "ŋ");
  map.set("El", "Л");
  map.set("el", "л");
  map.set("Sh", "Ŝ");
  map.set("sh", "ŝ");
  map.set("Oe", "Ø");
  map.set("oe", "ø");
  map.set("Gh", "Ȝ");
  map.set("gh", "ȝ");
  map.set("Ya", "Я");
  map.set("ya", "я");
  map.set("Ch", "Ĉ");
  map.set("ch", "ĉ");
  map.set("Wh", "Ƿ");
  map.set("wh", "ƿ");
  map.set("You", "Ю");
  map.set("you", "ю");
  map.set("and", "&");
  map.set("it", "|");

  for (let [oldSubstring, newSubstring] of map) {
    $("body").children().each(function () {
      originalString = $(this).html()
      // https://stackoverflow.com/a/500144
      newString = originalString.split(oldSubstring).join(newSubstring)
      $(this).html( newString );
    });
  }

}

compress();
