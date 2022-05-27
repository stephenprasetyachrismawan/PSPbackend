/**
 * jumlahkan semua angka dan string yang menjadi parameter
 */
function sum(...param) {
  param = Number(param);
  return param.reduce((previous, current) => {
    return previous + current;
  });

  // Number(param);
  //  var i = 0;
  //  var hasil = 0;
  //  while(param){
  //    hasil = hasil + param[i];

  //  }
  //  return hasil;
}
/**
 * contoh
 * sum(1,2,'3','4')
 * 10
 */

console.log(sum(3, 6, "3", "2", 5, 7));
console.log(sum("5", 5, "2", 2));
console.log(sum("123123123"));
