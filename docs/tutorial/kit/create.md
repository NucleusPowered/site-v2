---
layout: tutorials
header: Creating and Managing Kits
lead: Learn how to create and manage kits
adddocslink: true
steps: .*
type: tutorial
---

## Creating Kits and Adding Items

> This requires you have the permission `nucleus.kit.create.base` to create the kit and `nucleus.kit.edit.base` to add 
> items to the newly created kit

To create a kit, use the command `/kit create [name]` as a player, replacing `[name]` with the name you wish to give your kit.
This will open up an inventory window where you can drag and drop items into the kit. 

If you wish your kit to be a clone of your inventory, run `/kit create -c [name]`, again, replacing `[name]` with the name you 
wish to give your kit. This will create a kit that is a copy of your inventory.

Players wishing to redeem the kit must have the permission `nucleus.kits.[name]`, as well as the `nucleus.kit.base` permissions

## Adding personalised items to kits

{% raw %}
You can put tokens like `{{name}}` and `{{displayname}}` on your item's display names and lore and put them into a kit. 
When redeemed, the tokens can be replaced - personalising the items (for example, a wooden stick with the item display name 
`{{name}}'s stick` can be put into a kit, which will become `dualspiral's stick` if `dualspiral` redeemed it).
{% endraw %}

You must, however, set `kit.process-tokens-in-lore` to `true` in `main.conf`, as this might cause a slight performance hit.

## Editing Kit Items

> This requires you have the permission  `nucleus.kit.edit.base`

To change the contents of a kit, you can either:

* Run `/kit edit [name]` and edit your kit using an inventory GUI.
* Update your inventory to reflect what you want the contents of the kit to be, then run `/kit set [name]`.

## Deleting a Kit

> This requires you have the permission  `nucleus.kit.remove.base`

To delete a kit, run `/kit remove [name]`
