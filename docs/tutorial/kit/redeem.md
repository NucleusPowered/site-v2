---
layout: tutorials
header: Creating and Managing Kits
lead: Learn how to create and manage kits
adddocslink: true
steps: .*
type: tutorial
---

## Redeeming a Kit

> This requires you have the permission `nucleus.kit.base` and `nucleus.kits.[name]`, where `[name]` is the name of the kit
> you wish to redeem

To redeem a kit, run `/kit [name]`.

## Viewing the Contents of a Kit

> This requires you have the permission `nucleus.kit.view.base`

To view a kit's contents, run `/kit view [name]`.

## Listing Available Kits

> This requires you have the permission `nucleus.kit.list.base`

The command `/kit list` (and `/kits`) will list the kits that you have the permission node (`nucleus.kits.[name]`) for. It
may list kits that have already been redeemed and are currently on cooldown, or cost too much to redeem at this time.