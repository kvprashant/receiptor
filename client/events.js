Template.form.events ({
	'click #send': function(evt) {
		var name = $('#yourName').val();
		var email = $('#yourEmail').val();
		var number = $('#howMany').val();
		
		if (!name) {
			console.log('Name missing');
			evt.preventDefault();
		}
		
		if (!email) {
			console.log('Email missing');
			evt.preventDefault();
		}
		
		if (!number) {
			console.log('Number missing');
			evt.preventDefault();
		}
		$('#addReceipt')[0].reset();
		event.preventDefault();

		Meteor.call('sendReceipt', name, email, number);
	}
})