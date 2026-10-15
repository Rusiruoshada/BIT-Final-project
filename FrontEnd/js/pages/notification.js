export const init = () => {

	// use global notify or fallback if notify is available
	const notifications = window.notify || [];

	const notificationList = document.querySelector('#notification-list');

	const notificationCount = document.querySelector(
		'#notification-count-in-page',
	);

	notificationCount.textContent = `${notifications.length} Notifications`;

	if (notificationList && notifications.length > 0) {

		//clear previous list when re-initialized
		notificationList.innerHTML = '';

		notifications.forEach((notification) => {
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
};
