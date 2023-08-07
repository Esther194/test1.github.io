var A = 0;
var B = 0;
var Lin = [[], []], Yu = [[], []], ren = [[], []], Hayes = [[], []],
  Dad = [[], []], Mom = [[], []], group1 = [[], [], []];

var box0 = document.getElementById("header");
var box1 = document.getElementById("content");
var box2 = document.getElementById("footer");

//故事本體
function click1() {
  var buttons = document.querySelectorAll("button");
  for (var i = 2; i < buttons.length; i++) {
    buttons[i].parentNode.removeChild(buttons[i]);
  }
  switch (B) {
    case 0://通識報告
      var p1 = ["123", "456"];
      var s1 = ["left", "right"];
      addp(p1, s1, 0.1, 5);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
    case 0.1:
      var p1 = ["123", "456"];
      var s1 = ["left", "right"];
      var m1 = ["ren", "m"]
      chat(7, 0);
      addp2(p1, s1, m1, 1, 2);
      group1[0].push(...p1);
      group1[1].push(...s1);
      group1[2].push(...m1);
      break;
  }
}

//新增對話
function addp(p1, s1, B2 = 0, A1 = "1", B1 = "2", delay = 1000) {
  var conversation = p1;
  var style1 = s1;
  for (var i = 0; i < conversation.length; i++) {
    (function (index) {
      setTimeout(function () {

        var messageContainer = document.createElement("div");
        messageContainer.classList.add("message", style1[index]);

        var p = document.createElement("p");
        p.textContent = conversation[index];

        messageContainer.appendChild(p);
        box1.appendChild(messageContainer);

        if (index === conversation.length - 1) {
          if (A1 !== "1") {
            var button1 = document.createElement("button");
            button1.innerHTML = A1;
            button1.onclick = function () {
              B += 0.1;
              click1()
            };

            var button2 = document.createElement("button");
            button2.innerHTML = B1;
            button2.onclick = function () {
              B += 0.2;
              if (B2 != 0) {
                B = B2;
              }
              click1();
            };

            box2.appendChild(button1);
            box2.appendChild(button2);
          } else {
            B += B2;
            click1();
          }
        }

      }, delay * index);
    })(i);
  }
}

//新增群組對話
function addp2(p1, s1, m1, A1 = "1", B1 = "2", B2 = 0, delay = 1000) {
  var conversation = p1;
  var style1 = s1;
  var name1 = m1;
  for (var i = 0; i < conversation.length; i++) {
    (function (index) {
      setTimeout(function () {
        const image1 = document.createElement("img");
        if (style1[index] === "left") {
          var p = document.createElement("p");
          switch (name1[index]) {
            case "ren":
              image1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifgSLM3wjL5doJrM_-MrUUDRbehvGlHA_NQ&usqp=CAU";
              p.textContent = "仁方";
              p.appendChild(document.createElement("br"));
              box1.appendChild(image1);
              box1.appendChild(p);
              break;
            case "Yu":
              image1.src = "path/to/your/image.jpg";
              box1.appendChild(image1);
              break;
            case "Lin":
              image1.src = "path/to/your/image.jpg";
              box1.appendChild(image1);
              break;
          }
        }

        var messageContainer = document.createElement("div");
        messageContainer.classList.add("message", style1[index]);

        var p = document.createElement("p");
        p.textContent = conversation[index];

        messageContainer.appendChild(p);
        box1.appendChild(messageContainer);

        if (index === conversation.length - 1) {
          if (A1 !== "1") {
            var button1 = document.createElement("button");
            button1.innerHTML = A1;
            button1.onclick = function () {
              B += 0.1;
              click1()
            };

            var button2 = document.createElement("button");
            button2.innerHTML = B1;
            button2.onclick = function () {
              B += 0.2;
              if (B2 != 0) {
                B = B2;
              }
              click1();
            };

            box2.appendChild(button1);
            box2.appendChild(button2);
          } else {
            B += B2;
            click1();
          }
        }

      }, delay * index);
    })(i);
  }
}

//新增聊天室名字
function addh(text) {
  var span = document.createElement("span");
  span.textContent = text;
  box0.appendChild(span);
}

//新增按鈕
function addb(A1, B1, B2 = 0) {
  var button1 = document.createElement("button");
  button1.innerHTML = A1;
  button1.onclick = function () {
    B += 0.1;
    click1()
  };

  var button2 = document.createElement("button");
  button2.innerHTML = B1;
  button2.onclick = function () {
    B += 0.2;
    if (B2 != 0) {
      B = B2;
    }
    click1();
  };

  box2.appendChild(button1);
  box2.appendChild(button2);
}

//首頁
function clear1() {
  // 清空div中的文字
  document.getElementById("header").innerHTML = "";
  document.getElementById("content").innerHTML = "";
  document.getElementById("footer").innerHTML = "";
  box2.style.backgroundColor = "white";

  // 創建按鈕 1
  var button1 = document.createElement("button");
  button1.innerHTML = "1";
  button1.onclick = function () {
    chat(1);
  };
  box1.appendChild(button1);

  // 創建按鈕 2
  var button2 = document.createElement("button");
  button2.innerHTML = "2";
  button2.onclick = function () {
    chat(2);
  };
  box1.appendChild(button2);

  // 創建按鈕 3
  var button3 = document.createElement("button");
  button3.innerHTML = "3";
  button3.onclick = function () {
    chat(3);
  };
  box1.appendChild(button3);

  // 創建按鈕 4
  var button4 = document.createElement("button");
  button4.innerHTML = "4";
  button4.onclick = function () {
    chat(4);
  };
  box1.appendChild(button4);

  // 創建按鈕 5
  var button5 = document.createElement("button");
  button5.innerHTML = "5";
  button5.onclick = function () {
    chat(5);
  };
  box1.appendChild(button5);

  // 創建按鈕 6
  var button6 = document.createElement("button");
  button6.innerHTML = "仁方";
  button6.onclick = function () {
    chat(6);
  };
  box1.appendChild(button6);

  //7
  var button7 = document.createElement("button");
  button7.innerHTML = "7";
  button7.onclick = function () {
    chat(7);
  };
  box1.appendChild(button7);
}

//聊天室
function chat(n, e = 1) {
  document.getElementById("header").innerHTML = "";
  document.getElementById("content").innerHTML = "";
  document.getElementById("footer").innerHTML = "";
  box2.style.backgroundColor = "#FFC78E";

  var button1 = document.createElement("button");
  button1.innerHTML = "&lt;";
  button1.onclick = function () {
    clear1(1)
  };
  button1.style.position = "absolute";
  button1.style.left = "0";
  button1.style.fontSize = "38px";
  box0.appendChild(button1);

  switch (n) {
    case 1:
      addh("林欣怡")
      addp(Lin[0], Lin[1], "1", 0, 0, 0);
      break;

    case 2:
      addh("俞左容")
      addp(Yu[0], Yu[1], "1", 0, 0, 0);
      break;

    case 3:
      addh("爸爸")
      addp(Dad[0], Dad[1], "1", 0, 0, 0);
      break;

    case 4:
      addh("媽媽")
      addp(Mom[0], Mom[1], "1", 0, 0, 0);
      break;

    case 5:
      addh("Hayes")
      addp(Hayes[0], Hayes[1], "1", 0, 0, 0);
      break;

    case 6:
      addh("仁方")
      addp(ren[0], ren[1], "1", 0, 0, 0);
      break;

    case 7:
      addh("群")
      addp2(group1[0], group1[1], group1[2], "1", 0, 0, 0);
      if (B == 0.1 && e != 0) {
        addb(1, 2)
      }
      break;
  }
}
