import { FirstMidMiddleware } from './first-mid.middleware';

describe('FirstMidMiddleware', () => {
  it('should be defined', () => {
    expect(new FirstMidMiddleware()).toBeDefined();
  });
});
