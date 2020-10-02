---
layout: howto
header: How to Pre-Generate Worlds
lead: Learn how to help server performance by pre-generating worlds
adddocslink: true
keywords: pregen chunks world
type: howto
---

> Pre-generation requires the **world** module to be enabled.

## Why should I pre-generate my world?

One of the biggest bottlenecks in vanilla Minecraft is generation of new chunks. Chunk generation is _slow_. When a player
travels somewhere and loads a new chunk in, Minecraft checks the drive to see if a chunk already exists. If so, fine, load 
the data and send it to the client! This loading process is actually quite slow, but we can speed that up by ensuring we are
using SSDs to store our game data and not slower hard drives.
 
However, if it doesn't exist, Minecraft has to work out what the new terrain will look like and create it. This does not 
have anything to do with the type of storage you use, this is purely CPU bound, and this is an expensive process. If 
you have many chunks loaded by a fast moving player every tick, this can easily eat up your performance, and your
server will lag as a result.

To get around this, we recommend performing **chunk pre-generation**. While we cannot get away from having to generate
chunks, we can control when this is done. Ideally, pre-generation would happen before you open a server to the public.
You can pre-generate your world while players are playing on it, however, you should expect server lag as a result.

## Deciding what to pre-generate

Nucleus' pre-generation uses Sponge's inbuilt pre-generation capabilities. As a result, Nucleus will generate a **square**
area that can be enclosed by the Minecraft vanilla world border. This border, while it must be square, can have any
diameter and may be centred anywhere on your world. 

> **This border is only required during pregeneration**. You may set the border to anything else once pre-generation has
been completed.

While we recommend that you pre-generate the world around your spawn and generate out far enough to satisfy your likely
player demand, the amount of pre-generation really depends on your circumstances. Thank about the following 
before you decide what to pre-generate:

* How far do you think players are likely to travel to the edges of your pre-generated area? If you don't expect that to
  happen at all, or that it is unlikely to happen, it's probably not worth pre-generating that far.
* Generation is slow, pre-generation isn't any faster, it's just done all at once. You may only generate around 15-20
  chunks per second.
* How long do you want to spend pre-generating? Every time you double the diameter, the approximate time for generation
  will quadruple.
* The further out you pre-generate, the more storage you require on disc, double diameter may quadruple your requirements.

While pre-generation may take time up at first, the benefit of less lag due to chunk generation is worth it.

As a sane starting point, we suggest setting your world border to be about a 4000 block diameter around your spawn point,
then pre-generating that.

## Setting up pre-generation

First, you need to set up a world border that contains the area you wish to pre-generate.
 
> You can do this using the Minecraft `/worldborder` command, or [Nucleus `/world border` command](../commands2.html#world-border).

Pre-generation is started using [the `/world border gen` command](../commands2.html#world-border-gen). By default, during 
pre-generation Nucleus tries to prevent your server from running out of memory by pausing pre-generation when memory hits 
about 90% of the amount allocated to the server, aims to run pre-generation for about 80% of each tick, performs generation
every 5 ticks to allow the server to catch up, and saves the world every 20 seconds.

> If you are starting a pre-generation after previously stopping a previous pre-generation, Sponge restarts from the beginning.
> However, it will intelligently skip chunks that have already been generated and will quickly catch up and pick up where it left
> off.   

### Aggressive mode

If you want pre-generation to go faster, Nucleus has an alternative set of defaults known as "aggressive mode". This is 
activated by using the `-a` flag. Aggressive mode:

* turns off memory checks, such that Nucleus will not try to prevent out of memory errors from occurring;
* runs pre-generation for 90% of a tick;
* generates chunks every 3 ticks, rather than 4; and
* saves every two minutes, rather than 20, reducing the time spent writing to disc.

Aggressive mode is more suited to empty servers, or those where only one person is on doing things.

### Ultra-aggressive mode

> Ultra aggressive mode will try to use just about all of the processing time on your server, while increasing the time
> between saves to two minutes. Use this mode ONLY on empty servers. There is a risk of crashing and stalling when using
> this mode!
> 
> We **strongly** recommend that you disable any redstone contraptions or other processes that occur on the server while
> you pre-generate with this mode.
{:.bl.warn}

> Ultra-aggressive mode is only available in Nucleus 2.1.4 or later. 

If you want your pre-generation to go _even faster_ and your server will be empty, try ultra-aggressive mode, activated by
the `-u` flag. Ultra-aggressive mode:

* turns off memory checks, such that Nucleus will not try to prevent out of memory errors from occurring;
* runs pre-generation for 95% of a tick;
* generates chunks every tick, rather than 4; and
* saves every two minutes, rather than 20, reducing the time spent writing to disc.

This mode will seriously cause lag on your server if anyone is playing on it. 

### Auto-restarting pre-generation after server restart

> If your server encounters an error during generation that causes the server to crash, Nucleus will still attempt to
> restart generation. This may cause your server to enter a continuous crash and restart loop if you use a server panel/
> restart script.
{:.bl.error}

If you want your server to resume pre-generation if your server stops and starts again, run the `/world border gen` command
with the `-r` flag. This will save the pre-generation flags to Nucleus world data which is read on startup. When the server
has finished starting and worlds are loaded, Nucleus will start the pre-generation with the same parameters as before.

> Remember, on restart pre-generation will restart from the beginning, but will skip all chunks that have already been loaded
> and will quickly resume from the previous position.

### Available Flags

* `-a` - aggressive mode, turns off memory checks
* `-u` - ultra-aggressive mode, turns off memory checks
* `-r` - restart pregeneration if the server is restarted (use with caution, does not disable if the pregen causes the crash)
* `-t [1-100]` - the percentage of a tick to use when generating
* `-f [1-100]` - the number of ticks to wait after a generation to perform the next generation
* `--save [timespan]` - frequency to perform a save

## Stopping pre-generation

Pre-generation can be stopped using the `/world border gen cancel` command. This will cause the world to save its state and
cease pre-generation.

If you later choose to restart pre-generation, it will again start from the centre, but will skip all generated chunks until
it finds where it left off.

