import {Panels, Panel, Header} from '@enact/sandstone/Panels';
import Item from '@enact/sandstone/Item';

const MainPanel = (...props) => {
	return (
		<Panels index={0}>
			<Panel>
				<Header 
					title="Deugdeugi Enact"
					subtitle="Deugdeugi Enact Subtitle"
				/>
				<Item>Enact Framework</Item>
			</Panel>
			<Panel>
				<Header 
					title="Enact Framework"
					subtitle="Deugdeugi Enact Subtitle"
				/>
				<Item>ActionGuide</Item>
			</Panel>
			<Panel
				title="Deugdeugi 2"
			>
			</Panel>
		</Panels>
	)
};

export default MainPanel;