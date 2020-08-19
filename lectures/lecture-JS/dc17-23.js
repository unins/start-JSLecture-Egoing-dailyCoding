var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = 'color';
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
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
