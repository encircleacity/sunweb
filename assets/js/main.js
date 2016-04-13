/**
 * Customized Javascript code for Bojie's personal website.
 */

// Tabs
//$('#work_security a[href="#work_security"]').tab('show');
//$('#work_embedded a[href="#work_embedded"]').tab('show');
//$('#work_web a[href="#work_web"]').tab('show');

// Tabs enhanced collapse effects
$('.content-tabs').tabCollapse();

// initialize tab show function
$('.nav-tabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});
