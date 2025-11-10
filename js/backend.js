let data = {
    "form": {
        "fields": [],
        "scripts": []
    },
    "eval": {
        "fields": [],
        "scripts": []
    }
}

let defaultData = {
    "form": {
        "fields": [],
        "scripts": []
    },
    "eval": {
        "fields": [],
        "scripts": []
    }
}


function createFormFromJson(){
    return createHTMLFromJson("form");
}

function createEvalFromJson(){
    return createHTMLFromJson("eval");
}

function createHTMLFromJson(type){
    let fields = this.defaultData[type]["fields"].concat(data[type]["fields"]);
    let html = new HtmlObj();
    fields.forEach(html.append());

    let scripts = this.defaultData[type]["scripts"].concat(data[type]["scripts"]);
    scripts.forEach(html.append());

    return html;
}

function saveSpecificationsAsJson(){
    let jsonSpecs = new JsonObj(this.data);
    return jsonSpecs.getDownloadFile();
}

function saveForm(){
    let htmlForm = createFormFromJson();
    return htmlForm.getDownloadFile();
}

function saveEval(){
    let htmlEval = createEvalFromJson();
    return htmlEval.getDownloadFile();
}

function createZip(json, files){

}

function loadFile(){

}

class Obj{
    blob;
    fileURL;
    link;

    constructor() {

    }

    getDownloadFile(data, type){ // TODO if there is a better option
        return new Blob([data], {type: ''});
    }

    getContent(){}
}

class HtmlObj extends Obj{
    htmlText = "";

    constructor(html = ""){
        super();
        this.htmlText = html;
    }

    append(jsonHtml){
        if(jsonHtml instanceof JSON && jsonHtml.has("html"));
            this.htmlText+=jsonHtml["html"];
        return this;
    }

    getDownloadFile() {
        super.getDownloadFile(this.htmlText, 'text/html');
    }

    getContent() {
        return this.htmlText;
    }
}

class JsonObj extends Obj{
    json = {}
    constructor(json) {
        super();
        this.json = json;
    }

    getDownloadFile() {
        super.getDownloadFile(this.json, 'application/json');
    }

    getContent() {
        return this.json;
    }
}