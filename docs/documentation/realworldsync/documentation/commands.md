---
outline: deep
---

# Commands

RealWorldSync provides a range of commands for you to use.

## Commands & Permissions Table

| Command        | Description                                                      | Base Permission | Default &dagger; |
| -------------- | ---------------------------------------------------------------- | --------------- | :--------------: |
| `/rws help`    | Sends a help message from lang.yml                               | `rws.user`      |        ✅        |
| `/rws time`    | Shows current world time (from timezone)                         | `rws.user`      |        ✅        |
| `/rws version` | Sends current version of plugin                                  | `rws.user`      |        ✅        |
| `/rws reload`  | Reloads plugin configuration and re-setting-up time/weather sync | `rws.admin`     |        ❌        |

-   &dagger; **Default** &mdash; ✅ = Accessible by all players by default &mdash; ❌ = Accessible only by server operators by default.

### Command Aliases

The following commands have aliases that can also be used for convenience:
| Command | Aliases |
|------------------|-------------------------------|
| `/rws` | `/realworldsync`, `/timesync` |