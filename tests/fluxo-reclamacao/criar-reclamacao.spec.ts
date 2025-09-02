import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://reclameaqui-tst.obviostaging.com.br/');
    await page.getByTestId('btn-enter').click();
    await page.getByTestId('btn-acessar').click();
    await page.getByRole('textbox', { name: 'Digite o e-mail ou CPF' }).click();
    await page.getByRole('textbox', { name: 'Digite o e-mail ou CPF' }).fill('06049690154');
    await page.getByRole('textbox', { name: 'Digite a sua senha' }).click();
    await page.getByRole('textbox', { name: 'Digite a sua senha' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Digite a sua senha' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Digite a sua senha' }).fill('8SXXFME');
    await page.getByRole('textbox', { name: 'Digite a sua senha' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Digite a sua senha' }).fill('8SXXFMEf!');
    await page.getByRole('button', { name: 'Entrar', exact: true }).click();
    await page.getByRole('link', { name: 'Nova reclamação' }).click();
    await page.getByRole('textbox', { name: 'Qual o nome da empresa?' }).click();
    await page.getByRole('textbox', { name: 'Qual o nome da empresa?' }).fill('abdu');
    await page.getByText('abdu Restaurante').click();
    await page.getByRole('link', { name: 'Reclamar' }).click();
    await page.locator('#close-modal-voice-complaint').click();
    await page.getByTestId('complaint-history-description').click();
    await page.getByTestId('complaint-history-description').fill('Não consigo me registrar pq assim q coloco o SMS pra confirmar a conta,pede a data de nascimento..porém não aparece nada pra realizar esta opção,e nao consigo entrar em CTT com ninguém.\nJá tentei várias vezes mas não consigo me cadastrar');
    await page.getByTestId('complaint-phased-button-next').click();
    await page.getByRole('button', { name: 'Publicar reclamação' }).click();
    await page.goto('https://reclameaqui-tst.obviostaging.com.br/reclamar/8542/sucesso/jPCH7ln-AcQHUHma/');
    await expect(page.locator('#text')).toContainText('Sua reclamação foi publicada com sucesso!');
});