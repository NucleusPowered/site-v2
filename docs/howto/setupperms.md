---
layout: howto
header: How to Use `/nucleus setupperms`
lead: Nucleus has a command that sets all appropriate permissions for a group automatically.
adddocslink: true
type: howto
---

> This is one of two ways to assign permissions quickly. The alternative is using the role based permissions, [which are described here](roleperms.html).
> **Do not use both.**

The `/nucleus setupperms` subcommand allows server owners to grant the suggested permissions to groups, allowing for a quick
setup of a server. This will grant permissions based on the version of the plugin you are running at the time and does not 
automatically update permissions when Nucleus is upgraded.

> Nucleus is **not a permissions management plugin**. Roles are simply a template you can apply to a permission group.
>
> If you are happy for Nucleus to use new recommended permissions when you update Nucleus, use the role based permissions instead.

## First Time Setup

> If you have not created permission groups with your permissions plugin yet, do so before continuing. Consult your 
> permissions' plugin documentation on how to do this.

In general, you will already have the permission groups created in your permission plugin. To add the suggested permissions
to the group, run:

```
/nucleus setupperms <ROLE> <group>
```

where `<ROLE>` is one of the roles mentioned above, and `<group>` is the name of the group in your permissions plugin. So,
to grant the `USER` rights to the `default` group, you would run:

```
/nucleus setupperms USER default
```

Similarly, to add `ADMIN` permissions to your `administrators` group:

```
/nucleus setupperms ADMIN administrators
```

This command does not grant permissions of lower roles by default, so giving the `ADMIN` permissions to a group will **not** give
the `MOD`, or `USER` permissions. If you wish to do so, add the `-i` flag to the command. 

As an example, to add `ADMIN`, `MOD` and `USER` permissions to the `administrators` group, run:

``` 
/nucleus setupperms -i ADMIN administrators
```

We recommend that you use permission group inheritance rather than this method, however.

## Updating Permissions After Nucleus Upgrade

You can re-run this command and any permissions that are already set (true or false) will not be overwritten, so running
this command when you have updated Nucleus is safe. 

If you wish to overwrite any Nucleus permissions that conflict, thereby resetting this to Nucleus' suggested defaults, use the `-r` flag.
