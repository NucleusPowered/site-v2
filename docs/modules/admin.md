---
layout: modulespec
title: Documentation Centre
header: Administration Module
moduleid: admin
modulename: Administration
type: module
---

## Introduction

The Administration Module contains commands that are designed to be used by server owners and administrators.

Not all administrative commands are contained in the admin module, some have their own modules:

* [Ban Module](ban.html)
* [Jail Module](jail.html)
* [Kick Module](kick.html)
* [Notifications Module](notification.html)

## Broadcasts

Broadcasts are now in the [Notifications Module](notification.html)

## `/gamemode` configuration

The setting `separate-gamemode-permissions` can be set to `true` to tell the `/gm` command requires an extra permission to change to the target gamemode - 
the permission is of the form `nucleus.gamemode.modes.<gamemode>`.