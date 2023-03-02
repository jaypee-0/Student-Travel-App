import Auth from './Auth';
import Main from './Main';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../slices/authSlice';
import { ColorSchemeName } from 'react-native';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  let isTokenPresent = useSelector(selectToken);

  return isTokenPresent ? (
    <Main colorScheme={colorScheme} />
  ) : (
    <Auth colorScheme={colorScheme} />
  );
}