---
layout: howto
header: Choose which version of Nucleus to use
lead: Both Nucleus v1 and v2 are available for Minecraft 1.12.2 and are currently supported. 
adddocslink: true
type: howto
---

While Nucleus 2 is a straight upgrade from Nucleus 1.14.x, there are some differences that may mean you need to stay on v1.14.x right now. Use this document to decide which is best for you.

## Use Nucleus 1.14.x if you have plugins using the old API.

If you are using plugins that use the Nucleus v1 API, they will not work with Nucleus v2. Some popular plugins that use the old API are:

* GriefDefender
* SkyClaims
* Impactor + GTS

Over time, as these plugins update to API v2, then you will also be able to upgrade to v2.

## Use Nucleus v1.14.x if you want to use the mature system

Nucleus v2 is stable, but not as well tested as v1.14.x. Therefore, you may wish to continue with Nucleus v1.14.x for the time being while v2 grows.

## Use Nucleus v1.14.x if you use PlaceholderAPI and Gluon

Nucleus v2 uses the Sponge native placeholder system introduced in Sponge API 7.3. If your plugins have not migrated to API 7.3 and use the placeholder system and you wish to use them in Nucleus texts, wait until they upgrade to use the system in Sponge 7.3.

## Use Nucleus v1.14.4 if you use warnings and/or the server shop and do not have an alternative

While they have not been supported for a while, the warnings and server shop modules have gone in version 2. 

## Use Nucleus v2 if you want the newest features

Nucleus v2 contains new features and is the base for our upgrade to Sponge API 8. That means any new features or APIs will be added to v2. v1.14.x is now in severe bug fix only mode and will not receive any features, but will receive some fixes while servers migrate.

## Use Nucleus v2 if you are building a new plugin with potential integration with Nucleus

The v2 API is maintained. The v1 API is not.

## Use Nucleus v2 if you have no preference

Nucleus v2 will receive priority fixes compared to v1.14.4.