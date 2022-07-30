let minutes = 0; //ინახავს რამდენი წუთია დარჩენილი
let seconds = 0; //ინახავს რამდენი წამია დარჩენილი
let isOn = false; //ტაიმერი ჩართულია თუ არა იმისი ინდიკატორი
let isBreak = false; //შესვენებაა თუ არა იმისი ინდიკატორი
var timer = 0; //ტაიმერის ავტომატიზირებას ახდენს.

//ეს ფუნქცია იღებს კლიკს ამუშავებს მას და რთავს/თიშავს ტაიმერს.
function validateClick() {
	minutes = 25;
	seconds = 0;
	updateTimer(); //ტაიმერი რომ გაითიშება ისევ 25 წუთზე რომ დაჯდეს გამოსახულება
	if(isOn){ //თუ  ტაიმერი ჩართულია და მაშინ დაეჭირა ღილაკს
		isOn = false;
		clearInterval(timer);
		document.getElementById('start-button').innerHTML = 'დაწყება';
		document.getElementById('headline').innerHTML = 'პომოდორო თაიმერი';
	}
	else{ //თუ ტაიმერი გათიშულია და ღილაკს დაეჭირა
		isOn = true;
		timer = setInterval(calculateTime, 1000);
		document.getElementById('start-button').innerHTML = 'დასრულება';
	}
}

//მთავარი დროის მთვლელი
function calculateTime() {
	if(minutes == 0 && seconds == 0){
		if(isBreak){ //თუ შესვენება დასრულდა
			minutes = 25;
			isBreak = false;
			document.getElementById('headline').innerHTML = 'მუშაობის დროა';
		}else{ //თუ შესვენება დაიწყო
			minutes = 10;
			document.getElementById('headline').innerHTML = 'შესვენების დროა, თუ მუშაობა დაასრულე, შეაჩერე ტაიმერი';
			isBreak = true;
			addTree();
		}
	}
    if(seconds == 0) {
       minutes--;
       seconds = 59;
    } else {
       seconds--;
    }
	updateTimer();
}

//ანახლებს წამზომის გამოსახულებას
function updateTimer() {
    let time = document.getElementById('timer');
    if(seconds >= 10)
        time.innerText = minutes + ":" + seconds;
    else {
        time.innerText = minutes + ":0" + seconds; //რამეთუ 9 გამოსახოს როგორც 09, 8 - 08 და ა.შ
    }
    
}

let treesCount = 0; //რამდენი ხეა დარგული
let forestIsFull = false; //არის თუ არა ტყის გრაფიკული გამოსახულება გადავსებული
const maxTrees = 38; //მაქსიმალური ხის რაოდენობა რომელიც შეიძლება გამოისახოს ისე, რომ ხეები საზღვრებს არ გაცდეს.

//ამატებს ხეს ტყეში
function addTree() { 
	if(!forestIsFull){
		var img = document.createElement('img');
		var forest = document.getElementById('farm-graphics');
		img.src = 'tree.png'; 
		img.height = 150; 
		img.width = 100;
		var class_name = 'animal';
		img.setAttribute('class', class_name);
		forest.appendChild(img);
		if(treesCount == maxTrees) forestIsFull = true;
	}
	treesCount++;
	document.getElementById('farm-subheader').innerHTML = 'შენ დარგული ხეების რაოდენობაა: ' + treesCount;
}