for(var i = 1; i <= 100; i++){
    console.log('媳妇我错了');
    alert('あなたは猿じりですね');
}
for(var i = 1; i < 10; i++){
    alert('李さんは猿じりですね');
}
var arr = [];//创建了一个空的数组
var arr1 = [1,2,'pink先生',true];
alert(arr1[2]);
alert(arr1[3]);
alert(arr1[1]);
alert(arr1[0]);


var arr2 = ['月曜日','火曜日','水曜日','木曜日','金曜日','土曜日','日曜日'];
for(var i = 0; i < 6; i++);{
    alert(arr2[i]);
}

function sayHi(){
    console.log('hi~~');
}
sayHi();

function f(){
    return "Hello,world";
}
document.write(f());

function getSum(){
    var sum = 0;
    for (var i = 1; i <= 100; i++){
        sum += i;
    }
    console.log(sum);
}
getSum();

function cook(){
    console.log('酸辣土豆丝');
}
cook();
cook();

function cook(aru){
    console.log(aru);
    
}
cook('牛肉じゃが');
cook('おでん');

function getNum(x,y){
var Num = x + y;
    alert(Num);
    console.log(Num);
}
getNum(12,13);

function fun(){
    var num1 = 10;
}
fun();
