// JavaScript Document

/*S 头部选项卡*/

var oDivnavigation=document.getElementById('divnavigation');
var aDivnavigationLi=oDivnavigation.getElementsByTagName('li');
var aDivnavigationSpan=oDivnavigation.getElementsByTagName('span');
var oDivsubmenu=document.getElementById('divsubmenu');
var aDivsubmenuP=oDivsubmenu.getElementsByTagName('p');
var oDivnavigationnum=0;
var oDivnavigationTime=null;
	/*循环*/
	for(var i=0;i<aDivnavigationLi.length;i++)
	{
		aDivnavigationLi[i].index=i;
		aDivsubmenuP[i].index=i;
		aDivnavigationLi[i].onmouseover=oDivnavigationshow;
		aDivnavigationLi[i].onmouseout=oDivnavigationhide;
		aDivsubmenuP[i].onmouseover=oDivnavigationshow;
		aDivsubmenuP[i].onmouseout=oDivnavigationhide;
	
	};
	/*让当前的span的display为none，对应的p的display为block*/
	function oDivnavigationshow()
	{
		clearInterval( oDivnavigationTime );
			for(var j=0;j<aDivnavigationLi.length;j++){
				aDivsubmenuP[j].style.display="none";
				aDivnavigationSpan[j].style.display="block";
					
			}
		aDivsubmenuP[this.index].style.display="block";
		aDivnavigationSpan[this.index].style.display="none";
		aDivnavigationSpan[0].style.display="none"; /*第0个永远为none*/
	};
	/*设置延时器，500Ms后返回最初的样子*/
	function oDivnavigationhide()
	{
		oDivnavigationTime = setTimeout(function()
		{
			for(var j=0;j<aDivnavigationLi.length;j++)
				{
				aDivsubmenuP[j].style.display="none";
				aDivnavigationSpan[j].style.display="block";		
				}
			aDivsubmenuP[oDivnavigationnum].style.display="block";
			aDivnavigationSpan[oDivnavigationnum].style.display="none";
		}, 500);
	};

/*E 选项卡*/	
/*S 焦点图定时器功能*/
var oDivimgplay=document.getElementById('divimgplay');
var oDivimgpic=document.getElementById('divimgpic');
var oDivimgswitch=document.getElementById('divimgswitch')
var aDivimgpicLi=oDivimgpic.getElementsByTagName('li')
var aDivimgswitchA=oDivimgswitch.getElementsByTagName('a');
var oSlidepre=oDivimgplay.getElementsByClassName('slide_pre')[0];
var oSlidenext=oDivimgplay.getElementsByClassName('slide_next')[0];
var now=0;
var timer=null;

   clearInterval(timer);
   for(var i=0;i<aDivimgswitchA.length;i++)
   {
	   aDivimgswitchA[i].index=i;
	   aDivimgswitchA[i].onmouseover=function()
	   {
		   now=this.index;
		   tab();
	   }
   };
   
   function tab()
   {
	   for(var i=0;i<aDivimgswitchA.length;i++)
	   {
		  aDivimgswitchA[i].className='';
		  aDivimgpicLi[i].style.display='none';
	   }
		 
		 aDivimgswitchA[now].className='current';
		 aDivimgpicLi[now].style.display='block';
		
   };

  
   function next()
   {
	   now++
	   if(now==aDivimgswitchA.length)
	   {
		   now=0;
	   }
	   
	   tab();
   };
    

   var timer=setInterval(next, 2000);
   
   oDivimgplay.onmousemove=function()
   {
	   
	   clearInterval(timer);
	   
   };
   
   oDivimgplay.onmouseout=function()
   {
	   
	   timer=setInterval(next, 2000);
	   
   };
   
   oSlidepre.onmouseover=oSlidenext.onmouseover=function()
   {
	   
	  this.style.opacity='0.7';
	  
   };
   
   oSlidepre.onmouseout=oSlidenext.onmouseout=function()
   {
	   
	   this.style.opacity='0.2';
	   
   }
   

   oSlidepre.onclick=function()
   {
	 
	   now--;
	   if(now==-1)
	   {
		   now=aDivimgpicLi.length-1;
	   }
	   tab();
   };
   
   oSlidenext.onclick=function()
   {
	   
	   now++;
	   if(now==aDivimgpicLi.length)
	   {
		   now=0;
	   }
	   tab();
   };
   
 /*E 焦点图定时器*/  
 
 /*S 小图播放*/
 
var oDivmodads=document.getElementById('divmodads');
var oDivimginfo=document.getElementById('divimginfo_player');
var oDivpageinfo=document.getElementById('divpageinfo_player');
var aDivimginfoLi=oDivimginfo.getElementsByTagName('li');
var aDivpageinfoA=oDivpageinfo.getElementsByTagName('a');
var now2=0;
var timer2=null;

//alert(aDivpageinfoA.length)
//alert(aDivimginfoLi.length)
for(var i=0;i<aDivpageinfoA.length;i++)
{
	aDivpageinfoA[i].index=i;
	aDivpageinfoA[i].onmouseover=function()
	{
		now2=this.index;
		tab2()
	};
};

function tab2()
{
	
	for(var i=0;i<aDivpageinfoA.length;i++)
	{
		aDivpageinfoA[i].className='';
		aDivimginfoLi[i].style.display='none';
	}
	   aDivpageinfoA[now2].className='current';
	   aDivimginfoLi[now2].style.display='block';
};

function next2()
{
	now2++;
	if(now2==aDivpageinfoA.length)
	{
		now2=0;
	};
	
	tab2();
};
 
var timer2=setInterval(next2, 1000);
 
 oDivmodads.onmouseover=function()
 {
	 clearInterval(timer2);
 };
 
 oDivmodads.onmouseout=function()
 {
	timer2=setInterval(next2, 1000);
 };
 
 
 
 
 /*E 小图播放*/
 
/*S 在线首发*/
var AFirstPicAltArr=[
["中国之星 第3期","PSY 7TH ALBUM","A Head Full of Dreams","故事岛","唱游天下 第4期","隐藏的歌手 第5期","中国之星 第1期","MATRIX","唱游天下 第1期","2015一生所爱·大地飞歌 第3期"],
["Title(Special Edition)","西窗","第二季QQ音乐巅峰对决 第5期","真人秀？","隐藏的歌手 第6期","Kylie Christmas(Deluxe)","庄周梦蝶集","A Little Bliss","中国之星 第3期","On His Own"],
["第二季QQ音乐巅峰对决 冠军之夜","2015一生所爱·大地飞歌 第1期" ,"Wake up (Deluxe)","隐藏的歌手 第7期","不服","Listen Again" ,"中国之星 第2期","不属于我的世界","第二季QQ音乐巅峰对决 第5期","Blue Neighbourhood (Deluxe)" ],
["唱游天下 第2期","Purpose (Deluxe)","无法释怀","LOL - EP2","中国之星 第3期","Dark Sky Island (Deluxe)","韩国歌手","北上广不相信眼泪 电视原声带","河流","敢要敢不要"]
];
var AFirstPicName=[
["中国之星","PSY","Coldplay","王铮亮","唱游天下","隐藏的歌手","中国之星","B.A.P","唱游天下","一生所爱·大地飞歌"],
["Meghan Trainor","好妹妹乐队","QQ音乐","罗志祥","隐藏的歌手","Kylie Minogue","萨顶顶","陈凯彤","One Direction","欧豪"],
["QQ音乐","一生所爱·大地飞歌","The Vamps","隐藏的歌手","羽泉","David  guetta","中国之星","杨培安","QQ音乐","Troye Sivan"],
["唱游天下","Justin Bieber","董超凡","Twins","中国之星","Enya","韩星","华语群星","汪峰","王心凌"]
];
var AFirstPicArr=[
["img/shoufa/001ECKvW0Xb9Vz.jpg","img/shoufa/001hBGK00bVj9R.jpg","img/shoufa/000NQNPC09SpPS.jpg","img/shoufa/000RaNiz1DMLqu.jpg","img/shoufa/000SzTqp3s9eA5.jpg","img/shoufa/001EhL1I0XHvNn.jpg","img/shoufa/001ECKvW0Xb9Vz.jpg","img/shoufa/001eVW010guX1D.jpg","img/shoufa/001bp4Gq1lIrWd.jpg","img/shoufa/001JMdqa1vpNmh.jpg"],
["img/shoufa/001lHOIO0DK7Nf.jpg","img/shoufa/001pQeyo3WkBgC.jpg","img/shoufa/001yuhcG39kdFf.jpg","img/shoufa/002B9oOH0MD7Ka.jpg","img/shoufa/002dtwGF1Xz9qp.jpg","img/shoufa/002j5wKV2dHi3T.jpg","img/shoufa/002LqPxj0FeTiG.jpg","img/shoufa/002oEbYr4QdUGG.jpg","img/shoufa/002VtAKV21LPJM.jpg","img/shoufa/002Y50WR35w7gU.jpg"],
["img/shoufa/002yDk1C29P5DW.jpg","img/shoufa/002zBHkE0p10RS.jpg","img/shoufa/003AkchD26E9U3.jpg","img/shoufa/003Dbd6127vD4y.jpg","img/shoufa/003GtOI81iOxnR.jpg","img/shoufa/003jL7QI32aNjr.jpg","img/shoufa/003osJyw1kdXHD.jpg","img/shoufa/003owI361eodBI.jpg","img/shoufa/003OZaYF0hJQsV.jpg","img/shoufa/003zyXMt0Whaim.jpg"],
["img/shoufa/004GXMAl1zHMhk.jpg","img/shoufa/004J17sv3iqNkK.jpg","img/shoufa/004Qqclm48aV0T.jpg","img/shoufa/0012OGuG0gPZUi.jpg","img/shoufa/0019waz52nHaZv.jpg","img/shoufa/0027OA5K3F3pTd.jpg","img/shoufa/0030Rfas23lN5Y.jpg","img/shoufa/0032wsE33S0oXx.jpg","img/shoufa/0033qUNg3dyZal.jpg","img/shoufa/0041dc914JGkvr.jpg"]
];


var AFirstDiv=document.getElementById('AFimgplay');
var Adivalbumtag=document.getElementById('divalbumtag');
var AFirstP=Adivalbumtag.getElementsByClassName('mod_first_prev')[0];
var AFirstN=Adivalbumtag.getElementsByClassName('mod_first_next')[0];
var AFirstUl=document.getElementById('divalbumlist');
var AFirstImg=AFirstUl.getElementsByTagName('img');
var AFirststr=AFirstDiv.getElementsByClassName('ablum_name');
var AFirststr2=AFirstDiv.getElementsByClassName('ablum_singer');
var AFirstLi=AFirstUl.getElementsByTagName('li');
var AFirstShow=AFirstUl.getElementsByClassName('icon_play');
var AFirstnum=0;
//alert(AFirstLi.length)
AFirstP.onclick=function (){
	AFirstnum--;
	if(AFirstnum==-1)AFirstnum=0;
	for(var i=0;i<AFirstPicArr[AFirstnum].length;i++){
		AFirstImg[i].src=AFirstPicArr[AFirstnum][i];
		AFirstImg[i].title=AFirstPicAltArr[AFirstnum][i];
		AFirststr[i].innerHTML=AFirstPicAltArr[AFirstnum][i];
		AFirststr2[i].innerHTML=AFirstPicName[AFirstnum][i];
	}
	return false;
};
AFirstN.onclick=function (){
	
	AFirstnum++;
	
	if(AFirstnum==AFirstPicArr.length)AFirstnum=AFirstPicArr.length-1;
	
	for(var i=0;i<AFirstPicArr[AFirstnum].length;i++){
		
		AFirstImg[i].src=AFirstPicArr[AFirstnum][i];
		AFirstImg[i].title=AFirstPicAltArr[AFirstnum][i];
		AFirststr[i].innerHTML=AFirstPicAltArr[AFirstnum][i];
		AFirststr2[i].innerHTML=AFirstPicName[AFirstnum][i];
	}
	return false;
};
for(var i=0;i<AFirstLi.length;i++)
{
	AFirstLi[i].onmouseover=function()
	{
		for(var i=0;i<AFirstLi.length;i++)
		{
			
		}
	}
}


/*E 在线首发*/

/*S 最新/最热推荐*/
var AmodRecommendtag=document.getElementById('divsongtag');
var AmodRecommendtagA=AmodRecommendtag.getElementsByTagName('li');
var AmodRecommendlist1=document.getElementById('divsonglist1');
var AmodRecommendlist2=document.getElementById('divsonglist2');

var AmodRecommendlist1Li=AmodRecommendlist1.getElementsByTagName('li');
var AmodRecommendlist2Li=AmodRecommendlist2.getElementsByTagName('li');
var AmodRecommendlist1A1=AmodRecommendlist1.getElementsByClassName('music_name');
var AmodRecommendlist1A2=AmodRecommendlist1.getElementsByClassName('recommend_singer');
var AmodRecommendlist1Span=AmodRecommendlist1.getElementsByClassName('count');
var AmodRecommendlist1listCp=AmodRecommendlist1.getElementsByClassName('list_cp');
var AmodRecommendlist2Span=AmodRecommendlist2.getElementsByClassName('count');
var AmodRecommendlist2listCp=AmodRecommendlist2.getElementsByClassName('list_cp');

//alert(AmodRecommendlist1Li.length)
//alert(AmodRecommendlist2Li.length)
//alert(AmodRecommendlist1Span.length)
//alert(AmodRecommendlist1listCp.length)
//alert(AmodRecommendlist2Span.length)
//alert(AmodRecommendlist2listCp.length)
    show2(AmodRecommendlist1Li,AmodRecommendlist1listCp,AmodRecommendlist1Span);
	show2(AmodRecommendlist2Li,AmodRecommendlist2listCp,AmodRecommendlist2Span);
	function show2(obj,obj1,obj2){
		for(var i=0;i<obj.length;i++){
			obj[i].index=i;
			obj[i].onmouseover=function ()
			{
				for(var i=0;i<obj.length;i++)
				{
					obj[i].className='';
				}
				obj[this.index].className='play_hover';
				obj1[this.index].style.display="block";
				obj2[this.index].style.display="none";
				
			};
			obj[i].onmouseout=function ()
		    {
				for(var i=0;i<obj.length;i++)
				{
					obj[i].className='';
				}
				obj1[this.index].style.display="none";
				obj2[this.index].style.display="block";
			};
			
		}
	
	}
	
	
/*E 最新/最热推荐*/	


/*S 右侧回到顶部等按钮*/

var oAdivvisitorcp = document.getElementById('divvisitorcp');

/* */
var btntop=document.getElementById('btntop');
var divplayer=document.getElementById('divplayer');
var btnbottom=document.getElementById('btnbottom');
var iH = Math.max(document.body.offsetHeight, view().h, document.body.scrollHeight);
var Atimer=null;
	
window.onscroll=window.onresize= function(){

	if( isIe6() ){
	
		oAdivvisitorcp.style.top = view().h*0.7 + scrollY() + 'px';	
		divplayer.style.top= view().h-divplayer.offsetHeight + scrollY() + 'px';
	}
                                                                    	
};

	btntop.onmouseover=function (){
		 bodyMove (1,0)	
	};
	btnbottom.onmouseover=function (){
	
		bodyMove (1,iH-view().h )	
	
	};
	btntop.onmouseout=btnbottom.onmouseout=function (){
		clearInterval( Atimer );
		};
function bodyMove ( dir,target ) {
	

	dir = scrollY() < target ? dir : -dir;
	
	clearInterval( Atimer );
	
	Atimer = setInterval(function () {
		var speed =scrollY() + dir;	
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		document.body.scrollTop = document.documentElement.scrollTop = speed;  
		
		if ( speed == target ) {
			clearInterval(Atimer );	
		}
		
	}, 30);
}
btntop.onclick = function(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;	
};
btnbottom.onclick=function (){

	document.body.scrollTop = document.documentElement.scrollTop = iH-view().h;
		
}

/*E 右侧回到顶部等按钮*/

/*S 音乐你的生活*/
var divplayer=document.getElementById('divplayer');
var btnfold=document.getElementById('btnfold');
//alert(!divplayer.onoff)

function autoshou()
{
	if(!divplayer.onoff)
	{
		
	    divplayer.timer1=setTimeout(function ()
		{
		    doMove(divplayer,50,'left',-540,function ()
			{
			divplayer.onoff=true;
				
		    })
		},2000)
	}
}
autoshou();

divplayer.onmouseover=function (){
	clearTimeout( divplayer.timer1 );
}
divplayer.onmouseout=function (){
	autoshou();
}
btnfold.onclick=function (){

	if(divplayer.onoff){
	doMove(divplayer,50, 'left', 0,function (){
		divplayer.onoff=false;
		removeClass(divplayer,'m_player_folded')
		 btnfold.title="点击收起"
		} )	
	}else if(!divplayer.onoff){
	doMove(divplayer,50, 'left',-540,function (){
		divplayer.onoff=true;
		 addClass(divplayer,'m_player_folded');
		 btnfold.title="点击展开"
		} )	
	}	
};
function play (){}

/*E 音乐你的生活*/