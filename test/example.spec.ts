import { expect, test } from '@playwright/test';

test.describe('navigate between the different options on the page', () => {
    const selectors = {
        linkSuscripciones: '#navbarStickyDesktop',
        xpathSuscripciones: '//*[@id="navbarStickyDesktop"]',
        logo: '//*[@id="header-component"]/div/a[2]/img',
        menuHeader:
            '#shopify-section-sections--19339017879809__announcement-bar',
    };

    test('check the different subscriptions', async ({ page }) => {
        await test.step('user enters the page "latiendadelcafe" ', async () => {
            const linkTienda: string = 'https://latiendadelcafe.co/';

            await page.goto(linkTienda);
            const logo = page.locator(selectors.menuHeader);
            await expect(logo).toBeVisible();
            await expect(logo).toBeInViewport();
        });
    });
});
