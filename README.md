## FastDelete

FastDelete是一个快速删除文件夹的工具，基于nodejs里文件操作的强大性能。特别是文件夹里存在大量小文件的情况下，FastDelete能够比Windows的删除操作快上十倍。

> 最近项目发展得很快，代码越来越多，加上**AndroidStudio**构建时会在**build**目录下生成大量文件。有时需要清理一下**build**目录，或者把某些分支代码目录删除掉，节省宝贵的硬盘空间。不过问题来了，Windows下对于这种大量小文件的操作非常慢，现在删除一个分支竟然要2-3分钟的时间才行，所以才萌生了这个工具的想法。
>
> 一开始用命令行执行还是稍复杂了点，后来加上了**文件夹右键菜单**后，删除得更爽快了。



#### 使用前提

安装[NodeJS](https://nodejs.org/en/)



#### 首次使用

执行 `$npm install`下载依赖包到本地的**node_modules**目录下



#### 命令行运行

- 在cmd中执行`node delete.js <deleteDir>`



#### 生成右键菜单

- 修改`install.reg`，将里面的delete.js文件的目录路径改为你的目录路径

- 执行`install.reg`，执行注册表文件

- 在文件夹的右键菜单中，点击**极速删除**，即可删除该目录

  ![](http://ojicajn2x.bkt.clouddn.com/fast-delete-img1.png)