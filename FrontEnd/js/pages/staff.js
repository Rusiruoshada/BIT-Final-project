const staffTableData = [
	{
		fullname: 'Hathugaya Weekara',
		contact: '0789172321',
		nic: '925312342V',
		role: { id: 1, name: 'Admin' },
		status: 'In-active',
	},
	{
		fullname: 'Madarame sanseki',
		contact: '0739182321',
		nic: '941322342V',
		role: { id: 2, name: 'Instructor' },
		status: 'Active',
	},
];

const roleData = [
	{ id: 1, name: 'Admin' },
	{ id: 2, name: 'Instructor' },
	{ id: 3, name: 'Receptionist' },
];

export const init = () => {
	// identify table body
	const staffTableBodyElement = document.querySelector('#staffTableBody');

	// identify select tag in add new staff form
	const selectRoleElement = document.querySelector('#selectRole');

	selectRoleElement.innerHTML = `<option value="" selected disabled>Select Role</option>`;

	roleData.forEach((role) => {
		selectRoleElement.innerHTML += `<option value="${role.id}">${role.name}</option>`;
	});

	// define function for show role name
	const getRoleData = (dataOb) => {
		return dataOb.role.name;
	};

	// define function for show bootstrap badge for active and inactive
	const getStatusData = (dataOb) => {
		return `<div class='badge text-black fw-normal ${dataOb.status == 'Active' ? 'bg-success-subtle' : 'bg-secondary-subtle'}'><i class='fa-solid fa-circle shadow-sm  ${dataOb.status == 'Active' ? 'text-success' : 'text-secondary'}' style='font-size:6px; vertical-align: middle'></i> ${dataOb.status}</div>`;
	};

	// table col data display property list
	const displayPropertyList = [
		{ dataType: String, propertyName: 'fullname' },
		{ dataType: String, propertyName: 'contact' },
		{ dataType: String, propertyName: 'nic' },
		{ dataType: 'function', propertyName: getRoleData },
		{ dataType: 'function', propertyName: getStatusData },
	];

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

	// define table modify buttons name and color
	const studentTableModifyButtons = [
		{ name: 'Edit', color: 'secondary' },
		{ name: 'View', color: 'info' },
		{ name: 'Delete', color: 'danger' },
	];

	// call fillDataIntoTable() common.js function to fill the table
	fillDataIntoTable(
		staffTableBodyElement,
		staffTableData,
		displayPropertyList,
		true,
		studentTableModifyButtons,
		deleteRecord,
		refillDataToModal,
		viewTableRecordData,
	);
};
