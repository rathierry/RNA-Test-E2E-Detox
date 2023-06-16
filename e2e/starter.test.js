import {device, element, by} from 'detox';

describe('Defaut E2E testing', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // FIXME: It is a good idea to start every test from a fresh state, since the preceding ones might leave your application in an unpredictable state if they fail.
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have title screen', async () => {
    const titleID = element(by.id('title'));
    await expect(titleID).toBeVisible();
  });

  const inputText = 'Starter test';

  it('should type text', async () => {
    const input = element(by.id('input'));
    await input.typeText(inputText);
  });

  it('should tap on the press me button', async () => {
    await element(by.id('button')).tap();
  });

  it('should have alert message with typed text', async () => {
    await expect(element(by.text(inputText)).atIndex(1)).toBeVisible();
    await element(by.text('OK')).tap();
  });
});
