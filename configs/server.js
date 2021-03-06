//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000],
    sparqlEndpoint: {
        'generic': {
            host: 'localhost', port: 8890, path: '/sparql', type: 'virtuoso'
        },
        //added a new endpoint
         'http://localhost:5820/art/query': {
            host: 'localhost', port: 5820, path: '/art/query', useDefaultGraph: 1, type: 'sesame', useReasoning:1
        },

    },
    dbpediaLookupService: [
        { host: 'lookup.dbpedia.org' }
    ]
};
