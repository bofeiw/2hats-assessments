# 2hats nodejs server delivermoo assessment

## Run

1.
```shell script
cd nodejs-server-delivermoo
npm install
npm start
```

2. Access `localhost:3000/` in anyway you want.

3. OR use `http://bofei.io:3000/`, which is the same thing prepared for you to play with, without setting up localhost.  
Make sure it is `http`, not `https`.

## Walk through in Postman

[Postman](https://www.getpostman.com) is a powerful tool for performing integration testing with your API.

In this section, you will experience some of the functions of Delivermoo's APIs.

1. Let's look at what mock items are there:
![](screenshots/1.get.items.png)

2. There is an item whose id is just `id`, let's look it up:
![](screenshots/2.get.item.png)

3. Let's see what mock orders are there:
![](screenshots/3.get.orders.png)

4. Let's see what is the order with id `id2`:
![](screenshots/4.get.order.png)

5. GET methods are boring, let's a POST methods. Let's make an order. You might want 999 of item with id `id`.
![](screenshots/5.post.orders.png)

6. Oh shit, there aren't enough stocks! Never mind, one is enough.
![](screenshots/6.post.orders.png)

7. Awesome! User level operations are not playful enough, let's try some of the admin APIs. Let's add some items.
![](screenshots/7.unauth.png)

8. Shit, we forgot to add our lovely bearer token. Let's add that.
![](screenshots/8.post.items.png)

9. Looks good. Lets double check the items are either added or their stocks are updated:
![](screenshots/9.get.items.png)

10. You can also make a PATCH request to update stock by id
![](screenshots/10.patch.item.png)

11. Or if you are not satisfied with an item, you can make a DELETE request to delete it.
![](screenshots/11.delete.item.png)

*Cool!* Don't forget to include bearer token `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjI1NzI0NjQsImV4cCI6MTU5NDEwODQ2OSwiYXVkIjoid3d3LnN0dWRlbnRzLjJoYXRzLmNvbS5hdSIsInN1YiI6InVzZXJAMmhhdHMuY29tLmF1IiwiR2l2ZW5OYW1lIjoiSm9obiIsIlN1cm5hbWUiOiJTbm93IiwiRW1haWwiOiJqb2huc25vd0AyaGF0cy5jb20uYXUiLCJSb2xlIjoiSmFuaXRvciJ9.BEEqb2ihfP0ec8TBu91T9lk0kcBKpz1NkJv4PpyjxdE` in the adventure! Have fun :)
