/* ============================================================
   KIRASORA — 多語系字典（繁中 / 簡中 / 英文）
   用法：在 HTML 元素上加 data-i18n="key" 即可。
   屬性型（aria-label / title / placeholder）用 data-i18n-attr="aria-label:key;title:key"
   ============================================================ */
(function (global) {
  "use strict";

  const I18N = {
    /* ===================== 通用 / 導覽 / 頁尾 ===================== */
    "nav.home":     { "zh-TW": "首頁",        "zh-CN": "首页",        "en": "Home" },
    "nav.members": { "zh-TW": "成員",        "zh-CN": "成员",        "en": "Members" },
    "nav.music":   { "zh-TW": "音樂",        "zh-CN": "音乐",        "en": "Music" },
    "nav.news":    { "zh-TW": "動態",        "zh-CN": "动态",        "en": "News" },
    "nav.shop":    { "zh-TW": "商店",        "zh-CN": "商店",        "en": "Shop" },
    "nav.subscribe": { "zh-TW": "訂閱",      "zh-CN": "订阅",        "en": "Subscribe" },
    "nav.menu":    { "zh-TW": "選單",        "zh-CN": "菜单",        "en": "Menu" },
    "nav.lang":    { "zh-TW": "切換語言",    "zh-CN": "切换语言",    "en": "Switch language" },

    "footer.privacy": { "zh-TW": "私隱政策 Privacy Policy", "zh-CN": "隐私政策 Privacy Policy", "en": "Privacy Policy" },

    /* ===================== 首頁 index ===================== */
    "index.tagline": { "zh-TW": "不枉這青春 — 在霓虹熄滅之前，燃盡這一夜。", "zh-CN": "不枉这青春 — 在霓虹熄灭之前，燃尽这一夜。", "en": "No Regrets of This Youth — burn through the night before the neon fades." },
    "index.sub": { "zh-TW": "一支橫跨賽博夜空與青春熱血的樂團。", "zh-CN": "一支横跨赛博夜空与青春热血的乐团。", "en": "A band spanning the cyber night sky and the fire of youth." },
    "index.btnMusic": { "zh-TW": "▶ 聽最新單曲", "zh-CN": "▶ 听最新单曲", "en": "▶ Listen to the latest single" },
    "index.btnNews": { "zh-TW": "看最新動態", "zh-CN": "看最新动态", "en": "See latest news" },
    "index.latestTitle": { "zh-TW": "最新單曲", "zh-CN": "最新单曲", "en": "Latest Single" },
    "index.releaseTag": { "zh-TW": "最新單曲 · 2026", "zh-CN": "最新单曲 · 2026", "en": "Latest Single · 2026" },
    "index.releaseDesc": { "zh-TW": "在霓虹熄滅之前，燃盡這一夜。KIRASORA 的第一聲正式響起。", "zh-CN": "在霓虹熄灭之前，燃尽这一夜。KIRASORA 的第一声正式响起。", "en": "Before the neon fades, burn through this night. KIRASORA's first voice rings out." },
    "index.releasePlay": { "zh-TW": "▶ 於 Spotify 試聽", "zh-CN": "▶ 于 Spotify 试听", "en": "▶ Listen on Spotify" },
    "index.listenMore": { "zh-TW": "查看全部曲目 →", "zh-CN": "查看全部曲目 →", "en": "View all tracks →" },
    "index.newsTitle": { "zh-TW": "最新動態", "zh-CN": "最新动态", "en": "Latest News" },
    "index.news1Title": { "zh-TW": "英文及國語單歌發佈，官網正式上線", "zh-CN": "英文及国语单曲发布，官网正式上线", "en": "English & Mandarin singles released, official site launched" },
    "index.news2Title": { "zh-TW": "首支單曲《渡》正式發佈", "zh-CN": "首支单曲《渡》正式发布", "en": "Debut single “Crossing” officially released" },
    "index.newsMore": { "zh-TW": "查看全部動態 →", "zh-CN": "查看全部动态 →", "en": "View all news →" },
    "index.subTitle": { "zh-TW": "別錯過下一次亮燈", "zh-CN": "别错过下一次亮灯", "en": "Don't miss the next light-up" },
    "index.subLead": { "zh-TW": "留下 Email，新單曲、MV 與周邊第一時間寄給你。", "zh-CN": "留下 Email，新单曲、MV 与周边第一时间寄给你。", "en": "Leave your email — new singles, MV and merch delivered to you first." },
    "index.subBtn": { "zh-TW": "訂閱", "zh-CN": "订阅", "en": "Subscribe" },
    "index.subNote": { "zh-TW": "我們不會寄垃圾信，只寄光。", "zh-CN": "我们不会寄垃圾邮件，只寄光。", "en": "We won't send spam — only light." },
    "index.subNoteDone": { "zh-TW": "✓ 已收到 {email} — 亮燈時我們會第一個通知你。", "zh-CN": "✓ 已收到 {email} — 亮灯时我们会第一个通知你。", "en": "✓ Received {email} — we'll notify you first when the lights turn on." },
    "index.subNoteSending": { "zh-TW": "傳送中…", "zh-CN": "发送中…", "en": "Sending…" },
    "index.subNoteError": { "zh-TW": "✗ 傳送失敗，請稍後再試。", "zh-CN": "✗ 发送失败，请稍后再试。", "en": "✗ Failed to send, please try again later." },

    /* ===================== 成員 members ===================== */
    "members.title": { "zh-TW": "成員", "zh-CN": "成员", "en": "Members" },
    "members.lead": { "zh-TW": "四位來自霓虹邊緣的靈魂，各自帶著一束光。", "zh-CN": "四位来自霓虹边缘的灵魂，各自带着一束光。", "en": "Four souls from the edge of neon, each carrying a beam of light." },
    "members.role.kira": { "zh-TW": "主唱 · 吉他手", "zh-CN": "主唱 · 吉他手", "en": "Vocal · Guitar" },
    "members.role.sora": { "zh-TW": "主唱 · 吉他手", "zh-CN": "主唱 · 吉他手", "en": "Vocal · Guitar" },
    "members.role.chris": { "zh-TW": "主唱 · 低音吉他手", "zh-CN": "主唱 · 低音吉他手", "en": "Vocal · Bass" },
    "members.role.zero": { "zh-TW": "主唱 · 鼓手", "zh-CN": "主唱 · 鼓手", "en": "Vocal · Drums" },
    "members.desc.kira": { "zh-TW": "樂團的歌曲創作大腦，包辦詞曲。喜穿潮流服飾，性格內斂卻在台上點燃全場。代表色紅，愛用 ESP 吉他。", "zh-CN": "乐团的歌曲创作大脑，包办词曲。喜穿潮流服饰，性格内敛却在台上点燃全场。代表色红，爱用 ESP 吉他。", "en": "The band's songwriting brain, writing both lyrics and music. Loves trendy outfits, reserved yet ignites the crowd on stage. Signature color red, favors ESP guitar." },
    "members.desc.sora": { "zh-TW": "美貌擔當，性格開朗像小太陽。代表色黑，手持 Gibson 吉他，笑容比霓虹更耀眼。", "zh-CN": "美貌担当，性格开朗像小太阳。代表色黑，手持 Gibson 吉他，笑容比霓虹更耀眼。", "en": "The beauty of the group, bright and cheerful like a little sun. Signature color black, wields a Gibson guitar, smile outshines the neon." },
    "members.desc.chris": { "zh-TW": "團內開心果，性格搞笑總能逗大家笑。代表色藍，抱著 ESP 低音吉他穩住整首歌的底。", "zh-CN": "团内开心果，性格搞笑总能逗大家笑。代表色蓝，抱着 ESP 低音吉他稳住整首歌的底。", "en": "The group's mood-maker, always cracking jokes that make everyone laugh. Signature color blue, holds the ESP bass that anchors every song." },
    "members.desc.zero": { "zh-TW": "性格爽朗、節奏感天生的鼓手。代表色黃，一槌落下，全場跟著他的心跳走。", "zh-CN": "性格爽朗、节奏感天生的鼓手。代表色黄，一槌落下，全场跟着他的心跳走。", "en": "Cheerful by nature, a drummer born with rhythm. Signature color yellow — one strike and the whole crowd follows his heartbeat." },

    /* ===================== 音樂 music ===================== */
    "music.title": { "zh-TW": "音樂作品", "zh-CN": "音乐作品", "en": "Discography" },
    "music.lead": { "zh-TW": "從天台到地下通道，每一首都是不肯熄滅的霓虹。", "zh-CN": "从天台到地下通道，每一首都是不肯熄灭的霓虹。", "en": "From rooftops to underground passages, every song is neon that refuses to fade." },
    "music.listenTitle": { "zh-TW": "在各平台收聽", "zh-CN": "在各平台收听", "en": "Listen on all platforms" },

    /* ===================== 歌詞頁 lyrics（歌名/歌詞不翻譯，僅 UI 文字） ===================== */
    "lyrics.back": { "zh-TW": "← 返回音樂", "zh-CN": "← 返回音乐", "en": "← Back to Music" },
    "lyrics.listen": { "zh-TW": "▶ 試聽", "zh-CN": "▶ 试听", "en": "▶ Listen" },

    /* ===================== 動態 news ===================== */
    "news.title": { "zh-TW": "最新動態", "zh-CN": "最新动态", "en": "Latest News" },
    "news.lead": { "zh-TW": "樂團企劃的每一步，都在這裡留下光跡。", "zh-CN": "乐团企划的每一步，都在这里留下光迹。", "en": "Every step of the project leaves a trail of light here." },
    "news.1title": { "zh-TW": "英文及國語單歌發佈，官網正式上線", "zh-CN": "英文及国语单曲发布，官网正式上线", "en": "English & Mandarin singles released, official site launched" },
    "news.1text": { "zh-TW": "樂團推出英文與國語版本單曲，官方網站同步正式上線，讓霓虹照亮更多角落。", "zh-CN": "乐团推出英文与国语版本单曲，官方网站同步正式上线，让霓虹照亮更多角落。", "en": "The band releases English and Mandarin versions of its singles; the official site launches in sync, letting neon light up more corners." },
    "news.2title": { "zh-TW": "首支單曲《渡》正式發佈", "zh-CN": "首支单曲《渡》正式发布", "en": "Debut single “Crossing” officially released" },
    "news.2text": { "zh-TW": "KIRASORA 首支單曲《渡》於各大串流平台上線，是樂團邁出賽博夜空的第一步。", "zh-CN": "KIRASORA 首支单曲《渡》于各大串流平台上线，是乐团迈出赛博夜空的第一步。", "en": "KIRASORA's debut single “Crossing” goes live on all streaming platforms — the band's first step out of the cyber night sky." },
    "news.3title": { "zh-TW": "KIRASORA 企劃啟動", "zh-CN": "KIRASORA 企划启动", "en": "KIRASORA project launched" },
    "news.3text": { "zh-TW": "一支來自賽博夜空的樂團正式立項，目標是把青春熱血寫進每一幀霓虹裡。", "zh-CN": "一支来自赛博夜空的乐团正式立项，目标是把青春热血写进每一帧霓虹里。", "en": "A band from the cyber night sky is officially launched, aiming to write youthful passion into every frame of neon." },

    /* ===================== 商店 shop ===================== */
    "shop.title": { "zh-TW": "商店", "zh-CN": "商店", "en": "Shop" },
    "shop.lead": { "zh-TW": "周邊商店籌備中。", "zh-CN": "周边商店筹备中。", "en": "Merch store in preparation." },
    "shop.buildingTitle": { "zh-TW": "建設中", "zh-CN": "建设中", "en": "Under Construction" },
    "shop.buildingSub": { "zh-TW": "COMING SOON", "zh-CN": "COMING SOON", "en": "COMING SOON" },
    "shop.buildingText": { "zh-TW": "我們正在為你打造 KIRASORA 官方周邊——霓虹 T-Shirt、成員徽章、實體唱片與更多。商店即將開張，敬請期待。", "zh-CN": "我们正在为你打造 KIRASORA 官方周边——霓虹 T-Shirt、成员徽章、实体唱片与更多。商店即将开张，敬请期待。", "en": "We're building the official KIRASORA store — neon tees, member badges, physical releases and more. Launching soon, stay tuned." },
    "shop.buildingBtn": { "zh-TW": "訂閱開張通知", "zh-CN": "订阅开张通知", "en": "Notify me on launch" },
    "shop.comingText": { "zh-TW": "更多周邊商品即將上架，敬請期待。", "zh-CN": "更多周边商品即将上架，敬请期待。", "en": "More merch coming soon — stay tuned." },
    "shop.comingBtn": { "zh-TW": "訂閱更新通知", "zh-CN": "订阅更新通知", "en": "Subscribe for updates" },

    /* ===================== 導覽（回首頁，私隱頁用） ===================== */
    "nav.backHome": { "zh-TW": "回首頁", "zh-CN": "返回首页", "en": "Back to Home" },

    /* ===================== 私隱政策 privacy ===================== */
    "privacy.title": { "zh-TW": "私隱政策 Privacy Policy", "zh-CN": "隐私政策 Privacy Policy", "en": "Privacy Policy" },
    "privacy.updated": { "zh-TW": "最後更新：2026 年 7 月 15 日", "zh-CN": "最后更新：2026 年 7 月 15 日", "en": "Last updated: July 15, 2026" },
    "privacy.intro": { "zh-TW": "歡迎瀏覽 KIRASORA 官方網站（以下簡稱「本網站」）。我們重視你的私隱。本政策說明當你使用本網站時，我們會收集哪些資料、如何使用，以及第三方服務（包括廣告）如何處理相關資訊。", "zh-CN": "欢迎浏览 KIRASORA 官方网站（以下简称「本网站」）。我们重视你的隐私。本政策说明当你使用本网站时，我们会收集哪些资料、如何使用，以及第三方服务（包括广告）如何处理相关信息。", "en": "Welcome to the official KIRASORA website (the “Site”). We value your privacy. This policy explains what data we collect when you use the Site, how we use it, and how third-party services (including advertising) handle related information." },
    "privacy.h1": { "zh-TW": "1. 我們收集的資料", "zh-CN": "1. 我们收集的资料", "en": "1. Information We Collect" },
    "privacy.t1": { "zh-TW": "本網站以展示樂團內容為主，不會主動要求你提供個人身分資料。可能涉及的資料包括：", "zh-CN": "本网站以展示乐团内容为主，不会主动要求你提供个人身分资料。可能涉及的资料包括：", "en": "The Site mainly showcases band content and does not actively ask for your personal identity information. Data that may be involved includes:" },
    "privacy.li1": { "zh-TW": "<strong>自願提供的資料</strong>：若你使用電郵訂閱功能，我們會收集你所填寫的電郵地址，僅用於發送樂團最新消息。", "zh-CN": "<strong>自愿提供的资料</strong>：若你使用电邮订阅功能，我们会收集你所填写的电邮地址，仅用于发送乐团最新消息。", "en": "<strong>Information you provide voluntarily</strong>: if you use the email subscription feature, we collect the email address you provide, used solely to send the band's latest news." },
    "privacy.li2": { "zh-TW": "<strong>自動收集的資料</strong>：如瀏覽器類型、裝置資訊、IP 位址、瀏覽頁面與停留時間等，透過 Cookie 及類似技術收集，用於分析與改善網站體驗。", "zh-CN": "<strong>自动收集的资料</strong>：如浏览器类型、装置资讯、IP 位址、浏览页面与停留时间等，透过 Cookie 及类似技术收集，用于分析与改善网站体验。", "en": "<strong>Automatically collected data</strong>: such as browser type, device information, IP address, pages viewed and time spent, collected via cookies and similar technologies, used for analytics and improving the site experience." },
    "privacy.h2": { "zh-TW": "2. Cookie 的使用", "zh-CN": "2. Cookie 的使用", "en": "2. Use of Cookies" },
    "privacy.t2": { "zh-TW": "Cookie 是儲存於你裝置上的小型文字檔案。本網站及第三方服務會使用 Cookie 來記住你的偏好、分析流量及投放相關廣告。你可以隨時透過瀏覽器設定停用或刪除 Cookie，但部分功能可能因此受影響。", "zh-CN": "Cookie 是储存于你装置上的小型文字档案。本网站及第三方服务会使用 Cookie 来记住你的偏好、分析流量及投放相关广告。你可以随时透过浏览器设定停用或删除 Cookie，但部分功能可能因此受影响。", "en": "Cookies are small text files stored on your device. The Site and third-party services use cookies to remember your preferences, analyze traffic, and serve relevant ads. You can disable or delete cookies anytime via your browser settings, though some features may be affected." },
    "privacy.h3": { "zh-TW": "3. 第三方廣告與 Google AdSense", "zh-CN": "3. 第三方广告与 Google AdSense", "en": "3. Third-Party Advertising & Google AdSense" },
    "privacy.t3": { "zh-TW": "本網站可能使用 Google AdSense 等第三方廣告服務。這些服務會透過 Cookie 投放廣告：", "zh-CN": "本网站可能使用 Google AdSense 等第三方广告服务。这些服务会透过 Cookie 投放广告：", "en": "The Site may use third-party advertising services such as Google AdSense. These services serve ads via cookies:" },
    "privacy.li3a": { "zh-TW": "Google 作為第三方供應商，會使用 Cookie（包括 DoubleClick DART Cookie）根據你曾瀏覽的本網站及其他網站內容投放廣告。", "zh-CN": "Google 作为第三方供应商，会使用 Cookie（包括 DoubleClick DART Cookie）根据你曾浏览的本网站及其他网站内容投放广告。", "en": "Google, as a third-party vendor, uses cookies (including DoubleClick DART cookies) to serve ads based on your visits to this and other websites." },
    "privacy.li3b": { "zh-TW": "你可以前往 <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener\">Google 廣告設定</a> 選擇停用個人化廣告。", "zh-CN": "你可以前往 <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener\">Google 广告设定</a> 选择停用个人化广告。", "en": "You can visit <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener\">Google Ads Settings</a> to opt out of personalized advertising." },
    "privacy.li3c": { "zh-TW": "第三方供應商及廣告聯播網亦可能在本網站投放廣告，其 Cookie 使用受各自私隱政策約束。", "zh-CN": "第三方供应商及广告联播网亦可能在本网站投放广告，其 Cookie 使用受各自隐私政策约束。", "en": "Third-party vendors and ad networks may also serve ads on this Site; their use of cookies is governed by their respective privacy policies." },
    "privacy.t3b": { "zh-TW": "如需進一步了解 Google 如何在其合作夥伴網站使用資料，請參閱 <a href=\"https://policies.google.com/technologies/partner-sites\" target=\"_blank\" rel=\"noopener\">Google 的政策說明</a>。", "zh-CN": "如需进一步了解 Google 如何在其合作伙伴网站使用资料，请参阅 <a href=\"https://policies.google.com/technologies/partner-sites\" target=\"_blank\" rel=\"noopener\">Google 的政策说明</a>。", "en": "To learn more about how Google uses data on partner sites, see <a href=\"https://policies.google.com/technologies/partner-sites\" target=\"_blank\" rel=\"noopener\">Google's policy explanation</a>." },
    "privacy.h4": { "zh-TW": "4. 第三方連結", "zh-CN": "4. 第三方链接", "en": "4. Third-Party Links" },
    "privacy.t4": { "zh-TW": "本網站包含指向第三方平台（如 Spotify、Apple Music、YouTube Music、Instagram、Facebook、X 等）的連結。當你點擊這些連結，即離開本網站，我們對第三方網站的內容及私隱做法概不負責，建議你查閱各平台的私隱政策。", "zh-CN": "本网站包含指向第三方平台（如 Spotify、Apple Music、YouTube Music、Instagram、Facebook、X 等）的链接。当你点击这些链接，即离开本网站，我们对第三方网站的内容及隐私做法概不负责，建议你查阅各平台的隐私政策。", "en": "The Site contains links to third-party platforms (such as Spotify, Apple Music, YouTube Music, Instagram, Facebook, X, etc.). When you click these links you leave the Site; we are not responsible for the content or privacy practices of third-party sites and recommend reviewing their policies." },
    "privacy.h5": { "zh-TW": "5. 資料安全", "zh-CN": "5. 资料安全", "en": "5. Data Security" },
    "privacy.t5": { "zh-TW": "我們採取合理的技術與管理措施保護所收集的資料，惟互聯網傳輸無法保證絕對安全，敬請理解。", "zh-CN": "我们采取合理的技术与管理措施保护所收集的资料，惟互联网传输无法保证绝对安全，敬请理解。", "en": "We take reasonable technical and organizational measures to protect collected data, though no internet transmission can be guaranteed absolutely secure — we appreciate your understanding." },
    "privacy.h6": { "zh-TW": "6. 兒童私隱", "zh-CN": "6. 儿童隐私", "en": "6. Children's Privacy" },
    "privacy.t6": { "zh-TW": "本網站並非以未滿 13 歲的兒童為對象，我們不會刻意收集兒童的個人資料。若你認為我們無意中收集了相關資料，請與我們聯絡以便刪除。", "zh-CN": "本网站并非以未满 13 岁的儿童为对象，我们不会刻意收集儿童的个人资料。若你认为我们无意中收集了相关资料，请与我们联络以便删除。", "en": "The Site is not directed at children under 13, and we do not knowingly collect personal information from children. If you believe we have inadvertently collected such data, please contact us so we can delete it." },
    "privacy.h7": { "zh-TW": "7. 政策更新", "zh-CN": "7. 政策更新", "en": "7. Policy Updates" },
    "privacy.t7": { "zh-TW": "我們可能不時修訂本私隱政策。任何更新將於本頁面公佈，並更新頂部的「最後更新」日期。建議你定期查閱。", "zh-CN": "我们可能不时修订本隐私政策。任何更新将于本页面公布，并更新顶部的「最后更新」日期。建议你定期查阅。", "en": "We may revise this privacy policy from time to time. Any updates will be posted on this page with the “Last updated” date at the top refreshed. We recommend checking periodically." },
    "privacy.h8": { "zh-TW": "8. 聯絡我們", "zh-CN": "8. 联络我们", "en": "8. Contact Us" },
    "privacy.t8": { "zh-TW": "如對本私隱政策有任何疑問，歡迎透過我們的社交平台（<a href=\"https://www.instagram.com/kirasora.band/\" target=\"_blank\" rel=\"noopener\">Instagram</a>、<a href=\"https://www.facebook.com/kirasora.official\" target=\"_blank\" rel=\"noopener\">Facebook</a>、<a href=\"https://x.com/Kirasora_offcl\" target=\"_blank\" rel=\"noopener\">X</a>）與我們聯絡。", "zh-CN": "如对本隐私政策有任何疑问，欢迎透过我们的社交平台（<a href=\"https://www.instagram.com/kirasora.band/\" target=\"_blank\" rel=\"noopener\">Instagram</a>、<a href=\"https://www.facebook.com/kirasora.official\" target=\"_blank\" rel=\"noopener\">Facebook</a>、<a href=\"https://x.com/Kirasora_offcl\" target=\"_blank\" rel=\"noopener\">X</a>）与我们联络。", "en": "If you have any questions about this privacy policy, please contact us through our social platforms (<a href=\"https://www.instagram.com/kirasora.band/\" target=\"_blank\" rel=\"noopener\">Instagram</a>, <a href=\"https://www.facebook.com/kirasora.official\" target=\"_blank\" rel=\"noopener\">Facebook</a>, <a href=\"https://x.com/Kirasora_offcl\" target=\"_blank\" rel=\"noopener\">X</a>)." },
    "privacy.back": { "zh-TW": "← 返回首頁", "zh-CN": "← 返回首页", "en": "← Back to Home" },

    /* ===================== 廣告標籤 ===================== */
    "ad.label": { "zh-TW": "廣告 · ADVERTISEMENT", "zh-CN": "广告 · ADVERTISEMENT", "en": "ADVERTISEMENT" }
  };

  /* 語言順序（地球按鈕循環） */
  const LANGS = ["zh-TW", "zh-CN", "en"];
  const LANG_LABEL = { "zh-TW": "繁", "zh-CN": "简", "en": "EN" };
  const LANG_HTML = { "zh-TW": "zh-Hant", "zh-CN": "zh-CN", "en": "en" };

  global.KIRASORA_I18N = { I18N, LANGS, LANG_LABEL, LANG_HTML };
})(window);
