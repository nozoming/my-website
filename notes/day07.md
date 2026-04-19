# Day 7 ― CSSのボックスモデル・プロパティの理解

## 今日の学び方
「予想する → 試す → 確認する」の流れで体に染み込ませる

## margin と padding の違い
- `margin` → 要素の**外側**の余白
- `padding` → 要素の**内側**の余白

## padding の数字の書き方
```css
padding: 10px;            /* 上下左右すべて */
padding: 14px 20px;       /* 上下14px・左右20px */
padding: 10px 20px 30px 40px; /* 上・右・下・左の順番 */
```

## border-radius（角の丸み）
```css
border-radius: 0 8px 8px 0;
/* 上左:0 上右:8px 下右:8px 下左:0 → 右側だけ丸い */
```

## border-left / border-right
```css
border-left: 4px solid #1a6b3c;  /* 左側だけに線を引く */
border-right: 4px solid #1a6b3c; /* 右側だけに線を引く */
```

## text-align（文字の位置）
```css
text-align: left;    /* 左寄せ（デフォルト） */
text-align: center;  /* 中央寄せ */
text-align: right;   /* 右寄せ */
```

## CSSのデフォルト
何も指定しなければ文字は左寄せ。
ブラウザには最初から決まっているルールがある。

## プロパティとは
CSSの「設定項目」のこと。
`プロパティ : 値 ;` という形で書く。
例）`color: #1a6b3c;`