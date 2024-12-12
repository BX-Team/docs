---
outline: deep
---

# Next Steps

Now that you have your server up and running, there are a few things you should do to ensure that your server is running smoothly.

## Configuration

One of the first things you should do is ensure your server is configured to your specifications.
Please see [DivineMC Configuration](../reference/configuration) and [Paper Configuration](https://docs.papermc.io/paper/reference/configuration).

## Security

### Whitelisting

If you want to restrict who can join your server, you can use the whitelist feature. This allows you to
specify who can join your server, and stops anyone else from joining. You can use the whitelist from
the server console, or by editing the `whitelist.json` file in your server directory.

### Permissions

Permissions are a way to control what players can and cannot do on your server. You can use permissions
to restrict who can use certain commands, or who can access certain areas of your server. It is
common for plugins to use permissions to control who can use their features. You can use permission
plugins such as [LuckPerms](https://luckperms.net) to manage the permissions which players will be granted.

## Backups

It's important to keep backups of your server. If something goes wrong, you can restore your server to a
previous state. To learn more, read [this article](https://docs.papermc.io/paper/updating) on PaperMC's documentation.

## Optimization

Out of the box, DivineMC is optimized for performance. However, there are many things you can do to further
optimize your server. One of the most common things to do is to make sure that you are running the
correct startup flags for your server. You can generate a startup script with the correct flags for your server using [flags.sh](https://flags.sh).
Beyond this, a guide such as [this one](https://paper-chan.moe/paper-optimization/) will help you to further optimize your server.
