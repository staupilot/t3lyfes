lib.mainnav = HMENU
lib.mainnav {
    wrap = <ul class="nav navbar-nav pull-right">|</ul>

    1 = TMENU
    1 {
        expAll = 1

        NO = 1
        NO {
            wrapItemAndSub = <li>|</li>
            // Korrekte Darstellung von Sonderzeichen
            stdWrap.htmlSpecialChars = 1
            // Gibt dem <a> Element ein Title Attribut mit
            ATagTitle.field = description // subtitle // title
        }
    }
}