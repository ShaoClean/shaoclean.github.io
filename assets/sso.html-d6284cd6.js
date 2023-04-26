import{$ as o,a0 as e,a1 as t,a4 as c}from"./framework-19a42cda.js";const n={},p=c('<h1 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h1><p>同一个顶级域名的情况： 设置 cookie 来解决</p><p>A 系统跳转到 B 系统自动登录的情况： 携带 token 信息</p><p>跨站点登录： 在同一个浏览器中，A 站点登录后，B 站点刷新页面也登录了；A 站点退出登录后，B 站点刷新页面也退出登录了。</p><p>在一个服务上通过加载资源的形式去调用其他服务的登录接口，处理请求接口的服务根据标识去写入客户端 cookie。</p><blockquote><p>用户统一在认证中心进行登录，登录成功后，认证中心记录用户的登录状态，并将 Token 写入 Cookie。（注意这个 Cookie 是认证中心的，应用系统是访问不到的。）</p></blockquote><p>淘宝登录的时候，进入了登录页面（认证中心），登陆完成后服务器返回 token，并把 token 存在 cookie 中 此时天猫为什么刷新一下页面就可以登录了呢？应该是加载页面的时候，加载了一个认证中心一样的资源。因为之前淘宝已经在认证中心完成登陆了，那么认证中心就可以在 cookie 中存下 token 了。天猫需要登录的时候，只需要调取认证中心，查看认证中心 cookie 中的 token 是否有效就可以了！</p><p>虽然两个网站都有自己独立的登录页面，但是，我猜想是通过我们不可见的方式加载了同一个资源，并统一通过这个资源来判断是否完成登录。</p><p>可以理解为上面说的“认证中心”？</p><p>淘宝登录后，认证中心所在的域名下的cookie中有了用户的登录状态。</p><p>当别的系统需要实现登录的时候，只需要通过某种方式来访问这个“认证中心”，问一下它有没有完成登录呀？有没有token呀？有的话返回这个token给当前需要登录的系统，然后再做一遍token的校验就可以了</p>',11),a=[p];function k(i,s){return e(),t("div",null,a)}const _=o(n,[["render",k],["__file","sso.html.vue"]]);export{_ as default};