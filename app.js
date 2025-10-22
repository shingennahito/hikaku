/* =========================================================
   0) DỮ LIỆU HIỂN THỊ (DATA): RANKING / FEATURES / PRODUCTS
   - Chỉ chứa data dùng để render UI (không có logic)
   ========================================================= */
const RANKING = [
  { id: 1, name: "マリープレシャスカタログギフト", brand: "シャディ", price:" 2,678円～60,264(税込)", image: "image/raking/vprecious.jpg", url: "https://www.giftmarry.jp/html/page78.html" },
  { id: 2, name: "テイク・ユア・チョイス", brand: "リンベル", price:"3,190円～56,650円(税込)", image: "image/raking/takeyourchoice.jpg", url: "https://www.giftmarry.jp/shopbrand/ct2383/" },
  { id: 3, name: "JTB たびもの撰華", brand: "ハーモニック", price: "3,960円～331,980円(税込)", image: "image/raking/senka.jpg", url: "https://www.giftmarry.jp/shopbrand/ct2554/" },
  { id: 4, name: "EXCELLEN TCHOICE", brand: "厳選", price: "3,097円～66,594円(税込)", image: "image/raking/excellent.jpg", url: "https://www.giftmarry.jp/html/page79.html" },
  { id: 5, name: "バリューチョイス", brand: "アクティビティ", price: "9,900円～34,430円(税込)", image: "image/raking/valueghoice.jpg", url: "https://www.giftmarry.jp/shopbrand/ct2536/" },
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
    "image": "image/raking/vprecious.jpg",
    "url": "https://www.giftmarry.jp/html/page78.html",
    "price": "2,678円～60,264円(税込)",
    "specs": {
     "コース数": "16",
      "掲載点数": "約1,780点",
      "取扱ジャンル" : "グルメ・生活雑貨・ファッション・体験ギフト",
      "おすすめのシーン":"結婚・出産・内祝い・香典返し" , 
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
    "tags": [],
  
    "intro":  "贈る場面を選ばない上質感あふれるプレミアムギフト",
    "内容": "『マリープレシャスカタログギフト』は、上品さとボリュームを両立した王道の<span class=\"h1 u-strong\">プレミアムカタログギフト</span>です。カタログの魅力は、<span class=\"h1 u-strong\">全16コースの幅広いラインナップ</span>です。価格帯ごとに選べる商品が異なり、グルメ・生活雑貨・ファッション・体験ギフトまで、ジャンルを問わず豊富に掲載されています。一点注意したいのは、<span class=\"h1 u-strong\">コースによって掲載点数やジャンルの幅が異なること</span>です。購入前に「贈る相手の年代・性別・趣味」に合わせてコースを選ぶと、より喜ばれやすいでしょう。",
  },
   {
    "id": 2,
    "rank": 2,
    "name": "テイクユアチョイス",
    "image": "image/raking/takeyourchoice.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2383/",
    "price": "3,190円～56,650円(税込)",
    "specs": {
      "コース数": "16",
      "掲載点数": "約1,280点",
       "取扱ジャンル" : "主にグルメ・食品",
      "おすすめのシーン": "内祝い・法人",
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
    "tags": [],
    "intro": "百貨店取扱のブランド、多彩なアイテムが揃う",
    "内容": "「テイク・ユア・チョイス」は、創業以来の定番シリーズで幅広い年代やシーンに対応できる万能さが魅力です。日常で使える実用的なアイテムからちょっと贅沢なグルメや時間を楽しめるギフトまで、どんな相手にも喜ばれる内容です。また、<span class=\"h1 u-strong\">百貨店でも取り扱いがある信頼のブランド掲載されている商品は定価がカタログ金額より下回らない高品質なものだけ</span>が揃っています。そのため、贈り物としての安心感や特別感も高く多くの方に選ばれ続けています。"
  },
  {
    "id": 3,
    "rank": 3,
    "name": "プレゼンテージ",
    "image": "image/raking/presentage.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct543/",
    "price": "3,190円～55,990円(税込)",
    "specs": {
      "コース数": "15",
      "掲載点数": "約1,110点",
      "取扱ジャンル" : "体験・スイーツ・ファッション・グルメ",
      "おすすめのシーン": "内祝い・結婚・出産・香典返し",
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
    "tags": [],
    "intro": "贈る人にも贈られる人にもやさしい",
    "内容": "「プレゼンテージ 」シリーズは、使いやすさと見やすさにこだわった親切設計のカタログギフトです。贈る側も選びやすく、受け取る側も迷わず欲しいものを見つけやすい構成</span>になっています。グルメ・ファッション・インテリア雑貨・体験ギフトなど、<span class=\"h1 u-strong\">幅広いジャンルをバランスよく掲載されています</span>。総じて、「見やすさ」「使いやすさ」「贈りやすさ」を兼ね備えた万能タイプ。はじめてカタログギフトを選ぶ方にもおすすめの一冊です。"
  },
  {
    "id": 4,
    "rank": 4,
    "name": "e-book",
    "image": "image/raking/e-book.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2899/",
    "price": "3,190円～55,990円(税込)",
    "specs": {
      "コース数": "24",
      "掲載点数": "約1,280点",
      "取扱ジャンル" : "インテリア・体験・ブランド・家電・グルメ",
      "おすすめのシーン": "結婚内祝い、出産内祝い、香典返し",
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
    "tags": [],
    "intro": "スマートに贈れるカード型の新定番",
    "内容": "「e-book」 は、カードを贈ってWEBで好きな品を選ぶタイプのカタログギフトです。冊子を送る手間がなく、<span class=\"h1 u-strong\">スマートに贈れるのが魅力</span>。カードタイプながらグルメ・雑貨・体験・ブランドアイテム</span>などジャンルも幅広くカバーしています。<span class=\"h1 u-strong\">カード自体は薄型・軽量なので、かさばらずビジネスギフトにも適しています</span>。さらに、WEB上で24時間いつでも申し込み可能で、忙しい受取り手にも使いやすい設計。冊子タイプと同等の商品構成を持ちつつ、手軽さを兼ね備えた一冊です。"
  },
  {
    "id": 5,
    "rank":5,
    "name": "EXCELLENTCHOICE",
    "image": "image/raking/excellent.jpg",
    "url": "https://www.giftmarry.jp/html/page79.html",
    "price": "3,097円～66,594円(税込)",
    "specs": {
      "コース数": "15",
      "掲載点数": "約100点",
      "取扱ジャンル" : "ブランド・グルメ・体験・メイドインジャパン",
      "おすすめのシーン": "結婚・出産・内祝い・香典返し",
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
    "tags": [],
    "intro": "上質な個性を演出するギフト",
    "内容": "「EXCELLENTCHOICE」 は、他にはない洗練されたセレクトを重視した特別感あるカタログギフトです。<span class=\"h1 u-strong\">“ありきたりじゃない贈り物”を探している方</span>に、しっくりと馴染む一冊。このシリーズの魅力は、<span class=\"h1 u-strong\">厳選ブランド品・デザイン雑貨・こだわりグルメ・体験ギフト</span>など、上質な商品を中心に構成されている点。センスや個性を重視</span>する場面で頼れるギフトです。"
  },
  {
    "id": 6,
    "rank": 6,
    "name": "バリューチョイス",
    "image": "image/raking/valueghoice.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2536/",
    "price": "9,900円～34,430円(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約550点",
      "取扱ジャンル" : "グルメ・雑貨",
      "おすすめのシーン": "結婚祝い・引き出物・成人祝い・長寿祝い",
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
    "tags": [],
    "intro": "価格と品質のバランスが魅力",
    "内容": "「Value Choice（バリューチョイス）」 は、コストパフォーマンスに優れたカタログギフトシリーズで 贈る相手を選ばず、幅広いシーンで使いやすい設計が魅力です。このシリーズの強みは、<span class=\"h1 u-strong\">価格帯に見合う適度な品揃え。</span>一方で、コースを上げないと<span class=\"h1 u-strong\">選べる商品のグレード・数に限りが出やすい</span>のが注意です。「高すぎないけれど」しっかりとした印象を与えたい場面で選びやすく、迷った時の無難な選択肢としても頼れる一冊です。" },
  {
    "id": 7,
    "rank": 7,
    "name": "JTB たびもの撰華",
    "image": "image/raking/senka.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2554/",
    "price": "3,960円～331,980円(税込)",
    "specs": {
      "コース数": "10",
      "掲載点数": "約150点",
      "取扱ジャンル" : "宿・温泉・高級食材・グルメセット・スイーツ",
      "おすすめのシーン": "社内行事・長寿・還暦祝い",
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
    "tags": [],
    "intro": "思い出を贈る旅ギフトの決定版",
    "内容": "「たびもの撰華」は、モノではなく<span class=\"h1 u-strong\">体験を贈る</span>ことを主軸にしたカタログギフトです。掲載ジャンルには、<span class=\"h1 u-strong\">宿泊プラン・日帰り温泉・レストラン利用券・観光体験</span>などが含まれています。体験型ゆえに<span class=\"h1 u-strong\">有効期限や利用可能エリア</span>といった条件もチェックすべきポイント。総じて、「モノでは伝えきれない思い出を贈りたい人」にぴったり。<span class=\"h1 u-strong\">行き先を自分で選べる自由度</span>と、<span class=\"h1 u-strong\">JTBという旅行ブランドの信頼感</span>が魅力の一冊です。"
  },
  {
    "id": 8,
    "rank": 8,
    "name": "EXETIME",
    "image": "image/raking/exetime.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2563/",
    "price": "6,160円～55,660円(税込)",
    "specs": {
      "コース数": "7",
      "掲載点数": "約795点",
      "取扱ジャンル" : "JTB厳選・旅館温泉・ホテル・グルメ",
      "おすすめのシーン": "夫婦・カップル・友人・2名プラン",
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
    "tags": [],
    "intro": "気軽に贈れる思い出づくりのきっかけ",
    "内容": "「EXETIME（エグゼタイム）」は、モノではなく「思い出」を贈ることをテーマにした旅行カタログギフトです。全国約27,000件以上の温泉宿やホテル、観光体験などから<span class=\"h1 u-strong\">贈られた方が自由に旅先を選べるのが魅力的な一冊</span>になります。有効期限付きですが掲載される施設や体験は厳選されており、<span class=\"h1 u-strong\">質の高い宿泊や特別な体験が揃っています</span>。「旅行が好きだけど忙しくてなかなか予定が立てられない」という相手にも安心して贈れます。"  },
  {
    "id": 9,
    "rank": 9,
    "name": "アフタヌーンティーチケット",
    "image": "image/raking/afternoontea.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2841/",
    "price": "13,585円～18,535円(税込)",
    "specs": {
      "コース数": "2",
      "掲載点数": "17",
      "取扱ジャンル" : "アフタヌーンティー",
      "おすすめのシーン": "夫婦・カップル・友人・2名プラン",
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
    "tags": [],
    "intro": "紅茶とスイーツで彩る特別なアフタヌーンティー",
    "内容": "「アフタヌーンティーチケット」は、有名ホテルや人気カフェで、優雅な<span class=\"h1 u-strong\">アフタヌーンティーを楽しめるペアチケット</span>です。紅茶やスイーツをゆっくり味わいながら、非日常を感じる癒しの時間をプレゼントできます。<span class=\"h1 u-strong\">対象エリアは東京・横浜・京都・大阪・名古屋・福岡など主要都市を中心</span>に、ラグジュアリーホテルのラウンジから人気スイーツカフェまで幅広くラインナップされています。「 特別な日を少し贅沢に演出したい」という方にぴったりの体験型ギフトです。 "
  },
  {
    "id": 10,
    "rank": 10,
    "name": "Relax Gift",
    "image": "image/raking/reracksgift.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2844/",
    "price": "11,880円(税込)",
    "specs": {
      "コース数": "1",
      "掲載点数": "90体験",
      "取扱ジャンル" : "ボディケアやヘッドスパ・ヨガやフラワーレッスン",
      "おすすめのシーン": "友人・祝い",
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
    "tags": [],
    "intro": "“リラックス”をテーマにした特別なひととき",
    "内容": "「Relax Gift」は、「心と体を休ませたい人」へリラクゼーション・スパ・ヨガ・クラフト体験などを含むギフトです。全国47都道府県で利用できる <span class=\"h1 u-strong\">1,012の体験コースと21種類のグッズ</span> が掲載されており、リラックス体験にも、家でゆったり過ごす選択肢にも対応しています。ボディケア・ヘッドスパ・ヨガ・フラワーレッスン・陶芸など、<span class=\"h1 u-strong\">心をゆるめる体験”にフォーカス</span>しており、贈られた人が自分用に時間を使える特別なギフトになっています。 "
  },
  {
    "id": 11,
    "rank": 11,
    "name": "オーダーウォッチチケット",
    "image": "image/raking/owchplus.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2842/",
    "price": "35,255～69,355(税込)",
    "specs": {
      "コース数": "2",
      "掲載点数": "1体験",
      "取扱ジャンル" : "オーダーメイド腕時計",
      "おすすめのシーン": "長寿・還暦祝い・成人祝い",
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
    "tags": [],
    "intro": "世界にひとつの時計をつくる",
    "内容": "「オーダーウォッチチケット」は、腕時計をセミオーダーできる体験型カタログギフト。<span class=\"h1 u-strong\">全国主要都市（札幌・東京・大阪・名古屋・福岡など）で利用可能</span>で、男女問わず人気の高いギフトです。一方で、<span class=\"h1 u-strong\">金額を超えた場合はお客様の負担になる</span>ので注意が必要です。「ただの時計ではなく、自分で選ぶ楽しさを贈る」そんな特別感のあるギフトを探している方におすすめの一冊です。"
  },
  {
    "id": 12,
    "rank": 12,
    "name": "Memorica メモリカ",
    "image": "image/raking/memorica.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct3048/",
    "price": "11,660～110,660(税込)",
    "specs": {
      "コース数": "7",
      "掲載点数": "約7000点",
      "取扱ジャンル" : "グルメ・雑貨・インテリア・家電",
      "おすすめのシーン": "景品・福利厚生・引出物",
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
    "tags": [],
    "intro": "カタログより自由！新しい形のカタログ",
    "内容": "「MemoriCA（メモリカ）」は、<span class=\"h1 u-strong\">ポイントをチャージして贈る</span>カードタイプのギフトで専用サイトで好きな商品を自由に選ぶことができます。グルメ・ファッション・家電・体験ギフトなど、<span class=\"h1 u-strong\">7,000点以上の豊富なラインナップ</span>から選択可能。さらに、複数の商品に分けて使うこともできるため「自分に本当に必要なもの」を選べる自由度の高さが魅力です。"
  },
  {
    "id": 13,
    "rank": 13,
    "name": "レディスコレクション",
    "image": "image/raking/ladiescollection.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2493/",
    "price": "3,630～6,380(税込)",
    "specs": {
      "コース数": "5",
      "掲載点数": "約572点",
      "取扱ジャンル" : "コスメやグルメ、アパレル、ファッション、雑貨",
      "おすすめのシーン": "女性専用・友人・カップル",
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
    "tags": [],
    "intro": "女性向けのアイテムが満載",
    "内容": "「レディスコレクション」は、国内外の有名ブランドが勢揃いしたカタログギフトです。このカタログの特徴は<span class=\"h1 u-strong\">女性向けのアイテムが多く掲載されている</span>ことです。<span class=\"h1 u-strong\">結婚内祝いや母の日、誕生日</span>などイベントに贈ることもおすすめです。冊子タイプとカードタイプどちらも選べるので贈る相手に合わせて選ぶのも魅力的ですが種類によってはラッピング対応可かを確認して購入してください。"
  },
  {
    "id": 14,
    "rank": 14,
    "name": "メンズコレクション",
    "image": "image/raking/menscollection.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2494/",
    "price": "3,630～6,380(税込)",
    "specs": {
      "コース数": "5",
      "掲載点数": "約588点",
      "取扱ジャンル" : "コスメやグルメ、アパレル、ファッション、雑貨",
      "おすすめのシーン": "男性専用・友人・カップル",
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
    "tags": [],
    "intro": "カタログより自由！新しい形のカタログ",
    "内容": "「メンズコレクション」は、国内外の有名ブランドが勢揃いしたカタログギフトです。このカタログの特徴は<span class=\"h1 u-strong\">男性向けのアイテムが多く掲載されていること</span>です。就職・昇給祝いや父の日、誕生日などイベントに贈ることもおすすめです。冊子タイプとカードタイプどちらも選べるので贈る相手に合わせて選ぶのも魅力的ですが種類によってはラッピング対応可かを確認して購入してください。"
  },
  {
    "id": 15,
    "rank": 15,
    "name": "ア・ラ・グルメ",
    "image": "image/raking/alagourmet.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct1586/",
    "price": "4,400～56,100(税込)",
    "specs": {
      "コース数": "11",
      "掲載点数": "約130点",
      "取扱ジャンル" : "有名ブランドグルメ",
      "おすすめのシーン": "結婚・出産・内祝い・長寿・還暦祝い",
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
    "tags": [],
    "intro": "全国の名店グルメが揃う豊富なラインナップ",
    "内容": "「ア・ラ・グルメ」 は、全国の名店や老舗のグルメを贈れるカタログギフトです。<span class=\"h1 u-strong\">和洋スイーツ、調味料、飲料、加工食品など豊富なラインナップ</span>の中から、自分の好みに合わせて商品を選べます。特筆すべきは幅広い価格帯で、贈る相手や用途に合わせてコースを選べる点。有効期限や商品点数の違いには注意が必要ですが、全国の名店グルメを自由に選べるため特別感のある贈り物としておすすめ。<span class=\"h1 u-strong\">グルメ好きの方に喜ばれる</span>カタログギフトです。"
  },
  {
    "id": 16,
    "rank": 16,
    "name": "美味百撰",
    "image": "image/raking/bimi.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2490/",
    "price": "3,300～33,000(税込)",
    "specs": {
      "コース数": "8",
      "掲載点数": "約100点",
      "取扱ジャンル" : "有名ブランドグルメ",
      "おすすめのシーン": "結婚・出産・内祝い・長寿・還暦祝い",
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
    "tags": [],
    "intro": "職人のこだわりを味わえる贈りもの",
    "内容": "「美味百撰」 は、全国の名店や老舗の厳選グルメを贈れるカタログギフトです。特筆すべきは、品質にこだわった100の美味を厳選掲載している点で生産者や職人のこだわりの味わいを、相手の好みに合わせて贈ることができます。価格帯は<span class=\"h1 u-strong\">3.300円〜33,000円（税込・システム料込）</span>と幅広く、贈る相手や用途に応じて最適なコースを選べるのも魅力です。全国の名店グルメを自由に選べるため、特別感のある贈り物として最適です。"
  },
  {
    "id": 17,
    "rank": 17,
    "name": "北海道七つ星",
    "image": "image/raking/hkd.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2488/",
    "price": "４,400～11,000(税込)",
    "specs": {
      "コース数": "3",
      "掲載点数": "約50点",
      "取扱ジャンル" : "北海道ブランドグルメ",
      "おすすめのシーン": "結婚・出産・内祝い・長寿・還暦祝い",
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
    "tags": [],
    "intro": "北海道のみを集めた味覚セレクション",
    "内容": "「北海道 七つ星」 は、<span class=\"h1 u-strong\">北海道の特産品を贈れる</span>カタログギフトです。海鮮、肉、野菜、スイーツ、加工品など、豊富なラインナップの中から自分の好みに合わせて商品を選べます。<span class=\"h1 u-strong\">北海道の名産・人気商品を厳選しているの</span>がこのカタログの特徴です。相手の好みがわからなくても、喜ばれる一品が必ず見つかります。北海道の美味しい品々を自由に選べるため特別感のある贈り物として喜ばれるでしょう。"
  },
  {
    "id": 18,
    "rank": 18,
    "name": "47CLUB",
    "image": "image/raking/47club.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct1582/",
    "price": "3,850～33,000(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約120点",
      "取扱ジャンル" : "47都道府県グルメ",
      "おすすめのシーン": "結婚・出産・内祝い・長寿・還暦祝い",
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
    "tags": [],
    "intro": "全国47都道府県の逸品を贈れる",
    "内容": "「47CLUB」 は、全国47都道府県の特産品や名産品を贈れるカタログギフトです。<span class=\"h1 u-strong\">全国各地の地元新聞社が厳選した逸品</span>を集めており、まるで日本を旅するように、<span class=\"h1 u-strong\">地域ごとの魅力を楽しむことができます</span>。価格帯も複数あり、贈る相手や用途に応じて最適なコースを選べるのも魅力です。地域の美味しい品々を楽しんでほしい方におすすめのカタログギフトです。"
  },
  {
    "id": 19,
    "rank": 19,
    "name": "和牛苑",
    "image": "image/raking/waen.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2780/",
    "price": "6,600～34,100(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約40点",
      "取扱ジャンル" : "和牛専門グルメ",
      "おすすめのシーン": "結婚・出産・内祝い・長寿・還暦祝い・引出物",
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
    "tags": [],
    "intro": "松阪牛・神戸牛・近江牛も！全国の厳選和牛を贈れる",
    "内容": "「和牛苑」 は、和牛好きの方に贈るのに最適なカタログギフトです。松阪牛、神戸牛、近江牛、米沢牛といった四大和牛や希少和牛など、<span class=\"h1 u-strong\">全国の厳選された和牛の中から自分の好みに合わせて商品を選べます</span>。専用の化粧箱やラッピングサービスも整っており、贈る側の利便性も高いカタログギフトです。全国の厳選和牛を自由に選べるため、特別感のある贈り物として最適。<span class=\"h1 u-strong\">和牛好きの方に喜ばれる</span>カタログギフトです。"
  },
  {
    "id": 20,
    "rank": 20,
    "name": "彩璃",
    "image": "image/raking/irori.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2483/",
    "price": "4,290～22,990(税込)",
    "specs": {
      "コース数": "7",
      "掲載点数": "約150点",
      "取扱ジャンル" : "有名店・産地直送グルメ",
      "おすすめのシーン": "結婚・出産・内祝い・長寿・還暦祝い・引出物",
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
    "tags": [],
    "intro": "全国の旬と名産を楽しむカタログ",
    "内容": "「彩璃（いろり）」 は、全国の旬の食材や名産品を幅広く集めたグルメカタログギフトです。海の幸・山の幸・名店の味・ブランドセレクションに加え、和洋スイーツや季節限定の特別品まで、豊富なラインナップから自由に選べます。<span class=\"h1 u-strong\">定番の名産品だけでなく、季節ごとの限定商品や珍しい逸品も多数掲載</span>しており相手の好みがわからなくても、「これは嬉しい！」と思える商品が見つかります。ちょっと珍しいものを楽しみたい方におすすめのカタログギフトです。"
  },
  {
    "id": 21,
    "rank": 21,
    "name": "ILLUMS イルムス",
    "image": "image/raking/illums.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct2936/",
    "price": "4,290～34,320(税込)",
    "specs": {
      "コース数": "6",
      "掲載点数": "約140点",
      "取扱ジャンル" : "家具・照明・雑貨・グルメ",
      "おすすめのシーン": "結婚内祝い、出産内祝い、香典返し",
      "有効期限": "6ヶ月"
    },
    "features": {
      "冊子タイプ": false,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [],
    "intro": "上質な北欧ブランドと暮らしの逸品を選べる",
    "内容": "「ILLUMS(イルムス)」は、北欧の洗練されたライフスタイルを提案する<span class=\"h1 u-strong\">珍しいカタログギフト</span>です。このカタログギフトでは、ロイヤル コペンハーゲン、イッタラ、アラビア、ボダム、マリメッコなど、<span class=\"h1 u-strong\">北欧を代表するブランドの製品が多数掲載</span>されています。結婚祝い、出産祝い、内祝い、快気祝いなど、さまざまなお祝いのシーンで活躍すること間違いなしのカタログギフトです。"
  },
  {
    "id": 22,
    "rank": 22,
    "name": "BEAMS ビームズ",
    "image": "image/raking/beams.jpg",
    "url": "https://www.giftmarry.jp/shopbrand/ct3005/",
    "price": "4,290円〜11,990円",
    "specs": {
      "コース数": "3",
      "掲載点数": "約75点",
      "取扱ジャンル" : "フBEAMSブランド・グルメ・雑貨・ファッションァッション・インテリア・キッチン・ビューティー",
      "おすすめのシーン": "誕生日・結婚・新築",
      "有効期限": "受け取りから4ヶ月"
    },
    "features": {
      "冊子タイプ": false,
      "カードタイプ": false,
      "電子カタログあり": true,
      "紙袋対応": true,
      "熨斗紙対応": true,
      "ラッピング対応": true
    },
    "tags": [],
    "intro": "ファッションもインテリアも、BEAMSで選ぶ特別なギフト",
    "内容": "「BEAMS(ビームズ)」は、BEAMSセレクトのアイテムを贈りたい方に最適なカタログギフトです。ファッション、インテリア、キッチン、ビューティー、ヘルスケアなどライフスタイルを豊かにする多彩なアイテムを取り揃えています。<span class=\"h1 u-strong\">BEAMSならではのセンスあふれる商品が多数掲載</span>されています。ギフト選びに迷う方でも喜ばれる、日常をちょっと豊かにするセレクトギフトです。"
  }
];

/* =========================================================
   1) CONSTANTS NỘI DUNG: HOWTO / CAUTIONS / SUMMARY / TALK
   - Chữ tĩnh để render các box “Cách chọn / Lưu ý / Tóm tắt”
   ========================================================= */
const HOWTO = Object.freeze([
  { title:"1️⃣贈るシーンに合わせて選ぶ", text:"出産内祝い・結婚祝い・香典返しなど、用途によってふさわしいデザインや内容が変わります。<p >・お祝いなら → 明るく華やかでセンスあるデザイン</p><p >・弔事なら → 落ち着いた色合い・上品な表紙</p>", "message": "パッケージや表紙の雰囲気も、場に合っているかで印象が変わるよ。" },
  { title:"2️⃣ 贈る相手のタイプを考える", text:"年代・性別・家族構成によって、喜ばれる内容はさまざま。<p >・グルメ好き → 食品・スイーツ中心</p><p >・実用派 → 日用品・キッチン・家電系</p><p >・旅行や体験派 → 体験型カタログ（たびもの撰華）</p>", "message": "何を選んでも喜んでもらえる相手なんて、実はほとんどいません…（笑）。だからこそ、相手の生活スタイルをイメージして選ぶのが大事！"},
  { title:"3️⃣ 価格帯で気持ちの伝わり方を整える", text:"同じお返しでも、立場や関係性によって金額感は変わります。<p >・一般的な内祝い：いただいた金額の半分〜3分の1程度</p><p>・香典返し：半返し（いただいた金額の半分が目安）</p>" , "message": "相手に気を使わせないちょうど良い金額が一番スマートだよ！"},
]);

const CAUTIONS = Object.freeze([
 
  { title:"1️⃣ コースごとの商品点数・内容を確認", text:"同じシリーズでも、価格によって掲載されている商品数やジャンルの幅が異なります。<span class=\"h1 u-strong\">贈る相手にちょうど良いボリューム</span>感を選ぶのがポイント。", },
  { title:"2️⃣ 総額をしっかりチェック", text:"本体価格のほかに、<span class=\"h1 u-strong\">システム料（約880円前後）</span>が含まれている場合があります。予算ギリギリで選ぶと「思っていたより高くなった」ということも。購入前に、<span class=\"h1 u-strong\">総額（税込・送料込み）</span>で確認しましょう。", },
  { title:"3️⃣ 有効期限に注意しよう", text:"体験型カタログ（例：たびもの撰華など）は、<span class=\"h1 u-strong\">有効期限付き（6ヶ月〜1年）</span>のものが多いです。 受け取る人が忙しい場合、期限切れになることもあるので、<span class=\"h1 u-strong\">贈るタイミングや相手の予定に合わせて<\span>選ぶと安心です。" ,},
  { title:"4️⃣ 申し込み方法や配達対応", text:"ハガキ申込みか、Web申込みか、各カタログギフトによって異なります。<span class=\"h1 u-strong\">のし・包装紙・メッセージカード</span>の対応範囲も要確認です。 ",},
  
]);

const SUMMARY = Object.freeze([
  { title:"1️⃣ 相手の年代・性別を考える", text:"若い方や女性には、デザインやトレンド感を重視したカタログ（例：マリープレシャス）が人気。<p >年配の方や男性には、実用性や品質を重視した定番系（例：テイクユアチョイス）が◎。</p>" },
  { title:"2️⃣ “モノ”か“体験”かを選ぶ ", text:"「形に残るものを贈りたい」なら雑貨・グルメ中心のカタログを。<p >「思い出を贈りたい」なら旅行や体験型（例：たびもの撰華）を選ぶのがおすすめです。</p>"},
  { title:"3️⃣ 価格よりも“贈る印象”を意識する", text:"同じ価格帯でも、表紙デザインや掲載内容のトーンで印象が変わります。<p >上品・華やか・落ち着きなど、<span class=\"h1 u-strong\">相手のイメージに合った雰囲気</span>を選ぶと喜ばれやすいです。</p>" , },
]);



/* 2) TALK (balloon dưới carousel) */
const DETAILS_TALK = {
  img: 'image/icon/1.png',
  
  name: 'マリさん',
  desc : '元ギフト販売員',
  message_profile : 'ギフト販売員の経験をもとに、「本当に喜ばれる」ギフト選びを紹介しています。人気のシリーズやおすすめポイントを、わかりやすくお届けします。',
  message_cautions : "カタログギフトはどれも同じに見えるけど、実は内容や使い方に細かな違いがあるんだよ！贈る前にここだけはチェックしておこう！",
  message_summary : " <span class=\"h1 u-strong\">どれが一番良い</span>より、<span class=\"h1 u-strong\">その人に一番合う</span>を選ぶのが、ギフト上手のコツだよ！",
};


/* =========================================================
   2) TIỆN ÍCH CHUNG (HELPERS) – DOM & FORMAT
   ========================================================= */
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


/* =========================================================
   3) RENDER THEO THỨ TỰ PHẦN TRONG HTML
   ---------------------------------------------------------
   3.2 自己紹介
   3.1) TOC (MỤC LỤC)
   3.2) RANKING
   3.3) COMPARE
   3.4) DETAIL CAROUSEL (#detailCarousel)
   3.5) CĂN MŨI TÊN CAROUSEL
   3.6) HOWTO / CAUTION / SUMMARY
   ========================================================= */
/* 3.1) 自己紹介 */
// Render PROFILE từ DETAILS_TALK (đang có sẵn trong app.js)
function renderProfileFromTalk(talk = DETAILS_TALK){
  const host = document.getElementById("profileHost");
  if (!host || !talk) return;

  const photo = talk.img || "";
  const name  = talk.name || "";
  const desc  = talk.desc || ""; // lấy đúng field bạn đang dùng
  const message_profile = talk.message_profile || "";
 host.innerHTML = `
    <div class="profile-card">
      <div class="p-left">
        <img src="${photo}" alt="${name ? name + '（店員）' : '店員'}" loading="lazy" decoding="async">
        <div class="badge">マリさん</div>
      </div>
       <div class="p-right">
        
        
        <p class="desc"><span class="hl">${desc}</span><br>${message_profile}</p>
      </div>
        
      
    </div>`;
}

// Gọi khi DOM sẵn sàng (bạn có thể thêm dòng này vào listener hiện có)
window.addEventListener("DOMContentLoaded", () => {
  renderProfileFromTalk();
});

/* 3.2) TOC (MỤC LỤC) */
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

/* 3.3) RANKING */
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
    const rank = i + 1;
    const crown = rank === 1 ? '<span class="crown" aria-hidden="true">👑</span>' : '';
    const inner = `
      <div class="medal">${crown} ${rank}位</div>
      <img src="${r.image}" alt="${r.name}" loading="lazy">
      <div class="name">${r.name}</div>
      
      <div class="price">${r.price}</div>
    `;
    return link
      ? `<a class="rank-card" href="${link}" title="${r.name} を開く">${inner}</a>`
      : `<article class="rank-card" aria-disabled="true">${inner}</article>`;
  }).join("");
}

/* 3.4) COMPARE */
function renderCompare(){
  const list = PRODUCTS;
  const host = document.getElementById("compareHost");
  if (!host) return;

  // THEAD: ảnh + tên/link
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
  const HIDE_SPECS = new Set(["有効期限","掲載点数","取扱ジャンル","おすすめのシーン"]);

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

/* 3.5) DETAIL CAROUSEL (#detailCarousel) */
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
    lines.push(`<li>価格：${fmtPrice(p.price)}。</li>`);
    if(p.specs?.掲載点数)         lines.push(`<li>掲載点数：${p.specs.掲載点数}</li>`);
    if(p.specs?.コース数)         lines.push(`<li>コース数：${p.specs.コース数}</li>`);
if(p.specs?.取扱ジャンル)     lines.push(`<li>取扱ジャンル：${p.specs.取扱ジャンル}</li>`);
    if(p.specs?.有効期限)         lines.push(`<li>有効期限：${p.specs.有効期限}</li>`);
    if(p.specs?.おすすめのシーン)  lines.push(`<li>おすすめのシーン：${p.specs.おすすめのシーン}</li>`);
    return lines.join("");
  };

  track.innerHTML = list.map(p => `
    <figure class="dc-stage">
      ${p.rank != null ? `<span class="dc-rank">${p.rank}位</span>` : ""}
      <span class="dc-intro hl">${p.intro || ""}</span>
      <p class="dc-name hl">${p.name || ""}</p>
      <p class="dc-info h3">${p.内容 || ""}</p>
      <img class="dc-img" src="${p.image || ""}" alt="${p.name || ""}" loading="lazy">
      <div class="tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <ul class="bullet dc-specs">${specLines(p)}</ul>
      <aside class="dc-meta">
        <div class="dc-pricebox">
          ${p.url ? `<a class="dc-btn primary" href="${p.url}" rel="noopener">商品ページを見る</a>` : ""}
          
          
      </aside>
    </figure>
  `).join("");
}

/* 3.6) Căn mũi tên (an toàn, không ném lỗi nếu thiếu phần tử) */
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

/* 3.7) HOW TO / CAUTION / SUMMARY */
function renderHowto(list = HOWTO , ){
  const host = $("#howtoHost");
  if (!host) return;
  host.innerHTML = list
    .map(x => `<section class="tip"><h3 >${x.title}</h3><p>${x.text}</p></section>
      <div class="talk" role="note" aria-label="メッセージ">
          <figure class="speaker">
          <img class="avatar" src="${DETAILS_TALK.img}" alt="${DETAILS_TALK.name}" width="48" height="48" loading="lazy">
          <figcaption class="name">${DETAILS_TALK.name}</figcaption>
        </figure>
        <div class="balloon">${x.message}</div>
        </div>`).join("");
      
}

function renderCaution(list = CAUTIONS){
  const box = $("#cautionList");
  if (!box) return;

  // Render a single talk/message at the top
  const talkHtml = `
    <div class="talk" role="note" aria-label="メッセージ">
      <figure class="speaker">
        <img class="avatar" src="${DETAILS_TALK.img}" alt="${DETAILS_TALK.name}" width="50" height="50" loading="lazy">
        <figcaption class="name">${DETAILS_TALK.name}</figcaption>
      </figure>
      <div class="balloon">${DETAILS_TALK.message_cautions }</div>
    </div>`;

  // Render each caution item below
  const itemsHtml = list.map(x => `
    <section class="tip">
      <h3>${x.title }</h3>
      <p>${x.text }</p>
    </section>
  `).join("");

  box.innerHTML =talkHtml+ itemsHtml;
}

function renderSummary(list = SUMMARY){
  const box = $("#summaryHost");
  if (!box) return;
    const talkHtml = `
    <div class="talk" role="note" aria-label="メッセージ">
      <figure class="speaker">
        <img class="avatar" src="${DETAILS_TALK.img}" alt="${DETAILS_TALK.name}" width="50" height="50" loading="lazy">
        <figcaption class="name">${DETAILS_TALK.name}</figcaption>
      </figure>
      <div class="balloon">${DETAILS_TALK.message_summary}</div>
    </div>`;

  // Render each caution item below
  const itemsHtml = list.map(x => `
    <section class="tip">
      <h3>${x.title }</h3>
      <p>${x.text }</p>
    </section>
  `).join("");

  box.innerHTML =itemsHtml+talkHtml ;
}


/* =========================================================
   4) KHỞI TẠO (INIT) – DOMContentLoaded
   - Gọi các renderer theo thứ tự xuất hiện trong trang
   - Gắn sự kiện cuộn mượt, đóng nav mobile, resize…
   ========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  // TOC + Các khối chính

 

  renderTOC();
  
  renderRanking();
  renderCompare();
  enableGrabScroll(document.querySelector('#compareHost'));

  // Carousel
  initDetailCarousel(PRODUCTS);
 
  // Howto/Caution/Summary
  renderHowto();
  renderCaution();
  renderSummary();
   renderProfileFromTalk
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

/* =========================================================
   HẾT
   ========================================================= */
