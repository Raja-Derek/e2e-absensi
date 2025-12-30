import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { TEST_DATA } from '../../data/testData';

test.describe('Login Tests', () => {
  test('Login berhasil dengan kredensial valid', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login({ email: TEST_DATA.emailLogin, password: TEST_DATA.passwordLogin });
    await loginPage.assertDashboardVisible();
  });

  test('Login dengan Remember Me aktif', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginRememberMe({ email: TEST_DATA.emailLogin, password: TEST_DATA.passwordLogin });
    await loginPage.assertDashboardVisible();
  });

  test('Login gagal dengan email tidak terdaftar', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginRememberMe({ email: TEST_DATA.emailLogin, password: TEST_DATA.passwordLogin });
    await loginPage.assertDashboardNotVisible()

  });

  test('Login dengan password kosong', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login({ email: TEST_DATA.emailLogin, password: '' });
    await loginPage.assertDashboardNotVisible()

  });

});
