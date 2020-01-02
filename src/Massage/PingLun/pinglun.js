import React from 'react';
import { Comment, Avatar, Form, Button, List, Input,message } from 'antd';
import moment from 'moment';
import Axios from 'axios';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>

    
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button onClick={onSubmit}>点击评论</Button>
    </Form.Item>
  </div>
);

export default class Pinglun extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }
    console.log(this.state.value)
    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
    let data = {
      "": this.state.value,
      
    }

    Axios.post("/user/communicate", {
      data: JSON.stringify(data)
    }).then(result => {
      if (result.state == -1) {
        message.warn("待修改密码为空")
      } else if (result.state == 1) {
        message.success("密码修改成功")
      } else {
        message.error('密码修改失败')
      }
    })
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              style={{ backgroundColor: '#87d068' }} icon="user"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}