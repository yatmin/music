// JavaScript Document
function $( v ){ 
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}

function getStyle( obj, attr ) { 
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj, false)[attr];
}



function doMove ( obj, dir, attr, target, endFn ) {

	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 30);
}

function opacity(obj , num , target , endFn) {
	
	num = (getStyle(obj, 'opacity')||1)*100 < target ? num : -num;
	
	clearInterval( obj.alpha );
	
	obj.alpha = setInterval(function() {
		
		var speed = (getStyle(obj, 'opacity')||1)*100 + num;
		
		if ( speed < target && num < 0 || speed > target && num > 0 ) {
			
			speed = target;
		
		}

		obj.style.opacity = speed / 100;
		obj.style.filter = "alpha(opacity: "+speed+")";
		
		if ( speed == target ) {
			clearInterval( obj.alpha );
			if(typeof endFn === 'function')endFn();
		}
		
	}, 20);
}


function shake(obj, attr, endFn) {
	var arr = [];
	var num = 0;
	var pos = parseInt(getStyle(obj, attr));	
	
	if(!obj.pos){
		obj.pos = pos;
	}
	
	for ( var i=20; i>0; i-=2 ) {
		arr.push(i, -i);
	}
	arr.push(0);
	clearInterval( obj.shake );
	obj.shake = setInterval(function() {
		obj.style[attr] = obj.pos + arr[num] + 'px';
		num ++;
		if ( num == arr.length ) {
			clearInterval( obj.shake );
			endFn && endFn();
		}
	}, 50);
}


function getNum(){ //100

	var arr = [];
	var json = {};
	
	while( arr.length < 100 ){
		
		var iNum = Math.round( Math.random()*1000 );

		if( !json[iNum] ){
			
			json[iNum] = 1;
			arr.push( iNum );
		
		}
		
	}
	return arr;
	
}
function fnIndexOf(arr,num,index){
	
	index = index || 0;
	
	for(var i=index; i<arr.length; i++){
	
		if( arr[i] === num )return i;
		
	}
	
	return -1;
	
}

function getPrev( obj ){ 
	
	if(!obj||!obj.previousSibling)return null;
	
	return obj.previousSibling.nodeType === 1 ? obj.previousSibling : getPrev( obj.previousSibling ); 
	
}

function getNext( obj ){
	
	if(!obj||!obj.nextSibling)return null;
	
	return obj.nextSibling.nodeType === 1 ? obj.nextSibling : getNext( obj.nextSibling ); 
	
}

function getFirst( obj ){
	
	if(!obj||!obj.firstChild)return null;
	
	return obj.firstChild.nodeType === 1 ? obj.firstChild : getNext( obj.firstChild ); 
	
}

function getLast( obj ){
	
	if(!obj||!obj.lastChild)return null;
	
	return obj.lastChild.nodeType === 1 ? obj.lastChild : getPrev( obj.lastChild ); 
	
}


function getPos( obj ){
	
	var aPos = {l: 0, t: 0};
	
	while( obj ){
		
		aPos.l += obj.offsetLeft;
		aPos.t += obj.offsetTop;
		
		obj = obj.offsetParent;
		
		if(obj){
			aPos.l += getStyle(obj,'borderLeftWidth');
			aPos.t += getStyle(obj,'borderTopWidth');
		}
		
	}
	
	return aPos;
}


function getByClass(sClass,parent){
	
	var aEles = (parent||document).getElementsByTagName('*');
	var arr = [];
	
	for(var i=0; i<aEles.length; i++){
		
		var aClass = aEles[i].className.split(' ');
	
		for(var j=0; j<aClass.length; j++){
			
			if( aClass[j] == sClass ){
			
				arr.push( aEles[i] );	
				break;
				
			}
			
		}
		
	}
	
	return arr;
	
}
function removeClass(obj,sClass){
	
	if(!obj.className)return;
	
	var aClass = obj.className.split(' ');
	
	for(var i=0; i<aClass.length; i++){
		if( aClass[i] === sClass ){
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
			return;
		}			
	}
	
}

function addClass(obj,sClass){
	
	if(!obj.className){		
		obj.className = sClass;
		return;	
	}
	
	var aClass = obj.className.split(' ');
	
	for(var i=0; i<aClass.length; i++){
		if( aClass[i] === sClass )return;			
	}

	obj.className += ' ' + sClass;	
	
}


function hasClass(obj,sClass){

	if(!obj.className)return false;
	
	var aClass = obj.className.split(' ');
	
	for(var i=0; i<aClass.length; i++){
	
		if(aClass[i] === sClass)return true;	
		
	}
	
	return false;
}





function isIe6(){
	// 'msie 6'
	var str = window.navigator.userAgent.toLowerCase();
	
	if( str.indexOf('msie 6') != -1)return true;
	
	return false;
	
}
function view(){
	return {
		w : document.documentElement.clientWidth,
		h : document.documentElement.clientHeight
	};	
}

function scrollY(){
	return document.body.scrollTop || document.documentElement.scrollTop;
}

function scrollX(){ 
	return document.body.scrollLeft|| document.documentElement.scrollLeft;
}

function bind(obj,ev,fn){
	
	if(obj.addEventListener){
		obj.addEventListener(ev,fn,false);
	}else{
		//obj.attachEvent('on'+ev,fn);	
		obj.attachEvent('on'+ev,function(){
			
			fn.call(obj);
				
		});	
	}
	
}