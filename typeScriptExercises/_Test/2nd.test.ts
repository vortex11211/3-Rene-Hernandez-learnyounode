
const babySteps = (args: string[]): number => {
  return Number(args.reduce((before: string, current: string, i: number) => {
    return i < 2 ? before : String(Number(before) + Number(current));
  }, '0'));
};


describe('babySteps', () => {
  it('should sum up the command line arguments correctly', () => {
    const args = ['node', 'baby-steps.ts', '1', '2', '3','4'];
    const result = babySteps(args);
    expect(result).toBe(10);
  });});