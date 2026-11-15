// secret-search-db.js
// 秘密のアーカイブ資料データベース（今後ページが増えたらここへ追記します）
const secretDatabase = [
    {
        keywords: ["x-protocol-992", "xprotocol992", "protocol", "プロトコル"],
        title: "FILE_01: X-PROTOCOL-992 仕様書および監視ログ",
        desc: "表向きのFintechシステム裏側で稼働していた違法データ処理の設計記録。",
        url: "node_9a3f12.html" // 旧 secret_protocol_992.html
    },
    {
        keywords: ["fintech", "資金", "送金", "マネーロンダリング"],
        title: "FILE_02: 不正送金ルートおよびダミー口座一覧",
        desc: "大手SIerの下請け偽装口座を経由した資金洗浄のトランザクション履歴。",
        url: "node_7b8c2e.html" // 旧 secret_finance_log.html
    },
    {
        keywords: ["名簿", "労働者", "抹消", "アカウント"],
        title: "FILE_03: 削除済みアカウント復元アーカイブ",
        desc: "システム上で「存在しなかったこと」にされた作業員たちの記録。",
        url: "node_3e4a91.html" // 旧 secret_deleted_users.html
    },
    {
        keywords: ["杉", "杉浩太", "sugi", "ブローカー", "リーダー"],
        title: "FILE_04: 個人調査ファイル - 杉 浩太（SUGI KOTA）",
        desc: "案件を持ち込んだPM・杉浩太の経歴と、別プロトコル関与に関する調査記録。",
        url: "node_c2e91f.html"
    },
    {
        keywords: ["谷", "谷智也", "tani", "バックエンド", "エンジニア"],
        title: "FILE_05: 個人調査ファイル - 谷 智也（TANI TOMOYA）",
        desc: "裏API開発を担当させられ、消息を絶ったエンジニアの記録と最後のメッセージ。",
        url: "node_8f4b2d.html"
    },
    {
        keywords: ["project-obelisk", "projectobelisk", "obelisk", "オベリスク", "バックドア"],
        title: "FILE_06: PROJECT-OBELISK 計画概要およびバックドア拡散仕様書",
        desc: "杉浩太が主導する上位極秘案件。国内基幹インフラへの潜伏型モジュール拡散計画の全貌。",
        url: "node_f19d04.html"
    },    //表で確認できる画面
    {
        keywords: ["backup_key_07", "backupkey07", "backup", "停止キー", "音声", "告白"],
        title: "KEY_ARCHIVE: 杉 浩太 盗聴音声トランスクリプト（PROJECT-OBELISKの真の動機）",
        desc: "【BACKUP_KEY_07解読済】杉浩太が語る「犠牲は必要経費」という狂気の告白音声データ。",
        url: "node_d4b912.html"
    },
    {
        keywords: ["告発", "リーク", "最終", "ファイナル", "証拠パッケージ"],
        title: "FINAL_NODE: 外部告発プロトコルおよびサーバー一斉消去コンソール",
        desc: "集めたすべての証拠と停止キーを外部へ一斉送信し、アーカイブを自爆消去する最終手順。",
        url: "node_e7c109.html"
    },
    { keywords: ["corporate", "コーポレート", "物流", "企業"], title: "Corporate Site A (実績詳細)", url: " ../work-corporate.html" },
    { keywords: ["ecommerce", "ec", "app", "アパレル", "アプリ"], title: "E-commerce App (実績詳細)", url: "../work-ecommerce.html" },
    { keywords: ["branding", "media", "メディア", "カルチャー"], title: "Branding Media (実績詳細)", url: "../work-branding.html" },
    { keywords: ["fintech", "dashboard", "ダッシュボード", "資産", "saas"], title: "Fintech Dashboard (実績詳細)", url: "../work-fintech.html" },
    { keywords: ["design", "system", "デザインシステム", "コンポーネント"], title: "Design System (実績詳細)", url: "../work-designsystem.html" },
    { keywords: ["about", "プロフィール", "経歴", "西"], title: "About Me (プロフィール)", url: "../about.html" },
    { keywords: ["contact", "連絡", "問い合わせ", "依頼"], title: "Contact (お問い合わせ)", url: "../contact.html" }
];