---
layout: tutorials
header: Installing and Using Nucleus
lead: Learn how to obtain, install and configure Nucleus on your Sponge Server
adddocslink: true
steps: .*
type: tutorial
---

> Nucleus is **not** a permissions management plugin. To make use of permissions, you must install a separate permissions plugin. [Such plugins can be found on Ore, Sponge's plugin distribution platform.](https://ore.spongepowered.org)
{:.bl.warn}

## Setting Permissions

Nucleus, as an Essentials like plugin for Sponge, contains a lot of commands and as a result,
a lot of permissions that can seem daunting on the first run of a server. To help you get up
and running quickly, Nucleus provides two ways to set up permissions using your favourite 
permissions plugin.

If you want to set all permissions yourself, you can find a comprehensive list on our
[commands](../../commands2.html) and [permissions](../../permissions.html) pages. You can also
look on our specific module pages, or use any verbose logging tool that your permissions plugin
may provide.

> This documentation site provides sample permission management commands for some popular permissions plugins. The plugin that is displayed can be selected using the selector in the top right. We do not endorse any third party plugins.

> **Do not use the `*` wildcard**. Although Nucleus now tries to act normally if you use it, weird things can happen and it may break other plugins, such as GriefDefender. [For more information on why `*` is a bad idea, click here.](../../nowildcard.html)
{:.bl.error}

## Using Nucleus Without a Permissions Plugin

> We do not recommend that you run Nucleus without a permission plugin.
{:.bl.warn}

If you do not wish to use a permission plugin, by default, Nucleus will only allow OPs to use any command. If you wish
for non-OPs to be able to use the basic user focused commands, set `core.give-default-group-user-permissions` to
`true` in `main.conf` and restart your server. The permissions that will be granted are those marked "USER" permissions
on the [permissions reference](../../permissions.html).

## Nucleus Permissions Quick Start

Every permission in Nucleus is internally assigned one of five roles, from the user role, permissions
that are typically given to all players, through to staff roles all the way up to a role that contains
permissions that are specialised and may do something that you may not expect if you granted the wildcard.
These roles are:

* `USER` - permissions that servers will generally grant to all players
* `MOD` - permissions for actions that are used by moderation staff for server order
* `ADMIN` - permissions that allow setting gameplay altering mechanics or server management
* `OWNER` - permissions that can cause severe server damage and generally should only be used by those with ultimate authority
* `NONE`  - permissions that are highly specialised, such as vanish on login, that should be decided on a case by case basis

Nucleus provides two ways to set up our suggested permission sets.

### `/nucleus setupperms`

The `/nucleus setupperms` command grants every permission in a role to a permission group. This is a manual process, any new permissions that are created via an upgrade to Nucleus will not be added automatically. 

[Learn more about using `/nucleus setupperms`](../../howto/setupperms.html).

### `nucleus.<role>` permissions

The `nucleus.<role>` permissions acts as a "super permission" for all permissions in a role. Any permissions granted (or revoked) explicitly will override the existence of this permission. However, any new permissions added to a role when Nucleus is upgraded **will be automatically given**
to those with a specific role permission, thus role permissions, while easier than using `/nucleus setupperms`, can be dangerous to use if you do not know the risks. 

[Learn more about using `nucleus.<role>` permissions](../../howto/roleperms.html). 