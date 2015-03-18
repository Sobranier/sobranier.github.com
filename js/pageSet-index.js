/**
 * Created by yanweiqing on 14-5-1.
 */

var h=window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
var topbar=document.getElementById("topbar");
window.onscroll = function () {
	if($(document).scrollTop()>h)
	{topbar.className="topbar topbar-fade";}
	else{topbar.className="topbar";}
};


function setHeight(){
	var w=window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	var h=window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

	if(!document.getElementById("home__hero")){return false;};
	var home__hero=document.getElementById("home__hero");
	home__hero.style.height=h+"px";

	if(!document.getElementById("home__text")){return false;};
	var home__text=document.getElementById("home__text");
	home__text.style.height=h-270+"px";

}

setHeight();
$(window).resize(function(){
	setHeight();

});