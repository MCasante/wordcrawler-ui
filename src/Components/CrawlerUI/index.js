import React, { useState } from 'react'

const CrawlerUI = props => {

    const [urlList, setUrlList] = useState([])

    const [content, setContent] = useState('')
    const [keys, setKeys] = useState([])
    const [occurrences, setOccurrences] = useState([])

    function parseUrlList(e) {
        setUrlList(e.target.value.split('\n'))
    }



    return (
        <div className="CrawlerUI">
            <div className="container">
                <div className="form-search">
                    <textarea onChange={parseUrlList} value={urlList.join('\n')} />
                    <button>Submit</button>
                </div>
                <div className="output">
                    <div className="box">
                        <strong>Full Output</strong>
                        <p>{content}</p>
                    </div>
                    <div className="box">
                        <strong>Keys</strong>
                        {keys}
                    </div>
                    <div className="box">
                        <strong>Occurrences</strong>
                        {occurrences}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrawlerUI