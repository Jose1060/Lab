import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textValue: "",
			count: 0,
		};
	}
	changeTextInput = (text) => {
		this.setState({
			textValue: text,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.text}>
					<Text>Ingrese edad</Text>
				</View>

				<TextInput
					style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
					onChange={this.changeTextInput(text)}
					value={this.state.textValue}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
