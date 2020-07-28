---
layout: howto-notoc
header: How to Enable & Disable Modules
lead: Nucleus allows you to select which functionality that the plugin will provide.
adddocslink: true
type: howto
---

Nucleus is broken into multiple modules that can be enabled or disabled as required. Modules can be enabled/disabled in `main.conf`.

> Unlike most other Nucleus configuration options, any changes to modules will not take effect until you restart your server. 
{:.bl.info}

In the `main.conf` file, the section `-modules` will contain a list of modules to enable state pairs. For example, the `afk` module will generate an entry looking like the following:

```
afk=ENABLED
```

By default, all modules are enabled unless another plugin tells Nucleus not to load it because it will handle the . Modules are be set to one of three states:

* `ENABLED`: default, the module will be loaded unless another plugin asks for the module to be disabled.
* `DISABLED`: the module will not be loaded
* `FORCELOAD`: the module will be loaded and cannot be disabled

Change each entry as required. Once done, restart your server to change the modules that are loaded.