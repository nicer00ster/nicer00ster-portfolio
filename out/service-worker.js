self.__precacheManifest = [{"url":"\\_next\\436052c8-ca38-49d5-b52a-23cd6488ea90\\page\\connect.js","revision":"436052c8-ca38-49d5-b52a-23cd6488ea90"},{"url":"\\_next\\436052c8-ca38-49d5-b52a-23cd6488ea90\\page\\index.js","revision":"436052c8-ca38-49d5-b52a-23cd6488ea90"},{"url":"\\_next\\436052c8-ca38-49d5-b52a-23cd6488ea90\\page\\work.js","revision":"436052c8-ca38-49d5-b52a-23cd6488ea90"},{"url":"\\_next\\436052c8-ca38-49d5-b52a-23cd6488ea90\\page\\_app.js","revision":"436052c8-ca38-49d5-b52a-23cd6488ea90"},{"url":"\\_next\\436052c8-ca38-49d5-b52a-23cd6488ea90\\page\\_document.js","revision":"436052c8-ca38-49d5-b52a-23cd6488ea90"},{"url":"\\_next\\436052c8-ca38-49d5-b52a-23cd6488ea90\\page\\_error.js","revision":"436052c8-ca38-49d5-b52a-23cd6488ea90"}];
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
