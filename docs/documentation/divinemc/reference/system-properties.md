---
outline: deep
---

# DivineMC System Properties

These system properties and environment variables can be set when you start your server allowing for the configuration of various settings.

## How they work

System properties are set when you start your server. For example, if you are using a `.bat` or a `.sh` file to start your server, you can add the system properties to the file. For example:

```bash
java -DDivineMC.EnableReloadCommand=true -jar divinemc.jar
```

## System Properties list

#### DivineMC.EnableReloadCommand

- **default**: `unset`
- **description**: Enables the `/reload` command. This command is disabled by default because it can cause issues with plugins and the server itself. Use it at your own risk.
