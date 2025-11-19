# 🚀 PC Shop Landing Page | Tailwind CSS Practice

## ✨ Tổng Quan Dự Án

Đây là một mini project **Landing Page bán PC** được xây dựng nhằm mục đích chính là luyện tập và làm chủ **Tailwind CSS**, **không sử dụng bất kỳ framework JavaScript** lớn nào (React, Vue, Angular).

Dự án chứng minh rằng bạn hoàn toàn có thể tạo ra giao diện đẹp, responsive và hiện đại chỉ với **HTML + Tailwind CSS utility classes**.

---

## 🎯 Công Nghệ & Mục Tiêu

### 📌 Công Nghệ Sử Dụng

| Công Nghệ              | Mô Tả                                                |
| ---------------------- | ---------------------------------------------------- |
| **HTML5**              | Xây dựng cấu trúc ngữ nghĩa cho trang                |
| **Tailwind CSS**       | Styling toàn bộ giao diện: layout, màu sắc, hiệu ứng |
| **Vanilla JavaScript** | Xử lý tương tác đơn giản như mở/đóng menu mobile     |

### 🎯 Mục Tiêu Chính

* **Tailwind Master**: Luyện tư duy Utility‑First
* **Responsive Design**: Hiển thị tốt trên mọi thiết bị
* **Code Cleanliness**: HTML gọn, dễ đọc, dễ bảo trì

---

## 🖼️ Các Tính Năng Giao Diện

* **Hero Section nổi bật**: Giới thiệu sản phẩm/khuyến mãi chính
* **Card sản phẩm**: PC Gaming, Workstation, Office
* **Feature Section**: Trình bày điểm mạnh của cửa hàng bằng Flex/Grid
* **Responsive Navigation**: Menu hamburger cho mobile

---

## 📂 Cấu Trúc Thư Mục (Chuyên Nghiệp)

```
pc-landing-page/
├── src/
│   ├── input.css          # File CSS nguồn để Tailwind build
│   ├── js/
│   │   └── main.js        # Các script JS đơn giản (menu, toggle)
│   ├── img/               # Tất cả hình ảnh (hero, sản phẩm, icons)
│   └── components/        # Các phần HTML nhỏ (tùy chọn)
│
├── dist/
│   ├── output.css         # File CSS sau khi Tailwind biên dịch
│   └── output.css.map
│
├── index.html             # File giao diện chính
├── tailwind.config.js     # Cấu hình Tailwind CSS
├── package.json           # Quản lý dependencies
├── README.md              # Tài liệu dự án
└── LICENSE.md             # Giấy phép
```

## ⚙️ Hướng Dẫn Cài Đặt và Chạy

### 1️⃣ Clone Repository

```bash
git clone [Đường dẫn repo của bạn]
cd [Tên repo, ví dụ: pc-landing-page]
```

### 2️⃣ Cài Đặt Phụ Thuộc (nếu dùng PostCSS / Tailwind CLI)

```bash
# Đảm bảo đã cài Node.js
npm install
```

### 3️⃣ Biên Dịch Tailwind CSS

Chạy chế độ watch để Tailwind tự rebuild mỗi khi file HTML thay đổi:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

> Lưu ý: đảm bảo `input.css`, `dist/`, và `tailwind.config.js` được thiết lập đúng.

### 4️⃣ Chạy Project

* Mở trực tiếp file `index.html`, hoặc
* Dùng **Live Server** trong VS Code.

---

## ✍️ Tác Giả

**[Haruto]** — [https://github.com/Haruto2804]

---

## ⚖️ Giấy Phép

Dự án này sử dụng **[MIT License]**.

Vui lòng xem thêm trong file `LICENSE.md`.

---
