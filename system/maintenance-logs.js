// system/maintenance-logs.js
const maintenanceLogs = [
    { text: "Initializing system diagnostics...", type: "info", delay: 300 },
    { text: "Bypassing public proxy layers... [OK]", type: "success", delay: 600 },
    { text: "Access granted from authenticated session [X-PROTOCOL-992]", type: "success", delay: 900 },
    { text: "Mounting private storage volumes... /var/www/secrets", type: "info", delay: 1300 },
    
    // 検索窓での操作ログ（プレイヤーへの誘導）
    { text: "USER_ACTIVITY: Focus detected on global search input (#search-input)", type: "info", delay: 1800 },
    { text: "TYPING_SIMULATION: \"l... a... v... o... r... o... _... i... l... l... e... g... a... l... e...\"", type: "warn", delay: 2600 },
    { text: "QUERY_EXECUTION: Evaluating keyword match against index database...", type: "info", delay: 3300 },
    { text: "HINT_DETECTED: Target index found in hidden archive sectors.", type: "success", delay: 3900 },

    { text: "Checking file integrity: style.css [VERIFIED]", type: "success", delay: 4500 },
    { text: "Checking file integrity: search-db.js [VERIFIED]", type: "success", delay: 4800 },
    { text: "WARNING: Unidentified background daemon detected on port 443.", type: "danger", delay: 5400 },
    { text: "Loading user portfolio metadata & developer logs...", type: "info", delay: 5900 },
    { text: "Establishing encrypted tunnel with node [JH-NISHI-01]...", type: "success", delay: 6500 },
    { text: "System maintenance protocol is active. All records synchronized.", type: "success", delay: 7100 },
    
    // 次の隠しファイルへの導線
    { text: "CRITICAL ALERT: Secure backdoor detected. Access core terminal: <a href=\"terminal-core.html\">/system/terminal-core.html</a>", type: "warn", delay: 7800 },
    { text: "Awaiting administrator further commands...", type: "info", delay: 8500 }
];