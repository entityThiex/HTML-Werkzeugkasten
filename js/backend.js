let data = {}
let files = {}
let defaultFormScript = {}

function createHTMLFromJson(){
    let fields = data["form"]["fields"];
    let html = new htmlObject();
    fields.forEach(html.append());
}

function saveSpecificationsAsJson(){

}

function createZip(json, files){

}

function loadFile(){

}

function createHTML(){

}

class htmlObject{
    htmlText = "";
    blob;

    constructor(){

    }

    append(jsonHtml){
        this.htmlText+=jsonHtml;
        return this;
    }

    download(){
        this.blob = new Blob(this.htmlText, )
    }
}