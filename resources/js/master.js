page = {};
page.loaded = function(){
	page.httpRequestWork = new Worker("httpRequest.worker.js");
	page.httpRequestWor.postMessage("valor de A");
}