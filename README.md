# Playwright Integration Testing: Inventory Card Stub & Driver

โปรเจกต์ส่งงาน Integration Testing ด้วย Playwright โดยมีรายละเอียดดังนี้:

## 1. ข้อมูลนักศึกษา
- **ชื่อ-นามสกุล:** ถิรพุทธ์ ชูเมือง

---

## 2. สิ่งที่ทำในโปรเจกต์
- **Stub (`cardHtmlStub`):** จำลอง Component การ์ดสินค้าของ Inventory พร้อมใส่ชื่อ-นามสกุลของตนเอง
- **Driver (`driverOpenCard`):** ฟังก์ชันทำหน้าที่เป็นตัวเรียก/โหลดหน้า Stub ขึ้นมาทดสอบ
- **Test Assertion:** ตรวจสอบว่าหน้า Stub ถูกเรียกขึ้นมาได้จริง และมีชื่อ-นามสกุล "ถิรพุทธ์ ชูเมือง" ปรากฏอยู่จริง

---

## 3. วิธีการรันการทดสอบ
```bash
npm install
npx playwright test tests/card-driver.spec.ts --headed
```
