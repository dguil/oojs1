var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');
      
btn.onclick = function() {
    var code = input.value;
    para.textContent = eval(code);
}

var person = {
	name : ['Bob','Smith'],
	age : 32,
	gender : 'Male',
	interests : ['Music','Skiing'],
	bio : function(){
		alert(this.name[0] + ' ' + this.name[1] + 'is '+this.age);
	} ,
	greeting : function () {
		// body...
		alert('Hi I\'m '+ this.name[0]);
	}
};