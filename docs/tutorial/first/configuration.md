---
layout: tutorials
header: Installing and Using Nucleus
lead: Learn how to obtain, install and configure Nucleus on your Sponge Server
adddocslink: true
steps: "first"
---

## Configuring Nucleus

While Nucleus will run well for most servers with its default settings, Nucleus can be highly customised to suit your server needs. Nucleus will generated a set of configuration files in Sponge's configuration directory.
 
> On SpongeForge and SpongeVanilla, this is the `/config/nucleus` directory.
>
> If you haven't yet installed Nucleus, [do so first](install.html) and start your server. This will generate a new configuration file.

Be careful when editing the configuration files. It is good practice to back them up before changing them. 

There are two major configuration files to be aware of, `main.conf` and `commands.conf`. They both use the HOCON file format, [which is documented here](https://github.com/lightbend/config/blob/master/HOCON.md).

## General Configuration

The general Nucleus configuration can be found in `main.conf`. This file allows you to configure what modules load, how the core Nucleus product operates, as well as configure all the modules. Most configuration entries have comments attached to them to explain their function.

> Be careful when altering anything in the `core` module configuration. Some of the options available are advanced options and could cause data loss if set incorrectly. Read the comments associated with the configuration carefully. 
>
> If you are unsure as to whether you need to change an option, [read the core module documentation](../../modules/core.html) or seek real-time support.
{:.bl.warn}   

The first section in the configuration file allows you to enable or disable modules, turning on or off features. [Learn how to enable and disable modules here](../../howto/modules.html). 

### Using Nucleus with Server Panels

> This is only necessary if you use a server panel. There is no need to do this if you use SSH and `screen` or `tmux` with your
> server. 

If you use a server panel, such as AMP or Multicraft, they tend to make the server run the command `/list` every 30 seconds or
so to make sure their player list is up to date. However, as Nucleus replaces `/list`, this causes spam on the server and
breaks these panels. 

To fix this, set `playerinfo.list.server-panel-compatibility` in `main.conf` to `true`.  

## Command Configuration

All commands in Nucleus can be enabled or disabled at a command level. Some commands can also have costs, warmups and cooldowns associated with them. The commands configuration file, `command.conf`, contains a list of all commands and related options that can be set on a per command basis. 
Values set here are on set on a global level. Modifiers can be modified on a per-group basis using a permission plugin. 

> For the purposes of this step by step guide, we will not cover how to do this in further detail. However, you may learn more about how to set warmups, cooldowns and costs, including how to set these up on a per-permission group basis [in this step-by-step guide](../commandconfig). 
>
> We recommend you investigate this later, once your server is running. 

## When a Configuration File Fails to Load

Nucleus will warn you if a configuration file fails to load.

What Nucleus will do if it cannot load a configuration file will depend whether the server is starting up or has already started:

* At startup: Nucleus will not load, whitelist the server, and will provide a detailed error message in the console.
* During a reload request: Nucleus will continue to use the old configuration.

In both cases, you must correct any errors in your file before trying again.
