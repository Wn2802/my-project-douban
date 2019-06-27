import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul className="quick-nav">
                    <li>
                        <a href="/movie/nowintheater?loc_id=108288">影院热映</a>
                    </li>
                    <li>
                        <a href="/group/explore/beauty/">变瘦变美变漂亮</a>
                    </li>
                    <li>
                        <a id="hot-topics" href="https://m.douban.com/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</a>
                    </li>
                    <li>
                        <a href="https://www.douban.com/doubanapp/app?channel=card_home&direct_dl=1">使用豆瓣App</a>
                    </li>
                </ul>

            </div>
        )
    }
}
