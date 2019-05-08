import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { HeaderBackButton } from 'react-navigation'

export default class BackButton extends React.PureComponent {
  render() {
    const { color, onPress, ...props } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {Platform.OS === 'ios' ?
          <HeaderBackButton /> :
          <View style={styles.backContainer}>
            <MaterialIcons
              name={'arrow-back'}
              size={26}
              color={this.props.color}
            />
          </View>
        }
        {
          Platform.OS === 'ios' &&
          this.props.title &&
          <Text style={styles.title}>{this.props.title}</Text>
        }
      </TouchableOpacity>
    )
  }
}

BackButton.propTypes = {
  title: PropTypes.string,
}

BackButton.defaultProps = {
  color: '#000',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    left: -15,
    color: '#0068ff',
    fontSize: 17,
  },
  backContainer: {
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
  }
})
