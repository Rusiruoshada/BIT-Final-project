// aria-hidden warning have to fix -> either when closing have to manually 
//happens because an element inside your modal (in this case, <button.btn btn-secondary>) still has active keyboard/browser focus, while the modal container itself has been marked with aria-hidden="true" (or is hidden).


const openNotificationModal = (notificationId) => {
	if (notificationId != null && notificationId <= notify.length) {
		// set title to modal
		document.querySelector('#notificationModalTitle').textContent =
			notify[notificationId - 1].title;

		//set description to the modal
		document.querySelector('#notificationModalDescription').textContent =
			notify[notificationId - 1].description;

		// caught modal date element
		const notificationModalDateElement = document.querySelector(
			'#notificationModalDate',
		);

		// set date to -> week Month day year (Mon Oct 03 2026)
		notificationModalDateElement.textContent = new Date(
			notify[notificationId - 1].date,
		).toDateString();

		// add date status color
		// notificationModalDateElement.classList.add(`bg-${notify[notificationId-1].status}-subtle`)

		const statusElement = document.querySelector('#notificationModalStatus');

		if (notify[notificationId - 1].status == 'danger') {
			statusElement.textContent = 'Attention'.toUpperCase();
		} else {
			statusElement.textContent =
				notify[notificationId - 1].status.toUpperCase();
		}
		// statusElement.className = `bg-${notify[notificationId-1].status}-subtle`;

		const modalBodyElement = document.querySelector('#modal-body');
		modalBodyElement.classList.add(
			`bg-${notify[notificationId - 1].status}-subtle`,
		);

		// Open modal
		// just adding css class how to modal not work
		const notificationModalElement =
			document.querySelector('#notificationModal');

		const modal = new bootstrap.Modal(notificationModalElement);

		modal.show();
	}
};

const notificationList = document.querySelector('#notification-list');

const notificationCount = document.querySelector('#notification-count-in-page');

notificationCount.textContent = `${notify.length} Notifications`;

if (notify.length > 0) {
	notify.forEach((notification) => {
		const cardBodyElement = document.createElement('div');

		cardBodyElement.className = `card border-${notification.status} shadow-sm`;

		cardBodyElement.innerHTML = `
        <div class="card-body btn" id='notification-card-in-page-${notification.id}'>

            <!-- Header -->
            <div
                class="d-flex justify-content-between align-items-start gap-3 mb-2"
            >

                <div class="min-w-0">
                    <h5
                        class="card-title mb-0 text-wrap text-truncate"
                        title="${notification.title}"
                    >
                        ${notification.title}
                    </h5>
                </div>

                <div class="d-flex align-items-center gap-2 flex-shrink-0">

                    <small class="text-muted ">
                        ${new Date(notification.date).toDateString()}
                    </small>

                </div>

            </div>

            <!-- Description -->
            <p
                class="card-text text-start text-muted text-wrap  text-truncate mb-0"
                title="${notification.description}"
            >
                ${notification.description}
            </p>

        </div>
    `;

		cardBodyElement.addEventListener('click', () => {
			openNotificationModal(notification.id);
		});

		notificationList.appendChild(cardBodyElement);
	});
}

