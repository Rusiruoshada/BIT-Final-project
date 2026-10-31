const paymentData = [
	{
		id: 1,
		paymentId: 'PID000010',
		studentId: { id: 1, name: 'Ichigo Kurosaki' },
		paymentDate: new Date('2026-10-30'),
		payableAmount: 35000,
		paidAmount: 15000,
		status: 'Pending',
	},
	{
		id: 2,
		paymentId: 'PID000011',
		studentId: { id: 12, name: 'Bakuya kuruchichi' },
		paymentDate: new Date('2026-1-30'),
		payableAmount: 5000,
		paidAmount: 5000,
		status: 'Paid',
	},
	{
		id: 3,
		paymentId: 'PID000012',
		studentId: { id: 13, name: 'Madarame ikkaku' },
		paymentDate: new Date('2026-11-30'),
		payableAmount: 35000,
		paidAmount: 10000,
		status: 'Pending',
	},
	{
		id: 4,
		paymentId: 'PID000013',
		studentId: { id: 14, name: 'Ishida uruyu' },
		paymentDate: new Date('2026-12-30'),
		payableAmount: 35000,
		paidAmount: 1000,
		status: 'Pending',
	},
];

export const init = () => {
    
	// identify table body
	const paymentTableBodyElement = document.querySelector(
		'#paymentDetailTableBody',
	);

	// define function for get student name
	const getStudentName = (dataOb) => {
		return dataOb.studentId.name;
	};

	// define function for get payableAmount
	const getPayableAmount = (dataOb) => {
		return `Rs.${dataOb.payableAmount}`;
	};

	// define function for get paidAmount
	const getPaidAmount = (dataOb) => {
		return `Rs.${dataOb.paidAmount}`;
	};

	// define function for calculate due payment paidAmount
	const getDueAmount = (dataOb) => {
		return `Rs.${Number(dataOb.payableAmount) - Number(dataOb.paidAmount)}`;
	};

	// define function for show bootstrap badge for Complete and pending
	const getStatusData = (dataOb) => {
		return `<div class='badge text-black fw-normal ${dataOb.status == 'Paid' ? 'bg-success-subtle' : 'bg-warning-subtle'}'><i class='fa-solid fa-circle shadow-sm  ${dataOb.status == 'Paid' ? 'text-success' : 'text-warning'}' style='font-size:6px; vertical-align: middle'></i> ${dataOb.status}</div>`;
	};

	// table col data display property list
	const displayPropertyList = [
		{ dataType: String, propertyName: 'paymentId' },
		{ dataType: 'function', propertyName: getStudentName },
		{ dataType: 'function', propertyName: getPayableAmount },
		{ dataType: 'function', propertyName: getPaidAmount },
		{ dataType: 'function', propertyName: getDueAmount },
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
		paymentTableBodyElement,
		paymentData,
		displayPropertyList,
		true,
		studentTableModifyButtons,
		deleteRecord,
		refillDataToModal,
		viewTableRecordData,
	);
};;;
