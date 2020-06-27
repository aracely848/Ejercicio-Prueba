import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import firebase from "../../config/firebase";

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('task');
    this.unsubscribe = null;
    this.state = {
      points: [],
      selectedPoint: {},
      activeMarker: {},
      selectedPlace: {},
      selectedText: {},
      selectedId: {},
      showingInfoWindow: false
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const points = [];
    querySnapshot.forEach((doc) => {
      const { title, description, location } = doc.data();
      points.push({
        title,
        description,
        ...location
      });
    });
    this.setState({
      points
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onMarkerClick = (props, marker) => {
    console.log("The props are: ", marker);
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      selectedText: props,
      selectedId: props,
      showingInfoWindow: true
    });
  };

  displayMarkers = () => {
    return this.state.points.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
        onClick={(props, marker) => {
          this.setState({ selectedPoint: { ...store } });
          this.onMarkerClick(props, marker)
        }} />
    })
  }

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 4.624, lng: -74.063 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h3>{this.state.selectedPoint.title}</h3>
            <p>{this.state.selectedPoint.description}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(MapContainer)