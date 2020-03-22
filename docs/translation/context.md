---
layout: howto-notoc
header: Translation Guidelines
lead: Guidelines and advice for how to translate content
adddocslink: true
---

## General notes
 
 Please keep the following in mind:
 
 * Keep all formatting, that is, &[...] codes.
 * Note that the placeholders right now are numbered. This is a limitation of my engine and I will get around to fixing these in due course, such that the context of the variable will be included.
 * If a message starts with a placeholder and then goes into a colour, but you need to move that placeholder, use &f before the placeholder to make it white. Reset the colour to what it was after (so, {0} &amessage -> &amessage {&f{0}&a ...).
 * In general, "true" and "false" should not be translated if it is clear that the message refers to something a user should **set**, that is, use in a command, or config. It is my hope that this will change over time, by including translations for some command elements.
 
 <h2>Glossary</h2>
 
 * **Social Spy**: The ability for players to see others' private messages and mail in realtime
 * **Command Spy** The ability for players to the commands that others invoke in real time
 
 <!-- Why Jekyll... -->
 <h2>String Context</h2>
 
 The following table contains some of the strings we have been asked about, along with their context. Please use this when translating.
 
 If you do not see a string mentioned here that  you need help with, ask in #translation in Discord. 
 
 | Message key  | Base string | Context |
 |---|---|---|
 | `standard.second` | second | The time unit |
 | `standard.seconds` | seconds | The time unit |
 | `nucleus.usage.header` | &aUsage for &e/{0} | This is the header for command help. `{0}` will be replaced by a command. |
 | `config.module-desc` | _contains_ ENABLED: to enable the module | `ENABLED`, `DISABLED` and `FORCELOAD` should be left in English.  |
 | `command.nucleus.compat.all` | All | This refers to selecting "all notices" |
 | `command.tpaccept.expired` | &cThe associated teleport request has expired. | "Associated" means the one the player has selected. "The associated" could be replaced with "this" |
 | `command.rtp.inprogress` | &cThe player {0} is already searching for a random location. | This can occur when `/rtp` is run more than once on the same player. Nucleus is already looking for a safe location for them. Generally occurs when used by an admin on someone. |
 | `command.userprefs.set.self` | &aSet preference "{0}" to "{1}" | This is a confirmation message, a preference has been set. 
 | `userpref.vanishonlogin` | Controls whether the target is set to vanished when logging in, regardless of previous status. | This is a description for a preference. The target is the player who the preference is being set for |
 | `userpref.teleporttarget` | Controls whether the target can be teleported to by non-administrators. | As above |
 | `userpref.powertooltoggle` | Controls whether trying to use an item will execute a command bound to the item type. | As above |
 | `userpref.socialspy` | Controls whether the target will see social spy messages. | As above |
 | `userpref.messagetoggle` | Controls whether the target will receive private messages. | As above |
 | `userpref.commandspy` | Controls whether the target will see command spy messages. | As above |
 | `userpref.viewstaffchat` | Controls whether the target will see staff chat messages. | As above |
 | `userpref.player_locale` | Determines the language that Nucleus is translated in for the specific user. | As above |
 | `itemname.set.desc` | Sets the user facing name for the item currently in the player's hand. | The user facing name is the name given to that specific item (not the name of the item type). Used with the `/itemname` command. |
 | `nucleus.reload.extended` | This command will reload everything EXCEPT whether modules and/or commands are enabled.<br />A restart of the entire server is required for these two actions to take effect. | This is for `/nucleus reload`. A reload will reload all configuration and will act upon it immediately. The two exceptions are that you cannot turn modules or commands on or off without restarting the server. [More info on modules](../howto/modules.html) |
{: .table }
