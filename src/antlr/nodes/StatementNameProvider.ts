export interface StatementNameProvider {
  getStatementName(): string;
}

export function isStatementNameProvider(
  node: any,
): node is StatementNameProvider {
  return 'getStatementName' in node;
}

export interface StatementParamProvider {
  hasSomeParameters(params: any[]): boolean;
}

export function isStatementParamProvider(
  node: any,
): node is StatementParamProvider {
  return 'hasSomeParameters' in node;
}
