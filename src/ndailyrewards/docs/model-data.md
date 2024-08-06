---
outline: deep
---

# Custom Model Data

If you have NDailyRewards (v1.5+) installed, plugin supports custom model data for resourcepacks.

## Adding Custom Model Data
Custom Model Data only can be applied to `gui.days-display.*` config section.

I will show you how to add custom model data to `gui.days-display.available` section:

```yaml
gui:
  title: '&d&lDaily Rewards!'
  size: 27
  days-positions: '10,11,12,13,14,15,16'
  days-display:
    available:
      material: 'EMERALD_BLOCK:0:1'
      name: '&a[Day #%day%] &fAvailable Reward!'
      custom-model-data: 1234567
      lore:
        - '%reward-lore%'
        - ''
        - '&a» &7Expires in: &a%expire%'
        - '&aClaim it right now!'
```

be sure to replace `1234567` with you'r model data number