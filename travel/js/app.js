/*t - top, l - left, c - colour, s - size, z - z-index, id - class */

function first(t, l, c, s, z, id){
	var first = document.getElementsByClassName(id);
	first[0].style.top = t;
	first[0].style.left = l;
	first[0].style.color = c;
	first[0].style.fontSize = s;
	first[0].style.zindex = z;
}
first('2', '5%', 'brown', '52px', '20', "H");
first('5', '15%', 'red', '65px', '19', "W");
first('15', '76%', 'blue', '80px', '18', "E");
first('8', '60%', 'green', '56px', '17', "T");
first('90', '32%', 'orange', '46px', '16', "S");
first('42', '42%', 'yellow', '69px', '15', "L");
