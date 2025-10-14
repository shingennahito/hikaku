/* =========================================================
   1) DATA: RANKING / FEATURES / PRODUCTS
   ========================================================= */
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

/* ========== 25 sản phẩm: chỉ đổi id / rank / name / price ========== */
const PRODUCTS = [
  {
    id: 1, rank: 1, name: "シャディ デュエット AYL",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "2,678円～60,264円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 2, rank: 2, name: "シャディ デュエット AYL 02",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "3,300円～33,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 3, rank: 3, name: "シャディ デュエット AYL 03",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "5,500円～55,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 4, rank: 4, name: "シャディ デュエット AYL 04",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "11,000円～66,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 5, rank: 5, name: "シャディ デュエット AYL 05",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "2,200円～22,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 6, rank: 6, name: "シャディ デュエット AYL 06",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "3,800円～30,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 7, rank: 7, name: "シャディ デュエット AYL 07",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "4,400円～44,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 8, rank: 8, name: "シャディ デュエット AYL 08",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "6,600円～50,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 9, rank: 9, name: "シャディ デュエット AYL 09",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "7,700円～60,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 10, rank: 10, name: "シャディ デュエット AYL 10",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "8,800円～70,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 11, rank: 11, name: "シャディ デュエット AYL 11",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "9,900円～80,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 12, rank: 12, name: "シャディ デュエット AYL 12",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "11,000円～90,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 13, rank: 13, name: "シャディ デュエット AYL 13",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "12,100円～100,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 14, rank: 14, name: "シャディ デュエット AYL 14",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "13,200円～120,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 15, rank: 15, name: "シャディ デュエット AYL 15",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "14,300円～140,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 16, rank: 16, name: "シャディ デュエット AYL 16",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "15,400円～160,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 17, rank: 17, name: "シャディ デュエット AYL 17",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "16,500円～180,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 18, rank: 18, name: "シャディ デュエット AYL 18",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "17,600円～200,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 19, rank: 19, name: "シャディ デュエット AYL 19",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "19,800円～220,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 20, rank: 20, name: "シャディ デュエット AYL 20",
    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: "22,000円～242,000円(税込)",
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
    features: { "電子カタログあり": true, "カードタイプあり": true, "メッセージカード対応": false, "ラッピング対応": true, "ネット申込可能": true },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  }
];

/* =========================================================
   1) CONSTANTS: HOWTO / CAUTIONS / SUMMARY
   ========================================================= */
const HOWTO = Object.freeze([
  { title:"用途で選ぶ", text:"結婚・出産・香典返しなど、贈り先の用途に合わせて価格帯と世界観を選びましょう。" },
  { title:"内容で選ぶ", text:"総合版 / グルメ / 体験型 / 和風タイプなど、好みに合うカテゴリを重視。" },
  { title:"相手の負担を減らす", text:"個別送料無料・申込しやすさ・有効期限などの運用面もチェック。" },
]);

const CAUTIONS = Object.freeze([
  "割引適用条件（例：税込33,000円以上）を事前に確認する。",
  "名入れ・のし・ラッピング可否を確認する。",
  "在庫切れや有効期限切れに注意。",
]);

const SUMMARY = Object.freeze([
  "迷ったら総合版の中価格帯が無難。",
  "食に強い相手にはグルメ特化、アクティブな相手には体験型も◎。",
  "企業・大量発注は割引条件と納期を先に確認。",
]);
/* =========================================================
   2) TALK (balloon dưới carousel)
   ========================================================= */
const DETAILS_TALK = {
  img: 'image/icon/cat.png',
  name: 'cat',
  text: 'はじめまして、元カタログギフト販売員のcatです！ よろしくね！'
};


/* ============================================================================
   1) TIỆN ÍCH CHUNG (HELPERS)
   - $, $$: chọn nhanh DOM
   - yen(), fmtPrice(): định dạng tiền tệ/giá
   - renderScore(): vẽ khối điểm số
   - enableGrabScroll(): kéo ngang bằng chuột
   ============================================================================ */
const $  = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const yen = n => new Intl.NumberFormat("ja-JP",{ style:"currency", currency:"JPY", maximumFractionDigits:0 }).format(n);

// Hiển thị giá linh hoạt: number -> ¥#,### ; string -> giữ nguyên ; object {min,max} -> ¥min〜¥max
function fmtPrice(val){
  if (val == null || val === "") return "—";
  if (typeof val === "number" && isFinite(val)) return yen(val);
  if (typeof val === "string") return val;
  if (typeof val === "object" && val.min != null && val.max != null) return `${yen(val.min)}〜${yen(val.max)}`;
  return String(val);
}



function enableGrabScroll(el){
  if(!el) return;
  let down = false, sx = 0, sl = 0;
  el.addEventListener('mousedown', e => {
    down = true; sx = e.pageX; sl = el.scrollLeft;
    el.style.cursor = 'grabbing'; e.preventDefault();
  });
  window.addEventListener('mouseup', () => { down = false; el.style.cursor = ''; });
  window.addEventListener('mousemove', e => { if(down) el.scrollLeft = sl - (e.pageX - sx); });
  el.addEventListener('wheel', e => { if(Math.abs(e.deltaY) > Math.abs(e.deltaX)) el.scrollLeft += e.deltaY; }, {passive:true});
}


/* ============================================================================
   2) TOC (MỤC LỤC) – <nav id="toc">
   - Tự quét các .section thuộc .content và sinh danh sách liên kết
   ============================================================================ */
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


/* ============================================================================
   3) RANKING – <section id="ranking"> (lưới thẻ xếp hạng)
   - Dùng DATA RANKING; tự liên kết sang URL của PRODUCT tương ứng nếu thiếu
   ============================================================================ */
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


/* ============================================================================
   4) COMPARE – <section id="compare"> (bảng so sánh)
   - Tạo thead theo danh sách PRODUCT
   - Hàng thuộc tính: price + specs (ẩn vài mục theo HIDE_SPECS)
   - Hàng tính năng: 〇/× theo FEATURES
   ============================================================================ */
function renderCompare(){
  const list = PRODUCTS;
  const host = $("#compareHost");
  if (!host) return;

  // Cột sản phẩm (ảnh + tên/link)
  const cols = list.map(p => `
    <th scope="col">
      <div class="col-head vertical">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${ p.url ? `<a class="col-name" href="${p.url}" title="${p.name}">${p.name}</a>` : `<span class="col-name">${p.name}</span>` }
      </div>
    </th>`).join("");

  // Ẩn một số specs để bảng gọn
  const HIDE_SPECS = new Set(["ページ数","アイテム数","グルメ数","有効期限_月"]);

  // Gom tất cả key (price + specs hiển thị)
  const keys = new Set(["price"]);
  list.forEach(p => Object.keys(p.specs || {}).forEach(k => { if (!HIDE_SPECS.has(k)) keys.add(k); }));

  // Hàng thuộc tính giá/specs
  const rows = [...keys].map(key => {
    const vals = list.map(p => key === "price" ? p.price : (p.specs?.[key] ?? "—"));
    return `<tr data-key="${key}"><th scope="row">${key === "price" ? "価額" : key}</th>${vals.map(v => `<td>${key==="price" ? fmtPrice(v) : v}</td>`).join("")}</tr>`;
  }).join("");

  // Hàng tính năng 〇/×
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


/* ============================================================================
   5) CAROUSEL CHI TIẾT – <section id="detailCarousel">
   - Hiển thị ảnh lớn + tên + mô tả + thông số nhanh + tag + nút đi trang chính
   - Mũi tên prev/next: căn theo mép ảnh; hoạt động cả khi chỉ còn 1 mũi tên
   ============================================================================ */
function initDetailCarousel(list = PRODUCTS){
  const wrap = $("#detailCarousel");
  if(!wrap || !list?.length) return;

  // Nắm tay các node trong section
  const el = {
    img: $("#dcImg", wrap),
    name: $("#dcName", wrap),
    intro: $("#dcIntro", wrap),
    specs: $("#dcSpecs", wrap),
    primary: $("#dcPrimary", wrap),
    rank: $("#dcRank", wrap),
   
    dots: $("#dcDots", wrap),
    prev: $(".dc-nav.prev", wrap),
    next: $(".dc-nav.next", wrap),
    tags: $("#dcTags", wrap),
  };

  let cur = 0;
  
  // Dòng thông số cho từng product (giá / コース数 / グルメ数 / 有効期限)
  function specLines(p){
    const lines = [];
    lines.push(`<li>価格帯：${fmtPrice(p.price)}（目安）</li>`);
    if(p.specs?.コース数)     lines.push(`<li>コース数：${p.specs.コース数}</li>`);
    if(p.specs?.グルメ数)     lines.push(`<li>グルメ数：${p.specs.グルメ数}</li>`);
    if(p.specs?.有効期限_月) lines.push(`<li>有効期限：${p.specs.有効期限_月}ヶ月</li>`);
    return lines.join("");
  }

  // Vẽ dots (nút tròn chọn slide)
  function renderDots(){
    el.dots.innerHTML = list.map((_,i)=>
      `<button role="tab" aria-selected="${i===cur}" aria-label="製品 ${i+1} を表示"></button>`
    ).join("");
    [...el.dots.children].forEach((btn,i)=> btn.addEventListener("click", ()=> go(i)));
  }

  // Đổ dữ liệu cho slide hiện tại
  function paint(){
    const p = list[cur];

    // Ảnh fade-in; căn lại mũi tên sau khi ảnh đã tải xong (ảnh có kích thước thật)
    el.img.style.opacity = 0;
    el.img.onload = () => {
      el.img.style.opacity = 1;
      positionCarouselArrows();
    };
    el.img.src = p.image;
    el.img.alt = p.name;

    // Text + link
    el.name.textContent  = p.name;
    el.intro.textContent = p.intro || "";
    el.specs.innerHTML   = specLines(p);
    el.primary.href      = p.url || "#";

    // Rank (ẩn nếu không có)
    el.rank.textContent     = (p.rank != null) ? `${p.rank}位` : "";
    el.rank.style.display   = (p.rank != null) ? "" : "none";

    // Điểm số
  

    // Dots
    [...el.dots.children].forEach((btn,i)=>btn.setAttribute("aria-selected", i===cur ? "true" : "false"));

    // Tags
    if (el.tags){
      const html = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
      el.tags.innerHTML = html;
      el.tags.style.display = html ? "" : "none";
    }

    // Fallback căn mũi tên lần đầu
    positionCarouselArrows();
  }

  // Điều hướng
  function go(i){
    cur = (i + list.length) % list.length;
    paint();
  }

  // Click nút và phím tắt
  el.prev?.addEventListener("click", ()=> go(cur-1));
  el.next?.addEventListener("click", ()=> go(cur+1));
  wrap.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowRight") go(cur+1);
    if(e.key === "ArrowLeft")  go(cur-1);
  });

  renderDots();
  paint();
}

/* Căn vị trí mũi tên prev/next theo mép ảnh (không yêu cầu cả hai nút cùng tồn tại) */
function positionCarouselArrows(){
  const wrap = document.querySelector('#detailCarousel .dc-wrap');
  const img  = wrap?.querySelector('#dcImg');
  const prev = wrap?.querySelector('.dc-nav.prev');
  const next = wrap?.querySelector('.dc-nav.next');
  if(!wrap || !img) return;

  requestAnimationFrame(() => {
    const w = wrap.getBoundingClientRect();
    const i = img.getBoundingClientRect();

    // Ảnh chưa có kích thước → chờ thêm 1 frame
    if (!i.width || !i.height) {
      requestAnimationFrame(positionCarouselArrows);
      return;
    }

    const GAP = 8;
    const centerY = (i.top - w.top) + i.height/2;

    if (prev){
      prev.style.top   = centerY + 'px';
      prev.style.left  = Math.max(GAP, (i.left  - w.left) + GAP) + 'px';
      prev.style.right = 'auto';
    }
    if (next){
      next.style.top   = centerY + 'px';
      next.style.right = Math.max(GAP, (w.right - i.right) + GAP) + 'px';
      next.style.left  = 'auto';
    }
  });
}


/* ============================================================================
   6) BONG BÓNG THOẠI – chèn block .talk ngay bên dưới #detailCarousel
   ============================================================================ */
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


/* ============================================================================
   7) HOW TO / CAUTION / SUMMARY – các section sau carousel
   ============================================================================ */
function renderHowto(list = HOWTO){
  const host = $("#howtoHost");
  if (!host) return;
  host.innerHTML = list
    .map(x => `<section class="tip"><h3 class="u-strong">${x.title}</h3><p>${x.text}</p></section>`)
    .join("");
}

function renderCaution(list = CAUTIONS){
  const box = $("#cautionList");
  if (!box) return;
  box.innerHTML = list.map(x => `<li>${x}</li>`).join("");
}

function renderSummary(list = SUMMARY){
  const box = $("#summaryHost");
  if (!box) return;
  box.innerHTML = `<ul class="bullet">${list.map(x => `<li>${x}</li>`).join("")}</ul>`;
}


/* ============================================================================
   8) KHỞI TẠO (INIT) – chạy sau khi DOM sẵn sàng
   - Gọi các hàm render theo đúng thứ tự xuất hiện trong HTML
   - Kích hoạt smooth scroll có bù chiều cao header
   - Đóng menu mobile khi chọn xong
   - Lắng nghe resize/orientation để căn lại mũi tên
   ============================================================================ */
window.addEventListener("DOMContentLoaded", () => {
  // 2. TOC
  renderTOC();

  // 3. Ranking
  renderRanking();

  // 4. Compare
  renderCompare();
  enableGrabScroll(document.querySelector('#compareHost')); // kéo ngang bảng so sánh

  // 5. Carousel
  initDetailCarousel(PRODUCTS);

  // 6. Talk dưới carousel
  injectDetailsTalk();

  // 7. Howto / Caution / Summary
  renderHowto();
  renderCaution();
  renderSummary();

  // Smooth scroll (bù chiều cao header cố định)
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

  // Đóng menu mobile khi chọn 1 anchor
  const toggle = document.getElementById('navToggle');
  document.querySelectorAll('#topNav a').forEach(a=>{
    a.addEventListener('click', () => { if (toggle) toggle.checked = false; }, {passive:true});
  });

  // Căn mũi tên khi đổi kích thước/đổi xoay
  window.addEventListener('resize', positionCarouselArrows);
  window.addEventListener('orientationchange', positionCarouselArrows);

  // Theo dõi #dcImg đổi kích thước → căn lại mũi tên (rất chắc)
  const img = document.getElementById('dcImg');
  if (img && 'ResizeObserver' in window){
    const ro = new ResizeObserver(positionCarouselArrows);
    ro.observe(img);
  }
});
/* ============================================================================
   HẾT
   ============================================================================ */