function array(str, k) {
    for (let i = k - 1; i < str.length; i += k) {
        const element = str[i];
        str = str.replace(str[i], element.toUpperCase());
    }
    console.log(str);

}
array("string", 2);