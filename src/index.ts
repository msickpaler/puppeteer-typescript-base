import puppeteer from 'puppeteer'

// 公式ドキュメント
// https://pptr.dev/
// https://developer.chrome.com/docs/puppeteer/

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

await page.goto('https://google.com')

const logoUrl = await page.evaluate(() => {
  const logo = document?.querySelector('img[alt="Google"]')
  return logo?.getAttribute('src')
})
console.log('logoUrl', logoUrl)

browser.close()
