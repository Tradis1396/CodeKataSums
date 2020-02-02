function string(str) {
    var newstr = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element.toLowerCase() == element){
            newstr += element.toUpperCase();
        }
        else{
            newstr += element.toLowerCase();
        }
    }
    console.log(newstr);
}
string("ASFDvc")