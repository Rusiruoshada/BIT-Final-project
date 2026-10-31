const tableData = [
	{
		id: 1001,
		packageName: 'Light Vehicle',
		categoryName: [
			{ id: 1222, name: 'Bike' },
			{ id: 1223, name: 'Car' },
			{ id: 1224, name: 'Three-wheel' },
		],
		packageCost: 35000,
		lessonCount: 30,
		status: 'Active',
	},
	{
		id: 1002,
		packageName: 'Only Car',
		categoryName: [
			
			{ id: 1223, name: 'Car' },
			
		],
		packageCost: 25000,
		lessonCount: 30,
		status: 'Active',
	},
	{
		id: 1003,
		packageName: 'Heavy Vehicle',
		categoryName: [
			{ id: 1224, name: 'Bus' },
			{ id: 1223, name: 'Truck' },
		],
		packageCost: 45000,
		lessonCount: 30,
		status: 'Active',
	},
];


export const init = () => {
	const addNewPackageButtonElement = document.querySelector(
		'#addNewPackageButton',
	);
	const tableBodyPackageDetailElement = document.querySelector(
		'#packageDetailTableBody',
	);

	if (!addNewPackageButtonElement) {
		console.warn('#packageInstructionModalOpen not found yet.');
		return;
	}

	addNewPackageButtonElement.addEventListener('click', () => {
		const addNewPackageFormElement =
			document.querySelector('#addNewPackageForm');

		// setModal is define using window in pageLoader so it can be call globally
		window.setModal('packagePage/addNewPackageModal', addNewPackageFormElement);
	});

	//fill the table with package detail
	if (!tableData) {
		tableBodyPackageDetailElement.innerHTML = `
			<tr>
				<td colspan='6'>No Data to Show</td>
			</tr>
		`;
	}

	// define function for show categoryNames
	const getCategoryName = (dataOb) => {
		let name = '';
		let categoryNameArr = dataOb.categoryName;
		categoryNameArr.forEach((val, index) => {
			// after last package name not show "|"
			name +=
				categoryNameArr.length == index + 1 ? `${val.name}` : `${val.name} | `;
		});
		return name;
	};
	
	// define function for show bootstrap badge for active and inactive
	const getStatusData = (dataOb) => {
		return `<div class='badge text-black fw-normal ${dataOb.status == 'Active' ? 'bg-success-subtle' : 'bg-secondary-subtle'}'><i class='fa-solid fa-circle shadow-sm  ${dataOb.status == 'Active' ? 'text-success' : 'text-secondary'}' style='font-size:6px; vertical-align: middle'></i> ${dataOb.status}</div>`;
	};

	// displayPropertyList use to define table data, datatypes
	const displayPropertyList = [
		{ dataType: String, propertyName: 'packageName' },
		{ dataType: 'function', propertyName: getCategoryName },
		{ dataType: String, propertyName: 'packageCost' },
		{ dataType: String, propertyName: 'lessonCount' },
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
		tableBodyPackageDetailElement,
		tableData,
		displayPropertyList,
		true,
		studentTableModifyButtons,
		deleteRecord,
		refillDataToModal,
		viewTableRecordData,
	);
};;
