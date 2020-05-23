---
layout: howto
header: How to manage First Time Join actions  
lead: Nucleus supports both first time spawn and first join kits to allow you to aid all your new players. 
adddocslink: true
---

A popular task for nearly every Minecraft server is to provide new players something to get them started. For some servers, 
this is to provide some sort of "tutorial" area that players can wander around, with signs for rules and areas that teach
the basics of your server. You may also want to provide them with an initial kit of items to help them start their journey.
Nucleus provides for many of these scenarios via two mechanisms: "first spawn points" and "first join kits".

## Setting a spawn location for new players

_Requires the [spawn](../modules/spawn.html) module to be enabled._

In order to set the position where your new players spawn in, you will need to be logged into your server. Log in and run
 `/setfirstspawn` when your player is standing at the spot here you wish for this spawn point to be. Your player's position
 and rotation will be saved, and new players will be sent to this spot when they log in for the first time.

> It is **strongly** advised that if you use the first spawn mechanic, you also set the gamerule `spawnRadius` to  `0` 
> by running the command `/gamerule spawnRadius 0`.
> This will ensure that new players spawn in any building, not above it.
{:.bl.warn}
 
Only one "first spawn point" may be active at any one time. If you wish to warp there in the future, run `/firstspawn`.
If you want to remove the first spawn point, so that new players spawn at the standard spawn point for your server,
run `/setfirstspawn del`.

## Creating an initial inventory using kits

_Requires the [kit](../modules/kit.html) module to be enabled. You may also want to read our tutorial on [how to create
and manage kits](../tutorial/kit)._

In Nucleus, first join kits **are just regular kits**. This means that creating a first join kit is done exactly the same
way as standard kits. 

The simplest way to make your first join kit is to log on to the server, then:
 
 * Setup your inventory to **only** contain the items that you wish to give,
 * Run `/kit create -c [name]`, replacing `[name]` with the name you want to give your kit,
 * Run `/kit setfirstjoin [name] true`, using the same name as you used in the previous step.
 
That's it! The kit will now be given when a new player logs in. It is not redeemable more than once, and is not shown on
`/kit list` by default.

Of course, kits can do more than just give basic items. To see what else Nucleus kits can do, [have a read of the module 
page.](../modules/kit.html)