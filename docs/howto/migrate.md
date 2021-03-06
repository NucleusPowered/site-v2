---
layout: howto
header: Migrate from Nucleus v1
lead: Nucleus v2 has many changes, a few of these may require action from users. 
adddocslink: true
type: howto
---

_Updated 20th September 2020_

Nucleus v2 is a mostly automatic upgrade from Nucleus v1.14.x, however there are some changes that server owners must perform to ensure continuation of service.

## The Warning and Server Shop modules have been removed

The Warning module has an API that plugins can use to migrate Nucleus data. Otherwise, you will require new plugins to replace this functionality. 

## Some functions of the Admin module have been migrated to new modules

Experience related commands and functions are now in the `experience` module. Broadcasts are now in the `notification` module. Review whether you require these
modules, and review any updated configuration.

## Chat Formatting groups no longer use permission groups

In Nucleus v1, `chat.templates.group-templates` tried to use permission groups directly in order to determine which template to use. However, this was error prone
and slow, and was a contributing factor to some lag on servers.

In order to improve performance and to give users more control over their group templates, Nucleus now checks for the `nucleus.chat.group` permission option/meta
instead, and uses the "group name" attached to this option to determine which group template to use.

The result is much faster performance, especially when optimised permission plugins, and more control over which group template a player has.  

This is a great time to consider whether group templates can be simplified using Nucleus' ability to use multiple prefixes, suffixes, chat colours and name colours. 
[Learn more about chat formatting here](chat.html).

## `/list` groups no longer use permission groups

Similarly, the `/list` command, one of the first that was added to Nucleus and also uses permission groups. Because `/list` checks groups of all players, it could
be used to slow down a server maliciously. Some work into caching went on, however this was not an optimal solution.

Nucleus now checks for the `nucleus.list.group` permission option/meta. This text is what is used for the groups as displayed in `/list`. As a result,
the `playerinfo.list.list-grouping-by-permission.group-aliases` and `playerinfo.list.list-grouping-by-permission.use-aliases-only` no longer exists.
The `nucleus.list.weight` option is no longer used either. 

The result is simpler code, faster performance.

## Command Alias changes need re-applying

All aliases that were disabled will be re-enabled as the format of `commands.conf` has changed slightly. Please review the commands config carefully, reapplying 
changes that you may wish to keep.

[Learn more about command management using the tutorial here](../tutorial/commandconfig).

## The `/tp` alias now defaults to Minecraft's command, not Nucleus'

This is to aid in mod compatibility. `/teleport` is still taken by Nucleus by default. If you wish `/tp` to be handled by Nucleus, set the alias to true in 
`commands.conf`, as suggested in the above note.

## The `warps.separate-permissions` config option no longer exists

To grant users warp permission, they must have the specific permission `nucleus.warps.[warpname]` where `[warpname]` is the name of the warp (in lower case).
If you want a user to have access to all warps, provide the `nucleus.warps` permission.

[Learn more about warps using the tutorial here](../tutorial/warp) 

## The `admin.separate-gamemode-permissions` config option no longer exists

To grant users the ability to switch to a specific gamemode, they must have the specific permission `nucleus.gamemode.modes.[gamemode]`,
where `[gamemode]` is the gamemode that the player is allowed to switch to. The default gamemode permissions are:

* `nucleus.gamemode.modes.survival`
* `nucleus.gamemode.modes.creative`
* `nucleus.gamemode.modes.adventure`
* `nucleus.gamemode.modes.spectator`

This is in addition to the standard `/gamemode` command permission `nucleus.gamemode.base`.

If you want your users to be able to access all game modes, grant the permission `nucleus.gamemode.modes`