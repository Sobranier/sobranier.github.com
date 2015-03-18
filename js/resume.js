/**
 * Created by yanweiqing on 14-5-1.
 */
window.onload = function(){
	var drawing = document.getElementById("drawing"),
		btn     = document.getElementById("export-btn"),
		btn_2   = document.getElementById("close-btn");
	var board=document.getElementById("outer");



	//make sure <canvas> is completely supported
	if (drawing.getContext){

		var context = drawing.getContext("2d");
		var image1 = document.getElementById("smiley");
		var image2 = document.getElementById("face");


		context.fillStyle="#dcdcdc";
		context.fillRect(0,0,1240,1754);
		context.fillStyle="#d0d0d0";
		context.fillRect(0,400,1240,1354);
		context.fillStyle="#c0c0c0";
		context.fillRect(0,1300,1240,454);



		/*上边栏*/
		context.font="bold 60px Lucida Grande";
		context.fillStyle = "#000000";
		context.textAlign="left";
		context.textBaseline="bottom";
		context.fillText("Yan Weiqing",60,130);


		context.font="normal 30px Lucida Grande";
		context.fillStyle = "#38a7ba";
		context.textAlign="left";
		context.textBaseline="bottom";
		context.fillText("Web Software Engineer",500,150);

		context.fillStyle = "#000000";
		context.fillText("'OH WOW OH WOW OH WOW'",60,230);

		context.drawImage(image1,322,96,41,41, 50, 280, 33, 33);
		context.fillText("ywq1991@gmail.com",100,310);

		context.drawImage(image1, 381,155,41,41,490, 280, 33, 33);
		context.fillText("Beijing",540,310);

		context.drawImage(image1, 322,212,45,45,50, 340, 33, 33);
		context.fillText("www.sobra.im",100,370);

		context.drawImage(image1, 322,155,41,41,490, 340, 33, 33);
		context.fillText("(+86)15210624800",540,370);



		context.drawImage(image2, 900, 67, 250, 333);


		//OH WOW OH WOW OH WOW



		/*几个标题*/
		context.beginPath();
		context.strokeStyle = "#38a7ba";

		context.lineWidth=40;
		context.lineCap="round";
		context.moveTo(60,450);
		context.lineTo(250,450);
		context.moveTo(60,650);
		context.lineTo(270,650);

		context.moveTo(60,970);
		context.lineTo(210,970);

		context.moveTo(780,450);
		context.lineTo(920,450);


		context.moveTo(780,730);
		context.lineTo(950,730);
		context.stroke();
		context.fillStyle = "#ffffff";
		context.font="bold 30px Lucida Grande";
		context.fillText("Education",80,468);
		context.fillText("Award",800,468);
		context.fillText("Experience",80,666);
		context.fillText("Project",80,986);
		context.fillText("Interests",800,746);



//教育经历
		context.fillStyle = "#000000";
		context.font="bold 20px Lucida Grande";
		context.textAlign="right";
		context.fillText("Peking University",270,518);


		context.font="normal 20px Lucida Grande";
		context.textAlign="left";
		context.fillText("Bachelor Of Science",290,518);

		context.textAlign="right";
		context.fillText("Beijing,China",270,548);

		context.textAlign="left";
		context.fillText("School of Electronics Engineering &",290,548);

		context.textAlign="right";
		context.fillStyle = "#38a7ba";
		context.fillText("Sept.2009-July.2014",270,578);

		context.textAlign="left";
		context.fillStyle = "#000000";
		context.fillText("Computer Science",290,578);
//经历



//乐动力
		context.font="bold 20px Lucida Grande";
		context.textAlign="right";
		context.fillText("IOS Department",270,718);
		context.font="normal 20px Lucida Grande";
		context.textAlign="right";
		context.fillText("LangDong Technology Ltd.",270,748);
		context.textAlign="right";
		context.fillStyle = "#38a7ba";
		context.fillText("Oct.2013-Dec.2013",270,778);
		context.fillStyle = "#000000";
		context.textAlign="left";
		context.fillText("Involved in IOS development ",290,718);
		context.textAlign="left";
		context.fillText("Built two simple APP on iphone",290,748);
		context.textAlign="left";
		context.fillText("",290,778);
//易贸
		context.font="bold 20px Lucida Grande";
		context.textAlign="right";
		context.fillText("User Experience Design",270,838);
		context.font="normal 20px Lucida Grande";
		context.textAlign="right";
		context.fillText("NovaCloud Ltd.",270,868);
		context.textAlign="right";
		context.fillStyle = "#38a7ba";
		context.fillText("Dec.2013-NOW",270,898);
		context.fillStyle = "#000000";
		context.textAlign="left";
		context.fillText("Involved in UI development ",290,838);
		context.textAlign="left";
		context.fillText("Involved in several complete projects",290,868);
		context.textAlign="left";
		context.fillText("",290,898);

/*
*
*
* 参与了ui部门的很多工作。
* 参与了一个完整的前端项目，并且完成了其中很多工作。
* */



	// 获奖
		context.drawImage(image1,365,400,107,107, 760,490, 33, 33);
		context.fillText("Outstanding volunteers",820,520);
		context.fillText("in the 60th National Day activities",820,550);


		context.drawImage(image1,365,400,107,107, 760, 560, 33, 33);
		context.fillText("EMC2 online knowledge contest awards",820,590);


		context.drawImage(image1,365,400,107,107, 760, 600, 33, 33);
		context.fillText("Second prize in the photography contest",820,630);
		context.fillText("hold by YASP of Peking University",820,660);





		//喜好
		context.drawImage(image1,361,539,123,123, 760,770, 33, 33);
		context.fillText("Photography",820,800);

		context.drawImage(image1,516,375,123,123, 760,820, 33, 33);
		context.fillText("Travelling",820,850);

		context.drawImage(image1,505,170,75,75, 760,870, 33, 33);
		context.fillText("Writing",820,900);


		context.drawImage(image1,510,263,65,65, 760,920, 33, 33);
		context.fillText("Drawing",820,950);

		context.drawImage(image1,247,298,107,107, 760,970, 33, 33);
		context.fillText("Movie",820,1000);












		context.drawImage(image1,397,258,75,75, 980,770, 33, 33);
		context.fillText("Cycling",1040,800);


		context.drawImage(image1,625,257,78,78, 980,820, 33, 33);
		context.fillText("Swimming",1040,850);

		context.drawImage(image1,558,552,115,115, 980,870, 33, 33);
		context.fillText("Ping-Pong",1040,900);


		context.drawImage(image1,615,111,88,88, 980,920, 33, 33);
		context.fillText("Electronics",1040,950);
		context.drawImage(image1,315,700,117,117, 980,970, 33, 33);
		context.fillText("Game",1040,1000);



//项目

		context.font="bold 20px Lucida Grande";
		context.textAlign="left";
		context.fillText("Work Placement",60,1050);
		context.fillText("School Study",1060,1250);


		context.font="normal 18px Lucida Grande";

		context.fillStyle = "#38a7ba";
		context.fillText("2012.09-2013.01",650,1060);
		context.fillStyle = "#000000";
		context.fillText("Weibo Oriented Events Analysis and Multiple Versions",666,1090);
		context.fillStyle = "#38a7ba";
		context.fillText("2012.10-2013.03",650,1125);
		context.fillStyle = "#000000";
		context.fillText("Automatic Anatomical Structure Parsing in Cephalograms by DBN",666,1155);
		context.fillStyle = "#38a7ba";
		context.fillText("2013.02-2013.07",650,1190);
		context.fillStyle = "#000000";
		context.fillText("Automatic Control on Smart Car",666,1220);
		context.fillStyle = "#38a7ba";
		context.fillText("2013.05-2013.08",650,1255);
		context.fillStyle = "#000000";
		context.fillText("Research On the Classification of IrisData",666,1285);


		context.textAlign="right";
		context.fillStyle = "#38a7ba";
		context.fillText("2013.12-2014.04",580,1100);
		context.fillStyle = "#000000";
		context.fillText("Full participation in a front-end architecture of",564,1130);
		context.fillText("an Enterprise Personnel Management System",564,1150);

		context.fillStyle = "#38a7ba";
		context.fillText("2014.03-2014.04",580,1195);
		context.fillStyle = "#000000";
		context.fillText("Set up a WeChat public number",564,1220);



		context.beginPath();
		context.strokeStyle = "#38a7ba";

		context.lineWidth=2;
		context.lineCap="round";
		context.moveTo(620,1050);
		context.lineTo(620,1280);
		context.stroke();
		context.fillStyle="#38a7ba";

		context.beginPath();
		context.arc(620,1080,6,0,Math.PI*2,true);
		context.arc(620,1110,6,0,Math.PI*2,true);
		context.arc(620,1140,6,0,Math.PI*2,true);
		context.arc(620,1170,6,0,Math.PI*2,true);
		context.arc(620,1220,6,0,Math.PI*2,true);
		context.arc(620,1250,6,0,Math.PI*2,true);
		context.closePath();
		context.fill();

		context.beginPath();
		context.strokeStyle = "#38a7ba";

		context.lineWidth=1;
		context.lineCap="round";
		context.moveTo(620,1080);
		context.lineTo(650,1050);
		context.moveTo(620,1110);
		context.lineTo(650,1115);
		context.moveTo(620,1140);
		context.lineTo(650,1180);
		context.moveTo(620,1170);
		context.lineTo(650,1245);
		context.moveTo(620,1220);
		context.lineTo(580,1090);
		context.moveTo(620,1250);
		context.lineTo(580,1185);




		context.stroke();










		/*尾部的图画*/
		/*
		context.fillStyle="#ffffff";
		context.fillRect(60,1360,1120,334);
		*/

		//左侧的框
		context.beginPath();
		context.strokeStyle = "#38a7ba";
		context.lineWidth=145;
		context.lineCap="butt";
		context.moveTo(132,1380);
		context.lineTo(132,1600);
		context.stroke();
		context.beginPath();
		context.lineWidth=105;
		context.moveTo(132,1360);
		context.lineTo(132,1620);
		context.stroke();
		context.fillStyle="#38a7ba";
		context.beginPath();
		context.arc(80,1380,20,0,Math.PI*2,true);
		context.arc(185,1380,20,0,Math.PI*2,true);
		context.arc(80,1600,20,0,Math.PI*2,true);
		context.arc(185,1600,20,0,Math.PI*2,true);
		context.closePath();
		context.fill();



		context.textAlign="left";


		context.beginPath();
		context.strokeStyle = "#b0b0b0";
		context.lineCap="round";
		context.lineWidth=2;
		context.moveTo(95,1400);
		context.lineTo(1169,1400);
		context.moveTo(95,1480);
		context.lineTo(1169,1480);
		context.moveTo(95,1560);
		context.lineTo(1169,1560);

		context.stroke();
		context.beginPath();
		context.strokeStyle = "#f0f3f7";
		context.lineCap="round";
		context.lineWidth=44;
		context.moveTo(95,1400);
		context.lineTo(169,1400);
		context.moveTo(95,1480);
		context.lineTo(169,1480);
		context.moveTo(95,1560);
		context.lineTo(169,1560);

		context.stroke();
		context.fillStyle = "#38a7ba";
		context.font="bold 25px Lucida Grande";
		context.fillText("Excellent",76,1412);
		context.fillText("Skilled",90,1494);
		context.fillText("Familiar",84,1572);









		context.beginPath();
		context.lineCap="butt";
		context.strokeStyle = "#38a7ba";
		context.lineWidth=48;
		context.moveTo(284,1600);
		context.lineTo(284,1430);
		context.moveTo(381,1600);
		context.lineTo(381,1430);
		context.moveTo(478,1600);
		context.lineTo(478,1500);
		context.moveTo(575,1600);
		context.lineTo(575,1460);
		context.moveTo(672,1600);
		context.lineTo(672,1460);
		context.stroke();

		context.font="bold 30px Lucida Grande";
		context.fillText("SKILLS",428,1660);





		context.beginPath();
		context.strokeStyle = "#4b5156";

		context.moveTo(769,1600);
		context.lineTo(769,1430);
		context.moveTo(866,1600);
		context.lineTo(866,1500);
		context.moveTo(963,1600);
		context.lineTo(963,1500);

		context.stroke();
		context.fillStyle = "#4b5156";
		context.font="bold 30px Lucida Grande";
		context.fillText("TOOLS",820,1660);


		context.beginPath();
		context.strokeStyle = "#333333";

		context.moveTo(1060,1600);
		context.lineTo(1060,1430);
		context.moveTo(1157,1600);
		context.lineTo(1157,1440);
		context.stroke();
		context.fillStyle = "#333333";
		context.font="bold 30px Lucida Grande";
		context.fillText("LANGUAGE",1030,1660);


		/*
		context.fillStyle = "black";
		context.font="bold 25px Lucida Grande";

		context.save();



		context.rotate(Math.PI/2);
		context.fillText("HTML",155,133);

		context.restore();

*/


		context.fillStyle = '#ffffff';
		context.font = 'bold 25px verdana';
		context.save();
		context.rotate(-Math.PI/2);
		context.fillText("HTML",-1595,297);
		context.fillText("CSS",-1595,394);
		context.fillText("JS",-1595,491);
		context.fillText("C++",-1595,588);
		context.fillText("Matlab",-1595,685);
		context.fillText("LR",-1595,782);
		context.fillText("PS",-1595,879);
		context.fillText("FW",-1595,976);
		context.fillText("Chinese",-1595,1073);
		context.fillText("English",-1595,1170);

		context.restore();






		context.fillStyle = "#fffff";
		context.font="bold 15px Lucida Grande";
		context.fillText("Produced by HTML5 entirely. All right reserved by YanWeiqing ",720,1740);

		/*




		context.font="bold 60px Lucida Grande";
		context.fillStyle = "#000000";
		context.textAlign="left";
		context.textBaseline="bottom";
		context.fillText("Yan Weiqing",60,130);


		context.font="bold 20px Segoe UI";
		context.fillStyle = "#b9b181";
		context.fillText("Artificial Intelligence . Web Development ",60,230);

*/



		/*

		//draw just part of the image
		context.drawImage(image1, 0, 10, 500, 500, 0, 100, 400, 600);


		context.beginPath();
		context.moveTo(450,150);
		context.lineTo(500,150);
		context.lineWidth=3;
		context.lineCap="round";
		context.stroke();



		 */







	}

	btn.onclick = function(){
		var imgURI = drawing.toDataURL();

		if ( $("#im").length > 0 )
		{

		}else{
			var image = document.createElement("img");
			image.src = imgURI;
			image.setAttribute("id","im");
			board.appendChild(image);

		}
		board.style.display="block";

	};
	btn_2.onclick = function(){
		board.style.display="none";

	};
};

