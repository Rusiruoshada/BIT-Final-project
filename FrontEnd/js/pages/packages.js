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
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
			</tr>
		`;
	}

	tableData.forEach((data) => {
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
		const td5 = document.createElement('td');
		const td6 = document.createElement('td');

		td1.innerText = data.packageName;

		let categoryVals = '';
		data.categoryName.forEach((val,index) => {
			categoryVals += `${val.name}${data.categoryName.length != index+1?' / ':''}`;
		});
		td2.innerText = categoryVals;

		td3.innerText = data.packageCost;
		td4.innerText = data.lessonCount;
		td5.innerText = data.status;
		td6.innerHTML = window.modifyColButtonsHtml;

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);

		tableBodyPackageDetailElement.appendChild(tr);
	});
};
