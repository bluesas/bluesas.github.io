---
title: Kotlin 中的 else if 语句
date: 2018-08-16 20:07:17
tags:
- Bug 
- 问题
---
## 问题

来看下面的代码块

{% codeblock 示例代码 lang:Kotlin %}
if (input == -1) {
    "A"
} else if (input == -2) {
    "B"
} else {
    "C"
}?.let {it: //当 input == -1 时，输出什么
    println(it)
}
{% endcodeblock %}

我们碰到的问题就是，当 input == -1 时，let 语句中 it 为 A, B 还是 C？

## 结果

当 input == -1 时，let 语句不会执行

## 分析

我们看下上面那段 Kotlin 代码编译后生成的 .class 文件的反编译结果：

{% codeblock 反编译 .class 文件 lang:java %}
if (input != -1) {
    String var6 = input == -2 ? "B" : "C";
    System.out.println(var6);
}
{% endcodeblock %}

发现 input == -1 的分支没有了。

这说明 **Kotlin 不支持 else if** 的写法。

{% codeblock else if 示例 lang:Kotlin %}
if (...) {
    ...
} else if (...) {
    ...
} else {
    ...
}
{% endcodeblock %}
上面的代码会被解析为：
{% codeblock else if 示例 lang:Kotlin %}
if (...) {
    ...
} else {
    if (...) {
        ...
    } else {
        ...
    }
}
{% endcodeblock %}

## 原因

我们前面的示例代码实际上会被解释为：
{% codeblock 示例代码 lang:Kotlin %}
if (input == -1) {
    "A"
} else {
    if (input == -2) {
        "B"
    } else {
        "C"
    }?.let {it: //当 input == -1 时，输出什么
        println(it)
    }
}
{% endcodeblock %}
因而 input == -1 时，let语句不会执行。
