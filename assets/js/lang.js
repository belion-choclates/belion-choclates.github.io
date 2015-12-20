(function() {
	if ('localStorage' in window) {
		if (!window.localStorage.getItem('visited')) {
			window.localStorage.setItem('visited', 1);
			var curLang = (location.pathname.indexOf('/fr/') !== -1) ? 'fr' : 'nl';
			var userLang;
			if (navigator.language.indexOf('fr') !== -1) {
				userLang = 'fr';
			}
			else if (navigator.language.indexOf('nl') !== -1) {
				userLang = 'nl';
			}
			else if ('languages' in navigator) {
				for (var i = 0, n = navigator.languages.length; i < n; i++) {
					if (navigator.languages[i].indexOf('fr') !== -1) {
						userLang = 'fr';
						break;
					}
					else if (navigator.languages[i].indexOf('nl') !== -1) {
						userLang = 'nl';
						break;
					}
				}
			}
			if (userLang !== curLang) {
				if (curLang === 'fr') {
					window.location.replace(location.pathname.replace('/fr/', '/'));
				}
				else {
					window.location.replace('/fr' + location.pathname);	
				}
			}
		}
	}
})();