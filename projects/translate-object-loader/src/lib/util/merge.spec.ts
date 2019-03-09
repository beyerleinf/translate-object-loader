import {merge} from './merge';

describe('merge', () => {
  it('should merge keys that do not exist in target root', () => {
    const src = {key1: 'v1', key2: 'v2'};
    const target = {};

    const result = merge(target, src);

    expect(result).toEqual(src);
    expect(target).toEqual({});
  });

  it('should merge keys that exist in target root', () => {
    const src = {key1: 'new', key2: 'v2'};
    const target = {key1: 'v1', key3: 'v3'};

    const result = merge(target, src);

    expect(result).toEqual({key1: 'new', key2: 'v2', key3: 'v3'});
    expect(target).toEqual({key1: 'v1', key3: 'v3'});
  });

  it('should merge nested objects', () => {
    const src = {key1: {sub1: 'sv1', sub2: 'sv2'}};
    const target = {key1: {sub1: 'sv1', sub3: 'sv3'}};

    const result = merge(target, src);

    expect(result).toEqual({key1: {sub1: 'sv1', sub2: 'sv2', sub3: 'sv3'}});
    expect(target).toEqual({key1: {sub1: 'sv1', sub3: 'sv3'}});
  });

  it('should replace simple key with object', () => {
    const src = {key1: {sub1: 'sv1', sub2: 'sv2'}};
    const target = {key1: 'v1', key2: 'v2'};

    const result = merge(target, src);

    expect(result).toEqual({key1: {sub1: 'sv1', sub2: 'sv2'}, key2: 'v2'});
    expect(target).toEqual({key1: 'v1', key2: 'v2'});
  });

  it('should add nested object that does not exist in target', () => {
    const src = {key2: {sub1: 'sv1', sub2: 'sv2'}};
    const target = {key1: {sub3: 'sv3', sub4: 'sv4'}};

    const result = merge(target, src);

    expect(result).toEqual({key1: {sub3: 'sv3', sub4: 'sv4'}, key2: {sub1: 'sv1', sub2: 'sv2'}});
    expect(target).toEqual({key1: {sub3: 'sv3', sub4: 'sv4'}});
  });

  it('should replace object with simple key', () => {
    const src = {key2: 'v2'};
    const target = {key1: {sub3: 'sv3', sub4: 'sv4'}, key2: {sub1: 'sv1', sub2: 'sv2'}};

    const result = merge(target, src);

    expect(result).toEqual({key1: {sub3: 'sv3', sub4: 'sv4'}, key2: 'v2'});
    expect(target).toEqual({key1: {sub3: 'sv3', sub4: 'sv4'}, key2: {sub1: 'sv1', sub2: 'sv2'}});
  });
});
