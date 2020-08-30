// Generated from Playground.g4 by ANTLR 4.7.1
// jshint ignore: start
const antlr4 = require('antlr4/index');
const PlaygroundVisitor = require('./PlaygroundVisitor').PlaygroundVisitor;

const grammarFileName = 'Playground.g4';

const serializedATN = [
  '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0003R\u00e8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t',
  '\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004',
  '\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004',
  '\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004',
  '\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t',
  '\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004',
  '\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0003\u0002',
  '\u0003\u0003\u0007\u00037\n\u0003\f\u0003\u000e\u0003:\u000b\u0003\u0003',
  '\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003',
  '\u0004\u0003\u0004\u0003\u0004\u0005\u0004E\n\u0004\u0003\u0005\u0003',
  '\u0005\u0003\u0005\u0003\u0005\u0005\u0005K\n\u0005\u0003\u0006\u0003',
  '\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003',
  '\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bZ\n\b\u0003\b',
  '\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\td\n',
  '\t\f\t\u000e\tg\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003',
  '\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003',
  '\n\u0003\n\u0003\n\u0003\n\u0005\n{\n\n\u0003\u000b\u0003\u000b\u0003',
  '\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003',
  '\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003',
  '\r\u0003\r\u0003\r\u0005\r\u0092\n\r\u0003\r\u0003\r\u0003\r\u0003\r',
  '\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003',
  '\r\u0003\r\u0003\r\u0007\r\u00a3\n\r\f\r\u000e\r\u00a6\u000b\r\u0003',
  '\u000e\u0003\u000e\u0005\u000e\u00aa\n\u000e\u0003\u000f\u0003\u000f',
  '\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010',
  '\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00b7\n\u0010\f\u0010',
  '\u000e\u0010\u00ba\u000b\u0010\u0005\u0010\u00bc\n\u0010\u0003\u0010',
  '\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011',
  '\u0007\u0011\u00c5\n\u0011\f\u0011\u000e\u0011\u00c8\u000b\u0011\u0005',
  '\u0011\u00ca\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012',
  '\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00d3\n\u0013\u0003',
  '\u0014\u0005\u0014\u00d6\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014',
  '\u0003\u0014\u0005\u0014\u00dc\n\u0014\u0003\u0015\u0003\u0015\u0003',
  '\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003',
  '\u0019\u0003\u0019\u0003\u0019\u0002\u0003\u0018\u001a\u0002\u0004\u0006',
  '\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e "$&(*',
  ',.0\u0002\u000b\u0003\u0002\u0013\u0015\u0004\u0002\u0018\u0018\u001a',
  '\u001a\u0003\u0002\u001b\u001c\u0003\u0002\u0019\u001a\u0003\u0002\u001e',
  '#\u0004\u0002\u0005\u0005RR\u0003\u0002\u0016\u0018\u0003\u0002\u0019',
  '\u001d\u0003\u0002%N\u0002\u00f2\u00022\u0003\u0002\u0002\u0002\u0004',
  '8\u0003\u0002\u0002\u0002\u0006D\u0003\u0002\u0002\u0002\bF\u0003\u0002',
  '\u0002\u0002\nL\u0003\u0002\u0002\u0002\fP\u0003\u0002\u0002\u0002\u000e',
  'T\u0003\u0002\u0002\u0002\u0010`\u0003\u0002\u0002\u0002\u0012z\u0003',
  '\u0002\u0002\u0002\u0014|\u0003\u0002\u0002\u0002\u0016\u0081\u0003',
  '\u0002\u0002\u0002\u0018\u0091\u0003\u0002\u0002\u0002\u001a\u00a9\u0003',
  '\u0002\u0002\u0002\u001c\u00ab\u0003\u0002\u0002\u0002\u001e\u00af\u0003',
  '\u0002\u0002\u0002 \u00bf\u0003\u0002\u0002\u0002"\u00cd\u0003\u0002',
  '\u0002\u0002$\u00d2\u0003\u0002\u0002\u0002&\u00db\u0003\u0002\u0002',
  '\u0002(\u00dd\u0003\u0002\u0002\u0002*\u00df\u0003\u0002\u0002\u0002',
  ',\u00e1\u0003\u0002\u0002\u0002.\u00e3\u0003\u0002\u0002\u00020\u00e5',
  '\u0003\u0002\u0002\u000223\u0005\u0004\u0003\u000234\u0007\u0002\u0002',
  '\u00034\u0003\u0003\u0002\u0002\u000257\u0005\u0006\u0004\u000265\u0003',
  '\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u0002',
  '89\u0003\u0002\u0002\u00029\u0005\u0003\u0002\u0002\u0002:8\u0003\u0002',
  '\u0002\u0002;E\u0005\u000e\b\u0002<E\u0005\u001e\u0010\u0002=E\u0005',
  ' \u0011\u0002>E\u0005\b\u0005\u0002?E\u0005\n\u0006\u0002@E\u0005\f',
  '\u0007\u0002AE\u0005\u0014\u000b\u0002BE\u0005\u0016\f\u0002CE\u0005',
  '\u0012\n\u0002D;\u0003\u0002\u0002\u0002D<\u0003\u0002\u0002\u0002D',
  '=\u0003\u0002\u0002\u0002D>\u0003\u0002\u0002\u0002D?\u0003\u0002\u0002',
  '\u0002D@\u0003\u0002\u0002\u0002DA\u0003\u0002\u0002\u0002DB\u0003\u0002',
  '\u0002\u0002DC\u0003\u0002\u0002\u0002E\u0007\u0003\u0002\u0002\u0002',
  'FG\u0007\u0004\u0002\u0002GJ\u0007R\u0002\u0002HI\u0007\u0013\u0002',
  '\u0002IK\u0005\u0018\r\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002',
  '\u0002\u0002K\t\u0003\u0002\u0002\u0002LM\u0007R\u0002\u0002MN\t\u0002',
  '\u0002\u0002NO\u0005\u0018\r\u0002O\u000b\u0003\u0002\u0002\u0002PQ',
  '\u0005\u001c\u000f\u0002QR\t\u0002\u0002\u0002RS\u0005\u0018\r\u0002',
  'S\r\u0003\u0002\u0002\u0002TU\u0007\u0006\u0002\u0002UV\u0007R\u0002',
  '\u0002VW\u0007\u0013\u0002\u0002WY\u0007\u0010\u0002\u0002XZ\u0005\u0010',
  '\t\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0003',
  '\u0002\u0002\u0002[\\\u0007\u0011\u0002\u0002\\]\u0007$\u0002\u0002',
  ']^\u0005\u0004\u0003\u0002^_\u0007\u000b\u0002\u0002_\u000f\u0003\u0002',
  '\u0002\u0002`e\u0007R\u0002\u0002ab\u0007\u0003\u0002\u0002bd\u0007',
  'R\u0002\u0002ca\u0003\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002ec',
  '\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002f\u0011\u0003\u0002',
  '\u0002\u0002ge\u0003\u0002\u0002\u0002hi\u0007\t\u0002\u0002ij\u0005',
  '\u0018\r\u0002jk\u0005\u0004\u0003\u0002kl\u0007\n\u0002\u0002lm\u0005',
  '\u0012\n\u0002m{\u0003\u0002\u0002\u0002no\u0007\t\u0002\u0002op\u0005',
  '\u0018\r\u0002pq\u0005\u0004\u0003\u0002qr\u0007\n\u0002\u0002rs\u0005',
  '\u0004\u0003\u0002st\u0007\u000b\u0002\u0002t{\u0003\u0002\u0002\u0002',
  'uv\u0007\t\u0002\u0002vw\u0005\u0018\r\u0002wx\u0005\u0004\u0003\u0002',
  'xy\u0007\u000b\u0002\u0002y{\u0003\u0002\u0002\u0002zh\u0003\u0002\u0002',
  '\u0002zn\u0003\u0002\u0002\u0002zu\u0003\u0002\u0002\u0002{\u0013\u0003',
  '\u0002\u0002\u0002|}\u0007\b\u0002\u0002}~\u0005\u0018\r\u0002~\u007f',
  '\u0005\u0004\u0003\u0002\u007f\u0080\u0007\u000b\u0002\u0002\u0080\u0015',
  '\u0003\u0002\u0002\u0002\u0081\u0082\u0007\u0007\u0002\u0002\u0082\u0083',
  '\u0005\u0018\r\u0002\u0083\u0084\u0005\u0004\u0003\u0002\u0084\u0085',
  '\u0007\u000b\u0002\u0002\u0085\u0017\u0003\u0002\u0002\u0002\u0086\u0087',
  '\b\r\u0001\u0002\u0087\u0092\u0005\u001a\u000e\u0002\u0088\u0092\u0005',
  '\u001c\u000f\u0002\u0089\u0092\u0005\u001e\u0010\u0002\u008a\u0092\u0005',
  ' \u0011\u0002\u008b\u008c\u0007\u0010\u0002\u0002\u008c\u008d\u0005',
  '\u0018\r\u0002\u008d\u008e\u0007\u0011\u0002\u0002\u008e\u0092\u0003',
  '\u0002\u0002\u0002\u008f\u0090\t\u0003\u0002\u0002\u0090\u0092\u0005',
  '\u0018\r\b\u0091\u0086\u0003\u0002\u0002\u0002\u0091\u0088\u0003\u0002',
  '\u0002\u0002\u0091\u0089\u0003\u0002\u0002\u0002\u0091\u008a\u0003\u0002',
  '\u0002\u0002\u0091\u008b\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002',
  '\u0002\u0002\u0092\u00a4\u0003\u0002\u0002\u0002\u0093\u0094\f\u0007',
  '\u0002\u0002\u0094\u0095\t\u0004\u0002\u0002\u0095\u00a3\u0005\u0018',
  '\r\b\u0096\u0097\f\u0006\u0002\u0002\u0097\u0098\t\u0005\u0002\u0002',
  '\u0098\u00a3\u0005\u0018\r\u0007\u0099\u009a\f\u0005\u0002\u0002\u009a',
  '\u009b\t\u0006\u0002\u0002\u009b\u00a3\u0005\u0018\r\u0006\u009c\u009d',
  '\f\u0004\u0002\u0002\u009d\u009e\u0007\u0016\u0002\u0002\u009e\u00a3',
  '\u0005\u0018\r\u0005\u009f\u00a0\f\u0003\u0002\u0002\u00a0\u00a1\u0007',
  '\u0017\u0002\u0002\u00a1\u00a3\u0005\u0018\r\u0004\u00a2\u0093\u0003',
  '\u0002\u0002\u0002\u00a2\u0096\u0003\u0002\u0002\u0002\u00a2\u0099\u0003',
  '\u0002\u0002\u0002\u00a2\u009c\u0003\u0002\u0002\u0002\u00a2\u009f\u0003',
  '\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003',
  '\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u0019\u0003',
  '\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00aa\u0005',
  '"\u0012\u0002\u00a8\u00aa\u0005&\u0014\u0002\u00a9\u00a7\u0003\u0002',
  '\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa\u001b\u0003\u0002',
  '\u0002\u0002\u00ab\u00ac\u0005"\u0012\u0002\u00ac\u00ad\u0007\u0012',
  '\u0002\u0002\u00ad\u00ae\u0007R\u0002\u0002\u00ae\u001d\u0003\u0002',
  '\u0002\u0002\u00af\u00b0\u0005"\u0012\u0002\u00b0\u00b1\u0007\u0012',
  '\u0002\u0002\u00b1\u00b2\u0007R\u0002\u0002\u00b2\u00bb\u0007\u0010',
  '\u0002\u0002\u00b3\u00b8\u0005$\u0013\u0002\u00b4\u00b5\u0007\u0003',
  '\u0002\u0002\u00b5\u00b7\u0005$\u0013\u0002\u00b6\u00b4\u0003\u0002',
  '\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002',
  '\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002',
  '\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00b3\u0003\u0002',
  '\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002',
  '\u0002\u0002\u00bd\u00be\u0007\u0011\u0002\u0002\u00be\u001f\u0003\u0002',
  '\u0002\u0002\u00bf\u00c0\u0007R\u0002\u0002\u00c0\u00c9\u0007\u0010',
  '\u0002\u0002\u00c1\u00c6\u0005$\u0013\u0002\u00c2\u00c3\u0007\u0003',
  '\u0002\u0002\u00c3\u00c5\u0005$\u0013\u0002\u00c4\u00c2\u0003\u0002',
  '\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002',
  '\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00ca\u0003\u0002',
  '\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9\u00c1\u0003\u0002',
  '\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002',
  '\u0002\u0002\u00cb\u00cc\u0007\u0011\u0002\u0002\u00cc!\u0003\u0002',
  '\u0002\u0002\u00cd\u00ce\t\u0007\u0002\u0002\u00ce#\u0003\u0002\u0002',
  '\u0002\u00cf\u00d3\u0005"\u0012\u0002\u00d0\u00d3\u0005&\u0014\u0002',
  '\u00d1\u00d3\u0005\u0018\r\u0002\u00d2\u00cf\u0003\u0002\u0002\u0002',
  '\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002',
  '\u00d3%\u0003\u0002\u0002\u0002\u00d4\u00d6\t\u0005\u0002\u0002\u00d5',
  '\u00d4\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6',
  '\u00d7\u0003\u0002\u0002\u0002\u00d7\u00dc\u0007\r\u0002\u0002\u00d8',
  '\u00dc\u0007\f\u0002\u0002\u00d9\u00dc\u0007\u000e\u0002\u0002\u00da',
  '\u00dc\u0005(\u0015\u0002\u00db\u00d5\u0003\u0002\u0002\u0002\u00db',
  '\u00d8\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00db',
  "\u00da\u0003\u0002\u0002\u0002\u00dc'\u0003\u0002\u0002\u0002\u00dd",
  '\u00de\u00050\u0019\u0002\u00de)\u0003\u0002\u0002\u0002\u00df\u00e0',
  '\t\b\u0002\u0002\u00e0+\u0003\u0002\u0002\u0002\u00e1\u00e2\t\t\u0002',
  '\u0002\u00e2-\u0003\u0002\u0002\u0002\u00e3\u00e4\t\u0006\u0002\u0002',
  '\u00e4/\u0003\u0002\u0002\u0002\u00e5\u00e6\t\n\u0002\u0002\u00e61\u0003',
  '\u0002\u0002\u0002\u00138DJYez\u0091\u00a2\u00a4\u00a9\u00b8\u00bb\u00c6',
  '\u00c9\u00d2\u00d5\u00db',
].join('');

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

const sharedContextCache = new antlr4.PredictionContextCache();

const literalNames = [
  null,
  "','",
  "'var'",
  "'this'",
  "'@'",
  "'while'",
  "'loop'",
  "'if'",
  "'else'",
  "'end'",
  null,
  null,
  null,
  "'null'",
  "'('",
  "')'",
  "'.'",
  "'='",
  "'+='",
  "'-='",
  "'AND'",
  "'OR'",
  "'NOT'",
  "'+'",
  "'-'",
  "'*'",
  "'/'",
  "'%'",
  "'=='",
  "'!='",
  "'>'",
  "'<'",
  "'>='",
  "'<='",
  "'=>'",
  "'arrowUp'",
  "'arrowDown'",
  "'arrowLeft'",
  "'arrowRight'",
  "'space'",
  "'spaceBar'",
  "'keyA'",
  "'keyB'",
  "'keyC'",
  "'keyD'",
  "'keyE'",
  "'keyF'",
  "'keyG'",
  "'keyH'",
  "'keyI'",
  "'keyJ'",
  "'keyK'",
  "'keyL'",
  "'keyM'",
  "'keyN'",
  "'keyO'",
  "'keyP'",
  "'keyQ'",
  "'keyR'",
  "'keyS'",
  "'keyT'",
  "'keyU'",
  "'keyV'",
  "'keyW'",
  "'keyX'",
  "'keyY'",
  "'keyZ'",
  "'key0'",
  "'key1'",
  "'key2'",
  "'key3'",
  "'key4'",
  "'key5'",
  "'key6'",
  "'key7'",
  "'key8'",
  "'key9'",
];

const symbolicNames = [
  null,
  null,
  'VAR',
  'THIS',
  'AT',
  'WHILE',
  'LOOP',
  'IF',
  'ELSE',
  'END',
  'BOOL_LITERAL',
  'NUMBER_LITERAL',
  'STRING_LITERAL',
  'NULL',
  'LPAREN',
  'RPAREN',
  'DOT',
  'ASSIGN',
  'INC',
  'DEC',
  'AND',
  'OR',
  'NOT',
  'ADD',
  'SUB',
  'MUL',
  'DIV',
  'MOD',
  'EQUAL',
  'NOTEQUAL',
  'GT',
  'LT',
  'GE',
  'LE',
  'ARROW',
  'ARROWUP',
  'ARROWDOWN',
  'ARROWLEFT',
  'ARROWRIGHT',
  'SPACE',
  'SPACEBAR',
  'KEYA',
  'KEYB',
  'KEYC',
  'KEYD',
  'KEYE',
  'KEYF',
  'KEYG',
  'KEYH',
  'KEYI',
  'KEYJ',
  'KEYK',
  'KEYL',
  'KEYM',
  'KEYN',
  'KEYO',
  'KEYP',
  'KEYQ',
  'KEYR',
  'KEYS',
  'KEYT',
  'KEYU',
  'KEYV',
  'KEYW',
  'KEYX',
  'KEYY',
  'KEYZ',
  'KEY0',
  'KEY1',
  'KEY2',
  'KEY3',
  'KEY4',
  'KEY5',
  'KEY6',
  'KEY7',
  'KEY8',
  'KEY9',
  'WS',
  'COMMENT',
  'LINE_COMMENT',
  'IDENTIFIER',
];

const ruleNames = [
  'parse',
  'scope',
  'statement',
  'varDeclaration',
  'varAssignment',
  'objectPropertyAssignment',
  'eventStatement',
  'eventParams',
  'conditionalStatement',
  'loopStatement',
  'whileStatement',
  'expression',
  'primary',
  'objectProperty',
  'objectMethodCall',
  'staticMethodCall',
  'objectIdentifier',
  'methodParam',
  'literal',
  'constantLiteral',
  'booleanOperator',
  'arithmeticOperator',
  'relationalOperator',
  'keyInput',
];

function PlaygroundParser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(
    this,
    atn,
    decisionsToDFA,
    sharedContextCache,
  );
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;
  return this;
}

PlaygroundParser.prototype = Object.create(antlr4.Parser.prototype);
PlaygroundParser.prototype.constructor = PlaygroundParser;

Object.defineProperty(PlaygroundParser.prototype, 'atn', {
  get: function () {
    return atn;
  },
});

PlaygroundParser.EOF = antlr4.Token.EOF;
PlaygroundParser.T__0 = 1;
PlaygroundParser.VAR = 2;
PlaygroundParser.THIS = 3;
PlaygroundParser.AT = 4;
PlaygroundParser.WHILE = 5;
PlaygroundParser.LOOP = 6;
PlaygroundParser.IF = 7;
PlaygroundParser.ELSE = 8;
PlaygroundParser.END = 9;
PlaygroundParser.BOOL_LITERAL = 10;
PlaygroundParser.NUMBER_LITERAL = 11;
PlaygroundParser.STRING_LITERAL = 12;
PlaygroundParser.NULL = 13;
PlaygroundParser.LPAREN = 14;
PlaygroundParser.RPAREN = 15;
PlaygroundParser.DOT = 16;
PlaygroundParser.ASSIGN = 17;
PlaygroundParser.INC = 18;
PlaygroundParser.DEC = 19;
PlaygroundParser.AND = 20;
PlaygroundParser.OR = 21;
PlaygroundParser.NOT = 22;
PlaygroundParser.ADD = 23;
PlaygroundParser.SUB = 24;
PlaygroundParser.MUL = 25;
PlaygroundParser.DIV = 26;
PlaygroundParser.MOD = 27;
PlaygroundParser.EQUAL = 28;
PlaygroundParser.NOTEQUAL = 29;
PlaygroundParser.GT = 30;
PlaygroundParser.LT = 31;
PlaygroundParser.GE = 32;
PlaygroundParser.LE = 33;
PlaygroundParser.ARROW = 34;
PlaygroundParser.ARROWUP = 35;
PlaygroundParser.ARROWDOWN = 36;
PlaygroundParser.ARROWLEFT = 37;
PlaygroundParser.ARROWRIGHT = 38;
PlaygroundParser.SPACE = 39;
PlaygroundParser.SPACEBAR = 40;
PlaygroundParser.KEYA = 41;
PlaygroundParser.KEYB = 42;
PlaygroundParser.KEYC = 43;
PlaygroundParser.KEYD = 44;
PlaygroundParser.KEYE = 45;
PlaygroundParser.KEYF = 46;
PlaygroundParser.KEYG = 47;
PlaygroundParser.KEYH = 48;
PlaygroundParser.KEYI = 49;
PlaygroundParser.KEYJ = 50;
PlaygroundParser.KEYK = 51;
PlaygroundParser.KEYL = 52;
PlaygroundParser.KEYM = 53;
PlaygroundParser.KEYN = 54;
PlaygroundParser.KEYO = 55;
PlaygroundParser.KEYP = 56;
PlaygroundParser.KEYQ = 57;
PlaygroundParser.KEYR = 58;
PlaygroundParser.KEYS = 59;
PlaygroundParser.KEYT = 60;
PlaygroundParser.KEYU = 61;
PlaygroundParser.KEYV = 62;
PlaygroundParser.KEYW = 63;
PlaygroundParser.KEYX = 64;
PlaygroundParser.KEYY = 65;
PlaygroundParser.KEYZ = 66;
PlaygroundParser.KEY0 = 67;
PlaygroundParser.KEY1 = 68;
PlaygroundParser.KEY2 = 69;
PlaygroundParser.KEY3 = 70;
PlaygroundParser.KEY4 = 71;
PlaygroundParser.KEY5 = 72;
PlaygroundParser.KEY6 = 73;
PlaygroundParser.KEY7 = 74;
PlaygroundParser.KEY8 = 75;
PlaygroundParser.KEY9 = 76;
PlaygroundParser.WS = 77;
PlaygroundParser.COMMENT = 78;
PlaygroundParser.LINE_COMMENT = 79;
PlaygroundParser.IDENTIFIER = 80;

PlaygroundParser.RULE_parse = 0;
PlaygroundParser.RULE_scope = 1;
PlaygroundParser.RULE_statement = 2;
PlaygroundParser.RULE_varDeclaration = 3;
PlaygroundParser.RULE_varAssignment = 4;
PlaygroundParser.RULE_objectPropertyAssignment = 5;
PlaygroundParser.RULE_eventStatement = 6;
PlaygroundParser.RULE_eventParams = 7;
PlaygroundParser.RULE_conditionalStatement = 8;
PlaygroundParser.RULE_loopStatement = 9;
PlaygroundParser.RULE_whileStatement = 10;
PlaygroundParser.RULE_expression = 11;
PlaygroundParser.RULE_primary = 12;
PlaygroundParser.RULE_objectProperty = 13;
PlaygroundParser.RULE_objectMethodCall = 14;
PlaygroundParser.RULE_staticMethodCall = 15;
PlaygroundParser.RULE_objectIdentifier = 16;
PlaygroundParser.RULE_methodParam = 17;
PlaygroundParser.RULE_literal = 18;
PlaygroundParser.RULE_constantLiteral = 19;
PlaygroundParser.RULE_booleanOperator = 20;
PlaygroundParser.RULE_arithmeticOperator = 21;
PlaygroundParser.RULE_relationalOperator = 22;
PlaygroundParser.RULE_keyInput = 23;

function ParseContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_parse;
  return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.scope = function () {
  return this.getTypedRuleContext(ScopeContext, 0);
};

ParseContext.prototype.EOF = function () {
  return this.getToken(PlaygroundParser.EOF, 0);
};

ParseContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitParse(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ParseContext = ParseContext;

PlaygroundParser.prototype.parse = function () {
  const localctx = new ParseContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, PlaygroundParser.RULE_parse);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 48;
    this.scope();
    this.state = 49;
    this.match(PlaygroundParser.EOF);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ScopeContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_scope;
  return this;
}

ScopeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScopeContext.prototype.constructor = ScopeContext;

ScopeContext.prototype.statement = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(StatementContext);
  } else {
    return this.getTypedRuleContext(StatementContext, i);
  }
};

ScopeContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitScope(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ScopeContext = ScopeContext;

PlaygroundParser.prototype.scope = function () {
  const localctx = new ScopeContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, PlaygroundParser.RULE_scope);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 54;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.VAR) |
            (1 << PlaygroundParser.THIS) |
            (1 << PlaygroundParser.AT) |
            (1 << PlaygroundParser.WHILE) |
            (1 << PlaygroundParser.LOOP) |
            (1 << PlaygroundParser.IF))) !==
          0) ||
      _la === PlaygroundParser.IDENTIFIER
    ) {
      this.state = 51;
      this.statement();
      this.state = 56;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function StatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_statement;
  return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.eventStatement = function () {
  return this.getTypedRuleContext(EventStatementContext, 0);
};

StatementContext.prototype.objectMethodCall = function () {
  return this.getTypedRuleContext(ObjectMethodCallContext, 0);
};

StatementContext.prototype.staticMethodCall = function () {
  return this.getTypedRuleContext(StaticMethodCallContext, 0);
};

StatementContext.prototype.varDeclaration = function () {
  return this.getTypedRuleContext(VarDeclarationContext, 0);
};

StatementContext.prototype.varAssignment = function () {
  return this.getTypedRuleContext(VarAssignmentContext, 0);
};

StatementContext.prototype.objectPropertyAssignment = function () {
  return this.getTypedRuleContext(ObjectPropertyAssignmentContext, 0);
};

StatementContext.prototype.loopStatement = function () {
  return this.getTypedRuleContext(LoopStatementContext, 0);
};

StatementContext.prototype.whileStatement = function () {
  return this.getTypedRuleContext(WhileStatementContext, 0);
};

StatementContext.prototype.conditionalStatement = function () {
  return this.getTypedRuleContext(ConditionalStatementContext, 0);
};

StatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.StatementContext = StatementContext;

PlaygroundParser.prototype.statement = function () {
  const localctx = new StatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, PlaygroundParser.RULE_statement);
  try {
    this.state = 66;
    this._errHandler.sync(this);
    const la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.eventStatement();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 58;
        this.objectMethodCall();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 59;
        this.staticMethodCall();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 60;
        this.varDeclaration();
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 61;
        this.varAssignment();
        break;

      case 6:
        this.enterOuterAlt(localctx, 6);
        this.state = 62;
        this.objectPropertyAssignment();
        break;

      case 7:
        this.enterOuterAlt(localctx, 7);
        this.state = 63;
        this.loopStatement();
        break;

      case 8:
        this.enterOuterAlt(localctx, 8);
        this.state = 64;
        this.whileStatement();
        break;

      case 9:
        this.enterOuterAlt(localctx, 9);
        this.state = 65;
        this.conditionalStatement();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function VarDeclarationContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_varDeclaration;
  this.name = null; // Token
  this.assignment = null; // ExpressionContext
  return this;
}

VarDeclarationContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
VarDeclarationContext.prototype.constructor = VarDeclarationContext;

VarDeclarationContext.prototype.VAR = function () {
  return this.getToken(PlaygroundParser.VAR, 0);
};

VarDeclarationContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

VarDeclarationContext.prototype.ASSIGN = function () {
  return this.getToken(PlaygroundParser.ASSIGN, 0);
};

VarDeclarationContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

VarDeclarationContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitVarDeclaration(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.VarDeclarationContext = VarDeclarationContext;

PlaygroundParser.prototype.varDeclaration = function () {
  const localctx = new VarDeclarationContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, PlaygroundParser.RULE_varDeclaration);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 68;
    this.match(PlaygroundParser.VAR);
    this.state = 69;
    localctx.name = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 72;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PlaygroundParser.ASSIGN) {
      this.state = 70;
      this.match(PlaygroundParser.ASSIGN);
      this.state = 71;
      localctx.assignment = this.expression(0);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function VarAssignmentContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_varAssignment;
  this.name = null; // Token
  this.op = null; // Token
  this.assignment = null; // ExpressionContext
  return this;
}

VarAssignmentContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
VarAssignmentContext.prototype.constructor = VarAssignmentContext;

VarAssignmentContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

VarAssignmentContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

VarAssignmentContext.prototype.ASSIGN = function () {
  return this.getToken(PlaygroundParser.ASSIGN, 0);
};

VarAssignmentContext.prototype.INC = function () {
  return this.getToken(PlaygroundParser.INC, 0);
};

VarAssignmentContext.prototype.DEC = function () {
  return this.getToken(PlaygroundParser.DEC, 0);
};

VarAssignmentContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitVarAssignment(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.VarAssignmentContext = VarAssignmentContext;

PlaygroundParser.prototype.varAssignment = function () {
  const localctx = new VarAssignmentContext(this, this._ctx, this.state);
  this.enterRule(localctx, 8, PlaygroundParser.RULE_varAssignment);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 74;
    localctx.name = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 75;
    localctx.op = this._input.LT(1);
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.ASSIGN) |
            (1 << PlaygroundParser.INC) |
            (1 << PlaygroundParser.DEC))) !==
          0
      )
    ) {
      localctx.op = this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    this.state = 76;
    localctx.assignment = this.expression(0);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ObjectPropertyAssignmentContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_objectPropertyAssignment;
  this.property = null; // ObjectPropertyContext
  this.op = null; // Token
  this.assignment = null; // ExpressionContext
  return this;
}

ObjectPropertyAssignmentContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ObjectPropertyAssignmentContext.prototype.constructor = ObjectPropertyAssignmentContext;

ObjectPropertyAssignmentContext.prototype.objectProperty = function () {
  return this.getTypedRuleContext(ObjectPropertyContext, 0);
};

ObjectPropertyAssignmentContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

ObjectPropertyAssignmentContext.prototype.ASSIGN = function () {
  return this.getToken(PlaygroundParser.ASSIGN, 0);
};

ObjectPropertyAssignmentContext.prototype.INC = function () {
  return this.getToken(PlaygroundParser.INC, 0);
};

ObjectPropertyAssignmentContext.prototype.DEC = function () {
  return this.getToken(PlaygroundParser.DEC, 0);
};

ObjectPropertyAssignmentContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitObjectPropertyAssignment(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ObjectPropertyAssignmentContext = ObjectPropertyAssignmentContext;

PlaygroundParser.prototype.objectPropertyAssignment = function () {
  const localctx = new ObjectPropertyAssignmentContext(
    this,
    this._ctx,
    this.state,
  );
  this.enterRule(localctx, 10, PlaygroundParser.RULE_objectPropertyAssignment);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 78;
    localctx.property = this.objectProperty();
    this.state = 79;
    localctx.op = this._input.LT(1);
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.ASSIGN) |
            (1 << PlaygroundParser.INC) |
            (1 << PlaygroundParser.DEC))) !==
          0
      )
    ) {
      localctx.op = this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    this.state = 80;
    localctx.assignment = this.expression(0);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EventStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_eventStatement;
  this.eventName = null; // Token
  this.params = null; // EventParamsContext
  this.body = null; // ScopeContext
  return this;
}

EventStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
EventStatementContext.prototype.constructor = EventStatementContext;

EventStatementContext.prototype.AT = function () {
  return this.getToken(PlaygroundParser.AT, 0);
};

EventStatementContext.prototype.ASSIGN = function () {
  return this.getToken(PlaygroundParser.ASSIGN, 0);
};

EventStatementContext.prototype.LPAREN = function () {
  return this.getToken(PlaygroundParser.LPAREN, 0);
};

EventStatementContext.prototype.RPAREN = function () {
  return this.getToken(PlaygroundParser.RPAREN, 0);
};

EventStatementContext.prototype.ARROW = function () {
  return this.getToken(PlaygroundParser.ARROW, 0);
};

EventStatementContext.prototype.END = function () {
  return this.getToken(PlaygroundParser.END, 0);
};

EventStatementContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

EventStatementContext.prototype.scope = function () {
  return this.getTypedRuleContext(ScopeContext, 0);
};

EventStatementContext.prototype.eventParams = function () {
  return this.getTypedRuleContext(EventParamsContext, 0);
};

EventStatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitEventStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.EventStatementContext = EventStatementContext;

PlaygroundParser.prototype.eventStatement = function () {
  const localctx = new EventStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 12, PlaygroundParser.RULE_eventStatement);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 82;
    this.match(PlaygroundParser.AT);
    this.state = 83;
    localctx.eventName = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 84;
    this.match(PlaygroundParser.ASSIGN);
    this.state = 85;
    this.match(PlaygroundParser.LPAREN);
    this.state = 87;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PlaygroundParser.IDENTIFIER) {
      this.state = 86;
      localctx.params = this.eventParams();
    }

    this.state = 89;
    this.match(PlaygroundParser.RPAREN);
    this.state = 90;
    this.match(PlaygroundParser.ARROW);
    this.state = 91;
    localctx.body = this.scope();
    this.state = 92;
    this.match(PlaygroundParser.END);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function EventParamsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_eventParams;
  return this;
}

EventParamsContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
EventParamsContext.prototype.constructor = EventParamsContext;

EventParamsContext.prototype.IDENTIFIER = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PlaygroundParser.IDENTIFIER);
  } else {
    return this.getToken(PlaygroundParser.IDENTIFIER, i);
  }
};

EventParamsContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitEventParams(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.EventParamsContext = EventParamsContext;

PlaygroundParser.prototype.eventParams = function () {
  const localctx = new EventParamsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 14, PlaygroundParser.RULE_eventParams);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 94;
    this.match(PlaygroundParser.IDENTIFIER);
    this.state = 99;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === PlaygroundParser.T__0) {
      this.state = 95;
      this.match(PlaygroundParser.T__0);
      this.state = 96;
      this.match(PlaygroundParser.IDENTIFIER);
      this.state = 101;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ConditionalStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_conditionalStatement;
  return this;
}

ConditionalStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ConditionalStatementContext.prototype.constructor = ConditionalStatementContext;

ConditionalStatementContext.prototype.copyFrom = function (ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ElseIfConditionalContext(parser, ctx) {
  ConditionalStatementContext.call(this, parser);
  this.condition = null; // ExpressionContext;
  this.consequent = null; // ScopeContext;
  this.alternative = null; // ConditionalStatementContext;
  ConditionalStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ElseIfConditionalContext.prototype = Object.create(
  ConditionalStatementContext.prototype,
);
ElseIfConditionalContext.prototype.constructor = ElseIfConditionalContext;

PlaygroundParser.ElseIfConditionalContext = ElseIfConditionalContext;

ElseIfConditionalContext.prototype.IF = function () {
  return this.getToken(PlaygroundParser.IF, 0);
};

ElseIfConditionalContext.prototype.ELSE = function () {
  return this.getToken(PlaygroundParser.ELSE, 0);
};

ElseIfConditionalContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

ElseIfConditionalContext.prototype.scope = function () {
  return this.getTypedRuleContext(ScopeContext, 0);
};

ElseIfConditionalContext.prototype.conditionalStatement = function () {
  return this.getTypedRuleContext(ConditionalStatementContext, 0);
};
ElseIfConditionalContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitElseIfConditional(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function ThenConditionalContext(parser, ctx) {
  ConditionalStatementContext.call(this, parser);
  this.condition = null; // ExpressionContext;
  this.consequent = null; // ScopeContext;
  ConditionalStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ThenConditionalContext.prototype = Object.create(
  ConditionalStatementContext.prototype,
);
ThenConditionalContext.prototype.constructor = ThenConditionalContext;

PlaygroundParser.ThenConditionalContext = ThenConditionalContext;

ThenConditionalContext.prototype.IF = function () {
  return this.getToken(PlaygroundParser.IF, 0);
};

ThenConditionalContext.prototype.END = function () {
  return this.getToken(PlaygroundParser.END, 0);
};

ThenConditionalContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

ThenConditionalContext.prototype.scope = function () {
  return this.getTypedRuleContext(ScopeContext, 0);
};
ThenConditionalContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitThenConditional(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function ElseCondiitionalContext(parser, ctx) {
  ConditionalStatementContext.call(this, parser);
  this.condition = null; // ExpressionContext;
  this.consequent = null; // ScopeContext;
  this.alternative = null; // ScopeContext;
  ConditionalStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ElseCondiitionalContext.prototype = Object.create(
  ConditionalStatementContext.prototype,
);
ElseCondiitionalContext.prototype.constructor = ElseCondiitionalContext;

PlaygroundParser.ElseCondiitionalContext = ElseCondiitionalContext;

ElseCondiitionalContext.prototype.IF = function () {
  return this.getToken(PlaygroundParser.IF, 0);
};

ElseCondiitionalContext.prototype.ELSE = function () {
  return this.getToken(PlaygroundParser.ELSE, 0);
};

ElseCondiitionalContext.prototype.END = function () {
  return this.getToken(PlaygroundParser.END, 0);
};

ElseCondiitionalContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

ElseCondiitionalContext.prototype.scope = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ScopeContext);
  } else {
    return this.getTypedRuleContext(ScopeContext, i);
  }
};
ElseCondiitionalContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitElseCondiitional(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ConditionalStatementContext = ConditionalStatementContext;

PlaygroundParser.prototype.conditionalStatement = function () {
  let localctx = new ConditionalStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 16, PlaygroundParser.RULE_conditionalStatement);
  try {
    this.state = 120;
    this._errHandler.sync(this);
    const la_ = this._interp.adaptivePredict(this._input, 5, this._ctx);
    switch (la_) {
      case 1:
        localctx = new ElseIfConditionalContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(PlaygroundParser.IF);
        this.state = 103;
        localctx.condition = this.expression(0);
        this.state = 104;
        localctx.consequent = this.scope();
        this.state = 105;
        this.match(PlaygroundParser.ELSE);
        this.state = 106;
        localctx.alternative = this.conditionalStatement();
        break;

      case 2:
        localctx = new ElseCondiitionalContext(this, localctx);
        this.enterOuterAlt(localctx, 2);
        this.state = 108;
        this.match(PlaygroundParser.IF);
        this.state = 109;
        localctx.condition = this.expression(0);
        this.state = 110;
        localctx.consequent = this.scope();
        this.state = 111;
        this.match(PlaygroundParser.ELSE);
        this.state = 112;
        localctx.alternative = this.scope();
        this.state = 113;
        this.match(PlaygroundParser.END);
        break;

      case 3:
        localctx = new ThenConditionalContext(this, localctx);
        this.enterOuterAlt(localctx, 3);
        this.state = 115;
        this.match(PlaygroundParser.IF);
        this.state = 116;
        localctx.condition = this.expression(0);
        this.state = 117;
        localctx.consequent = this.scope();
        this.state = 118;
        this.match(PlaygroundParser.END);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function LoopStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_loopStatement;
  this.iterations = null; // ExpressionContext
  this.body = null; // ScopeContext
  return this;
}

LoopStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
LoopStatementContext.prototype.constructor = LoopStatementContext;

LoopStatementContext.prototype.LOOP = function () {
  return this.getToken(PlaygroundParser.LOOP, 0);
};

LoopStatementContext.prototype.END = function () {
  return this.getToken(PlaygroundParser.END, 0);
};

LoopStatementContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

LoopStatementContext.prototype.scope = function () {
  return this.getTypedRuleContext(ScopeContext, 0);
};

LoopStatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitLoopStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.LoopStatementContext = LoopStatementContext;

PlaygroundParser.prototype.loopStatement = function () {
  const localctx = new LoopStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 18, PlaygroundParser.RULE_loopStatement);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 122;
    this.match(PlaygroundParser.LOOP);
    this.state = 123;
    localctx.iterations = this.expression(0);
    this.state = 124;
    localctx.body = this.scope();
    this.state = 125;
    this.match(PlaygroundParser.END);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function WhileStatementContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_whileStatement;
  this.condition = null; // ExpressionContext
  this.body = null; // ScopeContext
  return this;
}

WhileStatementContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.WHILE = function () {
  return this.getToken(PlaygroundParser.WHILE, 0);
};

WhileStatementContext.prototype.END = function () {
  return this.getToken(PlaygroundParser.END, 0);
};

WhileStatementContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};

WhileStatementContext.prototype.scope = function () {
  return this.getTypedRuleContext(ScopeContext, 0);
};

WhileStatementContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitWhileStatement(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.WhileStatementContext = WhileStatementContext;

PlaygroundParser.prototype.whileStatement = function () {
  const localctx = new WhileStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 20, PlaygroundParser.RULE_whileStatement);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 127;
    this.match(PlaygroundParser.WHILE);
    this.state = 128;
    localctx.condition = this.expression(0);
    this.state = 129;
    localctx.body = this.scope();
    this.state = 130;
    this.match(PlaygroundParser.END);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_expression;
  return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.copyFrom = function (ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function StaticCallExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

StaticCallExprContext.prototype = Object.create(ExpressionContext.prototype);
StaticCallExprContext.prototype.constructor = StaticCallExprContext;

PlaygroundParser.StaticCallExprContext = StaticCallExprContext;

StaticCallExprContext.prototype.staticMethodCall = function () {
  return this.getTypedRuleContext(StaticMethodCallContext, 0);
};
StaticCallExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitStaticCallExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function UnaryExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  this.op = null; // Token;
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

UnaryExprContext.prototype = Object.create(ExpressionContext.prototype);
UnaryExprContext.prototype.constructor = UnaryExprContext;

PlaygroundParser.UnaryExprContext = UnaryExprContext;

UnaryExprContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};
UnaryExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitUnaryExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function AddSubExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  this.op = null; // Token;
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

AddSubExprContext.prototype = Object.create(ExpressionContext.prototype);
AddSubExprContext.prototype.constructor = AddSubExprContext;

PlaygroundParser.AddSubExprContext = AddSubExprContext;

AddSubExprContext.prototype.expression = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ExpressionContext);
  } else {
    return this.getTypedRuleContext(ExpressionContext, i);
  }
};
AddSubExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitAddSubExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function PrimaryExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

PrimaryExprContext.prototype = Object.create(ExpressionContext.prototype);
PrimaryExprContext.prototype.constructor = PrimaryExprContext;

PlaygroundParser.PrimaryExprContext = PrimaryExprContext;

PrimaryExprContext.prototype.primary = function () {
  return this.getTypedRuleContext(PrimaryContext, 0);
};
PrimaryExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitPrimaryExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function BooleanExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  this.op = null; // Token;
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

BooleanExprContext.prototype = Object.create(ExpressionContext.prototype);
BooleanExprContext.prototype.constructor = BooleanExprContext;

PlaygroundParser.BooleanExprContext = BooleanExprContext;

BooleanExprContext.prototype.expression = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ExpressionContext);
  } else {
    return this.getTypedRuleContext(ExpressionContext, i);
  }
};
BooleanExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitBooleanExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function ObjectPropExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ObjectPropExprContext.prototype = Object.create(ExpressionContext.prototype);
ObjectPropExprContext.prototype.constructor = ObjectPropExprContext;

PlaygroundParser.ObjectPropExprContext = ObjectPropExprContext;

ObjectPropExprContext.prototype.objectProperty = function () {
  return this.getTypedRuleContext(ObjectPropertyContext, 0);
};
ObjectPropExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitObjectPropExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function ComparisonExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  this.op = null; // Token;
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ComparisonExprContext.prototype = Object.create(ExpressionContext.prototype);
ComparisonExprContext.prototype.constructor = ComparisonExprContext;

PlaygroundParser.ComparisonExprContext = ComparisonExprContext;

ComparisonExprContext.prototype.expression = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ExpressionContext);
  } else {
    return this.getTypedRuleContext(ExpressionContext, i);
  }
};
ComparisonExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitComparisonExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function ParensExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ParensExprContext.prototype = Object.create(ExpressionContext.prototype);
ParensExprContext.prototype.constructor = ParensExprContext;

PlaygroundParser.ParensExprContext = ParensExprContext;

ParensExprContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};
ParensExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitParensExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function ObjectCallExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ObjectCallExprContext.prototype = Object.create(ExpressionContext.prototype);
ObjectCallExprContext.prototype.constructor = ObjectCallExprContext;

PlaygroundParser.ObjectCallExprContext = ObjectCallExprContext;

ObjectCallExprContext.prototype.objectMethodCall = function () {
  return this.getTypedRuleContext(ObjectMethodCallContext, 0);
};
ObjectCallExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitObjectCallExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function MulDivExprContext(parser, ctx) {
  ExpressionContext.call(this, parser);
  this.op = null; // Token;
  ExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

MulDivExprContext.prototype = Object.create(ExpressionContext.prototype);
MulDivExprContext.prototype.constructor = MulDivExprContext;

PlaygroundParser.MulDivExprContext = MulDivExprContext;

MulDivExprContext.prototype.expression = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ExpressionContext);
  } else {
    return this.getTypedRuleContext(ExpressionContext, i);
  }
};
MulDivExprContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitMulDivExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.prototype.expression = function (_p) {
  if (_p === undefined) {
    _p = 0;
  }
  const _parentctx = this._ctx;
  const _parentState = this.state;
  let localctx = new ExpressionContext(this, this._ctx, _parentState);
  let _prevctx = localctx;
  const _startState = 22;
  this.enterRecursionRule(localctx, 22, PlaygroundParser.RULE_expression, _p);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 143;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 6, this._ctx);
    switch (la_) {
      case 1:
        localctx = new PrimaryExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 133;
        this.primary();
        break;

      case 2:
        localctx = new ObjectPropExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 134;
        this.objectProperty();
        break;

      case 3:
        localctx = new ObjectCallExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 135;
        this.objectMethodCall();
        break;

      case 4:
        localctx = new StaticCallExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 136;
        this.staticMethodCall();
        break;

      case 5:
        localctx = new ParensExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 137;
        this.match(PlaygroundParser.LPAREN);
        this.state = 138;
        this.expression(0);
        this.state = 139;
        this.match(PlaygroundParser.RPAREN);
        break;

      case 6:
        localctx = new UnaryExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 141;
        localctx.op = this._input.LT(1);
        _la = this._input.LA(1);
        if (!(_la === PlaygroundParser.NOT || _la === PlaygroundParser.SUB)) {
          localctx.op = this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 142;
        this.expression(6);
        break;
    }
    this._ctx.stop = this._input.LT(-1);
    this.state = 162;
    this._errHandler.sync(this);
    let _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        if (this._parseListeners !== null) {
          this.triggerExitRuleEvent();
        }
        _prevctx = localctx;
        this.state = 160;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
        switch (la_) {
          case 1:
            localctx = new MulDivExprContext(
              this,
              new ExpressionContext(this, _parentctx, _parentState),
            );
            this.pushNewRecursionContext(
              localctx,
              _startState,
              PlaygroundParser.RULE_expression,
            );
            this.state = 145;
            if (!this.precpred(this._ctx, 5)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 5)',
              );
            }
            this.state = 146;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(_la === PlaygroundParser.MUL || _la === PlaygroundParser.DIV)
            ) {
              localctx.op = this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 147;
            this.expression(6);
            break;

          case 2:
            localctx = new AddSubExprContext(
              this,
              new ExpressionContext(this, _parentctx, _parentState),
            );
            this.pushNewRecursionContext(
              localctx,
              _startState,
              PlaygroundParser.RULE_expression,
            );
            this.state = 148;
            if (!this.precpred(this._ctx, 4)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 4)',
              );
            }
            this.state = 149;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(_la === PlaygroundParser.ADD || _la === PlaygroundParser.SUB)
            ) {
              localctx.op = this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 150;
            this.expression(5);
            break;

          case 3:
            localctx = new ComparisonExprContext(
              this,
              new ExpressionContext(this, _parentctx, _parentState),
            );
            this.pushNewRecursionContext(
              localctx,
              _startState,
              PlaygroundParser.RULE_expression,
            );
            this.state = 151;
            if (!this.precpred(this._ctx, 3)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 3)',
              );
            }
            this.state = 152;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(
                ((_la - 28) & ~0x1f) == 0 &&
                ((1 << (_la - 28)) &
                  ((1 << (PlaygroundParser.EQUAL - 28)) |
                    (1 << (PlaygroundParser.NOTEQUAL - 28)) |
                    (1 << (PlaygroundParser.GT - 28)) |
                    (1 << (PlaygroundParser.LT - 28)) |
                    (1 << (PlaygroundParser.GE - 28)) |
                    (1 << (PlaygroundParser.LE - 28)))) !==
                  0
              )
            ) {
              localctx.op = this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 153;
            this.expression(4);
            break;

          case 4:
            localctx = new BooleanExprContext(
              this,
              new ExpressionContext(this, _parentctx, _parentState),
            );
            this.pushNewRecursionContext(
              localctx,
              _startState,
              PlaygroundParser.RULE_expression,
            );
            this.state = 154;
            if (!this.precpred(this._ctx, 2)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 2)',
              );
            }
            this.state = 155;
            localctx.op = this.match(PlaygroundParser.AND);
            this.state = 156;
            this.expression(3);
            break;

          case 5:
            localctx = new BooleanExprContext(
              this,
              new ExpressionContext(this, _parentctx, _parentState),
            );
            this.pushNewRecursionContext(
              localctx,
              _startState,
              PlaygroundParser.RULE_expression,
            );
            this.state = 157;
            if (!this.precpred(this._ctx, 1)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 1)',
              );
            }
            this.state = 158;
            localctx.op = this.match(PlaygroundParser.OR);
            this.state = 159;
            this.expression(2);
            break;
        }
      }
      this.state = 164;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
    }
  } catch (error) {
    if (error instanceof antlr4.error.RecognitionException) {
      localctx.exception = error;
      this._errHandler.reportError(this, error);
      this._errHandler.recover(this, error);
    } else {
      throw error;
    }
  } finally {
    this.unrollRecursionContexts(_parentctx);
  }
  return localctx;
};

function PrimaryContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_primary;
  return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.objectIdentifier = function () {
  return this.getTypedRuleContext(ObjectIdentifierContext, 0);
};

PrimaryContext.prototype.literal = function () {
  return this.getTypedRuleContext(LiteralContext, 0);
};

PrimaryContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitPrimary(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.PrimaryContext = PrimaryContext;

PlaygroundParser.prototype.primary = function () {
  const localctx = new PrimaryContext(this, this._ctx, this.state);
  this.enterRule(localctx, 24, PlaygroundParser.RULE_primary);
  try {
    this.state = 167;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PlaygroundParser.THIS:
      case PlaygroundParser.IDENTIFIER:
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.objectIdentifier();
        break;
      case PlaygroundParser.BOOL_LITERAL:
      case PlaygroundParser.NUMBER_LITERAL:
      case PlaygroundParser.STRING_LITERAL:
      case PlaygroundParser.ADD:
      case PlaygroundParser.SUB:
      case PlaygroundParser.ARROWUP:
      case PlaygroundParser.ARROWDOWN:
      case PlaygroundParser.ARROWLEFT:
      case PlaygroundParser.ARROWRIGHT:
      case PlaygroundParser.SPACE:
      case PlaygroundParser.SPACEBAR:
      case PlaygroundParser.KEYA:
      case PlaygroundParser.KEYB:
      case PlaygroundParser.KEYC:
      case PlaygroundParser.KEYD:
      case PlaygroundParser.KEYE:
      case PlaygroundParser.KEYF:
      case PlaygroundParser.KEYG:
      case PlaygroundParser.KEYH:
      case PlaygroundParser.KEYI:
      case PlaygroundParser.KEYJ:
      case PlaygroundParser.KEYK:
      case PlaygroundParser.KEYL:
      case PlaygroundParser.KEYM:
      case PlaygroundParser.KEYN:
      case PlaygroundParser.KEYO:
      case PlaygroundParser.KEYP:
      case PlaygroundParser.KEYQ:
      case PlaygroundParser.KEYR:
      case PlaygroundParser.KEYS:
      case PlaygroundParser.KEYT:
      case PlaygroundParser.KEYU:
      case PlaygroundParser.KEYV:
      case PlaygroundParser.KEYW:
      case PlaygroundParser.KEYX:
      case PlaygroundParser.KEYY:
      case PlaygroundParser.KEYZ:
      case PlaygroundParser.KEY0:
      case PlaygroundParser.KEY1:
      case PlaygroundParser.KEY2:
      case PlaygroundParser.KEY3:
      case PlaygroundParser.KEY4:
      case PlaygroundParser.KEY5:
      case PlaygroundParser.KEY6:
      case PlaygroundParser.KEY7:
      case PlaygroundParser.KEY8:
      case PlaygroundParser.KEY9:
        this.enterOuterAlt(localctx, 2);
        this.state = 166;
        this.literal();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ObjectPropertyContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_objectProperty;
  this.object = null; // ObjectIdentifierContext
  this.method = null; // Token
  return this;
}

ObjectPropertyContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ObjectPropertyContext.prototype.constructor = ObjectPropertyContext;

ObjectPropertyContext.prototype.DOT = function () {
  return this.getToken(PlaygroundParser.DOT, 0);
};

ObjectPropertyContext.prototype.objectIdentifier = function () {
  return this.getTypedRuleContext(ObjectIdentifierContext, 0);
};

ObjectPropertyContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

ObjectPropertyContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitObjectProperty(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ObjectPropertyContext = ObjectPropertyContext;

PlaygroundParser.prototype.objectProperty = function () {
  const localctx = new ObjectPropertyContext(this, this._ctx, this.state);
  this.enterRule(localctx, 26, PlaygroundParser.RULE_objectProperty);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 169;
    localctx.object = this.objectIdentifier();
    this.state = 170;
    this.match(PlaygroundParser.DOT);
    this.state = 171;
    localctx.method = this.match(PlaygroundParser.IDENTIFIER);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ObjectMethodCallContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_objectMethodCall;
  this.object = null; // ObjectIdentifierContext
  this.method = null; // Token
  return this;
}

ObjectMethodCallContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ObjectMethodCallContext.prototype.constructor = ObjectMethodCallContext;

ObjectMethodCallContext.prototype.DOT = function () {
  return this.getToken(PlaygroundParser.DOT, 0);
};

ObjectMethodCallContext.prototype.LPAREN = function () {
  return this.getToken(PlaygroundParser.LPAREN, 0);
};

ObjectMethodCallContext.prototype.RPAREN = function () {
  return this.getToken(PlaygroundParser.RPAREN, 0);
};

ObjectMethodCallContext.prototype.objectIdentifier = function () {
  return this.getTypedRuleContext(ObjectIdentifierContext, 0);
};

ObjectMethodCallContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

ObjectMethodCallContext.prototype.methodParam = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(MethodParamContext);
  } else {
    return this.getTypedRuleContext(MethodParamContext, i);
  }
};

ObjectMethodCallContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitObjectMethodCall(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ObjectMethodCallContext = ObjectMethodCallContext;

PlaygroundParser.prototype.objectMethodCall = function () {
  const localctx = new ObjectMethodCallContext(this, this._ctx, this.state);
  this.enterRule(localctx, 28, PlaygroundParser.RULE_objectMethodCall);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 173;
    localctx.object = this.objectIdentifier();
    this.state = 174;
    this.match(PlaygroundParser.DOT);
    this.state = 175;
    localctx.method = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 176;
    this.match(PlaygroundParser.LPAREN);
    this.state = 185;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.THIS) |
            (1 << PlaygroundParser.BOOL_LITERAL) |
            (1 << PlaygroundParser.NUMBER_LITERAL) |
            (1 << PlaygroundParser.STRING_LITERAL) |
            (1 << PlaygroundParser.LPAREN) |
            (1 << PlaygroundParser.NOT) |
            (1 << PlaygroundParser.ADD) |
            (1 << PlaygroundParser.SUB))) !==
          0) ||
      (((_la - 35) & ~0x1f) == 0 &&
        ((1 << (_la - 35)) &
          ((1 << (PlaygroundParser.ARROWUP - 35)) |
            (1 << (PlaygroundParser.ARROWDOWN - 35)) |
            (1 << (PlaygroundParser.ARROWLEFT - 35)) |
            (1 << (PlaygroundParser.ARROWRIGHT - 35)) |
            (1 << (PlaygroundParser.SPACE - 35)) |
            (1 << (PlaygroundParser.SPACEBAR - 35)) |
            (1 << (PlaygroundParser.KEYA - 35)) |
            (1 << (PlaygroundParser.KEYB - 35)) |
            (1 << (PlaygroundParser.KEYC - 35)) |
            (1 << (PlaygroundParser.KEYD - 35)) |
            (1 << (PlaygroundParser.KEYE - 35)) |
            (1 << (PlaygroundParser.KEYF - 35)) |
            (1 << (PlaygroundParser.KEYG - 35)) |
            (1 << (PlaygroundParser.KEYH - 35)) |
            (1 << (PlaygroundParser.KEYI - 35)) |
            (1 << (PlaygroundParser.KEYJ - 35)) |
            (1 << (PlaygroundParser.KEYK - 35)) |
            (1 << (PlaygroundParser.KEYL - 35)) |
            (1 << (PlaygroundParser.KEYM - 35)) |
            (1 << (PlaygroundParser.KEYN - 35)) |
            (1 << (PlaygroundParser.KEYO - 35)) |
            (1 << (PlaygroundParser.KEYP - 35)) |
            (1 << (PlaygroundParser.KEYQ - 35)) |
            (1 << (PlaygroundParser.KEYR - 35)) |
            (1 << (PlaygroundParser.KEYS - 35)) |
            (1 << (PlaygroundParser.KEYT - 35)) |
            (1 << (PlaygroundParser.KEYU - 35)) |
            (1 << (PlaygroundParser.KEYV - 35)) |
            (1 << (PlaygroundParser.KEYW - 35)) |
            (1 << (PlaygroundParser.KEYX - 35)) |
            (1 << (PlaygroundParser.KEYY - 35)) |
            (1 << (PlaygroundParser.KEYZ - 35)))) !==
          0) ||
      (((_la - 67) & ~0x1f) == 0 &&
        ((1 << (_la - 67)) &
          ((1 << (PlaygroundParser.KEY0 - 67)) |
            (1 << (PlaygroundParser.KEY1 - 67)) |
            (1 << (PlaygroundParser.KEY2 - 67)) |
            (1 << (PlaygroundParser.KEY3 - 67)) |
            (1 << (PlaygroundParser.KEY4 - 67)) |
            (1 << (PlaygroundParser.KEY5 - 67)) |
            (1 << (PlaygroundParser.KEY6 - 67)) |
            (1 << (PlaygroundParser.KEY7 - 67)) |
            (1 << (PlaygroundParser.KEY8 - 67)) |
            (1 << (PlaygroundParser.KEY9 - 67)) |
            (1 << (PlaygroundParser.IDENTIFIER - 67)))) !==
          0)
    ) {
      this.state = 177;
      this.methodParam();
      this.state = 182;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === PlaygroundParser.T__0) {
        this.state = 178;
        this.match(PlaygroundParser.T__0);
        this.state = 179;
        this.methodParam();
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    }

    this.state = 187;
    this.match(PlaygroundParser.RPAREN);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function StaticMethodCallContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_staticMethodCall;
  this.method = null; // Token
  return this;
}

StaticMethodCallContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
StaticMethodCallContext.prototype.constructor = StaticMethodCallContext;

StaticMethodCallContext.prototype.LPAREN = function () {
  return this.getToken(PlaygroundParser.LPAREN, 0);
};

StaticMethodCallContext.prototype.RPAREN = function () {
  return this.getToken(PlaygroundParser.RPAREN, 0);
};

StaticMethodCallContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

StaticMethodCallContext.prototype.methodParam = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(MethodParamContext);
  } else {
    return this.getTypedRuleContext(MethodParamContext, i);
  }
};

StaticMethodCallContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitStaticMethodCall(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.StaticMethodCallContext = StaticMethodCallContext;

PlaygroundParser.prototype.staticMethodCall = function () {
  const localctx = new StaticMethodCallContext(this, this._ctx, this.state);
  this.enterRule(localctx, 30, PlaygroundParser.RULE_staticMethodCall);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 189;
    localctx.method = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 190;
    this.match(PlaygroundParser.LPAREN);
    this.state = 199;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.THIS) |
            (1 << PlaygroundParser.BOOL_LITERAL) |
            (1 << PlaygroundParser.NUMBER_LITERAL) |
            (1 << PlaygroundParser.STRING_LITERAL) |
            (1 << PlaygroundParser.LPAREN) |
            (1 << PlaygroundParser.NOT) |
            (1 << PlaygroundParser.ADD) |
            (1 << PlaygroundParser.SUB))) !==
          0) ||
      (((_la - 35) & ~0x1f) == 0 &&
        ((1 << (_la - 35)) &
          ((1 << (PlaygroundParser.ARROWUP - 35)) |
            (1 << (PlaygroundParser.ARROWDOWN - 35)) |
            (1 << (PlaygroundParser.ARROWLEFT - 35)) |
            (1 << (PlaygroundParser.ARROWRIGHT - 35)) |
            (1 << (PlaygroundParser.SPACE - 35)) |
            (1 << (PlaygroundParser.SPACEBAR - 35)) |
            (1 << (PlaygroundParser.KEYA - 35)) |
            (1 << (PlaygroundParser.KEYB - 35)) |
            (1 << (PlaygroundParser.KEYC - 35)) |
            (1 << (PlaygroundParser.KEYD - 35)) |
            (1 << (PlaygroundParser.KEYE - 35)) |
            (1 << (PlaygroundParser.KEYF - 35)) |
            (1 << (PlaygroundParser.KEYG - 35)) |
            (1 << (PlaygroundParser.KEYH - 35)) |
            (1 << (PlaygroundParser.KEYI - 35)) |
            (1 << (PlaygroundParser.KEYJ - 35)) |
            (1 << (PlaygroundParser.KEYK - 35)) |
            (1 << (PlaygroundParser.KEYL - 35)) |
            (1 << (PlaygroundParser.KEYM - 35)) |
            (1 << (PlaygroundParser.KEYN - 35)) |
            (1 << (PlaygroundParser.KEYO - 35)) |
            (1 << (PlaygroundParser.KEYP - 35)) |
            (1 << (PlaygroundParser.KEYQ - 35)) |
            (1 << (PlaygroundParser.KEYR - 35)) |
            (1 << (PlaygroundParser.KEYS - 35)) |
            (1 << (PlaygroundParser.KEYT - 35)) |
            (1 << (PlaygroundParser.KEYU - 35)) |
            (1 << (PlaygroundParser.KEYV - 35)) |
            (1 << (PlaygroundParser.KEYW - 35)) |
            (1 << (PlaygroundParser.KEYX - 35)) |
            (1 << (PlaygroundParser.KEYY - 35)) |
            (1 << (PlaygroundParser.KEYZ - 35)))) !==
          0) ||
      (((_la - 67) & ~0x1f) == 0 &&
        ((1 << (_la - 67)) &
          ((1 << (PlaygroundParser.KEY0 - 67)) |
            (1 << (PlaygroundParser.KEY1 - 67)) |
            (1 << (PlaygroundParser.KEY2 - 67)) |
            (1 << (PlaygroundParser.KEY3 - 67)) |
            (1 << (PlaygroundParser.KEY4 - 67)) |
            (1 << (PlaygroundParser.KEY5 - 67)) |
            (1 << (PlaygroundParser.KEY6 - 67)) |
            (1 << (PlaygroundParser.KEY7 - 67)) |
            (1 << (PlaygroundParser.KEY8 - 67)) |
            (1 << (PlaygroundParser.KEY9 - 67)) |
            (1 << (PlaygroundParser.IDENTIFIER - 67)))) !==
          0)
    ) {
      this.state = 191;
      this.methodParam();
      this.state = 196;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === PlaygroundParser.T__0) {
        this.state = 192;
        this.match(PlaygroundParser.T__0);
        this.state = 193;
        this.methodParam();
        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    }

    this.state = 201;
    this.match(PlaygroundParser.RPAREN);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ObjectIdentifierContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_objectIdentifier;
  return this;
}

ObjectIdentifierContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ObjectIdentifierContext.prototype.constructor = ObjectIdentifierContext;

ObjectIdentifierContext.prototype.THIS = function () {
  return this.getToken(PlaygroundParser.THIS, 0);
};

ObjectIdentifierContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

ObjectIdentifierContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitObjectIdentifier(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ObjectIdentifierContext = ObjectIdentifierContext;

PlaygroundParser.prototype.objectIdentifier = function () {
  const localctx = new ObjectIdentifierContext(this, this._ctx, this.state);
  this.enterRule(localctx, 32, PlaygroundParser.RULE_objectIdentifier);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 203;
    _la = this._input.LA(1);
    if (
      !(_la === PlaygroundParser.THIS || _la === PlaygroundParser.IDENTIFIER)
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MethodParamContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_methodParam;
  return this;
}

MethodParamContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
MethodParamContext.prototype.constructor = MethodParamContext;

MethodParamContext.prototype.copyFrom = function (ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ExpressionParamContext(parser, ctx) {
  MethodParamContext.call(this, parser);
  MethodParamContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ExpressionParamContext.prototype = Object.create(MethodParamContext.prototype);
ExpressionParamContext.prototype.constructor = ExpressionParamContext;

PlaygroundParser.ExpressionParamContext = ExpressionParamContext;

ExpressionParamContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
};
ExpressionParamContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitExpressionParam(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function LiteralParamContext(parser, ctx) {
  MethodParamContext.call(this, parser);
  MethodParamContext.prototype.copyFrom.call(this, ctx);
  return this;
}

LiteralParamContext.prototype = Object.create(MethodParamContext.prototype);
LiteralParamContext.prototype.constructor = LiteralParamContext;

PlaygroundParser.LiteralParamContext = LiteralParamContext;

LiteralParamContext.prototype.literal = function () {
  return this.getTypedRuleContext(LiteralContext, 0);
};
LiteralParamContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitLiteralParam(this);
  } else {
    return visitor.visitChildren(this);
  }
};

function IdentifierParamContext(parser, ctx) {
  MethodParamContext.call(this, parser);
  MethodParamContext.prototype.copyFrom.call(this, ctx);
  return this;
}

IdentifierParamContext.prototype = Object.create(MethodParamContext.prototype);
IdentifierParamContext.prototype.constructor = IdentifierParamContext;

PlaygroundParser.IdentifierParamContext = IdentifierParamContext;

IdentifierParamContext.prototype.objectIdentifier = function () {
  return this.getTypedRuleContext(ObjectIdentifierContext, 0);
};
IdentifierParamContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitIdentifierParam(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.MethodParamContext = MethodParamContext;

PlaygroundParser.prototype.methodParam = function () {
  let localctx = new MethodParamContext(this, this._ctx, this.state);
  this.enterRule(localctx, 34, PlaygroundParser.RULE_methodParam);
  try {
    this.state = 208;
    this._errHandler.sync(this);
    const la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
    switch (la_) {
      case 1:
        localctx = new IdentifierParamContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.objectIdentifier();
        break;

      case 2:
        localctx = new LiteralParamContext(this, localctx);
        this.enterOuterAlt(localctx, 2);
        this.state = 206;
        this.literal();
        break;

      case 3:
        localctx = new ExpressionParamContext(this, localctx);
        this.enterOuterAlt(localctx, 3);
        this.state = 207;
        this.expression(0);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function LiteralContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_literal;
  this.sign = null; // Token
  return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NUMBER_LITERAL = function () {
  return this.getToken(PlaygroundParser.NUMBER_LITERAL, 0);
};

LiteralContext.prototype.BOOL_LITERAL = function () {
  return this.getToken(PlaygroundParser.BOOL_LITERAL, 0);
};

LiteralContext.prototype.STRING_LITERAL = function () {
  return this.getToken(PlaygroundParser.STRING_LITERAL, 0);
};

LiteralContext.prototype.constantLiteral = function () {
  return this.getTypedRuleContext(ConstantLiteralContext, 0);
};

LiteralContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitLiteral(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.LiteralContext = LiteralContext;

PlaygroundParser.prototype.literal = function () {
  const localctx = new LiteralContext(this, this._ctx, this.state);
  this.enterRule(localctx, 36, PlaygroundParser.RULE_literal);
  let _la = 0; // Token type
  try {
    this.state = 217;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PlaygroundParser.NUMBER_LITERAL:
      case PlaygroundParser.ADD:
      case PlaygroundParser.SUB:
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PlaygroundParser.ADD || _la === PlaygroundParser.SUB) {
          this.state = 210;
          localctx.sign = this._input.LT(1);
          _la = this._input.LA(1);
          if (!(_la === PlaygroundParser.ADD || _la === PlaygroundParser.SUB)) {
            localctx.sign = this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
        }

        this.state = 213;
        this.match(PlaygroundParser.NUMBER_LITERAL);
        break;
      case PlaygroundParser.BOOL_LITERAL:
        this.enterOuterAlt(localctx, 2);
        this.state = 214;
        this.match(PlaygroundParser.BOOL_LITERAL);
        break;
      case PlaygroundParser.STRING_LITERAL:
        this.enterOuterAlt(localctx, 3);
        this.state = 215;
        this.match(PlaygroundParser.STRING_LITERAL);
        break;
      case PlaygroundParser.ARROWUP:
      case PlaygroundParser.ARROWDOWN:
      case PlaygroundParser.ARROWLEFT:
      case PlaygroundParser.ARROWRIGHT:
      case PlaygroundParser.SPACE:
      case PlaygroundParser.SPACEBAR:
      case PlaygroundParser.KEYA:
      case PlaygroundParser.KEYB:
      case PlaygroundParser.KEYC:
      case PlaygroundParser.KEYD:
      case PlaygroundParser.KEYE:
      case PlaygroundParser.KEYF:
      case PlaygroundParser.KEYG:
      case PlaygroundParser.KEYH:
      case PlaygroundParser.KEYI:
      case PlaygroundParser.KEYJ:
      case PlaygroundParser.KEYK:
      case PlaygroundParser.KEYL:
      case PlaygroundParser.KEYM:
      case PlaygroundParser.KEYN:
      case PlaygroundParser.KEYO:
      case PlaygroundParser.KEYP:
      case PlaygroundParser.KEYQ:
      case PlaygroundParser.KEYR:
      case PlaygroundParser.KEYS:
      case PlaygroundParser.KEYT:
      case PlaygroundParser.KEYU:
      case PlaygroundParser.KEYV:
      case PlaygroundParser.KEYW:
      case PlaygroundParser.KEYX:
      case PlaygroundParser.KEYY:
      case PlaygroundParser.KEYZ:
      case PlaygroundParser.KEY0:
      case PlaygroundParser.KEY1:
      case PlaygroundParser.KEY2:
      case PlaygroundParser.KEY3:
      case PlaygroundParser.KEY4:
      case PlaygroundParser.KEY5:
      case PlaygroundParser.KEY6:
      case PlaygroundParser.KEY7:
      case PlaygroundParser.KEY8:
      case PlaygroundParser.KEY9:
        this.enterOuterAlt(localctx, 4);
        this.state = 216;
        this.constantLiteral();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ConstantLiteralContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_constantLiteral;
  return this;
}

ConstantLiteralContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ConstantLiteralContext.prototype.constructor = ConstantLiteralContext;

ConstantLiteralContext.prototype.keyInput = function () {
  return this.getTypedRuleContext(KeyInputContext, 0);
};

ConstantLiteralContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitConstantLiteral(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ConstantLiteralContext = ConstantLiteralContext;

PlaygroundParser.prototype.constantLiteral = function () {
  const localctx = new ConstantLiteralContext(this, this._ctx, this.state);
  this.enterRule(localctx, 38, PlaygroundParser.RULE_constantLiteral);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 219;
    this.keyInput();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function BooleanOperatorContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_booleanOperator;
  return this;
}

BooleanOperatorContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
BooleanOperatorContext.prototype.constructor = BooleanOperatorContext;

BooleanOperatorContext.prototype.AND = function () {
  return this.getToken(PlaygroundParser.AND, 0);
};

BooleanOperatorContext.prototype.OR = function () {
  return this.getToken(PlaygroundParser.OR, 0);
};

BooleanOperatorContext.prototype.NOT = function () {
  return this.getToken(PlaygroundParser.NOT, 0);
};

BooleanOperatorContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitBooleanOperator(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.BooleanOperatorContext = BooleanOperatorContext;

PlaygroundParser.prototype.booleanOperator = function () {
  const localctx = new BooleanOperatorContext(this, this._ctx, this.state);
  this.enterRule(localctx, 40, PlaygroundParser.RULE_booleanOperator);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 221;
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.AND) |
            (1 << PlaygroundParser.OR) |
            (1 << PlaygroundParser.NOT))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ArithmeticOperatorContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_arithmeticOperator;
  return this;
}

ArithmeticOperatorContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ArithmeticOperatorContext.prototype.constructor = ArithmeticOperatorContext;

ArithmeticOperatorContext.prototype.ADD = function () {
  return this.getToken(PlaygroundParser.ADD, 0);
};

ArithmeticOperatorContext.prototype.SUB = function () {
  return this.getToken(PlaygroundParser.SUB, 0);
};

ArithmeticOperatorContext.prototype.MUL = function () {
  return this.getToken(PlaygroundParser.MUL, 0);
};

ArithmeticOperatorContext.prototype.DIV = function () {
  return this.getToken(PlaygroundParser.DIV, 0);
};

ArithmeticOperatorContext.prototype.MOD = function () {
  return this.getToken(PlaygroundParser.MOD, 0);
};

ArithmeticOperatorContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitArithmeticOperator(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.ArithmeticOperatorContext = ArithmeticOperatorContext;

PlaygroundParser.prototype.arithmeticOperator = function () {
  const localctx = new ArithmeticOperatorContext(this, this._ctx, this.state);
  this.enterRule(localctx, 42, PlaygroundParser.RULE_arithmeticOperator);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 223;
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.ADD) |
            (1 << PlaygroundParser.SUB) |
            (1 << PlaygroundParser.MUL) |
            (1 << PlaygroundParser.DIV) |
            (1 << PlaygroundParser.MOD))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function RelationalOperatorContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_relationalOperator;
  return this;
}

RelationalOperatorContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
RelationalOperatorContext.prototype.constructor = RelationalOperatorContext;

RelationalOperatorContext.prototype.GT = function () {
  return this.getToken(PlaygroundParser.GT, 0);
};

RelationalOperatorContext.prototype.LT = function () {
  return this.getToken(PlaygroundParser.LT, 0);
};

RelationalOperatorContext.prototype.GE = function () {
  return this.getToken(PlaygroundParser.GE, 0);
};

RelationalOperatorContext.prototype.LE = function () {
  return this.getToken(PlaygroundParser.LE, 0);
};

RelationalOperatorContext.prototype.EQUAL = function () {
  return this.getToken(PlaygroundParser.EQUAL, 0);
};

RelationalOperatorContext.prototype.NOTEQUAL = function () {
  return this.getToken(PlaygroundParser.NOTEQUAL, 0);
};

RelationalOperatorContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitRelationalOperator(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.RelationalOperatorContext = RelationalOperatorContext;

PlaygroundParser.prototype.relationalOperator = function () {
  const localctx = new RelationalOperatorContext(this, this._ctx, this.state);
  this.enterRule(localctx, 44, PlaygroundParser.RULE_relationalOperator);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 225;
    _la = this._input.LA(1);
    if (
      !(
        ((_la - 28) & ~0x1f) == 0 &&
        ((1 << (_la - 28)) &
          ((1 << (PlaygroundParser.EQUAL - 28)) |
            (1 << (PlaygroundParser.NOTEQUAL - 28)) |
            (1 << (PlaygroundParser.GT - 28)) |
            (1 << (PlaygroundParser.LT - 28)) |
            (1 << (PlaygroundParser.GE - 28)) |
            (1 << (PlaygroundParser.LE - 28)))) !==
          0
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function KeyInputContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlaygroundParser.RULE_keyInput;
  return this;
}

KeyInputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyInputContext.prototype.constructor = KeyInputContext;

KeyInputContext.prototype.ARROWUP = function () {
  return this.getToken(PlaygroundParser.ARROWUP, 0);
};

KeyInputContext.prototype.ARROWDOWN = function () {
  return this.getToken(PlaygroundParser.ARROWDOWN, 0);
};

KeyInputContext.prototype.ARROWLEFT = function () {
  return this.getToken(PlaygroundParser.ARROWLEFT, 0);
};

KeyInputContext.prototype.ARROWRIGHT = function () {
  return this.getToken(PlaygroundParser.ARROWRIGHT, 0);
};

KeyInputContext.prototype.SPACE = function () {
  return this.getToken(PlaygroundParser.SPACE, 0);
};

KeyInputContext.prototype.SPACEBAR = function () {
  return this.getToken(PlaygroundParser.SPACEBAR, 0);
};

KeyInputContext.prototype.KEYA = function () {
  return this.getToken(PlaygroundParser.KEYA, 0);
};

KeyInputContext.prototype.KEYB = function () {
  return this.getToken(PlaygroundParser.KEYB, 0);
};

KeyInputContext.prototype.KEYC = function () {
  return this.getToken(PlaygroundParser.KEYC, 0);
};

KeyInputContext.prototype.KEYD = function () {
  return this.getToken(PlaygroundParser.KEYD, 0);
};

KeyInputContext.prototype.KEYE = function () {
  return this.getToken(PlaygroundParser.KEYE, 0);
};

KeyInputContext.prototype.KEYF = function () {
  return this.getToken(PlaygroundParser.KEYF, 0);
};

KeyInputContext.prototype.KEYG = function () {
  return this.getToken(PlaygroundParser.KEYG, 0);
};

KeyInputContext.prototype.KEYH = function () {
  return this.getToken(PlaygroundParser.KEYH, 0);
};

KeyInputContext.prototype.KEYI = function () {
  return this.getToken(PlaygroundParser.KEYI, 0);
};

KeyInputContext.prototype.KEYJ = function () {
  return this.getToken(PlaygroundParser.KEYJ, 0);
};

KeyInputContext.prototype.KEYK = function () {
  return this.getToken(PlaygroundParser.KEYK, 0);
};

KeyInputContext.prototype.KEYL = function () {
  return this.getToken(PlaygroundParser.KEYL, 0);
};

KeyInputContext.prototype.KEYM = function () {
  return this.getToken(PlaygroundParser.KEYM, 0);
};

KeyInputContext.prototype.KEYN = function () {
  return this.getToken(PlaygroundParser.KEYN, 0);
};

KeyInputContext.prototype.KEYO = function () {
  return this.getToken(PlaygroundParser.KEYO, 0);
};

KeyInputContext.prototype.KEYP = function () {
  return this.getToken(PlaygroundParser.KEYP, 0);
};

KeyInputContext.prototype.KEYQ = function () {
  return this.getToken(PlaygroundParser.KEYQ, 0);
};

KeyInputContext.prototype.KEYR = function () {
  return this.getToken(PlaygroundParser.KEYR, 0);
};

KeyInputContext.prototype.KEYS = function () {
  return this.getToken(PlaygroundParser.KEYS, 0);
};

KeyInputContext.prototype.KEYT = function () {
  return this.getToken(PlaygroundParser.KEYT, 0);
};

KeyInputContext.prototype.KEYU = function () {
  return this.getToken(PlaygroundParser.KEYU, 0);
};

KeyInputContext.prototype.KEYV = function () {
  return this.getToken(PlaygroundParser.KEYV, 0);
};

KeyInputContext.prototype.KEYW = function () {
  return this.getToken(PlaygroundParser.KEYW, 0);
};

KeyInputContext.prototype.KEYX = function () {
  return this.getToken(PlaygroundParser.KEYX, 0);
};

KeyInputContext.prototype.KEYY = function () {
  return this.getToken(PlaygroundParser.KEYY, 0);
};

KeyInputContext.prototype.KEYZ = function () {
  return this.getToken(PlaygroundParser.KEYZ, 0);
};

KeyInputContext.prototype.KEY0 = function () {
  return this.getToken(PlaygroundParser.KEY0, 0);
};

KeyInputContext.prototype.KEY1 = function () {
  return this.getToken(PlaygroundParser.KEY1, 0);
};

KeyInputContext.prototype.KEY2 = function () {
  return this.getToken(PlaygroundParser.KEY2, 0);
};

KeyInputContext.prototype.KEY3 = function () {
  return this.getToken(PlaygroundParser.KEY3, 0);
};

KeyInputContext.prototype.KEY4 = function () {
  return this.getToken(PlaygroundParser.KEY4, 0);
};

KeyInputContext.prototype.KEY5 = function () {
  return this.getToken(PlaygroundParser.KEY5, 0);
};

KeyInputContext.prototype.KEY6 = function () {
  return this.getToken(PlaygroundParser.KEY6, 0);
};

KeyInputContext.prototype.KEY7 = function () {
  return this.getToken(PlaygroundParser.KEY7, 0);
};

KeyInputContext.prototype.KEY8 = function () {
  return this.getToken(PlaygroundParser.KEY8, 0);
};

KeyInputContext.prototype.KEY9 = function () {
  return this.getToken(PlaygroundParser.KEY9, 0);
};

KeyInputContext.prototype.accept = function (visitor) {
  if (visitor instanceof PlaygroundVisitor) {
    return visitor.visitKeyInput(this);
  } else {
    return visitor.visitChildren(this);
  }
};

PlaygroundParser.KeyInputContext = KeyInputContext;

PlaygroundParser.prototype.keyInput = function () {
  const localctx = new KeyInputContext(this, this._ctx, this.state);
  this.enterRule(localctx, 46, PlaygroundParser.RULE_keyInput);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 227;
    _la = this._input.LA(1);
    if (
      !(
        (((_la - 35) & ~0x1f) == 0 &&
          ((1 << (_la - 35)) &
            ((1 << (PlaygroundParser.ARROWUP - 35)) |
              (1 << (PlaygroundParser.ARROWDOWN - 35)) |
              (1 << (PlaygroundParser.ARROWLEFT - 35)) |
              (1 << (PlaygroundParser.ARROWRIGHT - 35)) |
              (1 << (PlaygroundParser.SPACE - 35)) |
              (1 << (PlaygroundParser.SPACEBAR - 35)) |
              (1 << (PlaygroundParser.KEYA - 35)) |
              (1 << (PlaygroundParser.KEYB - 35)) |
              (1 << (PlaygroundParser.KEYC - 35)) |
              (1 << (PlaygroundParser.KEYD - 35)) |
              (1 << (PlaygroundParser.KEYE - 35)) |
              (1 << (PlaygroundParser.KEYF - 35)) |
              (1 << (PlaygroundParser.KEYG - 35)) |
              (1 << (PlaygroundParser.KEYH - 35)) |
              (1 << (PlaygroundParser.KEYI - 35)) |
              (1 << (PlaygroundParser.KEYJ - 35)) |
              (1 << (PlaygroundParser.KEYK - 35)) |
              (1 << (PlaygroundParser.KEYL - 35)) |
              (1 << (PlaygroundParser.KEYM - 35)) |
              (1 << (PlaygroundParser.KEYN - 35)) |
              (1 << (PlaygroundParser.KEYO - 35)) |
              (1 << (PlaygroundParser.KEYP - 35)) |
              (1 << (PlaygroundParser.KEYQ - 35)) |
              (1 << (PlaygroundParser.KEYR - 35)) |
              (1 << (PlaygroundParser.KEYS - 35)) |
              (1 << (PlaygroundParser.KEYT - 35)) |
              (1 << (PlaygroundParser.KEYU - 35)) |
              (1 << (PlaygroundParser.KEYV - 35)) |
              (1 << (PlaygroundParser.KEYW - 35)) |
              (1 << (PlaygroundParser.KEYX - 35)) |
              (1 << (PlaygroundParser.KEYY - 35)) |
              (1 << (PlaygroundParser.KEYZ - 35)))) !==
            0) ||
        (((_la - 67) & ~0x1f) == 0 &&
          ((1 << (_la - 67)) &
            ((1 << (PlaygroundParser.KEY0 - 67)) |
              (1 << (PlaygroundParser.KEY1 - 67)) |
              (1 << (PlaygroundParser.KEY2 - 67)) |
              (1 << (PlaygroundParser.KEY3 - 67)) |
              (1 << (PlaygroundParser.KEY4 - 67)) |
              (1 << (PlaygroundParser.KEY5 - 67)) |
              (1 << (PlaygroundParser.KEY6 - 67)) |
              (1 << (PlaygroundParser.KEY7 - 67)) |
              (1 << (PlaygroundParser.KEY8 - 67)) |
              (1 << (PlaygroundParser.KEY9 - 67)))) !==
            0)
      )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

PlaygroundParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
  switch (ruleIndex) {
    case 11:
      return this.expression_sempred(localctx, predIndex);
    default:
      throw 'No predicate with index:' + ruleIndex;
  }
};

PlaygroundParser.prototype.expression_sempred = function (localctx, predIndex) {
  switch (predIndex) {
    case 0:
      return this.precpred(this._ctx, 5);
    case 1:
      return this.precpred(this._ctx, 4);
    case 2:
      return this.precpred(this._ctx, 3);
    case 3:
      return this.precpred(this._ctx, 2);
    case 4:
      return this.precpred(this._ctx, 1);
    default:
      throw 'No predicate with index:' + predIndex;
  }
};

exports.PlaygroundParser = PlaygroundParser;
exports.ParseContext = ParseContext;
PlaygroundParser.ParseContext = ParseContext;
exports.ScopeContext = ScopeContext;
PlaygroundParser.ScopeContext = ScopeContext;
exports.StatementContext = StatementContext;
PlaygroundParser.StatementContext = StatementContext;
exports.VarDeclarationContext = VarDeclarationContext;
PlaygroundParser.VarDeclarationContext = VarDeclarationContext;
exports.VarAssignmentContext = VarAssignmentContext;
PlaygroundParser.VarAssignmentContext = VarAssignmentContext;
exports.ObjectPropertyAssignmentContext = ObjectPropertyAssignmentContext;
PlaygroundParser.ObjectPropertyAssignmentContext = ObjectPropertyAssignmentContext;
exports.EventStatementContext = EventStatementContext;
PlaygroundParser.EventStatementContext = EventStatementContext;
exports.EventParamsContext = EventParamsContext;
PlaygroundParser.EventParamsContext = EventParamsContext;
exports.ConditionalStatementContext = ConditionalStatementContext;
PlaygroundParser.ConditionalStatementContext = ConditionalStatementContext;
exports.LoopStatementContext = LoopStatementContext;
PlaygroundParser.LoopStatementContext = LoopStatementContext;
exports.WhileStatementContext = WhileStatementContext;
PlaygroundParser.WhileStatementContext = WhileStatementContext;
exports.ExpressionContext = ExpressionContext;
PlaygroundParser.ExpressionContext = ExpressionContext;
exports.PrimaryContext = PrimaryContext;
PlaygroundParser.PrimaryContext = PrimaryContext;
exports.ObjectPropertyContext = ObjectPropertyContext;
PlaygroundParser.ObjectPropertyContext = ObjectPropertyContext;
exports.ObjectMethodCallContext = ObjectMethodCallContext;
PlaygroundParser.ObjectMethodCallContext = ObjectMethodCallContext;
exports.StaticMethodCallContext = StaticMethodCallContext;
PlaygroundParser.StaticMethodCallContext = StaticMethodCallContext;
exports.ObjectIdentifierContext = ObjectIdentifierContext;
PlaygroundParser.ObjectIdentifierContext = ObjectIdentifierContext;
exports.MethodParamContext = MethodParamContext;
PlaygroundParser.MethodParamContext = MethodParamContext;
exports.LiteralContext = LiteralContext;
PlaygroundParser.LiteralContext = LiteralContext;
exports.ConstantLiteralContext = ConstantLiteralContext;
PlaygroundParser.ConstantLiteralContext = ConstantLiteralContext;
exports.BooleanOperatorContext = BooleanOperatorContext;
PlaygroundParser.BooleanOperatorContext = BooleanOperatorContext;
exports.ArithmeticOperatorContext = ArithmeticOperatorContext;
PlaygroundParser.ArithmeticOperatorContext = ArithmeticOperatorContext;
exports.RelationalOperatorContext = RelationalOperatorContext;
PlaygroundParser.RelationalOperatorContext = RelationalOperatorContext;
exports.KeyInputContext = KeyInputContext;
PlaygroundParser.KeyInputContext = KeyInputContext;
exports.ElseIfConditionalContext = ElseIfConditionalContext;
PlaygroundParser.ElseIfConditionalContext = ElseIfConditionalContext;
exports.ThenConditionalContext = ThenConditionalContext;
PlaygroundParser.ThenConditionalContext = ThenConditionalContext;
exports.ElseCondiitionalContext = ElseCondiitionalContext;
PlaygroundParser.ElseCondiitionalContext = ElseCondiitionalContext;
exports.StaticCallExprContext = StaticCallExprContext;
PlaygroundParser.StaticCallExprContext = StaticCallExprContext;
exports.UnaryExprContext = UnaryExprContext;
PlaygroundParser.UnaryExprContext = UnaryExprContext;
exports.AddSubExprContext = AddSubExprContext;
PlaygroundParser.AddSubExprContext = AddSubExprContext;
exports.PrimaryExprContext = PrimaryExprContext;
PlaygroundParser.PrimaryExprContext = PrimaryExprContext;
exports.BooleanExprContext = BooleanExprContext;
PlaygroundParser.BooleanExprContext = BooleanExprContext;
exports.ObjectPropExprContext = ObjectPropExprContext;
PlaygroundParser.ObjectPropExprContext = ObjectPropExprContext;
exports.ComparisonExprContext = ComparisonExprContext;
PlaygroundParser.ComparisonExprContext = ComparisonExprContext;
exports.ParensExprContext = ParensExprContext;
PlaygroundParser.ParensExprContext = ParensExprContext;
exports.ObjectCallExprContext = ObjectCallExprContext;
PlaygroundParser.ObjectCallExprContext = ObjectCallExprContext;
exports.MulDivExprContext = MulDivExprContext;
PlaygroundParser.MulDivExprContext = MulDivExprContext;
exports.ExpressionParamContext = ExpressionParamContext;
PlaygroundParser.ExpressionParamContext = ExpressionParamContext;
exports.LiteralParamContext = LiteralParamContext;
PlaygroundParser.LiteralParamContext = LiteralParamContext;
exports.IdentifierParamContext = IdentifierParamContext;
PlaygroundParser.IdentifierParamContext = IdentifierParamContext;
