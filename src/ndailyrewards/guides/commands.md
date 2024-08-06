---
outline: deep
---

# Commands

NDailyRewards provides a range of commands for you to use. This page will detail the permissions for each command that NDailyRewards have.

## Commands & Permissions Table
| Command                  | Description                               | Base Permission       | Default&dagger; |
|--------------------------|-------------------------------------------|-----------------------|:---------------:|
| `/ndailyrewards`         | Opens a Reward GUI                        | `ndailyrewards.user`  |       ❌        |
| `/ndailyrewards help`    | Sends a help message from messages.yml    | `ndailyrewards.user`  |       ❌        |
| `/ndailyrewards version` | Sends current version of plugin           | `ndailyrewards.user`  |       ❌        |
| `/ndailyrewards reload`  | Reloads plugin configuration              | `ndailyrewards.admin` |       ❌        |
| `/ndailyrewards backup`  | Backups all plugin files to `/backup` dir | `ndailyrewards.admin` |       ❌        |

* &dagger; **Default** &mdash; ✅ = Accessible by all players by default &mdash; ❌ = Accessible only by server operators by default.

### Command Aliases
The following commands have aliases that can also be used for convenience:
| Command          | Aliases                                            |
|------------------|----------------------------------------------------|
| `/ndailyrewards` | `/ndr`, `/rewards`, `/ndailyreward`, `/dailybonus` |

### Additional permissions
| Permission                 | Description                                                                                |
|----------------------------|--------------------------------------------------------------------------------------------|
| `ndailyrewards.openonjoin` | Allows you to open the Reward GUI when logging in to the server (if rewards are available) |