---
layout: standardheadmd
title: Documentation Centre
header: Links & Placeholder Tokens
lead: Learn how to define links and use placeholders in Nucleus.
type: general
---

In several places in Nucleus, there is the option for links and chat placeholders to be used. The most obvious places 
that they can be used is in the `motd.txt` and various info files, but other modules accept them, including broadcasts.

Modules will include a link to this page where the functionality is supported.

## Creating Links

Links can be included in various text locations using limited markdown syntax.

* `http://nucleuspowered.org` - creates a link automatically
* `[Hello](http://nucleuspowered.org)` - creates a link titled `Hello` to `http://nucleuspowered.org`
* `[Rules](/rules)` - creates a link titled `Rules` that will run `/rules` when clicked.

## Placeholder Tokens

> Nucleus 2 **does not** support PlaceholderAPI, nor does it support Nucleus Gluon which enabled this bridge. This is because
> Nucleus supports the new Sponge placeholder system introduced in Sponge API 7.3, we encourage other plugins to use Sponge's 
> system too.

The following tokens can be used in both the `motd` and `info` files, and will be replaced at runtime.

{% assign com = site.data.tokens | sort: 'name' %}
{% for token in com %}* `{% raw %}{{{% endraw %}{{ token.name }}{% raw %}}}{% endraw %}` - {{ token.description }}
{% endfor %}

### Using Tokens in Other Plugins

These tokens can be used in other plugins that supports Sponge API 7.3's placeholder system, however, these tokens must be 
prepended with `nucleus:` (so, `displayname` becomes `nucleus:displayname`). Consult the docs for other plugins for how to 
specify these tokens in their plugin.

### Token Modifiers

Tokens support modifiers that control whether a space should be appended or prepended to the token output if the token
exists.

The modifiers are:

* `p` to prepend a space
* `s` to append a space

To add a modifier to the end of a token, simply add {% raw %}":[modifier]"{% endraw %} at the end of the token (before {% raw %}}}{% endraw %}).
So, if you want your token (say, `name`) to have a space after it if it exists, the token would be 
`{% raw %}{{name:s}}{% endraw %}`. Similarly, if you wanted a space before and after, specify `{% raw %}{{name:sp}}{% endraw %}`. 