requirejs.config ({

    baseUrl : 'app', // base url is directory of the actual app
    paths : {
        
        utilities : '../utilities',
        jquery : '../libs/jquery-2.1.4.min'
    }
});

require(['Main'], function(Main) {

    Main.init();
});