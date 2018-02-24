/***
 * Plugin Name  : CSS Browser Detector
 * Description  : Detect Desktop Browser
 * Author       : Nghia Nguyen
 * Contact      : fb.com/nghianguyen1989
 * Version      : 1.0 (Jan 2017)
 ***/

function detect_browser(u) {
    var ua = u.toLowerCase(),
        isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./),
        isEdge = !!navigator.userAgent.match(/Edge/),
        isOpera = !!navigator.userAgent.match(/OPR/),
        is = function (t) {
            return ua.indexOf(t) > -1
        },
        g = 'gecko',
        w = 'webkit',
        s = 'safari',
        arrClass = [
            (!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + (!(RegExp.$1 == 1) ? RegExp.$1 : 10)) :
            isEdge ? (' edge') :
            is('gecko/') ? g + ' firefox' :
            isOpera ? ' opera' :
            is('chrome') ? w + ' chrome' :
            is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') :
            is('mozilla/') ? (isIE11 ? ('ie ie11') : g) : ''
        ];
    c = arrClass.join(' ');
    document.documentElement.className += ' ' + c;
    return c;
};
detect_browser(navigator.userAgent);