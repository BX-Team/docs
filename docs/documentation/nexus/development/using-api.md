---
outline: deep
---

# Nexus API

We provide a simple and easy to use API that allows you to create your own plugins using Nexus API. This page will show you how to use Nexus API in your project.

## Dependency installation <Badge text="Required" type="danger" />

To use Nexus API you need to add our repository and Nexus to your repositories and dependencies in your project.

Depending on the build system you are using, add the following code to your project:

::: code-group

```kotlin [Gradle Kotlin]
maven { url = uri("https://repo.bx-team.space/releases") }
```

```groovy [Gradle Groovy]
maven { url "https://repo.bx-team.space/releases" }
```

```xml [Maven]
<repository>
  <id>bx-team-releases</id>
  <name>BX Team Maven repository</name>
  <url>https://repo.bx-team.space/releases</url>
</repository>
```

:::

::: code-group

```kotlin [Gradle Kotlin]
implementation("space.bxteam:nexus:0.2")
```

```groovy [Gradle Groovy]
implementation "space.bxteam:nexus:0.2"
```

```xml [Maven]
<dependency>
  <groupId>space.bxteam</groupId>
  <artifactId>nexus</artifactId>
  <version>0.2</version>
</dependency>
```

:::

You must also add dependency inside `plugin.yml` or `paper-plugin.yml` file, this is required to load our plugin before your plugin, so they can access our API.

::: code-group

```yaml [plugin.yml]
depend: [Nexus]
```

```yaml [paper-plugin.yml]
dependencies:
  server:
    Nexus:
      load: BEFORE
      required: true
      join-classpath: true
```

:::

## Using Nexus API

To use Nexus API in your project, you need to create an instance of `NexusAPI` class. This class provides all the methods you need to interact with Nexus.
You can do this by using `NexusAPIProvider.get()` method.

```java
NexusAPI nexusApi = NexusAPIProvider.get();
```

After creating instance of API, you can use all the methods that are available in Nexus API. This includes:

| Class                  | Provide method              |
| ---------------------- | --------------------------- |
| ChatService            | getChatService()            |
| HomeService            | getHomeService()            |
| JailService            | getJailService()            |
| RandomTeleportService  | getRandomTeleportService()  |
| SpawnService           | getSpawnService()           |
| TeleportService        | getTeleportService()        |
| TeleportRequestService | getTeleportRequestService() |
| WarpService            | getWarpService()            |

### Example usage of JailService

```java
public class YourPlugin extends JavaPlugin {

    private NexusAPI nexusApi; // [!code focus]
    private JailService jailService; // [!code focus]

    @Override
    public onEnable() {
        this.nexusApi = NexusAPIProvider.get(); // [!code focus]
        this.jailService = nexusApi.getJailService(); // [!code focus]
    }
}
```

## JavaDocs

Nexus API provides JavaDocs for all the classes and methods. You can find the JavaDocs for Nexus API [here](https://repo.bx-team.space/javadoc/releases/space/bxteam/nexus/0.2).
