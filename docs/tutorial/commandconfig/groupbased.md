---
layout: tutorials
adddocslink: true
steps: commandconfig
type: tutorial
---

## Group based command modifiers

Nucleus supports per-group (and per-user) command modifiers that allow you to set command costs, warmups and cooldowns on a per group basis.

> Per-group command modifiers will only work on the commands that generate modifier config entries in `commands.conf`.
{:.bl.warn}

To set such an override, set a permission option on the group (or user) of the form:

* `nucleus.<command key>.warmup` for warmups 
* `nucleus.<command key>.cooldown` for cooldowns
* `nucleus.<command key>.cost` for cost

The `<command key>` is the same as the key used in `commands.conf`. 

> For example: for the command `/home`, this would be `home`, for the command `/home set` this would be `home.set`.

## Sample permission command

The command for common permission plugins to set these options on a group is:

{% include permissionblock.html cmdtype="groupOption" user="[group]" option="nucleus.[command key].(warmup|cooldown|cost)" value="[number]" %}

If a user is also given the relevant exemption permission, these options will be ignored for that user. 