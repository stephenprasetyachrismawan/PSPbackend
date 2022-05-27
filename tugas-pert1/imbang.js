/**
 * cek apakah tanda kurung imbang dan sesuai pasangan atau tidak
 */
var akhir = "";
var awal = "";

function imbang(str) {
  var i;

  if (str.length % 2 == 0) {
    for (let i = str.length - 1; i > str.length / 2 - 1; i--) {
      if (str[i] == ")") {
        str[i] = "(";
      }
      if (str[i] == "}") {
        str[i] = "{";
      }
      if (str[i] == "]") {
        str[i] = "[";
      }
      akhir += str[i]; //kebalikannya dari index terakhir sampai tengah
    }
    for (let i = 0; i < str.length / 2; i++) {
      awal += str[i]; //index awal sampai tengah
    }

    if (akhir == awal) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * contoh
 * imbang("[()]") awal ke setengah = [( itu harusnya sama kayak balikstringnya(index belakang ke tengah)
 * imbang("[(])")
 * true
 * false
 */

console.log(imbang("[({()})]"));
// console.log(imbang("({({[})})"));
// console.log(imbang("(((({{{[]}})))))"));
console.log(akhir);
console.log(awal);
