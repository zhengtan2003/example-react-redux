# example-react-redux

目前Redux官方推荐使用`@reduxjs/toolkit`来简化和优化Redux应用程序的开发。`@reduxjs/toolkit`是一个Redux官方提供的工具包，旨在帮助开发者更轻松地构建和管理Redux store、reducers和actions。

使用`@reduxjs/toolkit`的主要优势包括：

1. **更少的样板代码**: `@reduxjs/toolkit`帮助消除了传统Redux应用中的大量样板代码，使代码更加简洁易读。

2. **内置的immutable更新**: 通过使用`immer`库，`@reduxjs/toolkit`允许您以一种更直观的方式更新Redux store中的状态，而无需手动编写不可变的更新代码。

3. **自动生成reducers和action creators**: 使用`createSlice`函数，您可以在不编写冗长的switch语句的情况下自动生成reducers和action creators。

4. **轻松集成常用中间件**: 通过`configureStore`函数，您可以轻松地将常见的中间件集成到Redux store中，例如日志记录中间件、异步操作中间件等。

5. **优化了性能**: `@reduxjs/toolkit`使用了一些性能优化，例如在发出多个相同的action时自动合并它们，从而减少不必要的重渲染。

6. **Redux DevTools扩展集成**: `@reduxjs/toolkit`集成了Redux DevTools扩展，方便调试和追踪应用程序状态的变化。

总的来说，`@reduxjs/toolkit`是一个强大且易于使用的工具包，可以使Redux应用程序的开发更加高效和愉快。当然，使用Redux还是取决于您的项目需求和个人偏好，但如果您是新手或希望简化Redux开发流程，`@reduxjs/toolkit`是一个非常不错的选择。

## Codesandbox 示例

你可以在下面查看一个简单的示例，演示如何使用 `@reduxjs/toolkit`。

[![Edit Redux Thunk Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/zhengtan2003/example-react-redux/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clkz38bbi000h3b6n6gxb5txj%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clkz38bbi000c3b6nr3k5sxww%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clkz38bbi000g3b6n3vq31tvs%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clkz38bbi000e3b6ne5jwxh4k%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clkz38bbi000c3b6nr3k5sxww%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clkz38bbi000b3b6no7zdm68t%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clkz38bbi000c3b6nr3k5sxww%2522%252C%2522activeTabId%2522%253A%2522clkz38bbi000b3b6no7zdm68t%2522%257D%252C%2522clkz38bbi000e3b6ne5jwxh4k%2522%253A%257B%2522id%2522%253A%2522clkz38bbi000e3b6ne5jwxh4k%2522%252C%2522activeTabId%2522%253A%2522clkz38gt700zb3b6nuvb5vkbv%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clkz38gt700zb3b6nuvb5vkbv%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clkz38bbi000g3b6n3vq31tvs%2522%253A%257B%2522id%2522%253A%2522clkz38bbi000g3b6n3vq31tvs%2522%252C%2522activeTabId%2522%253A%2522clkz38fas00ne3b6ntdjtcrwr%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clkz38bbi000f3b6nrowcoege%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clkz38bn7000jhfebd5n5g9cj%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clkz38fas00ne3b6ntdjtcrwr%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)




