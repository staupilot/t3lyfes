// Aussagekräftige Fehlermeldungen erzeugen
config.contentObjectExceptionHandler = 0

// Page Objekt
page = PAGE

// Meta-Tags im Headbereich
page.meta {
    X-UA-Compatible = IE=edge
    X-UA-Compatible.httpEquivalent = 1

    viewport = width=device-width, initial-scale=1

    description.field = description
    description.ifEmpty = lyfes - gesund, leben, lernen

    author.field = author
    author.ifEmpty = Jens Friederich

    keywords.field = keywords
    keywords.ifEmpty = gesund,leben,lernen
}

// CSS einbinden
page.includeCSS {
    10 = EXT:lyfes_template/Resources/Public/css/style.min.css
    20 = EXT:lyfes_template/Resources/Public/css/lightbox.min.css
}

// JS Einbinden
page.includeJSFooterlibs
{
    10 = https://code.jquery.com/jquery-3.3.1.min.js
    10.external = 1
    10.disableCompression = 1
}
page.includeJSFooter {
    20 = EXT:lyfes_template/Resources/Public/js/bootstrap.js
    20.disbaleCompression = 1

    30 = EXT:lyfes_template/Resources/Public/js/main.js
    30.disableCompression = 1
    }

}

//Beginn Fluid Template
page.10 = FLUIDTEMPLATE
page.10 {
    layoutRootPath = EXT:lyfes_template/Resources/Private/Layouts/
    partialRootPath = EXT:lyfes_template/Resources/Private/Partials/

    file = EXT:lyfes_template/Resources/Private/Templates/Default.html

}