# Neon EXP

该框架皆在探索客户端与服务端一体化开发的可能性——网站与本地应用的大部分 UI 构建使用同一份源码，客户端与服务端（B/S 或 C/S）间的数据库对接均使用同一份配置文件性质的源码（换句话讲，客户端的发包、接包与服务端的监听、读写数据库是写在同一份源码中的，由框架自动将其展开），以及再不同平台环境下对项目的正确转译、打包等。

该框架仍处于试验研发阶段，未来将以发布至 NPM 的形式供广大程序员使用。

当前开发的版本暂时为服务端 - 客户端模式的框架，未来将会同时支持 SPA 应用缓存与本地应用的开发（分别使用 Electron 与 Cordova）。
