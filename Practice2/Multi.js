
switch (init) {
    case 1:
        let C = +prompt("Input C degree here");
        let F = C * 9 / 5 + 32;
        alert("F is " + F);
        break;
    case 2:
        let m = +prompt("Input meter here");
        let ft = m * 3.2808;
        alert("Ft is " + ft);
        break;
    case 3:
        let a = +prompt("Input a side");
        let s = a * a;
        alert("Square S is " + s);
        break;
    case 4:
        let c = +prompt("Input a side");
        let d = +prompt("Input b side");
        let r = c * d;
        alert("Rectangle S is " + r);
        break;
    case 5:
        let f = +prompt("Input a side");
        let e = +prompt("Input b side");
        let t = (f * e) / 2;
        alert("Squared Triangle S is " + t);
        break;
    case 6:
        let y = +prompt("input a");
        let h = +prompt("input b");
        if (y != 0) {
            let x = (0 - h) / y
            alert("x = " + x)
        } else {
            if (h == 0) {
                alert("to Infinity and beyond");
            } else if (h != 0) {
                alert("None")
            }
        }
        break;
    case 7:
}