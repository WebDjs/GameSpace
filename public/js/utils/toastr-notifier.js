const notifier = (() => {
	class Notifier {

		success(msg) {
			$(body).a;
			toastr.success(msg, 'SUCCESS', { timeOut: 3000 });
		}

		error(msg) {
			toastr.error(msg, 'ERROR', { timeOut: 4000 });
		}

		warning(msg) {
			toastr.warning(msg, 'WARNING', { timeOut: 4000 });
		}
	}

	const notifier = new Notifier();
	return notifier
})();

export {
	notifier
}
