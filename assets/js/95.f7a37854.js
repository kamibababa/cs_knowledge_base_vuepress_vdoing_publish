(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{542:function(n,s,a){"use strict";a.r(s);var e=a(14),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("在 React 中，判断一个函数是否重新生成（即是否是同一个引用）通常依赖于函数的引用比较。如果一个函数在组件的每次渲染中重新定义，那么该函数会获得新的引用。React 中有一些方法可以帮助我们判断和控制函数的重新生成，特别是使用 "),s("code",[n._v("useCallback")]),n._v(" 或 "),s("code",[n._v("useMemo")]),n._v(" 来优化函数引用的稳定性。")]),n._v(" "),s("h3",{attrs:{id:"_1-使用-usecallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-usecallback"}},[n._v("#")]),n._v(" 1. "),s("strong",[n._v("使用 "),s("code",[n._v("useCallback")])])]),n._v(" "),s("p",[n._v("React 的 "),s("code",[n._v("useCallback")]),n._v(" hook 可以帮助你缓存一个函数的引用，确保该函数在组件重新渲染时只有在其依赖项发生变化时才会重新生成。这样就可以避免不必要的函数重新创建。")]),n._v(" "),s("h4",{attrs:{id:"示例-没有使用-usecallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-没有使用-usecallback"}},[n._v("#")]),n._v(" 示例：没有使用 "),s("code",[n._v("useCallback")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("jsx复制代码import React, { useState } from 'react';\n\nfunction MyComponent() {\n  const [count, setCount] = useState(0);\n\n  // 每次组件渲染时都会重新生成新的函数引用\n  const handleClick = () => {\n    console.log('Button clicked', count);\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>Click Me</button>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("在这个例子中，"),s("code",[n._v("handleClick")]),n._v(" 每次渲染都会创建一个新的函数引用。尽管逻辑上它是一样的，但 React 会认为它是一个全新的函数，因为每次渲染时它都具有不同的引用。")]),n._v(" "),s("h4",{attrs:{id:"示例-使用-usecallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-使用-usecallback"}},[n._v("#")]),n._v(" 示例：使用 "),s("code",[n._v("useCallback")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("jsx复制代码import React, { useState, useCallback } from 'react';\n\nfunction MyComponent() {\n  const [count, setCount] = useState(0);\n\n  // 使用 useCallback 来缓存函数引用\n  const handleClick = useCallback(() => {\n    console.log('Button clicked', count);\n  }, [count]);  // 仅当 count 改变时，handleClick 才会重新生成\n\n  return (\n    <div>\n      <button onClick={handleClick}>Click Me</button>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("在这个例子中，"),s("code",[n._v("useCallback")]),n._v(" 确保 "),s("code",[n._v("handleClick")]),n._v(" 函数的引用只有在 "),s("code",[n._v("count")]),n._v(" 改变时才会重新生成。如果 "),s("code",[n._v("count")]),n._v(" 没有变化，React 会复用之前的 "),s("code",[n._v("handleClick")]),n._v(" 函数引用，避免了每次渲染时函数的重新创建。")]),n._v(" "),s("h3",{attrs:{id:"_2-比较函数引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-比较函数引用"}},[n._v("#")]),n._v(" 2. "),s("strong",[n._v("比较函数引用")])]),n._v(" "),s("p",[n._v("你可以使用 "),s("code",[n._v("console.log")]),n._v(" 或 "),s("code",[n._v("useEffect")]),n._v(" 来打印和比较函数的引用，看看它们是否发生了变化。以下是一个示例，展示了如何在组件中比较函数的引用：")]),n._v(" "),s("h4",{attrs:{id:"示例-检查函数引用变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-检查函数引用变化"}},[n._v("#")]),n._v(" 示例：检查函数引用变化")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("jsx复制代码import React, { useState, useCallback, useEffect } from 'react';\n\nfunction MyComponent() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() => {\n    console.log('Button clicked', count);\n  }, [count]);\n\n  useEffect(() => {\n    console.log('handleClick function reference changed');\n  }, [handleClick]);  // 依赖于 handleClick，只有当 handleClick 改变时才会触发\n\n  return (\n    <div>\n      <button onClick={handleClick}>Click Me</button>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br")])]),s("p",[n._v("在这个例子中，"),s("code",[n._v("useEffect")]),n._v(" 会在 "),s("code",[n._v("handleClick")]),n._v(" 的引用发生变化时输出一条日志。由于 "),s("code",[n._v("handleClick")]),n._v(" 被 "),s("code",[n._v("useCallback")]),n._v(" 包裹，只有当 "),s("code",[n._v("count")]),n._v(" 改变时，"),s("code",[n._v("handleClick")]),n._v(" 的引用才会变化，否则会保持不变。")]),n._v(" "),s("h3",{attrs:{id:"_3-手动比较函数引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-手动比较函数引用"}},[n._v("#")]),n._v(" 3. "),s("strong",[n._v("手动比较函数引用")])]),n._v(" "),s("p",[n._v("你还可以手动比较函数引用，看看它们是否发生了变化。每次渲染时，React 会为所有函数重新计算和生成新的引用。如果你希望了解函数是否发生变化，可以使用 "),s("code",[n._v("useRef")]),n._v(" 来持久化存储函数引用，并进行比较。")]),n._v(" "),s("h4",{attrs:{id:"示例-手动比较函数引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-手动比较函数引用"}},[n._v("#")]),n._v(" 示例：手动比较函数引用")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("jsx复制代码import React, { useState, useRef, useEffect } from 'react';\n\nfunction MyComponent() {\n  const [count, setCount] = useState(0);\n  const prevHandleClickRef = useRef();\n\n  const handleClick = () => {\n    console.log('Button clicked', count);\n  };\n\n  // 在每次渲染时比较函数引用\n  useEffect(() => {\n    if (prevHandleClickRef.current !== handleClick) {\n      console.log('handleClick function reference changed');\n    }\n    prevHandleClickRef.current = handleClick; // 更新引用\n  }, [handleClick]);\n\n  return (\n    <div>\n      <button onClick={handleClick}>Click Me</button>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br")])]),s("p",[n._v("在上面的例子中，"),s("code",[n._v("useRef")]),n._v(" 用于保存先前的 "),s("code",[n._v("handleClick")]),n._v(" 函数引用，并在 "),s("code",[n._v("useEffect")]),n._v(" 中比较当前的引用和先前的引用。如果引用发生变化，"),s("code",[n._v("console.log")]),n._v(" 会输出一条日志。")]),n._v(" "),s("h3",{attrs:{id:"_4-为什么函数会重新生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-为什么函数会重新生成"}},[n._v("#")]),n._v(" 4. "),s("strong",[n._v("为什么函数会重新生成？")])]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("函数在每次渲染时都是新的引用")]),n._v("：在 React 中，组件的每次渲染都会重新执行组件函数，这意味着每次渲染时，函数都会重新定义，返回新的引用。这就是为什么没有使用 "),s("code",[n._v("useCallback")]),n._v(" 或 "),s("code",[n._v("useMemo")]),n._v(" 时，函数会每次重新生成。")]),n._v(" "),s("li",[s("strong",[n._v("依赖项变化")]),n._v("：当 "),s("code",[n._v("useCallback")]),n._v(" 或 "),s("code",[n._v("useMemo")]),n._v(" 的依赖项发生变化时，它们会重新生成新的函数引用。否则，它们会复用上次的函数引用。")])]),n._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),s("ul",[s("li",[n._v("使用 "),s("code",[n._v("useCallback")]),n._v(" 来缓存函数，确保函数只有在相关依赖变化时才重新生成，从而避免了不必要的函数重新创建。")]),n._v(" "),s("li",[n._v("可以通过 "),s("code",[n._v("useEffect")]),n._v(" 或 "),s("code",[n._v("useRef")]),n._v(" 来比较函数的引用，查看它是否发生了变化。")]),n._v(" "),s("li",[n._v("在没有使用 "),s("code",[n._v("useCallback")]),n._v(" 的情况下，React 会在每次渲染时重新生成函数引用。")])])])}),[],!1,null,null,null);s.default=t.exports}}]);