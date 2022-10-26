import Button from '@enact/sandstone/Button';
import {Panel, Header} from '@enact/sandstone/Panels';
import { useCallback } from 'react';

const MainPanel = (...props) => {
	console.log("main props", props);

	const testClick = useCallback(() => {
		console.log("Click!");
	}, []);

	return (
		<Panel {...props}>
			<Header title="Hello world!" />
			<Button onClick={testClick}>Click me</Button>
		</Panel>
	)
};

export default MainPanel;
