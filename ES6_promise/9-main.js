import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => divideFunction(10, 2))); // Should print: [ 5, 'Guardrail was processed' ]
console.log(guardrail(() => divideFunction(10, 0))); // Should print: [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
