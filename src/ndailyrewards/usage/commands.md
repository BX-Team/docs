---
outline: deep
---

# Commands
NDailyRewards provides a range of commands for you to use. This page will detail the permissions for each command that NDailyRewards have.

## Commands & Permissions table
| Command                         | Description                               | Base Permission         | Default &dagger; |
|---------------------------------|-------------------------------------------|-------------------------|:----------------:|
| `/reward`                       | Opens a Reward GUI                        | `-`                     |       ✅         |
| `/reward claim`                 | Claims a reward without opening GUI       | `ndailyrewards.claim`   |       ✅         |
| `/reward help`                  | Sends a help message from lang.yml        | `ndailyrewards.help`    |       ✅         |
| `/reward reload`                | Reloads plugin configuration              | `ndailyrewards.reload`  |       ❌         |
| `/reward setday <player> <day>` | Assign a specific day to the player       | `ndailyrewards.setday`  |       ❌         |
| `/reward version`               | Sends current version of plugin           | `ndailyrewards.version` |       ❌         |

* &dagger; **Default** &mdash; ✅ = Accessible by all players by default &mdash; ❌ = Accessible only by server operators by default.