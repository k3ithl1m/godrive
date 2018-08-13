import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {GDText} from 'godrive-ui';
import DatePicker from 'react-native-datepicker';

const SCREEN_WIDTH = Dimensions.get("window").width;

class InfoSection extends Component {

  _renderChildren() {
    const {
      datePicker,
      children,
      onDateChange,
      date,
    } = this.props;

    if (datePicker) {
      return (
        <DatePicker
          TouchableComponent = {TouchableOpacity}
          date = {date}
          format="M-D-YYYY"
          showIcon = {false}
          confirmBtnText = "Confirm"
          cancelBtnText = "Cancel"
          customStyles={{
            dateTouchBody: {
              height: null
            },
            placeholderText: {
              fontFamily: "Montserrat",
              fontSize: 16,
              color: "#1d1d1d"
            },
            dateText: {
              fontFamily: "Montserrat",
              fontSize: 16,
              letterSpacing: 2
            },
            dateInput: {
              borderWidth: 0,
              height: null,
              alignItems: "flex-start"
            },
            btnTextConfirm: {
              color: "#363636",
              fontWeight: "400",
              fontFamily: "Montserrat",
              letterSpacing: 1.5,
            },
            btnTextCancel: {
              fontWeight: "400",
              fontFamily: "Montserrat",
              letterSpacing: 1.5,
            }
          }}
          onDateChange={onDateChange}
        />
      )
    }

    return <GDText textStyle = {{fontSize: 16}}>{children}</GDText>
  }

  render() {
    const {
      title,
      styles,
      right,
    } = this.props;

    return (
      <View style = {[infoStyles.container, styles, right && infoStyles.right]}>
        <GDText textStyle = {{fontSize: 10, marginBottom: 5}}>{title}</GDText>
        {this._renderChildren()}
      </View>
    )
  }
}

const infoStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    width: SCREEN_WIDTH / 2.7,
    flexWrap: "wrap"
  },
  right: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
})

export default InfoSection;
