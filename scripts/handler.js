function calculateHandler(event) {
  // read & process user input from event
  const form = event.target.form;
  const x = parseInt(form.value1.value);
	const y = parseInt(form.value2.value);
	const op = document.getElementById("operator").value;
  // pass user input through core logic
  const result = doMath(op, x, y); // leave this line!
  
  // render output to DOM for user
  document.getElementById('result').innerHTML = result;
  // log user action for developers
  console.log('Number 1: ', x, 'Number 2: ', y, 'Operation: ', op, 'Result: ', result);
  // return true for the browser
  return true;
}
