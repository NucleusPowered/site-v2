---
layout: howto
header: How to Customise Player Chat Format
lead: Nucleus' Chat module can format chat messages to show player prefixes, ranks and other contextual information.
adddocslink: true
---

## Default Chat Format

By default, if the Nucleus chat module is enabled, Nucleus will format player chat messages in the following way:

```
prefix name suffix: message
```

The default template will thus return something like this:

![message](../../img/message.png)

The prefix and suffix are set from the `prefix` and `suffix` options via your permission plugin. For example, to set
the prefix based on group with the default settings, run:

{% include permissionblock.html cmdtype="groupPrefix,groupOption" user="mod" option="prefix" value="&5[Mod]" %}

## Customise Chat Format

## Player Name/Chat Colours


## Troubleshooting

There are a few reasons why Nucleus chat formatting may not be showing.

* The Chat module must be enabled.
* The configuration option `modify-chat` must be `true`.
* Unexpected prefixes and suffixes may be removing by setting the `overwrite-` configuration options. 
* The Nucleus Chat formatting may be overwritten by other mods or plugins. [Check the compatibility tab on the chat module](../modules/chat.html#compatibility) any for known plugin incompatibilities.

