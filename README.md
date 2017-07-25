# 非凡教育笔试题

最近在找前端开发的工作，投了非凡教育之后，面试官给我发来了笔试题，是闯关制的，要求用react实现，于是我就搭一个脚手架吧，做以后的关卡也比较方便。

# 使用

clone到本地：
```
git clone https://github.com/weihomechen/front-end-interview-question.git
```
切换或打开这个项目，安装依赖：
```
npm i
# 如果不能科学上网，请使用淘宝源
# npm install --registry=https://registry.npm.taobao.org 
```
在本地运行：
```
npm start
```
更多详细命令请查看`package.json`。


## 题目

### 第一题：寻找整数数组的平衡位

```
给定一个整数数组，数组的“平衡位”是这样的位置： 它左边所有的数字之和===右边所有数字之和。

 例如
arr = [1，2，3，0，6] 
这个数组中， 0所在的位置是“平衡位”， 因为左边数字之和 1+2+3=6
右边数字之和6=6
0所在的位置下标为3, 亦即， arr[3] === 0

请用react写一个小app， 界面上允许输入一个数组， 点击按钮后， 显示“平衡位”的下标。
如果平衡位不存在， 就显示-1.
```
看到这题，我的第一个想法就是从头到尾遍历数组，左边之和等于右边之和即有平衡位：
```
let left = 0;
for (let leftIndex = 0; leftIndex < i; leftIndex++) {
  left += Number(arr[leftIndex]);
}
let right = 0;
for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
  right += Number(arr[rightIndex]);
}
if (left == right) {
  this.setState({msg: `该数组的平衡位是：${i}`})；
  return；
}
```

这样的话，时间复杂度是n^2，因为题目有问是否能优化，稍微优化了一下：
```
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
    this.setState({msg: `该数组的平衡位: ${i}`});
        return
  }
}
this.setState({msg: '该数组没有平衡位'});
```

计算左边的值和右边的值以后，移动时，左边的值等于原先左边的值+当前位置前一个位置的值，右边的值等于原先右边的值减去当前的位置的数字的值。

PS: 希望有后续，不然就为了做一题就搭一个脚手架也真是夸大了，哈哈哈哈
