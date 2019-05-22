import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

let display = Dimensions.get('window'),
  { width, height } = display,
  elemWidth, elemHeight;

if (width < height) {
  elemWidth = width;
  elemHeight = width;
} else {
  elemWidth = height;
  elemHeight = height;
}
elemWidth = elemWidth / 10 * 9;
elemHeight = elemHeight / 10 * 9;

const btnWidth = elemWidth / 3;
const btnHeight = elemHeight / 3;

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.arr = ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'];
    this.state = {
      currentPosition: [0, 0, 0, 0],
      currentArr: this.arr,
      userPick: false,
    }
  }

  createRandomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  nextSteep = () => {
    let { currentPosition, userPick } = this.state;
    if (currentPosition[0] == currentPosition[3] && !userPick) {
      console.log('Вы пропустили совпадение')
    } else if (currentPosition[0] == currentPosition[3] && userPick) {
      console.log('Вы отметили совпадение')
    }

    const randomNumber = this.createRandomInteger(1, 9);
    const newArr = this.arr.slice(0);
    newArr[randomNumber - 1] = '#666';

    this.setState({
      userPick: false,
      currentPosition: [randomNumber, currentPosition[0], currentPosition[1], currentPosition[2]],
      currentArr: newArr,
    }, () => {
      setTimeout(() => {
        newArr[randomNumber - 1] = '#FFF';
        this.setState({ currentArr: newArr })
      }, 1000);
    })

  }

  runGame = () => {
    this.nextSteep();
    setInterval(() => {
      this.nextSteep()
    }, 3000);
  }

  componentDidMount() {
    this.runGame();
  }

  checkPosition = (index) => {
    const currentPosition = this.state.currentPosition[3];
    if (currentPosition == index + 1) {
      console.log('coвпало');
    } else {
      console.log('вы ошиблись')
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.blockStyle}>
          {this.state.currentArr.map((color, index) => {
            return <TouchableOpacity key={index} onPress={() => { this.checkPosition(index) }} style={[styles.btn, { backgroundColor: color }]} />
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockStyle: {
    width: elemWidth,
    height: elemHeight,
    backgroundColor: '#000',
    borderRadius: 3,
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  btn: {
    width: btnWidth,
    height: btnHeight,
    borderWidth: 1,
    borderColor: '#000'
  },
})
export default App;