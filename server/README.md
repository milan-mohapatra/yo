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
ADMIN: authorized admin of platform
GROUP_MEMBER: group member
GROUP_ADMIN: authorized group member
```

## Models

1. **User**
```
name: user_full_name
email: user_name
password: hashed_user_password
avatar: user_profile_picture_url | default default_url
role: ["user", "admin"] | default "user"
isDeleted: Boolean | default false
```

2. **Group**
```
name: group_name
avatar: group_profile_picture_url | default default_url
admin: {user},
members: [{user}] // min: 3
isDeleted: Boolean | default false
```

3. **Message**
```
isGroupMessage: Boolean | default false
senderId: {user}
receiverId: {user} | {group}
payload: {
        type: "text" | "code" | "image" | "audio" | "video"
        content: String
    }
```

## Documentation

|  | METHOD | PATH | AUTH | ACCESS | BODY | RESPONSE | DESCRIPTION |
|--|--------|------|------|--------|------|----------|-------------|
| 1. | POST | `/auth/signup` | NA | public | `{name, email, password, avatar}` | `token` | user registration |
| 2. | POST | `/auth/login` | NA | public | `{email, password}` | `token` | user login |
| 3. | POST | `/auth/logout` | user | private | NA | `token` | user logout |
| 4. | GET | `/users/account` | user | private | NA | `{user}` | get user info |
| 5. | PUT | `/users` | user | private | `{name, email, password, avatar}` | `message` | update user info |
| 6. | PUT | `/users` | user | private | NA | `message` | delete account |
| 7. | DELETE | `/admin/users/:userId` | admin | NA | NA | `message` | delete a user |
| 8. | POST | `/groups` | user.admin | NA | `{name, avatar, [members]}` | `message` | create a group |
| 9. | GET | `/groups/account` | user.member | private | NA | `{group}` | get group info |
| 10. | PUT | `/groups` | user.admin | private | `{name, avatar, [members]}` | `message` | update group info by group admin |
| 11. | DELETE | `/groups` | user.admin | private | NA | `message` | delete group by group admin |
| 12. | PUT | `/groups/kick/userId` | user.admin | private | NA | `message` | kick a user from group by group admin |
| 13. | PUT | `/users/leave/groupId` | user.member | private | NA | `message` | leave group by group member (except group.admin) |
| 14. | DELETE | `/admin/groups` | admin | NA | NA | `message` | delete a group by admin |
| 15. | GET | `/messages/groups/:groupId` | user.member | private | NA | `[{message}]` | get group conversation by group member |
| 16. | POST | `/messages/send/:receiverId` | user | private | `{payload}` | `{message}` | send a message |
| 17. | GET | `/messages/:receiverId` | user | private | NA | `[{message}]` | get all conversation btn sender & receiver7 