import {
  NavigationProp,
  RouteProp,
  useNavigation as useNavigationRN,
  useRoute as useRouteRN,
} from '@react-navigation/native';

import {RootScreenParams} from './interfaces';

export const useNavigation = <T extends keyof RootScreenParams>() =>
  useNavigationRN<NavigationProp<RootScreenParams, T>>();

export const useRoute = <T extends keyof RootScreenParams>() =>
  useRouteRN<RouteProp<RootScreenParams, T>>();
