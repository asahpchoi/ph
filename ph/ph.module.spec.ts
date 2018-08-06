import { PhModule } from './ph.module';

describe('PhModule', () => {
  let phModule: PhModule;

  beforeEach(() => {
    phModule = new PhModule();
  });

  it('should create an instance', () => {
    expect(phModule).toBeTruthy();
  });
});
