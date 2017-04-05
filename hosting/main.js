var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	WeDeploy
		.url('http://email.boilerplate-email.wedeploy.io/emails')
		.auth('49488085-1ee3-4c33-888f-0a1e37d2694e')
		.form('from', form.from.value)
		.form('to', form.to.value)
		.form('subject', form.subject.value)
		.form('message', form.subject.value)
		.post()
		.then(function(response) {
			if (response.succeeded()) {
				form.reset();

				alert('Email sent! Wait a little bit until it arrives :)');

				console.info('Email ID:', response.body());
			}
			else {
				alert('Email was not sent');
			}
		})
		.catch(function(error) {
			alert('Oops, some error has happened.');
		});
});
