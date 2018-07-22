lib.logo = IMAGE
lib.logo {
    file = EXT:lyfes_template/Resources/Public/img/lyfes-logo_small.png
  #file.width = 200
  #file.height =
        altText = zur Startseite
    stdWrap.typolink {
        parameter = t3://page?uid={$rootId}
        title = zur Startseite
    }
    wrap = <h2 class="navbar-brand">|</h2>
}