import PlaygroundInterpreter from './antlr/PlaygroundInterpreter';
import PlaygroundTreeWalker from './antlr/walker/PlaygroundTreeWalker';

const elt = document.getElementById('greeting');
elt.innerText = 'Hello all!';

const inputTextArea = document.getElementById('input');
const runBtn = document.getElementById('run');

runBtn.addEventListener('click', () => {
  const code = (inputTextArea as HTMLInputElement).value;
  const parseResult = PlaygroundInterpreter.parseCode(code);
  if (parseResult.errors) {
    throw new Error('Code parse error');
  }
  const walker = new PlaygroundTreeWalker(parseResult.tree);
  walker.walk();
});
