import React from 'react';
import {
	SafeAreaProvider,
	SafeAreaView as RNSafeAreaView,
} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

const SafeAreaView = props => {
	const {style, children, ...rest} = props;
	const insets = useSafeAreaInsets();
	const headerHeight = useHeaderHeight();
	return Platform.OS === 'ios' ? (
		<SafeAreaProvider>
			<RNSafeAreaView style={style} {...rest}>
				{children}
			</RNSafeAreaView>
		</SafeAreaProvider>
	) : (
		<View
			style={{
				paddingTop: headerHeight + insets.top,
				...style,
			}}
			{...rest}>
			{children}
		</View>
	);
};

export default SafeAreaView;
