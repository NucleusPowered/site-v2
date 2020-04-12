---
layout: modulespec
title: Documentation Centre
header: Player Info Module
moduleid: playerinfo
modulename: Player Info
---

## Introduction

The Player Info module displays basic information about players on the server.

## Listing all players

Nucleus provides an enhanced version of the `/list` command that can be customised. In `main.conf`, if 
`playerinfo.list.group-by-permission-groups` is set to `true`, Nucleus will use the `nucleus.list.group` permission meta/option 
to determine the name of the group they player should be displayed in.

> For example, if players in the "mod" group should be displayed in a "Mod" group where the colour of the group is light blue,
> set the `nucleus.list.group` option to `&bMod`. 

{% include permissionblock.html cmdtype="groupOption" user="mod" option="nucleus.list.group" value="&bMod" %}

If the `nucleus.list.group` option is unset or empty, the text in  `playerinfo.list.default-group-name` will be used as the group name in the `/list`.

If you are running Multicraft, set `multicraft-compatibility` to `true`. This should send the original `/list` command to
the console when it is run from the console.

If you want a bit more control over your groups, then Nucleus allows for that too.

### Group ordering

The group ordering can be defined in `main.conf`, `playerinfo.list.list-grouping-by-permission.group-order`.
Groups can be listed in order here, and this will be reflected in `/list`. Note that you must keep the [], 
and it's a comma separated list, where the names are enclosed in " characters.

Any group aliases in this list will be listed in this order, above all other groups, which will be displayed in alphabetical order below.

## Using `/seen`

`/seen [player]` will display all relevant information about a player. In the future, it is anticipated that plugins can
hook into Nucleus' `/seen`, allowing this command to be a central point for player information. 