/* ========= Data (thay theo thực tế) ========= */
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
    id: 1,
    name: "シャディ デュエット AYL",

    image: "image/raking/cg-precious.jpg",
    url: "https://www.giftmarry.jp/html/page78.html",
    price: 5500, 
    specs: { コース数: 14, ページ数: 572, アイテム数: 3183, グルメ数: 179, 有効期限_月: 6 },
      features: {               // << thêm
      "電子カタログあり": true,
      "カードタイプあり":  true,
      "メッセージカード対応": true,
      "ラッピング対応":    true,
      "ネット申込可能":    true,
    },
    tags: ["個別送料無料","人気"],
    intro: "洋風テイストの総合版カタログ。結婚・出産内祝いにも幅広く対応。"
  },
  {
    id: 2,
    name: "リンベル プレゼンテージ",
    url: "hhttps://www.giftmarry.jp/html/page78.html",
    image: "image/raking/cg-precious.jpg",
    price: 3300, 
    specs: { コース数: 12, ページ数: 480, アイテム数: 2500, グルメ数: 150, 有効期限_月: 6 },
      features: {               // << thêm
      "電子カタログあり": true,
      "カードタイプあり":  true,
      "メッセージカード対応": true,
      "ラッピング対応":    true,
      "ネット申込可能":    true,
    },
    tags: ["最大45%割引"],
    intro: "紙面デザインが読みやすく、価格帯も豊富。法人ギフトにも最適。"
  },
  {
    id: 3,
    name: "ハーモニック テイクユアチョイス",
    url: "hhttps://www.giftmarry.jp/html/page78.html",
    image: "image/raking/cg-precious.jpg",
    price: 11000, 
    specs: { コース数: 16, ページ数: 600, アイテム数: 3200, グルメ数: 180, 有効期限_月: 6 },
      features: {               // << thêm
      "電子カタログあり": true,
      "カードタイプあり":  true,
      "メッセージカード対応": true,
      "ラッピング対応":    true,
      "ネット申込可能":    true,
    },
    tags: ["人気","定番"],
    intro: "定番の総合版。幅広い年代に刺さる構成でハズしにくい。"
  },
  {
    id: 4,
    name: "ハーモニック テイクユアチョイス",
    url: "https://www.giftmarry.jp/html/page78.html",
    image: "image/raking/cg-precious.jpg",
    price: 11000,
    specs: { コース数: 16, ページ数: 600, アイテム数: 3200, グルメ数: 180, 有効期限_月: 6 },
      features: {               // << thêm
      "電子カタログあり": true,
      "カードタイプあり":  true,
      "メッセージカード対応": true,
      "ラッピング対応":    true,
      "ネット申込可能":    true,
    },
    tags: ["人気","定番"],
    intro: "定番の総合版。幅広い年代に刺さる構成でハズしにくい。"
  },
];
/* ========= mess ========= */
const DETAILS_TALK = {
  img: 'image/icon/cat.png',   // ảnh tròn 60–80px (ví dụ: image/moku.jpg)
  name: 'cat',
  text: 'はじめまして、元カタログギフト販売員のcatです！ よろしくね！'
};
/* ========= end ========= */
const $  = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const yen = n => new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY",maximumFractionDigits:0}).format(n);

/* ========= Renderers ========= */
function renderTOC(){
  const host = $("#toc");
  const sections = $$(".content > .section");
  const ul = document.createElement("ul");
  sections.forEach(sec=>{
    const li = document.createElement("li");
    const a = document.createElement("a");
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

  // Ưu tiên lấy url trực tiếp từ RANKING[i].url.
  // Nếu không có, map sang PRODUCTS theo id / name để lấy url.
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
    ? `<a class="rank-card" href="${link}" title="${r.name} を開く">
          ${inner}
      </a>`
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
        ${
          p.url
            ? `<a class="col-name" href="${p.url}" title="${p.name}">${p.name}</a>`
            : `<span class="col-name">${p.name}</span>`
        }
      </div>
    </th>
  `).join("");


  // ⬇️ các mục muốn ẨN
  const HIDE_SPECS = new Set(["ページ数","アイテム数","グルメ数","有効期限_月"]);

  // gom các cột cần hiển thị
  const keys = new Set(["price"]);
  list.forEach(p => Object.keys(p.specs || {}).forEach(k => {
    if (!HIDE_SPECS.has(k)) keys.add(k);
  }));

  const rows = [...keys].map(key => {
    const vals = list.map(p => key === "price" ? p.price : (p.specs?.[key] ?? "—"));
    return `
      <tr>
        <th scope="row">${key}</th>
        ${vals.map(v => `<td>${formatCell(key, v)}</td>`).join("")}
      </tr>
    `;
  }).join("");

  // (giữ nguyên phần featureRows 〇/× của bạn)
  const featureRows = FEATURES.map(f=>{
    const vals = list.map(p => !!(p.features && p.features[f.key]));
    return `
      <tr>
        <th scope="row" class="feature">${f.label}</th>
        ${vals.map(v => `<td class="${v?'maru':'batsu'}">${v ? '〇' : '×'}</td>`).join("")}
      </tr>
    `;
  }).join("");

  host.innerHTML = `
    <div class="table-host-inner">
      <table class="compare-table">
        <thead><tr><th scope="col">項目</th>${cols}</tr></thead>
        <tbody>${rows}${featureRows}</tbody>
      </table>
    </div>
  `;
}

function formatCell(key, val){
  if(val === "—") return val;
  if(key === "price") return yen(val);
  return val;
} 
function renderDetails(){
  $("#detailList").innerHTML = PRODUCTS.map(p=>`
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
    </article>
  `).join("");
}
 // Chèn khung chat vào DƯỚI section #details
function injectDetailsTalk(){
  const sec = document.getElementById('details');
  if(!sec) return;
  const existing = document.getElementById('detailsTalk');
  const html = `
    <div id="detailsTalk" class="talk" role="note" aria-label="メッセージ">
      <figure class="speaker">
        <img class="avatar" src="${DETAILS_TALK.img}" alt="${DETAILS_TALK.name}" width="68" height="68" loading="lazy">
        <figcaption class="name">${DETAILS_TALK.name}</figcaption>
      </figure>
      <div class="balloon">
        ${DETAILS_TALK.text}
      </div>
    </div>`;
  if (existing) existing.outerHTML = html; else sec.insertAdjacentHTML('beforeend', html);
}

function renderHowto(){
  const HOWTO = [
    { title:"用途で選ぶ", text:"結婚・出産・香典返しなど、贈り先の用途に合わせて価格帯と世界観を選びましょう。" },
    { title:"内容で選ぶ", text:"総合版 / グルメ / 体験型 / 和風タイプなど、好みに合うカテゴリを重視。" },
    { title:"相手の負担を減らす", text:"個別送料無料・申込しやすさ・有効期限などの運用面もチェック。" },
  ];
  $("#howtoHost").innerHTML = HOWTO.map(x=>`
    <section class="tip">
      <h3>${x.title}</h3>
      <p>${x.text}</p>
    </section>
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

/* ========= Init ========= */
window.addEventListener("DOMContentLoaded", ()=>{
  renderTOC();
  renderRanking();
  renderCompare();
  renderDetails();
  injectDetailsTalk(); // Chèn khung chat
  renderHowto();
  renderCaution();
  renderSummary();

  // Smooth-scroll cho anchor nội bộ
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", e=>{
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:"smooth", block:"start"}); }
    });
  });
});
