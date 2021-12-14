# Banker API

Banker is an online banking service own and manage by the Central Bank of Genesys (CBG). It is a platform made solely for providing secured and seamless banking services for customers.

### Users can:
 Login
 Deposit money
 Withdraw money
 Transfer funds to other users
 See a list of their transactions

### Admin can:
 Open an account for users (Add Users).
 Delete users account (Delete Users).
 Reverse transactions/transfer in the case their is any mistake.
 Disable a user account-> This can be done in the case there is any fruadulent activities detected on the account.

```
Sample User Logins:

admin@banker.com (Admin)
1234abcd

joshua@example.com (Customer)
1234abcd

jerry@example.com (Customer)
1234abcd
```


| Methods | Routes            | Description                           | Auth Roles |
|---------|-------------------|---------------------------------------|------------|
| POST    | api/users         | Create a user account                 | Admin      |
| GET     | api/users         | Get all users acoount                 | Admin      |
| GET     | api/users/:id     | Get a specified user                  | User/Admin |
| PUT     | api/users/:id     | Disable an account                    | Admin      |
| DELETE  | api/users/:id     | Delete a user account                 | Admin      |
| POST    | api/users/login   | user login                            | None       |
| GET     | api/users/profile | Get user profile                      | User       |
|------------------------------------Deposit Routes--------------------------------|
| POST    | api/deposits      | Make a deposit to a specified account | User       |
| GET     | api/deposits      | Get all deposits made by the user     | User/Admin |
| GET     | api/deposits/:id  | Get a specified deposit               | User/Admin |
|------------------------------------Withdraw Routes-------------------------------|
| POST    | api/withdraws     | Make a withdrawal to an account       | User       |
| GET     | api/withdraws     | Get all withdrawals made by a user    | User/Admin |
| GET     | api/withdraws/:id | Get a specified withdrawal            | User/Admin |
|------------------------------------Transfer Routes-------------------------------|
| POST    | api/transfers     | Make a transfer to an account         | User       |
| GET     | api/transfers     | Get all transfers made by a user      | User/Admin |
| GET     | api/transfers/:id | Get a specified transfer              | User/Admin |
| DELETE  | api/transfers/:id | Reverse transfer                      | Admin      |