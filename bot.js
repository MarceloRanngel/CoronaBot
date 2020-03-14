const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);


const verifiedmediaparams = {
    q: 'Corona OR covid-19 OR coronavírus filter:verified filter:media',
    result_type: 'popular',
    count: 20,
    lang: 'pt'
}

const verifiedrecentparams = {
    q: 'Corona OR covid-19 OR coronavírus filter:verified filter:media',
    result_type: 'recent',
    count: 20,
    lang: 'pt'
}

const bolsonaroparams = {
    q: 'from:jairbolsonaro Corona OR covid-19 OR coronavírus filter:verified',
    result_type: 'popular',
    count: 50,
    lang: 'pt'
}

const bolsonarorecentparams = {
    q: 'from:jairbolsonaro Corona OR covid-19 OR coronavírus filter:verified',
    result_type: 'recent',
    count: 50,
    lang: 'pt'
}

const publicoparams = {
    q: 'Corona OR covid-19 OR coronavírus',
    result_type: 'recent',
    count: 90,
    lang: 'pt'
}

const minsauderecentparams = {
    q: 'from:minsaude Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' , 
    result_type: 'recent',
    count: 20,
    lang: 'pt'
}

const minsaudeparams = {
    q: 'from:minsaude Corona OR covid-19 OR coronavírus OR #Coronavírus filter:verified' ,
    result_type: 'popular',
    count: 20,
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

tweetBot.get('search/tweets', verifiedrecentparams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('statuses/retweet', tweetID, (err, res) => {
                if(!err){
                    console.log(`Conta Verificada Recent Retwwetado com Sucesso nº ` + (i + 1))
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

tweetBot.get('search/tweets', bolsonarorecentparams,  (err, data, res) => {
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

tweetBot.get('search/tweets', minsauderecentparams,  (err, data, res) => {
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

