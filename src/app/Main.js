// define dependent files
define(['jquery', 'utilities/Events', 'utilities/Broadcast'], 
    function($, EVENTS, BROADCAST) {

    'use strict';

    var MODULE = 'Main',

        elContent; // reference to main content

    function init () {

        console.trace(MODULE + ':init');

        /*
            Store a reference the main content div
            This is where everything goes
        */
        elContent = $('#content');

        elContent.text('Hello App');
    }

    return {
        
        init : init
    };

});