// 给 design.hahaha.chat 全站 HTML 注入 umami 埋点（边缘 HTMLRewriter，覆盖画廊 + 40 风格 preview + 24 临摹）。
// 约定见 hahaha.chat/DEPLOY-TRACKER.md §8 / §B：CF Pages 静态站直接在 HTML 注入 script + 各自 website-id。
// 仅改 text/html，其余原样透传；任何异常都不破坏页面。
const SRC = "https://analytics.my.hahaha.run/script.js";
const WEBSITE_ID = "ed70638d-3aee-4ecb-8e22-d3719a7034ba"; // 哈哈设计系统 · design.hahaha.chat
export async function onRequest(context) {
  const res = await context.next();
  try {
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("text/html")) return res;
    return new HTMLRewriter().on("head", {
      element(el) {
        el.append(`<script defer src="${SRC}" data-website-id="${WEBSITE_ID}"></script>`, { html: true });
      },
    }).transform(res);
  } catch (e) {
    return res;
  }
}
