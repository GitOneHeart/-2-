/*动画循环*/
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function(callback) {
					window.setTimeout(callback, 1000 / 60);
			   };
})();

//总角度
var totalDeg = 360 * 3 + 0;
var steps = [];
//获奖的角度
var prizeDeg = [0,330,150,90,30,270,210];
var now = 0;
var a = 0.14;
var outter, timer, running = false;
var i = 10;
function rotate(){
	//beforeSend
	running = true;
	timer = setInterval(fun1=function() {
		i += 10;
		outter.style.webkitTransform = 'rotate('+ (-i) + 'deg)';
		outter.style.MozTransform = 'rotate(' + (-i)+ 'deg)';
	}, 1);
	switch(Number(awardFlag)){
		case 0:start(prizeDeg[0]);break;
		case 1:start(prizeDeg[1]);break;
		case 2:start(prizeDeg[2]);break;
		case 3:start(prizeDeg[3]);break;
		case 4:start(prizeDeg[4]);break;
		case 5:start(prizeDeg[5]);break;
		case 6:start(prizeDeg[6]);break;
		default:start();
	}
		running = false;
};
function start(deg) {
	clearInterval(timer);
	totalDeg = 360 * 5 + deg;//
	steps = [];
	now = 0;
	countSteps();
	requestAnimFrame(step);
}

function countSteps() {
	var t = Math.sqrt(2 * totalDeg / a);
	var v = a * t;
	for ( var i = 0; i < t; i++) {
		steps.push((2 * v * i - a * i * i) / 2);
	}
	steps.push(totalDeg);
}
function step() {
	outter.style.webkitTransform = 'rotate('+(-steps[now++]) + 'deg)';
	outter.style.MozTransform = 'rotate('+(-steps[now++]) + 'deg)';
	if (now < steps.length) {
		requestAnimFrame(step);
	} else {//
		running = false;
		setTimeout(showResult, 200);
	}
}

function showResult(){
	if(times == 0){
		$("#img2").off("click",myFun);
		$('#img2').on('click',function(){
			alert("您今日的参与机会已用完，请明日再来呦!");
		});

	switch(Number(awardFlag)){
		case 1:$(".card .card_title").html('匈奴王金冠'); $('.card .introduce .contry').html('战国');$('.card .introduce .size').html('啊手机卡就12.3啊空间大129.4纠结啊房间啊流口水10,8');$('.card .introduce .from').html('卡卡老师的骄傲凯迪拉克绝对实力卡进度了');$('.card_img').attr('src','./img3/card5.png');$('.card').show();break;
		case 2:$(".card .card_title").html('铃首曲柄青铜短剑'); $('.card .introduce .contry').html('齐国');$('.card .introduce .size').html('12123');$('.card .introduce .from').html('1212');$('.gong_1 img').attr('src','./img3/card3.jpg');$('.card').show();break;
		case 3:$(".card .card_title").html('鸟形双系彩绘陶壶'); $('.card .introduce .contry').html('燕国');$('.card .introduce .size').html('啊手机卡就12.3啊空间大129.4纠结啊房间啊流口水10,8');$('.card .introduce .from').html('卡卡老师的骄傲凯迪拉克绝对实力卡进度了');$('.gong_1 img').attr('src','./img3/card4.png');$('.card').show();break;
		case 4:$(".card .card_title").html('安阳石币范'); $('.card .introduce .contry').html('韩国');$('.card .introduce .size').html('啊手机卡就12.3啊空间大129.4纠结啊房间啊流口水10,8');$('.card .introduce .from').html('卡卡老师的骄傲凯迪拉克绝对实力卡进度了');$('.gong_1 img').attr('src','./img3/card2.png');$('.card').show();break;
		case 5:$(".card .card_title").html('印金团花图案夹衫'); $('.card .introduce .contry').html('赵国');$('.card .introduce .size').html('啊手机卡就12.3啊空间大129.4纠结啊房间啊流口水10,8');$('.card .introduce .from').html('卡卡老师的骄傲凯迪拉克绝对实力卡进度了');$('.gong_1 img').attr('src','./img3/card6.jpg');$('.card').show();break;
		case 6:$(".card .card_title").html('錾花银盏托'); $('.card .introduce .contry').html('微6国');$('.card .introduce .size').html('啊手机卡就12.3啊空间大129.4纠结啊房间啊流口水10,8');$('.card .introduce .from').html('卡卡老师的骄傲凯迪拉克绝对实力卡进度了');$('.gong_1 img').attr('src','./img3/card7.jpg');$('.card').show();break;
	};
		return;
	}else{
		
	}
	$('section>p').html("您本周还有"+times+"次抽奖机会")
	$("#img2").on("click",myFun);
}



