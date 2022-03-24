# frontend-boilerplate-vite


## :dolphin: Requirements
------
`Node.js`と`yarn`は下記のバージョンで確認済みです。


| 名前 | バージョン    |
| ---- |----------|
| Node.js | v16.13.0 |
| Yarn | v1.22.17 |


## :fish: Install

First, clone the repo via git:

```bash
git@github.com:userName/frontend-boilerplate-vite.git
```

### Install yarn

`npm script`で`yarn`を使用するので、yarnをインストールしてください。

https://classic.yarnpkg.com/ja/docs/install/


**for mac**

```bash
$ brew install yarn
```

**for windows**

```sh
# for Windows (with Chocolatey)
$ choco install yarn
```

[Use installer](https://yarnpkg.com/lang/en/docs/install/#windows-tab)

### Install dependencies

Using yarn:

```bash
yarn install
```

### husky setting

`yarn install`で依存ライブラリをインストールすると自動的に`husky`が設定されます。 コミット時に`ESLint` / `stylelint` / `Prettier`を実行されます。
※ZIPでダウンロードした時など、ローカルリポジトリでない場合はエラーになります。

正常に実行されると、`.config`がプロジェクト内に作られます。
作られない場合、`node_modules`を削除後、再度 `yarn install`を実行してください。

下記のエラーが出た場合は[記事](https://qiita.com/nyamogera/items/9a34a0245c042b6f29c6)
を参考にgitのツールを修正してください。

```sh
.git/hooks/pre-commit: line 49: node: command not found
```

## :shell: Command
------

### dev

開発サーバーを立ち上げて、各種ファイルをコンパイルをします。


```bash
yarn dev
```

### build
サーバアップ用のファイルをoutディレクトリに出力します。

```bash
yarn build
```

### preview
buildしたファイルを確認します。

```bash
yarn preview
```

### lint

`Prettier`と`ESLint`を実行します。

```bash
yarn lint
```