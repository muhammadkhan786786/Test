import {getMarsData} from './getDataFromApi';
describe('getMarsData function', () => {
  it('function should return null if url is not given', async () => {
    const response = await getMarsData();
    expect(response).toBe(null);
  });

  it('function should return null if url is not correct', async () => {
    const response = await getMarsData('https://abc.com');
    expect(response).toBe(null);
  });
});
