import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewHeight: 0,
    };
    this.onLayoutView = this.onLayoutView.bind(this);
  }

  onLayoutView(event) {
    const viewHeight = event.nativeEvent.layout.height;
    this.setState({viewHeight});
  }

  render() {
    const {width} = Dimensions.get('window');

    const {viewHeight} = this.state;
    const borderRadius = Math.floor(width / 4);
    const w = borderRadius * 2;
    const top = Math.floor(viewHeight / 2 - borderRadius);
    const left = Math.floor(width / 2 - borderRadius);
    const marginTopBox = borderRadius + 50;

    return (
      <View style={{flex: 1, flexDirection: 'column'}}onLayout={this.onLayoutView}>
        <View style={{flex: 1, backgroundColor:"#000080"}} />
        <View style={{flex: 1, backgroundColor: '#f2f2f2', flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 10,
              margin: 20,
              marginTop: marginTopBox,
            }}>
            <Text> BOX1</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 10,
              margin: 20,
              marginTop: marginTopBox,
            }}>
            <Text> BOX2</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.floatingButtonBig,
            width: w,
            height: w,
            borderRadius,
            top,
            left,
            flexDirection: 'column',
}}>
          <View style={{...styles.item, flex: 2}}>
            <Text>test</Text>
          </View>
          <View style={{...styles.item, flex: 1, justifyContent: 'flex-start'}}>
            <Text>test</Text>
          </View>
        </View>
      </View>
    );
  }

  render1() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  floatingButtonBig: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0,
    backgroundColor: 'white',
  },
  floatingMenu: {
    position: 'absolute',
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    bottom: 0,
    backgroundColor: '#3780ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
