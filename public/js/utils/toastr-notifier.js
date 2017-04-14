const notifier = (() => {
	class Notifier {

		success(msg) {
		$(body).a;
			toastr.success('SUCCESS', msg, { timeOut: 3000 });
		}

		error(msg) {
			toastr.error('ERROR', msg, { timeOut: 3000 });
		}

		warning(msg) {
			toastr.warning('Warning', msg, { timeOut: 4000 });
		}
	}

	const notifier = new Notifier();
	return notifier
})();

export {
	notifier
}
