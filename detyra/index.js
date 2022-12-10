// console.log(`test`);
//Titujt me shkri=onje tpare tmadhe
//ajax request dhe nderto tabele ne baze te response
//nderto strukteren e table
//object.map.keys

//divi baze
const root = $(`#root`);
//do krijojme nje tabele dhe do kete nje row header dhe x rows te tjere per cdo elemente ne json, 7 ne kete rast
//createelement
const table = root.append("table");
table.attr("id", "rootTable");
console.log(table);

//
//
//
//
//
$.ajax({
  type: "GET",
  url: `detyra/index.json`,
  // data:``,
  success: function (json) {
    console.log(json.thead);
  },
  error: function (err) {
    console.log(err);
  },
});
