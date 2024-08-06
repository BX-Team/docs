---
outline: deep
---

# Custom Head Textures

With release of NDailyRewards 2.2 we added back custom head system

# How it works?
This option only can be applied on items in `gui.days-display.*` section.

To make this option works, you need to have original texture value from website like **minecraft-heads.com**. On the bottom of any head page, there will be *Minecraft-URL*. Insert it's value in config like that:

```yaml
gui:
  title: '&d&lDaily Rewards!'
  size: 27
  days-positions: 10,11,12,13,14,15,16
  days-display:
    available:
      material: PLAYER_HEAD:0:1
      player-head-texture: dba489a53d9465f33836355ad09c22d5d2593e61bfab45fc19062a751c4005a2
      name: '&a[Day #%day%] &fAvailable Reward!'
      lore:
      - '%reward-lore%'
      - ''
      - '&a» &7Expires in: &a%expire%'
      - '&aClaim it right now!'
```

In this example, output will be head with **"Waffle Cone"** texture. Also, be sure to set material to `PLAYER_HEAD`!