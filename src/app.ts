import PlaygroundInterpreter from './antlr/PlaygroundInterpreter';

const elt = document.getElementById('greeting');
elt.innerText = 'Hello all!';

const inputTextArea = document.getElementById('input');
const runBtn = document.getElementById('run');

runBtn.addEventListener('click', () => {
  const code = (inputTextArea as HTMLInputElement).value;
  PlaygroundInterpreter.parseCode(code);
});
