(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{457:function(t,n,s){t.exports=s.p+"assets/img/f46214192ccf976de34ce78aeb3fa88e.1d5870b2.png"},458:function(t,n,s){t.exports=s.p+"assets/img/4e974730b3b49098d97a5a10a5091f9a.3ac08ec3.png"},459:function(t,n,s){t.exports=s.p+"assets/img/9e1dcf3763e666183396c15adbf92a0b.618fe46c.png"},589:function(t,n,s){"use strict";s.r(n);var e=s(14),r=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"go-test单元测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go-test单元测试"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/logiee/article/details/126852369",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1),t._v("go test单元测试")]),t._v(" "),n("h4",{attrs:{id:"目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"about:blank#go_test_0"}},[t._v("go test单元测试")])]),t._v(" "),n("li",[n("ul",[n("li",[n("a",{attrs:{href:"about:blank#_3"}},[t._v("基本介绍")])]),t._v(" "),n("li",[n("a",{attrs:{href:"about:blank#_8"}},[t._v("细节介绍")])]),t._v(" "),n("li",[n("a",{attrs:{href:"about:blank#_39"}},[t._v("综合案例")])])])])]),t._v(" "),n("h3",{attrs:{id:"基本介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/logiee/article/details/126852369",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1),t._v("基本介绍")]),t._v(" "),n("p",[t._v("go语言中自带有一个轻量级测试框架testing和自带的go test命令来实现单元测试和性能测试，testing框架和其他语言中的测试框架类似，可以基于这个框架写针对的相应函数的测试用例，也可以基于该框架写相应的压力测试用例。通过单元测试，可以解决如下问题："),n("br"),t._v("\n1.确保每个函数可以运行，并且保证结果的正确性"),n("br"),t._v("\n2.确保写出的代码性能较好"),n("br"),t._v("\n3.单元测试能及时的发现程序设计或实现的逻辑错误，使问题即使暴露，便于问题的定位解决，而性能测试的重点在于发现程序设计上的一些问题，让程序能够在高并发的情况下还能保持稳定。")]),t._v(" "),n("h3",{attrs:{id:"细节介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#细节介绍"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/logiee/article/details/126852369",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1),t._v("细节介绍")]),t._v(" "),n("ol",[n("li",[t._v("testing框架会自动导入xxx_test的文件，并且自动调用TestXxx的函数，其中函数名必须时大驼峰命名法。例如TestAdd()")]),t._v(" "),n("li",[t._v("要将测试文件放在被测试的包相同的包内，测试文件将被排除在正常程序包外，但在运行go test命令时将包含测试文件")]),t._v(" "),n("li",[t._v("通常情况TestXxx函数的参数是*testing.T,其中type T包含："),n("br"),t._v("\nfunc (*T) Cleanup"),n("br"),t._v("\nCleanup 注册要在测试（或子测试）及其所有子测试完成时调用的函数。清理函数将按上次添加、先调用的顺序调用。"),n("br"),t._v("\nfunc (*T) Deadline"),n("br"),t._v("\n截止时间报告测试二进制文件将超过 -timeout 标志指定的超时的时间。"),n("br"),t._v("\n如果 -timeout 标志指示“无超时”（0），则 ok 结果为假。"),n("br"),t._v("\nfunc (*T) Error"),n("br"),t._v("\n错误等效于“日志”，后跟“失败”。"),n("br"),t._v("\nfunc (*T) Errorf"),n("br"),t._v("\n错误 f 等效于 Logf 后跟失败。"),n("br"),t._v("\nfunc (*T) Fail"),n("br"),t._v("\nFail 将函数标记为已失败，但继续执行。"),n("br"),t._v("\nfunc (*T) FailNow"),n("br"),t._v("\nFailNow 将函数标记为已失败，并通过调用运行时停止其执行。Goexit（然后运行当前gorutine中的所有延迟调用）。执行将在下一个测试或基准测试中继续。FailNow 必须从运行测试或基准测试函数的量程中调用，而不是从测试期间创建的其他量程调用。调用 FailNow 并不能阻止那些其他的gorutine。"),n("br"),t._v("\nfunc (*T) Failed"),n("br"),t._v("\n失败报告函数是否失败。"),n("br"),t._v("\nfunc (*T) Fatal"),n("br"),t._v("\n致命等同于日志，后跟失败。"),n("br"),t._v("\nfunc (*T) Fatalf"),n("br"),t._v("\n相当于log，后跟失败。"),n("br"),t._v("\nfunc (*T) Log"),n("br"),t._v("\nLog 使用默认格式（类似于 Println）设置其参数的格式，并将文本记录在错误日志中。对于测试，仅当测试失败或设置了 -test.v 标志时，才会打印文本。对于基准测试，始终打印文本以避免性能取决于 -test.v 标志的值。"),n("br"),t._v("\nfunc (*T) Logf"),n("br"),t._v("\nLogf 根据格式（类似于 Printf）设置其参数的格式，并将文本记录在错误日志中。如果未提供，则添加最后一个换行符。对于测试，仅当测试失败或设置了 -test.v 标志时，才会打印文本。对于基准测试，始终打印文本以避免性能取决于 -test.v 标志的值。"),n("br"),t._v("\nfunc (*T) Skip"),n("br"),t._v("\n“跳过”等效于“日志”，后跟“跳过”。"),n("br"),t._v("\n更多的参数类型以及方法讲在后续应用中再进行学习。")]),t._v(" "),n("li",[t._v("一个测试文件中可以有多测试函数")])]),t._v(" "),n("h3",{attrs:{id:"综合案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#综合案例"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/logiee/article/details/126852369",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1),t._v("综合案例")]),t._v(" "),n("p",[t._v("单元测试综合案例要求：")]),t._v(" "),n("ol",[n("li",[t._v("编写一个Monster结构体，字段为Name，Age，Skill")]),t._v(" "),n("li",[t._v("给Monster绑定方法Store，可以将一个Monster变量序列化后保存到文件中")]),t._v(" "),n("li",[t._v("给Monster绑定方法Restore，可以将一个序列化的Monster，从文件中读取，并且反序列化为Monster对象，检查反序列化")]),t._v(" "),n("li",[t._v("编程测试用例文件store_test.go，编写测试用例函数TestStore和TestReStore经行测试。")])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("条件一")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type Monster struct {\n\tName  string\n\tAge   int\n\tSkill []string\n}\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("条件二")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func (m *Monster) Store() bool {\n\tdata, err := json.Marshal(m)\n\tif err != nil {\n\t\tfmt.Println("err=", err)\n\t\treturn false\n\t}\n\tfilePath := "../monster.ser"\n\tioutil.WriteFile(filePath, data, 0644)\n\treturn true\n}\n\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("条件三")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func (m *Monster) ReStore() bool {\n\tfilePath := "../monster.ser"\n\tfile, err := ioutil.ReadFile(filePath)\n\tif err != nil {\n\t\tfmt.Println("err", err)\n\t\treturn false\n\t}\n\tjson.Unmarshal(file, m)\n\treturn true\n}\n\n\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("条件四")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package Monster\n\nimport "testing"\n\nfunc TestMonster_Store(t *testing.T) {\n\tmonster := Monster{\n\t\tName:  "特斯拉",\n\t\tAge:   10,\n\t\tSkill: []string{"c", "h"},\n\t}\n\tflag := monster.Store()\n\tif !flag {\n\t\tt.Fatalf("monster.Store() 错误")\n\t}\n\tt.Logf("monster.Store() 成功")\n}\nfunc TestMonster_ReStore(t *testing.T) {\n\tmonster := Monster{}\n\tflag := monster.ReStore()\n\tif !flag {\n\t\tt.Fatalf("monster.ReStore() 错误")\n\t}\n\tif monster.Name != "ylj" {\n\t\tt.Errorf("名字不对%v", monster.Name)\n\t}\n\tt.Logf("monster.ReStore() 成功")\n}\n\n\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br")])]),n("p",[t._v("现在经行常规测试"),n("br"),t._v("\n预期报错：名字不对"),n("br"),t._v(" "),n("img",{attrs:{src:s(457),alt:"在这里插入图片描述"}}),n("br"),t._v("\n现在修改反序列化地址"),n("br"),t._v(" "),n("img",{attrs:{src:s(458),alt:"在这里插入图片描述"}}),n("br"),t._v("\n预期会报错地址无法读取地址"),n("br"),t._v(" "),n("img",{attrs:{src:s(459),alt:"在这里插入图片描述"}})]),t._v(" "),n("p",[t._v("本文转自 "),n("a",{attrs:{href:"https://blog.csdn.net/logiee/article/details/126852369",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/logiee/article/details/126852369"),n("OutboundLink")],1),t._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);n.default=r.exports}}]);