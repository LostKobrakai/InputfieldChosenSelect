
var initChosen = function() {
	var $t = $(this); 
    var tid = $t.attr('id');
    var oid = tid.split('_repeater')[0];

	if(typeof config === 'undefined') {
		var options = {};
	} else {
		var options = config[oid]; 
	}
    if($t.not("[required]")) $t.children().first().text("");

	$t.chosen(options); 
};

$(document).ready(function() {

	$(".InputfieldChosenSelect select:not([multiple])").each(initChosen);

	$(document).on('reloaded opened repeateradd wiretabclick', '.InputfieldPage', function() {
		$(this).find(".InputfieldChosenSelect select:not([multiple])").each(initChosen);
	});

});
