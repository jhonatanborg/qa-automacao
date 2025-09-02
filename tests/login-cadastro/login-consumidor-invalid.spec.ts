import { expect, test } from '@playwright/test';

test('Login do consumidor com credenciais inválidas', async ({ page }) => {
  await page.goto('https://reclameaqui-tst.obviostaging.com.br/login/consumidor/');
  await page.fill('#username', '00000000000'); // CPF inválido
  await page.fill('#password', 'senhaErrada!'); // Senha inválida
  await page.click('#login_novo_entrar');
  // Aguarda mensagem de erro
  await expect(page.locator('.sc-hABBGs')).toContainText(['senha', 'usuário', 'inválido', 'incorreto']);
  // Ajuste o seletor e texto conforme a mensagem real exibida na tela
});
