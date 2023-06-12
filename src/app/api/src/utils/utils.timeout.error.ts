export class CustomTimeoutError extends Error {
  constructor(readonly endPoint: string) {
    super('chiamata in timeout ' + endPoint);
    this.name = 'CustomTimeoutError';
  }
}
