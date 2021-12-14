# Banker API

Banker is an online banking service own and manage by the Central Bank of Genesys (CBG). It is a platform made solely for providing secured and seamless banking services for customers.

Users can:
### Login
### Deposit money
### Withdraw money
### Transfer funds to other users
### See a list of their transactions

Admin can:
### Open an account for users (Add Users).
### Delete users account (Delete Users).
### Reverse transactions/transfer in the case their is any mistake.
### Disable a user account-> This can be done in the case there is any fruadulent activities detected on the account.

```
Sample User Logins:

admin@banker.com (Admin)
1234abcd

joshua@example.com (Customer)
1234abcd

jerry@example.com (Customer)
1234abcd
```
| Methods     | Route |Description | Auth role |
| ----------- | ----------- |-----------------
| POST    | api/users      | Create a new user account | Admin |
| GET   | api/users       | Get all users | Admin |