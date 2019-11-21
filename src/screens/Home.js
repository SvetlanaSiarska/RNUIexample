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
      <View
        style={{flex: 1, flexDirection: 'column'}}
        onLayout={this.onLayoutView}>
        <View style={{flex: 1, backgroundColor: '#000080'}} />
        <View
          style={{flex: 1, backgroundColor: '#f2f2f2', flexDirection: 'row'}}>
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
            <View style={styles.magnifyingGlass}>
              <View style={styles.magnifyingGlassCircle} />
              <View style={styles.crossUp} />
              <View style={styles.crossFlat} />
            </View>
          </View>
          <View style={{...styles.item, flex: 1, justifyContent:'flex-start'}}>
            <Text>Create video</Text>
          </View>
        </View>
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
    //borderWidth: 1,
    //borderColor: 'black',
  },
  magnifyingGlass: {
    //marginLeft: -90,
    //marginTop: -20,
  },
  magnifyingGlassCircle: {
    //width: 18,
    //height: 18,
    // borderRadius: 9,
    //borderWidth: 2,
    //borderColor: '#3780ff',
  },

  crossUp: {
    backgroundColor: '#9999ff',
    height: 56,
    width: 12,
    position: 'absolute',
    left: -6,
    top: 0,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  crossFlat: {
    backgroundColor: '#9999ff',
    height: 12,
    width: 56,
    position: 'absolute',
    left: -28,
    top: 22,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
});
