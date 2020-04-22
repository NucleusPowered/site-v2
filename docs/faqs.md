---
layout: howto
title: 'FAQs'
header: Nucleus Frequently Asked Questions
lead: Answers to Frequently Asked Questions
additionalcontainerclass: faq
---

## About Nucleus

Nucleus is, quite simply, the Ultimate Essentials Plugin for Sponge! Nucleus was born to bring a modern, modular and feature-rich Essentials style plugin that makes Sponge a viable choice for all server owners to cover the basics, whether they be vanilla servers or modded servers. It lets you get on with making your server unique with a solid base you can trust!

If you want more information on Sponge, see their [website](https://spongepowered.org) and [documentation](https://docs.spongepowered.org).

Come visit us on Discord - [click here and you’ll be with us in no time](https://discord.gg/A9QHG5H)!
 
Please, take the time to read the rest of this FAQ too.

## General Setup

### I've come from Essentials on Bukkit, can I migrate my data?

No.

### Can I use a database to store data?

Not yet, but it is being worked on.

### There are a lot of permissions there, can I just give a permission wildcard?

Yeah, 1000 permission nodes can be daunting, and there is nothing stopping you, but we honestly recommend you do not. 
Other plugins may also not function as intended, a good example is **GriefDefender**. **So, please, don't use the wildcard.**

Instead, Nucleus offers a way to setup our suggested permission sets, that should get you off the ground. [You can learn
more about how to set suggested permissions as part of our first time setup tutorial](tutorial/first/permissions.md).

### What do your defaults give?
 
* `USER` gives permissions to:
  * Use `/afk`, allowing themselves to be marked as AFK
  * Use `/me`, to be able to write "action chat" (such as `dualspiral wrote these docs`) 
  * The ability to see the server time (using `/time`)
  * Create and warp to homes
  * View the MOTD
  * Ignore players in chat
  * Mail players
  * Use `/helpop` to message staff 
  * Message players
  * Use `/suicide`
  * Use `/realname` to find out what a player's IGN is from a nickname
  * Use `/list`
  * Use `/rules` 
  * Warp to `/spawn` and `/firstspawn`
  * Use `/tpa`, accept and deny requests, and use `/tptoggle` to blanket deny requests.
  * Use `/warp` to teleport to any available warp point (but if enabled, only to those they are given explicit permissions for).
  * Use `/getpos` to get their own position
* `MOD` gives permission to:
  * Administer bans (including tempbans)
  * Administer mutes
  * Send players to jail and then be able to unjail them again
  * Kick players, and kick all players when required
  * Join a full server
  * Are exempted from being ignored in chat and messages
  * Use Social Spy (to spy on messages)
  * Add notes and warnings to players
  * Use staff chat
  * Use `/tpahere` to request someone to teleport to _them_.
  * Use the teleport commands that do not require toggling
* `ADMIN` gives permission to:
  * Bypass a lot of restrictions
  * Use a lot of administrative commands

As the `ADMIN` set spans about 900 permission nodes, please forgive me for not listing it all here!

### Can you disable some of Nucleus' functionality?

Yes! Nucleus has a system which wraps up the functions into units called "modules". So, if you have a better banning plugin, turn off the 
ban module! Something else does chat? Turn off the chat module!

The modularisation of Nucleus allows for exciting plugin combinations

To turn off a module, in `/config/nucleus/main.conf`, scroll to the `modules` section and set the module to `DISABLED`. Then restart your server.

### I need help with the `/help` command!

Nucleus does not touch the `/help` command. `/help` is a Sponge command - [please see the Sponge Docs for more information (and permissions)](https://docs.spongepowered.org/stable/en/server/spongineer/commands.html#sponge). 

### I don't want your command taking over this Minecraft command! Can you stop that?

It's important to note that no minecraft command is actually turned off. 
To access a vanilla Minecraft command hidden by Nucleus, you can use `/minecraft:<command>`, such as
 `/minecraft:kill`.

If you would rather have Minecraft use the command, but keep Nucleus' available, use Sponge's command alias feature. 
In Sponge's `global.conf` file, find the `sponge.command.aliases` section, and add `<command>=minecraft` to the list. 

So, to set `/kill` to redirect to Minecraft, your aliases section should look like this:

```
aliases {
    kill=minecraft
}
```

Nucleus' `kill` is then available through `/nucleus:kill`
 
If you want to turn off Nucleus' command completely without turning off the whole module, you can turn it off in `commands.conf`,
[learn about how to do this in our commands configuration tutorial](tutorial/commandconfig).

### I'd like some of my commands to have warmups, cooldowns or costs.

Most of Nucleus' commands support warmups, cooldowns or costs. All the settings are in the `/config/nucleus/commands.conf` 
file for setting options on a global basis.  Note that you can either do this on a global basis by changing the `commands.conf`
file, or on a per player/group basis using permission options.

[Learn more about how to set warmups, cooldowns and costs in our tutorial](tutorial/commandconfig).

### Can we change/remove the join/leave messages?

Yes, you can. This is described in the [Connection Messages module documentation](modules/connection-messages.md).

### How do I set standard chat prefixes/suffixes?

This is entirely dependent on your Permissions plugin. While Nucleus has a lot more to offer in terms of chat formatting, [and we
 recommend that you look at the chat module documentation pages](modules/chat.html), by default, Nucleus will display prefixes, display names and suffixes in the chat message. 
 Therefore, you just need the to set the prefix options in your prefix options, select commands for sample permission plugins are provided here.

_For a user_:
{% include permissionblock.html cmdtype="userPrefix,userOption" user="[user]" option="prefix" value="[prefix]" %}

_For a group_:
{% include permissionblock.html cmdtype="groupPrefix,groupOption" user="[group]" option="prefix" value="[prefix]" %}

### How can I set the number of homes a player can have?

This is implemented as the permission option/meta `home-count`, rather than a specific permission for performance reasons.
Consult your permission plugin on how to set this option, but for reference, commands for popular permission managers are shown below:

<em>For users:</em>

{% include permissionblock.html cmdtype="userOption" user="[user]" option="home-count" value="[number]" %}

<em>For groups:</em>

{% include permissionblock.html cmdtype="groupOption" user="[group]" option="home-count" value="[number]" %}

[You can read more about the home module here.](modules/home.html)

## Common Issues
{:.firsth2nomargin}

### Are there any known plugin or mod incompatibilities with Nucleus?

Unfortunately so. [See our list of compatibility issues on our compatibility page](compatibility.html). 

### Using FTB Utilities - Chat Prefixes Aren't Showing 

FTB Utilities tends to overwrite the chat formatting that Nucleus applies - it is particularly evident when the player 
name in the chat is green when that player is OP.

To disable the FTB Utilities chat formatting and restore Nucleus behaviour, look in the FTB Utilities configuration
and set `B:override_chat` to `false` then reload the FTBU mod or restart the server.

### Why is `/back` telling me there is nowhere to warp to?

`/back` was designed to be more flexible than previous plugins, but that also means that configuring it can take a few more steps. If it
isn't working, make sure you check the following:

* The players have the required permissions: `nucleus.back.targets.death`, `nucleus.back.targets.portal`, `nucleus.back.targets.teleport`
* The options in `main.conf` at `back.*` are set as you expect them to be. 

<a class="anchor" id="bed-spawn"></a>

### Players don't respawn next to their bed when they die!

By default, Nucleus overrides this behaviour if you have custom spawn rules set. If you want bed spawns to override other
respawn logic, set `spawn.affect-bed-spawn` to `false` and reload the config.

[See here for more info.](modules/spawn.html#bed-spawn) 

<a class="anchor" id="first-spawn-problems"></a>

### Why are players not spawning at the set spawn when they first log in?

Minecraft has a special spawn logic for new players:

* The location they log in will always be on the surface, and always a grass block
* The location will be _around_ spawn, to provide a random-ish start point.
 
You can fix this by running `/gamerule spawnRadius 0` (shoutout to Karaga for discovering this!)

<a class="anchor" id="chat-messed-up"></a>

### My chat messages seem messed up, I set Nucleus' formatting options but it's not following them!
 
Have you got any chat management plugins installed? These plugins tend to override what Nucleus is doing, and while Nucleus tries to be
as compatible as possible, some plugins do interfere, from duplicating sections to completely blowing away all of Nucleus' formatting.

Before reporting this to the Nucleus issue tracker (see below), _please_ remove ANY chat management plugin and test without. SimpleChat
and UltimateChat, to name some of the more popular plugins, do alter the chat and can cause surprise to the server owners! While we can
try to give you help in these scenarios, please bear in mind that anyone in the Nucleus Discord channel are there for Nucleus. That said,
developers of some of these other plugins are also in our Discord channel and can help you directly too.

### My server is _really_ slow when using `/rtp` or some other teleport to a place no player has gone before!

Chunk generation is slow. A general recommendation by most of the community is to do what is known as "pre-generation" of your world. Pre-generation creates 
chunks in your world before they are needed, so when someone _does_ reach that chunk, it just has to be loaded, rather than generated first.
This, in general, offers a moderate performance gain, however, do be careful to not pregenerate a large world!

Nucleus offers a way to do this in the `world` module. The command `/world border gen [-a] [--save <time>] [world]` allows you to pre generate
up to your world border. We recommend setting your world border to be about a 4000 block diameter around your spawn point (using the command
`/world border set 4000` when stood at the centre), and then running `/world border gen`. This will generate your world, using 80% of the tick
time and save every 20 seconds.

If you want to try to run the pre-generation faster, you can change the same interval to be much higher, and run in "aggressive" mode. Adding
`-a` to the command indicates aggresive mode, where 90% of tick time is dedicated to the generation routines, and memory checks are turned off.
To increase the save interval, add `--save <time>` to your command, many server owners choose save intervals of two minutes.
 
Some configurations are:

* `/world border gen -a --save 1m` - aggressive mode, 1 minute save intervals.
* `/world border gen -a --save 5m` - aggressive mode, 5 minute save intervals.
* `/world border gen --save 2m` - normal mode, 2 minute save intervals, usually used for live servers (which we do not recommend).

**We recommend you do this on a server with no players on!**

### HELP! I have an error when I run a command! (AKA, making a good bug report!)

If you get an error that states "An error occurred while running this command", or Nucleus does something weird when you perform an action, 
please do the following (make sure you have console and filesystem access):

* Before you do all this, [you can join the Nucleus Discord channel](https://discord.gg/MC2mAuS) and ask if anyone else has seen the problem.
* Make sure you are running the **latest** version of Nucleus. If you are not, try again with the latest.
* Turn on Debug Mode: in `main.conf`, set `core.debug-mode` to `true` and run `/nucleus reload`.
* [Load up the Nucleus issue tracker](http://github.com/NucleusPowered/Nucleus/issues), and search the issues to make sure
the issue hasn't been reported already. 
    * If it has, you can still add extra information if you think you have new things to say, but please do not add comments that simply say "me too".
* Run the command that caused the error again, it should show a "stack trace" in the console.
* Copy this error down somewhere, like Notepad, to make sure you don't lose it before providing it to us.
    * You can now turn _off_ debug mode if you wish. 
* Run `/nucleus info` on your server, and get the file it generates.
* Pastebin/Github Gist _both_ files, and create a new issue on GitHub explaining what you did to cause the error.

That's it! The developers may ask for more information, they will direct you on how to get this info if it's needed.
