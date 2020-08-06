## **API Documentation : Fancy Todo Server**

**Login User**
----
  Returns json data.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**
 
   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | STRING | true |
  | password | STRING | true |

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImljaGxhc3VsMDk5OUBnbWFpbC5jb20iLCJpYXQiOjE1OTY1MTgxNDV9.XMgRIuuJMX8byn4zhJCS7yXEH-rb96UhErjlQ45ijgQ" }
    ```

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error" : "Invalid email & password!" }
      ```
      OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```
**Login With Google**
----
  Returns json data.

* **URL**

  /login-google

* **Method:**

  `POST`

* **Request Headers**

| key | value | required |
| :---: | :---: | :---: |
| id_token | googletoken | true |
  
*  **URL Params**
 
   none

* **Data Params**

   none

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImljaGxhc3VsMDk5OUBnbWFpbC5jb20iLCJpYXQiOjE1OTY1MTgxNDV9.XMgRIuuJMX8byn4zhJCS7yXEH-rb96UhErjlQ45ijgQ" }
    ```

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error" : "Please login via website!" }
      ```
      OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```