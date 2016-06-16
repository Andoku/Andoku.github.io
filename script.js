myBlurFunction = function(state) {
    /* state can be 1 or 0 */
    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');

    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
};


myBlurFunction2 = function(state) {
    if (state == 1) {
        document.getElementById('blur-div').className='alerting-1';
        document.getElementById('social').style.display='block';
        document.getElementById('background').style.display='block';
    } else if (state == 2) {
        document.getElementById('blur-div').className='alerting-1';
        document.getElementById('delivery').style.display='block';
        document.getElementById('background').style.display='block';
    } else if (state == 3) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('about').style.display='block';
        document.getElementById('background').style.display='block';
        document.getElementById('principles').style.display='none';
    } else if (state == 4) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('product').style.display='block';
        document.getElementById('background').style.display='block';
    } else if (state == 5) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('photo').style.display='block';
        document.getElementById('background').style.display='block';
    } else {
        document.getElementById('blur-div').className='';
        document.getElementById('social').style.display='none';
        document.getElementById('delivery').style.display='none';
        document.getElementById('about').style.display='none';
        document.getElementById('product').style.display='none';
        document.getElementById('photo').style.display='none';
        document.getElementById('background').style.display='none';
    }
	
    /* state can be 1 or 0 
    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');
    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    } */
};

hide = function(type) {
	text=document.getElementById(type);
	if (text.style.display == 'none') {
		text.style.display = 'block';
		document.getElementById('popup').style.height =' 850px';
		if (document.getElementById('about').style.height < '1010px') document.getElementById('about').style.height='1010px';
	} else {
		text.style.display = 'none';
		document.getElementById('popup').style.height='706px';
	}
	
}
	
document.ready = function() {
	document.getElementById('photo').style.display='none';
	document.getElementById('about').style.display=='none';
};

document.onclick = function() {
    if (document.getElementById('background').style.display=='block' && document.getElementById('photo').style.display=='none' && document.getElementById('about').style.display=='none') {
        document.getElementById('blur-div').className='';
        document.getElementById('social').style.display='none';
        document.getElementById('delivery').style.display='none';
        document.getElementById('product').style.display='none';
        document.getElementById('background').style.display='none';
    }
};
