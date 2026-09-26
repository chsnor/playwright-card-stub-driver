import { test, expect, BrowserContext, Page } from "@playwright/test";

// =========================================================================
// 1. STUB: โครงสร้าง HTML จำลองหน้า Inventory ของ SauceDemo
// =========================================================================
const sauceCardStub = `
  <!DOCTYPE html>
  <html>
    <head><title>SauceDemo Inventory Stub</title></head>
    <body>
      <div id="author" data-test="student-name">ถิรพุทธ์ ชูเมือง</div>
      <div class="inventory_list" data-test="stub-inventory">
        <div class="inventory_item">
          <div class="inventory_item_name">Sauce Labs Backpack (Custom Stub)</div>
          <div class="inventory_item_desc">การ์ดสินค้าจำลองสำหรับทดสอบระบบ Inventory</div>
          <div class="inventory_item_price">$29.99</div>
          <button id="add-to-cart-sauce-labs-backpack">Add to cart</button>
        </div>
      </div>
    </body>
  </html>
`;

// =========================================================================
// 2. DRIVER: ทำหน้าที่ Bypass Login ด้วย Cookie เพื่อเปิด SauceDemo
// แล้ว Inject Stub card.html เข้าไปในระบบของ SauceDemo
// =========================================================================
async function driverOpenSauceCard(context: BrowserContext): Promise<Page> {
  await context.addCookies([
    {
      name: "session-username",
      value: "standard_user",
      domain: "www.saucedemo.com",
      path: "/",
    },
  ]);

  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/inventory.html");

  await page.setContent(sauceCardStub);

  return page;
}

// =========================================================================
// 3. TEST: สั่งรัน Driver และตรวจเช็กผล
// =========================================================================
test("Driver เปิด SauceDemo Inventory Stub และตรวจพบชื่อ-นามสกุล", async ({
  browser,
}) => {
  const context = await browser.newContext();

  try {
    const page = await driverOpenSauceCard(context);

    await expect(page.locator('[data-test="stub-inventory"]')).toBeVisible();

    await expect(page.locator("#author")).toContainText("ถิรพุทธ์ ชูเมือง");
  } finally {
    await context.close();
  }
});
