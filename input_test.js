let reader= new FileReader();

function load_file(){
    let files = document.getElementById('myfile').files;
    let file=files[0];
    reader.addEventListener('loadend', print_file);
    reader.readAsArrayBuffer(file);
}

function print_file(e){
    let result=reader.result;
    const uint8_view = new Uint8Array(result);

    FS.writeFile('write_test.txt', uint8_view)
    Module.ccall('file_uploaded', 'number', ['string'], ['write_test.txt'])
}
