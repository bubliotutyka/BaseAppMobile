import {StyleSheet} from 'react-native';

// Local Import
import Color from '../../../assets/styles/Color';

const btnBox = {
  width: '100%',
  height: 50,
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: Color.lightGrey,
  },

  logoutBtn: {
    width: '100%',
    height: 100,
    paddingTop: 50,
  },

  debugBtn: {
    width: '100%',
    height: 75,
    paddingTop: 25,
  },
});

// Export
export default styles;