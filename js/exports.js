function exportCSV(){
    // console.log(item_id, username);
    var api = 'http://localhost/php/exportAPI.php?operation=exportCSV';
    location.replace(api);
    // fetch(api)
    //     .then(result => result.text())
    //     .then(data => {
    //         // console.log(location.href.includes("index.html"));
    //         // console.log(data['responseCode']);
    //         // if(data['responseCode'] == 200){
    //         console.log("export succesfully");
            
    //         // console.log(data['results'])
    //         // data['results'].forEach(element => {
    //         //     element[0] = type(element[0]);
    //         // });
    //         // // one line csv |
    //         // //              |
    //         // //              v
    //         // let csvContent = "Type, Category, Description, Country, Name, Price \n" + data['results'].map(e => e.join(",")).join("\n");
    //         // // var encodedUri = encodeURI(data['results']);
    //         // // window.open(encodedUri);
    //         // console.log(csvContent);

    //         // exportCSVFile(csvContent,"ok");
    //         // }
    //         // else alert("Unkown error occured!");
    
    //     });

}

// function exportCSVFile(csv, fileTitle) {
    
//     // Convert Object to JSON
//     // var jsonObject = JSON.stringify(items);

    

//     var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

//     var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     if (navigator.msSaveBlob) { // IE 10+
//         navigator.msSaveBlob(blob, exportedFilenmae);
//     } else {
//         var link = document.createElement("a");
//         if (link.download !== undefined) { // feature detection
//             // Browsers that support HTML5 download attribute
//             var url = URL.createObjectURL(blob);
//             link.setAttribute("href", url);
//             link.setAttribute("download", exportedFilenmae);
//             link.style.visibility = 'hidden';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         }
//     }
// }

function exportDocBook(){
    // console.log(item_id, username);
    var api = 'http://localhost/php/exportAPI.php?operation=exportDocBook';
    location.replace(api);


        

}
function OBJtoXML(obj) {
    var xml = '';
    for (var prop in obj) {
      xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
      if (obj[prop] instanceof Array) {
        for (var array in obj[prop]) {
          xml += "<" + prop + ">";
          xml += OBJtoXML(new Object(obj[prop][array]));
          xml += "</" + prop + ">";
        }
      } else if (typeof obj[prop] == "object") {
        xml += OBJtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml;
  }
  function type(a) {
    if (a == 1)
        return "Alcoholic";

    else if (a == 2)
        return "Non-Alcoholic";
    return "";
}


var endScopeObj = {};
window.obj2xml = function (obj, opt) {
    if (!opt) opt = {};
    var rootName = opt.rootName || 'root';
    var declaration = opt.declaration === 'auto' ? '<?xml version="1.0" encoding="utf-8"?>' : opt.declaration;
    var indentation = opt.indentation || 0;
    var generateDtd = (opt.doctype === 'auto' || opt.doctype === 'generate') && declaration;
    var useAttributes = opt.attributes === false ? false : true;
    var scope_indent = 0;
    if (generateDtd) {
        var dtdAttr = {};
        var dtdElem = {};
    }
    var ret = [];
    var tagContent, isArr, curs, _t, _ti, key, innerKey, name, queue = [obj, rootName];
    while (queue.length > 0) {
        name = queue.pop();
        curs = queue.pop();
        if (generateDtd)
            dtdElem[name] = dtdElem[name] || {};
        if (curs === endScopeObj) {
            scope_indent--;
            if (indentation > 0) ret.push('\n', ' '.repeat(indentation * scope_indent));
            ret.push('</', name, '>');
            continue;
        }
        if (typeof curs === 'object') {
            queue.push(endScopeObj);
            queue.push(name);
            tagContent = [name];
            isArr = Array.isArray(curs);
            if (isArr && generateDtd) {
                dtdElem[name][name + 'Item*'] = true;
            }
            for (key in curs) {
                if (curs.hasOwnProperty(key)) {
                    if (isArr) {
                        queue.push(curs[key]);
                        queue.push(name + 'Item');
                    } else if (typeof curs[key] == 'object' || useAttributes === false) {
                        queue.push(curs[key]);
                        queue.push(key);
                        if (generateDtd)
                            dtdElem[name][key] = true;
                    } else {
                        if (generateDtd) {
                            dtdAttr[name] = dtdAttr[name] || {};
                            dtdAttr[name][key] = true;
                        }
                        tagContent.push(key + '=' + '"' + curs[key] + '"');
                    }
                }
            }
            if (indentation > 0) ret.push('\n', ' '.repeat(indentation * scope_indent));
            ret.push('<', tagContent.join(' '), '>');
            scope_indent++;
        } else {
            if (generateDtd)
                dtdElem[name]['#PCDATA'] = true;
            if (indentation > 0) ret.push('\n', ' '.repeat(indentation * scope_indent));
            ret.push('<');
            ret.push(name);
            ret.push('>');
            ret.push(curs);
            ret.push('</');
            ret.push(name);
            ret.push('>');
        }
    }
    if (generateDtd) {
        var dtd = ['<!DOCTYPE ', rootName, ' ['];
        for (key in dtdAttr) {
            if (dtdAttr.hasOwnProperty(key)) {
                for (innerKey in dtdAttr[key]) {
                    if (dtdAttr[key].hasOwnProperty(innerKey)) {
                        if (indentation > 0) dtd.push('\n');
                        dtd.push('<!ATTLIST ', key, ' ', innerKey, ' CDATA #IMPLIED>');
                    }
                }
            }
        }
        for (key in dtdElem) {
            if (dtdElem.hasOwnProperty(key)) {
                innerKey = null;
                _t = ['<!ELEMENT ', key, ' ('];
                _ti = [];
                for (innerKey in dtdElem[key]) {
                    if (dtdElem[key].hasOwnProperty(innerKey)) {
                        _ti.push(innerKey);
                    }
                }
                if (indentation > 0) dtd.push('\n');
                if (innerKey === null) // no children
                    dtd.push('<!ELEMENT ', key, ' EMPTY>');
                else {
                    _t.push(_ti.join(', '));
                    _t.push(')>');
                    dtd.push.apply(dtd, _t);
                }
            }
        }
        dtd.push(']>');
        ret.unshift.apply(ret, dtd);
    } else if (declaration)
        ret.unshift(opt.doctype ? opt.doctype : '<!DOCTYPE ' + rootName + '>');
    if (declaration) ret.unshift(declaration);
    return ret.join('');
};