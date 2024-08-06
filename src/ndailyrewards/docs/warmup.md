---
outline: deep
---

# Warmup system

Since of `NDailyRewards 2.1` release, [Kali0033](https://github.com/Kali0033) added a new feature - Warmup System.

## How it works?
It works like this: in the config you set the `reward-login-delay` value to whatever you want (like `120`) and then, if the player has an available reward, he will have to play X seconds more time as you specified in the `reward-login-delay`

Example:

![image](https://github.com/BX-Team/NDailyRewards/assets/76615486/59132fce-a6af-4c37-895d-81d83c8baf0a)

With this feature, new [placeholder](https://github.com/BX-Team/NDailyRewards/wiki/Placeholders) was added - `%ndr_warmup_reward_time%`. This placeholder shows the time left to get reward including warmup time

