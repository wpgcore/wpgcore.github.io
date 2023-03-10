/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP[1]=(V5)?'document.getElementById(\'e4\').style.visibility':(IE)?'e4.style.visibility':'document.e4.visibility';
	if(IE) e4.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[1]+"='visible'",1000);else document.e4.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e4.filters.alpha.opacity",5,100,5,0,100,2000,100,2000)',1000);
	if(IE) e1.style.filter='revealtrans(transition=12,duration=2.00)';
	if(IE) window.setTimeout('DoTrans(e1,1999,-1,-1)',2000);
	else { if(V5) document.getElementById('e1').style.visibility='visible'; else document.e1.visibility='visible'; }
}


/*--- EndOfFile ---*/
