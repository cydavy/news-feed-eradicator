import injectUI, { isAlreadyInjected } from '../lib/inject-ui';
import { isEnabled } from '../lib/is-enabled';
import { Store } from '../store';

export function checkSite(): boolean {
	return window.location.host.includes('tiktok.com');
}

export function eradicate(store: Store) {
	function eradicateRetry() {
		const settings = store.getState().settings;
		if (settings == null || !isEnabled(settings)) {
			return;
		}

		// Don't do anything if the UI hasn't loaded yet
		const feed = 
			document.querySelector("div[class*='DivBodyContainer']") || // Firefox 	(all feeds)
            // document.querySelector("div[class*='app']") || // Firefox 	(all feeds)
			document.querySelector(".trending-container") || 			// Chrome 	(main feeds)
			document.querySelector(".recommend-follow-feed-page") 		// Chrome	("/following")
		;

		if (feed == null) {
			return;
		}

		const container = feed;

		// Add News Feed Eradicator quote/info panel
		if (container && !isAlreadyInjected()) {
			injectUI(container, store);
		}
	}

	// This delay ensures that the elements have been created by TikTok's
	// scripts before we attempt to replace them
	setInterval(eradicateRetry, 2000);
}