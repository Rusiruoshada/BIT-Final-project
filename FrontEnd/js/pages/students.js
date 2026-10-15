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
		console.log('inside packageSelectionModalOpenButtonElement');
		// setModal is define using window in pageLoader so it can be call globally
		window.setModal('studentPage/studentPackageModal', packageSelectionFormElement);
	});
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
