const roleTableData = [
	{
		id: 131,
		roleName: 'Admin',
		permissions: [
			{ id: 191, name: 'staff' },
			{ id: 192, name: 'role-permission' },
			{ id: 193, name: 'category' },
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
		roleTableData.forEach((data) => {
			const tr = document.createElement('tr');
			const td1 = document.createElement('td');
			const td2 = document.createElement('td');
			const td3 = document.createElement('td');
			const td4 = document.createElement('td');
			const td5 = document.createElement('td');
			const td6 = document.createElement('td');
			const td7 = document.createElement('td');
			const td8 = document.createElement('td');

			td1.innerText = data.roleName;
			td2.innerHTML = data.permissions
				? `<button class='btn btn-link'>View permissions</button>`
				: 'No Permissions';

			td3.innerHTML = `${data.selectPermission ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-times text-danger"></i>'}`;
			td3.style.justifyItems = 'center';
			td4.innerHTML = `${data.insertPermission ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-times text-danger"></i>'}`;
			td4.style.justifyItems = 'center';
			td5.innerHTML = `${data.updatePermission ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-times text-danger"></i>'}`;
			td5.style.justifyItems = 'center';
			td6.innerHTML = `${data.deletePermission ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-times text-danger"></i>'}`;
			td6.style.justifyItems = 'center';

			td7.innerText = data.status;
			td8.innerHTML = window.modifyColButtonsHtml;

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
			tr.appendChild(td8);

			studentTableBodyElement.appendChild(tr);
		});
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
				
				// load the role module permission modal
				await window.setModal(
					'rolePermissionPage/roleModulePermissionModal',
					roleModulePermissionModalFormElement,
				);

				// fix aria hidden modal issue by inactive any active,focus element so aria-hidden='true' not effect
				window.fixAriaHiddenModalIssus('roleModulePermissionModal');

				const permissionModulesElement =
					document.querySelector('#permissionModules');

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
