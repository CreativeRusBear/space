const staticAssets = [
	'./index.html',
	'./img/background.jpg',
	'./img/favicon.ico',
	'./css/index.css',
	'./js/index.bundle.js',
	'./js/single.bundle.js',
	'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700&display=swap&subset=latin-ext'
];

self.addEventListener('install', async () => {
	const cache = await caches.open('static-cache');
	cache.addAll(staticAssets);
});

self.addEventListener('fetch', evt => {
	const req = evt.request;
	const url = new URL(req.url);

	if (url.origin === location.url) {
		evt.respondWith(cacheFirst(req));
	} else {
		evt.respondWith(networkFirst(req));
	}
});

async function cacheFirst (req) {
	const cachedResponse = caches.match(req);
	return cachedResponse || fetch(req);
}

async function networkFirst (req) {
	const cache = await caches.open('dynamic-cache');
	try {
		const res = await fetch(req);
		cache.put(req, res.clone());
		return res;
	} catch (error) {
		return await cache.match(req);
	}
}