/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	if(IE) e2.style.filter='revealtrans(transition=16,duration=0.80)';
	if(IE) window.setTimeout('DoTrans(e2,2000,0,2000)',1000);
	else { if(V5) document.getElementById('e2').style.visibility='visible'; else document.e2.visibility='visible'; }
}


/*--- EndOfFile ---*/
