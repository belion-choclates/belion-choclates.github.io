(function() {
	window.addEventListener('load', function() {
		var switchTimeout;

		function swicthImg() {
			clearTimeout(switchTimeout);
			var curSrc = imgEl.src;
			imgEl.src = imgEl.getAttribute('alt-src');
			imgEl.setAttribute('alt-src', curSrc);
			switchTimeout = setTimeout(swicthImg, 4000);
		}

		var imgEl = document.getElementById('top_image');
		// preload
		var tmpImg = new Image();
		tmpImg.src = imgEl.getAttribute('alt-src');
		
		switchTimeout = setTimeout(swicthImg, 4000);
		imgEl.addEventListener('click', swicthImg);
	});
})();