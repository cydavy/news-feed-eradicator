import instagramCss from './instagram.str.css';
import twitterCss from './twitter.str.css';
import githubCss from './github.str.css';

export type SiteId =
	| 'facebook'
	| 'twitter'
	| 'reddit'
	| 'hackernews'
	| 'linkedin'
	| 'youtube'
	| 'instagram'
	| 'github'
	| 'tiktok'
	| 'slickdeals'
	;

export const Sites: Record<SiteId, Site> = {
	facebook: {
		label: 'Facebook',
		domain: 'facebook.com',
		paths: [
			'/',
			'/home.php',
			'/watch',
			'/marketplace/',
			'/groups/feed/',
			'/gaming/feed/',
		],
		origins: [
			'http://www.facebook.com/*',
			'https://www.facebook.com/*',
			'http://web.facebook.com/*',
			'https://web.facebook.com/*',
		],
	},
	instagram: {
		label: 'Instagram',
		domain: 'instagram.com',
		paths: ['/'],
		origins: ['http://www.instagram.com/*', 'https://www.instagram.com/*'],
		css: instagramCss,
	},
	twitter: {
		label: 'Twitter/X',
		domain: 'x.com',
		paths: ['/home', '/compose/tweet'],
		origins: [
			'http://twitter.com/*',
			'https://twitter.com/*',
			'http://x.com/*',
			'https://x.com/*',
		],
		css: twitterCss,
	},
	youtube: {
		label: 'YouTube',
		domain: 'youtube.com',
		paths: ['/', '/feed/trending'],
		origins: ['https://www.youtube.com/*'],
	},
	linkedin: {
		label: 'LinkedIn',
		domain: 'linkedin.com',
		paths: ['/', '/feed/'],
		origins: ['http://www.linkedin.com/*', 'https://www.linkedin.com/*'],
	},
	reddit: {
		label: 'Reddit',
		domain: 'reddit.com',
		paths: ['/', '/r/all/', '/r/popular/']
			.map((i) => [
				i + '',
				i + 'home/',
				i + 'hot/',
				i + 'new/',
				i + 'top/',
				i + 'rising/',
			])
			.reduce((i, j) => i.concat(j)),
		origins: [
			'https://www.reddit.com/*',
			'http://www.reddit.com/*',
			'https://old.reddit.com/*',
			'http://old.reddit.com/*',
		],
	},
	hackernews: {
		label: 'Y Combinator News (HN)',
		domain: 'news.ycombinator.com',
		paths: ['/', '/news'],
		origins: ['https://news.ycombinator.com/*'],
	},
	github: {
		label: 'Github',
		domain: 'github.com',
		paths: ['/', '/dashboard'],
		origins: ['https://github.com/*'],
		css: githubCss,
	},
	slickdeals: {
		label: 'Slickdeals',
		domain: 'slickdeals.net',
		paths: ['/'],
		origins: [
			'https://slickdeals.net/*',
			'http://slickdeals.net/*',
			'http://www.slickdeals.net/*',
			'https://www.slickdeals.net/*',
		],
	},
	tiktok: {
		label: 'TikTok',
		domain: 'tiktok.com',
		paths: ['/',
				'/following', 
				'/foryou',
				'/ar',
				'/bn-IN',
				'/ceb-PH',
				'/cs-CZ',
				'/de-DE',
				'/el-GR',
				'/en',
				'/es',
				'/fi-FI',
				'/fil-PH',
				'/fr',
				'/he-IL',
				'/hi-IN',
				'/hu-HU',
				'/id-ID',
				'/it-IT',
				'/ja-JP',
				'/jv-ID',
				'/km-KH',
				'/ko-KR',
				'/ms-MY',
				'/my-MM',
				'/nl-NL',
				'/pl-PL',
				'/pt-BR',
				'/ro-RO',
				'/ru-RU',
				'/sv-SE',
				'/th-TH',
				'/tr-TR',
				'/uk-UA',
				'/ur',
				'/vi-VN',
				'/zh-Hant-TW',
		],
		origins: [
			'http://www.tiktok.com/*',
			'https://www.tiktok.com/*',
		],
	}
};

export type Site = {
	// Label displayed in the options UI
	label: string;

	// Note: these must also be added to optional_permissions in manifest.json
	origins: string[];

	// Will be enabled for any hostnames containing this value
	domain: string;

	// Will only be enabled for these paths
	paths: string[];

	css?: string;
};
