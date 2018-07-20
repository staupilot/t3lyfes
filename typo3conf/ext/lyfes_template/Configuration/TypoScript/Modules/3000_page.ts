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
page.includeJSFooterlibs {
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

//Beginn Fluid Template
page.10 = FLUIDTEMPLATE
page.10 {
    layoutRootPath = EXT:lyfes_template/Resources/Private/Layouts/
    partialRootPath = EXT:lyfes_template/Resources/Private/Partials/

    file = EXT:lyfes_template/Resources/Private/Templates/Default.html

    // Sammlung der Variablen
    variables {

        // Main-Content
        content0 = CONTENT
        content0 {
            table = tt_content
            select.where = colPos = 0
            select.orderBy = sorting
        }

        content1 < .content0
        content1.select.where = colPos = 1

        content3 < .content0
        content3.select.where = colPos = 3

        content2 < .content0
        content2.select.where = colPos = 2

        content4 < .content0
        content4.select.where = colPos = 4

        content5 < .content0
        content5.select.where = colPos = 5

        content6 < .content0
        content6.select.where = colPos = 6


        //Abfrage und ansprechen der Backendlayouts
        backendlayout = CASE
        backendlayout {
            key.data = pagelayout

            pagets__startseite = TEXT
            pagets__startseite.value = startseite

            pagets__ueber-uns = TEXT
            pagets__ueber-uns.value = ueber-uns

            default < .pagets__2spalten
        }

        siteTitle = TEXT
        siteTitle {
            value = {$siteTitle}
            stdWrap.typolink.parameter = t3://page?uid={$rootId}
            stdWrap.typolink.title = Zur Startseite
            wrap = <h2 class="navbar-brand">|</h2>
        }
    }

}