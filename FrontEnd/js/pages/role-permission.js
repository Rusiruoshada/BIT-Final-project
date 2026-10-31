const roleTableData = [
	{
		id: 131,
		roleName: 'Admin',
		permissions: [
			{ id: 191, name: 'staff' },
			{ id: 192, name: 'role-permission' },
			{ id: 193, name: 'category' },
			{ id: 193, name: 'student' },
			{ id: 193, name: 'instructor' },
			{ id: 193, name: 'enrolment' },
			{ id: 193, name: 'packages' },
			{ id: 193, name: 'payment' },
			{ id: 193, name: 'report' },
			{ id: 193, name: 'certificate' },
			{ id: 193, name: 'event' },
		],
		selectPermission: true,
		insertPermission: true,
		updatePermission: true,
		deletePermission: true,
		status: 'Active',
	},
	{
		id: 132,
		roleName: 'Instructor',
		permissions: [
			{ id: 191, name: 'staff' },
			{ id: 192, name: 'role-permission' },
			{ id: 193, name: 'category' },
		],
		selectPermission: true,
		insertPermission: false,
		updatePermission: false,
		deletePermission: false,
		status: 'Active',
	},
	{
		id: 131,
		roleName: 'Receptionist',
		permissions: [
			{ id: 191, name: 'staff' },
			{ id: 192, name: 'role-permission' },
			{ id: 193, name: 'category' },
		],
		selectPermission: true,
		insertPermission: true,
		updatePermission: true,
		deletePermission: false,
		status: 'Active',
	},
	{
		id: 131,
		roleName: 'Instructor',
		permissions: [
			{ id: 191, name: 'staff' },
			{ id: 192, name: 'role-permission' },
			{ id: 193, name: 'category' },
		],
		selectPermission: true,
		insertPermission: false,
		updatePermission: false,
		deletePermission: false,
		status: 'In-Active',
	},
];

const permissionModules = [
	{ id: 1, name: 'staff' },
	{ id: 2, name: 'role-permission' },
	{ id: 3, name: 'category' },
	{ id: 4, name: 'student' },
	{ id: 5, name: 'instructor' },
	{ id: 6, name: 'enrolment' },
	{ id: 7, name: 'packages' },
	{ id: 8, name: 'payment' },
	{ id: 9, name: 'certificate' },
	{ id: 10, name: 'notice' },
	{ id: 11, name: 'event' },
	{ id: 12, name: 'report' },
	{ id: 13, name: 'general-setting' },
	{ id: 14, name: 'income-expense' },
];

// define function for load module permission to modal
const getPermissions = (dataOb) => {
	const linkView = `<button class="btn btn-link viewPermissionsModuleForTableRecord" id="viewPermissionsModuleForTableRecord${dataOb.roleName}" data-role-name="${dataOb.roleName}">View Permissions</button>`;
	return linkView;
};

// icons for table select,insert,update,delete cols show
const trueIcon = '<i class="fa-solid fa-check text-success"></i>';
const falseIcon = '<i class="fa-solid fa-close text-danger"></i>';

// show the icon for selectPermission
const getSelectPermissionStatus = (dataOb) => {
	return dataOb.selectPermission ? trueIcon : falseIcon;
};

// show the icon for insertPermission
const getInsertPermissionStatus = (dataOb) => {
	return dataOb.insertPermission ? trueIcon : falseIcon;
};

// show the icon for updatePermission
const getUpdatePermissionStatus = (dataOb) => {
	return dataOb.updatePermission ? trueIcon : falseIcon;
};

// show the icon for deletePermission
const getDeletePermissionStatus = (dataOb) => {
	return dataOb.deletePermission ? trueIcon : falseIcon;
};

// define function for show bootstrap badge for active and inactive
const getStatusData = (dataOb) => {
	return `<div class='badge text-black fw-normal ${dataOb.status == 'Active' ? 'bg-success-subtle' : 'bg-secondary-subtle'}'><i class='fa-solid fa-circle shadow-sm  ${dataOb.status == 'Active' ? 'text-success' : 'text-secondary'}' style='font-size:6px; vertical-align: middle'></i> ${dataOb.status}</div>`;
};

// define delete table record function
const deleteRecord = (dataOb) => {
	console.log(dataOb);
};

// define delete table record function
const refillDataToModal = (dataOb) => {
	console.log(dataOb);
};

// define delete table record function
const viewTableRecordData = (dataOb) => {
	console.log(dataOb);
};

// module permission modal back and save button identify
const buttonList = [
	document.querySelector('#roleModulePermissionModalBackButton'),
	document.querySelector('#roleModulePermissionModalSaveButton'),
	document.querySelector('#roleModulePermissionModalCloseButton'),
];

// define function for modify buttons in modal. adding or remove attributes
const modifyAttributes = (
	elements,
	checkAttributes = [],
	removeAttributes = [],
	addAttributes,
	onUpdate,
) => {
	// check if any element has any of the attributes to look for
	// .some() return true if there any list element have a attribute
	const hasAttribute = elements.some((element) => {
		return checkAttributes.some((attribute) => {
			return element.hasAttribute(attribute); // if use {} then explicitly have use "return"
		});
	});

	if (hasAttribute) {
		elements.forEach((element) => {
			// remove listed attribute from the element
			removeAttributes.forEach((attribute) => {
				element.removeAttribute(attribute);
			});
		});
	}

	elements.forEach((element) => {
		// add any listed attribute to element
		if (addAttributes) {
			addAttributes.forEach((attribute) => {
				// Object.entires(obj) will output obj key:value as array => {key:val} => ['key','val']
				for (const [key, value] of Object.entries(attribute)) {
					element.setAttribute(key, value);
				}
			});
		}
	});

	// optional callback for extra custom changes if there specify for specific element
	if (typeof onUpdate === 'function') {
		onUpdate();
	}
};

export const init = () => {
	// fill table data
	const studentTableBodyElement = document.querySelector(
		'#roleDetailTableBody',
	);

	// if no data then show "no data to show" msg
	if (!roleTableData || roleTableData.length === 0) {
		tableBodyPackageDetailElement.innerHTML = `
			<tr>
				<td colspan='8' class='text-center'>No Data to Show</td>
			</tr>
		`;
	} else {
		// clear existing data 1st
		studentTableBodyElement.innerHTML = '';

		// fill the table
		// displayPropertyList use to define table data, datatypes
		const displayPropertyList = [
			{ dataType: String, propertyName: 'roleName' },
			{ dataType: 'function', propertyName: getPermissions },
			{ dataType: 'function', propertyName: getSelectPermissionStatus },
			{ dataType: 'function', propertyName: getInsertPermissionStatus },
			{ dataType: 'function', propertyName: getUpdatePermissionStatus },
			{ dataType: 'function', propertyName: getDeletePermissionStatus },
			{ dataType: 'function', propertyName: getStatusData },
		];

		// define table modify buttons name and color
		const studentTableModifyButtons = [
			{ name: 'Edit', color: 'secondary' },
			{ name: 'View', color: 'info' },
			{ name: 'Delete', color: 'danger' },
		];

		// call fillDataIntoTable() common.js function to fill the table
		fillDataIntoTable(
			studentTableBodyElement,
			roleTableData,
			displayPropertyList,
			true,
			studentTableModifyButtons,
			deleteRecord,
			refillDataToModal,
			viewTableRecordData,
		);
	}

	// set global event delegation for all modal triggers
	// this will help to open modal that use async (setModal). after setModal() render html to DOM then execute other lines
	document.addEventListener('click', async (event) => {
		// trigger open add new role modal form
		if (event.target.closest('#addNewRoleModalOpenButton')) {
			const addNewRoleModalFormElement = document.querySelector(
				'#addNewRoleModalForm',
			);
			//wait for the setModal to finish render modal
			window.setModal(
				'rolePermissionPage/addNewRoleModalForm',
				addNewRoleModalFormElement,
			);
			// fix aria hidden modal issue by inactive any active,focus element so aria-hidden='true' not effect
			window.fixAriaHiddenModalIssus('addNewRoleModal');
		}

		// trigger : open module permission modal form
		if (event.target.closest('#roleModulePermissionModalOpenButton')) {
			const roleModulePermissionModalFormElement = document.querySelector(
				'#roleModulePermissionModalForm',
			);
			if (roleModulePermissionModalFormElement) {
				// use to set display inline block to save button on module permission modal
				const viewPermissionModalSaveButtonRemove = () => {
					const roleModulePermissionModalSaveButtonElement =
						document.querySelector('#roleModulePermissionModalSaveButton');
					if (roleModulePermissionModalSaveButtonElement) {
						roleModulePermissionModalSaveButtonElement.style.display =
							'inline-block';
					}
				};

				// call for add attribute that try to back and save and close
				// default will go to add role modal but view permission btn will remove target and toggle attribute
				modifyAttributes(
					buttonList,
					['data-bs-toggle', 'data-bs-target'], // attributes to check
					['data-bs-dismiss'], // attributes to remove
					[
						{ 'data-bs-toggle': 'modal' },
						{ 'data-bs-target': '#addNewRoleModal' },
					], // attributes to add
					viewPermissionModalSaveButtonRemove,
				);

				// load the role module permission modal
				await window.setModal(
					'rolePermissionPage/roleModulePermissionModal',
					roleModulePermissionModalFormElement,
				);

				// fix aria hidden modal issue by inactive any active,focus element so aria-hidden='true' not effect
				window.fixAriaHiddenModalIssus('roleModulePermissionModal');

				// after load the roleModulePermissionModal catch permissionModulesElement
				const permissionModulesElement =
					document.querySelector('#permissionModules');

				// fill permissionModules data to modal
				if (permissionModulesElement) {
					permissionModulesElement.innerHTML = '';

					permissionModules.forEach((module) => {
						permissionModulesElement.insertAdjacentHTML(
							'beforeend',
							`
							<li class="mb-2" >
								<div class="form-check form-check-inline">
									   <input type="checkbox" name="${module.name}Permission" id="${module.name}Permission" class="form-check-input"/>
									<label for="${module.name}Permission" class="form-check-label">${module.name}</label>
								</div>
								</li>	
							`,
						);
					});
				}
			}
		}

		// identify the viewPermissionsModuleForTableRecordElement
		const viewPermissionsModuleForTableRecordElement = event.target.closest(
			`.viewPermissionsModuleForTableRecord`,
		);

		if (viewPermissionsModuleForTableRecordElement) {
			
			// identify the row and get the data from roleTableData
			const selectRowRoleName =
			viewPermissionsModuleForTableRecordElement.getAttribute(
				'data-role-name',
			);
			
			const currentRowData = roleTableData.find((item) => {
				return item.roleName == selectRowRoleName;
			});
			
			if (!currentRowData) {
				return;
			}

			// open the modal
			const viewPermissionsModuleForTableRecord = document.querySelector(
				'#roleModulePermissionModal',
			);
			const modal = new bootstrap.Modal(viewPermissionsModuleForTableRecord);
			modal.show();

			// use to set display none to save button on module permission modal
			const viewPermissionModalSaveButtonRemove = () => {
				const roleModulePermissionModalSaveButtonElement =
					document.querySelector('#roleModulePermissionModalSaveButton');
				if (roleModulePermissionModalSaveButtonElement) {
					roleModulePermissionModalSaveButtonElement.style.display = 'none';
				}
			};
			// call for remove attribute that try to back and save and close and add dismiss on them
			// default will go to add role modal
			modifyAttributes(
				buttonList,
				['data-bs-toggle', 'data-bs-target'], // attributes to check
				['data-bs-toggle', 'data-bs-target'], // attributes to remove
				[{ 'data-bs-dismiss': 'modal' }], // attributes to add
				viewPermissionModalSaveButtonRemove,
			);

			// identify modal body for inject data
			const roleModulePermissionModalFormElement = document.querySelector(
				'#roleModulePermissionModalForm',
			);

			if (roleModulePermissionModalFormElement) {
				// load the role module permission modal
				await window.setModal(
					'rolePermissionPage/roleModulePermissionModal',
					roleModulePermissionModalFormElement,
				);

				// fix aria hidden modal issue by inactive any active,focus element so aria-hidden='true' not effect
				window.fixAriaHiddenModalIssus('roleModulePermissionModal');

				// after load the roleModulePermissionModal catch permissionModulesElement
				const permissionModulesElement =
					document.querySelector('#permissionModules');

				// fill permissionModules data to modal
				if (permissionModulesElement) {
					permissionModulesElement.innerHTML = '';
					// get modules that already permissions gave to that role
					const allowedPermissionNames = currentRowData.permissions.map(data => data.name);

					permissionModules.forEach((module) => {
						// check only allowed permissions is there
						const isAllowedPermission = allowedPermissionNames.includes(module.name);

						permissionModulesElement.insertAdjacentHTML(
							'beforeend',
							`
								<li class="mb-2" >
									<div class="form-check form-check-inline">
										   <input type="checkbox" name="${module.name}Permission" id="${module.name}Permission" class="form-check-input" ${isAllowedPermission? "checked disabled":"disabled"} />
										<label for="${module.name}Permission" class="form-check-label">${module.name}</label>
									</div>
									</li>	
								`,
						);
					});
				}
			}
		}
	});

	// load addNewRoleModalForm to modal
	// const addNewRoleModalOpenButtonElement = document.querySelector(
	// 	'#addNewRoleModalOpenButton',
	// );

	// use async for await until setModal load the modal content to the roleModal
	// addNewRoleModalOpenButtonElement.addEventListener('click', () => {
	// 	const addNewRoleModalFormElement = document.querySelector(
	// 		'#addNewRoleModalForm',
	// 	);
	// 	//wait for the setModal to finish render modal
	// 	window.setModal(
	// 		'rolePermissionPage/addNewRoleModalForm',
	// 		addNewRoleModalFormElement,
	// 	);
	// 	// fix aria hidden modal issue by inactive any active,focus element so aria-hidden='true' not effect
	// 	window.fixAriaHiddenModalIssus('addNewRoleModal');
	// });

	// load permission modules to roleModulePermissionModal after the setModal rendering other wise this line be null
	// const roleModulePermissionModalOpenButtonElement = document.querySelector(
	// 	'#roleModulePermissionModalOpenButton',
	// );
	// if (roleModulePermissionModalOpenButtonElement) {
	// 	roleModulePermissionModalOpenButtonElement.addEventListener(
	// 		'click',
	// 		async () => {
	// 			const roleModulePermissionModalFormElement = document.querySelector(
	// 				'#roleModulePermissionModalForm',
	// 			);

	// 			// load the role module permission modal
	// 			await window.setModal(
	// 				'rolePermissionPage/roleModulePermissionModal',
	// 				roleModulePermissionModalFormElement,
	// 			);

	// 			// fix aria hidden modal issue by inactive any active,focus element so aria-hidden='true' not effect
	// 			window.fixAriaHiddenModalIssus('roleModulePermissionModal');

	// 			const permissionModulesElement =
	// 				document.querySelector('#permissionModules');

	// 			permissionModules.forEach((module) => {
	// 				permissionModulesElement.insertAdjacentHTML(
	// 					'beforeend',
	// 					`
	// 					<li class="mb-2" >
	// 						<div class="form-check form-check-inline">
	// 							   <input type="checkbox" name="${module.name}" id="${module.name}" class="form-check-input"/>
	// 							<label for="${module.name}" class="form-check-label">${module.name}</label>
	// 						</div>
	// 						</li>
	// 					`,
	// 				);
	// 			});
	// 		},
	// 	);
	// }
};
