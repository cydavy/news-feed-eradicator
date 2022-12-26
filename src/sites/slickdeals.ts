import injectUI, { isAlreadyInjected } from '../lib/inject-ui';
import { isEnabled } from '../lib/is-enabled';
import { Store } from '../store';

export function checkSite(): boolean {
	const isSite = window.location.host.includes('slickdeals.net');
    console.log(window.location.host)
    return isSite
}

export function eradicate(store: Store) {
	function eradicateRetry() {
		const settings = store.getState().settings;
		if (settings == null || !isEnabled(settings)) {
			return;
		}

		// Don't do anything if the UI hasn't loaded yet
		const feed = 
			document.querySelector("div[class*='fpMainContent']") // Firefox 	(all feeds)
		;

        console.log(feed)

		if (feed == null) {
			return;
		}

		const container = feed;

		// Add News Feed Eradicator quote/info panel
		if (container && !isAlreadyInjected()) {
			injectUI(container, store);
		}
	}

	
	// scripts before we attempt to replace them
	setInterval(eradicateRetry, 2000);
}