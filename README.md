# Banker API

Banker is an online banking service own and manage by the Central Bank of Genesys (CBG). It is a platform made solely for providing secured and seamless banking services for customers.

### Users can: 
Login \
Deposit money \
Withdraw money \
Transfer funds to other users \
See a list of their transactions 

### Admin can:
Open an account for users (Add Users). \
Delete users account (Delete Users). \
Reverse transactions/transfer in the case their is any mistake. \
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


| Methods | Routes                         | Description                    | Auth Roles |
|---------|--------------------------------|--------------------------------|------------|
| POST    | api/users                      | Create a user account          | Admin      |
| GET     | api/users                      | Get all users accounts         | Admin      |
| GET     | api/users/:id                  | Get a specified user           | User/Admin |
| PUT     | api/users/:id                  | Disable an account             | Admin      |
| DELETE  | api/users/:id                  | Delete a user account          | Admin      |
|         |                                |                                |            |
| POST    | api/users/login                | user login                     | None       |
| GET     | api/users/profile              | Get user profile               | User       |
|         |                                |                                |            |
| POST    | api/transactions/deposits      | Make a deposit                 | User       |
| GET     | api/transactions/deposits/:id  | Get a specified deposit        | User/Admin |
|         |                                |                                |            |
| POST    | api/transactions/withdraws     | Make a withdrawal from account | User       |
| GET     | api/transactions/withdraws/:id | Get a specified withdrawal     | User/Admin |
|         |                                |                                |            |
| POST    | api/transactions/transfers     | Make a transfer to an account  | User       |
| GET     | api/transactions/transfers/:id | Get a specified transfer       | User/Admin |
|         |                                |                                |            |
| GET     | api/transactions               | Get all transactions done      | User       |
| DELETE  | api/transactions/:id/reverse   | Reverse transfer               | Admin      |


### Env Variables

Create a .env file in then root and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies

```
npm install
```

### Run

```
npm run dev
```

Copyright (c) 2021 Joshua Chinwendu
