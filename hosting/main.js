var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	WeDeploy
		.url('http://email.emaildemo.wedeploy.me/emails')
		.form('from', form.from.value)
		.form('to', form.to.value)
		.form('subject', form.subject.value)
		.post()
		.then(function(response) {
			form.reset();

			alert('Email sent! Wait a little bit until it arrives :)')

			console.info('Email ID:', response.body());
		})
		.catch(function(error) {
			console.error(error);
		});
});