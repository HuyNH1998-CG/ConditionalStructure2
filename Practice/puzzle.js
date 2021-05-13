let myImage = document.getElementById('1');
let imageArray = ["cat1a.png", 'cat2a.png', "cat3a.png"];
let imageIndex = Math.floor(Math.random() * (2 - 0 + 1));
myImage.src = imageArray[imageIndex];


function nextImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex = (imageIndex + 1) % imageArray.length;
    check()
}

let myImagex = document.getElementById('2');
let imageArrayx = ["cat1b.png", 'cat2b.png', "cat3b.png"];
let imageIndexx = Math.floor(Math.random() * (2 - 0 + 1));
myImagex.src = imageArrayx[imageIndexx];

function nextImage2() {
    myImagex.setAttribute("src", imageArrayx[imageIndexx]);
    imageIndexx = (imageIndexx + 1) % imageArrayx.length;
    check()
}

let myImagez = document.getElementById('3');
let imageArrayz = ["cat1c.png", 'cat2c.png', "cat3c.png"];
let imageIndexz = Math.floor(Math.random() * (2 - 0 + 1));
myImagez.src = imageArrayz[imageIndexz];

function nextImagez() {
    myImagez.setAttribute("src", imageArrayz[imageIndexz]);
    imageIndexz = (imageIndexz + 1) % imageArrayz.length;
    check()
}

function check() {
    if ((imageIndex == 0) && (imageIndexx == 0) && (imageIndexz == 0)) {
        alert("Clear");
    } else if ((imageIndex == 1) && (imageIndexx == 1) && (imageIndexz == 1)) {
        alert("Clear");
    } else if ((imageIndex == 2) && (imageIndexx == 2) && (imageIndexz == 2)) {
        alert("Clear");
    }
}


