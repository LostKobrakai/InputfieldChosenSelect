$(document).ready(function() {
	$(".InputfieldChosenSelect select:not([multiple])").each(function() {
		var $t = $(this); 

		if(typeof config === 'undefined') {
			var options = {};
		} else {
			var options = config[$t.attr('id')]; 
		}
    if($t.not("[required]")) $t.children().first().text("");
		$t.chosen(options); 
	});

    $(document).on('reloaded', '.InputfieldChosenSelect, .InputfieldPage', function() {
        var $t = $(this);
        if($t.hasClass('InputfieldPage')) $t = $t.find('.InputfieldChosenSelect');
        if(!$t.length) return;
        $(this).find("select").each(function() {
            if(typeof config === 'undefined') {
                var options = {};
            } else {
                var options = config[$t.attr('id')];
            }
            if($t.not("[required]")) $t.children().first().text("");
            $t.chosen(options);
        });
    });
}); 
