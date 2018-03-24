//アニメ準備
	var canvas = document.getElementById("mycanvas");
	var c = canvas.getContext("2d");

//初期値の設定
	var frame=0;

//独自関数を定義

//①四角（矩形）
	function shikaku(x,y,w,h,color){
		c.fillStyle = color;
		c.fillRect(x,y,w,h);
	}

//②円
	function maru(x,y,r,color){
		c.beginPath();
		c.arc(x,y,r,0,2*Math.PI,false);
		c.fillStyle=color;
		c.fill();
	}

//③多角形
	function sankaku(x,y,x1,y1,x2,y2,color){ 
		c.beginPath();
		c.moveTo(x,y);
		c.lineTo(x1,y1);
		c.lineTo(x2,y2);
		c.closePath();
		c.fillStyle=color;
		c.fill();
	}

//④直線
	function sen(x,y,x1,y1,color){ 
		c.beginPath();
		c.moveTo(x,y);
		c.lineTo(x1,y1);
		c.strokeStyle=color;
		c.stroke();
	}

//⑤文字
	function msg(x,y,size,str,color){
		c.fillStyle=color;
		c.font=size+"px arial";
		c.fillText(str,x,y);
	}
	
//「動く」
	function ugoku(start,end,dx,dy){
		if(start<=frame && frame<=end){
			yashiman.x += dx;
			yashiman.y += dy;
		}
		c.drawImage(img,yashiman.x,yashiman.y,100,100);
	}