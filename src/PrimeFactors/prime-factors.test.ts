import { PrimeFactors } from './prime-factors';

let primeFactors;

describe('PrimeFactors Test Module', () => {
  beforeEach(() => {
      primeFactors = new PrimeFactors();
  });

  afterEach(() => {
      primeFactors = null;
  });

  it('Generates Prime Factor', () => {
    expect(primeFactors.generate(1)).toEqual([])
    // expect(primeFactors.generate(2)).toEqual([2])
  });
});

