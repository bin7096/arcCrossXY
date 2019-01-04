# 计算圆心点射线与圆弧交点坐标

```js
/**
 * 计算圆心点射线与圆弧交点坐标
 * @param centerXY {Object} 圆心XY坐标点({x:***, y:***})
 * @param radiu             圆半径
 * @param angle             射线角度（与圆垂直直径顺时针方向计算夹角）
*/
function arcCrossXY(centerXY, radiu, angle){
	var pi = Math.PI / 180
	var num = angle / 90;
	if (parseInt(num) === num && num != 4) {
		num --;
	}else{
		num = parseInt(num);
	}
	var xy = {x:null,y:null};
	switch (num) {
		case 0://1
			xy.x = centerXY.x + radiu * Math.cos((90 - angle) * pi);
			xy.y = centerXY.y - radiu * Math.sin((90 - angle) * pi);
			break;
		case 4://终点
			xy.x = centerXY.x;
			xy.y = 0;
			break;
		default://2、3、4
			xy.x = centerXY.x + radiu * Math.cos((angle - 90) * pi);
			xy.y = centerXY.y + radiu * Math.sin((angle - 90) * pi);
			break;
	}
	return xy;
}
```

# Canvas示例

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<canvas id="canvas"></canvas>
</body>
<script type="text/javascript" src="arcCrossXY.js"></script>
</html>
```

```js
/**
 * 计算圆心点射线与圆弧交点坐标
*/
function arcCrossXY(centerXY, radiu, angle){
	var pi = Math.PI / 180
	var num = angle / 90;
	if (parseInt(num) === num && num != 4) {
		num --;
	}else{
		num = parseInt(num);
	}
	var xy = {x:null,y:null};
	switch (num) {
		case 0://1
			xy.x = centerXY.x + radiu * Math.cos((90 - angle) * pi);
			xy.y = centerXY.y - radiu * Math.sin((90 - angle) * pi);
			break;
		case 4://终点
			xy.x = centerXY.x;
			xy.y = 0;
			break;
		default://2、3、4
			xy.x = centerXY.x + radiu * Math.cos((angle - 90) * pi);
			xy.y = centerXY.y + radiu * Math.sin((angle - 90) * pi);
			break;
	}
	return xy;
}

//示例画布
var cricleCenter = 350;
var radiu = 350;

var max = 100;

var pNum = 1;
var angle = 360 / max;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = canvas.height = radiu * 2;

ctx.fillStyle = '#CCC';
ctx.arc(cricleCenter, cricleCenter, radiu, 0, 360 * Math.PI / 180, true);
ctx.fill();

ctx.strokeStyle = '#3399FF';

var dsId = setInterval(function (){

	if (pNum > max) {
		return;
	}

	//获取圆心点射线与圆弧交点坐标##################################################################################
	var xy = arcCrossXY({x:cricleCenter, y:cricleCenter}, radiu, angle * pNum);
	//###########################################################################################################
	console.log(xy);

	ctx.beginPath();
	ctx.moveTo(cricleCenter, cricleCenter);
	ctx.lineTo(xy.x, xy.y);
	ctx.stroke();
	ctx.closePath();

	pNum ++;
}, 20);
```
