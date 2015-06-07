// define dependent files
define(['jquery', 'utilities/Events', 'utilities/Broadcast'], 
    function($, EVENTS, BROADCAST) {

    'use strict';

    var elContent; // reference to main content

    function init () {

        /*
            Store a reference the main content div
            This is where everything goes
        */
        elContent = $('#content');
    }

    return {
        
        init : init
    };

});