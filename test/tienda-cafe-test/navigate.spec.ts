import { expect, test } from '@playwright/test'

test.describe('navigate between the different options on the page', () => {
    const selectors = {
        linkSuscripciones: '#navbarStickyDesktop',
        xpathSuscripciones: '//*[@id="navbarStickyDesktop"]',
    }

    test('check the different subscriptions', async ({ page }) => {
        await test.step('user enters the page "latiendadelcafe" ', async () => {
            await page.goto('/')

            const titleHomePage =
                'El mejor café Colombiano online | La Tienda del Café'

            await expect(page).toHaveTitle(titleHomePage)
        })

        await test.step('a user click on subscriptions and valid page "subscripciones"', async () => {
            //const linkSuscripciones = '#navbarStickyDesktop'
            const getSuscripcions = page
                .locator(selectors.linkSuscripciones)
                .getByRole('link', {
                    name: 'Suscripciones',
                })
            await getSuscripcions.isVisible()
            await getSuscripcions.click()
            await page.waitForURL('**/collections/subscripciones')
        })
    })
})
