
import ReactDOM from 'react-dom';
import React,{Component } from 'react'
import Head from '../../compoents/Header'
import Nav from './Nav'
import Recommend from './Recommend'
import './App.scss'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Head/>
                <div className="page">
                <div className="card">
                    <Nav/>
                    <Recommend/>
                    </div>
                </div>
                
            </div>
        )
    }
}
