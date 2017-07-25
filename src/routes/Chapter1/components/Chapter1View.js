import React from 'react'
import './Chapter1View.scss'

class Chapter1View extends React.PureComponent {

  state = {
    value: '', // 当前输入的值
    msg: '' // 提示信息
  };

  handleChange = (event) => {
    this.setState({
      value: event
        .target
        .value
        .replace('，', ',')
    });
  }

  handleCheckout = () => {
    let isVerifyPassed = true;
    const arr = this
      .state
      .value
      .split(',');
    if (arr.length < 2) {
      this.setState({msg: '请输入长度大于1的数组'})
      return
    }

    arr.forEach(item => {
      if (!Number.isInteger(Number(item))) {
        isVerifyPassed = false;
        this.setState({msg: '请输入正确的数组'})
      }
    });
    if (isVerifyPassed) {

      // 从头到尾遍历数组，左边之和等于右边之和既有平衡位，时间复杂度是n^2 for (let i = 0; i < arr.length; i++) { let
      // left = 0;   for (let leftIndex = 0; leftIndex < i; leftIndex++) { left +=
      // Number(arr[leftIndex]);   } let right = 0;   for (let rightIndex = i + 1;
      // rightIndex < arr.length; rightIndex++) {     right +=
      // Number(arr[rightIndex]);   }   if (left == right) {     this.setState({msg:
      // `该数组的平衡位是：${i}`})     return   } }
      // 优化版本，计算左边的值和右边的值以后，移动时，左边的值等于原先左边的值+当前位置前一个位置的值，右边的值等于原先右边的值减去当前的位置的数字的值
      let left = 0,
        right = 0;
      for (let i = 1; i < arr.length; i++) {
        if (i == 1) {
          for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            left += Number(arr[leftIndex]);
          }
          for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
            right += Number(arr[rightIndex]);
          }
        } else {
          left += Number(arr[i - 1]);
          right -= arr[i];
        }

        if (left == right) {
          this.setState({msg: `该数组的平衡位: ${i}`})
          return
        }
      }

      this.setState({msg: '该数组没有平衡位'})
    }
  }

  render() {
    return (
      <div className="container">
        <h4>非凡教育面试题第一关,数组平衡位检测</h4>
        <p>请输入一组整数，用逗号隔开</p>
        <input
          type="text"
          style={{
          lineHeight: 1.5
        }}
          value={this.state.value}
          onChange={this.handleChange}/>
        <button onClick={this.handleCheckout} className="btn blue-btn">检测平衡位</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }

}

export default Chapter1View