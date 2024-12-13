---
outline: deep
---

# Dependencies

If you want to use NDailyRewards in your project, you need to add the following dependencies to your project.

Depending on the build system you are using, add the following code to your project:

::: code-group

```kotlin [Gradle Kotlin]
maven("https://repo.bx-team.space/releases")
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
implementation("space.bxteam:ndailyrewards:3.1.0")
```

```groovy [Gradle Groovy]
implementation "space.bxteam:ndailyrewards:3.1.0"
```

```xml [Maven]
<dependency>
    <groupId>space.bxteam</groupId>
    <artifactId>ndailyrewards</artifactId>
    <version>3.1.0</version>
</dependency>
```

:::

## Next Steps

You can find the documentation for NDailyRewards API in the following sections:

<a href="events" class="docs-button">Events</a>
