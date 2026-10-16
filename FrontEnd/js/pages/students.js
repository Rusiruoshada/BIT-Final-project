const studentTableData = [
	{
		id: 1001,
		fullname: 'Amal Bandara',
		contact: '071213213',
		packages: [
			{ id: 121, name: 'Car' },
			{ id: 122, name: 'Bike' },
		],
		trialDateSet: true,
		status: 'Active',
	},
	{
		id: 1002,
		fullname: 'Haritha Perera',
		contact: '074213212',
		packages: [
			{ id: 121, name: 'Car' },
		],
		trialDateSet: false,
		status: 'Active',
	},
	{
		id: 1003,
		fullname: 'Namal Rajapaksha',
		contact: '075213123',
		packages: [
			{ id: 121, name: 'Heavy Vehicle' },
		],
		trialDateSet: true,
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
	if (!studentTableData) {
		tableBodyPackageDetailElement.innerHTML = `
			<tr>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
			</tr>
		`;
	}

	studentTableData.forEach((data,index) => {
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
		const td5 = document.createElement('td');
		const td6 = document.createElement('td');
		const td7 = document.createElement('td');

		td1.innerText = index+1;
		td2.innerText = data.fullname;
		td3.innerText = data.contact;

		let categoryVals = '';
		data.packages.forEach((val, index) => {
			categoryVals += `${val.name}${data.packages.length != index + 1 ? ' / ' : ''}`;
		});
		td4.innerText = categoryVals;

		
		td5.innerHTML = data.trialDateSet
			? `<i class='fa-solid fa-check text-success'></i>`
			: `<i class='fa-solid fa-times text-danger'></i>`;
		td6.innerText = data.status
		td7.innerHTML = window.modifyColButtonsHtml;

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);

		studentTableBodyElement.appendChild(tr);
	});
};;

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
