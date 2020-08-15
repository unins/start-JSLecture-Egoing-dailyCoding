var coworkers = ["egoing", "leezche"];
var a = 0
document.write(coworkers[0]);
document.write(coworkers[1]);
coworkers.push('duru');
coworkers.push('taeho');
document.write(coworkers.length);

while(coworkers[a]){
  document.write('<br />');
  document.write(coworkers[a]);
  a = a+1;
};
