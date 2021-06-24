var dict = {
    en: {
        'Home': 'Home',
            'Miscellaneous': 'Miscellaneous',
            'Resources': 'Resources',
			'Credits': 'Credits',
			'Index by Tags': 'Index by Tags',
			'Warning': 'Nani'
    },
    ja: {
        'Hallo': 'Bonjour',
            'Goodbye': 'Au revoir',
            'castle': 'chateau'
			'Warning': 'なに'
    },
}

var lang = document.getElementsByTagName('html')[0].getAttribute('lang');;
//var tmpl = '<div>{{Goodbye}}, {{castle}}</div>';

function brute(){
	var str = document.getElementsByClassName
}
function translate(dict, lang, word) {
    return dict[lang][word];
}

function applyTemplate(tmpl, lang) {
    var regex = /\{\{([a-zA-Z])\w+\}\}/g
    return tmpl.replace(regex, function (word) {
        return translate(dict, lang, word.replace(/[\{\}]/g, ''));
    });
}

var tmpl = document.querySelector('.flexbox').textContent;
var translation  = document.querySelector('#translation');
var html = applyTemplate(tmpl, lang);
translation.insertAdjacentHTML('afterbegin', html);