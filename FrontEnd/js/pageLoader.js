const appContent = document.querySelector('#app-content');

// explicitly tell loadPage() as global -> otherwise its show error loadPage() not shows
window.loadPage = async (page) => {
	try {
		// load the html page
		const response = await fetch(`./pages/${page}.html`);

		if (!response.ok) {
			throw new Error(`Page not found: ${page}`);
		}

		const html = await response.text();
		appContent.innerHTML = html;
		

		// this will load js again and again have to do some thing==============================================================
		// load the js page if its exits
		const pageWithScript = ['notification','students']; // use this array to define what js pages there show network 404 page fail error not show on the console

		if (pageWithScript.includes(page)) {
			const jsPage = await fetch(`../js/pages/${page}.js`);

			if (jsPage.ok) {
				const script = document.createElement('script');

				script.src = `../js/pages/${page}.js`;

				script.dataset.pageScript = page;
				document.body.appendChild(script);
			}
		}
	} catch (error) {
		console.error(error);

		appContent.innerHTML = `
            <div class="alert alert-danger">
                Unable to load page.
            </div>
        `;
	}
};

loadPage('students');


window.setModal = async (modals, appendElement) => {
	try {
		const response = await fetch(`components/${modals}.html`);

		// Check if the file actually exists / loaded successfully
		if (!response.ok) {
			throw new Error(
				`Failed to load modal: ${response.statusText} (${response.status})`,
			);
		}

		const html = await response.text();
		appendElement.innerHTML = html;
	} catch (error) {
		console.error('Error loading modal:', error);
		// Optional fallback message so the user isn't left looking at a broken state
		appendElement.innerHTML = `<p style="color: red;">Could not load modal content.</p>`;
	}
};