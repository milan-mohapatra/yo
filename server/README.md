# YO: Backend

## .evn

```
PORT = 3000
DB_URI = mongodb+srv://<username>:<password>@cluster0.dvaqo8y.mongodb.net/yo
JWT_SECRET = jfgarkajgkekljijfo5326259jguygfewjowi837233###
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

|  | METHOD | URL | AUTH | ACCESS | BODY	| RESPONSE | DESCRIPTION |
|--|--------|-----|------|--------|------|----------|-------------|
| 1. | POST | /api/auth/signup	| no | public | `{name, email, password, avatar}` | `token`	| user registration |
| 2. | POST |/api/auth/login	| no | public | `{email, password}` | `token` | user login |
| 3. | GET |/api/auth/logout	| yes |	private | NA | `token` | user logout |
| 4. | GET |/api/users | yes | public | NA | `[{user}]` | get all contacts |
| 5. | GET |/api/users/account | yes | public | NA | `{user}` | get user account info |
| 6. | PUT |/api/users/update | yes | private | `{name, email, password, avatar}` | `message` | update user account info |
| 7. | PUT |/api/users/delete | yes | private | NA | `message` | soft delete user account |
| 8. | DELETE |/api/admin/users/:userId	| admin | NA | NA | `message` | delete a user |
| 9. | POST |/api/groups/create | yes | NA | `{name, avatar, [members]}` | `message` | create a group |
| 10. | GET |/api/groups/account/:groupId	| group_member | public | NA | `{group}` | get group account info |
| 11. | PUT |/api/groups/update/:groupId	| group_admin | NA | `{name, avatar, [members]}` | `message` | update group info by group admin |
| 12. | DELETE |/api/groups/delete/:groupId	| group_admin | NA | NA | `message` | delete group by group admin |
| 13. | PUT |/api/groups/:groupId/kick/:userId	| group_admin |	NA | `{name, avatar, [members]}` | `message` | kick a member fr11 group by group admin |
| 14. | PUT |/api/groups/:groupId/leave | group_member |	private | `{name, avatar, [members]}` | `message` | leave a group by group member |
| 15. | DELETE |/api/admin/groups/:groupId | admin |	NA | NA | `message` | delete a group by admin |
| 16. | GET |/api/messages/groups/:groupId | group_member | private | NA | `[{message}]` | get group conversation by group member |
| 17. | POST |/api/messages/send/:receiverId | user or group_member | private | `{payload}` | `{message}` | send a message |
| 18. | GET |/api/messages/:receiverId | yes |	private | NA | `[{message}]` | get all conversation between sender & receiver |
| 19. | GET |/api/charts | yes |	private | NA | `[{user}, {group}]` | get all, where sender have conversion history 7
| 20. | GET |/api/admin/entries | admin |	NA | NA | `[{user}, {group}]` | get all users and members available in syst8m 1