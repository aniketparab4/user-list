import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import PropTypes from 'prop-types';

export default class UserList extends Component {

  /*static propTypes = {
    data: PropTypes.array.isRequired,
  };

  static defaultProps = {
    data: [],
  }*/

  /* json format 

    {
      "name":{"title":"mrs","first":"isobel","last":"singh"},
      "location":{"street":"6380 princes street","city":"masterton","state":"manawatu-wanganui","postcode":64357},
      "email":"isobel.singh@example.com",
      "login":{
                "username":"lazygoose550",
                "phone":"(573)-126-3675",
                "id":{"name":"","value":1},
                "picture":{
                            "large":"https://randomuser.me/api/portraits/women/69.jpg",
                            "medium":"https://randomuser.me/api/portraits/med/women/69.jpg",
                            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/69.jpg"
                          },
                "nat":"NZ"
              }
    }  

  */

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      
      
    };
  }

  

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  _getRow = (item) => {
    console.log("item ="+ JSON.stringify(item));
    return (
      <ListItem
        roundAvatar
        title={`${item.name.first} ${item.name.last}`}
        subtitle={`${item.email}`}
        avatar={{ uri: item.picture.thumbnail }}
        containerStyle={{ borderBottomWidth: 0 }}
        onPress={console.log("onPress")}
        onLongPress={console.log("onLongPress")}
        fontFamily={this.props.fontFamily}
        fontSize={this.props.fontSize}
        chevronColor={this.props.chevronColor}
      />


    );
  };

  render() {
        
    console.log("fontFamily ="+ JSON.stringify(this.props.fontSize));

    return (
        
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>

          <FlatList
            data={this.props.data}
            renderItem={rowData => this._getRow(rowData.item)}                       
            keyExtractor={(x, i) => i}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}

          />
        </List>

        
    );
  }
}

/*{/*renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={`${item.email}`}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
                onPress={console.log("onPress")}
                onLongPress={console.log("onLongPress")}
                fontFamily={this.props.fontFamily}
                fontSize={this.props.fontSize}
                chevronColor={this.props.chevronColor}
              />
            )}*/
//}