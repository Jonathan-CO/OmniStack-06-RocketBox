import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  boxTitle: {
    // position: 'absolute',
    width:'100%',
    marginTop: 25,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },

  list: {
    // height: '80%',
    marginTop: 60,
    // backgroundColor:'red'
  },

  file: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },


  // file: {
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   justifyContent: 'center',
  //   paddingVertical: 20,
  // },



  separator: {
    height: 1,
    backgroundColor: '#EEE'
  },

  fileInfo: {
    flexDirection: 'row',
    // alignItems: 'baseline'
    alignItems: 'center'
  },

  fileTitle: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10
  },

  fileDate: {
    fontSize: 14,
    color: '#666'
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    backgroundColor: '#7159c1',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;