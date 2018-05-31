import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	header:{
		backgroundColor: '#0000e6'
	},
	title: {
		alignItems:'center', 
		justifyContent:'center',
		color:'white'
	},
	content:{
		backgroundColor: '#efefef',
		flex: 1,
		backgroundColor: '#ccccff',
	},
	grid: {
		marginLeft: 7,
		marginRight: 7,
	},
	col: {
		backgroundColor: '#ccccff', 
		height: 140,	
	},
//for icon
	icon : {
		fontSize: 106,
		alignSelf:'center',
		color: '#3333ff'
	},
	contentIcon : {
		alignSelf:'center' 
	}
});

export default styles;
