const appContent = document.querySelector('#app-content');

// explicitly tell loadPage() as global -> otherwise its show error loadPage() not shows
export const loadPage = async (page) => {
	try {
		// load the html page
		const response = await fetch(`./pages/${page}.html`);

		if (!response.ok) {
			throw new Error(`Page not found: ${page}`);
		}

		const html = await response.text();
		appContent.innerHTML = html;
		
		// set page title to loading page name
		const pageTitle = document.querySelector('#navbarPageTitle');
		pageTitle ? pageTitle.innerText = page.toUpperCase() : '';

		// load the js page if its exits
		const pageWithScript = ['notification','students']; // use this array to define what js pages there show network 404 page fail error not show on the console

		if (pageWithScript.includes(page)) {
			
			try {
				
				// then import and append the script again
				// this will dynamically import the module
				const jsPage = await import(`../js/pages/${page}.js`);

				// if the jsPage module export a init function run it 1st
				// when we import it will not suddenly appear on app-content so when it available init() will run
				if (jsPage && typeof jsPage.init === 'function') {
					jsPage.init();
				}

			} catch (error) {
				console.warn(`failed to load script for page: ${page}`,error)
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

window.loadPage = loadPage;

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