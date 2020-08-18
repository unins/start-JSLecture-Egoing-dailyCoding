var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = 'color';
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function day() {
  Body.setBackgroundColor('white');
  Body.setColor('black');
}

function night() {
  Body.setBackgroundColor('black');
  Body.setColor('white');
}

function night_day(self) {
  if (self.value === 'day'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'night';
    Links.setColor('orange');
    }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'day';
    Links.setColor('blue');
    }
  }
