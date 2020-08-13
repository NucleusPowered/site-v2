---
layout: tutorials
header: Creating and Using Warps
lead: Learn how to set and use warps
adddocslink: true
steps: warp
type: tutorial
---

## Creating and Deleting Warps

### Creating a Warp

> You will need the `nucleus.warp.set.base` command to create a warp

You can create a warp by moving your player to the spot where you want a warp to be created and by setting a warp. The
position and rotation of your player will be stored along with the warp name. Anyone who uses the warp will be teleported
to the stored position and given the stored rotation.

Use the `/warp set <name>` command, where `<name>` is an alphanumeric name that will be associated with the warp. This
will create the warp.

### Setting a Warp's Cost

> You will need the `nucleus.warp.cost.base` permission to set a cost for a warp

Each warp can be given its own cost. To do so, use the command `/warp cost <warp name> <cost>`, where `<warp name>` is
replaced with the name of the warp you want to give a cost to and `<cost>` is replaced with the cost it should have.

All warps can be given a default cost when created. This can be set in the `warp` category in `main.conf`, on the 
`default-warp-cost` key.

### Deleting a warp

> You will need the `nucleus.warp.delete.base` command to delete a warp

A warp can be deleted using the `/warp delete <name>` command, where `<name>` is the name of the warp to be deleted.