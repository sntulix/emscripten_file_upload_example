# emscripten file upload example

[エムスクリプテン](https://emscripten.org)はブラウザで動くソフトウェアを開発するツール。  
"[Emscripten](https://emscripten.org)" is Tool making the software Working on browser.

この見本はテキストファイルをアップロードフォームから読み、ブラウザに表示します。  
This example load a text file from upload form, and show file content.

コンパイル
compile

```
EMCC_DEBUG=1 emcc print_input.cpp -o auto_em.js -s "EXPORT_ALL=1" -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -s FORCE_FILESYSTEM=1
```

見本サイト example working site: https://sntulix.github.io/emscripten_file_upload_example/

参考スレッド reference thread: https://stackoverflow.com/questions/61496876/how-can-i-load-a-file-from-a-html-input-into-emscriptens-memfs-file-system
