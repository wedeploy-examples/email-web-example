var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	WeDeploy
		.email('email-boilerplateemail.wedeploy.io')
		.auth('073e93d6-7dcc-4df5-9a18-9dd121b92f50')
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
