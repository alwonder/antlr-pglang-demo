export default class RuntimeError extends Error {
  public line: number;

  constructor(message: string, line: number) {
    super(message);
    this.line = line;
    Object.setPrototypeOf(this, RuntimeError.prototype);
  }
}

export interface EditorError {
  message: string;
  source: string;
  line: number;
}
