---
outline: deep
---

# Config files

This page contains the configuration structure for RealWorldSync.

## Configuration structure
📁 `plugins/RealWorldSync/`
  - 📄 `config.yml`: General plugin configuration
  - 📄 `lang.yml`: Configurable plugin messages

## Example files
<!--- Update this to vue config view -->
<details>
<summary>config.yml</summary>

```yaml
# ██████╗░███████╗░█████╗░██╗░░░░░░██╗░░░░░░░██╗░█████╗░██████╗░██╗░░░░░██████╗░░██████╗██╗░░░██╗███╗░░██╗░█████╗░
# ██╔══██╗██╔════╝██╔══██╗██║░░░░░░██║░░██╗░░██║██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔════╝╚██╗░██╔╝████╗░██║██╔══██╗
# ██████╔╝█████╗░░███████║██║░░░░░░╚██╗████╗██╔╝██║░░██║██████╔╝██║░░░░░██║░░██║╚█████╗░░╚████╔╝░██╔██╗██║██║░░╚═╝
# ██╔══██╗██╔══╝░░██╔══██║██║░░░░░░░████╔═████║░██║░░██║██╔══██╗██║░░░░░██║░░██║░╚═══██╗░░╚██╔╝░░██║╚████║██║░░██╗
# ██║░░██║███████╗██║░░██║███████╗░░╚██╔╝░╚██╔╝░╚█████╔╝██║░░██║███████╗██████╔╝██████╔╝░░░██║░░░██║░╚███║╚█████╔╝
# ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚══╝░╚════╝░

# Wiki: https://github.com/BX-Team/RealWorldSync/wiki
# Discord server: https://discord.gg/p7cxhw7E2M
# Modrinth: https://modrinth.com/plugin/rws

options:
  check-for-updates: true
  enable-metrics: true
time:
  enabled: false
  update-interval: 20
  timezone: 'Europe/Berlin'
weather:
  enabled: false
  update-interval: 6000
  openweathermap-key: ''
  location:
    latitude: '0'
    longitude: '0'
```

</details>

<details>
<summary>lang.yml</summary>

```yaml
Help: <gray>-----------<gray> [<green>RealWorldSync<gray>] -----------<newline><dark_green>»
  <green>/rws time <gray>- Shows time by timezone in config.<newline><dark_green>»
  <green>/rws reload <gray>- Reload the plugin.<newline><dark_green>» <green>/rws
  version <gray>- Shows the version currently installed
Prefix: <gray>[<green>RealWorldSync<gray>] <gray>
NoPermission: <red>You don't have permissions to do that.
Version: '<green>Current installed plugin version: <version>'
Time: '<gold>Current world time: <time>'
TimeDisabled: <red>Time is disabled in the config!
ReloadComplete: <green>Reload complete!
```

</details>