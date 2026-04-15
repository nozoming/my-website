# Day 6 ― CSSの詳細度・全ページデザイン統一

## 今日やったこと
- recipe.html・profile.html・contact.html をトップページと統一
- 全ページにヒーローセクションを追加
- 全ページに script.js・Font Awesome を追加

## CSSの詳細度（せんさいど）
より具体的な指定の方が勝つルール。

```css
/* すべてのh2に当たる（弱い） */
h2 {
    color: #1a1a2e;
}

/* .heroの中のh2だけに当たる（強い） */
.hero h2 {
    color: white;
}
```

`.hero h2` の方が具体的なので白が勝つ。

## linear-gradient（グラデーション背景）
```css
background: linear-gradient(135deg, #1a1a2e, #1a6b3c);
```
- `135deg` → 斜めの角度
- `#1a1a2e` → 開始色（紺）
- `#1a6b3c` → 終了色（緑）

## 今日の気づき
- コードを見る場所が違うと理解できない
- HTMLの意味と実際の表示を確認しながら何度も触ることが大事
- 1つずつ体に染み込ませる方が力になる
- 