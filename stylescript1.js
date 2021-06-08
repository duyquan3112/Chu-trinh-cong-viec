var a = ["./step1.png", "./step2.png","./step3.png","./step4.png","./step5.png","./step6.png"];
var b = ["Chọn mục tiêu","Thu thập thông tin","Xác định điểm yếu","Triệt hạ","Thu hoạch chiến lợi phẩm","Bán chiến lợi phẩm"];
function showImg(i) {
    var img = document.createElement("img");
    img.src = a[i];                             //create source
    img.id = a[i];                              //create id of each pic
    var src = document.getElementById("image");
    src.appendChild(img);                       //append source to tag <img>
    setTimeout(function () {
        document.getElementById(a[i]).remove();         //delete pic after 2 sec
    }, 2800);
}

function showName(i) {
    var para = document.createElement("P");                       // Create a <p> node
    var t = document.createTextNode(b[i]);                         // Create a text node
    para.id = b[i];
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById("name").appendChild(para);           // Append <p> to <div> with id="name"
    setTimeout(function () {
        document.getElementById(b[i]).remove();
    }, 2800);
}
let i = 0;

function showArrayImg (){                   //show array of image after 3 sec
        setInterval(function(){
            document.getElementById("myProgress").style.display = "block";
            if (i < a.length) {
                move();
                showImg(i);
                showName(i);
                i++;
            }
            else
                document.getElementById("myProgress").style.display = "none";
        },3000);
}

document.getElementById("yes").onclick = function() {showArrayImg()};   //event when click button yes

function EventWhenNo(){
    document.getElementById("change").innerHTML = "Khi nào sẵn sàng hãy nhấn ";
    document.getElementById("no").style.display = "none";
}

document.getElementById("no").onclick = function() {EventWhenNo()};//event when click button no

document.getElementById("myProgress").style.display = "none"; //hide progress bar

let k = 0;
function move() {     //progress bar
    if (k == 0) {
      k = 1;
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          k = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }
