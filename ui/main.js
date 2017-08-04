var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	WeDeploy
		.email('email-boilerplateemail.wedeploy.io')
		.auth('5732bed5-1418-4b21-b524-5533f2d0bc2c')
		.from(form.from.value)
		.to(form.to.value)
		.subject(form.subject.value)
		.message('It worked!')
		.send()
		.then(function(emailId) {
			form.reset();

			alert('Email sent! Wait a little bit until it arrives :)');
			console.info('Email ID:', emailId);
		})
		.catch(function(error) {
			alert('Oops, some error has happened.');
			console.error(error);
		});
});
