// ================================================================================
// make offcanvas backdrop fade inactive when screen size width >= 992
// ================================================================================

const offcanvasElement = document.getElementById('offcanvasNavbar');

window.addEventListener('resize', () => {
	if (window.innerWidth >= 992) {
		const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);

		if (offcanvas) {
			offcanvas.hide();
		}
	}
});

// ================================================================================
// make offcanvas backdrop fade inactive when screen size width >= 992
// ================================================================================

// ================================================================================
// common function for create list of elements
// ================================================================================
const appendChildForElement = (
	insertPosition = 'beforeend',
	createElement = '',
	createElementClass = '',
	createElementId = '',
	wrapperElement = 'div',
	wrapperElementAttributes = '',
	wrapperElementClasses = '',
	innerHTML = '',
) => {
	const element = document.createElement(createElement);
	createElementClass != '' ? (element.className = `${createElementClass}`) : '';
	createElementId != '' ? (element.id = `${createElementId}`) : '';

	element.insertAdjacentHTML(
		insertPosition,
		`<${wrapperElement}	${wrapperElementAttributes}
            class="${wrapperElementClasses}">
            ${innerHTML}
        </${wrapperElement}>`,
	);

	return element;
};
// ================================================================================
// common function for create list of elements
// ================================================================================

// ================================================================================
// create navigation items on both side bar and offcanvas
// ================================================================================

const sidebarNavigationULElement = document.querySelector(
	'#sidebar-navigation',
);
const offcanvasNavigationULElement = document.querySelector(
	'#offcanvas-navigation',
);

const sidebarNavigationItems = [
	{ itemName: 'Dashboard', itemIcon: 'fa-gauge-high' },
	{ itemName: 'Staff', itemIcon: 'fa-user-group' },
	{ itemName: 'Role & Permission', itemIcon: 'fa-shield-halved' },
	{ itemName: 'Packages', itemIcon: 'fa-layer-group' },
	{ itemName: 'Students', itemIcon: 'fa-users' },
	{ itemName: 'Instructors', itemIcon: 'fa-taxi' },
	{ itemName: 'Reports & Summary', itemIcon: 'fa-chart-simple' },
	{ itemName: 'Certificates', itemIcon: 'fa-award' },
	{ itemName: 'Announcement', itemIcon: 'fa-bullhorn' },
];

sidebarNavigationItems.forEach((item) => {
	const page = item.itemName
		.toLowerCase()
		.replaceAll(' ', '')
		.replaceAll('&', '-');

	// create desktop navigation links
	const sidebarNavigationItem = appendChildForElement(
		'beforeend',
		'li',
		'',
		``,
		'button',
		`type='button' id=${page}`,
		`w-100 py-2 px-2 d-flex gap-2 rounded nav-link-btn mt-3 text-white-50 btn border-0 fw-bold`,
		`<i class="fa-solid my-auto mx-0 ${item.itemIcon}"></i>             
            <span>${item.itemName}</span>`,
	);

	// create mobile navigation links
	const offcanvasNavigationItem = appendChildForElement(
		'beforeend',
		'li',
		'',
		``,
		'button',
		`type='button' id=${page}`,
		`w-100 py-2 px-2 d-flex gap-2 rounded nav-link-btn mt-3 text-white-50 btn border-0 fw-bold ${item.status ?? ''}`,
		`<i class="fa-solid my-auto mx-0 ${item.itemIcon}"></i>             
            <span>${item.itemName}</span>`,
	);

	// desktop onclick navigation link
	sidebarNavigationItem.addEventListener('click', () => {
		loadPage(page);
	});

	// mobile onClick navigation link
	offcanvasNavigationItem.addEventListener('click', () => {
		loadPage(page);
	});

	sidebarNavigationULElement.appendChild(sidebarNavigationItem);
	offcanvasNavigationULElement.appendChild(offcanvasNavigationItem);
});

// ================================================================================
// create navigation items on both side bar and offcanvas
// ================================================================================

window.notify = [
	{
		id: 1,
		title: 'New Student Enrolled',
		description:
			'lorem By default, flex items have a min-width: auto, meaning they refuse to shrink smaller than the minimum size required by their inner content (such as a long word, a URL, or a flex child with a fixed width).',
		date: new Date(),
		status: 'info',
		read: false,
	},
	{
		id: 2,
		title: 'New Student Payment issue',
		description:
			'lorem By default, flex items have a min-width: auto, meaning they refuse to shrink smaller than the minimum size required by their inner content (such as a long word, a URL, or a flex child with a fixed width).',
		date: new Date(),
		status: 'danger',
		read: false,
	},
	{
		id: 3,
		title: 'New Student Enrolled',
		description:
			'lorem By default, flex items have a min-width: auto, meaning they refuse to shrink smaller than the minimum size required by their inner content (such as a long word, a URL, or a flex child with a fixed width).',
		date: new Date(),
		status: 'warning',
		read: false,
	},
	{
		id: 4,
		title: 'New Student Enrolled',
		description:
			'lorem By default, flex items have a min-width: auto, meaning they refuse to shrink smaller than the minimum size required by their inner content (such as a long word, a URL, or a flex child with a fixed width).',
		date: new Date(),
		status: 'primary',
		read: false,
	},
];

// ================================================================================
// notification show
// ================================================================================

const notifyULElement = document.querySelector('#notify-list');
const openNotificationElement = document.querySelector('#open-notification');
const notificationCountElement = document.querySelector('#notification-count');
const openNotificationButtonElement = document.querySelector(
	'#open-notification-button',
);
const faBellIcon = document.querySelector('#fa-bell-icon');

// open notification button redirect to notification.html Page
openNotificationButtonElement.addEventListener('click', () => {
	loadPage('notification');
});

// set notification count
if (notify.length <= 0) {
	notificationCountElement.innerText = '';
	notificationCountElement.classList.remove('bg-danger');
	faBellIcon.classList.remove('fa-swing');
	notifyULElement.insertAdjacentHTML(
		'afterbegin',
		`
        <li class='dropdown-item'>
            <div>
                <div class='card-body'>
                    <p class='text-center'>No Notifications Yet</p>
                </div>
            </div>
        </li>
    `,
	);
} else {
	notificationCountElement.innerText = String(notify.length).padStart(2, '0');

	notificationCountElement.classList.add('bg-danger');
	faBellIcon.classList.add('fa-swing');

	notify.forEach((notification) => {
		const element = appendChildForElement(
			'beforeend',
			'li',
			'dropdown-item',
			`${notification.id}`,
			'div',
			'',
			// `data-bs-toggle="modal" data-bs-target="#notificationModal"`, // this will cause bug on backdrop
			`card border-${notification.status}  btn p-0`,
			`<div class="card-body">
                    <div
                        class="d-flex justify-content-between"
                    >
                        <p class="card-title text-wrap text-truncate">
                          ${notification.title}
                        </p>
                        <small
                            class="bg-${notification.status}-subtle px-2 py-1 text-black rounded-pill "
                            style="font-size: 10px;height: fit-content;"
                        >
                            ${notification.date.toDateString()}
                        </small>
                        </div>
                        <p class="card-text text-break text-truncate fw-lighter">
                            ${notification.description}
                        </p>
                </div>`,
		);

		// onClick listener when click notification user direct to notification function
		element.addEventListener('click', () => {
			window.openNotificationModal(notification.id);
			// loadPage('notification'); // this will user direct to the notification.html page
		});

		// open notification button always set last
		notifyULElement.insertBefore(element, openNotificationElement);
	});
}

// ================================================================================
// notification show
// ================================================================================

// ================================================================================
// FIX for aria-hidden warning => right before modal hide , blur any active element
// ================================================================================

window.fixAriaHiddenModalIssus = (modalName = '') => {
	const notificationModalElement = document.querySelector(`#${modalName}`);
	if (notificationModalElement) {
		notificationModalElement.addEventListener('hide.bs.modal', () => {
			if (document.activeElement) {
				document.activeElement.blur(); // this will blur any active element is modal
			}
		});
	}
};

// ================================================================================
// FIX for aria-hidden warning => right before modal hide , blur any active element
// ================================================================================

// ================================================================================
// global notification modal handler 
// ================================================================================

window.openNotificationModal = (notificationId) => {
	// use global notify or  if notify is not available set as []
	const notifications = window.notify || [];

	if (notificationId != null && notificationId <= notify.length) {
		const item = notifications[notificationId - 1];

		// set title to modal
		document.querySelector('#notificationModalTitle').textContent = item.title;

		//set description to the modal
		document.querySelector('#notificationModalDescription').textContent =
			item.description;

		// caught modal date element
		const notificationModalDateElement = document.querySelector(
			'#notificationModalDate',
		);

		// set date to -> week Month day year (Mon Oct 03 2026)
		notificationModalDateElement.textContent = new Date(
			item.date,
		).toDateString();

		// add date status color
		// notificationModalDateElement.classList.add(`bg-${item.status}-subtle`)

		const statusElement = document.querySelector('#notificationModalStatus');

		if (item.status == 'danger') {
			statusElement.textContent = 'ATTENTION';
		} else {
			statusElement.textContent = item.status.toUpperCase();
		}
		// statusElement.className = `bg-${item.status}-subtle`;

		const modalBodyElement = document.querySelector('#modal-body');
		modalBodyElement.className = `modal-body bg-${item.status}-subtle`;

		// Open modal
		// just adding css class how to modal not work
		const notificationModalElement =
			document.querySelector('#notificationModal');

		const modal = new bootstrap.Modal(notificationModalElement);

		modal.show();
	}
};

// to prevent aria-hidden issus with active element that active even after hide the modal
fixAriaHiddenModalIssus('notificationModal');

// ================================================================================
// global notification modal handler 
// ================================================================================


// ================================================================================
// Table Modification buttons group
// ================================================================================


window.modifyColButtonsHtml = `
	<div class="dropdown dropstart">
		<a
			href="#"
			class="btn btn-sm"
			role="button"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		>
			<i class="fa-solid fa-gear text-black"></i>
		</a>
		<div class="dropdown-menu p-2">
			<div class="btn-group">
				<button
					type="button"
					class="btn btn-outline-info fw-medium btn-sm"
					id="tableModificationViewButton"
				>
					View
				</button>
				<button
					type="button"
					class="btn btn-outline-warning fw-medium btn-sm"
					id="tableModificationUpdateButton"
				>
					Update
				</button>
				<button
					type="button"
					class="btn btn-outline-danger fw-medium btn-sm"
					id="tableModificationDeleteButton"
				>
					Delete
				</button>
			</div>
		</div>
	</div>
`;

// ================================================================================
// Table Modification buttons group
// ================================================================================