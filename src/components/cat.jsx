import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"Computer Science Student who is interested in Software Development and Cloud Computing. Trying to draw a career path with Java technologies and Back-end Development. I am also a licensed football referee at TFF",
		education:
			"Başiskele Anatolian Hig School: 2013-2017              Özyeğin University / Computer Science : 2017-2022",
		projects: [
			{
				projectName: "Bank Spring Boot",
				linkToGithub: "https://github.com/ErayOzdayioglu/BankSpringBoot"
			},
			{
				projectName: "Rakoon E-Commerce (Blockchain Payment)",
				linkToGithub: "https://github.com/ErayOzdayioglu/RakoonV2"
			},
			{
				projectName: "Restaurant Managament System",
				linkToGithub: "https://github.com/ErayOzdayioglu/RestaurantManagementSystem"
			},
			{
				projectName: "La Marmotte",
				linkToGithub: "https://github.com/ErayOzdayioglu/La_Marmotte"
			},


		],
		social: [
			{
				platform: "Linkedin",
				link: "https://www.linkedin.com/in/eray-ozdayioglu/"
			},

			{
				platform: "Github",
				link: "https://github.com/ErayOzdayioglu"
			},
			{
				platform: "Twitter",
				link:"https://twitter.com/eozdd"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about.txt") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "education.txt") {
				return <p className="result">{this.information.education}</p>;
			} else if (lower === "education") {
			} else if (lower === "projects.txt" || lower === "project.txt") {
				return (
					<React.Fragment>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
								
									<a href={everyProject.linkToGithub} target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "socials.txt" ||
				lower === "social.txt"
				
			) {
				return (
					<React.Fragment>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everySocial.link} target="_blank">
										{everySocial.platform}
									</a>

								</p>
							);
						})}
					</React.Fragment>
				);
			}
			else if (
			lower === "contactme.txt" ||
			lower === "contact_me.txt") {
				return (
					<React.Fragment>
							<p className="result">
									<a href="mailto:eray.ozdayioglu@ozu.edu.tr" target="_blank">
										Email : eray.ozdayioglu@ozu.edu.tr
									</a>
									
								</p>
					</React.Fragment>
				);
			}
			 else {
				return <p className="result">Opps wrong input</p>;
			}
		} else {
			return <p className="result">Opps wrong input</p>;
		}
	};
}

export default Cat;
