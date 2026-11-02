// Minimal service worker: makes the dashboard installable as an app.
// It does NOT cache anything, so you always get the latest page and live GitHub data.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {}); // pass everything straight to the network
