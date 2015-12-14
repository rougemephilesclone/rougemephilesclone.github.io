function Time(){
	var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	minutes=addZero(minutes);
	seconds=addZero(seconds);
	document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;
	clock=setTimeout(function(){Time()},500);
}

function addZero(digit){
	if (digit<=9){
		digit="0" + digit;
	  }
	return digit;
}

function newDoc() {
    window.location.assign("C:/Users/Liam/Documents/IASC1P02FinalWebsite.html")
  }

function newDoc2() {
    window.location.assign("C:/Users/Liam/Documents/IASC1P02FinalWebsiteSystem.html")
  }

function newDoc3() {
    window.location.assign("C:/Users/Liam/Documents/IASC1P02FinalWebsiteCharacters.html")
  }

var picture = new Array(10);
picture[0]='http://pokkentournament.jp/img/character/chara_main1.png';
picture[1]='http://pokkentournament.jp/img/character/chara_main2.png';
picture[2]='http://pokkentournament.jp/img/character/chara_main3.png';
picture[3]='http://pokkentournament.jp/img/character/chara_main4.png';
picture[4]='http://pokkentournament.jp/img/character/chara_main5.png';
picture[5]='http://pokkentournament.jp/img/character/chara_main6.png';
picture[6]='http://pokkentournament.jp/img/character/chara_main7.png';
picture[7]='http://pokkentournament.jp/img/character/chara_main8.png';
picture[8]='http://pokkentournament.jp/img/character/chara_main9.png';
picture[9]='http://pokkentournament.jp/img/character/chara_main10.png';

function pickRandom(range) {
        if (Math.random)
            return Math.round(Math.random() * (range-1));
        else {
            var now = new Date();
            return (now.getTime() / 1000) % range;
        }
    }
    var choice = pickRandom(picture.length);

function profiles(){
document.getElementById("visible").style.visibility="hidden";
document.getElementById("invisible").style.visibility="visible";
}
