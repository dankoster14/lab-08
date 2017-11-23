(function(){
  let demoData = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
  console.log(obj);

  /*
    EXERCISE 01:
    Rewrite this to make it *loop* through all the lecturers' names.

	Clue: use "for key in..." and try to work out the syntax
    (Note the ES6 'template literal' syntax - you can add HTML tags)
  */

  // set theData here to an empty string

  let theData = " ";

  for(i in obj.lecturers){
    theData += `<li>${obj.lecturers[i].firstName} ${obj.lecturers[i].lastName}</li>`;
  }

  // create a loop around this line with "for ... in" (look it up)_

  // end the for loop here

  // populates the chosen element's content with the data:
  demoData.innerHTML = theData;

  /*
    EXERCISE 02:
    Once you have looped through all the data, present the
    results on the page, styled with CSS.
  */
}());
