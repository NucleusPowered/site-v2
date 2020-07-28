---
layout: tutorials
header: Installing and Using Nucleus
lead: Learn how to obtain, install and configure Nucleus on your Sponge Server
adddocslink: true
steps: first
type: tutorial
---

## Choosing the Correct Version of Nucleus

Sponge Servers all depend on a specific SpongeAPI version. The SpongeAPI version should be clearly specified when you download the server software. For SpongeForge and SpongeVanilla, it is part of the version number.

> SpongeForge and SpongeVanilla for Minecraft 1.12.2 use SpongeAPI version 7.

Nucleus includes the SpongeAPI version in the filename. Current builds of Nucleus require servers that use SpongeAPI 7.2 or any newer version of SpongeAPI 7.

> **Example**: Nucleus 2.0.0 for Minecraft 1.12.2 has the filename `Nucleus-2.0.0-MC1.12.2-SpongeAPI7.2-plugin`. You can use this plugin with SpongeAPI 7.2 or later SpongeAPI 7 builds, but not SpongeAPI 8, SpongeAPI 7.0 or SpongeAPI 7.1.

Nucleus will not work with any Sponge servers that run SpongeAPI version 8 as it has not been released yet.

> Do not use "experimental" builds of SpongeAPI 8 for Minecraft 1.12.2 servers. They will not work with most plugins.
{:.bl.error} 

## Plugin/Mod Incompatibilities

Nucleus is designed to be compatible with a wide range of plugins and mods, but there are some that conflict with the way Nucleus operates. Some of these issues can be worked around by making changes to how Nucleus or the offending plugins/mod operates. 

[Find out which mods and plugins are incompatible, and what steps you can take to resolve issues](../../compatibility.html).

## Installing Nucleus

Nucleus is installed like any other Sponge plugin, by installing it into the Sponge plugins directory. 

> On SpongeForge and SpongeVanilla, this is the <code>/mods</code> directory by default.

Nucleus has no other required dependencies other than the Sponge version stated in the version. Nucleus comes with sane defaults that allows most servers to get up and running quickly. 

## If Nucleus Doesn't Load

Once your server has loaded, check to see if the `/nucleus` command works from the console. If it does not, check to see if Sponge is loaded, for SpongeForge and SpongeVanilla, try the `/sponge` command.

If Sponge is not loaded, **read any error messages that occur** before seeking assistance.

> In the first instance, check the articles under "When Things Go Wrong" on this [Sponge Docs article](https://docs.spongepowered.org/stable/en/server/quickstart.html#when-things-go-wrong). 

If Sponge has loaded, but Nucleus has not, read any error messages that occur in the logs.


