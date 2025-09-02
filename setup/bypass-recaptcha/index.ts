import { Page } from '@playwright/test';

/**
 * Aplica o header X-automated-test em todas as requisições da página.
 * Ideal para ambientes de homologação que ignoram reCAPTCHA em testes automatizados.
 */
export async function bypassRecaptcha(page: Page) {
    await page.route('**/*', async (route) => {
        const headers = {
            ...route.request().headers(),
            'X-automated-test': 'true',
        };
        await route.continue({ headers });
    });
}
