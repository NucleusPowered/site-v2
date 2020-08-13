---
layout: tutorials-title
header: Creating and Managing Kits
lead: Learn how to create and manage kits
adddocslink: true
steps: kit
type: tutorial
---

This tutorial will help you create and manage kits

### You will need

* A Sponge server, installed and running
  > See the [Sponge quickstart guide](https://docs.spongepowered.org/stable/en/server/quickstart.html) if you require help creating a Sponge server.

* Nucleus installed and running
  > If you have not yet installed or run Nucleus and need help with this, [read the installation tutorial first](../first). 

* A player with permissions to create and manage kits
  > These permissions can be found on the [kits module page](../../modules/kit.html), but can be the `nucleus.kit` and `nucleus.kits` permissions
  > for the purposes of this tutorial

> Be very careful if you use the permissions suggested here. `nucleus.kit` includes the permission `nucleus.kit.command.add.base`, which allows you
> to create commands on kits **that run as the server** and can allow an attacker to take control of your server. 
{:.bl.warn}

> If this tutorial does not answer all your questions about kits, you may find more information in the 
> [kit module pages](../../modules/kit.html)