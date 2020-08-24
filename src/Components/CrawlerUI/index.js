import React, { useState } from 'react'

const CrawlerUI = props => {

    const [urlList, setUrlList] = useState([])
    const [incidences, setIncidences] = useState([])
    const [defaultFilters, setDefaultFilters] = useState(true)

    const [waiting, setWaiting] = useState('')

    const ignoreDefault = ['de', 'dos', 'das', 'da', 'do', 'os', 'as', 'com', 'se', 'na', 'em', 'por', 'cada', 'ec', 'ac', 'ad', 'no']

    function parseUrlList(e) {
        setUrlList(
            e.target.value.split('\n')
        )
    }

    function mergeData() {
        const keysSet = new Set()
        incidences.forEach(inc => keysSet.add(inc.name))
        const keysArray = Array.from(keysSet)
        const newIncidences = keysArray.map(key => {
            const b = incidences.filter(a => a.name === key).map(a => a.incidences)
            const n = b.reduce((acc, next) => acc + next)
            return { name: key, incidences: n }
        })
        setIncidences(newIncidences)
    }

    function fetchData() {
        const apiURL = 'https://wordcrawler-api.herokuapp.com/get-occurrences'
        const urlToFetch = urlList.filter(domain => domain !== '')

        urlToFetch.forEach(url => {
            const msgBody = JSON.stringify({ url: url })
            const opts = {
                method: 'POST',
                mode: 'cors',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: msgBody
            }

            setWaiting(url)
            fetch(apiURL, opts)
                .then(res => res.json())
                .then(data => {
                    setIncidences(oldData => oldData.concat(data))
                })
                .then(_ => setWaiting(''))
        })
    }

    return (
        <div className="CrawlerUI">
            <div className="container">
                <div className="form-search">
                    <h1>Search for domains here</h1>
                    <span>e.g. https://www.google.com/</span>

                    <div className="form-holder">
                        <label htmlFor="domains">Domains (one per line)</label>
                        <textarea name="domains" id="domains" onChange={parseUrlList} value={urlList.join('\n')} />
                        <button className="button" onClick={fetchData}>Submit</button>
                    </div>
                </div>
                <div className="output">
                    <div className="box">
                        <h2>Occurrences</h2>
                        {incidences &&
                            <div className="table-holder">
                                <div className="table-controls">
                                    <button className="button" onClick={() => setDefaultFilters(!defaultFilters)}>Toggle filters</button>
                                    <button className="button" onClick={mergeData}>Merge data</button>
                                    <button className="button" onClick={() => setIncidences([])}>Clear Data</button>
                                </div>
                                <ul>
                                    <li className="table-head"><strong>Word</strong> <span>Occurrences</span></li>
                                    {incidences.filter(
                                        occ => defaultFilters
                                            ? occ.name.length > 1 && !ignoreDefault.includes(occ.name)
                                            : true
                                    ).map((occ, i) => (
                                        <li key={i}>
                                            <strong>{occ.name}</strong> <span>{occ.incidences}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        {waiting && <span>Crawling into {waiting}...</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrawlerUI