function lengthOfLastWord(text) {
    const words = text.trim().split(" ");
    return words[words.length - 1].length;
}