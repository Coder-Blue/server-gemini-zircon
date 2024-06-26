# Zircon Google Gemini Express API:
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Coder-Blue/server-gemini-zircon/blob/main/LICENSE)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

## Gói cần thiết
- NodeJS: 18+ - tải tại đây: https://nodejs.org/en/download

## Giới thiệu dự án
- Đây là một sản phẩm phụ trách mảng backend của ứng dụng web Zircon.

- Viết bằng JavaScript thuần với framework ExpressJS và Google Gemini API để mang đến cho Zircon khả năng phản hồi câu hỏi theo thời gian thực thông qua giao tiếp HTTP.

## Giải thích cơ chế cơ bản
- Server Zircon sẽ giao tiếp thông qua lệnh fetch với máy chủ http://localhost:3080 (*bạn có thể thay đổi PORT nếu bạn tải repository này về*). Với ví dụ ở đây, đầu vào là `chat` của https://github.com/Coder-Blue/zircon-app-op.git 

- Server Zircon sẽ nhận lệnh `GET` rồi trả ra một kết quả JSON để trả lời `chat` của người dùng thông qua các tác vụ của Google Gemnini API/Google Generative AI.

- Google Gemini API là một API miễn phí nếu bạn sử dụng phiên bản `gemini-1.0-pro`. Nếu bạn ở vùng quốc gia và lãnh thổ khác, hãy cân nhắc mình nằm trong vùng hỗ trợ, bằng không bạn sẽ phải sử dụng Google Vertex AI để thay thế.

## Hướng dẫn sử dụng
- Truy cập https://aistudio.google.com/ để lấy cho mình `API Key` theo hướng dẫn của Google. Rồi tạo một file `.env` rồi dán `API Key` mà bạn được cung cấp bởi Google rồi dán vào `API-KEY-THAT-YOU-GOT` như hình ảnh sau:

![APIScreenshot](https://github.com/Coder-Blue/server-gemini-zircon/blob/main/screenshots/SC1.png?raw=true)

- Tiếp theo bạn hãy `cd` vào thư mục repository mà bạn đã clone và sử dụng lệnh sau:
```bash
  npm install
```
- Và để server có thể được chạy hãy sử dụng lệnh sau:
```bash
  npm start
```
- Màn hình của bạn nó sẽ trông như thế này:

![NPMSTART](https://github.com/Coder-Blue/server-gemini-zircon/blob/main/screenshots/SC3.png?raw=true)

- Và khi truy cập vào http://localhost:3080 bằng trình duyệt của bạn nó sẽ có dạng như thế này:

![BROWSER](https://github.com/Coder-Blue/server-gemini-zircon/blob/main/screenshots/SC2.png?raw=true)

- Khi không muốn sử dụng thì bạn có thể sử dụng tổ hợp phím `CTRL + C` vào màn hình terminal của bạn để kết thúc server.

## Tổng kết
- Bạn có thể sử dụng mặc định hoặc thực hiện một số tùy chỉnh nếu bạn muốn `fetch` theo cách riêng của bạn. Hãy tham khảo tài liệu về Google Gemini API tại đây: https://ai.google.dev/tutorials/node_quickstart

- Thay vì tự thân bạn host thì bạn cũng có thể làm một repository trên trang Github của bạn với bản clone của repository này rồi truy cập Vercel qua tên miền https://vercel.com rồi làm theo hướng dẫn để Vercel host hộ bạn. 

*Lưu ý: Host bằng Vercel có thể giảm tốc độ phản hồi một chút*

## Hỗ trợ
- Bạn có thể nhận được sự hỗ trợ bằng các cách sau:

Tham gia máy chủ Discord của tôi: https://discord.gg/5Nmwm24dWV

Liên hệ qua Email: trananhquan1009@gmail.com

Liên hệ qua Facebook: Noah Trần