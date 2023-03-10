/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP.bw=0; IDP.bd=0;
	if(self.innerHeight)
	{	IDP.bw=self.innerWidth;
		IDP.bd=self.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight)
	{	IDP.bw=document.documentElement.clientWidth;
		IDP.bd=document.documentElement.clientHeight;
	}
	else if(document.body)
	{	IDP.bw=document.body.clientWidth;
		IDP.bd=document.body.clientHeight;
	}
	IDP.bw=IDP.bw / 1.33;
	IDP.bd=IDP.bd / 1.33;
	IDP[1]=(V5)?'document.getElementById(\'e41\').style.visibility':(IE)?'e41.style.visibility':'document.e41.visibility';
	IDP[2]=(V5)?'document.getElementById(\'e28\').style.visibility':(IE)?'e28.style.visibility':'document.e28.visibility';
	IDP[3]=(V5)?'document.getElementById(\'e20\').style.visibility':(IE)?'e20.style.visibility':'document.e20.visibility';
	IDP[4]=(V5)?'document.getElementById(\'e15\').style.visibility':(IE)?'e15.style.visibility':'document.e15.visibility';
	IDP[5]={	x:new Array(286,764),
				y:new Array(632,422),
				s:13 };
	IDP[6]=(V5)?document.getElementById('e5').style:(IE)?e5.style:document.e5;
	IDP[7]={	x:new Array(286,357),
				y:new Array(632,386),
				s:12 };
	IDP[8]=(V5)?document.getElementById('e4').style:(IE)?e4.style:document.e4;
	IDP[9]=(V5)?'document.getElementById(\'e1\').style.visibility':(IE)?'e1.style.visibility':'document.e1.visibility';
	if(IE) e41.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[1]+"='visible'",0);else document.e41.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e41.filters.alpha.opacity",1,100,1,0,60,-1,-1,-1)',0);
	if(IE) e28.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[2]+"='visible'",7000);else document.e28.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e28.filters.alpha.opacity",2,100,2,0,80,-1,-1,-1)',7000);
	if(IE) e20.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[3]+"='visible'",9000);else document.e20.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e20.filters.alpha.opacity",10,100,10,0,100,1000,100,1000)',9000);
	if(IE) e15.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[4]+"='visible'",1000);else document.e15.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e15.filters.alpha.opacity",2,100,2,0,80,4000,80,4000)',1000);
	if(IE) e14.style.filter='revealtrans(transition=2,duration=2.00)';
	if(IE) window.setTimeout('DoTrans(e14,1999,-1,-1)',2000);
	else { if(V5) document.getElementById('e14').style.visibility='visible'; else document.e14.visibility='visible'; }
	window.setTimeout('DoRoute(6,5,0,0,0,100)',10000);
	if(IE) e5.style.filter='alpha(opacity=100)';
	if(IE) window.setTimeout('DoAlpha("e5.filters.alpha.opacity",99,100,-1,1,-1,-1,60,-1)',9000);
	window.setTimeout('DoRoute(8,7,0,0,0,100)',10000);
	if(IE) e4.style.filter='alpha(opacity=100)';
	if(IE) window.setTimeout('DoAlpha("e4.filters.alpha.opacity",98,100,-2,1,-1,-1,80,-1)',8000);
	if(IE) e1.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[9]+"='visible'",15000);else document.e1.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e1.filters.alpha.opacity",1,100,1,0,20,8000,150,15000)',15000);
}


/*--- EndOfFile ---*/
