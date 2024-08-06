---
outline: deep
aside: false
---

# NDailyRewards

Reward players for playing on your server.

### ❓ About
This plugin gives you the ability to give players daily rewards for playing on your server!
You can change the amount of days in a row from 1 to 54!

**To run plugin, you need `Java 17+`, `Paper 1.16+ (or any other Paper forks)` and `NBT-API` plugin installed**

### 🤖 Features
- MySQL and SQLite support
- Completely automated
- High performance!
- Unlimited amount of rewards
- Set clickable NPC's **(Requires Citizens plugin)**
- Fully customizable!
- Unlock rewards after the midnight (Optional)
- [Warmup system](https://github.com/BX-Team/NDailyRewards/wiki/Warmup-system)
- Have custom [placeholders](https://github.com/BX-Team/NDailyRewards/wiki/Placeholders)
- [HEX](https://github.com/BX-Team/NDailyRewards/wiki/HEX-Colors) color code support
- Define the time between the rewards!
- Execute commands and send messages in rewards!
- GUI Fully customizable
- [Custom model data](https://github.com/BX-Team/NDailyRewards/wiki/Custom-Model-Data) support!
- You can change amount of days in a row to reward
- Auto opens on join (toggleable)
- Autosaves player data every X mins
- Dynamic GUI

### ⌨ Commands & Permissions

|        Command         | Permission          |
|:----------------------:|---------------------|
|     /ndailyrewards     | ndailyrewards.user  |
|  /ndailyrewards help   | ndailyrewards.user  |
| /ndailyrewards version | ndailyrewards.user  |
| /ndailyrewards reload  | ndailyrewards.admin |
| /ndailyrewards backup  | ndailyrewards.admin |

Also, NDailyRewards have command aliases, like: **/ndr**, **/rewards**, **/ndailyreward**, **/dailybonus**

### 📡 Metrics
View plugin metrics at [bStats.org](https://bstats.org/plugin/bukkit/NDailyRewards/13844)

![bstats](https://bstats.org/signatures/bukkit/NDailyRewards.svg)


### 🔨 Download
You can download plugin from [releases tab](https://github.com/BX-Team/NDailyRewards/releases/latest) or also from:
- [Modrinth](https://modrinth.com/plugin/ndailyrewards) (fast updates (recommended))

### 👩‍💻 For developers
#### 🚛 Artifacts 
If you want to download and use NDailyRewards in your project, get it on maven and import to **`pom.xml`** or **`build.gradle`** like this:

**Maven:**
```xml
<repository>
  <id>bx-team-releases</id>
  <url>https://repo.bx-team.space/releases</url>
</repository>
```
```xml
<dependency>
    <groupId>space.bxteam</groupId>
    <artifactId>ndailyrewards</artifactId>
    <version>2.3.6</version>
</dependency>
```

**Gradle:**
```groovy
repositories {
    maven("https://repo.bx-team.space/releases")
}

dependencies {
    compileOnly("space.bxteam.ndailyrewards:2.3.6")
}
```