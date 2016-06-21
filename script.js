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
        if (document.getElementById('product').style.display=='block') document.getElementById('product').style.display='none';
    } else if (state == 3) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('about').style.display='block';
        document.getElementById('background').style.display='block';
        document.getElementById('principles').style.display='none';
        if (document.getElementById('product').style.display=='block') document.getElementById('product').style.display='none';
    } else if (state == 4) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('product').style.display='block';
        document.getElementById('background').style.display='block';
        if (document.getElementById('product').offsetWidth < '1900') document.getElementById('product').style.height='1250px';
    } else if (state == 5) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('photo').style.display='block';
        document.getElementById('background').style.display='block';
        if (document.getElementById('product').style.display=='block') document.getElementById('product').style.display='none';
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
	if (type == 'principles') {
		if (text.style.display == 'none') {
			text.style.display = 'block';
			height = document.getElementById('popup').offsetHeight + 192;
			document.getElementById('popup').style.height = height + 'px';
			/* document.getElementById('popup').style.height = '850px';*/
			/*document.getElementById('popup').className = document.getElementById('about').offsetheight;*/
			height = document.getElementById('about').offsetHeight + 192;
			document.getElementById('about').style.height = height + 'px';
			/*if (document.getElementById('about').offsetHeight < '1010') document.getElementById('about').style.height='1010px';*/
		} else {
			text.style.display = 'none';
			height = document.getElementById('popup').offsetHeight - 192;
			document.getElementById('popup').style.height = height + 'px';
			/* document.getElementById('popup').style.height='658px';*/
			height = document.getElementById('about').offsetHeight - 192;
			document.getElementById('about').style.height = height + 'px';
			
		}
	}
};

document.onclick = function() {
	if (document.getElementById('background').style.display=='block' && document.getElementById('social').style.display == 'block') {
		document.getElementById('social').style.display = 'none';
		document.getElementById('background').style.display='none';
		document.getElementById('blur-div').className='';
	};
	if (document.getElementById('background').style.display=='block' && document.getElementById('delivery').style.display == 'block') {
		document.getElementById('delivery').style.display = 'none';
		document.getElementById('background').style.display='none';
		document.getElementById('blur-div').className='';
	}
};
