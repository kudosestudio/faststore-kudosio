
module.exports = {
    seo: {
        "title": "FastStoreKudos",
        "description": "A fast and performant store framework",
        "titleTemplate": "%s | FastStoreKudos",
        "author": "Kudos"
    },

    // Theming
    theme: 'custom-theme',

    // Ecommerce Platform
    platform: 'vtex',

    // Platform specific configs for API
    api: {
        storeId: "kudosio",
        workspace: 'master',
        environment: 'vtexcommercestable',
        hideUnavailableItems: false,
        incrementAddress: false,
    },

    // Default session
    session: {
        currency: {
            code: "ARS",
            symbol: "$",
        },
        locale: "es-AR",
        channel: '{"salesChannel":1,"regionId":""}',
        country: "ARG",
        deliveryMode: null,
        addressType: null,
        postalCode: null,
        geoCoordinates: null,
        person: null,
    },

    cart: {
        id: '',
        items: [],
        messages: [],
        shouldSplitItem: true,
    },

    // Production URLs
    storeUrl: "https://kudosio.b.vtex.app/",
    secureSubdomain: "https://secure.vtexfaststore.com/",
    checkoutUrl: "https://secure.vtexfaststore.com/checkout",
    loginUrl: "https://secure.vtexfaststore.com/api/io/login",
    accountUrl: "https://secure.vtexfaststore.com/api/io/account",

    previewRedirects: {
        home: '/',
        plp: "/departamento%20alpinestars",
        search: "/s?q=MARCA%20PRUEBA",
        pdp: "/remera-prueba-abc123/p",
    },

    // Lighthouse CI
    lighthouse: {
        server: process.env.BASE_SITE_URL || 'http://localhost:3000',
        pages: {
            home: '/',
            pdp: "/remera-prueba-abc123/p",
            collection: "/departamento%20alpinestars",
        },
    },

    // E2E CI
    cypress: {
        pages: {
            home: '/',
            pdp: "/remera-prueba-abc123/p",
            collection: "/departamento%20alpinestars",
            collection_filtered: "/departamento%20alpinestars/?category-1=departamento%20alpinestars&brand=MARCA%20PRUEBA&facets=category-1%2Cbrand%27",
            search: "/s?q=MARCA%20PRUEBA",
        },
        browser: 'electron',
    },

    analytics: {
        // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
        gtmContainerId: "GTM-1234567",
    },

    experimental: {
        nodeVersion: 18,
        cypressVersion: 12,
    },

    vtexHeadlessCms: {
        webhookUrls: [
            "https://kudosio.myvtex.com/cms-releases/webhook-releases",
        ],
    },
}
