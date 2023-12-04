# Vue 3 + Vite 4 全家桶开发模版


使用 Vue3 开发模板。  
通过该模板创建一个新项目：

```bash
$ npx degit Shimada666/template-vue3 my-app
$ cd my-app
```

## 技术选型
- [x] Vue3   
- [x] Vite4
- [x] Typescript  
- [x] Antd  
- [x] Vue-Router  
- [x] sass  
- [x] unocss
- [x] eslint  
- [x] Default Layout

## 开始开发

安装依赖

```bash
$ pnpm install
```

开始构建

```bash
$ pnpm dev
```
## Git 仓库 分支和提交约定

简要摘录:
> commit 约定(https://conventionalcommits.org/lang/zh-Hans)

完整格式如下： 其中第一行必填，方括号内选填，注意空行

```
  <type>[optional scope]: <description>

  [optional body]

  [optional footer]
```

可用的 type 如下：

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- chore: Other changes that don't modify src or test files
- revert: Reverts a previous commit

一些实际的 demo:

```
feat(service): 增加服务新增功能
feat(monitor): 增加监控模块
fix(api): 修复API模块对错误码判断错误导致的权限判断逻辑错误, issue #123
docs: 新增关于git commit message约定的文档
```
