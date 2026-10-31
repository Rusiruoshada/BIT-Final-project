const studentTableData = [
	{
		id: 1001,
		fullname: 'Amal Bandara',
		contact: '071213213',
		packages: [
			{ id: 121, name: 'Car' },
			{ id: 122, name: 'Bike' },
		],
		trialDateSet: { id: 1, date: '2026-12-05' },
		status: 'Active',
	},
	{
		id: 1002,
		fullname: 'Haritha Perera',
		contact: '074213212',
		packages: [{ id: 121, name: 'Car' }],
		trialDateSet: { id: 2, date: '2026-12-15' },
		status: 'Active',
	},
	{
		id: 1003,
		fullname: 'Namal Rajapaksha',
		contact: '075213123',
		packages: [{ id: 121, name: 'Heavy Vehicle' }],
		trialDateSet: '',
		status: 'Active',
	},
];

export const init = () => {
	const packageSelectionModalOpenButtonElement = document.querySelector(
		'#packageInstructionModalOpen',
	);

	if (!packageSelectionModalOpenButtonElement) {
		console.warn('#packageInstructionModalOpen not found yet.');
		return;
	}

	packageSelectionModalOpenButtonElement.addEventListener('click', () => {
		const packageSelectionFormElement = document.querySelector(
			'#packageSelectionForm',
		);

		// setModal is define using window in pageLoader so it can be call globally
		window.setModal(
			'studentPage/studentPackageModal',
			packageSelectionFormElement,
		);
	});

	// fill table data
	const studentTableBodyElement = document.querySelector('#studentTableBody');

	//fill the table with "-" if no data show
	if (studentTableData.length == 0) {
		studentTableBodyElement.innerHTML = `
			<tr>
				<td colspan='7'>No Data to Show</td>
			</tr>
		`;
	}

	// define function for show packageNames
	const getPackageName = (dataOb) => {
		let name = '';
		let packagesArr = dataOb.packages;
		packagesArr.forEach((val, index) => {
			// after last package name not show "|"
			name +=
				packagesArr.length == index + 1 ? `${val.name}` : `${val.name} | `;
		});
		return name;
	};

	// define function for show trial dates
	const getTrialDate = (dataOb) => {
		return dataOb.trialDateSet.date ? dataOb.trialDateSet.date : '-';
	};

	// define function for show bootstrap badge for active and inactive
	const getStatusData = (dataOb) => {
		return `<div class='badge text-black fw-normal ${dataOb.status == 'Active' ? 'bg-success-subtle' : 'bg-secondary-subtle'}'><i class='fa-solid fa-circle shadow-sm  ${dataOb.status == 'Active' ? 'text-success' : 'text-secondary'}' style='font-size:6px; vertical-align: middle'></i> ${dataOb.status}</div>`;
	};

	// displayPropertyList use to define table data, datatypes
	const displayPropertyList = [
		{ dataType: String, propertyName: 'fullname' },
		{ dataType: String, propertyName: 'contact' },
		{ dataType: 'function', propertyName: getPackageName },
		{ dataType: 'function', propertyName: getTrialDate },
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
		studentTableBodyElement,
		studentTableData,
		displayPropertyList,
		true,
		studentTableModifyButtons,
		deleteRecord,
		refillDataToModal,
		viewTableRecordData,
	);
};

// document.addEventListener('DOMContentLoaded', () => {
// 	const catBike = document.getElementById('catBike');
// 	const catThreeWheel = document.getElementById('catThreeWheel');
// 	const catCar = document.getElementById('catCar');
// 	const catLightVehicle = document.getElementById('catLightVehicle');
// 	const heavyRadios = document.querySelectorAll('.heavy-radio');
// 	const heavyLessonContainer = document.getElementById('heavyLessonContainer');

// 	// Stepper buttons handling
// 	document.querySelectorAll('.increment-btn').forEach((btn) => {
// 		btn.addEventListener('click', () => {
// 			const targetId = this.getAttribute('data-target');
// 			const input = document.getElementById(targetId);
// 			let val = parseInt(input.value) || 0;
// 			input.value = val + 1;
// 			calculateTotals();
// 		});
// 	});

// 	document.querySelectorAll('.decrement-btn').forEach((btn) => {
// 		btn.addEventListener('click', () => {
// 			const targetId = this.getAttribute('data-target');
// 			const input = document.getElementById(targetId);
// 			let val = parseInt(input.value) || 0;

// 			// Determine minimum limits
// 			let minLimit = 5;
// 			if (targetId === 'lessonsHeavy') minLimit = 6;

// 			if (val > minLimit) {
// 				input.value = val - 1;
// 				calculateTotals();
// 			}
// 		});
// 	});

// 	// Smart Auto-select rule for Light Vehicle when Bike, Three-Wheel, and Car are checked
// 	const checkLightVehicleAutoSelect = () => {
// 		if (catBike.checked && catThreeWheel.checked && catCar.checked) {
// 			catLightVehicle.checked = true;
// 			catLightVehicle.disabled = true; // Lock it since it's auto-bundled
// 		} else {
// 			catLightVehicle.disabled = false;
// 		}
// 		calculateTotals();
// 	};

// 	[catBike, catThreeWheel, catCar].forEach((chk) => {
// 		chk.addEventListener('change', checkLightVehicleAutoSelect);
// 	});
// 	catLightVehicle.addEventListener('change', calculateTotals);

// 	// Heavy vehicle radio handler
// 	heavyRadios.forEach((radio) => {
// 		radio.addEventListener('change', () => {
// 			if (this.value !== 'none') {
// 				heavyLessonContainer.classList.remove('d-none');
// 			} else {
// 				heavyLessonContainer.classList.add('d-none');
// 				document.getElementById('lessonsHeavy').value = 6;
// 			}
// 			calculateTotals();
// 		});
// 	});

// 	// Calculate Totals
// 	const calculateTotals = () => {
// 		let registrationFee = 5000;
// 		let lessonsTotal = 0;

// 		// Bike
// 		if (catBike.checked) {
// 			let count = parseInt(document.getElementById('lessonsBike').value) || 5;
// 			lessonsTotal += count * 1000;
// 		}
// 		// Three-wheel
// 		if (catThreeWheel.checked) {
// 			let count =
// 				parseInt(document.getElementById('lessonsThreeWheel').value) || 5;
// 			lessonsTotal += count * 1000;
// 		}
// 		// Car
// 		if (catCar.checked) {
// 			let count = parseInt(document.getElementById('lessonsCar').value) || 5;
// 			lessonsTotal += count * 1000; // Rs 1500 per lesson
// 		}
// 		// Light Vehicle (Uses Car/Light vehicle standard rate Rs 1500)
// 		if (catLightVehicle.checked) {
// 			let count =
// 				parseInt(document.getElementById('lessonsLightVehicle').value) || 5;
// 			lessonsTotal += count * 1500;
// 		}
// 		// Heavy Vehicle
// 		const selectedHeavy = document.querySelector(
// 			'input[name="heavyCategory"]:checked',
// 		);
// 		if (selectedHeavy && selectedHeavy.value !== 'none') {
// 			let count = parseInt(document.getElementById('lessonsHeavy').value) || 6;
// 			lessonsTotal += count * 2000;
// 		}

// 		document.getElementById('lessonsSubtotalText').innerText =
// 			'Rs. ' +
// 			lessonsTotal.toLocaleString('en-US', { minimumFractionDigits: 2 });
// 		document.getElementById('grandTotalText').innerText =
// 			'Rs. ' +
// 			(registrationFee + lessonsTotal).toLocaleString('en-US', {
// 				minimumFractionDigits: 2,
// 			});
// 	};

// 	// Initial calculation call
// 	calculateTotals();
// });
