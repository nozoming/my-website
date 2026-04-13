# 今日の学習まとめ 2026-04-13

## 1. ファイルの復元

削除したファイルをGitHubから復元する方法：

```bash
git restore .
```

## 2. ファイルの場所を探す

```bash
find ~ -name "ファイル名*" 2>/dev/null
```

## 3. ファイル名の変更

```bash
mv 元のファイル名 新しいファイル名
```

## 4. レシピページの改善

### HTMLの構造（ブラケット付き材料リスト）

```html
<div class="ingredient-group">
  <div class="ingredient-items">
    <p class="ingredient">① 材料名　分量</p>
    <p class="ingredient">② 材料名　分量</p>
  </div>
  <div class="ingredient-bracket">作業内容</div>
</div>
```

### CSSのスタイル

```css
.ingredient-group {
    display: flex;
    align-items: stretch;
    margin-bottom: 16px;
}

.ingredient-items {
    width: 280px;
    padding: 0;
    margin: 0;
}

.ingredient {
    padding: 4px 8px;
    font-size: 15px;
    color: #444;
    background: none;
    border: none;
}

.ingredient-bracket {
    display: flex;
    align-items: center;
    padding: 0 6px;
    font-size: 13px;
    color: #1a6b3c;
    font-weight: bold;
    border-left: 3px solid #1a6b3c;
    border-top: 3px solid #1a6b3c;
    border-bottom: 3px solid #1a6b3c;
    border-radius: 0;
    margin-left: 8px;
    white-space: nowrap;
    width: 40px;
}
```

## 5. 写真の追加

### imagesフォルダにコピー

```bash
cp ~/Downloads/ファイル名.jpeg ~/my-website/images/新しい名前.jpg
```

### HTMLに画像を追加

```html
<img src="images/ファイル名.jpg" alt="説明文" style="width:100%; max-width:400px; border-radius:12px; margin:16px 0;">
```

## 6. GitHubに保存

```bash
git add . && git commit -m "コメント" && git push
```

## 7. 今日覚えた大事なこと

- `git restore .` でファイルを復元できる
- `find` コマンドでファイルの場所を探せる
- `mv` コマンドでファイル名を変更できる
- `<ul><li>` ではなく `<div><p>` を使うとCSSの干渉を避けられる
- ブラケット付きの材料リストはFlexboxで作れる

## 8. 公開中のウェブサイト

```
https://nozoming.github.io/my-website
```