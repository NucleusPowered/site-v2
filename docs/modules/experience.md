---
layout: modulespec
title: Documentation Centre
header: Experience Module
moduleid: experience
modulename: Experience
---

## Introduction

The Experience module enables the manipulation of player experience.

## Giving, setting and taking experience

The experience module has the `/exp` command, with the following subcommands:

* `/exp give`: give an amount of experience or levels.
* `/exp take`: removes an amount of experience or levels.
* `/exp set`: set~~~~s a player's experience.

These commands can give a specific amount of experience by providing a number, or an integer number of levels by prefxing of suffixing the number with "L" (i.e. L100 or 100L) for 100 levels. 

## Preserving experience across player deaths

The permission `nucleus.exp.keepondeath` will enable players to keep their experience level when they die and respawn.

* If the permission is `true`, XP will be kept across deaths.
* If the permission is **explicitly** `false`, XP will be reset to zero upon respawn.
* If the permission is **unset**, Nucleus will not do anything and the current behaviour will hold.