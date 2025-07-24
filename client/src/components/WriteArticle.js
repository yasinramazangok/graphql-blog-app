import React, {useState} from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const WRITE_ARTICLE = gql`
    mutation writeArticle($title: String!, $content: String!) {
        writeArticle(title: $title, content: $content) {
            id,
            title,
            content
    }
}`

export default function WriteArticle(){

    const [data, setData] = useState({
        title: '',
        content: '',
    });

    const [writeArticle, {loading}] = useMutation(WRITE_ARTICLE, {
        update(proxy, result) {
            console.log(result);
        },
        variables:data,
    });

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(data);
        writeArticle();
        window.location = '/'; // Redirect to home after submission
    };

    return(
        <div className="write-article" >
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Makale Başlığı : </label>
                <input type='text' name='title' id='title' onChange={onChange} />
                <label htmlFor='content'>Makale İçeriği : </label>
                <textarea type='text' name='content' id='content' onChange={onChange}></textarea>
                <button>Ekle</button>
            </form>
        </div>
    )
}