requirejs.config ({

    baseUrl : '../src/app', // base url is directory of the actual app
    paths : {
        
        utilities : '../utilities',
        jquery : '../libs/jquery-2.2.0'
    }
});

require(['Main'], function(Main) {

    Main.init();
});