# detect-desktop-browser

Plugin Name  : CSS Browser Detector
Description  : Detect Desktop Browser
Author       : Nghia Nguyen
Contact      : fb.com/nghianguyen1989



HISTORY :
Version 1.0 (Jan 2017) : 
- detect Microsoft Edge 
- detect IE browser : IE7, IE8, IE9, IE10, IE11
- detect Safari browser
- detect Chrome browser
- detect Firefox browser
- detect Opera browser
- detect browser engine (webkit/gecko)

HOW TO USE : 
1. Add script
   <script type="text/javascript" src="detectbrowser.min.js" charset="UTF-8"></script>

2. Add prefix before class/id name CSS
    Internet Explorer
    |__IE7       :   .ie7 cssname{...}
    |__IE8       :   .ie8 cssname{...}
    |__IE9       :   .ie9 cssname{...}
    |__IE10      :   .ie10 cssname{...}
    |__IE11      :   .ie11 cssname{...}
    |__All IE    :   .ie cssname{...}

    Microsoft Edge
    |__.edge cssname{...}

    Safari
    |__.safari cssname{...}

    Google Chrome
    |__.chrome cssname{...}

    Mozilla Firefox
    |__.firefox cssname{...}

    Opera
    |__.opera cssname{...}

    Browser Engine
    |__.gecko cssname{...}
    |__.webkit cssname{...}