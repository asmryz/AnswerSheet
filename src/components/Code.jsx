import axios from 'axios';
import React from 'react'
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

    return (
        <>
            {codes.length !== 0 && codes.map(c => (
                <div key={c._id} style={{ marginBottom: '50px' }}>
                    {c.src.split(/\n/).map((l, i) => (
                        <div key={i} style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', display: 'flex', fontSize: '16px' }}>
                            <span style={{ marginRight: '15px' }}>{i + 1}</span>
                            <span style={{ borderBottom: '1px solid #b8b8b8', flexGrow: 1 }}>{l}</span>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}
