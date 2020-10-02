var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _storiesOf=require("../../storybook/helpers/storiesOf");var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Banner/Banner.stories.js";var pageWidth=_reactNative.Platform.OS=='web'?400:_reactNative.Dimensions.get('window').width;var _default=(0,_storiesOf.storiesOf)('Components|Banner',module).addParameters({jest:['Banner']}).add('Single line',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_Header.default,{title:'Banner Single Line',__source:{fileName:_jsxFileName,lineNumber:16}}),_react.default.createElement(_.Banner,{actionItems:[{name:'Sign in',onPress:function onPress(){return console.log('sign in');}}],singleLine:true,message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',visible:true,style:{marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:18}}),_react.default.createElement(_.Banner,{actionItems:[{name:'Continue'}],singleLine:true,message:'New Action here',visible:true,style:{marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:27}}),_react.default.createElement(_.Banner,{actionItems:[{name:'Cancel'},{name:'Continue'}],singleLine:true,message:'Two Actions here',visible:true,__source:{fileName:_jsxFileName,lineNumber:34}}));}).add('Multi line',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:43}},_react.default.createElement(_Header.default,{title:'Banner Multi line',__source:{fileName:_jsxFileName,lineNumber:44}}),_react.default.createElement(_.Banner,{visible:true,actionItems:[{name:'Continue'},{name:'Sign in'}],message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',style:{marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:45}}),_react.default.createElement(_.Banner,{visible:true,actionItems:[{name:'Continue'},{name:'Sign in'}],message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',style:{marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:53}}),_react.default.createElement(_.Banner,{visible:true,actionItems:[{name:'Continue'},{name:'Sign in'}],media:_react.default.createElement(_.Avatar,{type:"icon",content:"notifications",size:40,contentColor:'white',color:'#42a5f5',__source:{fileName:_jsxFileName,lineNumber:66}}),message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',style:{marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:62}}),_react.default.createElement(_.Banner,{visible:true,actionItems:[{name:'Continue'},{name:'Sign in'}],media:_react.default.createElement(_.Avatar,{type:"icon",content:"favorite",size:40,contentColor:'white',color:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:84}}),message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',style:{marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:80}}));}).add('With Appbar',function(){return _react.default.createElement(_Container.default,{scroll:true,style:{padding:0},__source:{fileName:_jsxFileName,lineNumber:100}},_react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:101}},_react.default.createElement(_reactNative.View,{style:styles.body,__source:{fileName:_jsxFileName,lineNumber:102}},_react.default.createElement(_.Appbar,{barType:'normal',title:'Trivia App',navigation:'menu',actionItems:[{name:'search'},{name:'more-vert'}],__source:{fileName:_jsxFileName,lineNumber:103}}),_react.default.createElement(_.Banner,{visible:true,mobileLayout:true,actionItems:[{name:'Fix it'},{name:'Learn more'}],message:'There was a problem processsing a transaction on your card. ',__source:{fileName:_jsxFileName,lineNumber:109}}),_react.default.createElement(_reactNative.View,{style:{marginTop:20,alignItems:'center',paddingLeft:24,paddingRight:24},__source:{fileName:_jsxFileName,lineNumber:117}},_react.default.createElement(_.Heading,{type:4,style:{marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:124}},"Trivia Page Content"),_react.default.createElement(_.BodyText,{text:"Cassowaries cannot fly due to lack of chest bone that supports muscles used for flying.",__source:{fileName:_jsxFileName,lineNumber:127}})))));});exports.default=_default;var styles=_reactNative.StyleSheet.create({container:{zIndex:1,position:'relative'},body:{width:pageWidth,height:500}});