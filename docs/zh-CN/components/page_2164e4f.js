amis.define('docs/zh-CN/components/page.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Page 页面",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Page 页面",
    "icon": null,
    "order": 23,
    "html": "<div class=\"markdown-body\"><p>Page 组件是 amis 页面 JSON 配置中顶级容器组件，是整个页面配置的入口组件。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>我们这里在内容区中简单渲染一段文字。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"title\": \"标题\",\n  \"body\": \"Hello World!\"\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6\" href=\"#%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>渲染组件</h2><p>内容区同样可以渲染各种组件，这里我们渲染一个表单。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n      {\n        \"type\": \"input-text\",\n        \"name\": \"name\",\n        \"label\": \"姓名：\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%9C%A8%E5%85%B6%E4%BB%96%E5%8C%BA%E5%9F%9F%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6\" href=\"#%E5%9C%A8%E5%85%B6%E4%BB%96%E5%8C%BA%E5%9F%9F%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>在其他区域渲染组件</h2><p>Page 默认将页面分为几个区域，分别是<strong>内容区（<code>body</code>）</strong>、<strong>侧边栏（<code>aside</code>）</strong> 和 <strong>工具栏（<code>toolbar</code>）部分</strong>，你可以在这些区域配置你想要的组件和内容。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"aside\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"这是侧边栏部分\"\n    }\n  ],\n  \"toolbar\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"这是工具栏部分\"\n    }\n  ],\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"这是内容区\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<blockquote>\n<p>不同区域都是<code>Page</code>的子节点，也就是说都可以使用<code>Page</code>下数据作用域。</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E9%A1%B5%E9%9D%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E8%AF%B7%E6%B1%82\" href=\"#%E9%A1%B5%E9%9D%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E8%AF%B7%E6%B1%82\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>页面初始化请求</h2><p>通过配置<code>initApi</code>，可以在初始化页面时请求所配置的接口。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/page/initData\",\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"当前时间是：${date}\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>具体 API 规范查看 <a href=\"../../docs/types/api\">API 文档</a>。</p>\n<h2><a class=\"anchor\" name=\"%E8%BD%AE%E8%AF%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3\" href=\"#%E8%BD%AE%E8%AF%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>轮询初始化接口</h2><p>想要在页面渲染后，轮询请求初始化接口，步骤如下：</p>\n<ol>\n<li>配置 initApi；</li>\n<li>配置 interval：单位为毫秒，最小 1000。</li>\n</ol>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/page/initData\",\n  \"interval\": 3000,\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"当前时间是：${date}\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果希望在满足某个条件的情况下停止轮询，配置<code>stopAutoRefreshWhen</code>表达式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/page/initData\",\n  \"stopAutoRefreshWhen\": \"this.time % 5\", // 当时间戳能被5整除时，停止轮询\n  \"interval\": 3000,\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"当前时间戳是：${date}\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0\" href=\"#%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>下拉刷新</h2><p>通过配置<code>pullRefresh</code>，可以设置下拉刷新功能（仅用于移动端）。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/page/initData\",\n  \"pullRefresh\": {\n    \"disabled\": false\n  },\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"当前时间是：${date}\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>配置下拉刷新文案</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/page/initData\",\n  \"pullRefresh\": {\n    \"disabled\": false,\n    \"pullingText\": \"继续下拉\",\n    \"loosingText\": \"可以释放了\"\n  },\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"当前时间是：${date}\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"css-%E5%8F%98%E9%87%8F\" href=\"#css-%E5%8F%98%E9%87%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>CSS 变量</h2><p>通过设置 CSS 变量几乎可以修改 amis 中任意组件的展现，具体细节请参考<a href=\"../../../style\">样式</a>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"cssVars\": {\n    \"--text-color\": \"#108cee\"\n  },\n  \"body\": {\n    \"type\": \"form\",\n    \"body\": [\n      {\n        \"type\": \"input-text\",\n        \"label\": \"文本框\",\n        \"name\": \"text\"\n      }\n    ]\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89-css\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89-css\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义 CSS</h2><blockquote>\n<p>1.3.0 及以上版本</p>\n</blockquote>\n<p>虽然 amis 提供了很多内置样式，但想要更精细控制样式，最好的方式依然是编写自定义 CSS，在之前的版本中需要外部页面配合，从 1.3.0 开始 amis 可以直接在配置中支持自定义 CSS</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"css\": {\n    \".myClass\": {\n      \"color\": \"blue\"\n    }\n  },\n  \"body\": {\n    \"type\": \"tpl\",\n    \"tpl\": \"文本\",\n    \"className\": \"myClass\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"aside-%E5%8F%AF%E8%B0%83%E6%95%B4%E5%AE%BD%E5%BA%A6\" href=\"#aside-%E5%8F%AF%E8%B0%83%E6%95%B4%E5%AE%BD%E5%BA%A6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>aside 可调整宽度</h2><p>通过配置 <code>asideResizor</code>，可以让侧边栏支持动态调整宽度，同时可以通过 <code>asideMinWidth</code>、<code>asideMaxWidth</code> 设置 aside 最大最小宽度。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"asideResizor\": true,\n  \"asideMinWidth\": 150,\n  \"asideMaxWidth\": 400,\n  \"aside\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"这是侧边栏部分\"\n    }\n  ],\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"这是内容区\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上面的配置会自动创建一个 <code>&lt;style&gt;</code> 标签，其中内容就是：</p>\n<pre><code class=\"language-css\"><span class=\"token selector\">.myClass</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> blue<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>配置写法和编写普通 css 的体验是一致的，可以使用任意 css 选择符及属性。</p>\n<h2><a class=\"anchor\" name=\"aside-%E4%BD%8D%E7%BD%AE%E5%9B%BA%E5%AE%9A\" href=\"#aside-%E4%BD%8D%E7%BD%AE%E5%9B%BA%E5%AE%9A\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>aside 位置固定</h2><p>通过配置 <code>asideSticky</code> 来开关，默认是开启状态。</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;page&quot;</code></td>\n<td>指定为 Page 组件</td>\n</tr>\n<tr>\n<td>title</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>页面标题</td>\n</tr>\n<tr>\n<td>subTitle</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>页面副标题</td>\n</tr>\n<tr>\n<td>remark</td>\n<td><a href=\"./remark\">Remark</a></td>\n<td></td>\n<td>标题附近会出现一个提示图标，鼠标放上去会提示该内容。</td>\n</tr>\n<tr>\n<td>aside</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>往页面的边栏区域加内容</td>\n</tr>\n<tr>\n<td>asideResizor</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>页面的边栏区域宽度是否可调整</td>\n</tr>\n<tr>\n<td>asideMinWidth</td>\n<td><code>number</code></td>\n<td></td>\n<td>页面边栏区域的最小宽度</td>\n</tr>\n<tr>\n<td>asideMaxWidth</td>\n<td><code>number</code></td>\n<td></td>\n<td>页面边栏区域的最大宽度</td>\n</tr>\n<tr>\n<td>asideSticky</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>用来控制边栏固定与否</td>\n</tr>\n<tr>\n<td>toolbar</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>往页面的右上角加内容，需要注意的是，当有 title 时，该区域在右上角，没有时该区域在顶部</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>往页面的内容区域加内容</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 dom 类名</td>\n</tr>\n<tr>\n<td>cssVars</td>\n<td><code>object</code></td>\n<td></td>\n<td>自定义 CSS 变量，请参考<a href=\"../../../style\">样式</a></td>\n</tr>\n<tr>\n<td>toolbarClassName</td>\n<td><code>string</code></td>\n<td><code>v-middle wrapper text-right bg-light b-b</code></td>\n<td>Toolbar dom 类名</td>\n</tr>\n<tr>\n<td>bodyClassName</td>\n<td><code>string</code></td>\n<td><code>wrapper</code></td>\n<td>Body dom 类名</td>\n</tr>\n<tr>\n<td>asideClassName</td>\n<td><code>string</code></td>\n<td><code>w page-aside-region bg-auto</code></td>\n<td>Aside dom 类名</td>\n</tr>\n<tr>\n<td>headerClassName</td>\n<td><code>string</code></td>\n<td><code>bg-light b-b wrapper</code></td>\n<td>Header 区域 dom 类名</td>\n</tr>\n<tr>\n<td>initApi</td>\n<td><a href=\"../../docs/types/api\">API</a></td>\n<td></td>\n<td>Page 用来获取初始数据的 api。返回的数据可以整个 page 级别使用。</td>\n</tr>\n<tr>\n<td>initFetch</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否起始拉取 initApi</td>\n</tr>\n<tr>\n<td>initFetchOn</td>\n<td><a href=\"../../docs/concepts/expression\">表达式</a></td>\n<td></td>\n<td>是否起始拉取 initApi, 通过表达式配置</td>\n</tr>\n<tr>\n<td>interval</td>\n<td><code>number</code></td>\n<td><code>3000</code></td>\n<td>刷新时间(最小 1000)</td>\n</tr>\n<tr>\n<td>silentPolling</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>配置刷新时是否显示加载动画</td>\n</tr>\n<tr>\n<td>stopAutoRefreshWhen</td>\n<td><a href=\"../../docs/concepts/expression\">表达式</a></td>\n<td><code>&quot;&quot;</code></td>\n<td>通过表达式来配置停止刷新的条件</td>\n</tr>\n<tr>\n<td>pullRefresh</td>\n<td><code>object</code></td>\n<td><code>{disabled: true}</code></td>\n<td>下拉刷新配置（仅用于移动端）</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>inited</td>\n<td>api 初始化数据</td>\n<td>初始化完成</td>\n</tr>\n<tr>\n<td>pullRefresh</td>\n<td></td>\n<td>配置下拉刷新后下拉释放后触发（仅用于移动端）</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>reload</td>\n<td>-</td>\n<td>刷新（重新加载）</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: object</code> 更新的数据</td>\n<td>更新数据</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "渲染组件",
          "fragment": "%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "在其他区域渲染组件",
          "fragment": "%E5%9C%A8%E5%85%B6%E4%BB%96%E5%8C%BA%E5%9F%9F%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E5%9C%A8%E5%85%B6%E4%BB%96%E5%8C%BA%E5%9F%9F%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "页面初始化请求",
          "fragment": "%E9%A1%B5%E9%9D%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E8%AF%B7%E6%B1%82",
          "fullPath": "#%E9%A1%B5%E9%9D%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E8%AF%B7%E6%B1%82",
          "level": 2
        },
        {
          "label": "轮询初始化接口",
          "fragment": "%E8%BD%AE%E8%AF%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3",
          "fullPath": "#%E8%BD%AE%E8%AF%A2%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3",
          "level": 2
        },
        {
          "label": "下拉刷新",
          "fragment": "%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0",
          "fullPath": "#%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0",
          "level": 2
        },
        {
          "label": "CSS 变量",
          "fragment": "css-%E5%8F%98%E9%87%8F",
          "fullPath": "#css-%E5%8F%98%E9%87%8F",
          "level": 2
        },
        {
          "label": "自定义 CSS",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89-css",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89-css",
          "level": 2
        },
        {
          "label": "aside 可调整宽度",
          "fragment": "aside-%E5%8F%AF%E8%B0%83%E6%95%B4%E5%AE%BD%E5%BA%A6",
          "fullPath": "#aside-%E5%8F%AF%E8%B0%83%E6%95%B4%E5%AE%BD%E5%BA%A6",
          "level": 2
        },
        {
          "label": "aside 位置固定",
          "fragment": "aside-%E4%BD%8D%E7%BD%AE%E5%9B%BA%E5%AE%9A",
          "fullPath": "#aside-%E4%BD%8D%E7%BD%AE%E5%9B%BA%E5%AE%9A",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
