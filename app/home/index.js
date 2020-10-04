import React, {useEffect,useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {GET_ALL_USER_INFO_REQUEST} from '../models/user/actions';

import Swiper, { assets as swiperAssets } from "../../src/Swiper";
import { rootResponse } from "../../src/services/root"


const assets: number[] = [...swiperAssets];
const fonts = {
  "SFProText-Bold": require("../../assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("../../assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
};

const mapStateToProps = (state, props) => {
  const {assetsProps} = state.user;

  return {assetsProps};
};

const AppNavigator = createAppContainer(
  createStackNavigator({
    Swiper: {
      screen: Swiper,
      navigationOptions: {
        title: "Swiper",
      },
    },
  })
);

const mapDispatchToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

const HomeView = ({assetsProps, getAllUserInfo, navigation}) => {
  useEffect(() => {
   getAllUserInfo();
  }, [getAllUserInfo]);


  return (
    <Swiper assetsProps={assetsProps}/>
  );
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);

export {Home};