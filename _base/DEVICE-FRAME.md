# 移动端设备套壳规范 — iPhone 17 Pro Max

所有 Kit 的**移动端演示一律套这个壳**（替换之前各自的手机框）。框样式在共享 `_assets/device.css`，主题无关（钛金边框，亮暗皆可）。

## 1. 在 preview.html `<head>` 引入（与 fonts.css 并列）

```html
<link rel="stylesheet" href="../../_assets/device.css">
```

## 2. 标准 markup（每个移动端演示用一个 `.dvc17`，把原有手机框替换成它）

把你原来的移动端内容放进 `.dvc-body` 里（保留其卡片/列表/标签栏等），其余壳件（侧键/灵动岛/状态栏/home 条）照抄：

```html
<div class="dvc17">
  <span class="k k-act"></span><span class="k k-vu"></span><span class="k k-vd"></span>
  <span class="k k-cam"></span><span class="k k-pwr"></span>
  <div class="scr">
    <div class="island"></div>
    <div class="sb">
      <span>9:41</span>
      <span class="ico">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="4.5" width="3" height="7.5" rx="1"/><rect x="10" y="2" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true"><path d="M8 2.5c2.6 0 5 1 6.8 2.7l-1.5 1.6A7.4 7.4 0 0 0 8 6.7 7.4 7.4 0 0 0 2.7 6.8L1.2 5.2A9.6 9.6 0 0 1 8 2.5Zm0 3.8c1.5 0 2.9.6 3.9 1.6l-1.6 1.6A2.9 2.9 0 0 0 8 8.7c-.8 0-1.6.3-2.3.8L4.1 7.9A5.5 5.5 0 0 1 8 6.3Zm0 3.6 1.6 1.6L8 12 6.4 11.5 8 9.9Z"/></svg>
        <svg width="26" height="13" viewBox="0 0 26 13" fill="none" aria-hidden="true"><rect x="1" y="1" width="21" height="11" rx="3" stroke="currentColor" stroke-opacity=".4"/><rect x="3" y="3" width="15" height="7" rx="1.5" fill="currentColor"/><rect x="23.5" y="4" width="1.6" height="5" rx=".8" fill="currentColor" fill-opacity=".4"/></svg>
      </span>
    </div>
    <div class="dvc-body">
      <!-- 这里放本 Kit 的移动端布局内容（App 首页/详情/收件箱等）。
           首个元素无需再做手机外框；顶部已自动留 54px 状态栏空间。
           内容用本 Kit 的 var(--ds-*) 与本地素材；底部标签栏等照旧。 -->
    </div>
    <div class="home"></div>
  </div>
</div>
```

## 3. 规则

- 每个 Kit 的移动端区块至少 **2 个 `.dvc17`** 演示（如 App 首页 + 详情/列表）；并排展示。
- `.scr` 高 812px 固定（真实 Pro Max 比例，超出自动隐藏）。移动布局按**一屏**设计、信息饱满。
- 状态栏文字默认 `var(--ds-fg)`；若该屏顶部是深色 header，给该 `.dvc17` 加 `class="dvc17 sb-light"` 让状态栏/home 转白。
- 暗色优先的 Kit（dark-tech/cyberpunk/agent）：屏内 `--ds-bg` 本就深，配 `sb-light` 即可。
- **不要**再保留旧的自制手机框/听筒/圆角壳——统一用 `.dvc17`。
- 仅新增 `_assets/device.css` 一条引用；不引任何外网。图片仍 `loading=lazy`+`alt`。
