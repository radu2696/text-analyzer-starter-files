function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}


function wordCount(text){
	return text.length;
}


function averageWordLength(text){
	var nrOfCharacters=0;
	var nrOfWords=wordCount(text);
	for(var i=0; i<text.length;i++){
		nrOfCharacters += text[i].length;
	}
	return nrOfCharacters/nrOfWords;
}

function uniqueWordCount(text){
	var wordFrequencies = {};
  for (var i = 0; i < text.length; i++) {
    if (text[i] in wordFrequencies) {
      wordFrequencies[text[i]]++;
    }
    else {
      wordFrequencies[text[i]]=1;
    }
  }
  return Object.keys(wordFrequencies).length;
}


function reportOnText(text) {

	var textReport = $('.js-text-report');

    var newText=text.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();

	textReport.find('.word-count').text(wordCount(newText));
	textReport.find('.average-word-length').text(averageWordLength(newText) + ' characters');
	textReport.find('.unique-word-count').text(uniqueWordCount(newText));

	textReport.removeClass('hidden');


}


function textAnalyzerEvent(){
	$('.js-form').submit(function(event){
		event.preventDefault();

		$('text-report').empty();
		var textToBeAnalyzed = $(event.currentTarget).find('#user-text').val();
		reportOnText(removeReturns(textToBeAnalyzed));
	});
}



// equivalent to `$(document).ready(function() {...})`
$(function(){
	textAnalyzerEvent();
});