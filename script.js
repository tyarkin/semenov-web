var b=""
function h(){
	b=document.getElementById("q").value
	o();
}
function o(){
	document.getElementById("a").innerHTML="не найдено"
	document.getElementById("a").href="#"
	if (document.getElementById("q").value=="предисловие") {document.getElementById("q").value="информация"}
	if (document.getElementById("q").value=="когда родился") {document.getElementById("q").value="информация"}
	if (document.getElementById("q").value=="когда умер") {document.getElementById("q").value="информация"}
	if (document.getElementById("q").value=="где родился") {document.getElementById("q").value="информация"}
	if (document.getElementById("q").value=="кем работал") {document.getElementById("q").value="информация"}
	if (document.getElementById("q").value=="что окончил") {document.getElementById("q").value="информация"}
	if (document.getElementById("q").value=="биография") {document.getElementById("q").value="информация"}
	if (document.getElementById("q").value=="что внёс") {document.getElementById("q").value="чем знаменит"}
	if (document.getElementById("q").value=="что создал") {document.getElementById("q").value="чем знаменит"}
	if (document.getElementById("q").value=="какие получил ордена") {document.getElementById("q").value="награды"}
	if (document.getElementById("q").value=="какие получил медали") {document.getElementById("q").value="награды"}
	if (document.getElementById("q").value=="какое получил звание") {document.getElementById("q").value="награды"}
	if (document.getElementById("q").value=="Иван Яковлевич Яковлев") {document.getElementById("q").value="#"}
	if (document.getElementById("q").value=="Иван Яковлев") {document.getElementById("q").value="#"}
	if (document.getElementById("q").value=="информация") {
		document.getElementById("a").innerHTML="информация"
		if (document.getElementById("doc").innerHTML=="Информация") {
			document.getElementById("a").href="#"
		}else{
			document.getElementById("a").href="информация.html"
		}
	}
	if (document.getElementById("q").value=="чем знаменит"){
		document.getElementById("a").innerHTML="чем знаменит"
		if (document.getElementById("doc").innerHTML=="Чем знаменит") {
			document.getElementById("a").href="#"
		}else{
			document.getElementById("a").href="чем знаменит.html"
		}
	}
	if (document.getElementById("q").value=="награды") {
		document.getElementById("a").innerHTML="награды"
		if (document.getElementById("doc").innerHTML=="Награды") {
			document.getElementById("a").href="#"
		}else{
			document.getElementById("a").href="награды.html"
		}
	}
	if (document.getElementById("q").value=="#") {
		document.getElementById("a").innerHTML="все сайты"
		document.getElementById("a").href="#"
	}
	if (document.getElementById("q").value=="") {
		document.getElementById("a").innerHTML="нет текста"
		document.getElementById("a").href="#"
	}
	document.getElementById("q").value=b
}
function q(){
	document.getElementById("q").value="информация";
	o();
}
function w(){
	document.getElementById("q").value="чем знаменит";
	o();
}
function e(){
	document.getElementById("q").value="награды";
	o();
}
function n(){
	document.getElementById("m_txt").style.display="none"
}
function r(){
	document.getElementById("m").style.display="none"
	document.getElementById("m_txt").style.display="block"
	document.getElementById("pfg").innerHTML=", "
	document.getElementById("вар").innerHTML="варианты (все)"
}