import React from 'react';
import './style.css';

export default class Story extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			urls: [],
			page: 0,
			heading: '',
			headings: []
		};
	}

	componentDidMount() {
		this.parseUrls();
	}

	parseUrls = () => {
		let urls = [];
		let headings = [];
		for (const stories of storiesContent) {
			urls.push(stories.url);
			headings.push(stories.header.heading);
		}
		this.setState({
			urls: urls,
			url: urls[this.state.page],
			headings: headings,
			heading: headings[0]
		});
	};

	onClick = () => {
		let { urls, page, headings } = this.state;
		if (page < urls.length) {
			this.setState({ url: urls[page], page: page + 1, heading: headings[page] });
		} else {
			this.setState({ url: urls[0], page: 0, heading: headings[0] });
		}
	};

	render() {
		const { url, heading } = this.state;
		return (
			<>
				<div className="wrapper">
					<div
						className={'story--body'}
						style={{
							backgroundImage: `url(${url})`
						}}
					>
						<div className="progress-bar"></div>
						<div className="story--info">
							<img className="author--image" src="https://picsum.photos/1000/1000" alt="Author" />
							<span className={'story--author'}>{heading}</span>
						</div>
						<button onClick={this.onClick} />
					</div>
				</div>
			</>
		);
	}
}

const storiesContent = [
	{
		url:
			'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
		header: {
			heading: 'Mohit Karekar',
			subheading: 'Posted 32m ago',
			profileImage: 'https://picsum.photos/1080/1920'
		}
	},
	{
		url:
			'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
		header: {
			heading: 'mohitk05/react-insta-stories',
			subheading: 'Posted 32m ago',
			profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
		}
	},
	{
		url:
			'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
		header: {
			heading: 'mohitk05/react-insta-stories',
			subheading: 'Posted 32m ago',
			profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
		}
	}
];
