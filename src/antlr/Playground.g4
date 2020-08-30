grammar Playground;

parse
  : scope EOF
  ;

scope
  : statement*
  ;

statement
  : eventStatement
  | objectMethodCall
  | staticMethodCall
  | varDeclaration
  | varAssignment
  | objectPropertyAssignment
  | loopStatement
  | whileStatement
  | conditionalStatement
  ;

varDeclaration
  : VAR name=IDENTIFIER (ASSIGN assignment=expression)?;

varAssignment
  : name=IDENTIFIER op=(ASSIGN|INC|DEC) assignment=expression;

objectPropertyAssignment
  : property=objectProperty op=(ASSIGN|INC|DEC) assignment=expression;

eventStatement
  : AT eventName=IDENTIFIER ASSIGN LPAREN params=eventParams? RPAREN ARROW body=scope END
  ;

eventParams
  : IDENTIFIER (',' IDENTIFIER)*
  ;

conditionalStatement
  : IF condition=expression consequent=scope ELSE alternative=conditionalStatement  #elseIfConditional
  | IF condition=expression consequent=scope ELSE alternative=scope END             #elseCondiitional
  | IF condition=expression consequent=scope END                                    #thenConditional
  ;

loopStatement
  : LOOP iterations=expression body=scope END
  ;

whileStatement
  : WHILE condition=expression body=scope END
  ;

expression
  : primary                                                    #primaryExpr
  | objectProperty                                             #objectPropExpr
  | objectMethodCall                                           #objectCallExpr
  | staticMethodCall                                           #staticCallExpr
  | '(' expression ')'                                         #parensExpr
  | op=('NOT'|'-') expression                                  #unaryExpr
  | expression op=('*'|'/') expression                         #mulDivExpr
  | expression op=('+'|'-') expression                         #addSubExpr
  | expression op=('=='|'!='|'>'|'<'|'>='|'<=') expression     #comparisonExpr
  | expression op='AND' expression                             #booleanExpr
  | expression op='OR' expression                              #booleanExpr
  ;

primary
  : objectIdentifier
  | literal
  ;

objectProperty
  : object=objectIdentifier DOT method=IDENTIFIER
  ;

objectMethodCall
  : object=objectIdentifier DOT method=IDENTIFIER LPAREN (methodParam (',' methodParam)*)? RPAREN
  ;

staticMethodCall
  : method=IDENTIFIER LPAREN (methodParam (',' methodParam)*)? RPAREN
  ;

objectIdentifier
  : THIS
  | IDENTIFIER
  ;

methodParam
  : objectIdentifier #identifierParam
  | literal          #literalParam
  | expression       #expressionParam
  ;

literal
  : sign=('+'|'-')? NUMBER_LITERAL
  | BOOL_LITERAL
  | STRING_LITERAL
  | constantLiteral
  ;

constantLiteral
  : keyInput
  ;

booleanOperator
  : AND
  | OR
  | NOT
  ;

arithmeticOperator
  : ADD
  | SUB
  | MUL
  | DIV
  | MOD
  ;

relationalOperator
  : GT
  | LT
  | GE
  | LE
  | EQUAL
  | NOTEQUAL
  ;

keyInput
  : ARROWUP
  | ARROWDOWN
  | ARROWLEFT
  | ARROWRIGHT
  | SPACE
  | SPACEBAR
  | KEYA
  | KEYB
  | KEYC
  | KEYD
  | KEYE
  | KEYF
  | KEYG
  | KEYH
  | KEYI
  | KEYJ
  | KEYK
  | KEYL
  | KEYM
  | KEYN
  | KEYO
  | KEYP
  | KEYQ
  | KEYR
  | KEYS
  | KEYT
  | KEYU
  | KEYV
  | KEYW
  | KEYX
  | KEYY
  | KEYZ
  | KEY0
  | KEY1
  | KEY2
  | KEY3
  | KEY4
  | KEY5
  | KEY6
  | KEY7
  | KEY8
  | KEY9
  ;

// Keywords

VAR: 'var';
THIS: 'this';
AT: '@';
WHILE: 'while';
LOOP: 'loop';
IF: 'if';
ELSE: 'else';
END: 'end';

// Literals

BOOL_LITERAL: 'true' | 'false';
NUMBER_LITERAL: Digits ('.' Digits)?;
//STRING_LITERAL
//  : '\'' ('\'\'' | ~ ('\''))* '\''
//  | '"' ('\'\'' | ~ ('\''))* '"'
//  ;
// Прежний вариант литерала не работал со случаем двух или более параметров. Этот вариант работает.
// Нагуглено
STRING_LITERAL
  : '"' ( ESCAPED_QUOTE | ~('\n'|'\r') )*? '"'
  | '\'' ( ESCAPED_QUOTE | ~('\n'|'\r') )*? '\'';
NULL: 'null';

// Separators

LPAREN: '(';
RPAREN: ')';
DOT: '.';

// Operators

ASSIGN: '=';
INC: '+=';
DEC: '-=';
AND: 'AND';
OR: 'OR';
NOT: 'NOT';
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
MOD: '%';
EQUAL: '==';
NOTEQUAL: '!=';
GT: '>';
LT: '<';
GE: '>=';
LE: '<=';
ARROW: '=>';

// Keyboard input

ARROWUP: 'arrowUp';
ARROWDOWN: 'arrowDown';
ARROWLEFT: 'arrowLeft';
ARROWRIGHT: 'arrowRight';
SPACE: 'space';
SPACEBAR: 'spaceBar';
KEYA: 'keyA';
KEYB: 'keyB';
KEYC: 'keyC';
KEYD: 'keyD';
KEYE: 'keyE';
KEYF: 'keyF';
KEYG: 'keyG';
KEYH: 'keyH';
KEYI: 'keyI';
KEYJ: 'keyJ';
KEYK: 'keyK';
KEYL: 'keyL';
KEYM: 'keyM';
KEYN: 'keyN';
KEYO: 'keyO';
KEYP: 'keyP';
KEYQ: 'keyQ';
KEYR: 'keyR';
KEYS: 'keyS';
KEYT: 'keyT';
KEYU: 'keyU';
KEYV: 'keyV';
KEYW: 'keyW';
KEYX: 'keyX';
KEYY: 'keyY';
KEYZ: 'keyZ';
KEY0: 'key0';
KEY1: 'key1';
KEY2: 'key2';
KEY3: 'key3';
KEY4: 'key4';
KEY5: 'key5';
KEY6: 'key6';
KEY7: 'key7';
KEY8: 'key8';
KEY9: 'key9';

// Whitespace and comments
WS: [ \t\r\n\u000C]+ -> channel(HIDDEN);
COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT: ('//'|'#') ~[\r\n]* -> channel(HIDDEN);

// Identifiers
IDENTIFIER: Letter LetterOrDigit*;

fragment ESCAPED_QUOTE : '\\"';

fragment Digits
  : [0-9] ([0-9_]* [0-9])?
  ;

fragment LetterOrDigit
  : Letter
  | [0-9]
  ;

fragment Letter
  : [a-zA-Z$_]
  | ~[\u0000-\u007F\uD800-\uDBFF] // covers all characters above 0x7F which are not a surrogate
  | [\uD800-\uDBFF] [\uDC00-\uDFFF] // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
  ;
