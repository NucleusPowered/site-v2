---
layout: tutorials
adddocslink: true
steps: "commandconfig"
---

> The settings on this page cannot be applied while the server is running. You must restart the server to enact these changes. 
{:.bl.warn}

## Finding your command

Every command has a key which will depend on the name of the command or subcommand.

* **Commands** will have a key that is the same as the primary alias of the command name
    > For example, the `/home` command will have a key of `home`. As `/nhome` is an alias of `/home`, `/nhome` is covered by the `home` key.
* **Subcommands** will have a key that contains a period separated path 
    > For example, the `/home set` command will have a key of `home.set`. The alias `/sethome` is covered by this as `/home set` is the standard command. 

> The command keys will also be supplied on this website soon.

Non-Nucleus commands **cannot** be affected by using this configuration file.

## Enabling & Disabling commands

As well as enabling and disabling modules, individual commands and subcommands can be enabled and disabled. This can be done by setting the `enabled` key to `true` or `false` to enable or disable the command, respectively. 

## Setting Root Aliases

> If you are updating from Nucleus 1.x, you will need to restore your aliases, there is no automatic migration.
{:.bl.warn}

A "root alias" is an alias for any Nucleus command **or subcommand** that acts as if it's a top level command (i.e. not a subcommand).

> For example, a "root alias" for `/home set` is `/sethome`. `/home set` is not a "root alias". `/home`, however is.

Such aliases can be turned off by setting the alias within the `"root level alias"` section for the appropriate command to `false`.

> While you can add your own aliases for Nucleus commands here, doing so is not supported and may result in your server being unable to start.
{:.bl.warn}
