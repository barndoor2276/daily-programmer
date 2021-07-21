import 'jasmine'
import { letterSum } from './399-easy';

describe('399-easy', () => {
  it('evaluates empty string', () => {
    expect(letterSum('')).toEqual(0)
  });

  it('evaluates [a]', () => {
    expect(letterSum('a')).toEqual(1)
  });

  it('evaluates [z]', () => {
    expect(letterSum('z')).toEqual(26)
  });

  it('evaluates [Z]', () => {
    expect(letterSum('Z')).toEqual(26)
  });

  it('evaluates [cab]', () => {
    expect(letterSum('cab')).toEqual(6)
  });

  it('evaluates [excellent]', () => {
    expect(letterSum('excellent')).toEqual(100)
  });

  it('evaluates [microspectrophotometries]', () => {
    expect(letterSum('microspectrophotometries')).toEqual(317)
  });

  it('evaluates string with invalid characters', () => {
    expect(letterSum('a1a')).toEqual(2)
  });
});
