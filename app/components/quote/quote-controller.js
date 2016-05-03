app.controller('QuoteController', function(QuoteService){
	var qc = this;
	QuoteService.getQuote().then(function(quote){
		qc.quote = quote;
		console.log(qc.quote)
	})
	// DO NOT EDIT ABOVE
	
	
	
})