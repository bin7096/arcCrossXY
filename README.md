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
