## FastDelete

FastDelete是一个快速删除文件夹的工具，基于nodejs里文件操作的强大性能。特别是文件夹里存在大量小文件的情况下，FastDelete能够比Windows的删除操作快上十倍。



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