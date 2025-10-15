/* =========================================================
   1) DATA: RANKING / FEATURES / PRODUCTS
   ========================================================= */
const RANKING = [
  { id: 1, name: "マリープレシャスカタログギフト", brand: "シャディ", price:" 2,678円～60,264(税込)", image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 2, name: "テイク・ユア・チョイス", brand: "リンベル", price:"3,190円～56,650円(税込)", image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 3, name: "JTB たびもの撰華", brand: "ハーモニック", price: "3,190円～55,990円(税込)", image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 4, name: "EXCELLENTCHOICE", brand: "厳選", price: "3,190円～55,990円(税込)", image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 5, name: "バリューチョイス", brand: "アクティビティ", price: "9,900円～34,430円(税込)", image: "image/raking/cg-precious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
];

const FEATURES = [
  { key: "冊子タイプ", label: "冊子タイプ" },
  { key: "カードタイプ", label: "カードタイプ" },
  { key: "電子カタログあり", label: "電子カタログあり" },
  { key: "紙袋対応", label: "紙袋対応" },
  { key: "熨斗紙対応", label: "熨斗紙対応" },
  { key: "ラッピング対応", label: "ラッピング対応" },
];

/* ========== 25 sản phẩm: chỉ đổi id / rank / name / price ========== */
const PRODUCTS = [
  {
    "id": 1,
    "rank": 1,
    "name": "マリープレシャスカタログギフト",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/html/page78.html",
    "price": "2,678円～60,264円(税込)",
    "specs": {
      "コース数": "16",
      "掲載点数": "約1,780点",
      "取扱ジャンル": "インテリア・体験・ブランド・家電",
      "有効期限": "お受け取りになられてから４ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・香典返し"
  },
  {
    "id": 2,
    "rank": 2,
    "name": "テイク・ユア・チョイス",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2383/",
    "price": "3,190円～56,650円(税込)",
    "specs": {
      "コース数": "16",
      "掲載点数": "約1,280点",
      "取扱ジャンル": "主にグルメ・食品",
      "有効期限": "お受け取りになられてから４ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "内祝い・法人"
  },
  {
    "id": 3,
    "rank": 3,
    "name": "プレゼンテージ",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct543/",
    "price": "3,190円～55,990円(税込)",
    "specs": {
      "コース数": "15",
      "掲載点数": "約1,110点",
      "取扱ジャンル": "体験・スイーツ・ファッション・グルメ",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "内祝い・結婚・出産・香典返し"
  },
  {
    "id": 4,
    "rank": 4,
    "name": "e-book",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2899/",
    "price": "3,190円～55,990円(税込)",
    "specs": {
      "コース数": "24",
      "掲載点数": "約1,280点",
      "取扱ジャンル": "インテリア・体験・ブランド・家電・グルメ",
      "有効期限": "お受け取りになられてから４ヶ月"
    },
    "features": {
      "冊子タイプ": false,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚内祝い、出産内祝い、香典返し"
  },
  {
    "id": 5,
    "rank": 5,
    "name": "EXCELLENTCHOICE",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/html/page79.html",
    "price": "3,097円～66,594円(税込)",
    "specs": {
      "コース数": "15",
      "掲載点数": "約100点",
      "取扱ジャンル": "ブランド・グルメ・体験・メイドインジャパン",
      "有効期限": "発送日より180日"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・香典返し"
  },
  {
    "id": 6,
    "rank": 6,
    "name": "バリューチョイス",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2536/",
    "price": "9,900円～34,430円(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約550点",
      "取扱ジャンル": "グルメ・雑貨",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚祝い・引き出物・成人祝い・長寿祝い"
  },
  {
    "id": 7,
    "rank": 3,
    "name": "JTB たびもの撰華",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2554/",
    "price": "3,960円～331,980円(税込)",
    "specs": {
      "コース数": "10",
      "掲載点数": "約150点",
      "取扱ジャンル": "宿・温泉・高級食材・グルメセット・スイーツ",
      "有効期限": "１年間"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "社内行事・長寿・還暦祝い"
  },
  {
    "id": 8,
    "rank": 8,
    "name": "EXETIME",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2563/",
    "price": "6,160円～55,660円(税込)",
    "specs": {
      "コース数": "7",
      "掲載点数": "約795点",
      "取扱ジャンル": "JTB厳選・旅館温泉・ホテル・グルメ",
      "有効期限": "約180日"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "夫婦・カップル・友人・2名プラン"
  },
  {
    "id": 9,
    "rank": 9,
    "name": "アフターヌーンティーチケット",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2841/",
    "price": "13,585円～18,535円(税込)",
    "specs": {
      "コース数": "2",
      "掲載点数": "17",
      "取扱ジャンル": "アフタヌーンティー",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": false,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "夫婦・カップル・友人・2名プラン"
  },
  {
    "id": 10,
    "rank": 10,
    "name": "Relax Gift",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2844/",
    "price": "11,880円(税込)",
    "specs": {
      "コース数": "1",
      "掲載点数": "90体験",
      "取扱ジャンル": "ボディケアやヘッドスパ・ヨガやフラワーレッスン",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": false,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "友人・祝い"
  },
  {
    "id": 11,
    "rank": 11,
    "name": "オーダーウォッチチケット",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2842/",
    "price": "35,255～69,355(税込)",
    "specs": {
      "コース数": "2",
      "掲載点数": "1体験",
      "取扱ジャンル": "オーダーメイド腕時計",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": false,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "長寿・還暦祝い・成人祝い"
  },
  {
    "id": 12,
    "rank": 12,
    "name": "Memorica メモリカ",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct3048/",
    "price": "11,660～110,660(税込)",
    "specs": {
      "コース数": "7",
      "掲載点数": "約7000点",
      "取扱ジャンル": "グルメ・雑貨・インテリア・家電",
      "有効期限": "180日間"
    },
    "features": {
      "冊子タイプ": false,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "景品・福利厚生・引出物"
  },
  {
    "id": 13,
    "rank": 13,
    "name": "レディスコレクション",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2493/",
    "price": "3,630～6,380(税込)",
    "specs": {
      "コース数": "5",
      "掲載点数": "約572点",
      "取扱ジャンル": "コスメやグルメ、アパレル、ファッション、雑貨",
      "有効期限": "なし"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "女性専用・友人・カップル"
  },
  {
    "id": 14,
    "rank": 14,
    "name": "メンズコレクション",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2494/",
    "price": "3,630～6,380(税込)",
    "specs": {
      "コース数": "5",
      "掲載点数": "約588点",
      "取扱ジャンル": "コスメやグルメ、アパレル、ファッション、雑貨",
      "有効期限": "なし"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "男性専用・友人・カップル"
  },
  {
    "id": 15,
    "rank": 15,
    "name": "ア・ラ・グルメ",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct1586/",
    "price": "4,400～56,100(税込)",
    "specs": {
      "コース数": "11",
      "掲載点数": "約130点",
      "取扱ジャンル": "有名ブランドグルメ",
      "有効期限": "お受け取りになられてから４ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・長寿・還暦祝い"
  },
  {
    "id": 16,
    "rank": 16,
    "name": "美味百撰",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2490/",
    "price": "3,300～33,000(税込)",
    "specs": {
      "コース数": "8",
      "掲載点数": "約100点",
      "取扱ジャンル": "有名ブランドグルメ",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・長寿・還暦祝い"
  },
  {
    "id": 17,
    "rank": 17,
    "name": "北海道七つ星",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2488/",
    "price": "４,400～11,000(税込)",
    "specs": {
      "コース数": "3",
      "掲載点数": "約50点",
      "取扱ジャンル": "北海道ブランドグルメ",
      "有効期限": "なし"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・長寿・還暦祝い"
  },
  {
    "id": 18,
    "rank": 18,
    "name": "47CLUB",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct1582/",
    "price": "3,850～33,000(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約120点",
      "取扱ジャンル": "47都道府県グルメ",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・長寿・還暦祝い"
  },
  {
    "id": 19,
    "rank": 19,
    "name": "和牛苑",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2780/",
    "price": "6,600～34,100(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約40点",
      "取扱ジャンル": "和牛専門グルメ",
      "有効期限": "お受け取りになられた日から180日"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・長寿・還暦祝い・引出物"
  },
  {
    "id": 20,
    "rank": 20,
    "name": "彩璃",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2483/",
    "price": "4,290～22,990(税込)",
    "specs": {
      "コース数": "7",
      "掲載点数": "約150点",
      "取扱ジャンル": "有名店・産地直送グルメ",
      "有効期限": "お受け取りになられた日から180日"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚・出産・内祝い・長寿・還暦祝い・引出物"
  },
  {
    "id": 21,
    "rank": 21,
    "name": "ILLUMS",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2936/",
    "price": "4,290～34,320(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約140点",
      "取扱ジャンル": "家具・照明・雑貨・グルメ",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "結婚内祝い、出産内祝い、香典返し"
  },
  {
    "id": 22,
    "rank": 22,
    "name": "BEAMS",
    "image": "image/raking/cg-precious.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct3005/",
    "price": "4,290円〜11,990円(税込)",
    "specs": {
      "コース数": "3",
      "掲載点数": "約75点",
      "取扱ジャンル": "BEAMSブランド・グルメ・雑貨・ファッション",
      "有効期限": "受け取りから4ヶ月"
    },
    "features": {
      "冊子タイプ": true,
      "カードタイプ": true,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [
      "個別送料無料",
      "人気"
    ],
    "intro": "誕生日・結婚・新築"
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
   ============================================================================ */
const $  = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const yen = n => new Intl.NumberFormat("ja-JP",{ style:"currency", currency:"JPY", maximumFractionDigits:0 }).format(n);

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
   2) TOC (MỤC LỤC)
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
   3) RANKING
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
      
      <div class="price">${r.price}</div>
    `;
    return link
      ? `<a class="rank-card" href="${link}" title="${r.name} を開く">${inner}</a>`
      : `<article class="rank-card" aria-disabled="true">${inner}</article>`;
  }).join("");
}


/* ============================================================================
   4) COMPARE
   ============================================================================ */
function renderCompare(){
  const list = PRODUCTS;
  const host = document.getElementById("compareHost");
  if (!host) return;

  // 1) THEAD: ảnh + tên/link
  const cols = list.map(p => `
    <th scope="col">
      <div class="col-head vertical">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${ p.url
          ? `<a class="col-name" href="${p.url}" title="${p.name}">${p.name}</a>`
          : `<span class="col-name">${p.name}</span>` }
      </div>
    </th>`).join("");

  // Ẩn một số specs để bảng gọn
  const HIDE_SPECS = new Set(["有効期限","掲載点数" ,  "取扱ジャンル" ,"おすすめのシーン"]);

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
   5) CAROUSEL 詳細 – #detailCarousel
   - Track ngang + "peek" ảnh kế ở mép phải
   - Tất cả truy cập DOM có kiểm tra null → không văng lỗi
   ============================================================================ */
function initDetailCarousel(list = PRODUCTS){
  const wrap = $("#detailCarousel");
  if(!wrap || !list?.length) return;

  const viewport = $(".dc-viewport", wrap);
  const track    = $("#dcTrack", wrap);
  const dotsEl   = $("#dcDots", wrap);
  const nextBtn  = $(".dc-nav.next", wrap);

  // Không có HTML cần thiết thì bỏ qua để tránh lỗi
  if (!viewport || !track) return;

  // Ẩn figure cũ nếu còn
  const legacy = wrap.querySelector("figure.dc-stage");
  if (legacy) legacy.style.display = "none";

  // Vẽ toàn bộ slide vào track
  const specLines = (p) => {
    const lines = [];
    lines.push(`<li>価格帯：${fmtPrice(p.price)}（目安）</li>`);
    if(p.specs?.コース数)         lines.push(`<li>コース数：${p.specs.コース数}</li>`);
    if(p.specs?.掲載点数)         lines.push(`<li>掲載点数：${p.specs.掲載点数}点</li>`);
    if(p.specs?.取扱ジャンル)     lines.push(`<li>取扱ジャンル：${p.specs.取扱ジャンル}。</li>`);
    if(p.specs?.有効期限)         lines.push(`<li>有効期限：${p.specs.有効期限}</li>`);
    if(p.specs?.おすすめのシーン)  lines.push(`<li>おすすめのシーン：${p.specs.おすすめのシーン}。</li>`);
    return lines.join("");
  };

  track.innerHTML = list.map(p => `
    <figure class="dc-stage">
      ${p.rank != null ? `<span class="dc-rank">${p.rank}位</span>` : ""}
      <h3 class="dc-name">${p.name || ""}</h3>
      <p class="dc-intro">${p.intro || ""}</p>
      <img class="dc-img" src="${p.image || ""}" alt="${p.name || ""}" loading="lazy">
      <div class="tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <ul class="bullet dc-specs">${specLines(p)}</ul>
      <aside class="dc-meta">
        <div class="dc-pricebox">
          ${p.url ? `<a class="dc-btn primary" href="${p.url}" rel="noopener">公式ページへ</a>` : ""}
           <div class="talk" role="note" aria-label="メッセージ">
        <figure class="speaker">
          <img class="avatar" src="${DETAILS_TALK.img}" alt="${DETAILS_TALK.name}" width="48" height="48" loading="lazy">
          <figcaption class="name">${DETAILS_TALK.name}</figcaption>
        </figure>
        <div class="balloon">${DETAILS_TALK.text}</div>
      </div>
        </div>
      </aside>
    </figure>
  `).join("");

  let cur = 0, step = 0; // step = card width + gap

  function measure(){
    const card = track.querySelector(".dc-stage");
    if(!card) return;
    const rect = card.getBoundingClientRect();
    const gap  = parseFloat(getComputedStyle(track).gap) || 0;
    step = rect.width + gap;
    track.style.transform = `translateX(${-cur * step}px)`;
  }

  function makePagerModel(total, current){
    const pages = [];
    const cur1 = current + 1;
    const keep = new Set([1,2,total-1,total, cur1-2,cur1-1,cur1,cur1+1,cur1+2]
      .filter(n => n>=1 && n<=total));
    pages.push('prev');
    for(let i=1;i<=total;i++){
      if(keep.has(i)) pages.push(i);
      else if(pages[pages.length-1] !== '…') pages.push('…');
    }
    pages.push('next'); return pages;
  }

  function renderPager(){
    if (!dotsEl) return;
    const items = makePagerModel(list.length, cur);
    dotsEl.innerHTML = items.map(item => {
      if(item === 'prev') return `<button class="pg-btn" data-act="prev">前へ</button>`;
      if(item === 'next') return `<button class="pg-btn" data-act="next">次へ</button>`;
      if(item === '…')   return `<span class="pg-ellipsis">…</span>`;
      const isCur = (item === cur + 1) ? 'is-current' : '';
      return `<button class="pg-num ${isCur}" data-page="${item}">${item}</button>`;
    }).join('');
    dotsEl.querySelector('[data-act="prev"]')?.addEventListener('click', () => go(cur - 1));
    dotsEl.querySelector('[data-act="next"]')?.addEventListener('click', () => go(cur + 1));
    dotsEl.querySelectorAll('.pg-num').forEach(btn => {
      btn.addEventListener('click', () => go(parseInt(btn.dataset.page, 10) - 1));
    });
  }

  function go(i){
    cur = (i + list.length) % list.length;
    track.style.transform = `translateX(${-cur * step}px)`;
    renderPager();
    positionCarouselArrows(); // căn lại nếu CSS thay đổi
  }

  nextBtn?.addEventListener('click', () => go(cur + 1));
  viewport?.addEventListener('keydown', e => { if(e.key === 'ArrowRight') go(cur + 1); });

  // init + responsive
  measure(); renderPager();
  window.addEventListener('resize', measure);
  window.addEventListener('orientationchange', measure);
}


/* ============================================================================
   5.1) Căn mũi tên (an toàn, không ném lỗi nếu thiếu phần tử)
   ============================================================================ */
function positionCarouselArrows(){
  const wrap = document.getElementById("detailCarousel");
  if(!wrap) return;
  const viewport = wrap.querySelector(".dc-viewport");
  const next = wrap.querySelector(".dc-nav.next");
  const prev = wrap.querySelector(".dc-nav.prev");

  if (!viewport) return;
  const vpRect = viewport.getBoundingClientRect();

  // Đặt mũi tên theo giữa chiều cao viewport
  const midY = vpRect.height / 2;
  if (next) next.style.top = `${midY}px`;
  if (prev) prev.style.top = `${midY}px`;
  // Giữ bên phải/trái bằng CSS hiện có; chỉ cần đảm bảo không crash.
}




/* ============================================================================
   7) HOW TO / CAUTION / SUMMARY
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
   8) INIT
   ============================================================================ */
window.addEventListener("DOMContentLoaded", () => {
  renderTOC();
  renderRanking();
  renderCompare();
  enableGrabScroll(document.querySelector('#compareHost'));

  initDetailCarousel(PRODUCTS);
 
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

  // Quan sát viewport để căn mũi tên chắc chắn
  const vp = document.querySelector('#detailCarousel .dc-viewport');
  if (vp && 'ResizeObserver' in window){
    const ro = new ResizeObserver(positionCarouselArrows);
    ro.observe(vp);
  }

  // gọi lần đầu
  positionCarouselArrows();
});
/* ============================================================================
   HẾT
   ============================================================================ */
