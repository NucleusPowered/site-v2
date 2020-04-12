---
layout: howto
header: Migrate from Nucleus v1
lead: Nucleus v2 has many changes, a few of these may require action from users. 
adddocslink: true
---

Nucleus v2 is a mostly automatic upgrade from Nucleus v1.14.x, however there are some changes that server owners must perform to ensure continuation of service.

## Chat Formatting groups no longer use permission groups

In Nucleus v1, `chat.templates.group-templates` tried to use permission groups directly in order to determine which template to use. However, this was error prone
and slow, and was a contributing factor to some lag on servers.

In order to improve performance and to give users more control over their group templates, Nucleus now checks for the `nucleus.chat.group` permission option/meta
instead, and uses the "group name" attached to this option to determine which group template to use.

The result is much faster performance, especially when optimised permission plugins, and more control over which group template a player has.  

This is a great time to consider whether group templates can be simplified using Nucleus' ability to use multiple prefixes, suffixes, chat colours and name colours. 
[Learn more about chat formatting here](chat.html)

## Command Alias changes need re-applying

All aliases that were disabled will be re-enabled as the format of `commands.conf` has changed slightly. Please review the commands config carefully, reapplying 
changes that you may wish to keep.