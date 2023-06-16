1. Home Page
    1. Show recently listed NFTs
        1. If you own the NFT, you can update the listing
        2. If not, you can buy the listing
2. Sell Page:
    1. You can list your NFT

## Learn More
### Moralis 
Moralis provides a single workflow for building high performance dapps. Fully copatible with your favorite web3 tools and services.

Can create web hooks, create email, a push notification, run some custom code, run some calculation, save something to database.
Everything on chain at the end of the day needs to go into our backend

**Moralis Workflow**
1. Moralis Identity
Login users across different chains and wallets with one line of code.
Moralis helps you manage cross-chain identities and user sessions.

2. Moralis Real-time
Get real-time web-hooks and alerts when users execute transactions or when smart contracts emit events.

3. Moralis SDKs
Using Moralis SDKs you can easily connect your website, game or mobile app to all Moralis features.

4. Moralis APIs
Moralis APIs can be used to query any data related to NFTs, tokens, accounts...

**Moralis server**
The Moralis Server has been deprecated and you should now self-host your own server. To self-host, follow this guide:
https://moralis.io/how-to-set-up-a-self-hosted-web3-server/

**Moralis: How do we tell it to listen to our events?**
1. Connect it to our blockchain
2. Which contract, which events, and what to do when it hears those events 

## What is frp?
frp is a fast reverse proxy that allows you to expose a local server located behind a NAT or firewall to the Internet. It currently supports TCP and UDP, as well as HTTP and HTTPS protocols, enabling requests to be forwarded to internal services via domain name.

frp also offers a P2P connect mode.

```
./frpc -c frpc.ini
bash: ./frpc: Permission denied
```

Lỗi "Permission denied" xuất hiện khi bạn cố gắng chạy tệp thực thi `frpc` mà không có quyền thực thi trên nó. Để khắc phục vấn đề này, bạn có thể thực hiện một số bước sau:

1. Đảm bảo rằng bạn đang ở trong thư mục chứa tệp `frpc`. Sử dụng lệnh `cd` để di chuyển đến thư mục chính xác.
   ```
   cd /đường/dẫn/thư/mục/frpc
   ```
   
2. Kiểm tra quyền thực thi của tệp `frpc`. Sử dụng lệnh `ls -l` để hiển thị thông tin chi tiết về tệp.
   ```
   ls -l frpc
   ```
   Kết quả sẽ giống như sau:
   ```
   -rw-r--r--  1 user  group  12345678 Jun 9 10:00 frpc
   ```
   Đảm bảo rằng quyền thực thi `-x` được cấp cho chủ sở hữu (owner) của tệp.

3. Nếu quyền thực thi không được cấp, bạn có thể sử dụng lệnh `chmod` để cấp quyền thực thi cho tệp `frpc`.
   ```
   chmod +x frpc
   ```

4. Sau khi bạn đã cấp quyền thực thi cho tệp `frpc`, hãy thử chạy lại lệnh ban đầu.
   ```
   ./frpc -c frpc.ini
   ```

Lưu ý rằng bạn cần có quyền thực thi để chạy tệp `frpc`. Nếu bạn không có quyền thực thi, hãy xác minh xem bạn đã đăng nhập với tư cách người dùng có đủ quyền để chạy tệp hoặc sử dụng tài khoản quản trị hệ thống.
## Deploy on Vercel