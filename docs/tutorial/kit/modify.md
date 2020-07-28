---
layout: tutorials
header: Creating and Managing Kits
lead: Learn how to create and manage kits
adddocslink: true
steps: kit
type: tutorial
---

## Modifying Kit Redemption

While creating a kit is useful, most of the time you will wish to limit how often, or under what conditions, players can 
redeem kits.

### First Join Kits (Initial Inventory)

Nucleus supports giving players items when they first join your server. Simply create a kit that contains the inventory
you want to give the players when they first join, then run `/kit setfirstjoin [kitname] true`.

This kit is not visible on `/kit list`, is not redeemable more than once and does not have a cost by default.

For more information about what you might do for first time players, see this how to article on 
[How to manage First Time Join actions](../../howto/firsttime.html)

### Cooldowns, Costs and One Time Only

To set the cooldown on the kit, run `/kit setcooldown [name] [time]`, where the time interval is the format of the 
[Timespan Argument](../../arguments.html#timespan), for example, `/kit setcooldown kit1 6d` to set the cooldown for 
`kit1` to 6 days.

To set a kit as "one use only", run `/kit onetime [kit] [true|false]`.

To set a cost for using the kit, run `/kit cost [name] [cost]`. Set the cost to 0 to remove the cost. The requires the use
of an economy plugin.

### Resetting Player Usage

If a player has used a kit and you wish to remove the cooldown or one-time use so they can use it again immediately, run
`/kit resetusage [player] [kit]`.
