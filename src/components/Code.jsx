import axios from 'axios';
import React from 'react'
import { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Code() {

    const [codes, setCodes] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const result = await axios.get(`/api/codes`)
        setCodes(result.data)
    }

    const stringToChanks = (string, chunkSize) => {
        const chunks = [];
        while (string.length > 0) {
            chunks.push(string.substring(0, chunkSize));
            string = string.substring(chunkSize, string.length);
        }
        return chunks
    }
    let chSz = 72;
    return (
        <>
            {codes.length !== 0 && codes.map(c => (
                <div key={c._id} style={{ marginBottom: '50px' }}>
                    {c.src.split(/\n/).map((l, i) => (
                        <Fragment key={i}>
                            {stringToChanks(l, chSz).length < 2 ? (
                                <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', display: 'flex', fontSize: '16px' }}>
                                    <span style={{ width: '30px', marginRight: '5px', color: '#b8b8b8' }}>{i + 1}</span>
                                    <span style={{ borderBottom: '1px solid #b8b8b8', flexGrow: 1 }}>{l}</span>
                                </div>

                            ) :
                                stringToChanks(l, chSz).map((vl, iv) => (
                                    <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', display: 'flex', fontSize: '16px' }}>
                                        <span style={{ width: '30px', marginRight: '5px', color: '#b8b8b8' }}>{iv === 0 ? i + 1 : ''}</span>
                                        <span style={{ borderBottom: '1px solid #b8b8b8', flexGrow: 1 }}>{vl}</span>
                                    </div>
                                ))
                            }
                        </Fragment>
                    ))}

                </div>
            ))}
        </>
    )
}
