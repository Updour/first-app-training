import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	header:{
		backgroundColor: '#0000e6'
	},
	content:{
		backgroundColor: '#efefef'
	},
	login: {
	    flex: 1,
	    backgroundColor: 'white',
	    height: 400,
	    marginTop:90,
	    marginRight: 20,
	    marginLeft: 20,
	    borderRadius: 20,
	},
	button:{
	  	marginTop: 20,
	  	borderRadius: 20,
	  	marginLeft:15,
	  	marginRight: 15,
	  	backgroundColor: 'red'
	},
	name:{
	  	color: 'red',
	  	justifyContent:'center'
	},
	password:{
	  	color: 'red'
	},
	Lname:{
	  	borderWidth: 5,
	  	borderColor: 'blue',
	  	marginLeft:15,
	  	marginRight: 15
	},
	Lpassword:{
	  	borderWidth: 10,
	  	borderColor: 'blue',  	
	  	marginLeft:15,
	  	marginRight: 15
	},
	Ltext:{
    	borderRadius: 50,
    	marginTop:17,
    	alignContent: 'center',
       	backgroundColor: '#efefef',
       	marginLeft:150,	marginRight:150,	
    },
	fb:{
    	marginTop: 17,
	  	borderRadius: 20,
	  	marginLeft:15,
	  	marginRight: 15
    },
    google:{
    	marginTop: 15,
	  	borderRadius: 20,
	  	marginLeft:15,
	  	marginRight: 15,
	  	borderColor: '#000000'
    }
	
});

export default styles;
