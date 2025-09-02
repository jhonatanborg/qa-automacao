import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://reclameaqui-tst.obviostaging.com.br/');
    await page.getByTestId('search-input').click();
    await page.getByTestId('search-input').fill('abdu');
    await page.getByRole('button', { name: 'Abdu Restaurante Abdu' }).click();
    await page.getByRole('link', { name: 'Ver todas as reclamações' }).click();
    await page.getByRole('link', { name: 'Erro ao cadastrar: Falha na' }).click();
    await expect(page.getByTestId('complaint-title')).toContainText('Erro ao cadastrar: Falha na confirmação via SMS e ausência de opção para inserir data de nascimento.');
});