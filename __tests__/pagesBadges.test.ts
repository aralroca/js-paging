import { describe, it, expect } from 'bun:test';
import pagesBadges from '../index.js';

describe('pagesBadges', () => {
  it('Should work with just 1 page', async () => {
    const input = { currentPage: 1, pages: 1 };
    const output = pagesBadges(input);
    const expected = [1];
    expect(output).toEqual(expected);
  });

  it('Should work with just 5 pages', async () => {
    const input = { currentPage: 2, pages: 5 };
    const output = pagesBadges(input);
    const expected = [1, 2, 3, 4, 5];
    expect(output).toEqual(expected);
  });

  it('Should work with 9 pages', async () => {
    const input = { currentPage: 1, pages: 9 };
    const output = pagesBadges(input);
    const expected = [1, 2, 3, 4, null, 9];
    expect(output).toEqual(expected);
  });

  it('Should work with pages bigger than 5', async () => {
    const input = { currentPage: 14, pages: 20 };
    const output = pagesBadges(input);
    const expected = [1, null, 13, 14, 15, null, 20];
    expect(output).toEqual(expected);
  });

  it('Should work with pages bigger than 5 and current page as first | second | third', async () => {
    const input = { currentPage: 1, pages: 20 };
    const input2 = { currentPage: 2, pages: 20 };
    const input3 = { currentPage: 3, pages: 20 };

    const output = pagesBadges(input);
    const output2 = pagesBadges(input2);
    const output3 = pagesBadges(input3);

    const expected = [1, 2, 3, 4, null, 20];
    expect(output).toEqual(expected);
    expect(output2).toEqual(expected);
    expect(output3).toEqual(expected);
  });

  it('Should work with pages bigger than 5 and current page as 4', async () => {
    const input = { currentPage: 4, pages: 7 };
    const input2 = { currentPage: 4, pages: 6 };

    const output = pagesBadges(input);
    const output2 = pagesBadges(input2);

    const expected = [1, null, 3, 4, 5, null, 7];
    const expected2 = [1, null, 3, 4, 5, 6];

    expect(output).toEqual(expected);
    expect(output2).toEqual(expected2);
  });

  it('Should work with pages bigger than 5 and current page as one of the 3 last ones', async () => {
    const input = { currentPage: 20, pages: 20 };
    const input2 = { currentPage: 19, pages: 20 };
    const input3 = { currentPage: 18, pages: 20 };

    const output = pagesBadges(input);
    const output2 = pagesBadges(input2);
    const output3 = pagesBadges(input3);

    const expected = [1, null, 17, 18, 19, 20];

    expect(output).toEqual(expected);
    expect(output2).toEqual(expected);
    expect(output3).toEqual(expected);
  });

  it('Should work with page 17/20', async () => {
    const input = { currentPage: 17, pages: 20 };
    const output = pagesBadges(input);
    const expected = [1, null, 16, 17, 18, null, 20];

    expect(output).toEqual(expected);
  });

  it('Should work with page 3/6', async () => {
    const input = { currentPage: 3, pages: 6 };
    const output = pagesBadges(input);
    const expected = [1, 2, 3, 4, null, 6];

    expect(output).toEqual(expected);
  });
});
