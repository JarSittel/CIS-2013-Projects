
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{
//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations	
    
	
		

	rectArea();
    rectPerim();
    triArea();
    triPerim();
    calcCircleArea();
    calcCircleCircum();
};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */

var rectArea = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
    alert("The area of the rectangle is: " + (floatRectWidth*floatRectHeight));
};

var rectPerim = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
    alert("The perimeter of the rectangel is: " + (2*floatRectWidth + 2*floatRectHeight));
};

var triArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    var floatS = (floatTriSide1 + floatTriSide2 + floatTriSide3)/2;
	alert("The area of the triangle is: " + (Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)))));
	
};

var triPerim = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    alert("The perimeter of the triangle is: " + (floatTriSide1 + floatTriSide2 + floatTriSide3));
};

var calcCircleArea  = function()
{
    var floatRadius = parseFloat($("radius").value);
    alert("The area of the circle is: " + (Math.PI * Math.pow(floatRadius,2)));
};
/*
 * the circleCircum function accepts some input for radius and then calculates the circumference
 * using the 2 * pi * radius formula.  The circumference value is returned, but note that it has been
 * converted to a string with 2 decimal points [the toFixed() method in JavaScript takes a number and 
 * lops off everything after the desired decimal points, and then for some unexplicable reason converts
 * the resulting number into a string]
 */
var calcCircleCircum = function() 
{
    var floatRadius = parseFloat($("radius").value);
	alert("The circumference of the cirlce is: " + (parseFloat (2 * Math.PI * floatRadius)));
};


window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_rect_area").onclick = rectArea; // runs the do_it function when clicked
    $("calc_rect_perim").onclick = rectPerim;
    $("calc_tri_area").onclick = triArea;
    $("calc_tri_perim").onclick = triPerim;
    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_all").onclick = do_it; 
}