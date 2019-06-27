import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div id="TalionNav">
                    <header className="TalionNav">
                        <div className="TalionNav-primary"><a href="/" className="logo"><h1>豆瓣</h1></a>
                            <nav><span className /><a href="https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F" className="openapp" id="topnav-openapp">打开豆瓣App</a>
                            </nav>
                        </div>
                        <div className="TalionNav-secondary"><a className="close-nav" href="javascript:;">关闭</a>
                            <form action="/search" method="GET">
                                <div>
                                    <input name="query" type="search" />
                                </div>
                            </form>
                            <ul>
                                <li>
                                    <div><a href="/movie" target="_blank"><strong style={{ color: 'rgb(35, 132, 232)' }}>电影</strong><span>影院热映</span></a><a href="https://douban.com/location" target><strong style={{ color: 'rgb(230, 70, 126)' }}>同城</strong><span>周末活动</span></a>
                                        <a href="https://read.douban.com" target><strong style={{ color: 'rgb(159, 120, 96)' }}>阅读</strong><span>电子书</span>
                                        </a><a href="/status" target="_blank"><strong style={{ color: 'rgb(225, 100, 77)' }}>广播</strong><span>友邻动态</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div><a href="/tv" target="_blank"><strong style={{ color: 'rgb(122, 106, 219)' }}>电视</strong><span>正在热播</span></a><a href="/group" target="_blank"><strong style={{ color: 'rgb(42, 184, 204)' }}>小组</strong><span>志趣相投</span></a>
                                        <a href="/game" target="_blank"><strong style={{ color: 'rgb(87, 116, 197)' }}>游戏</strong><span>虚拟世界</span>
                                        </a><a href="https://douban.fm" target><strong style={{ color: 'rgb(64, 207, 169)' }}>FM</strong><span>红心歌单</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div><a href="/book" target="_blank"><strong style={{ color: 'rgb(159, 120, 96)' }}>图书</strong><span>畅销排行</span></a><a href="/music" target="_blank"><strong style={{ color: 'rgb(244, 143, 46)' }}>音乐</strong><span>新碟榜</span></a><a href="/mobileapp" target="_blank"><strong style={{ color: 'rgb(89, 108, 221)' }}>应用</strong><span>玩手机</span></a>
                                        <a href="https://market.douban.com/?utm_campaign=mobile_web_douban_nav&utm_source=douban&utm_medium=mobile_web" target><strong style={{ color: 'rgb(66, 189, 86)' }}>豆品</strong><span>生活美学</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <div className="navBottom">
                                <div className="nav-item"><a className="toLogin" href="http://accounts.douban.com/passport/login?redir=https://m.douban.com/">登录豆瓣</a>
                                </div>
                                <div className="nav-item"><a className="toPC" href="/to_pc/?url=https%3A%2F%2Fm.douban.com%2F">使用桌面版</a><a href="https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2F" className="toApp">使用豆瓣App</a>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

            </div>
        )
    }
}
