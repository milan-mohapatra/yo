# YO

## .evn

```
PORT = 3000
DB_URI = mongodb+srv://<username>:<password>@cluster0.dvaqo8y.mongodb.net/yo
```

## User Hierarchy

```
PUBLIC: user without login
USER: authenticated user
ADMIN: authorized user
GROUP_MEMBER: group member
GROUP_ADMIN: authorized group member
```

## Documentation

| METHOD | PATH | AUTH | ACCESS | BODY | RESPONSE | DESCRIPTION |
|--------|------|------|--------|------|----------|-------------|
| POST | `/auth/signup` | NA | public | `{name, email, password, avatar}` | `{token}` | user registration |
| POST | `/auth/login` | NA | public | `{email, password}` | `{token}` | user login |
| POST | `/auth/logout` | user | private | NA | `{token}` | user logout |
| GET | `/users` | user | private | NA | `{user}` | get user info |
| PUT | `/users` | user | private | `{name, email, password, avatar}` | `{message}` | update user info |
| DELETE | `/users` | user | private | NA | `{message}` | delete user |
| DELETE | `/admin/users/:userId` | admin | NA | NA | `{message}` | delete a user |
| POST | `/groups` | user.admin | NA | `{name, avatar, [members]}` | `{message}` | create a group |
| PUT | `/groups` | user.admin | private | `{name, avatar, [members]}` | `{message}` | update group by group admin |
| DELETE | `/groups` | user.admin | private | NA | `{message}` | delete group by group admin |
| DELETE | `/admin/groups` | admin | NA | NA | `{message}` | delete a group by admin |
| GET | `/messages/groups/:groupId` | user.member | private | NA | `{conversation}` | get group conversation by group member |
| POST | `/messages/send/:receiverId` | user | private | `{payload}` | `{newMessage}` | send a message |
| GET | `/messages/:receiverId` | user | private | NA | `{conversation}` | get all conversation btn sender & receiver |