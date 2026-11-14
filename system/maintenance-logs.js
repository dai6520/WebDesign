// system/maintenance-logs.js
const maintenanceLogs = [
    { text: "Initializing system diagnostics...", type: "info", delay: 300 },
    { text: "Bypassing public proxy layers... [OK]", type: "success", delay: 600 },
    { text: "Access granted from authenticated session [X-PROTOCOL-992]", type: "success", delay: 900 },
    { text: "Mounting private storage volumes... /var/www/secrets", type: "info", delay: 1300 },
    
    // 検索窓での操作ログを追加
    { text: "USER_ACTIVITY: Focus detected on global search input (#search-input)", type: "info", delay: 1800 },
    { text: "TYPING_SIMULATION: \"a... t... o... m... i... c... -... d... e... s... i... g... n...\"", type: "warn", delay: 2400 },
    { text: "QUERY_EXECUTION: Evaluating keyword match against index database...", type: "info", delay: 3000 },
    { text: "REDIRECT_TRIGGERED: Routing user to internal encrypted records.", type: "success", delay: 3500 },

    { text: "Checking file integrity: style.css [VERIFIED]", type: "success", delay: 4100 },
    { text: "Checking file integrity: search-db.js [VERIFIED]", type: "success", delay: 4400 },
    { text: "WARNING: Unidentified background daemon detected on port 443.", type: "danger", delay: 5000 },
    { text: "Loading user portfolio metadata & developer logs...", type: "info", delay: 5500 },
    { text: "Establishing encrypted tunnel with node [JH-NISHI-01]...", type: "success", delay: 6100 },
    { text: "System maintenance protocol is active. All records synchronized.", type: "success", delay: 6700 },
    { text: "Awaiting administrator further commands...", type: "info", delay: 7300 }
];