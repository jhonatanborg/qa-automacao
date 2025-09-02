import { test } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://reclameaqui-evolucao.obviostaging.com.br/reclamar/8542/minha-historia/', {waitUntil: "domcontentloaded"});
    await page.locator('#close-modal-voice-complaint').click();
    await page.getByTestId('complaint-history-description').click();
    await page.getByTestId('complaint-history-description').fill('{\n        waitUntil: \'domcontentloaded\'\n    }{\n        waitUntil: \'domcontentloaded\'\n    }{\n        waitUntil: \'domcontentloaded\'\n    }{\n        waitUntil: \'domcontentloaded\'\n    }{\n        waitUntil: \'domcontentloaded\'\n    }');
    await page.getByTestId('complaint-history-cellphone').click();
    await page.getByTestId('complaint-history-cellphone').fill('(83) 98808 9452');
    await page.getByTestId('complaint-phased-button-next').click();
    await page.getByRole('button', { name: 'Publicar reclamação' }).click();
    await page.getByTestId('field-username').click();
    await page.getByTestId('field-username').press('CapsLock');
    await page.getByTestId('field-username').fill('06049690154');
    await page.getByTestId('field-username').press('Tab');
    await page.getByTestId('field-password').fill('8SXXFME');
    await page.getByTestId('field-password').press('CapsLock');
    await page.getByTestId('field-password').fill('8SXXFMEf!');
    await page.getByTestId('field-password').press('Enter');
    await page.getByRole('button', { name: 'Entrar' }).click();
    await page.getByTestId('wrapper-name').locator('path').first().click();
    await page.goto('https://reclameaqui-evolucao.obviostaging.com.br/reclamar/8542/minha-historia/');
});