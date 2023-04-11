describe("Testing ageClassification() Function", function() {

  it("Test ageClassification() Function with negative number, result is null", function() {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(-10)).toBe(null);
  });

  it("Test ageClassification() Function from 0 to 24, result is 'детский возраст'", function() {
    expect(ageClassification(1)).toBe('детский возраст');
    expect(ageClassification(24)).toBe('детский возраст');
  });

  it("Test ageClassification() Function from 24+ to 44, result is 'молодой возраст'", function() {
    expect(ageClassification(24.01)).toBe('молодой возраст');
    expect(ageClassification(44)).toBe('молодой возраст');
  });

  it("Test ageClassification() Function from 44+ to 65, result is 'средний возраст'", function() {
    expect(ageClassification(44.01)).toBe('средний возраст');
    expect(ageClassification(65)).toBe('средний возраст');
  });

  it("Test ageClassification() Function from 65+ to 75, result is 'пожилой возраст'", function() {
    expect(ageClassification(65.01)).toBe('пожилой возраст');
    expect(ageClassification(75)).toBe('пожилой возраст');
  });

  it("Test ageClassification() Function from 75+ to 90, result is 'старческий возраст'", function() {
    expect(ageClassification(75.01)).toBe('старческий возраст');
    expect(ageClassification(90)).toBe('старческий возраст');
  });

  it("Test ageClassification() Function from 90+ to 122, result is 'долгожители'", function() {
    expect(ageClassification(90.01)).toBe('долгожители');
    expect(ageClassification(122)).toBe('долгожители');
  });

  it("Test ageClassification() Function more than 122, result is null", function() {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});