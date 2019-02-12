var openalpr = require ("../openalpr");

function identify (id, path) {
	console.log (openalpr.IdentifyLicense (path, function (error, output) {
		var results = output.results;
		console.log (id +" "+ output.processing_time_ms +" "+ ((results.length > 0) ? results[0].plate : "No results"))
		openalpr.Stop()
	}));
}

openalpr.Start ("./openalpr.conf","/usr/share/openalpr/runtime_data",null,"us");

identify(2,'./plates/plate.jpg')