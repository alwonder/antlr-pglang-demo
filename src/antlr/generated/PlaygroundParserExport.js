// Generated from Playground.g4 by ANTLR 4.7.1
// jshint ignore: start
const antlr4 = require('antlr4/index');
const PlaygroundVisitor = require('./PlaygroundVisitor').PlaygroundVisitor;

const grammarFileName = 'Playground.g4';

const serializedATN = [
  '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0003.\u0109\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t',
  '\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004',
  '\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004',
  '\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004',
  '\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t',
  '\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004',
  '\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007',
  '\u00035\n\u0003\f\u0003\u000e\u00038\u000b\u0003\u0003\u0004\u0003\u0004',
  '\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004',
  '\u0005\u0004B\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005',
  '\u0005\u0005H\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006',
  '\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003',
  '\b\u0003\b\u0003\b\u0005\bW\n\b\u0003\b\u0003\b\u0003\b\u0007\b\\\n',
  '\b\f\b\u000e\b_\u000b\b\u0003\b\u0003\b\u0007\bc\n\b\f\b\u000e\bf\u000b',
  '\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\tm\n\t\f\t\u000e\t',
  'p\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003',
  '\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007',
  '\n\u0082\n\n\f\n\u000e\n\u0085\u000b\n\u0003\n\u0003\n\u0007\n\u0089',
  '\n\n\f\n\u000e\n\u008c\u000b\n\u0003\n\u0007\n\u008f\n\n\f\n\u000e\n',
  '\u0092\u000b\n\u0003\n\u0003\n\u0007\n\u0096\n\n\f\n\u000e\n\u0099\u000b',
  '\n\u0003\n\u0007\n\u009c\n\n\f\n\u000e\n\u009f\u000b\n\u0005\n\u00a1',
  '\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003',
  '\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003',
  '\f\u0003\f\u0005\f\u00b3\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f',
  '\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003',
  '\f\u0003\f\u0007\f\u00c4\n\f\f\f\u000e\f\u00c7\u000b\f\u0003\r\u0003',
  '\r\u0005\r\u00cb\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e',
  '\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f',
  '\u0003\u000f\u0007\u000f\u00d8\n\u000f\f\u000f\u000e\u000f\u00db\u000b',
  '\u000f\u0005\u000f\u00dd\n\u000f\u0003\u000f\u0003\u000f\u0003\u0010',
  '\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00e6\n',
  '\u0010\f\u0010\u000e\u0010\u00e9\u000b\u0010\u0005\u0010\u00eb\n\u0010',
  '\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012',
  '\u0003\u0012\u0005\u0012\u00f4\n\u0012\u0003\u0013\u0005\u0013\u00f7',
  '\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013',
  '\u00fd\n\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003',
  '\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003',
  '\u0018\u0002\u0003\u0016\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012',
  '\u0014\u0016\u0018\u001a\u001c\u001e "$&(*,.\u0002\t\u0003\u0002\u0019',
  '\u001a\u0003\u0002\u0017\u0018\u0003\u0002\u001c!\u0004\u0002\u0005',
  '\u0005((\u0003\u0002\u0014\u0016\u0003\u0002\u0017\u001b\u0003\u0002',
  "#'\u0002\u011a\u00020\u0003\u0002\u0002\u0002\u00046\u0003\u0002\u0002",
  '\u0002\u0006A\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nI',
  '\u0003\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002\u000eQ\u0003\u0002',
  '\u0002\u0002\u0010i\u0003\u0002\u0002\u0002\u0012\u00a0\u0003\u0002',
  '\u0002\u0002\u0014\u00a2\u0003\u0002\u0002\u0002\u0016\u00b2\u0003\u0002',
  '\u0002\u0002\u0018\u00ca\u0003\u0002\u0002\u0002\u001a\u00cc\u0003\u0002',
  '\u0002\u0002\u001c\u00d0\u0003\u0002\u0002\u0002\u001e\u00e0\u0003\u0002',
  '\u0002\u0002 \u00ee\u0003\u0002\u0002\u0002"\u00f3\u0003\u0002\u0002',
  '\u0002$\u00fc\u0003\u0002\u0002\u0002&\u00fe\u0003\u0002\u0002\u0002',
  '(\u0100\u0003\u0002\u0002\u0002*\u0102\u0003\u0002\u0002\u0002,\u0104',
  '\u0003\u0002\u0002\u0002.\u0106\u0003\u0002\u0002\u000201\u0005\u0004',
  '\u0003\u000212\u0007\u0002\u0002\u00032\u0003\u0003\u0002\u0002\u0002',
  '35\u0005\u0006\u0004\u000243\u0003\u0002\u0002\u000258\u0003\u0002\u0002',
  '\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\u0005\u0003',
  '\u0002\u0002\u000286\u0003\u0002\u0002\u00029B\u0005\u000e\b\u0002:',
  'B\u0005\u001c\u000f\u0002;B\u0005\u001e\u0010\u0002<B\u0005\b\u0005',
  '\u0002=B\u0005\n\u0006\u0002>B\u0005\f\u0007\u0002?B\u0005\u0014\u000b',
  '\u0002@B\u0005\u0012\n\u0002A9\u0003\u0002\u0002\u0002A:\u0003\u0002',
  '\u0002\u0002A;\u0003\u0002\u0002\u0002A<\u0003\u0002\u0002\u0002A=\u0003',
  '\u0002\u0002\u0002A>\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002',
  'A@\u0003\u0002\u0002\u0002B\u0007\u0003\u0002\u0002\u0002CD\u0007\u0004',
  '\u0002\u0002DG\u0007(\u0002\u0002EF\u0007\u0013\u0002\u0002FH\u0005',
  '\u0016\f\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002H',
  '\t\u0003\u0002\u0002\u0002IJ\u0007(\u0002\u0002JK\u0007\u0013\u0002',
  '\u0002KL\u0005\u0016\f\u0002L\u000b\u0003\u0002\u0002\u0002MN\u0005',
  '\u001a\u000e\u0002NO\u0007\u0013\u0002\u0002OP\u0005\u0016\f\u0002P',
  '\r\u0003\u0002\u0002\u0002QR\u0007\u0006\u0002\u0002RS\u0007(\u0002',
  '\u0002ST\u0007\u0013\u0002\u0002TV\u0007\u0010\u0002\u0002UW\u0005\u0010',
  '\t\u0002VU\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0003',
  '\u0002\u0002\u0002XY\u0007\u0011\u0002\u0002Y]\u0007"\u0002\u0002Z',
  '\\\u0007)\u0002\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002',
  '\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0003\u0002',
  '\u0002\u0002_]\u0003\u0002\u0002\u0002`d\u0005\u0004\u0003\u0002ac\u0007',
  ')\u0002\u0002ba\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db',
  '\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002eg\u0003\u0002\u0002',
  '\u0002fd\u0003\u0002\u0002\u0002gh\u0007.\u0002\u0002h\u000f\u0003\u0002',
  '\u0002\u0002in\u0007(\u0002\u0002jk\u0007\u0003\u0002\u0002km\u0007',
  '(\u0002\u0002lj\u0003\u0002\u0002\u0002mp\u0003\u0002\u0002\u0002nl',
  '\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002o\u0011\u0003\u0002',
  '\u0002\u0002pn\u0003\u0002\u0002\u0002qr\u0007\t\u0002\u0002rs\u0005',
  '\u0016\f\u0002st\u0005\u0004\u0003\u0002tu\u0007\n\u0002\u0002uv\u0005',
  '\u0012\n\u0002v\u00a1\u0003\u0002\u0002\u0002wx\u0007\t\u0002\u0002',
  'xy\u0005\u0016\f\u0002yz\u0005\u0004\u0003\u0002z{\u0007\n\u0002\u0002',
  '{|\u0005\u0004\u0003\u0002|}\u0007\u000b\u0002\u0002}\u00a1\u0003\u0002',
  '\u0002\u0002~\u007f\u0007\t\u0002\u0002\u007f\u0083\u0005\u0016\f\u0002',
  '\u0080\u0082\u0007)\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002',
  '\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002',
  '\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0086\u0003\u0002\u0002\u0002',
  '\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u008a\u0005\u0004\u0003\u0002',
  '\u0087\u0089\u0007)\u0002\u0002\u0088\u0087\u0003\u0002\u0002\u0002',
  '\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002',
  '\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u0090\u0003\u0002\u0002\u0002',
  '\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008f\u0007.\u0002\u0002',
  '\u008e\u008d\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002\u0002',
  '\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002',
  '\u0091\u0093\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002',
  '\u0093\u0097\u0007\u000b\u0002\u0002\u0094\u0096\u0007)\u0002\u0002',
  '\u0095\u0094\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002',
  '\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002',
  '\u0098\u009d\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002',
  '\u009a\u009c\u0007.\u0002\u0002\u009b\u009a\u0003\u0002\u0002\u0002',
  '\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002',
  '\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a1\u0003\u0002\u0002\u0002',
  '\u009f\u009d\u0003\u0002\u0002\u0002\u00a0q\u0003\u0002\u0002\u0002',
  '\u00a0w\u0003\u0002\u0002\u0002\u00a0~\u0003\u0002\u0002\u0002\u00a1',
  '\u0013\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\b\u0002\u0002\u00a3',
  '\u00a4\u0005\u0016\f\u0002\u00a4\u00a5\u0005\u0004\u0003\u0002\u00a5',
  '\u00a6\u0007\u000b\u0002\u0002\u00a6\u0015\u0003\u0002\u0002\u0002\u00a7',
  '\u00a8\b\f\u0001\u0002\u00a8\u00b3\u0005\u0018\r\u0002\u00a9\u00b3\u0005',
  '\u001a\u000e\u0002\u00aa\u00b3\u0005\u001c\u000f\u0002\u00ab\u00b3\u0005',
  '\u001e\u0010\u0002\u00ac\u00ad\u0007\u0010\u0002\u0002\u00ad\u00ae\u0005',
  '\u0016\f\u0002\u00ae\u00af\u0007\u0011\u0002\u0002\u00af\u00b3\u0003',
  '\u0002\u0002\u0002\u00b0\u00b1\u0007\u0016\u0002\u0002\u00b1\u00b3\u0005',
  '\u0016\f\b\u00b2\u00a7\u0003\u0002\u0002\u0002\u00b2\u00a9\u0003\u0002',
  '\u0002\u0002\u00b2\u00aa\u0003\u0002\u0002\u0002\u00b2\u00ab\u0003\u0002',
  '\u0002\u0002\u00b2\u00ac\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002',
  '\u0002\u0002\u00b3\u00c5\u0003\u0002\u0002\u0002\u00b4\u00b5\f\u0007',
  '\u0002\u0002\u00b5\u00b6\t\u0002\u0002\u0002\u00b6\u00c4\u0005\u0016',
  '\f\b\u00b7\u00b8\f\u0006\u0002\u0002\u00b8\u00b9\t\u0003\u0002\u0002',
  '\u00b9\u00c4\u0005\u0016\f\u0007\u00ba\u00bb\f\u0005\u0002\u0002\u00bb',
  '\u00bc\t\u0004\u0002\u0002\u00bc\u00c4\u0005\u0016\f\u0006\u00bd\u00be',
  '\f\u0004\u0002\u0002\u00be\u00bf\u0007\u0014\u0002\u0002\u00bf\u00c4',
  '\u0005\u0016\f\u0005\u00c0\u00c1\f\u0003\u0002\u0002\u00c1\u00c2\u0007',
  '\u0015\u0002\u0002\u00c2\u00c4\u0005\u0016\f\u0004\u00c3\u00b4\u0003',
  '\u0002\u0002\u0002\u00c3\u00b7\u0003\u0002\u0002\u0002\u00c3\u00ba\u0003',
  '\u0002\u0002\u0002\u00c3\u00bd\u0003\u0002\u0002\u0002\u00c3\u00c0\u0003',
  '\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003',
  '\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u0017\u0003',
  '\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00cb\u0005',
  ' \u0011\u0002\u00c9\u00cb\u0005$\u0013\u0002\u00ca\u00c8\u0003\u0002',
  '\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb\u0019\u0003\u0002',
  '\u0002\u0002\u00cc\u00cd\u0005 \u0011\u0002\u00cd\u00ce\u0007\u0012',
  '\u0002\u0002\u00ce\u00cf\u0007(\u0002\u0002\u00cf\u001b\u0003\u0002',
  '\u0002\u0002\u00d0\u00d1\u0005 \u0011\u0002\u00d1\u00d2\u0007\u0012',
  '\u0002\u0002\u00d2\u00d3\u0007(\u0002\u0002\u00d3\u00dc\u0007\u0010',
  '\u0002\u0002\u00d4\u00d9\u0005"\u0012\u0002\u00d5\u00d6\u0007\u0003',
  '\u0002\u0002\u00d6\u00d8\u0005"\u0012\u0002\u00d7\u00d5\u0003\u0002',
  '\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002',
  '\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00dd\u0003\u0002',
  '\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00d4\u0003\u0002',
  '\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002',
  '\u0002\u0002\u00de\u00df\u0007\u0011\u0002\u0002\u00df\u001d\u0003\u0002',
  '\u0002\u0002\u00e0\u00e1\u0007(\u0002\u0002\u00e1\u00ea\u0007\u0010',
  '\u0002\u0002\u00e2\u00e7\u0005"\u0012\u0002\u00e3\u00e4\u0007\u0003',
  '\u0002\u0002\u00e4\u00e6\u0005"\u0012\u0002\u00e5\u00e3\u0003\u0002',
  '\u0002\u0002\u00e6\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002',
  '\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002',
  '\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00ea\u00e2\u0003\u0002',
  '\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002',
  '\u0002\u0002\u00ec\u00ed\u0007\u0011\u0002\u0002\u00ed\u001f\u0003\u0002',
  '\u0002\u0002\u00ee\u00ef\t\u0005\u0002\u0002\u00ef!\u0003\u0002\u0002',
  '\u0002\u00f0\u00f4\u0005 \u0011\u0002\u00f1\u00f4\u0005$\u0013\u0002',
  '\u00f2\u00f4\u0005\u0016\f\u0002\u00f3\u00f0\u0003\u0002\u0002\u0002',
  '\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002\u0002',
  '\u00f4#\u0003\u0002\u0002\u0002\u00f5\u00f7\t\u0003\u0002\u0002\u00f6',
  '\u00f5\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7',
  '\u00f8\u0003\u0002\u0002\u0002\u00f8\u00fd\u0007\r\u0002\u0002\u00f9',
  '\u00fd\u0007\f\u0002\u0002\u00fa\u00fd\u0007\u000e\u0002\u0002\u00fb',
  '\u00fd\u0005&\u0014\u0002\u00fc\u00f6\u0003\u0002\u0002\u0002\u00fc',
  '\u00f9\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc',
  '\u00fb\u0003\u0002\u0002\u0002\u00fd%\u0003\u0002\u0002\u0002\u00fe',
  "\u00ff\u0005.\u0018\u0002\u00ff'\u0003\u0002\u0002\u0002\u0100\u0101",
  '\t\u0006\u0002\u0002\u0101)\u0003\u0002\u0002\u0002\u0102\u0103\t\u0007',
  '\u0002\u0002\u0103+\u0003\u0002\u0002\u0002\u0104\u0105\t\u0004\u0002',
  '\u0002\u0105-\u0003\u0002\u0002\u0002\u0106\u0107\t\b\u0002\u0002\u0107',
  '/\u0003\u0002\u0002\u0002\u001a6AGV]dn\u0083\u008a\u0090\u0097\u009d',
  '\u00a0\u00b2\u00c3\u00c5\u00ca\u00d9\u00dc\u00e7\u00ea\u00f3\u00f6\u00fc',
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
  'IDENTIFIER',
  'NEWLINE',
  'WS',
  'COMMENT',
  'LINE_COMMENT',
  'INDENT',
  'DEDENT',
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
PlaygroundParser.AND = 18;
PlaygroundParser.OR = 19;
PlaygroundParser.NOT = 20;
PlaygroundParser.ADD = 21;
PlaygroundParser.SUB = 22;
PlaygroundParser.MUL = 23;
PlaygroundParser.DIV = 24;
PlaygroundParser.MOD = 25;
PlaygroundParser.EQUAL = 26;
PlaygroundParser.NOTEQUAL = 27;
PlaygroundParser.GT = 28;
PlaygroundParser.LT = 29;
PlaygroundParser.GE = 30;
PlaygroundParser.LE = 31;
PlaygroundParser.ARROW = 32;
PlaygroundParser.ARROWUP = 33;
PlaygroundParser.ARROWDOWN = 34;
PlaygroundParser.ARROWLEFT = 35;
PlaygroundParser.ARROWRIGHT = 36;
PlaygroundParser.SPACE = 37;
PlaygroundParser.IDENTIFIER = 38;
PlaygroundParser.NEWLINE = 39;
PlaygroundParser.WS = 40;
PlaygroundParser.COMMENT = 41;
PlaygroundParser.LINE_COMMENT = 42;
PlaygroundParser.INDENT = 43;
PlaygroundParser.DEDENT = 44;

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
PlaygroundParser.RULE_expression = 10;
PlaygroundParser.RULE_primary = 11;
PlaygroundParser.RULE_objectProperty = 12;
PlaygroundParser.RULE_objectMethodCall = 13;
PlaygroundParser.RULE_staticMethodCall = 14;
PlaygroundParser.RULE_objectIdentifier = 15;
PlaygroundParser.RULE_methodParam = 16;
PlaygroundParser.RULE_literal = 17;
PlaygroundParser.RULE_constantLiteral = 18;
PlaygroundParser.RULE_booleanOperator = 19;
PlaygroundParser.RULE_arithmeticOperator = 20;
PlaygroundParser.RULE_relationalOperator = 21;
PlaygroundParser.RULE_keyInput = 22;

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
    this.state = 46;
    this.scope();
    this.state = 47;
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
    this.state = 52;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (
      ((_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.VAR) |
            (1 << PlaygroundParser.THIS) |
            (1 << PlaygroundParser.AT) |
            (1 << PlaygroundParser.LOOP) |
            (1 << PlaygroundParser.IF))) !==
          0) ||
      _la === PlaygroundParser.IDENTIFIER
    ) {
      this.state = 49;
      this.statement();
      this.state = 54;
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
    this.state = 63;
    this._errHandler.sync(this);
    const la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.eventStatement();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 56;
        this.objectMethodCall();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 57;
        this.staticMethodCall();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 58;
        this.varDeclaration();
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 59;
        this.varAssignment();
        break;

      case 6:
        this.enterOuterAlt(localctx, 6);
        this.state = 60;
        this.objectPropertyAssignment();
        break;

      case 7:
        this.enterOuterAlt(localctx, 7);
        this.state = 61;
        this.loopStatement();
        break;

      case 8:
        this.enterOuterAlt(localctx, 8);
        this.state = 62;
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
    this.state = 65;
    this.match(PlaygroundParser.VAR);
    this.state = 66;
    localctx.name = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 69;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PlaygroundParser.ASSIGN) {
      this.state = 67;
      this.match(PlaygroundParser.ASSIGN);
      this.state = 68;
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
  this.assignment = null; // ExpressionContext
  return this;
}

VarAssignmentContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
VarAssignmentContext.prototype.constructor = VarAssignmentContext;

VarAssignmentContext.prototype.ASSIGN = function () {
  return this.getToken(PlaygroundParser.ASSIGN, 0);
};

VarAssignmentContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

VarAssignmentContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
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
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 71;
    localctx.name = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 72;
    this.match(PlaygroundParser.ASSIGN);
    this.state = 73;
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
  this.assignment = null; // ExpressionContext
  return this;
}

ObjectPropertyAssignmentContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype,
);
ObjectPropertyAssignmentContext.prototype.constructor = ObjectPropertyAssignmentContext;

ObjectPropertyAssignmentContext.prototype.ASSIGN = function () {
  return this.getToken(PlaygroundParser.ASSIGN, 0);
};

ObjectPropertyAssignmentContext.prototype.objectProperty = function () {
  return this.getTypedRuleContext(ObjectPropertyContext, 0);
};

ObjectPropertyAssignmentContext.prototype.expression = function () {
  return this.getTypedRuleContext(ExpressionContext, 0);
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
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 75;
    localctx.property = this.objectProperty();
    this.state = 76;
    this.match(PlaygroundParser.ASSIGN);
    this.state = 77;
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

EventStatementContext.prototype.DEDENT = function () {
  return this.getToken(PlaygroundParser.DEDENT, 0);
};

EventStatementContext.prototype.IDENTIFIER = function () {
  return this.getToken(PlaygroundParser.IDENTIFIER, 0);
};

EventStatementContext.prototype.scope = function () {
  return this.getTypedRuleContext(ScopeContext, 0);
};

EventStatementContext.prototype.NEWLINE = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PlaygroundParser.NEWLINE);
  } else {
    return this.getToken(PlaygroundParser.NEWLINE, i);
  }
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
    this.state = 79;
    this.match(PlaygroundParser.AT);
    this.state = 80;
    localctx.eventName = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 81;
    this.match(PlaygroundParser.ASSIGN);
    this.state = 82;
    this.match(PlaygroundParser.LPAREN);
    this.state = 84;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PlaygroundParser.IDENTIFIER) {
      this.state = 83;
      localctx.params = this.eventParams();
    }

    this.state = 86;
    this.match(PlaygroundParser.RPAREN);
    this.state = 87;
    this.match(PlaygroundParser.ARROW);
    this.state = 91;
    this._errHandler.sync(this);
    let _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        this.state = 88;
        this.match(PlaygroundParser.NEWLINE);
      }
      this.state = 93;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
    }

    this.state = 94;
    localctx.body = this.scope();
    this.state = 98;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === PlaygroundParser.NEWLINE) {
      this.state = 95;
      this.match(PlaygroundParser.NEWLINE);
      this.state = 100;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 101;
    this.match(PlaygroundParser.DEDENT);
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
    this.state = 103;
    this.match(PlaygroundParser.IDENTIFIER);
    this.state = 108;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === PlaygroundParser.T__0) {
      this.state = 104;
      this.match(PlaygroundParser.T__0);
      this.state = 105;
      this.match(PlaygroundParser.IDENTIFIER);
      this.state = 110;
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

ThenConditionalContext.prototype.NEWLINE = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PlaygroundParser.NEWLINE);
  } else {
    return this.getToken(PlaygroundParser.NEWLINE, i);
  }
};

ThenConditionalContext.prototype.DEDENT = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PlaygroundParser.DEDENT);
  } else {
    return this.getToken(PlaygroundParser.DEDENT, i);
  }
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
  let _la = 0; // Token type
  try {
    this.state = 158;
    this._errHandler.sync(this);
    const la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
    switch (la_) {
      case 1:
        localctx = new ElseIfConditionalContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(PlaygroundParser.IF);
        this.state = 112;
        localctx.condition = this.expression(0);
        this.state = 113;
        localctx.consequent = this.scope();
        this.state = 114;
        this.match(PlaygroundParser.ELSE);
        this.state = 115;
        localctx.alternative = this.conditionalStatement();
        break;

      case 2:
        localctx = new ElseCondiitionalContext(this, localctx);
        this.enterOuterAlt(localctx, 2);
        this.state = 117;
        this.match(PlaygroundParser.IF);
        this.state = 118;
        localctx.condition = this.expression(0);
        this.state = 119;
        localctx.consequent = this.scope();
        this.state = 120;
        this.match(PlaygroundParser.ELSE);
        this.state = 121;
        localctx.alternative = this.scope();
        this.state = 122;
        this.match(PlaygroundParser.END);
        break;

      case 3:
        localctx = new ThenConditionalContext(this, localctx);
        this.enterOuterAlt(localctx, 3);
        this.state = 124;
        this.match(PlaygroundParser.IF);
        this.state = 125;
        localctx.condition = this.expression(0);
        this.state = 129;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 126;
            this.match(PlaygroundParser.NEWLINE);
          }
          this.state = 131;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
        }

        this.state = 132;
        localctx.consequent = this.scope();
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PlaygroundParser.NEWLINE) {
          this.state = 133;
          this.match(PlaygroundParser.NEWLINE);
          this.state = 138;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PlaygroundParser.DEDENT) {
          this.state = 139;
          this.match(PlaygroundParser.DEDENT);
          this.state = 144;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 145;
        this.match(PlaygroundParser.END);
        this.state = 149;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 146;
            this.match(PlaygroundParser.NEWLINE);
          }
          this.state = 151;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        }

        this.state = 155;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 152;
            this.match(PlaygroundParser.DEDENT);
          }
          this.state = 157;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        }

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
    this.state = 160;
    this.match(PlaygroundParser.LOOP);
    this.state = 161;
    localctx.iterations = this.expression(0);
    this.state = 162;
    localctx.body = this.scope();
    this.state = 163;
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
  const _startState = 20;
  this.enterRecursionRule(localctx, 20, PlaygroundParser.RULE_expression, _p);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 176;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 13, this._ctx);
    switch (la_) {
      case 1:
        localctx = new PrimaryExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 166;
        this.primary();
        break;

      case 2:
        localctx = new ObjectPropExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 167;
        this.objectProperty();
        break;

      case 3:
        localctx = new ObjectCallExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 168;
        this.objectMethodCall();
        break;

      case 4:
        localctx = new StaticCallExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 169;
        this.staticMethodCall();
        break;

      case 5:
        localctx = new ParensExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 170;
        this.match(PlaygroundParser.LPAREN);
        this.state = 171;
        this.expression(0);
        this.state = 172;
        this.match(PlaygroundParser.RPAREN);
        break;

      case 6:
        localctx = new UnaryExprContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;
        this.state = 174;
        localctx.op = this.match(PlaygroundParser.NOT);
        this.state = 175;
        this.expression(6);
        break;
    }
    this._ctx.stop = this._input.LT(-1);
    this.state = 195;
    this._errHandler.sync(this);
    let _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        if (this._parseListeners !== null) {
          this.triggerExitRuleEvent();
        }
        _prevctx = localctx;
        this.state = 193;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
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
            this.state = 178;
            if (!this.precpred(this._ctx, 5)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 5)',
              );
            }
            this.state = 179;
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
            this.state = 180;
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
            this.state = 181;
            if (!this.precpred(this._ctx, 4)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 4)',
              );
            }
            this.state = 182;
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
            this.state = 183;
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
            this.state = 184;
            if (!this.precpred(this._ctx, 3)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 3)',
              );
            }
            this.state = 185;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(
                (_la & ~0x1f) == 0 &&
                ((1 << _la) &
                  ((1 << PlaygroundParser.EQUAL) |
                    (1 << PlaygroundParser.NOTEQUAL) |
                    (1 << PlaygroundParser.GT) |
                    (1 << PlaygroundParser.LT) |
                    (1 << PlaygroundParser.GE) |
                    (1 << PlaygroundParser.LE))) !==
                  0
              )
            ) {
              localctx.op = this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 186;
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
            this.state = 187;
            if (!this.precpred(this._ctx, 2)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 2)',
              );
            }
            this.state = 188;
            localctx.op = this.match(PlaygroundParser.AND);
            this.state = 189;
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
            this.state = 190;
            if (!this.precpred(this._ctx, 1)) {
              throw new antlr4.error.FailedPredicateException(
                this,
                'this.precpred(this._ctx, 1)',
              );
            }
            this.state = 191;
            localctx.op = this.match(PlaygroundParser.OR);
            this.state = 192;
            this.expression(2);
            break;
        }
      }
      this.state = 197;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
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
  this.enterRule(localctx, 22, PlaygroundParser.RULE_primary);
  try {
    this.state = 200;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PlaygroundParser.THIS:
      case PlaygroundParser.IDENTIFIER:
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
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
        this.enterOuterAlt(localctx, 2);
        this.state = 199;
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
  this.enterRule(localctx, 24, PlaygroundParser.RULE_objectProperty);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 202;
    localctx.object = this.objectIdentifier();
    this.state = 203;
    this.match(PlaygroundParser.DOT);
    this.state = 204;
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
  this.enterRule(localctx, 26, PlaygroundParser.RULE_objectMethodCall);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 206;
    localctx.object = this.objectIdentifier();
    this.state = 207;
    this.match(PlaygroundParser.DOT);
    this.state = 208;
    localctx.method = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 209;
    this.match(PlaygroundParser.LPAREN);
    this.state = 218;
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
      (((_la - 33) & ~0x1f) == 0 &&
        ((1 << (_la - 33)) &
          ((1 << (PlaygroundParser.ARROWUP - 33)) |
            (1 << (PlaygroundParser.ARROWDOWN - 33)) |
            (1 << (PlaygroundParser.ARROWLEFT - 33)) |
            (1 << (PlaygroundParser.ARROWRIGHT - 33)) |
            (1 << (PlaygroundParser.SPACE - 33)) |
            (1 << (PlaygroundParser.IDENTIFIER - 33)))) !==
          0)
    ) {
      this.state = 210;
      this.methodParam();
      this.state = 215;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === PlaygroundParser.T__0) {
        this.state = 211;
        this.match(PlaygroundParser.T__0);
        this.state = 212;
        this.methodParam();
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    }

    this.state = 220;
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
  this.enterRule(localctx, 28, PlaygroundParser.RULE_staticMethodCall);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 222;
    localctx.method = this.match(PlaygroundParser.IDENTIFIER);
    this.state = 223;
    this.match(PlaygroundParser.LPAREN);
    this.state = 232;
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
      (((_la - 33) & ~0x1f) == 0 &&
        ((1 << (_la - 33)) &
          ((1 << (PlaygroundParser.ARROWUP - 33)) |
            (1 << (PlaygroundParser.ARROWDOWN - 33)) |
            (1 << (PlaygroundParser.ARROWLEFT - 33)) |
            (1 << (PlaygroundParser.ARROWRIGHT - 33)) |
            (1 << (PlaygroundParser.SPACE - 33)) |
            (1 << (PlaygroundParser.IDENTIFIER - 33)))) !==
          0)
    ) {
      this.state = 224;
      this.methodParam();
      this.state = 229;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === PlaygroundParser.T__0) {
        this.state = 225;
        this.match(PlaygroundParser.T__0);
        this.state = 226;
        this.methodParam();
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    }

    this.state = 234;
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
  this.enterRule(localctx, 30, PlaygroundParser.RULE_objectIdentifier);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 236;
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
  this.enterRule(localctx, 32, PlaygroundParser.RULE_methodParam);
  try {
    this.state = 241;
    this._errHandler.sync(this);
    const la_ = this._interp.adaptivePredict(this._input, 21, this._ctx);
    switch (la_) {
      case 1:
        localctx = new IdentifierParamContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.objectIdentifier();
        break;

      case 2:
        localctx = new LiteralParamContext(this, localctx);
        this.enterOuterAlt(localctx, 2);
        this.state = 239;
        this.literal();
        break;

      case 3:
        localctx = new ExpressionParamContext(this, localctx);
        this.enterOuterAlt(localctx, 3);
        this.state = 240;
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
  this.enterRule(localctx, 34, PlaygroundParser.RULE_literal);
  let _la = 0; // Token type
  try {
    this.state = 250;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PlaygroundParser.NUMBER_LITERAL:
      case PlaygroundParser.ADD:
      case PlaygroundParser.SUB:
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PlaygroundParser.ADD || _la === PlaygroundParser.SUB) {
          this.state = 243;
          localctx.sign = this._input.LT(1);
          _la = this._input.LA(1);
          if (!(_la === PlaygroundParser.ADD || _la === PlaygroundParser.SUB)) {
            localctx.sign = this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
        }

        this.state = 246;
        this.match(PlaygroundParser.NUMBER_LITERAL);
        break;
      case PlaygroundParser.BOOL_LITERAL:
        this.enterOuterAlt(localctx, 2);
        this.state = 247;
        this.match(PlaygroundParser.BOOL_LITERAL);
        break;
      case PlaygroundParser.STRING_LITERAL:
        this.enterOuterAlt(localctx, 3);
        this.state = 248;
        this.match(PlaygroundParser.STRING_LITERAL);
        break;
      case PlaygroundParser.ARROWUP:
      case PlaygroundParser.ARROWDOWN:
      case PlaygroundParser.ARROWLEFT:
      case PlaygroundParser.ARROWRIGHT:
      case PlaygroundParser.SPACE:
        this.enterOuterAlt(localctx, 4);
        this.state = 249;
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
  this.enterRule(localctx, 36, PlaygroundParser.RULE_constantLiteral);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 252;
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
  this.enterRule(localctx, 38, PlaygroundParser.RULE_booleanOperator);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 254;
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
  this.enterRule(localctx, 40, PlaygroundParser.RULE_arithmeticOperator);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 256;
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
  this.enterRule(localctx, 42, PlaygroundParser.RULE_relationalOperator);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 258;
    _la = this._input.LA(1);
    if (
      !(
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << PlaygroundParser.EQUAL) |
            (1 << PlaygroundParser.NOTEQUAL) |
            (1 << PlaygroundParser.GT) |
            (1 << PlaygroundParser.LT) |
            (1 << PlaygroundParser.GE) |
            (1 << PlaygroundParser.LE))) !==
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
  this.enterRule(localctx, 44, PlaygroundParser.RULE_keyInput);
  let _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 260;
    _la = this._input.LA(1);
    if (
      !(
        ((_la - 33) & ~0x1f) == 0 &&
        ((1 << (_la - 33)) &
          ((1 << (PlaygroundParser.ARROWUP - 33)) |
            (1 << (PlaygroundParser.ARROWDOWN - 33)) |
            (1 << (PlaygroundParser.ARROWLEFT - 33)) |
            (1 << (PlaygroundParser.ARROWRIGHT - 33)) |
            (1 << (PlaygroundParser.SPACE - 33)))) !==
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

PlaygroundParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
  switch (ruleIndex) {
    case 10:
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
exports.StaticCallExprContext = StaticCallExprContext;
PlaygroundParser.StaticCallExprContext = StaticCallExprContext;
exports.MulDivExprContext = MulDivExprContext;
PlaygroundParser.MulDivExprContext = MulDivExprContext;
exports.LiteralParamContext = LiteralParamContext;
PlaygroundParser.LiteralParamContext = LiteralParamContext;
exports.IdentifierParamContext = IdentifierParamContext;
PlaygroundParser.IdentifierParamContext = IdentifierParamContext;
exports.ExpressionParamContext = ExpressionParamContext;
PlaygroundParser.ExpressionParamContext = ExpressionParamContext;
