---
layout: tutorials
header: Creating and Using Warps
lead: Learn how to set and use warps
adddocslink: true
steps: warp
type: tutorial
---

## Setting Permissions

### Allowing users to use warps

To allow a user to use the `/warp` command, give them the `nucleus.warp.base` permission.

> **Do not give them the `nucleus.warp` permission on its own.** If you do, you will give players the ability to set and
> delete warps, as well as bypass warmups, cooldowns and costs.
{:.bl.error} 

### Allowing users to list warps

If you want users to be able to view all the warps they are able to use via the `/warps` or `/warp list` commands, give
them the `nucleus.warp.list.base` permission. 

### Per-Warp permissions

You will also need to give players permission to use the warps you wish to use.

Every warp has its own permission so that you are able to control which warps different users have access to. For example,
if you run some sort of Factions based server, you will probably want players to only be able to access their own bases.
Alternatively, you might be running some sort of role-playing server where players can only return to places they've been,
by using another plugin or system to set permissions on players when they enter your area.

> Nucleus does not have a function to set permissions when you encounter a warp.

#### If you want to give a user or group permission for all warps

Give the user or group the `nucleus.warps` permission.

> Be careful, this permission is plural and should not be mixed up with `nucleus.warp`.
{:.bl.warn} 

They will still need the `nucleus.warp.base` permission.

#### If you want to give user or group permission to use specific warps

Give the user or group the permission `nucleus.warps.<warp name>` for each warp, where `<warp name>` should be replaced 
by the name of your warp in lower case.

> For example, if you have the warp `Warp1`, the permission will be `nucleus.warps.warp1`. 

They will still need the `nucleus.warp.base` permission.