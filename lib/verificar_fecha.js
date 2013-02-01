var fecha = process.argv[2] || '';

if (fecha === '') {
  console.log('Por Favor ingresa un parametro correcto, porfi?');
  process.exit(0);
}

console.log(checkDate(fecha));

function checkDate(param) {
  var date = new Date(param);
  if (date.toString() === 'Invalid Date') return false;
  return date;
}
