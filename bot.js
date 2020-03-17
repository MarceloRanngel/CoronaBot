const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);


const verifiedmediaparams = {
    q: 'Corona OR covid-19 OR coronavírus filter:verified filter:media',
    result_type: 'mixed',
    count: 20,
    lang: 'pt'
}

const bolsonaroparams = {
    q: 'from:jairbolsonaro Corona OR covid-19 OR coronavírus filter:verified',
    result_type: 'mixed',
    count: 50,
    lang: 'pt'
}

const publicoparams = {
    q: 'Corona OR covid-19 OR coronavírus',
    result_type: 'mixed',
    count: 100,
    lang: 'pt'
}

const minsaudeparams = {
    q: 'from:minsaude Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'mixed',
    count: 60,
    lang: 'pt'
}

const mineconparams = {
    q: 'from:mineconomia Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'mixed',
    count: 60,
    lang: 'pt'
}

const mcticparams = {
    q: 'from:mctic Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'mixed',
    count: 60,
    lang: 'pt'
}

const secomvcparams = {
    q: 'from:secomvc Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'mixed',
    count: 60,
    lang: 'pt'
}

const tvbrasilgovparams = {
    q: 'from:tvbrasilgov Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'mixed',
    count: 60,
    lang: 'pt'
}

const govbrparams = {
    q: 'from:govbr Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'mixed',
    count: 60,
    lang: 'pt'
}

const GloboNewsparams = {
    q: 'from:GloboNews Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'mixed',
    count: 60,
    lang: 'pt'
}

const urlgoneparams = {
    q: 'Corona OR covid-19 OR coronavírus OR #Coronavírus url:g1' ,
    result_type: 'mixed',
    count: 100,
    lang: 'pt'
}


tweetBot.get('search/tweets', verifiedmediaparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Conta Verificada Retwwetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Conta Verificada Curtida com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', bolsonaroparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Bolsonaro Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Bolsonaro Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', minsaudeparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Ministerio da Saude Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Ministerio da Saude Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', publicoparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Publico Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', mineconparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Ministerio da Economia Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Ministerio da Economia Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', mcticparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Ministerio da Ciencia Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Ministerio da Ciencia Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', secomvcparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Secretaria de Comunicação Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Secretaria de Comunicação Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', tvbrasilgovparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`TV Brasil Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`TV Brasil Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', govbrparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Governo Brasileiro Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Governo Brasileiro Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', GloboNewsparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Globo News Retweetado com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Globo News Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})

tweetBot.get('search/tweets', urlgoneparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`URL G1 Curtido com Sucesso nº ` + i)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})