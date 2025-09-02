import { expect, test } from '@playwright/test';

test('Login do consumidor com credenciais válidas', async ({ page }) => {
  await page.goto('https://reclameaqui-tst.obviostaging.com.br/login/consumidor/');
  await page.fill('#username', '06049690154');
  await page.fill('#password', '8SXXFMEf!');
  await page.click('#login_novo_entrar');
  // Aguarda redirecionamento ou elemento que indica login bem-sucedido
  await expect(page).not.toHaveURL('https://reclameaqui-tst.obviostaging.com.br/login/consumidor/');
  // Você pode adicionar uma validação mais específica, como checar se aparece o nome do usuário logado
});
