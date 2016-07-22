function myAbs1(x){
	if(x>=0){
		return x;
	}else{
		return -x;
	}
}

var myAbs2 = function(x){
	if(x>=0){
		return x;
	}else{
		return -x;
	}	
};

function getExArguments(){
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}

function area_of_circle(r,pi){
	if(arguments.length == 0){
		return 'input r';
	}else if(arguments.length == 1){
		return r*3.14;
	}else{
		return r*pi;
	}
}

function pow(x) {
    return x * x;
}


console.log(myAbs1(-9));
console.log(myAbs2(-9));
console.log(myAbs2(-9,1,2,3));
getExArguments(1,2,3);
console.log(area_of_circle(1));
console.log(area_of_circle(1,3.1415));
console.log('--------');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2=arr.map(pow);
for(var i=0;i<arr2.length;i++){
	console.log(arr2[i]);
}
console.log('--------');
console.log(arr.reduce(function (x,y){
	return x+y;
}));
console.log('--------');
var str = '123';
var arrstr = [];
for (var x of str){ 
	arrstr.push(x); 
}
console.log(arrstr);