---
layout: tutorials
adddocslink: true
steps: commandconfig
header: Command Warmups, Cooldowns and Costs
type: tutorial
---

## Command warmups, cooldowns and costs

Many user facing commands in Nucleus support warmups, cooldowns and costs that are applied to players who run them. These are called "command modifiers".

Many commands can have one or more of the following modifiers:

* Warmups - defined in seconds
* Cooldowns - defined in seconds
* Cost - defined in the default currency units

> Currently, the cost modifier only supports the default currency.
{:.bl.warn} 

The modifiers can be set on a per command basis, and are set in each command configuration block.

> Nucleus will generate entries for each command that supports a modifier. If Nucleus does not generate an entry, the command will not support the modifier, even if you add the config entry manually. 

Values specified in this file will be applied to all players that do not have one of the following:

* An exemption permission; or
* A permission option that defines another value [(this will be described on the next page)](groupbased.html)

All current command modifiers cannot be negative.

## Exemptions

Users can be set to be exempt from these modifiers using permissions.

In general, for a given command with a command key, the exemption permission take the form:

* `nucleus.<command key>.exempt.cooldown` for cooldowns
* `nucleus.<command key>.exempt.warmup` for warmup
* `nucleus.<command key>.exempt.cost` for costs

Specific permissions can be seen associated with the command [in the command reference](../../commands2.html).