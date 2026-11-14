// blog-data.js
const blogPosts = [
    {
        date: "2026-10-18",
        title: "個人用のメモ帳ページを作った",
        content: "ポートフォリオの裏でいろいろ細かい実験とかコードの断片を試してて、それをまとめる場所が欲しくなったから、とりあえずこっそりこのメモ帳ページを作った。表のサイトは綺麗に作ってるけど、こういう個人的な試行錯誤や雑多な思考はここにそのまま残しておこうと思う。"
    },
    {
        date: "2026-10-22",
        title: "Figmaのオートレイアウトで数時間溶かした",
        content: "Figmaのオートレイアウト、ネストしすぎると後から構造変えるの地獄になるのどうにかしてほしい。今日だけで2時間くらいレイヤー整理に消えた……。でも最終的にスッキリ組めたから良しとする。"
    },
    {
        date: "2026-10-29",
        title: "フォントのウェイトとレンダリングの微調整",
        content: "最近の案件で使ってるフォント周りのCSS調整。WindowsとMacでレンダリング結果が微妙に変わるから、-webkit-font-smoothing とか含めて何パターンか検証。やっぱりタイポグラフィの細かい部分が決まると全体のクオリティが一段階上がる気がする。"
    },
    {
        date: "2026-11-03",
        title: "検索窓にちょっとした遊び心を実装",
        content: "トップページの検索窓、ただキーワードでジャンプするだけだと味気ないから、特定のワードを入れたら別の場所に飛ぶ仕組みをこっそり仕込んでみた。こういう無駄に作り込む時間が一番楽しい。"
    },
    {
        date: "2026-11-04",
        title: "ディレクトリ構成の整理とVercelの挙動確認",
        content: "ファイルが増えてきたからプロジェクトのディレクトリ構成を整理。Vercelでのルーティング確認も含めて、表に出したくないテスト系のファイルは /system/ 系のサブディレクトリに押し込む。よし、これでスッキリ。"
    },
    {
        date: "2026-11-05",
        title: "ダークモードの配色で悩む",
        content: "UIのダークモードの色味調整。真っ黒（#000000）じゃなくて、少し青みがかかったダークグレー（GitHubっぽい色）にすると目が疲れにくくて良い感じ。コード書いてる時間より配色悩んでる時間の方が長い気がする今日この頃。"
    },
    {
        date: "2026-11-08",
        title: "iOS Safariのレイアウト崩れにハマる",
        content: "スマホの実機テストしてたら、iOSのSafariで高さの計算が狂う例のやっかいな挙動にハマる。dvh単位のフォールバック書き忘れてた……。こういう細かいバグ取りは地味に体力を削られるから早めに片付けたい。"
    },
    {
        date: "2026-11-14",
        title: "個人ブログのレイアウトと、ちょっとしたメモ",
        content: `最近進めてる個人ブログの構築も大体形になってきた。シンプルで読みやすいタイポグラフィを意識しつつ、コードの組み立てもスムーズにいって満足。<br><br>
        【一時メモ・検証用】<br>
        管理端末へのアクセスキー: 
        <span id="secretKey" class="redacted" onclick="revealAndTrigger(this)">
            [ クリックして暗号を復号: X-PROTOCOL-992 ]
        </span>

        <div id="hiddenGizmo" class="secret-trigger-area">
            <span style="color: #28a745; font-family: monospace; font-size: 0.85rem; font-weight: bold;">[!] SECURITY OVERRIDE SUCCESSFUL</span>
            <p style="margin: 8px 0 0 0; font-size: 0.9rem; color: #555;">
                コンソールログへのシステム出力が完了しました。開発者ツールのコンソールをご確認ください。<br>
                次のアクセスノード: <a href="system/maintenance.html" style="color: #0366d6; text-decoration: underline;">/system/maintenance.html</a>
            </p>
        </div>`
    }
];