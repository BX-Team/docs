---
outline: deep
---

# Config & Modifications
## Configuration Files
NDailyRewards provides a range of configuration files for you to use. This section will detail the configuration files that NDailyRewards have.

<details>
<summary>config.yml</summary>

```yaml
# ███╗░░██╗██████╗░░█████╗░██╗██╗░░░░░██╗░░░██╗██████╗░███████╗░██╗░░░░░░░██╗░█████╗░██████╗░██████╗░░██████╗
# ████╗░██║██╔══██╗██╔══██╗██║██║░░░░░╚██╗░██╔╝██╔══██╗██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗██╔══██╗██╔════╝
# ██╔██╗██║██║░░██║███████║██║██║░░░░░░╚████╔╝░██████╔╝█████╗░░░╚██╗████╗██╔╝███████║██████╔╝██║░░██║╚█████╗░
# ██║╚████║██║░░██║██╔══██║██║██║░░░░░░░╚██╔╝░░██╔══██╗██╔══╝░░░░████╔═████║░██╔══██║██╔══██╗██║░░██║░╚═══██╗
# ██║░╚███║██████╔╝██║░░██║██║███████╗░░░██║░░░██║░░██║███████╗░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██████╔╝██████╔╝
# ╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚═════╝░

# Discord server: https://discord.gg/p7cxhw7E2M
# Modrinth: https://modrinth.com/plugin/ndailyrewards

# General settings
check-updates: true

# Database configuration
database:
  # Select here the database you want to use
  # The following databases are supported:
  #  - sqlite - (default) stores all data in a local file
  #  - mysql - allows using a remote database
  type: sqlite

  # SQLite configuration
  sqlite:
    file: "ndailyrewards.db"
  # MySQL configuration
  mysql:
    jdbc: "jdbc:mysql://localhost:3306/ndailyrewards"
    username: "root"
    password: "password"

# Player events
events:
  # Whether a reward should automatically claim when a player joins (if available)
  auto-claim-reward: false
  # When player joins the server, should plugin open the reward GUI?
  open-gui-when-available: false
  # When player joins the server, should plugin notify player about available rewards?
  notify-when-available: true

# Rewards configuration
rewards:
  # When a player reaches the day limit, should it reset to the first day?
  reset-when-all-claimed: true
  # Specify how many days the player has to wait to claim the reward again (in hours)
  cooldown: 24
  # Should next day unlock after midnight?
  unlock-after-midnight: false
  # Available actions:
  # [console] - entered statement will be executed from console
  # [player] - statement performed as player command execution
  # [message] - messages the player with specified text
  # [actionbar] - shows the text in actionbar for the player
  # [title] - sends primary title with entered text
  # [subtitle] - sends secondary title with entered text
  # [sound] - plays specified sound for the player (sound:volume:pitch)
  # You can also use PlaceholderAPI placeholders (requires PlaceholderAPI plugin)
  # Note: First slot in inventory is 0, not 1
  days:
    '1':
      position: 10
      lore:
        - "&7&lRewards:"
        - "&6- &e1x &6Diamond"
      rewards:
        - "[console] give <player> diamond 1"
        - "[message] &6You have claimed your reward!"
        - "[sound] ENTITY_EXPERIENCE_ORB_PICKUP:1:1"
    '2':
      position: 11
      lore:
        - "&7&lRewards:"
        - "&6- &e2x &6Diamond"
      rewards:
        - "[console] give <player> diamond 2"
        - "[message] &6You have claimed your reward!"
        - "[sound] ENTITY_EXPERIENCE_ORB_PICKUP:1:1"
    '3':
      position: 12
      lore:
        - "&7&lRewards:"
        - "&6- &e3x &6Diamond"
      rewards:
        - "[console] give <player> diamond 3"
        - "[message] &6You have claimed your reward!"
        - "[sound] ENTITY_EXPERIENCE_ORB_PICKUP:1:1"
    '4':
      position: 13
      lore:
        - "&7&lRewards:"
        - "&6- &e4x &6Diamond"
      rewards:
        - "[console] give <player> diamond 4"
        - "[message] &6You have claimed your reward!"
        - "[sound] ENTITY_EXPERIENCE_ORB_PICKUP:1:1"
    '5':
      position: 14
      lore:
        - "&7&lRewards:"
        - "&6- &e5x &6Diamond"
      rewards:
        - "[console] give <player> diamond 5"
        - "[message] &6You have claimed your reward!"
        - "[sound] ENTITY_EXPERIENCE_ORB_PICKUP:1:1"
    '6':
      position: 15
      lore:
        - "&7&lRewards:"
        - "&6- &e6x &6Diamond"
      rewards:
        - "[console] give <player> diamond 6"
        - "[message] &6You have claimed your reward!"
        - "[sound] ENTITY_EXPERIENCE_ORB_PICKUP:1:1"
    '7':
      position: 16
      lore:
        - "&7&lRewards:"
        - "&6- &e7x &6Diamond"
      rewards:
        - "[console] give <player> diamond 7"
        - "[message] &6You have claimed your reward!"
        - "[sound] ENTITY_EXPERIENCE_ORB_PICKUP:1:1"

gui:
  reward:
    title: "&6Daily Rewards"
    size: 27
    display:
      available:
        material: "EMERALD_BLOCK:1"
        name: "&aDay <dayNum>"
        custom-model-data: 0
        lore:
          - "&7Your Reward Awaits"
          - "&7Click Me to claim your prize!"
          - ""
          - "<reward-lore>"
      claimed:
        material: "COAL_BLOCK:1"
        name: "&aDay <dayNum>"
        custom-model-data: 0
        lore:
          - "&7You have claimed this reward"
          - ""
          - "<reward-lore>"
      next:
        material: "COAL_BLOCK:1"
        name: "&aDay <dayNum>"
        custom-model-data: 0
        lore:
          - "&7Your Reward Will Be Here Soon"
          - "&7Wait <time-left>"
          - ""
          - "<reward-lore>"
      unavailable:
        material: "BARRIER:1"
        name: "&aDay <dayNum>"
        custom-model-data: 0
        lore:
          - "&7You have not reached this day yet"
          - ""
          - "<reward-lore>"

    other:
      filler:
        enable: true
        material: "GRAY_STAINED_GLASS_PANE:1"
        name: "&7"
        lore: []

sound:
  open:
    enabled: true
    type: "BLOCK_BARREL_OPEN:1:1"
```

</details>

<details>
<summary>lang.yml</summary>

```yaml
#  -------------------------------------
# |    NDailyRewards Messages Config    |
#  -------------------------------------
# You can change all messages in this file, but don't change the keys
# NDailyRewards supports HEX colors, and you can combine it with default Minecraft colors codes

prefix: "&6[&eNDailyRewards&6] &7"
no-permission: "&cYou don't have permission to do that!"
not-player: "&cYou must be a player to do that!"
player-not-found: "&cPlayer not found!"
invalid-syntax: "&cInvalid syntax! Use &f/reward help &cto see available commands"

commands:
  help:
    - "&6List of available commands:"
    - "&f/reward &7- Opens rewards menu"
    - "&f/reward claim &7- Claim latest reward without opening the menu"
    - "&f/reward help &7- Show this message"
    - "&f/reward reload &7- Reloads plugin"
    - "&f/reward setday <player> <day> &7- Set player's day"
    - "&f/reward version &7- Show plugin version"
  reload: "&aPlugin reloaded!"
  setday: "&aSet &e<player> &6current day to &e<day>"

events:
  notify-when-available: "&6You have available rewards! Use &f/reward &6to open the menu"

claim:
  already-claimed: "&cYou have already claimed this reward"
  available-soon: "&cThis reward will be available soon"
  not-available: "&cYou can't claim this reward yet"
```

</details>

## Config modifications
You can use some new features in the config file, like HEX colors, custom model data, and more.

### HEX Colors
In addition to the standard colors defined using the `&` symbols, more detailed colors can be utilized through HEX coding. You can employ the following format within any text: **<#ffffff>** - representing the color white.

::: tip

You can use [this](https://colorpicker.me) website to pick HEX colors.

:::

### Gradient
To apply a gradient effect, you can use this simple format: 

`<#00FF00>Text with gradient</#FFFF00>`

::: tip

You can use alternative method to create gradient text by using [this](https://www.birdflop.com/resources/rgb/) website.

:::

### Custom Model Data
You can use custom model data in the GUI configuration. This feature allows you to use custom textures for items in the GUI. To use this feature, you need to specify the custom model data number in the `custom-model-data` field. 

```yaml
gui:
  reward:
    title: "&6Daily Rewards"
    size: 27
    display:
      available:
        material: "EMERALD_BLOCK:1"
        name: "&aDay <dayNum>"
        custom-model-data: 0 // [!code highlight]
        lore:
          - "&7Your Reward Awaits"
          - "&7Click Me to claim your prize!"
          - ""
          - "<reward-lore>"
```

### Custom player head textures
You can use custom head textures in the GUI configuration. This feature allows you to set custom head for items in the GUI. To make this feature work, you need to have original texture value from website like **minecraft-heads.com**. On the bottom of any head page, there will be *Minecraft-URL*. You need to copy the value from there and paste it in the `player-head-texture` field.

```yaml
gui:
  reward:
    title: "&6Daily Rewards"
    size: 27
    display:
      available:
        material: "EMERALD_BLOCK:1"
        name: "&aDay <dayNum>"
        player-head-texture: dba489a53d9465f33836355ad09c22d5d2593e61bfab45fc19062a751c4005a2 // [!code highlight]
        lore:
          - "&7Your Reward Awaits"
          - "&7Click Me to claim your prize!"
          - ""
          - "<reward-lore>"
```