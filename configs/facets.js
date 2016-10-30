export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        //adding facets for dbpedia
        'http://localhost:5820/art/query': {
            list: ['http://dbpedia.org/ontology/movement', 'http://purl.org/dc/elements/1.1/creator','http://dbpedia.org/property/museum', 'http://dbpedia.org/property/artist'],
            config: {

            }
        },

    }
};
