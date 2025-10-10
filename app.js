/* ========= Data ========= */
const RANKING = [
  { id: 1, name: "カタログギフト", brand: "シャディ", price: 4900, image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 2, name: "リンベル プレゼンテージ", brand: "リンベル", price: 3300, image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 3, name: "ハーモニック テイク・ユア・チョイス", brand: "ハーモニック", price: 11000, image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 4, name: "グルメ専用 カタログ", brand: "厳選", price: 5500, image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 5, name: "体験型 カタログ", brand: "アクティビティ", price: 11000, image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
];

const FEATURES = [
  { key: "電子カタログあり", label: "電子カタログあり" },
  { key: "カードタイプあり", label: "カードタイプあり" },
  { key: "メッセージカード対応", label: "メッセージカード対応" },
  { key: "ラッピング対応", label: "ラッピング対応" },
  { key: "ネット申込可能", label: "ネット申込可能" },
];

const PRODUCTS = [
  {
    id: 1, rank: 22, name: "シャディ デュエット AYL",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: 5500,
    score: { avg: 3.23, items: [
      { label: "掲載商品の豊富さ", value: 1.00 },
      { label: "発送までの速さ",   value: 3.34 },
      { label: "ラッピングの充実度", value: 1.59 },
      { label: "贈り相手の注文のしやすさ", value: 4.00 },
      { label: "贈り手の注文のしやすさ",   value: 4.50 },
    ]},
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": true, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 2, rank: 12, name: "シャディ デュエット AYL",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: 1111,
    score: { avg: 3.23, items: [
      { label: "掲載商品の豊富さ", value: 1.00 },
      { label: "発送までの速さ",   value: 3.34 },
      { label: "ラッピングの充実度", value: 1.59 },
      { label: "贈り相手の注文のしやすさ", value: 4.00 },
      { label: "贈り手の注文のしやすさ",   value: 4.50 },
    ]},
    specs: { コース数: 12, ページ数: 31231, アイテム数: 1231, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": true, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 3, rank: 12, name: "シャディ デュエット AYL",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: 1312314,
    score: { avg: 3.23, items: [
      { label: "掲載商品の豊富さ", value: 1.00 },
      { label: "発送までの速さ",   value: 3.34 },
      { label: "ラッピングの充実度", value: 1.59 },
      { label: "贈り相手の注文のしやすさ", value: 4.00 },
      { label: "贈り手の注文のしやすさ",   value: 4.50 },
    ]},
    specs: { コース数: 124, ページ数: 122, アイテム数: 123, グルメ数: 12, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": true, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 4, rank: 1221, name: "シャディ デュエット AYL",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: 550210,
    score: { avg: 3.23, items: [
      { label: "掲載商品の豊富さ", value: 1.00 },
      { label: "発送までの速さ",   value: 3.34 },
      { label: "ラッピングの充実度", value: 1.59 },
      { label: "贈り相手の注文のしやすさ", value: 4.00 },
      { label: "贈り手の注文のしやすさ",   value: 4.50 },
    ]},
    specs: { コース数: 122, ページ数: 1221, アイテム数: 22, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": true, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 5, rank: 211, name: "シャディ デュエット AYL",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: 5213500,
    score: { avg: 3.23, items: [
      { label: "掲載商品の豊富さ", value: 1.00 },
      { label: "発送までの速さ",   value: 3.34 },
      { label: "ラッピングの充実度", value: 1.59 },
      { label: "贈り相手の注文のしやすさ", value: 4.00 },
      { label: "贈り手の注文のしやすさ",   value: 4.50 },
    ]},
    specs: { コース数: 14, ページ数: 572, アイテム数: 32133, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": true, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
];

/* ========= Talk ========= */
const DETAILS_TALK = {
  img: 'image/icon/cat.png',
  name: 'cat',
  text: 'はじめまして、元カタログギフト販売員のcatです！ よろしくね！'
};

/* ========= Helpers ========= */
const $  = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const yen = n => new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY",maximumFractionDigits:0}).format(n);

/* Score renderer (đã thiếu trước đây) */
function renderScore(score){
  if(!score) return "";
  const rows = (score.items || []).map(it => `
    <div class="score-row">
      <span>${it.label}</span>
      <meter min="0" max="5" value="${it.value}"></meter>
      <b>${it.value.toFixed(2)}</b>
    </div>
  `).join("");
  return `<div class="score-avg">総合 ${score.avg.toFixed(2)}</div>${rows}`;
}

/* ========= TOC / Ranking / Compare ========= */
function renderTOC(){
  const host = $("#toc");
  if (!host) return;
  const all = $$(".content .section");
  const seen = new Set();
  const sections = all.filter(sec => {
    const id = (sec.id || "").trim();
    if (!id || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
  const ul = document.createElement("ul");
  sections.forEach(sec => {
    const li = document.createElement("li");
    const a  = document.createElement("a");
    a.href = `#${sec.id}`;
    a.textContent = sec.querySelector("h2")?.textContent || sec.id;
    li.appendChild(a);
    ul.appendChild(li);
  });
  host.innerHTML = "<h2>目次</h2>";
  host.appendChild(ul);
}

function renderRanking(){
  const host = $("#rankingGrid");
  if(!host) return;
  const getLinkForRanking = (r) => {
    if (r.url) return r.url;
    const p = PRODUCTS.find(p =>
      p.id === r.id ||
      (p.name && r.name && p.name.replace(/\s+/g,'') === r.name.replace(/\s+/g,''))
    );
    return p?.url || null;
  };
  host.innerHTML = RANKING.map((r,i)=>{
    const link = getLinkForRanking(r);
    const inner = `
      <div class="medal">${i+1}位</div>
      <img src="${r.image}" alt="${r.name}" loading="lazy">
      <div class="name">${r.name}</div>
      <div class="brand">${r.brand}</div>
      <div class="price">${yen(r.price)}</div>
    `;
    return link
      ? `<a class="rank-card" href="${link}" title="${r.name} を開く">${inner}</a>`
      : `<article class="rank-card" aria-disabled="true">${inner}</article>`;
  }).join("");
}

function renderCompare(){
  const list = PRODUCTS;
  const host = $("#compareHost");
  if (!host) return;

  const cols = list.map(p => `
    <th scope="col">
      <div class="col-head vertical">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${ p.url ? `<a class="col-name" href="${p.url}" title="${p.name}">${p.name}</a>` : `<span class="col-name">${p.name}</span>` }
      </div>
    </th>`).join("");

  const HIDE_SPECS = new Set(["ページ数","アイテム数","グルメ数","有効期限_月"]);
  const keys = new Set(["price"]);
  list.forEach(p => Object.keys(p.specs || {}).forEach(k => { if (!HIDE_SPECS.has(k)) keys.add(k); }));

  const rows = [...keys].map(key => {
    const vals = list.map(p => key === "price" ? p.price : (p.specs?.[key] ?? "—"));
    return `<tr><th scope="row">${key}</th>${vals.map(v => `<td>${formatCell(key, v)}</td>`).join("")}</tr>`;
  }).join("");

  const featureRows = FEATURES.map(f=>{
    const vals = list.map(p => !!(p.features && p.features[f.key]));
    return `<tr><th scope="row" class="feature">${f.label}</th>${vals.map(v => `<td class="${v?'yes':'no'}"></td>`).join("")}</tr>`;
  }).join("");

  host.innerHTML = `
    <div class="table-host-inner">
      <table class="compare-table">
        <thead><tr><th scope="col">項目</th>${cols}</tr></thead>
        <tbody>${rows}${featureRows}</tbody>
      </table>
    </div>`;
}

function formatCell(key, val){
  if(val === "—") return val;
  if(key === "price") return yen(val);
  return val;
}

/* ========= Details list (không dùng) – an toàn nếu thiếu phần tử ========= */
function renderDetails(){
  const box = $("#detailList");
  if(!box) return; // tránh crash nếu không tồn tại
  box.innerHTML = PRODUCTS.map(p=>`
    <article class="detail-card" id="p-${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <div class="detail-body">
        <h3>${p.name}</h3>
        <div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
        <p class="intro">${p.intro}</p>
        <ul class="bullet">
          <li>価格帯：${yen(p.price)}〜（目安）</li>
          <li>コース数：${p.specs?.コース数 ?? "—"}｜グルメ数：${p.specs?.グルメ数 ?? "—"}</li>
          <li>有効期限：${p.specs?.有効期限_月 ?? "—"}ヶ月</li>
        </ul>
      </div>
    </article>`).join("");
}

/* ========= Howto / Caution / Summary ========= */
function renderHowto(){
  const HOWTO = [
    { title:"用途で選ぶ", text:"結婚・出産・香典返しなど、贈り先の用途に合わせて価格帯と世界観を選びましょう。" },
    { title:"内容で選ぶ", text:"総合版 / グルメ / 体験型 / 和風タイプなど、好みに合うカテゴリを重視。" },
    { title:"相手の負担を減らす", text:"個別送料無料・申込しやすさ・有効期限などの運用面もチェック。" },
  ];
  $("#howtoHost").innerHTML = HOWTO.map(x=>`
    <section class="tip"><h3 class="u-strong">${x.title}</h3><p>${x.text}</p></section>
  `).join("");
}

function renderCaution(){
  const CAUTIONS = [
    "割引適用条件（例：税込33,000円以上）を事前に確認する。",
    "名入れ・のし・ラッピング可否を確認する。",
    "在庫切れや有効期限切れに注意。"
  ];
  $("#cautionList").innerHTML = CAUTIONS.map(x=>`<li>${x}</li>`).join("");
}
function renderSummary(){
  const SUMMARY = [
    "迷ったら総合版の中価格帯が無難。",
    "食に強い相手にはグルメ特化、アクティブな相手には体験型も◎。",
    "企業・大量発注は割引条件と納期を先に確認。"
  ];
  $("#summaryHost").innerHTML = `<ul class="bullet">${SUMMARY.map(x=>`<li>${x}</li>`).join("")}</ul>`;
}

/* ========= Detail Carousel ========= */
function initDetailCarousel(list = PRODUCTS){
  const wrap = $("#detailCarousel");
  if(!wrap || !list?.length) return;

  const el = {
    img: $("#dcImg", wrap),
    name: $("#dcName", wrap),
    intro: $("#dcIntro", wrap),
    specs: $("#dcSpecs", wrap),
    price: $("#dcPrice", wrap),
    primary: $("#dcPrimary", wrap),
    rank: $("#dcRank", wrap),
    score: $("#dcScore", wrap),
    dots: $("#dcDots", wrap),
    prev: $(".dc-nav.prev", wrap),
    next: $(".dc-nav.next", wrap),
    tags: $("#dcTags", wrap),
  };

  let cur = 0;

  function renderDots(){
    el.dots.innerHTML = list.map((_,i)=>
      `<button role="tab" aria-selected="${i===cur}" aria-label="製品 ${i+1} を表示"></button>`
    ).join("");
    [...el.dots.children].forEach((btn,i)=> btn.addEventListener("click", ()=> go(i)));
  }

  function specLines(p){
    const lines = [];
    lines.push(`<li>価格帯：${yen(p.price)}〜（目安）</li>`);
    if(p.specs?.コース数)     lines.push(`<li>コース数：${p.specs.コース数}</li>`);
    if(p.specs?.グルメ数)     lines.push(`<li>グルメ数：${p.specs.グルメ数}</li>`);
    if(p.specs?.有効期限_月) lines.push(`<li>有効期限：${p.specs.有効期限_月}ヶ月</li>`);
    return lines.join("");
  }

  function paint(){
    const p = list[cur];

    // hiệu ứng fade
    el.img.style.opacity = 0;
    el.img.onload = () => { el.img.style.opacity = 1; };
    el.img.src = p.image;
    el.img.alt = p.name;

    el.name.textContent = p.name;
    el.intro.textContent = p.intro || "";
    el.specs.innerHTML = specLines(p);
     // cập nhật giá
    el.primary.href = p.url || "#";

    // rank
    el.rank.textContent = (p.rank != null) ? `${p.rank}位` : "";
    el.rank.style.display = (p.rank != null) ? "" : "none";

    // score
    el.score.innerHTML = renderScore(p.score);

    // dots
    [...el.dots.children].forEach((btn,i)=>btn.setAttribute("aria-selected", i===cur ? "true" : "false"));
    if (el.tags){
  const html = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
  el.tags.innerHTML = html;
  el.tags.style.display = html ? "" : "none";
}
  }

  function go(i){
    cur = (i + list.length) % list.length;
    paint();
  }

  // nút Prev/Next + phím ←/→
  el.prev?.addEventListener("click", ()=> go(cur-1));
  el.next?.addEventListener("click", ()=> go(cur+1));
  wrap.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowRight") go(cur+1);
    if(e.key === "ArrowLeft")  go(cur-1);
  });

  renderDots();
  paint();
}

/* ========= Talk bubble ========= */
function injectDetailsTalk(targetId = 'detailCarousel'){
  const sec = document.getElementById(targetId) || document.getElementById('details');
  if(!sec) return;
  const existing = document.getElementById('detailsTalk');
  const html = `
    <div id="detailsTalk" class="talk" role="note" aria-label="メッセージ">
      <figure class="speaker">
        <img class="avatar" src="${DETAILS_TALK.img}" alt="${DETAILS_TALK.name}" width="68" height="68" loading="lazy">
        <figcaption class="name">${DETAILS_TALK.name}</figcaption>
      </figure>
      <div class="balloon">${DETAILS_TALK.text}</div>
    </div>`;
  if (existing) existing.outerHTML = html; else sec.insertAdjacentHTML('beforeend', html);
}

/* ========= Init ========= */
window.addEventListener("DOMContentLoaded", () => {
  renderTOC();
  renderRanking();
  renderCompare();
  renderDetails();          // an toàn nếu thiếu #detailList
  injectDetailsTalk();

  renderHowto();
  renderCaution();
  renderSummary();

  // Smooth scroll (bù chiều cao header)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        const headerHeight = document.getElementById('siteHeader')?.offsetHeight || 0;
        const targetPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
      }
    });
  });

  // Đóng menu mobile sau khi chọn
  const toggle = document.getElementById('navToggle');
  document.querySelectorAll('#topNav a').forEach(a=>{
    a.addEventListener('click', () => { if (toggle) toggle.checked = false; }, {passive:true});
  });

  // Carousel
  initDetailCarousel(PRODUCTS);
});
