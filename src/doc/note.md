*Chú thích:*
- `📂api`: đây là nơi cài đặt code để call API cùng với định nghĩa type request body, param và response
- `📂components`: folder này chứa những components được dùng chung như `Modal`, `Icon`, `Layout`, ... 
- `📂config`: là nơi chứa constant được dùng chung của project. 
- `📂docs`: là nơi chứa tài liệu về project.
- `📂app` và `📂modules`: `app` có nhiệm vụ routing request, khởi tạo server data và trỏ đến code trong `modules` tương ứng.  
_(Lưu ý: mỗi file trong `app` sẽ tương ứng với một folder trong `modules`. Các components con của module sẽ đặt tại folder `components` trong thư mục 📂[module-name]).
- `📂public`: nơi chứa các file static.
- `📂redux`: chứa định nghĩa reducer, action để sử dụng cho redux trong folder `slices` viết sử dụng redux toolkit.
- `📂styles`: nơi chứa các style được dùng chung cho toàn bộ project.
- `📂types`: chứa type được dùng chung.
- `📂utils`: chứa các hàm utilities dùng chung trong project.

# Module folder structure
Một module tiêu chuẩn sẽ có cấu trúc như dưới đây:
```
📂[module-name]
 ┣ 📂components
 ┃ ┣ 📃[component-name].scss
 ┃ ┗ 📜[component-name].tsx
 ┣ 📂context
 ┣ 📃page.scss
 ┗ 📜page.tsx
```
*Chú thích:*
- `📂components`: chứa các component chỉ sử dụng trong module này, nếu component đươc dùng tại các module khác thì phải di chuyển lên thư mục `components` bên ngoài.
- `📂context`: chứa khai báo wrapper, context được sử dụng trong module
- `📜[component-name].tsx`: chứa code component(JSX, event handler, ...).
- `📃[component-name].scss`: file này chứa style dùng riêng cho component này. (Lưu ý: cần phải sử dụng wrapper class khi viết css)
