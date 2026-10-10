const appContent = document.querySelector('#app-content');

// ================================================================================
// Load HTML page
// ================================================================================

window.loadPage = async (page) => {
	try {
		// --------------------------------------------------------------------------
		// Load page HTML
		// --------------------------------------------------------------------------

		const response = await fetch(`./pages/${page}.html`);

		if (!response.ok) {
			throw new Error(`Page not found: ${page}`);
		}

		const html = await response.text();

		appContent.innerHTML = html;

		// --------------------------------------------------------------------------
		// Load page JavaScript if it exists
		// --------------------------------------------------------------------------

		const scriptResponse = await fetch(`../js/pages/${page}.js`);

		if (scriptResponse.ok) {
			const script = document.createElement('script');

			script.src = `../js/pages/${page}.js`;

			script.dataset.pageScript = page;

			document.body.appendChild(script);
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

// ================================================================================
// Load HTML component
// ================================================================================

window.loadComponent = async (path, targetSelector) => {
	try {
		const response = await fetch(path);

		if (!response.ok) {
			throw new Error(`Component not found: ${path}`);
		}

		const html = await response.text();

		const targetElement = document.querySelector(targetSelector);

		if (!targetElement) {
			throw new Error(`Target element not found: ${targetSelector}`);
		}

		targetElement.insertAdjacentHTML('beforeend', html);
	} catch (error) {
		console.error(error);
	}
};

// ================================================================================
// Initial page
// ================================================================================

loadPage('dashboard');
