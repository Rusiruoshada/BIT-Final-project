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
		

		// load the js page if its exits

		const pageWithScript = ['notification']; // use this array to define what js pages there show network 404 page fail error not show on the console

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
