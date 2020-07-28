---
layout: howto-notoc
header: How to Use Role Based Permissions
lead: Nucleus supports "role" based permissions that automatically inherit all recommended permissions
adddocslink: true
type: howto
---

> This is one of two ways to assign permissions quickly. The alternative is using the `/nucleus setupperms`, [which is described here](setupperms.html).
> **Do not use both.**

Nucleus supports adding a "super" permission that grants all permissions recommended for a given user role.

> Nucleus is **not a permissions management plugin**. Roles are simply a template you can apply to a permission group.
>
> If you do not want Nucleus to use new recommended permissions when you update Nucleus, but wish to review this manually, use `/nucleus setupperms` instead.

The following permissions automatically grant role defaults:

* `nucleus.user` that acts as a "super permission" for any permission labelled as `USER` in the permission tables
* `nucleus.mod` that acts as a "super permission" for any permission labelled as `MOD` in the permission tables
* `nucleus.admin` that acts as a "super permission" for any permission labelled as `ADMIN` in the permission tables
* `nucleus.owner` that acts as a "super permission" for any permission labelled as `OWNER` in the permission tables

**These do not, and will never, override any explicit permission that has been set.**

As an example, you give your moderators the `nucleus.mod` permission. This, for example, gives them permission to enter staff chat. However, maybe you don't want them to access this. If you set `nucleus.staffchat.base` as `false`, this will override `nucleus.mod`. The same can be said for parent permissions, if you set `nucleus.staffchat` to `false`, a check to `nucleus.staffchat.base` will return `false`, regardless of whether `nucleus.mod` is set.

While this is cleaner than using `/nucleus setupperms`, you must be aware of the following:

* These "role" permissions will _never_ be given by default by `setupperms`.
* Any permissions added to Nucleus that fall into one of these roles **WILL** be granted by default if you have the role permission. **It is the responsibility of the server owner to check for any new features that may be added to these roles**.
* `/nucleus setupperms` will continue to exist, and will **not** grant new permissions automatically if they are added in new releases (but will if
 you re-run the setupperms commands).

If you do not want to use the role permissions, this can be turned off in the config by setting `core.enable-parent-perms` to `false` and reloading.