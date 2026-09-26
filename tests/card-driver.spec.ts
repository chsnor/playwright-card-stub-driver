import { test, expect, Page } from "@playwright/test";

// =====================================================
// 1. STUB: โครงสร้าง HTML จำลองของ card.html
// =====================================================
const cardHtmlStub = `
  <!DOCTYPE html>
  <html>
    <head><title>Card Stub</title></head>
    <body>
      <div id="author">ถิรพุทธ์ ชูเมือง</div>
      <div class="inventory_item">
        <div class="inventory_item_name">Sauce Labs Backpack</div>
      </div>
    </body>
  </html>
`;

// =====================================================
// 2. DRIVER: ฟังก์ชันทำหน้าที่เรียก/โหลด card.html
// =====================================================
async function driverOpenCard(page: Page) {
  await page.setContent(cardHtmlStub);
}

// =====================================================
// 3. TEST: สั่งรันและตรวจสอบผล
// =====================================================
test("Driver เรียก card.html และตรวจพบชื่อ-นามสกุล", async ({ page }) => {
  // Driver เรียก Stub
  await driverOpenCard(page);

  // ตรวจว่ามีชื่อและนามสกุลตัวเองอยู่จริง
  await expect(page.locator("#author")).toContainText("ถิรพุทธ์ ชูเมือง");
});
