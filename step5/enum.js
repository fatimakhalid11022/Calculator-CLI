var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
; //start wit zero
var c = color.Green;
c;
console.log("c", c);
//method 1
var color1;
(function (color1) {
    color1[color1["red"] = 1] = "red";
    color1[color1["green"] = 2] = "green";
    color1[color1["blue"] = 3] = "blue";
})(color1 || (color1 = {}));
;
var colorname = color[1];
console.log(colorname);
//methodd 2
var color2;
(function (color2) {
    color2[color2["red"] = 1] = "red";
    color2[color2["green"] = 2] = "green";
    color2[color2["blue"] = 2] = "blue";
})(color2 || (color2 = {})); // can assign values to all
var colorindex = color2[3]; // can assign 2  same values on same indexes
console.log(colorindex);
export {};
