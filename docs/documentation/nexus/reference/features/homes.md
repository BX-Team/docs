---
outline: deep
---

# Homes

Nexus has a home feature that allows players to set homes and teleport to them. This page will show you how to use the home feature in Nexus.

## Configuration

Here is the configuration for the home feature in Nexus:

```yaml
homes:
  # Time to teleport to the home
  timeToTeleport: 5s # <- Duration to teleport to the home
  # Default home name
  defaultHomeName: home # <- This is the default home name, when you typing /sethome without argument
```

## Home limits

It is possible to configure the maximum number of homes for a given permission. You can find this setting in the `config.yml` file in the plugin folder.

```yaml
homes:
  # Maximum amount of homes per permission
  maxHomes:
    nexus.home.default: 1 # <- all players with this permission will have 1 limit home
    nexus.home.extended: 2 # <- all players with this permission will have 2 limit home
    # If you want to add more permissions, just add them to the list with nexus.home.<unique_name>
    # ^^^ Replace <unique_name> with a unique name example: nexus.home.legend
    nexus.home.legend: 3
```