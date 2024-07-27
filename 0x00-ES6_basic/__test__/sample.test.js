describe('sample Test Suite', () => {
  it('should call at least one assertion', () => {
    expect.hasAssertions(); // Ensure at least one assertion is called

    const value = true;
    expect(value).toBe(true);

    const result = 1 + 1;
    expect(result).toBe(2);
  });
});
