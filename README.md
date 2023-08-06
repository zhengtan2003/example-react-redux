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



