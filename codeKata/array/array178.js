function array(str, k) {
    for (let i = k - 1; i < str.length; i += k) {
        const element = str[i];
        console.log(element);

    }

}
array("string", 3);