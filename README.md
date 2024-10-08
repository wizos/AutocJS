# outline.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/outline.js)](https://www.npmjs.com/package/@yaohaixiao/outline.js)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/outline.js/branch/master/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/outline.js)
[![npm downloads](https://img.shields.io/npm/dt/@yaohaixiao/outline.js)](https://npmcharts.com/compare/@yaohaixiao/outline.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/outline.js.svg)](https://github.com/yaohaixiao/outline.js/blob/master/LICENSE)


outline.js - 自动生成文章导读（Table of Contents）导航的 JavaScript 工具。会自动分析文章中的标题（ h1~h6 ）标签，并生成文章段落层次结构的导读导航菜单。



## 创作灵感

AnchorJS 是 outline.js 的创作灵感来源。既然 AnchorJS 可创建标题的链接，为什么不直接给文章生成一个文章导读（Table of Contents）导航呢？ 于是便有了 outline.js。



## 特点

- 原生 JavaScript 编写，无需任何依赖；
- 支持 UMD 规范，同时支持 E6 模块；
- 拥有 AnchorJS 基础功能；
- 支持中文和英文标题文字生成ID，并提供配置参数 anchorLinkFilter 提供独立的回调函数生成语义化的 ID；
- 支持生成独立的侧边栏导航菜单；
- 支持直接在文章中指定的 DOM 元素内生成文章导读导航(fixed 或者 sticky 布局)；
- 自动分析标题关系，生成段落层级索引值和章节索引编码；
- 支持配置自定义工具栏按钮和按钮的回调函数；
  * 支持针对（github 项目的）API 文档的 tags 和 issues 等按钮的跳转；
  * 支持自定义图标的自定义按钮，并且支持配置自定义按钮的触发事件和事件处理器；
- 自动为文章页面添加通用的打印样式；
- （在配置打印样式后）有纯净的阅读视图（按ESC键可退出），并引入 Web Speech API 提供自动语音阅读功能；
- 阅读模式引入 scroll-timeline-name 和 animation-timeline 实现动画显示文章阅读进度；
- 针对超长文章，采用 time slice 机制生成导航菜单，充分优化性能；
- 支持添加插件：
  * 命令式功能函数插件
  * 独立模块式插件
  * Outline.prototype 扩展插件
- 可以作为 jQuery 插件使用；
- 界面简洁大方；
- 配置灵活，丰富，让你随心所欲掌控 outline.js；

说明：outline.js 的 Wiki 中介绍了实现自动计算段落层次的算法

## Examples

outline.js 的支持的滚动元素可以是 Window 窗口，也可以是某个 DOM 元素。

### 窗口滚动

![独立侧滑菜单](https://yaohaixiao.github.io/outline.js/img/screen-shot.png)

* 独立侧滑菜单：[https://yaohaixiao.github.io/outline.js/examples/relative.html](https://yaohaixiao.github.io/outline.js/examples/relative.html)
* WordPress：[http://www.yaohaixiao.com/blog/publish-subscribe-pattern-in-javascript/](http://www.yaohaixiao.com/blog/publish-subscribe-pattern-in-javascript/)

![sticky 定位](https://yaohaixiao.github.io/outline.js/img/sticky.png)
* sticky 定位：[https://yaohaixiao.github.io/outline.js/examples/sticky.html](https://yaohaixiao.github.io/outline.js/examples/sticky.html)

![fixed 定位](https://yaohaixiao.github.io/outline.js/img/fixed.png)
* fixed 定位（不显示按钮工具栏）：[https://yaohaixiao.github.io/outline.js/examples/fixed.html](https://yaohaixiao.github.io/outline.js/examples/fixed.html)

### DOM 元素滚动

![flex 布局](https://yaohaixiao.github.io/outline.js/img/flex.png)
* flex 布局（超长文章）：[https://yaohaixiao.github.io/outline.js/examples/flex.html](https://yaohaixiao.github.io/outline.js/examples/flex.html)

### Anchors 模块独立调用

* Anchors 模块（仅给文章的标题添加）：[https://yaohaixiao.github.io/outline.js/examples/anchors.html](https://yaohaixiao.github.io/outline.js/examples/anchors.html)

## 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/outline.js/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/outline.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/outline.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/outline.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/outline.js/)</br>Opera |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IE11, Edge                                                                                                                                                                                               | last 10 versions                                                                                                                                                                                           | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                   |


## 安装说明

outline.js 提供多种安装方式的支持： npm 安装、加载 CDN 资源、以及本地资源调用。

### npm install

```shell
$ npm install -S @yaohaixiao/outline.js
```

### script 

可以根据项目的实际情况，选择调用 CDN 文件或者本地文件。

#### CDN

```html
<link href="https://cdn.jsdelivr.net/gh/yaohaixiao/outline.js/outline.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/outline.js/outline.min.js"></script>
```

#### 调用本地JS文件

```html
<link href="path/to/outline.min.css" rel="stylesheet" /></script>
<script src="path/to/outline.min.js"></script>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Outline.js</title>
  <link href="https://cdn.jsdelivr.net/gh/yaohaixiao/outline.js/outline.min.css" rel="stylesheet" />
</head>
<body>
<main>
  <!--这里 outline.js 会生成导航菜单-->
  <aside id="aside">
    
  </aside>
  <article id="article">
    <h1>Outline.js</h1>
    <p>xxx</p>
    <h2>Features</h2>
    <p>xxx</p>
    <h2>Usage</h2>
    <p>xxx</p>
    <h2>Examples</h2>
    <p>xxx</p>
  </article>
</main>
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/outline.js/outline.min.js"></script>
<script>
  (function(){
    const defaults = Outline.DEFAULTS
    let outline

    defaults.position = 'sticky'
    defaults.stickyHeight = 86
    // position 的值为 sticky 或者 fixed 时需要指定
    // parentElement 参数，即文章导航菜单插入的 DOM 位置
    // 可以时 dom 元素，也可以是 DOM 元素的选择器字符串
    defaults.parentElement = '#aside'
    defaults.articleElement = '#article'
    defaults.homepage = './index.html'
    // Outline.DEFAULTS 是对象，应用类型的
    outline = new Outline(defaults)
  })()
</script>
</body>
</html>
```



## 使用说明

outline.js 既支持在 node.js 环境中以 CommonJS 模块调用，也支持 ES6 模块方式加载。

```js
// Node.js 环境中使用
const Outline = require('@yaohaixiao/outline.js')

// 作为 ES6 模块使用
import Outline from '@yaohaixiao/outline.js/outline'
// 调用其他独立模块（如果需要）
import Anchors from '@yaohaixiao/outline.js/anchors'
import Navigator from '@yaohaixiao/outline.js/navigator'
import Drawer from '@yaohaixiao/outline.js/drawer'
import Toolbar from '@yaohaixiao/outline.js/toolbar'

// 创建 Outline 实例
// 2.0.0 调整了配置参数，配置更加简单
// 当然，可以直接使用 DEFAULTS 静态属性，
// Outline.DEFAULTS 就是一下的默认配置
const outline = new Outline({
    // 文章显示区域的 DOM 元素或者选择器字符串
    articleElement: '#article',
    // 要收集的标题选择器
    selector: 'h2,h3,h4,h5,h6',
    // 指定文章导读导航菜单的标题文字。
    // 设置空字符串或者 false，则不显示标题
    // 在插入导航菜单的 DOM 元素已有标题时，可以设置 title: '' 或者 false
    title: '目录',
    // 负责文章区域滚动的元素
    // String 类型 - 选择器字符串，默认值：html,body（window窗口）
    // HTMLElement 类型 - DOM 元素
    scrollElement: 'html,body',
    // 文章导读菜单的位置
    // relative - （默认值）创建独立的侧滑菜单
    // sticky - 导航菜单将以 sticky 模式布局（需要确保菜单插入位置支持 sticky 模式布局）
    // fixed - 导航菜单将以 fixed 模式布局，会自动监听滚动位置，模拟 sticky 布局
    // sticky 和 fixed 布局时，需要设置 parentElement
    // 2.0.0 暂时不支持之前版本那种 inside 模式，不会自动在文章开始位置插入 navigator 导航菜单
    position: 'sticky',
    // 导航菜单将要插入的位置（DOM 元素）
    // String 类型 - 选择器字符串
    // HTMLElement 类型 - 插入的 DOM 元素
    // 仅在 position 设置为 sticky 和 fixed 布局时有效
    parentElement: '#aside',
    // 设置 position: relative 时，placment 定义侧滑菜单和 toolbar 导航位置：
    // rtl - 菜单位置在窗口右侧，滑动动画为：right to left
    // ltr - 菜单位置在窗口左侧，滑动动画为：left to right
    // ttb - 菜单位置在窗口上方，滑动动画为：top to bottom
    // btt - 菜单位置在窗口下方，滑动动画为：bottom to top
    placement: 'rtl',
    // 页面中其它 sticky 或者模拟 skicky 的 fiexed 定位的 DOM 元素的高度。例如 wordpress 系统中，
    // 就会有 sticky 定位的导航菜单。这些 sticky 元素脱离了正常的流布局后，原来 h1~h6 标题标签的 
    // offsetTop 计算会出现偏差。sticky 元素会遮挡标题，因此针对页面中有其它 sticky 元素会遮挡标题，
    // 因此针对 sticky 布局时，需要设置 stickyHeight 高度。outline.js 会根据 stickyHeight 和计
    // 算出的标题的 offsetTop 值重新计算滚动定位；
    // 说明：outline.js 主要用于文章详情页面，
    // 因此 stickyHeight 仅针对 top: 0，且 sticky 定位元素在文章内容区域上方的位置；
    stickyHeight: 0,
    // 是否显示标题编号
    showCode: true,
    // 指定是否采用动画定位高亮当前的章节标题，默认值：true
    // 当值为 false 时，则采用高亮当前章节标题的链接文字并加粗文字
    // 如果喜欢更简洁的高亮效果，可以选择设置为 false
    animationCurrent: true,
    // 是否显示侧边的按钮工具栏
    hasToolbar: true,
    // 点击空白处（非独立导航菜单），收起导航菜单
    closeOnClickModal: true,
    // 有独立导航菜单时，是否默认显示菜单 
    showNavModalFirst: false,
    // 标题图标链接的 URL 地址
    // （默认）没有设置定制，点击链接页面滚动到标题位置
    // 设置了链接地址，则不会滚动定位
    anchorURL: '',
    // 指定当前站点主页地址
    homepage: '',
    // 指定git仓库地址
    git: '',
    // 指定git仓库中的 tags 地址
    tags: '',
    // 指定git仓库中的 issues 地址
    issues: '',
    // 自定义按钮配置
    tools: [],
    // 为文章页添加基础的打印样式
    // 如果您的页面已经有打印样式，就无需设置了
    // 原名：print
    reader: {
      //（必须）要打印的文章区域，DOM 元素或者选择器字符串。
      target: '', // 原名：element
      // （可选）要打印的文章标题。如果 element 区域有 h1 标签则无需设置。
      // 可以直接设置标题文本，也可以是文章页的主标题 DOM 元素
      title: '',
      // 进入阅读模式的提示消息文本
      enterReadingTip: '进入阅读模式，按 ESC 键可退出阅读模式',
      // 是否允许启用 Web Speech API 阅读文章
      allowSpeak: false
    },
    // DIYer的福利
    // 独立侧滑菜单时，customClass 会追加到 drawer 侧滑窗口组件
    // 在文章中显示导航菜单时，customClass 会追加到 navigator 导航菜单
    customClass,
    // position: fixed，当导航菜单样式进入 fixed 定位后，触发的回调函数
    afterSticky: null,
    // 当导航菜单隐藏或者显示后，触发的回调函数
    afterToggle: null,
    // 当点击上下滚动按钮，导航菜单或者文章中的 # 图标，滚动结束后触发的回调函数
    afterScroll: null,
    // 文档的标题文本过滤回调函数
    // API 文档中，正文的方法会添加参数等信息，例如：getChapters(headings, showCode, chapterTextFilter)
    // 而在 navigator 导航菜单，我希望显示为 getChapters()，这时我们就可以借助 chapterTextFilter 回调函数
    // 对原始的文本进行过滤，返回我们期望的 getChapters() 文本
    chapterTextFilter: null,
    // 锚点链接的生成回调函数
    // anchorLinkFilter(tag, title, id)
    // tag - 当前标题的 tagName 小写：h1~6
    // title - 当前标题的文本内容
    // id - outline 为当前标题生成的 id 号，是个数值
    // 如果设置了 anchorURL，则会统一使用 anchorURL 参数的地址
    anchorLinkFilter: null
});

// 可以在创建导航后，重置配置信息，重新生成新的导航
Outline.reload({
  // 调整位直接在文章内生成导航
  position: 'sticky',
  articleElement: '#article'
})
```

### VUE 中使用说明

如果您尝试在 VUE 项目中使用 outline.js，以下为推荐的使用方法：

```js
import Outline from '@yaohaixiao/outline.js/outline'

export default {
  // 省略其它逻辑...
  data() {
    return {
      outline: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 在（文章）详情页初始化 outline
      // 并且确定页面的文章内容绘制完成，否则无法获取到 hx 标签
      this.outline = new Outline(Outline.DEFAULTS)
    })
  },
  beforeDestroy() {
    // 如果希望在非文章页面不显示工具栏，可以调用 destroy() 方法
    // 销毁所有 outline.js 创建的 DOM 节点，包括工具栏和导航菜单
    this.outline.destroy()
  }
}
```

## 插件应用说明

Outline 提供3中创建插件的方式：

- Outline.cmd(name, plugin, options)：添加命令式功能函数插件
- Outline.plug(name, plugin, options)：添加独立模块式插件
- Outline.proto(name, plugin, options)：添加 Outline.prototype 扩展插件

### 参数说明

- name：必须，插件名称
- plugin：必须，插件实际执行功能的函数或者模块
- options：可选，函数或者模块初始化需要的参数

### 代码示例

```js
Outline.cmd('console', function(options) {
  console.log(options.name)
}, { name: 'command' })
```

```js
Outline.plug('message', Message, { 
  message: 'message 插件的消息' 
})
```

以上两种插件在 Outline 界面绘制完成后会制动执行插件的功能。每个 Outline 的实例也可以手动执行注册的插件功能：

```js
const instance  = new Outeline({selector: 'h1, h2'})

instance.execute('message', {
  message: '实例手动执行 message 插件的消息'
})

instance.execute('console', {
  name: 'console 插件'
})
```

以上两种方式添加的插件，会在 Outline 模块销毁后自动销毁。

以下是扩展 Outline.prototype 方式的插件的示例：

```js
// Message 模块需要是扩展至 Component 类，并且需要又 DEFAULTS 属性
// Commponent 模块请查看源代码：https://github.com/yaohaixiao/outline.js/blob/master/base/component.js
Outline.proto('message', Message)

const instance  = new Outeline({selector: 'h1, h2'})

instance.message.open({
  message: '给 outline 示例扩展了 message 模块'
})

Outline.proto('success', Message.success)

const instance  = new Outeline({selector: 'h1, h2'})

instance.success('给 outline 示例扩展了 message 模块')
```

## API Documentation

完整 API 文档地址：[https://yaohaixiao.github.io/outline.js/](https://yaohaixiao.github.io/outline.js/)


## Options

outline.js 提供了较为丰富的配置项，以便适应不同的展示方式。


### articleElement

Type: `String|Element`

Default: `'#article'`

* String： 选择器字符串，默认值：html,body（即 window 窗口）;
* HTMLElement： DOM 元素;

可选，用来指定页面中显示文章正文的 DOM 节点或者选择器字符串。


### selector

Type: `String`

Default: `'h1,h2,h3,h4,h5,h6'`

可选，用来指定 article 节点下，要生成导航的标题标签的选择器。


### title

Type: `String`

Default: `'目录'`

可选，用来指定文章导读导航菜单的标题文字。


### scrollElement

Type: `String|HTMLElement`

Default: `html,body`

* String： 选择器字符串，默认值：html,body（即 window 窗口）;
* HTMLElement： DOM 元素;

可选，负责文章区域滚动的元素：


### position

Type: `String`

Default: `'relative'`

可选，用来指定文章导读导航菜单的显示位置：

* relative: （默认值）创建独立的侧滑菜单；
* sticky: 导航菜单将以 sticky 模式布局（需要确保菜单插入位置(DOM 节点)支持 sticky 模式布局）；
* fixed: 导航菜单将模拟 sticky 布局，起初是普通定位，会自动监听滚动位置，但滚动到导航菜单顶部时，以 fixed 模式布局，模拟 sticky 布局效果；

当设置为 sticky 和 fixed 布局时，需要设置 parentElement。

注意：2.0.0 暂时不支持之前版本那种 inside 模式，不会自动在文章开始位置插入 chapters 导航菜单


### parentElement

Type: `String|HTMLElement`

Default: `#aside`

* String： 选择器字符串，默认值：html,body（即 window 窗口）;
* HTMLElement： DOM 元素;

可选，导航菜单将要插入的位置（DOM 元素）。仅在 position 设置为 sticky 和 fixed 布局时有效。


### placement

Type: `String`

Default: `rtl`

可选，设置 position: relative 时，placement 定义侧滑菜单和 toolbar 导航位置：

* rtl - 菜单位置在窗口右侧，滑动动画为：right to left（默认值）；
* ltr - 菜单位置在窗口左侧，滑动动画为：left to right；
* ttb - 菜单位置在窗口上方，滑动动画为：top to bottom；
* btt - 菜单位置在窗口下方，滑动动画为：bottom to top；

![ltr](https://yaohaixiao.github.io/outline.js/img/ltr.png)

ltr，工具栏的位置在左边，点击菜单按钮，菜单按钮从左侧划出；

![rtl](https://yaohaixiao.github.io/outline.js/img/rtl.png)

rtl，工具栏的位置在右边，点击菜单按钮，菜单按钮从右侧划出；



### showCode

Type: `Boolean`

Default: `true`

可选，是否显示段落章节编号：

* true - 显示编号（默认值）；
* false - 不显示编号；


### anchorURL

Type: `String`

Default: `''`

可选，用来指定文章标题锚点链接图标的链接地址：

* '' - 点击链接页面滚动到标题位置（默认值）；
* 其它 URL 值 - 就直接跳转到指定页面了；

### homepage

Type: `String`

Default: `''`

可选，用来指定当前站点的主页链接地址：

* '' - 不会创建 Homepage 按钮（默认值）；
* 其它 URL 值 - 不会创建 Homepage 按钮，点按钮就直接跳转到指定页面了；


### customClass

Type: `String`

Default: `''`

可选，(DIYer福利)设置自定义样式的 class 名称：

* '' - 采用默认 outline.js 的 UI 界面（默认值）；
* 设置自定义样式 - 自己根据需求设置个性化的 UI 界面；



## Properties

outline.js 重构后，对外放 4 个重要的属性：anchors、drawer、navigator 和 toolbar。它们都是独立的对象实例，提供了 outline.js 所有的能力（属性和方法）。


### DEFAULTS

Type: `Objects`

静态属性，存储的是 Outline 对象默认配置信息。

```js
Outline.DEFAULTS = {
  articleElement: '#article',
  selector: 'h2,h3,h4,h5,h6',
  title: '目录',
  // 如果您使用的是比较旧的 chrome 浏览器，例如：Chromium 60.x 版本或者以下版本
  // 请手动设置 scrollElement = 'body'，否则点击导航无法滚动定位
  scrollElement: 'html,body',
  position: 'relative',
  parentElement: '#aside',
  placement: 'rtl',
  // 注意：3.38.2 开始 showCode 默认为 false
  showCode: false,
  animationCurrent: true,
  hasToolbar: true,
  anchorURL: '',
  stickyHeight: 0,
  homepage: '',
  git: '',
  tags: '',
  issues: '',
  tools: [],
  reader: {
    target: '',
    title: '',
    enterReadingTip: '进入阅读模式，按 ESC 键可退出阅读模式'
  },
  customClass: '',
  afterSticky: null,
  afterToggle: null,
  afterScroll: null
}
```


### attrs

Type: `Objects`

存储的是 Outline 对象当前使用中的配置选项。


### anchors

Type: `Objects`

Anchors 模块：类似 AnchorJS 基础功能模块，自动分析段落层级。


### navigator

Type: `Objects`

Navigator 模块：独立的导航菜单模块。


### drawer

Type: `Objects`

Drawer 模块：独立的侧滑窗口模块。


### toolbar

Type: `Objects`

Toolbar 模块：独立的固定定位的工具栏模块；


## Methods

outline.js 的提供的方法如下：

### attr([prop, value])

设置或者获取初始化时配置的 attrs 信息的。

#### Parameters

##### prop

Type: `String|Object`

（可选）attrs 中的属性名称或者要配置的 attrs 信息。

##### value

Type: `Any`

（可选）要设置的 prop 属性的值。

* 不传递任何参数：返回完整的 attrs 配置信息；
* 仅传递 prop：
  * String: 返回 attrs 配型信息中与 prop 对应的值；
  * Object: 用来设置 attrs 配置信息；
* 同时传递 prop 和 value 参数：设置 attrs 配置信息中的某个属性值；

#### Returns

Type: `Any`

Outline 对象，以便实现链式调用。


### getChapters([isTreeStructured])

返回 outline.js 分析后的文章段落信息数据。

#### Parameters

##### isTreeStructured

Type: `Boolean`
Default: `false`

（可选）是否为树结构的数据。

* false: (默认值）输出打平的一维数组格式数据；
* true: 输出树结构格式的数据；

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。


### count()

返回 outline.js 分析后的 chapters 段落章节数据数量。

#### Returns

Type: `Number`

chapters 段落章数据数量。


### toTop()

页面（scrollElement）滚动到顶部。

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。


### toBottom()

页面（scrollElement）滚动到底部。

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。


### scrollTo(top[, afterScroll])

页面滚动到指定 top 位置。

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。


#### Parameters

##### top

Type: `Number`

（必须）指定滚动位置的 top 数值。

##### afterScroll

Type: `Function`

（可选）滚动结束后的回调行数。

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。


### toggle()

隐藏或者显示导航菜单。

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。


### destroy()

销毁 outline.js 创建的所有 anchors 链接和导航菜单，已经对应的事件绑定。

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。


### reload(options)

程序重启，先执行 destroy() 方法执行程序销毁逻辑，然后重新初始化并重新绘制界面。

#### Parameters

##### options

Type: `Object`

（必须）指定重启程序的新的配置信息（参考 DEFAULT 属性）。

#### Returns

Type: `Outline`

Outline 对象，以便实现链式调用。



## Events

outline.js 从 3.21.0 开始提供了 6 事件。通过 outline.js 在 3.21.0 新添加的 $on() 方法监听。

| 事件名称          | 说明                                                              | 回调参数                                 |
|---------------|-----------------------------------------------------------------|--------------------------------------|
| created       | Outline 实例配置信息初始化完成后触发，此时 DOM 元素还没有绘制。返回实例最终的 attrs 配置属性的（对象）值。 | attrs：Outline 实例最终的 attrs 配置属性的（对象）值 |
| mounted       | Outline 实例的所有 DOM 元素绘制完毕后触发。                                    | --                                   |
| enterReading  | 配置了 reader 参数，在进入阅读模式后会触发。                                      | --                                   |
| exitReading   | 配置了 reader 参数，在离开阅读模式后会触发。                                      | --                                   |
| beforeDestroy | Outline 实例销毁前事件，在调用 destroy() 方法后会触发。                           | --                                   |
| destroyed     | Outline 实例销毁后事件，在调用 destroy() 方法后会触发。                           | --                                   |
| refresh       | Outline 在调用 refresh() 方法后会触发。                                   | --                                   |

具体使用方法参阅 API 文档的 [Events](https://yaohaixiao.github.io/outline.js/#heading-44) 相关说明。



## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).

API Documentation Licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
