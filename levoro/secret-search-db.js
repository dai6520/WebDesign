// secret-search-db.js
// 秘密のアーカイブ資料データベース（今後ページが増えたらここへ追記します）
const secretDatabase = [
    {
        keywords: ["x-protocol-992", "xprotocol992", "protocol", "プロトコル"],
        title: "FILE_01: X-PROTOCOL-992 仕様書および監視ログ",
        desc: "表向きのFintechシステム裏側で稼働していた違法データ処理の設計記録。",
        url: "secret_protocol_992.html"
    },
    {
        keywords: ["fintech", "資金", "送金", "マネーロンダリング"],
        title: "FILE_02: 不正送金ルートおよびダミー口座一覧",
        desc: "大手SIerの下請け偽装口座を経由した資金洗浄のトランザクション履歴。",
        url: "secret_finance_log.html"
    },
    {
        keywords: ["名簿", "労働者", "抹消", "アカウント"],
        title: "FILE_03: 削除済みアカウント復元アーカイブ",
        desc: "システム上で「存在しなかったこと」にされた作業員たちの記録。",
        url: "secret_deleted_users.html"
    },
    //表で確認できる画面
    { keywords: ["corporate", "コーポレート", "物流", "企業"], title: "Corporate Site A (実績詳細)", url: " ../work-corporate.html" },
    { keywords: ["ecommerce", "ec", "app", "アパレル", "アプリ"], title: "E-commerce App (実績詳細)", url: "../work-ecommerce.html" },
    { keywords: ["branding", "media", "メディア", "カルチャー"], title: "Branding Media (実績詳細)", url: "../work-branding.html" },
    { keywords: ["fintech", "dashboard", "ダッシュボード", "資産", "saas"], title: "Fintech Dashboard (実績詳細)", url: "../work-fintech.html" },
    { keywords: ["design", "system", "デザインシステム", "コンポーネント"], title: "Design System (実績詳細)", url: "../work-designsystem.html" },
    { keywords: ["about", "プロフィール", "経歴", "西"], title: "About Me (プロフィール)", url: "../about.html" },
    { keywords: ["contact", "連絡", "問い合わせ", "依頼"], title: "Contact (お問い合わせ)", url: "../contact.html" }
];