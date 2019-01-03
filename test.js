
function annularXY(centerXY, radiu, angle){
	var pi = Math.PI / 180
	var num = angle / 90;
	if (parseInt(num) === num && num != 4) {
		num --;
	}else{
		num = parseInt(num);
	}
	var xy = {x:null,y:null};
	switch (num) {
		case 0://4
			xy.x = centerXY.x + radiu * Math.cos((Math.abs(90 - angle)) * pi);
			xy.y = centerXY.y - radiu * Math.sin(angle * pi);
			break;
		case 1://1
			xy.x = centerXY.x + radiu * Math.cos((angle - 90) * pi);
			xy.y = centerXY.y - radiu * Math.sin(angle * pi) + centerXY.y;
			break;
		case 2://2
			xy.x = centerXY.x + radiu * Math.cos((angle - 90) * pi);
			xy.y = centerXY.x * 2 + radiu * Math.sin(angle * pi);
			break;
		case 3://3
			xy.x = radiu * Math.cos(angle * pi);
			xy.y = Math.abs(radiu * Math.sin(angle * pi));
			break;
		case 4://终点
			xy.x = centerXY.x;
			xy.y = 0;
			break;
	}
	console.log(xy);
	return xy;
}
var pNum = 1;
var angle = 360 / 20;
var dsId = setInterval(function (){
	pNum ++;
	if (pNum > 20) {return;}
	annularXY({x:294,y:294},294,angle * pNum);
}, 20);
