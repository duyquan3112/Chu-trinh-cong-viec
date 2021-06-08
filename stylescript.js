var a = ["./step1.jpg", "./step2.png"];
function showImg(i) {
    var img = document.createElement("img");
    img.src = a[i];
    img.id = a[i];
        var src = document.getElementById("image");
    src.appendChild(img);
    setTimeout(function () {
        document.getElementById(a[i]).remove();
    }, 2000);
}
let i = 0;
function showArrayImg() {
    setInterval(function () {
        showImg(i);
        i++;
    }, 3000);

}
showArrayImg();
