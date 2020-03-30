import React, { Component } from 'react'
import { Title } from 'antd';

export default class About extends Component {
    render() {
        return (
            <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
            <h5>Github Link for Project</h5>
            <a href="https://github.com/anjalee-abenayaka/web-api-course-work"><h5>Github</h5></a>
            <h5>Created by BSc Computing 18.2</h5>
            </div>
        )
    }
}
