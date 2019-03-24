var wrap = document.getElementById('wrap');
var items = document.getElementsByClassName('items');
var item3 = document.getElementById('I3');
var reset = document.getElementById('full-reset');
var jc = document.getElementsByClassName('jc');
var fd = document.getElementsByClassName('fd');
var ac = document.getElementsByClassName('ac');
var fw = document.getElementsByClassName('fw');
var ai = document.getElementsByClassName('ai');
var as = document.getElementsByClassName('as');
var fg = document.getElementsByClassName('fg');
var od = document.getElementsByClassName('od');
var fb = document.getElementsByClassName('fb');
var fs = document.getElementsByClassName('fs');

var border = document.getElementById("border-text");
var resize = document.getElementById("wrap");

reset.onclick = function () {
    wrap.style.justifyContent = "";
    for (i = 0; i < jc.length; i++) {
      jc[i].style.backgroundColor = "#fff";
    }
    wrap.style.flexDirection = "";
    for (i = 0; i < fd.length; i++) {
      fd[i].style.backgroundColor = "#fff";
    }
    wrap.style.flexWrap = "";
    for (i = 0; i < fw.length; i++) {
      fw[i].style.backgroundColor = "#fff";
    }
    wrap.style.alignContent = "";
    for (i = 0; i < ac.length; i++) {
      ac[i].style.backgroundColor = "#fff";
    }
    wrap.style.alignItems = "";
    for (i = 0; i < ai.length; i++) {
      ai[i].style.backgroundColor = "#fff";
    }
    item3.style.alignSelf = "";
    for (i = 0; i < as.length; i++) {
      as[i].style.backgroundColor = "#fff";
    }
    item3.style.flexGrow = "";
    for (i = 0; i < fg.length; i++) {
      fg[i].style.backgroundColor = "#fff";
    }
    item3.style.order = "";
    for (i = 0; i < od.length; i++) {
      od[i].style.backgroundColor = "#fff";
    }
    item3.style.flexBasis = "";
    for (i = 0; i < fb.length; i++) {
      fb[i].style.backgroundColor = "#fff";
    }
    item3.style.flexShrink = "";
    for (i = 0; i < fs.length; i++) {
      wrap.style.height = "350px";
      items[i].style.width = "";
      fs[i].style.backgroundColor = "#fff";
    }
    wrap.style.width = "100%";
}
for (i = 0; i < jc.length; i++) {
    jc[0].onclick = function () {
      wrap.style.justifyContent = "flex-start";
      for (i = 0; i < jc.length; i++) {
        jc[i].style.backgroundColor = "#fff";
        jc[0].style.backgroundColor = "#ddd";
      }
    }
    jc[1].onclick = function () {
      wrap.style.justifyContent = "flex-end";
      for (i = 0; i < jc.length; i++) {
        jc[i].style.backgroundColor = "#fff";
        jc[1].style.backgroundColor = "#ddd";
      }
    }    
    jc[2].onclick = function () {
      wrap.style.justifyContent = "center";
      for (i = 0; i < jc.length; i++) {
        jc[i].style.backgroundColor = "#fff";
        jc[2].style.backgroundColor = "#ddd";
      }
    }
    jc[3].onclick = function () {
      wrap.style.justifyContent = "space-between";
      for (i = 0; i < jc.length; i++) {
        jc[i].style.backgroundColor = "#fff";
        jc[3].style.backgroundColor = "#ddd";
      }
    }
    jc[4].onclick = function () {
      wrap.style.justifyContent = "space-around";
      for (i = 0; i < jc.length; i++) {
        jc[i].style.backgroundColor = "#fff";
        jc[4].style.backgroundColor = "#ddd";
      }
    }
    jc[5].onclick = function () {
      wrap.style.justifyContent = "space-evenly";
      for (i = 0; i < jc.length; i++) {
        jc[i].style.backgroundColor = "#fff";
        jc[5].style.backgroundColor = "#ddd";
      }
    }
    jc[6].onclick = function () {
      wrap.style.justifyContent = "";
      for (i = 0; i < jc.length; i++) {
        jc[i].style.backgroundColor = "#fff";
      }
   }
  }
for (i = 0; i < fd.length; i++) {
  fd[0].onclick = function () {
    wrap.style.flexDirection = "row";
    for (i = 0; i < fd.length; i++) {
      fd[i].style.backgroundColor = "#fff";
      fd[0].style.backgroundColor = "#ddd";
    }
  }
  fd[1].onclick = function () {
    wrap.style.flexDirection = "row-reverse";
    for (i = 0; i < fd.length; i++) {
      fd[i].style.backgroundColor = "#fff";
      fd[1].style.backgroundColor = "#ddd";
    }
  }
  fd[2].onclick = function () {
    wrap.style.flexDirection = "column";
    for (i = 0; i < fd.length; i++) {
      fd[i].style.backgroundColor = "#fff";
      fd[2].style.backgroundColor = "#ddd";
    }
  }
  fd[3].onclick = function () {
    wrap.style.flexDirection = "column-reverse";
    for (i = 0; i < fd.length; i++) {
      fd[i].style.backgroundColor = "#fff";
      fd[3].style.backgroundColor = "#ddd";
    }
  }
  fd[4].onclick = function () {
      wrap.style.flexDirection = "";
      for (i = 0; i < fd.length; i++) {
        fd[i].style.backgroundColor = "#fff";
      }
   }
}
for (i = 0; i < fw.length; i++) {
  fw[0].onclick = function () {
    wrap.style.flexWrap = "nowrap";
    for (i = 0; i < fw.length; i++) {
      fw[i].style.backgroundColor = "#fff";
      fw[0].style.backgroundColor = "#ddd";
    }
  }
  fw[1].onclick = function () {
    wrap.style.flexWrap = "wrap";
    for (i = 0; i < fw.length; i++) {
      fw[i].style.backgroundColor = "#fff";
      fw[1].style.backgroundColor = "#ddd";
    }
  }
  fw[2].onclick = function () {
    wrap.style.flexWrap = "wrap-reverse";
    for (i = 0; i < fw.length; i++) {
      fw[i].style.backgroundColor = "#fff";
      fw[2].style.backgroundColor = "#ddd";
    }
  }
  fw[3].onclick = function () {
      wrap.style.flexWrap = "";
      for (i = 0; i < fw.length; i++) {
        fw[i].style.backgroundColor = "#fff";
      }
    }
}
for (i = 0; i < ac.length; i++) {
    ac[0].onclick = function () {
      wrap.style.alignContent = "flex-start";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
        ac[0].style.backgroundColor = "#ddd";
      }
    }
    ac[1].onclick = function () {
      wrap.style.alignContent = "flex-end";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
        ac[1].style.backgroundColor = "#ddd";
      }
    }
    ac[2].onclick = function () {
      wrap.style.alignContent = "center";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
        ac[2].style.backgroundColor = "#ddd";
      }
    }
    ac[3].onclick = function () {
      wrap.style.alignContent = "space-between";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
        ac[3].style.backgroundColor = "#ddd";
      }
    }
    ac[4].onclick = function () {
      wrap.style.alignContent = "space-around";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
        ac[4].style.backgroundColor = "#ddd";
      }
    }
    ac[5].onclick = function () {
      wrap.style.alignContent = "space-evenly";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
        ac[5].style.backgroundColor = "#ddd";
      }
    }
    ac[6].onclick = function () {
      wrap.style.alignContent = "stretch";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
        ac[6].style.backgroundColor = "#ddd";
      }
    }
    ac[7].onclick = function () {
      wrap.style.alignContent = "";
      for (i = 0; i < ac.length; i++) {
        ac[i].style.backgroundColor = "#fff";
      }
    }
  }
for (i = 0; i < ai.length; i++) {
    ai[0].onclick = function () {
      wrap.style.alignItems = "flex-start";
      for (i = 0; i < ai.length; i++) {
        ai[i].style.backgroundColor = "#fff";
        ai[0].style.backgroundColor = "#ddd";
      }
    }
    ai[1].onclick = function () {
      wrap.style.alignItems = "flex-end";
      for (i = 0; i < ai.length; i++) {
        ai[i].style.backgroundColor = "#fff";
        ai[1].style.backgroundColor = "#ddd";
      }
    }
    ai[2].onclick = function () {
      wrap.style.alignItems = "center";
      for (i = 0; i < ai.length; i++) {
        ai[i].style.backgroundColor = "#fff";
        ai[2].style.backgroundColor = "#ddd";
      }
    }
    ai[3].onclick = function () {
      wrap.style.alignItems = "baseline";
      for (i = 0; i < ai.length; i++) {
        ai[i].style.backgroundColor = "#fff";
        ai[3].style.backgroundColor = "#ddd";
      }
    }
    ai[4].onclick = function () {
      wrap.style.alignItems = "stretch";
      for (i = 0; i < ai.length; i++) {
        ai[i].style.backgroundColor = "#fff";
        ai[4].style.backgroundColor = "#ddd";
      }
    }
    ai[5].onclick = function () {
      wrap.style.alignItems = "";
      for (i = 0; i < ai.length; i++) {
        ai[i].style.backgroundColor = "#fff";
      }
    }
  }
for (i = 0; i < as.length; i++) {
    as[0].onclick = function () {
      item3.style.alignSelf = "flex-start";
      for (i = 0; i < as.length; i++) {
        as[i].style.backgroundColor = "#fff";
        as[0].style.backgroundColor = "#ddd";
      }
    }
    as[1].onclick = function () {
      item3.style.alignSelf = "flex-end";
      for (i = 0; i < as.length; i++) {
        as[i].style.backgroundColor = "#fff";
        as[1].style.backgroundColor = "#ddd";
      }
    }
    as[2].onclick = function () {
      item3.style.alignSelf = "center";
      for (i = 0; i < as.length; i++) {
        as[i].style.backgroundColor = "#fff";
        as[2].style.backgroundColor = "#ddd";
      }
    }
    as[3].onclick = function () {
      item3.style.alignSelf = "baseline";
      for (i = 0; i < as.length; i++) {
        as[i].style.backgroundColor = "#fff";
        as[3].style.backgroundColor = "#ddd";
      }
    }
    as[4].onclick = function () {
      item3.style.alignSelf = "stretch";
      for (i = 0; i < as.length; i++) {
        as[i].style.backgroundColor = "#fff";
        as[4].style.backgroundColor = "#ddd";
      }
    }
    as[5].onclick = function () {
      item3.style.alignSelf = "";
      for (i = 0; i < as.length; i++) {
        as[i].style.backgroundColor = "#fff";
      }
    }
  }
for (i = 0; i < fg.length; i++) {
    fg[0].onclick = function () {
      item3.style.flexGrow = "0";
      for (i = 0; i < fg.length; i++) {
        fg[i].style.backgroundColor = "#fff";
        fg[0].style.backgroundColor = "#ddd";
      }
    }
    fg[1].onclick = function () {
      item3.style.flexGrow = "1";
      for (i = 0; i < fg.length; i++) {
        fg[i].style.backgroundColor = "#fff";
        fg[1].style.backgroundColor = "#ddd";
      }
    }
    fg[2].onclick = function () {
      item3.style.flexGrow = "";
      for (i = 0; i < fg.length; i++) {
        fg[i].style.backgroundColor = "#fff";
      }
    }
  }
for (i = 0; i < od.length; i++) {
    od[0].onclick = function () {
      item3.style.order = "-1";
      for (i = 0; i < od.length; i++) {
        od[i].style.backgroundColor = "#fff";
        od[0].style.backgroundColor = "#ddd";
      }
    }
    od[1].onclick = function () {
      item3.style.order = "0";
      for (i = 0; i < od.length; i++) {
        od[i].style.backgroundColor = "#fff";
        od[1].style.backgroundColor = "#ddd";
      }
    } 
    od[2].onclick = function () {
      item3.style.order = "1";
      for (i = 0; i < od.length; i++) {
        od[i].style.backgroundColor = "#fff";
        od[2].style.backgroundColor = "#ddd";
      }
    }
    od[3].onclick = function () {
      item3.style.order = "";
      for (i = 0; i < od.length; i++) {
        od[i].style.backgroundColor = "#fff";
      }
    }
  }
for (i = 0; i < fb.length; i++) {
    fb[0].onclick = function () {
      item3.style.flexBasis = "10%";
      for (i = 0; i < fb.length; i++) {
        fb[i].style.backgroundColor = "#fff";
        fb[0].style.backgroundColor = "#ddd";
      }
    }
    fb[1].onclick = function () {
      item3.style.flexBasis = "40%";
      for (i = 0; i < fb.length; i++) {
        fb[i].style.backgroundColor = "#fff";
        fb[1].style.backgroundColor = "#ddd";
      }
    }
    fb[2].onclick = function () {
      item3.style.flexBasis = "100%";
      for (i = 0; i < fb.length; i++) {
        fb[i].style.backgroundColor = "#fff";
        fb[2].style.backgroundColor = "#ddd";
      }
    }

    fb[3].onclick = function () {
      item3.style.flexBasis = "";
      for (i = 0; i < fb.length; i++) {
        fb[i].style.backgroundColor = "#fff";
      }
    }
  }
for (i = 0; i < fs.length; i++) {
    fs[0].onclick = function () {
      item3.style.flexShrink = "0";
      for (i = 0; i < fs.length; i++) {
        wrap.style.height = "100%";
        items[i].style.width = "40%";
        fs[i].style.backgroundColor = "#fff";
        fs[0].style.backgroundColor = "#ddd";
      }
    }
    fs[1].onclick = function () {
      item3.style.flexShrink = "1";
      for (i = 0; i < fs.length; i++) {
        wrap.style.height = "100%";
        items[i].style.width = "40%";
        fs[i].style.backgroundColor = "#fff";
        fs[1].style.backgroundColor = "#ddd";
      }
    }
  fs[2].onclick = function () {
      item3.style.flexShrink = "2";
      for (i = 0; i < fs.length; i++) {
        wrap.style.height = "100%";
        items[i].style.width = "40%";
        fs[i].style.backgroundColor = "#fff";
        fs[2].style.backgroundColor = "#ddd";
      }
    }
    fs[3].onclick = function () {
      item3.style.flexShrink = "";
      for (i = 0; i < fs.length; i++) {
        wrap.style.height = "450px";
        items[i].style.width = "";
        fs[i].style.backgroundColor = "#fff";
      }
    }
  }

window.onload = function() {
  border.onmousedown = function() {
    var currentWidth = resize.offsetWidth;
    if (currentWidth <= 600 && currentWidth >= 150) {
      var lock = true;
      var pos = event.pageX;
      document.onmousemove = function(event) {
        if (lock) {
          res = currentWidth + event.pageX - pos;
          if (res <= 600 && res >= 150) {
            resize.style.width = res + "px";
          } else {
            if (res < 150) {
              resize.style.width = "150px";
              lock = false;
            } else {
              resize.style.width = "600px";
              lock = false;
            }
          }
        }
        border.onmouseup = function() {
          lock = false;
        };
      };
      border.onmouseup = function() {
        lock = false;
      };
    }
  };
};