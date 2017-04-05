let Util = {
    replaceSpecialChars(str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");

        return str.replace(/[^a-z0-9]/gi, '');
    },
    messageContainOption(sentText, option) {
        return (this.replaceSpecialChars(sentText).toUpperCase()).includes(option.toUpperCase());
    }
}

export default Util;