function toMC(HEX) {
    if (HEX.slice(0, 1) == "#") HEX = HEX.slice(1);

    //-----3文字の場合 6文字に変換------//
    if (HEX.length == 3)
        HEX =
            HEX.slice(0, 1) +
            HEX.slice(0, 1) +
            HEX.slice(1, 2) +
            HEX.slice(1, 2) +
            HEX.slice(2, 3) +
            HEX.slice(2, 3);
    //-----3文字の場合 6文字に変換------//

    return "§x" + Array.from(HEX, data => "§" + data).join("");
}

function toHEX(MC) {
    MC = MC.replace(/§|x/g, "");

    //-----3文字にできる場合 3文字に変換-----//
    if (
        MC.slice(0, 1) == MC.slice(1, 2) &&
        MC.slice(2, 3) == MC.slice(3, 4) &&
        MC.slice(4, 5) == MC.slice(5, 6)
    ) MC = MC.slice(0, 1) + MC.slice(2, 3) + MC.slice(4, 5);
    //-----3文字にできる場合 3文字に変換-----//

    return "#" + MC;
}