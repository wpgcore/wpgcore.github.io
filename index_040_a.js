/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP[1]=(V5)?'document.getElementById(\'e1\').style.visibility':(IE)?'e1.style.visibility':'document.e1.visibility';
	if(IE) e1.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[1]+"='visible'",1000);else document.e1.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e1.filters.alpha.opacity",5,100,5,0,100,2000,100,2000)',1000);
}


/*--- EndOfFile ---*/
