---
layout: howto
header: Translating Nucleus
lead: Nucleus is built to be translatable and can be translated by the community on the Transifex platform.
adddocslink: true
---

Nucleus now has a translation server for translating almost everything in Nucleus. All you need is a Transifex account to log into the server.

First, the nitty gritty. By logging into the translation server, you agree to use the system for translating Nucleus only. Please don't put profanities on there or anything of the sort, please don't add your own names into the strings. I have created a credits file on the main repo to add translators to who wish to be credited (which you should be!)

OK with that? You can head over to [our Transifex page](https://www.transifex.com/nucleuspowered/nucleus/) and request access. I'll try to approve new members quickly, if it's been a couple of days, please feel free to ping me on Discord in the translation channel (please ignore the Prof telling you off on this occasion).

I'll put updates before releases, which may cause incomplete translations I guess, but will show the progress!

[For context and information on how to perform your translation, please visit this page.](context.html)

## OK, so what is translated?

_Nearly_ everything in Nucleus v2. There are some exceptions:

* Developer error messages that I would need to diagnose things with, English is my language and to fix Nucleus, I need to understand the errors!
* Some startup messages - this is mostly due to my laziness and this should be fixed soon

## How do I use the translations in Nucleus?

Nucleus will attempt to use your system language, unless you set the `core.override-language` language, [which is a Locale ID that looks like this](https://www.oracle.com/technetwork/java/javase/javase7locales-334809.html#util-text).

In v2, players will be able to select their own language. Nucleus will optionally pick up the language that a player has set on their client and send them that message, translated. 

I also hope to spin out a library to enable this in other plugins, once it matures in Nucleus.

## My language isn't listed, how do I get it added?

Please request it on Transifex. 

## Thank you!

If you choose to volunteer your time, thank you! I can offer nothing in return but the love and warmth of the Nucleus community, but any and all help that Nucleus can get is truly appreciated. Thank you!